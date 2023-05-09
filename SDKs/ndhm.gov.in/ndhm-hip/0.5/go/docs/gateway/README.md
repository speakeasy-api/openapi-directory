# Gateway

### Available Operations

* [GetV05WellKnownOpenidConfiguration](#getv05wellknownopenidconfiguration) - Get openid configuration
* [GetV05Certs](#getv05certs) - Get certs for JWT verification
* [PostV05CareContextsOnDiscoverJSON](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [PostV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request
* [PostV05ConsentsHipOnNotifyJSON](#postv05consentshiponnotifyjson) - Consent notification
* [PostV05ConsentsHipOnNotifyRaw](#postv05consentshiponnotifyraw) - Consent notification
* [PostV05HealthInformationHipOnRequestJSON](#postv05healthinformationhiponrequestjson) - Health information data request
* [PostV05HealthInformationHipOnRequestRaw](#postv05healthinformationhiponrequestraw) - Health information data request
* [PostV05HealthInformationNotifyJSON](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [PostV05LinksLinkAddContextsJSON](#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkAddContextsRaw](#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkOnConfirmJSON](#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnConfirmRaw](#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnInitJSON](#postv05linkslinkoninitjson) - Response to patient's care context link request
* [PostV05LinksLinkOnInitRaw](#postv05linkslinkoninitraw) - Response to patient's care context link request
* [PostV05PatientsProfileOnShareJSON](#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [PostV05PatientsProfileOnShareRaw](#postv05patientsprofileonshareraw) - Response to patient's share profile request
* [PostV05PatientsSmsNotifyJSON](#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [PostV05PatientsSmsNotifyRaw](#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [PostV05SessionsJSON](#postv05sessionsjson) - Get access token
* [PostV05SessionsRaw](#postv05sessionsraw) - Get access token
* [PostV05UsersAuthConfirmJSON](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthOnNotifyJSON](#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [PostV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

## GetV05WellKnownOpenidConfiguration

Get openid configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gateway.GetV05WellKnownOpenidConfiguration(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenIDConfiguration != nil {
        // handle response
    }
}
```

## GetV05Certs

Get certs for JWT verification

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gateway.GetV05Certs(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Certs != nil {
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
    res, err := s.Gateway.PostV05CareContextsOnDiscoverJSON(ctx, operations.PostV05CareContextsOnDiscoverJSONRequest{
        Authorization: "corrupti",
        PatientDiscoveryResult: shared.PatientDiscoveryResult{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "distinctio",
            },
            Patient: &shared.PatientRepresentation{
                CareContexts: []shared.CareContextRepresentation{
                    shared.CareContextRepresentation{
                        Display: "unde",
                        ReferenceNumber: "nulla",
                    },
                    shared.CareContextRepresentation{
                        Display: "corrupti",
                        ReferenceNumber: "illum",
                    },
                    shared.CareContextRepresentation{
                        Display: "vel",
                        ReferenceNumber: "error",
                    },
                    shared.CareContextRepresentation{
                        Display: "deserunt",
                        ReferenceNumber: "suscipit",
                    },
                },
                Display: "iure",
                MatchedBy: []shared.IdentifierTypeEnum{
                    shared.IdentifierTypeEnumHealthID,
                    shared.IdentifierTypeEnumMobile,
                },
                ReferenceNumber: "delectus",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "467cc879-6ed1-451a-85df-c2ddf7cc78ca",
            },
            Timestamp: types.MustTimeFromString("2022-04-12T23:15:28.420Z"),
            TransactionID: "a928fc81-6742-4cb7-b920-5929396fea75",
        },
        XCmID: "iste",
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
    res, err := s.Gateway.PostV05CareContextsOnDiscoverRaw(ctx, operations.PostV05CareContextsOnDiscoverRawRequest{
        Authorization: "iure",
        RequestBody: []byte("saepe"),
        XCmID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHipOnNotifyJSON

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


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
    res, err := s.Gateway.PostV05ConsentsHipOnNotifyJSON(ctx, operations.PostV05ConsentsHipOnNotifyJSONRequest{
        Authorization: "architecto",
        HIPConsentNotificationResponse: shared.HIPConsentNotificationResponse{
            Acknowledgement: &shared.ConsentAcknowledgement{
                ConsentID: "<consent-artefact-id>",
                Status: shared.ConsentAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "est",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "aa2352c5-9559-407a-bf1a-3a2fa9467739",
            },
            Timestamp: types.MustTimeFromString("2022-08-30T15:03:11.112Z"),
        },
        XCmID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHipOnNotifyRaw

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


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
    res, err := s.Gateway.PostV05ConsentsHipOnNotifyRaw(ctx, operations.PostV05ConsentsHipOnNotifyRawRequest{
        Authorization: "laborum",
        RequestBody: []byte("animi"),
        XCmID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationHipOnRequestJSON

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


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
    res, err := s.Gateway.PostV05HealthInformationHipOnRequestJSON(ctx, operations.PostV05HealthInformationHipOnRequestJSONRequest{
        Authorization: "odit",
        HIPHealthInformationRequestAcknowledgement: shared.HIPHealthInformationRequestAcknowledgement{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "sequi",
            },
            HiRequest: &shared.HIPHealthInformationRequestAcknowledgementHiRequest{
                SessionStatus: shared.HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnumAcknowledged,
                TransactionID: "f5ad019d-a1ff-4e78-b097-b0074f15471b",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "5e6e13b9-9d48-48e1-a91e-450ad2abd442",
            },
            Timestamp: types.MustTimeFromString("2022-05-31T22:08:47.731Z"),
        },
        XCmID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationHipOnRequestRaw

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


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
    res, err := s.Gateway.PostV05HealthInformationHipOnRequestRaw(ctx, operations.PostV05HealthInformationHipOnRequestRawRequest{
        Authorization: "perferendis",
        RequestBody: []byte("magni"),
        XCmID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationNotifyJSON

API called by HIU and HIP during data-transfer. 
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] 


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
    res, err := s.Gateway.PostV05HealthInformationNotifyJSON(ctx, operations.PostV05HealthInformationNotifyJSONRequest{
        Authorization: "ipsam",
        HealthInformationNotification: shared.HealthInformationNotification{
            Notification: shared.HealthInformationNotificationNotification{
                ConsentID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
                DoneAt: types.MustTimeFromString("2022-11-08T13:10:11.700Z"),
                Notifier: shared.HealthInformationNotificationNotificationNotifier{
                    ID: sdk.String("tmh"),
                    Type: shared.HealthInformationNotificationNotificationNotifierTypeEnumHip.ToPointer(),
                },
                StatusNotification: shared.HealthInformationNotificationNotificationStatusNotification{
                    HipID: "max",
                    SessionStatus: shared.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnumFailed,
                    StatusResponses: []shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "facilis",
                            Description: sdk.String("tempore"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "labore",
                            Description: sdk.String("delectus"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                    },
                },
                TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-10-02T04:55:20.234Z"),
        },
        XCmID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationNotifyRaw

API called by HIU and HIP during data-transfer. 
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] 


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
    res, err := s.Gateway.PostV05HealthInformationNotifyRaw(ctx, operations.PostV05HealthInformationNotifyRawRequest{
        Authorization: "sint",
        RequestBody: []byte("aliquid"),
        XCmID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkAddContextsJSON

API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.  
  1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired


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
    res, err := s.Gateway.PostV05LinksLinkAddContextsJSON(ctx, operations.PostV05LinksLinkAddContextsJSONRequest{
        Authorization: "necessitatibus",
        PatientCareContextLinkRequest: shared.PatientCareContextLinkRequest{
            Link: shared.PatientCareContextLink{
                AccessToken: "sint",
                Patient: shared.PatientCareContextLinkPatient{
                    CareContexts: []shared.CareContextRepresentation{
                        shared.CareContextRepresentation{
                            Display: "dolor",
                            ReferenceNumber: "debitis",
                        },
                        shared.CareContextRepresentation{
                            Display: "a",
                            ReferenceNumber: "dolorum",
                        },
                        shared.CareContextRepresentation{
                            Display: "in",
                            ReferenceNumber: "in",
                        },
                    },
                    Display: "illum",
                    ReferenceNumber: "TMH-PUID-001",
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2020-11-26T01:41:04.216Z"),
        },
        XCmID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkAddContextsRaw

API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.  
  1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired


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
    res, err := s.Gateway.PostV05LinksLinkAddContextsRaw(ctx, operations.PostV05LinksLinkAddContextsRawRequest{
        Authorization: "magnam",
        RequestBody: []byte("cumque"),
        XCmID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnConfirmJSON

Returns a list of linked care contexts with patient reference number.
  1. **Validated and linked account reference number**
  2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
  3. **Verified that same Consent Manager which made the link request is sending the token**
  4. **Results of unmasked linked care contexts with patient reference number**


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
    res, err := s.Gateway.PostV05LinksLinkOnConfirmJSON(ctx, operations.PostV05LinksLinkOnConfirmJSONRequest{
        Authorization: "ea",
        PatientLinkResult: shared.PatientLinkResult{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "laborum",
            },
            Patient: &shared.PatientLinkResultPatient{
                CareContexts: []shared.CareContextRepresentation{
                    shared.CareContextRepresentation{
                        Display: "non",
                        ReferenceNumber: "occaecati",
                    },
                    shared.CareContextRepresentation{
                        Display: "enim",
                        ReferenceNumber: "accusamus",
                    },
                    shared.CareContextRepresentation{
                        Display: "delectus",
                        ReferenceNumber: "quidem",
                    },
                    shared.CareContextRepresentation{
                        Display: "provident",
                        ReferenceNumber: "nam",
                    },
                },
                Display: "id",
                ReferenceNumber: "blanditiis",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "8f3a6699-7074-4ba4-869b-6e2141959890",
            },
            Timestamp: types.MustTimeFromString("2021-01-23T15:47:23.464Z"),
        },
        XCmID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnConfirmRaw

Returns a list of linked care contexts with patient reference number.
  1. **Validated and linked account reference number**
  2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
  3. **Verified that same Consent Manager which made the link request is sending the token**
  4. **Results of unmasked linked care contexts with patient reference number**


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
    res, err := s.Gateway.PostV05LinksLinkOnConfirmRaw(ctx, operations.PostV05LinksLinkOnConfirmRawRequest{
        Authorization: "ad",
        RequestBody: []byte("eum"),
        XCmID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnInitJSON

Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
  1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
  2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
  3. **HIP should communicate the mode of authentication of a successful request**
  4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. **Patient reference number is invalid**
  2. **Care context reference numbers are invalid**


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
    res, err := s.Gateway.PostV05LinksLinkOnInitJSON(ctx, operations.PostV05LinksLinkOnInitJSONRequest{
        Authorization: "necessitatibus",
        PatientLinkReferenceResult: shared.PatientLinkReferenceResult{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "nemo",
            },
            Link: &shared.PatientLinkReferenceResultLink{
                AuthenticationType: shared.PatientLinkReferenceResultLinkAuthenticationTypeEnumDirect,
                Meta: &shared.Meta{
                    CommunicationExpiry: sdk.String("2019-12-30T12:01:55Z"),
                    CommunicationHint: sdk.String("iure"),
                    CommunicationMedium: shared.MetaCommunicationMediumEnumEmail,
                },
                ReferenceNumber: "debitis",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "4c8b711e-5b7f-4d2e-9028-921cddc69260",
            },
            Timestamp: types.MustTimeFromString("2022-01-07T08:38:36.147Z"),
            TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        },
        XCmID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnInitRaw

Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
  1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
  2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
  3. **HIP should communicate the mode of authentication of a successful request**
  4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. **Patient reference number is invalid**
  2. **Care context reference numbers are invalid**


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
    res, err := s.Gateway.PostV05LinksLinkOnInitRaw(ctx, operations.PostV05LinksLinkOnInitRawRequest{
        Authorization: "ipsam",
        RequestBody: []byte("voluptate"),
        XCmID: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsProfileOnShareJSON

Result of patient share profile request at HIP end.


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
    res, err := s.Gateway.PostV05PatientsProfileOnShareJSON(ctx, operations.PostV05PatientsProfileOnShareJSONRequest{
        Authorization: "nam",
        ShareProfileResult: shared.ShareProfileResult{
            Acknowledgement: shared.ShareProfileAcknowledgement{
                HealthID: "<username>@<suffix>",
                Status: shared.ShareProfileAcknowledgementStatusEnumSuccess,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "nemo",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "f0d30c5f-bb25-4870-9320-2c73d5fe9b90",
            },
            Timestamp: types.MustTimeFromString("2022-07-04T15:50:14.407Z"),
        },
        XCmID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsProfileOnShareRaw

Result of patient share profile request at HIP end.


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
    res, err := s.Gateway.PostV05PatientsProfileOnShareRaw(ctx, operations.PostV05PatientsProfileOnShareRawRequest{
        Authorization: "error",
        RequestBody: []byte("eaque"),
        XCmID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsSmsNotifyJSON

API to send SMS notifications to patient with custom deeplink.


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
    res, err := s.Gateway.PostV05PatientsSmsNotifyJSON(ctx, operations.PostV05PatientsSmsNotifyJSONRequest{
        Authorization: "rerum",
        PatientSMSNotifcationRequest: shared.PatientSMSNotifcationRequest{
            Notification: shared.PatientSMSNotifcationRequestNotification{
                CareContextInfo: "X-Ray on 22nd Dec",
                DeeplinkURL: sdk.String("https://link.to.health.records/ (Optional)"),
                Hip: shared.PatientSMSNotifcationRequestNotificationHip{
                    ID: "HIP_001",
                    Name: sdk.String("Max Healthcare (Optional)"),
                },
                PhoneNo: "+91-9999999999",
                ReceiverName: sdk.String("Ramesh Singh (Optional)"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-01-03T18:36:27.259Z"),
        },
        XCmID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsSmsNotifyRaw

API to send SMS notifications to patient with custom deeplink.


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
    res, err := s.Gateway.PostV05PatientsSmsNotifyRaw(ctx, operations.PostV05PatientsSmsNotifyRawRequest{
        Authorization: "modi",
        RequestBody: []byte("iste"),
        XCmID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SessionsJSON

Get access token

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gateway.PostV05SessionsJSON(ctx, shared.SessionRequest{
        ClientID: "deleniti",
        ClientSecret: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionResponse != nil {
        // handle response
    }
}
```

## PostV05SessionsRaw

Get access token

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gateway.PostV05SessionsRaw(ctx, []byte("provident"))
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionResponse != nil {
        // handle response
    }
}
```

## PostV05UsersAuthConfirmJSON

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


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
    res, err := s.Gateway.PostV05UsersAuthConfirmJSON(ctx, operations.PostV05UsersAuthConfirmJSONRequest{
        Authorization: "nobis",
        PatientAuthConfirmRequest: shared.PatientAuthConfirmRequest{
            Credential: shared.PatientAuthConfirmRequestCredential{
                AuthCode: sdk.String("libero"),
                Demographic: &shared.PatientDemographic{
                    DateOfBirth: "1972-02-29",
                    Gender: shared.PatientGenderEnumU,
                    Identifier: &shared.AuthConfirmIdentifier{
                        Type: shared.AuthConfirmIdentifierTypeEnumMobile,
                        Value: "+919800083232",
                    },
                    Name: "Janki Das",
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-06-12T16:50:10.090Z"),
            TransactionID: "aliquid",
        },
        XCmID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthConfirmRaw

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


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
    res, err := s.Gateway.PostV05UsersAuthConfirmRaw(ctx, operations.PostV05UsersAuthConfirmRawRequest{
        Authorization: "dolorem",
        RequestBody: []byte("dolor"),
        XCmID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthFetchModesJSON

This API is meant for identify supported authentication modes for a patient given a specific purpose


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
    res, err := s.Gateway.PostV05UsersAuthFetchModesJSON(ctx, operations.PostV05UsersAuthFetchModesJSONRequest{
        Authorization: "ipsum",
        PatientAuthModeQueryRequest: shared.PatientAuthModeQueryRequest{
            Query: shared.PatientAuthModeQueryRequestQuery{
                ID: "hinapatel79@ndhm",
                Purpose: shared.PatientAuthPurposeEnumKycAndLink,
                Requester: shared.PatientAuthModeQueryRequestQueryRequester{
                    ID: "100005",
                    Type: shared.PatientAuthModeQueryRequestQueryRequesterTypeEnumHiu,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-02-04T23:02:58.199Z"),
        },
        XCmID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthFetchModesRaw

This API is meant for identify supported authentication modes for a patient given a specific purpose


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
    res, err := s.Gateway.PostV05UsersAuthFetchModesRaw(ctx, operations.PostV05UsersAuthFetchModesRawRequest{
        Authorization: "reiciendis",
        RequestBody: []byte("amet"),
        XCmID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthInitJSON

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.


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
    res, err := s.Gateway.PostV05UsersAuthInitJSON(ctx, operations.PostV05UsersAuthInitJSONRequest{
        Authorization: "numquam",
        PatientAuthInitRequest: shared.PatientAuthInitRequest{
            Query: shared.PatientAuthInitRequestQuery{
                AuthMode: shared.AuthenticationModeEnumMobileOtp.ToPointer(),
                ID: "hinapatel@ndhm",
                Purpose: shared.PatientAuthPurposeEnumLink,
                Requester: shared.PatientAuthInitRequestQueryRequester{
                    ID: "100005",
                    Type: shared.PatientAuthInitRequestQueryRequesterTypeEnumHip,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-07-06T22:32:29.592Z"),
        },
        XCmID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthInitRaw

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.


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
    res, err := s.Gateway.PostV05UsersAuthInitRaw(ctx, operations.PostV05UsersAuthInitRawRequest{
        Authorization: "accusamus",
        RequestBody: []byte("quidem"),
        XCmID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnNotifyJSON

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


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
    res, err := s.Gateway.PostV05UsersAuthOnNotifyJSON(ctx, operations.PostV05UsersAuthOnNotifyJSONRequest{
        Authorization: "voluptas",
        PatientAuthNotificationAcknowledgement: shared.PatientAuthNotificationAcknowledgement{
            Acknowledgement: &shared.PatientAuthNotificationAcknowledgementAcknowledgement{
                Status: shared.PatientAuthNotificationAcknowledgementAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "eos",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95",
            },
            Timestamp: types.MustTimeFromString("2021-06-10T21:59:23.045Z"),
        },
        XCmID: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnNotifyRaw

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


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
    res, err := s.Gateway.PostV05UsersAuthOnNotifyRaw(ctx, operations.PostV05UsersAuthOnNotifyRawRequest{
        Authorization: "alias",
        RequestBody: []byte("at"),
        XCmID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
