# CmFacing

### Available Operations

* [PostV05CareContextsDiscoverJSON](#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [PostV05CareContextsDiscoverRaw](#postv05carecontextsdiscoverraw) - Discover patient's accounts
* [PostV05CareContextsOnDiscoverJSON](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [PostV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request
* [PostV05ConsentRequestsOnInitJSON](#postv05consentrequestsoninitjson) - Response to consent request
* [PostV05ConsentRequestsOnInitRaw](#postv05consentrequestsoninitraw) - Response to consent request
* [PostV05ConsentRequestsOnStatusJSON](#postv05consentrequestsonstatusjson) - Result of consent request status
* [PostV05ConsentRequestsOnStatusRaw](#postv05consentrequestsonstatusraw) - Result of consent request status
* [PostV05ConsentsHipNotifyJSON](#postv05consentshipnotifyjson) - Consent notification
* [PostV05ConsentsHipNotifyRaw](#postv05consentshipnotifyraw) - Consent notification
* [PostV05ConsentsHiuNotify](#postv05consentshiunotify) - Consent notification
* [PostV05ConsentsOnFetchJSON](#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [PostV05ConsentsOnFetchRaw](#postv05consentsonfetchraw) - Result of fetch request for a consent artefact
* [PostV05HealthInformationCmOnRequestJSON](#postv05healthinformationcmonrequestjson) - Health information data request
* [PostV05HealthInformationCmOnRequestRaw](#postv05healthinformationcmonrequestraw) - Health information data request
* [PostV05HealthInformationHipRequestJSON](#postv05healthinformationhiprequestjson) - Health information data request
* [PostV05HealthInformationHipRequestRaw](#postv05healthinformationhiprequestraw) - Health information data request
* [PostV05LinksLinkConfirmJSON](#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkConfirmRaw](#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkInitJSON](#postv05linkslinkinitjson) - Link patient's care contexts
* [PostV05LinksLinkInitRaw](#postv05linkslinkinitraw) - Link patient's care contexts
* [PostV05LinksLinkOnAddContextsJSON](#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [PostV05LinksLinkOnAddContextsRaw](#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context
* [PostV05PatientsOnFindJSON](#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [PostV05PatientsOnFindRaw](#postv05patientsonfindraw) - Identification result for a consent-manager user-id
* [PostV05PatientsProfileShareJSON](#postv05patientsprofilesharejson) - Share patient profile details
* [PostV05PatientsProfileShareRaw](#postv05patientsprofileshareraw) - Share patient profile details
* [PostV05PatientsSmsOnNotifyJSON](#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [PostV05PatientsSmsOnNotifyRaw](#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP
* [PostV05SubscriptionRequestsCmOnInit](#postv05subscriptionrequestscmoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [PostV05SubscriptionRequestsHiuNotifyJSON](#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionRequestsHiuNotifyRaw](#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionsHiuNotifyJSON](#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [PostV05SubscriptionsHiuNotifyRaw](#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription
* [PostV05UsersAuthNotifyJSON](#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthNotifyRaw](#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthOnConfirmJSON](#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnConfirmRaw](#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnFetchModesJSON](#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnFetchModesRaw](#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnInitJSON](#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [PostV05UsersAuthOnInitRaw](#postv05usersauthoninitraw) - Response to user authentication initialization from HIP

## PostV05CareContextsDiscoverJSON

Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
  1. **At least one of the verified identifier matches**
  2. **Name (fuzzy), gender matches**
  3. **If YoB was given, age band(+-2) matches**
  4. **If unverified identifiers were given, one of them matches**
  5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
  6. **If there would be still more than one patients (after ranking) error would be returned**
  7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
  8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05CareContextsDiscoverJSON(ctx, operations.PostV05CareContextsDiscoverJSONRequest{
        Authorization: "esse",
        PatientDiscoveryRequest: shared.PatientDiscoveryRequest{
            Patient: shared.PatientDiscoveryRequestPatient{
                Gender: shared.PatientGenderEnumO,
                ID: "<patient-id>@<consent-manager-id>",
                Name: "chandler bing",
                UnverifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumNdhmHealthNumber.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumMobile.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumNdhmHealthNumber.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumNdhmHealthNumber.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                },
                VerifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumMobile.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumNdhmHealthNumber.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                },
                YearOfBirth: 2000,
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2021-06-08T13:49:32.889Z"),
            TransactionID: "16742cb7-3920-4592-9396-fea7596eb10f",
        },
        XHipID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05CareContextsDiscoverRaw

Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
  1. **At least one of the verified identifier matches**
  2. **Name (fuzzy), gender matches**
  3. **If YoB was given, age band(+-2) matches**
  4. **If unverified identifiers were given, one of them matches**
  5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
  6. **If there would be still more than one patients (after ranking) error would be returned**
  7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
  8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05CareContextsDiscoverRaw(ctx, operations.PostV05CareContextsDiscoverRawRequest{
        Authorization: "mollitia",
        RequestBody: []byte("laborum"),
        XHipID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05CareContextsOnDiscoverJSON

Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be 
  1. **more than one definitive match for the given request** 
  2. **no verified identifer was specified**


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05CareContextsOnDiscoverJSON(ctx, operations.PostV05CareContextsOnDiscoverJSONRequest{
        Authorization: "dolorem",
        PatientDiscoveryResult: shared.PatientDiscoveryResult{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("explicabo"),
            },
            Patient: &shared.PatientRepresentation{
                CareContexts: []shared.CareContextRepresentation{
                    shared.CareContextRepresentation{
                        Display: "enim",
                        ReferenceNumber: "omnis",
                    },
                    shared.CareContextRepresentation{
                        Display: "nemo",
                        ReferenceNumber: "minima",
                    },
                    shared.CareContextRepresentation{
                        Display: "excepturi",
                        ReferenceNumber: "accusantium",
                    },
                    shared.CareContextRepresentation{
                        Display: "iure",
                        ReferenceNumber: "culpa",
                    },
                },
                Display: "doloribus",
                MatchedBy: []shared.IdentifierTypeEnum{
                    shared.IdentifierTypeEnumMobile,
                    shared.IdentifierTypeEnumNdhmHealthNumber,
                    shared.IdentifierTypeEnumMobile,
                    shared.IdentifierTypeEnumNdhmHealthNumber,
                },
                ReferenceNumber: "consequuntur",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "fa946773-9251-4aa5-ac3f-5ad019da1ffe",
            },
            Timestamp: types.MustTimeFromString("2022-06-28T23:41:25.321Z"),
            TransactionID: "f097b007-4f15-4471-b5e6-e13b99d488e1",
        },
        XCmID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05CareContextsOnDiscoverRaw

Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be 
  1. **more than one definitive match for the given request** 
  2. **no verified identifer was specified**


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05CareContextsOnDiscoverRaw(ctx, operations.PostV05CareContextsOnDiscoverRawRequest{
        Authorization: "sint",
        RequestBody: []byte("veritatis"),
        XCmID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsOnInitJSON

Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
  Reasons for error may be
  * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05ConsentRequestsOnInitJSON(ctx, operations.PostV05ConsentRequestsOnInitJSONRequest{
        Authorization: "incidunt",
        ConsentRequestInitResponse: shared.ConsentRequestInitResponse{
            ConsentRequest: &shared.ConsentRequestInitResponseConsentRequest{
                ID: "f29f0e59-8388-4698-9fe6-05db67aeac46",
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("consequatur"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "ad2abd44-2698-402d-902a-94bb4f63c969",
            },
            Timestamp: types.MustTimeFromString("2021-04-14T09:13:11.675Z"),
        },
        XHiuID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsOnInitRaw

Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
  Reasons for error may be
  * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05ConsentRequestsOnInitRaw(ctx, operations.PostV05ConsentRequestsOnInitRawRequest{
        Authorization: "dolor",
        RequestBody: []byte("debitis"),
        XHiuID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsOnStatusJSON

Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05ConsentRequestsOnStatusJSON(ctx, operations.PostV05ConsentRequestsOnStatusJSONRequest{
        Authorization: "dolorum",
        HIUConsentRequestStatus: shared.HIUConsentRequestStatus{
            ConsentRequest: &shared.HIUConsentRequestStatusConsentRequest{
                ConsentArtefacts: []shared.ConsentArtefactReference{
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                },
                ID: "<consent-request-id>",
                Status: shared.ConsentStatusEnumDenied,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("maiores"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "b14cd66a-e395-4efb-9ba8-8f3a66997074",
            },
            Timestamp: types.MustTimeFromString("2021-09-06T01:45:34.248Z"),
        },
        XHiuID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsOnStatusRaw

Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05ConsentRequestsOnStatusRaw(ctx, operations.PostV05ConsentRequestsOnStatusRawRequest{
        Authorization: "labore",
        RequestBody: []byte("suscipit"),
        XHiuID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHipNotifyJSON

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 
  3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05ConsentsHipNotifyJSON(ctx, operations.PostV05ConsentsHipNotifyJSONRequest{
        Authorization: "nobis",
        HIPConsentNotification: shared.HIPConsentNotification{
            Notification: shared.HIPConsentNotificationNotification{
                ConsentDetail: shared.HIPConsentNotificationNotificationConsentDetail{
                    CareContexts: []shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                        shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                        shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                    },
                    ConsentID: "e2141959-890a-4fa5-a3e2-516fe4c8b711",
                    ConsentManager: shared.HIPConsentNotificationNotificationConsentDetailConsentManager{
                        ID: "e5b7fd2e-d028-4921-8ddc-692601fb576b",
                    },
                    CreatedAt: types.MustTimeFromString("2022-02-18T18:29:26.833Z"),
                    HiTypes: []shared.HITypeEnumEnum{
                        shared.HITypeEnumEnumDiagnosticReport,
                        shared.HITypeEnumEnumOpConsultation,
                    },
                    Hip: shared.HIPConsentNotificationNotificationConsentDetailHIP{
                        ID: "d30c5fbb-2587-4053-a02c-73d5fe9b90c2",
                    },
                    Patient: shared.ConsentManagerPatientID{
                        ID: sdk.String("hinapatel79@ndhm"),
                    },
                    Permission: shared.Permission{
                        AccessMode: shared.PermissionAccessModeEnumQuery,
                        DataEraseAt: types.MustTimeFromString("2022-11-25T05:30:58.706Z"),
                        DateRange: shared.PermissionDateRange{
                            From: types.MustTimeFromString("2021-08-08T15:48:05.748Z"),
                            To: types.MustTimeFromString("2022-01-03T18:36:27.259Z"),
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: sdk.Int64(934214),
                            Unit: shared.PermissionFrequencyUnitEnumWeek.ToPointer(),
                            Value: sdk.Int64(613966),
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "dolorum",
                        RefURI: sdk.String("https://traumatic-neighbourhood.net"),
                        Text: "libero",
                    },
                    SchemaVersion: sdk.String("delectus"),
                },
                ConsentID: "48633323-f9b7-47f3-a410-0674ebf69280",
                Signature: "Signature of CM as defined in W3C standards; Base64 encoded",
                Status: shared.ConsentStatusEnumRevoked,
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-04-04T12:00:33.616Z"),
        },
        XHipID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHipNotifyRaw

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 
  3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05ConsentsHipNotifyRaw(ctx, operations.PostV05ConsentsHipNotifyRawRequest{
        Authorization: "iusto",
        RequestBody: []byte("voluptate"),
        XHipID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHiuNotify

Health information user will get notified about the consent request granted or denied, consent revoked, consent expired. 
1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.
2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>
3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>
4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05ConsentsHiuNotify(ctx, operations.PostV05ConsentsHiuNotifyRequest{
        Authorization: "deleniti",
        HIUConsentNotificationEvent: shared.HIUConsentNotificationEvent{
            Notification: shared.HIUConsentNotificationEventNotification{
                ConsentArtefacts: []shared.ConsentArtefactReference{
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                },
                ConsentRequestID: "<consent-request-id>",
                Status: shared.ConsentStatusEnumRevoked,
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2021-01-08T01:15:41.988Z"),
        },
        XHiuID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsOnFetchJSON

Must contain either consentDetail or error. Possible reason of errors are 
1. consentId passed through /fetch is invalid


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05ConsentsOnFetchJSON(ctx, operations.PostV05ConsentsOnFetchJSONRequest{
        Authorization: "ipsum",
        ConsentArtefactResponse: shared.ConsentArtefactResponse{
            Consent: &shared.ConsentArtefactResponseConsent{
                ConsentDetail: shared.ConsentArtefactResponseConsentConsentDetail{
                    CareContexts: []shared.ConsentArtefactResponseConsentConsentDetailCareContexts{
                        shared.ConsentArtefactResponseConsentConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                        shared.ConsentArtefactResponseConsentConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                    },
                    ConsentID: "ae4203ce-5e6a-495d-8a0d-446ce2af7a73",
                    ConsentManager: shared.ConsentArtefactResponseConsentConsentDetailConsentManager{
                        ID: "cf3be453-f870-4b32-ab5a-73429cdb1a84",
                    },
                    CreatedAt: types.MustTimeFromString("2022-10-29T03:47:52.981Z"),
                    HiTypes: []shared.HITypeEnumEnum{
                        shared.HITypeEnumEnumDischargeSummary,
                        shared.HITypeEnumEnumPrescription,
                        shared.HITypeEnumEnumPrescription,
                    },
                    Hip: shared.ConsentArtefactResponseConsentConsentDetailHip{
                        ID: "9d232271-5bf0-4cbb-9e31-b8b90f3443a1",
                    },
                    Hiu: shared.ConsentArtefactResponseConsentConsentDetailHiu{
                        ID: "108e0adc-f4b9-4218-b9fc-e953f73ef7fb",
                    },
                    Patient: shared.ConsentManagerPatientID{
                        ID: sdk.String("hinapatel79@ndhm"),
                    },
                    Permission: shared.Permission{
                        AccessMode: shared.PermissionAccessModeEnumStream,
                        DataEraseAt: types.MustTimeFromString("2022-05-15T21:16:33.535Z"),
                        DateRange: shared.PermissionDateRange{
                            From: types.MustTimeFromString("2021-04-02T18:28:29.036Z"),
                            To: types.MustTimeFromString("2022-09-16T01:08:31.616Z"),
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: sdk.Int64(844550),
                            Unit: shared.PermissionFrequencyUnitEnumYear.ToPointer(),
                            Value: sdk.Int64(194342),
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "natus",
                        RefURI: sdk.String("https://admired-weasel.info"),
                        Text: "nulla",
                    },
                    Requester: &shared.Requester{
                        Identifier: &shared.RequesterIdentifier{
                            System: sdk.String("https://www.mciindia.org"),
                            Type: sdk.String("REGNO"),
                            Value: sdk.String("MH1001"),
                        },
                        Name: "Dr. Manju",
                    },
                    SchemaVersion: sdk.String("fugit"),
                },
                Signature: "Signature of CM as defined in W3C standards; Base64 encoded",
                Status: shared.ConsentStatusEnumRequested,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("doloribus"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "7c70a456-26d4-4368-93f1-6d9f5fce6c55",
            },
            Timestamp: types.MustTimeFromString("2022-12-02T09:33:05.571Z"),
        },
        XHiuID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsOnFetchRaw

Must contain either consentDetail or error. Possible reason of errors are 
1. consentId passed through /fetch is invalid


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05ConsentsOnFetchRaw(ctx, operations.PostV05ConsentsOnFetchRawRequest{
        Authorization: "ea",
        RequestBody: []byte("quo"),
        XHiuID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationCmOnRequestJSON

Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05HealthInformationCmOnRequestJSON(ctx, operations.PostV05HealthInformationCmOnRequestJSONRequest{
        Authorization: "recusandae",
        HIUHealthInformationRequestResponse: shared.HIUHealthInformationRequestResponse{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("minima"),
            },
            HiRequest: &shared.HIUHealthInformationRequestResponseHiRequest{
                SessionStatus: shared.HIUHealthInformationRequestResponseHiRequestSessionStatusEnumRequested,
                TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            },
            RequestID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            Resp: shared.RequestReference{
                RequestID: "fb008c42-e141-4aac-b66c-8dd6b1442907",
            },
            Timestamp: types.MustTimeFromString("2022-07-06T21:41:34.842Z"),
        },
        XHiuID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationCmOnRequestRaw

Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05HealthInformationCmOnRequestRaw(ctx, operations.PostV05HealthInformationCmOnRequestRawRequest{
        Authorization: "esse",
        RequestBody: []byte("esse"),
        XHiuID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationHipRequestJSON

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05HealthInformationHipRequestJSON(ctx, operations.PostV05HealthInformationHipRequestJSONRequest{
        Authorization: "fuga",
        HIPHIRequest: shared.HIPHIRequest{
            HiRequest: shared.HIPHIRequestHiRequest{
                Consent: shared.Consent{
                    ID: "7bd466d2-8c10-4ab3-8dca-4251904e523c",
                },
                DataPushURL: "esse",
                DateRange: shared.DateRange{
                    From: types.MustTimeFromString("2022-11-13T03:35:18.820Z"),
                    To: types.MustTimeFromString("2021-05-27T03:34:33.852Z"),
                },
                KeyMaterial: shared.KeyMaterial{
                    CryptoAlg: "ECDH",
                    Curve: "Curve25519",
                    DhPublicKey: shared.KeyObject{
                        Expiry: types.MustTimeFromString("2022-12-03T21:51:40.661Z"),
                        KeyValue: "nihil",
                        Parameters: "Curve25519/32byte random key",
                    },
                    Nonce: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                },
            },
            RequestID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            Timestamp: types.MustTimeFromString("2021-03-27T14:55:59.726Z"),
            TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        },
        XHipID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationHipRequestRaw

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05HealthInformationHipRequestRaw(ctx, operations.PostV05HealthInformationHipRequestRawRequest{
        Authorization: "odio",
        RequestBody: []byte("occaecati"),
        XHipID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkConfirmJSON

API to submit the token that was sent by HIP during the link request. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05LinksLinkConfirmJSON(ctx, operations.PostV05LinksLinkConfirmJSONRequest{
        Authorization: "sapiente",
        LinkConfirmationRequest: shared.LinkConfirmationRequest{
            Confirmation: shared.LinkConfirmationRequestConfirmation{
                LinkRefNumber: "dolores",
                Token: "deserunt",
            },
            RequestID: "70c68828-2aa4-4825-a2f2-22e9817ee17c",
            Timestamp: types.MustTimeFromString("2021-03-31T16:39:55.446Z"),
        },
        XHipID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkConfirmRaw

API to submit the token that was sent by HIP during the link request. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05LinksLinkConfirmRaw(ctx, operations.PostV05LinksLinkConfirmRawRequest{
        Authorization: "quasi",
        RequestBody: []byte("saepe"),
        XHipID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkInitJSON

Request from CM to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05LinksLinkInitJSON(ctx, operations.PostV05LinksLinkInitJSONRequest{
        Authorization: "harum",
        PatientLinkReferenceRequest: shared.PatientLinkReferenceRequest{
            Patient: shared.PatientLinkReferenceRequestPatient{
                CareContexts: []shared.CareContext{
                    shared.CareContext{
                        ReferenceNumber: "rerum",
                    },
                    shared.CareContext{
                        ReferenceNumber: "occaecati",
                    },
                },
                ID: "hinapatel79@ndhm",
                ReferenceNumber: "TMH-PUID-001",
            },
            RequestID: "5bc0ab3c-20c4-4f37-89fd-871f99dd2efd",
            Timestamp: types.MustTimeFromString("2022-11-03T19:31:44.626Z"),
            TransactionID: "1aa6f1e6-74bd-4b04-b157-56082d68ea19",
        },
        XHipID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkInitRaw

Request from CM to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05LinksLinkInitRaw(ctx, operations.PostV05LinksLinkInitRawRequest{
        Authorization: "quasi",
        RequestBody: []byte("at"),
        XHipID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnAddContextsJSON

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05LinksLinkOnAddContextsJSON(ctx, operations.PostV05LinksLinkOnAddContextsJSONRequest{
        Authorization: "voluptate",
        PatientCareContextLinkResponse: shared.PatientCareContextLinkResponse{
            Acknowledgement: &shared.PatientCareContextLinkResponseAcknowledgement{
                Status: shared.PatientCareContextLinkResponseAcknowledgementStatusEnumSuccess,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("minima"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "1339d080-86a1-4840-b94c-26071f93f5f0",
            },
            Timestamp: types.MustTimeFromString("2022-09-09T19:48:26.093Z"),
        },
        XHipID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnAddContextsRaw

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05LinksLinkOnAddContextsRaw(ctx, operations.PostV05LinksLinkOnAddContextsRawRequest{
        Authorization: "repellendus",
        RequestBody: []byte("officia"),
        XHipID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsOnFindJSON

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05PatientsOnFindJSON(ctx, operations.PostV05PatientsOnFindJSONRequest{
        Authorization: "dignissimos",
        PatientIdentificationResponse: shared.PatientIdentificationResponse{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("asperiores"),
            },
            Patient: &shared.PatientIdentificationResponsePatient{
                ID: "hinapatel79@ndhm",
                Name: "Hina Patel",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "515cc413-aa63-4aae-8d67-864dbb675fd5",
            },
            Timestamp: types.MustTimeFromString("2021-10-22T16:49:10.196Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsOnFindRaw

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05PatientsOnFindRaw(ctx, operations.PostV05PatientsOnFindRawRequest{
        Authorization: "aperiam",
        RequestBody: []byte("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsProfileShareJSON

Request for sharing patient's profile details to HIP


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05PatientsProfileShareJSON(ctx, operations.PostV05PatientsProfileShareJSONRequest{
        Authorization: "consectetur",
        ShareProfileRequest: shared.ShareProfileRequest{
            Patient: shared.ShareProfileRequestPatient{
                HipCode: sdk.String("12345 (CounterId)"),
                UserDemographics: shared.ShareProfileRequestPatientUserDemographics{
                    Address: &shared.PatientAddress{
                        District: sdk.String("in"),
                        Line: sdk.String("exercitationem"),
                        Pincode: sdk.String("earum"),
                        State: sdk.String("facere"),
                    },
                    DayOfBirth: sdk.Int64(257233),
                    Gender: shared.PatientGenderEnumU,
                    HealthID: "<username>@<suffix>",
                    HealthIDNumber: "1111-1111-1111-11",
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                            Value: sdk.String("+919800083232"),
                        },
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumNdhmHealthNumber.ToPointer(),
                            Value: sdk.String("+919800083232"),
                        },
                    },
                    MonthOfBirth: sdk.Int64(904949),
                    Name: "Jane Doe",
                    YearOfBirth: 2000,
                },
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-02-10T06:30:04.103Z"),
        },
        XHipID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsProfileShareRaw

Request for sharing patient's profile details to HIP


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05PatientsProfileShareRaw(ctx, operations.PostV05PatientsProfileShareRawRequest{
        Authorization: "asperiores",
        RequestBody: []byte("adipisci"),
        XHipID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsSmsOnNotifyJSON

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05PatientsSmsOnNotifyJSON(ctx, operations.PostV05PatientsSmsOnNotifyJSONRequest{
        Authorization: "amet",
        PatientSMSNotifcationResponse: shared.PatientSMSNotifcationResponse{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("dignissimos"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "fe35b60e-b1ea-4426-955b-a3c28744ed53",
            },
            Status: shared.PatientSMSNotifcationResponseStatusEnumErrored.ToPointer(),
            Timestamp: types.MustTimeFromString("2021-11-21T14:04:14.152Z"),
        },
        XHipID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsSmsOnNotifyRaw

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05PatientsSmsOnNotifyRaw(ctx, operations.PostV05PatientsSmsOnNotifyRawRequest{
        Authorization: "nesciunt",
        RequestBody: []byte("culpa"),
        XHipID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsCmOnInit

This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05SubscriptionRequestsCmOnInit(ctx, operations.PostV05SubscriptionRequestsCmOnInitRequest{
        Authorization: "pariatur",
        HIUSubscriptionRequestReceipt: shared.HIUSubscriptionRequestReceipt{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("hic"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "5c0b2f2f-b7b1-494a-a76b-26916fe1f08f",
            },
            SubscriptionRequest: &shared.HIUSubscriptionRequestReceiptSubscriptionRequest{
                ID: "f29f0e59-8388-4698-9fe6-05db67aeac46",
            },
            Timestamp: types.MustTimeFromString("2022-11-07T19:19:54.306Z"),
        },
        XHiuID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsHiuNotifyJSON

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05SubscriptionRequestsHiuNotifyJSON(ctx, operations.PostV05SubscriptionRequestsHiuNotifyJSONRequest{
        Authorization: "eius",
        SubscriptionApprovalNotification: shared.SubscriptionApprovalNotification{
            Notification: shared.SubscriptionApprovalNotificationNotification{
                Status: shared.SubscriptionStatusEnumDenied,
                Subscription: &shared.HIUSubscription{
                    Hiu: shared.OrganizationRepresentation{
                        ID: "3698f447-f603-4e8b-845e-80ca55efd20e",
                    },
                    ID: "subscription Id",
                    Patient: shared.ConsentManagerPatientID{
                        ID: sdk.String("hinapatel79@ndhm"),
                    },
                    Sources: []shared.HIUSubscriptionContext{
                        shared.HIUSubscriptionContext{
                            Categories: []shared.SubscriptionCategoryEnum{
                                shared.SubscriptionCategoryEnumLink,
                                shared.SubscriptionCategoryEnumLink,
                            },
                            Hip: &shared.OrganizationRepresentation{
                                ID: "7e1858b6-a89f-4be3-a5aa-8e4824d0ab40",
                            },
                            Period: shared.SubscriptionPeriod{
                                From: types.MustTimeFromString("2022-08-17T23:19:52.079Z"),
                                To: types.MustTimeFromString("2022-06-21T08:29:37.931Z"),
                            },
                        },
                        shared.HIUSubscriptionContext{
                            Categories: []shared.SubscriptionCategoryEnum{
                                shared.SubscriptionCategoryEnumLink,
                                shared.SubscriptionCategoryEnumLink,
                                shared.SubscriptionCategoryEnumLink,
                            },
                            Hip: &shared.OrganizationRepresentation{
                                ID: "e5186206-5e90-44f3-b119-4b8abf603a79",
                            },
                            Period: shared.SubscriptionPeriod{
                                From: types.MustTimeFromString("2021-03-27T07:55:22.584Z"),
                                To: types.MustTimeFromString("2020-02-11T18:23:46.078Z"),
                            },
                        },
                    },
                },
                SubscriptionRequestID: sdk.String("request id of the subscription"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-12-13T12:36:43.531Z"),
        },
        XHiuID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsHiuNotifyRaw

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05SubscriptionRequestsHiuNotifyRaw(ctx, operations.PostV05SubscriptionRequestsHiuNotifyRawRequest{
        Authorization: "quidem",
        RequestBody: []byte("reprehenderit"),
        XHiuID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionsHiuNotifyJSON

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05SubscriptionsHiuNotifyJSON(ctx, operations.PostV05SubscriptionsHiuNotifyJSONRequest{
        Authorization: "fuga",
        HIUSubscriptionNotification: shared.HIUSubscriptionNotification{
            Event: shared.HIUSubscriptionNotificationEvent{
                Category: shared.SubscriptionCategoryEnumLink,
                Content: shared.HIUSubscriptionEventContent{
                    Context: []shared.EventCategoryDetail{
                        shared.EventCategoryDetail{
                            CareContext: shared.CareContextDefinition{
                                CareContextReference: "Episode1",
                                PatientReference: "batman@tmh",
                            },
                            HiTypes: []shared.HITypeEnumEnum{
                                shared.HITypeEnumEnumPrescription,
                                shared.HITypeEnumEnumOpConsultation,
                                shared.HITypeEnumEnumDiagnosticReport,
                            },
                        },
                        shared.EventCategoryDetail{
                            CareContext: shared.CareContextDefinition{
                                CareContextReference: "Episode1",
                                PatientReference: "batman@tmh",
                            },
                            HiTypes: []shared.HITypeEnumEnum{
                                shared.HITypeEnumEnumOpConsultation,
                                shared.HITypeEnumEnumDischargeSummary,
                                shared.HITypeEnumEnumPrescription,
                                shared.HITypeEnumEnumDiagnosticReport,
                            },
                        },
                        shared.EventCategoryDetail{
                            CareContext: shared.CareContextDefinition{
                                CareContextReference: "Episode1",
                                PatientReference: "batman@tmh",
                            },
                            HiTypes: []shared.HITypeEnumEnum{
                                shared.HITypeEnumEnumPrescription,
                                shared.HITypeEnumEnumDischargeSummary,
                                shared.HITypeEnumEnumDiagnosticReport,
                            },
                        },
                    },
                    Hip: shared.OrganizationRepresentation{
                        ID: "173d689e-ee95-426f-8d98-6e881ead4f0e",
                    },
                    Patient: shared.ConsentManagerPatientID{
                        ID: sdk.String("hinapatel79@ndhm"),
                    },
                },
                ID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
                Published: types.MustTimeFromString("2022-12-18T20:20:36.419Z"),
                SubscriptionID: "subscription Id",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-10-29T04:59:49.150Z"),
        },
        XHiuID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionsHiuNotifyRaw

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05SubscriptionsHiuNotifyRaw(ctx, operations.PostV05SubscriptionsHiuNotifyRawRequest{
        Authorization: "laboriosam",
        RequestBody: []byte("velit"),
        XHiuID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthNotifyJSON

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05UsersAuthNotifyJSON(ctx, operations.PostV05UsersAuthNotifyJSONRequest{
        Authorization: "molestias",
        PatientAuthNotification: shared.PatientAuthNotification{
            Auth: &shared.PatientAuthNotificationAuth{
                AccessToken: sdk.String("magnam"),
                Patient: &shared.PatientDemographicResponse{
                    Address: &shared.PatientAddress{
                        District: sdk.String("saepe"),
                        Line: sdk.String("consequuntur"),
                        Pincode: sdk.String("occaecati"),
                        State: sdk.String("officiis"),
                    },
                    Gender: shared.PatientGenderEnumO,
                    ID: "<patient-id>@<consent-manager-id>",
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumMobile.ToPointer(),
                            Value: sdk.String("+919800083232"),
                        },
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                            Value: sdk.String("+919800083232"),
                        },
                    },
                    Name: "Hina Patel",
                    YearOfBirth: 2000,
                },
                Status: shared.PatientAuthNotificationAuthStatusEnumDenied,
                TransactionID: "consequuntur",
                Validity: &shared.AccessTokenValidity{
                    Expiry: types.MustTimeFromString("2022-05-04T16:36:37.699Z"),
                    Limit: 1,
                    Purpose: shared.PatientAuthPurposeEnumKyc,
                    Requester: shared.PatientAuthRequester{
                        ID: "100005",
                        Type: shared.PatientAuthRequesterTypeEnumHip,
                    },
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-11-06T03:57:05.427Z"),
        },
        XHipID: "corporis",
        XHiuID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthNotifyRaw

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05UsersAuthNotifyRaw(ctx, operations.PostV05UsersAuthNotifyRawRequest{
        Authorization: "eveniet",
        RequestBody: []byte("non"),
        XHipID: "vero",
        XHiuID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnConfirmJSON

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05UsersAuthOnConfirmJSON(ctx, operations.PostV05UsersAuthOnConfirmJSONRequest{
        Authorization: "iure",
        PatientAuthConfirmResponse: shared.PatientAuthConfirmResponse{
            Auth: &shared.PatientAuthConfirmResponseAuth{
                AccessToken: sdk.String("ipsa"),
                Patient: &shared.PatientDemographicResponse{
                    Address: &shared.PatientAddress{
                        District: sdk.String("totam"),
                        Line: sdk.String("quae"),
                        Pincode: sdk.String("molestiae"),
                        State: sdk.String("eveniet"),
                    },
                    Gender: shared.PatientGenderEnumM,
                    ID: "<patient-id>@<consent-manager-id>",
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumMr.ToPointer(),
                            Value: sdk.String("+919800083232"),
                        },
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                            Value: sdk.String("+919800083232"),
                        },
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumMobile.ToPointer(),
                            Value: sdk.String("+919800083232"),
                        },
                    },
                    Name: "Hina Patel",
                    YearOfBirth: 2000,
                },
                Validity: &shared.AccessTokenValidity{
                    Expiry: types.MustTimeFromString("2021-07-27T21:33:31.354Z"),
                    Limit: 1,
                    Purpose: shared.PatientAuthPurposeEnumKyc,
                    Requester: shared.PatientAuthRequester{
                        ID: "100005",
                        Type: shared.PatientAuthRequesterTypeEnumHiu,
                    },
                },
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("ad"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "f0597a60-ff2a-454a-b1e9-4764a3e865e7",
            },
            Timestamp: types.MustTimeFromString("2022-04-29T15:23:46.044Z"),
        },
        XHipID: "eum",
        XHiuID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnConfirmRaw

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05UsersAuthOnConfirmRaw(ctx, operations.PostV05UsersAuthOnConfirmRawRequest{
        Authorization: "provident",
        RequestBody: []byte("aspernatur"),
        XHipID: "ullam",
        XHiuID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnFetchModesJSON

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05UsersAuthOnFetchModesJSON(ctx, operations.PostV05UsersAuthOnFetchModesJSONRequest{
        Authorization: "animi",
        PatientAuthModeQueryResponse: shared.PatientAuthModeQueryResponse{
            Auth: &shared.PatientAuthModeQueryResponseAuth{
                Modes: []shared.AuthenticationModeEnum{
                    shared.AuthenticationModeEnumDemographics,
                    shared.AuthenticationModeEnumDemographics,
                },
                Purpose: shared.PatientAuthPurposeEnumKycAndLink,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("ex"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "60ff57bf-aad4-4f9e-bc1b-4512c1032648",
            },
            Timestamp: types.MustTimeFromString("2020-09-06T11:21:50.907Z"),
        },
        XHipID: "eos",
        XHiuID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnFetchModesRaw

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05UsersAuthOnFetchModesRaw(ctx, operations.PostV05UsersAuthOnFetchModesRawRequest{
        Authorization: "eum",
        RequestBody: []byte("dicta"),
        XHipID: "minima",
        XHiuID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnInitJSON

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05UsersAuthOnInitJSON(ctx, operations.PostV05UsersAuthOnInitJSONRequest{
        Authorization: "cupiditate",
        PatientAuthInitResponse: shared.PatientAuthInitResponse{
            Auth: &shared.PatientAuthInitResponseAuth{
                Meta: &shared.AuthMeta{
                    Expiry: sdk.String("2019-12-30T12:01:55Z"),
                    Hint: sdk.String("provident"),
                },
                Mode: shared.AuthenticationModeEnumAadhaarOtp,
                TransactionID: "soluta",
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("illum"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "0e9fe6c6-32ca-43ae-9011-7996312fde04",
            },
            Timestamp: types.MustTimeFromString("2022-07-12T06:51:18.031Z"),
        },
        XHipID: "dicta",
        XHiuID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnInitRaw

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05UsersAuthOnInitRaw(ctx, operations.PostV05UsersAuthOnInitRawRequest{
        Authorization: "esse",
        RequestBody: []byte("praesentium"),
        XHipID: "maiores",
        XHiuID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
