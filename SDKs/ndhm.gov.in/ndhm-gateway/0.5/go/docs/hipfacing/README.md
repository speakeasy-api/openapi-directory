# HipFacing

### Available Operations

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
* [PostV05PatientsSmsNotifyJSON](#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [PostV05PatientsSmsNotifyRaw](#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [PostV05UsersAuthConfirmJSON](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthOnNotifyJSON](#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [PostV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

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
    res, err := s.HipFacing.PostV05ConsentsHipOnNotifyJSON(ctx, operations.PostV05ConsentsHipOnNotifyJSONRequest{
        Authorization: "dolor",
        HIPConsentNotificationResponse: shared.HIPConsentNotificationResponse{
            Acknowledgement: &shared.ConsentAcknowledgement{
                ConsentID: "<consent-artefact-id>",
                Status: shared.ConsentAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("minima"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "12624383-5bbc-405a-a3a4-5cefc5fde10a",
            },
            Timestamp: types.MustTimeFromString("2022-04-01T20:57:25.298Z"),
        },
        XCmID: "necessitatibus",
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
    res, err := s.HipFacing.PostV05ConsentsHipOnNotifyRaw(ctx, operations.PostV05ConsentsHipOnNotifyRawRequest{
        Authorization: "quia",
        RequestBody: []byte("dicta"),
        XCmID: "vel",
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
    res, err := s.HipFacing.PostV05HealthInformationHipOnRequestJSON(ctx, operations.PostV05HealthInformationHipOnRequestJSONRequest{
        Authorization: "perspiciatis",
        HIPHealthInformationRequestAcknowledgement: shared.HIPHealthInformationRequestAcknowledgement{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("ullam"),
            },
            HiRequest: &shared.HIPHealthInformationRequestAcknowledgementHiRequest{
                SessionStatus: shared.HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnumAcknowledged,
                TransactionID: "10019c6d-c5e3-4476-a799-bfbbe6949fb2",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "bb4ecae6-c3d5-4db3-adeb-d5daea4c506a",
            },
            Timestamp: types.MustTimeFromString("2021-08-27T18:58:54.647Z"),
        },
        XCmID: "est",
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
    res, err := s.HipFacing.PostV05HealthInformationHipOnRequestRaw(ctx, operations.PostV05HealthInformationHipOnRequestRawRequest{
        Authorization: "occaecati",
        RequestBody: []byte("labore"),
        XCmID: "quo",
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
    res, err := s.HipFacing.PostV05HealthInformationNotifyJSON(ctx, operations.PostV05HealthInformationNotifyJSONRequest{
        Authorization: "perferendis",
        HealthInformationNotification: shared.HealthInformationNotification{
            Notification: shared.HealthInformationNotificationNotification{
                ConsentID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
                DoneAt: types.MustTimeFromString("2022-08-08T06:48:42.276Z"),
                Notifier: shared.HealthInformationNotificationNotificationNotifier{
                    ID: "tmh",
                    Type: shared.HealthInformationNotificationNotificationNotifierTypeEnumHiu,
                },
                StatusNotification: shared.HealthInformationNotificationNotificationStatusNotification{
                    HipID: "max",
                    SessionStatus: shared.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnumTransferred,
                    StatusResponses: []shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "hic",
                            Description: sdk.String("nostrum"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "officiis",
                            Description: sdk.String("unde"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "nulla",
                            Description: sdk.String("error"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "mollitia",
                            Description: sdk.String("magnam"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                    },
                },
                TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-07-16T18:26:00.868Z"),
        },
        XCmID: "corrupti",
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
    res, err := s.HipFacing.PostV05HealthInformationNotifyRaw(ctx, operations.PostV05HealthInformationNotifyRawRequest{
        Authorization: "fuga",
        RequestBody: []byte("facere"),
        XCmID: "impedit",
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
    res, err := s.HipFacing.PostV05LinksLinkAddContextsJSON(ctx, operations.PostV05LinksLinkAddContextsJSONRequest{
        Authorization: "quasi",
        PatientCareContextLinkRequest: shared.PatientCareContextLinkRequest{
            Link: shared.PatientCareContextLink{
                AccessToken: "deserunt",
                Patient: shared.PatientCareContextLinkPatient{
                    CareContexts: []shared.CareContextRepresentation{
                        shared.CareContextRepresentation{
                            Display: "laboriosam",
                            ReferenceNumber: "doloremque",
                        },
                        shared.CareContextRepresentation{
                            Display: "voluptatem",
                            ReferenceNumber: "facere",
                        },
                        shared.CareContextRepresentation{
                            Display: "necessitatibus",
                            ReferenceNumber: "maxime",
                        },
                        shared.CareContextRepresentation{
                            Display: "consequatur",
                            ReferenceNumber: "eaque",
                        },
                    },
                    Display: "architecto",
                    ReferenceNumber: "TMH-PUID-001",
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2021-06-08T05:02:10.598Z"),
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
    res, err := s.HipFacing.PostV05LinksLinkAddContextsRaw(ctx, operations.PostV05LinksLinkAddContextsRawRequest{
        Authorization: "quae",
        RequestBody: []byte("magni"),
        XCmID: "officiis",
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
    res, err := s.HipFacing.PostV05LinksLinkOnConfirmJSON(ctx, operations.PostV05LinksLinkOnConfirmJSONRequest{
        Authorization: "sed",
        PatientLinkResult: shared.PatientLinkResult{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("impedit"),
            },
            Patient: &shared.PatientLinkResultPatient{
                CareContexts: []shared.CareContextRepresentation{
                    shared.CareContextRepresentation{
                        Display: "excepturi",
                        ReferenceNumber: "a",
                    },
                },
                Display: "maiores",
                ReferenceNumber: "laudantium",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "f0f816ff-3477-4c13-a902-c14125b0960a",
            },
            Timestamp: types.MustTimeFromString("2022-08-07T09:12:40.710Z"),
        },
        XCmID: "quas",
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
    res, err := s.HipFacing.PostV05LinksLinkOnConfirmRaw(ctx, operations.PostV05LinksLinkOnConfirmRawRequest{
        Authorization: "veritatis",
        RequestBody: []byte("ullam"),
        XCmID: "quae",
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
    res, err := s.HipFacing.PostV05LinksLinkOnInitJSON(ctx, operations.PostV05LinksLinkOnInitJSONRequest{
        Authorization: "similique",
        PatientLinkReferenceResult: shared.PatientLinkReferenceResult{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("quam"),
            },
            Link: &shared.PatientLinkReferenceResultLink{
                AuthenticationType: shared.PatientLinkReferenceResultLinkAuthenticationTypeEnumDirect,
                Meta: &shared.Meta{
                    CommunicationExpiry: sdk.String("2019-12-30T12:01:55Z"),
                    CommunicationHint: sdk.String("deserunt"),
                    CommunicationMedium: shared.MetaCommunicationMediumEnumEmail.ToPointer(),
                },
                ReferenceNumber: "omnis",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "23c5949f-83f3-450c-b876-ffb901c6ecbb",
            },
            Timestamp: types.MustTimeFromString("2022-01-31T12:51:31.220Z"),
            TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        },
        XCmID: "fugit",
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
    res, err := s.HipFacing.PostV05LinksLinkOnInitRaw(ctx, operations.PostV05LinksLinkOnInitRawRequest{
        Authorization: "eius",
        RequestBody: []byte("sequi"),
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
    res, err := s.HipFacing.PostV05PatientsSmsNotifyJSON(ctx, operations.PostV05PatientsSmsNotifyJSONRequest{
        Authorization: "asperiores",
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
            Timestamp: types.MustTimeFromString("2022-07-02T11:48:44.470Z"),
        },
        XCmID: "sint",
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
    res, err := s.HipFacing.PostV05PatientsSmsNotifyRaw(ctx, operations.PostV05PatientsSmsNotifyRawRequest{
        Authorization: "repellat",
        RequestBody: []byte("a"),
        XCmID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.HipFacing.PostV05UsersAuthConfirmJSON(ctx, operations.PostV05UsersAuthConfirmJSONRequest{
        Authorization: "maiores",
        PatientAuthConfirmRequest: shared.PatientAuthConfirmRequest{
            Credential: shared.PatientAuthConfirmRequestCredential{
                AuthCode: sdk.String("itaque"),
                Demographic: &shared.PatientDemographic{
                    DateOfBirth: "1972-02-29",
                    Gender: shared.PatientGenderEnumU,
                    Identifier: &shared.AuthConfirmIdentifier{
                        Type: shared.AuthConfirmIdentifierTypeEnumMobile,
                        Value: "+919800083232",
                    },
                    Name: "janki das",
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-04-13T20:37:07.767Z"),
            TransactionID: "velit",
        },
        XCmID: "officiis",
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
    res, err := s.HipFacing.PostV05UsersAuthConfirmRaw(ctx, operations.PostV05UsersAuthConfirmRawRequest{
        Authorization: "enim",
        RequestBody: []byte("officia"),
        XCmID: "saepe",
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
    res, err := s.HipFacing.PostV05UsersAuthFetchModesJSON(ctx, operations.PostV05UsersAuthFetchModesJSONRequest{
        Authorization: "eum",
        PatientAuthModeQueryRequest: shared.PatientAuthModeQueryRequest{
            Query: shared.PatientAuthModeQueryRequestQuery{
                ID: "hinapatel79@ndhm",
                Purpose: shared.PatientAuthPurposeEnumKycAndLink,
                Requester: shared.PatientAuthModeQueryRequestQueryRequester{
                    ID: "100005",
                    Type: shared.PatientAuthModeQueryRequestQueryRequesterTypeEnumHip,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2021-06-17T19:21:18.605Z"),
        },
        XCmID: "quasi",
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
    res, err := s.HipFacing.PostV05UsersAuthFetchModesRaw(ctx, operations.PostV05UsersAuthFetchModesRawRequest{
        Authorization: "blanditiis",
        RequestBody: []byte("eius"),
        XCmID: "quisquam",
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
    res, err := s.HipFacing.PostV05UsersAuthInitJSON(ctx, operations.PostV05UsersAuthInitJSONRequest{
        Authorization: "eos",
        PatientAuthInitRequest: shared.PatientAuthInitRequest{
            Query: shared.PatientAuthInitRequestQuery{
                AuthMode: shared.AuthenticationModeEnumDemographics.ToPointer(),
                ID: "hinapatel@ndhm",
                Purpose: shared.PatientAuthPurposeEnumKyc,
                Requester: shared.PatientAuthRequester{
                    ID: "100005",
                    Type: shared.PatientAuthRequesterTypeEnumHiu,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-09-13T06:17:44.251Z"),
        },
        XCmID: "reprehenderit",
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
    res, err := s.HipFacing.PostV05UsersAuthInitRaw(ctx, operations.PostV05UsersAuthInitRawRequest{
        Authorization: "quod",
        RequestBody: []byte("quos"),
        XCmID: "corrupti",
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
    res, err := s.HipFacing.PostV05UsersAuthOnNotifyJSON(ctx, operations.PostV05UsersAuthOnNotifyJSONRequest{
        Authorization: "amet",
        PatientAuthNotificationAcknowledgement: shared.PatientAuthNotificationAcknowledgement{
            Acknowledgement: &shared.PatientAuthNotificationAcknowledgementAcknowledgement{
                Status: shared.PatientAuthNotificationAcknowledgementAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("amet"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "a40e1942-f32e-4550-9575-6f5d56d0bd0a",
            },
            Timestamp: types.MustTimeFromString("2022-07-18T03:51:40.510Z"),
        },
        XCmID: "possimus",
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
    res, err := s.HipFacing.PostV05UsersAuthOnNotifyRaw(ctx, operations.PostV05UsersAuthOnNotifyRawRequest{
        Authorization: "repellat",
        RequestBody: []byte("repudiandae"),
        XCmID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
