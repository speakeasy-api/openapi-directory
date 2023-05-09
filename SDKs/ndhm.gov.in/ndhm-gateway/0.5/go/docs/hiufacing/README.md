# HiuFacing

### Available Operations

* [PostV05ConsentRequestsInitJSON](#postv05consentrequestsinitjson) - Create consent request
* [PostV05ConsentRequestsInitRaw](#postv05consentrequestsinitraw) - Create consent request
* [PostV05ConsentRequestsStatusJSON](#postv05consentrequestsstatusjson) - Get consent request status
* [PostV05ConsentRequestsStatusRaw](#postv05consentrequestsstatusraw) - Get consent request status
* [PostV05ConsentsFetch](#postv05consentsfetch) - Get consent artefact
* [PostV05ConsentsHiuOnNotify](#postv05consentshiuonnotify) - Consent notification
* [PostV05HealthInformationCmRequestJSON](#postv05healthinformationcmrequestjson) - Health information data request
* [PostV05HealthInformationCmRequestRaw](#postv05healthinformationcmrequestraw) - Health information data request
* [PostV05HealthInformationNotifyJSON](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [PostV05PatientsFindJSON](#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [PostV05PatientsFindRaw](#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [PostV05SubscriptionRequestsCmInitJSON](#postv05subscriptionrequestscminitjson) - Request for subscription
* [PostV05SubscriptionRequestsCmInitRaw](#postv05subscriptionrequestscminitraw) - Request for subscription
* [PostV05SubscriptionRequestsHiuOnNotify](#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [PostV05SubscriptionsHiuOnNotify](#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [PostV05UsersAuthConfirmJSON](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthOnNotifyJSON](#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [PostV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

## PostV05ConsentRequestsInitJSON

Creates a consent request to get data about a patient by HIU user.

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
    res, err := s.HiuFacing.PostV05ConsentRequestsInitJSON(ctx, operations.PostV05ConsentRequestsInitJSONRequest{
        Authorization: "adipisci",
        ConsentRequest: shared.ConsentRequest{
            Consent: shared.ConsentRequestConsent{
                CareContexts: []shared.CareContextDefinition{
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                },
                HiTypes: []shared.HITypeEnumEnum{
                    shared.HITypeEnumEnumPrescription,
                    shared.HITypeEnumEnumDiagnosticReport,
                    shared.HITypeEnumEnumPrescription,
                },
                Hip: &shared.ConsentRequestConsentHip{
                    ID: "2cba3f89-41ae-4bc0-b80a-6924d3b2ecfc",
                },
                Hiu: shared.ConsentRequestConsentHiu{
                    ID: "c8f89501-0f5d-4d3d-afa1-804e54c82f16",
                },
                Patient: shared.ConsentRequestConsentPatient{
                    ID: sdk.String("hinapatel79@ndhm"),
                },
                Permission: shared.Permission{
                    AccessMode: shared.PermissionAccessModeEnumQuery,
                    DataEraseAt: types.MustTimeFromString("2022-07-23T10:18:08.861Z"),
                    DateRange: shared.PermissionDateRange{
                        From: types.MustTimeFromString("2022-10-08T04:54:26.161Z"),
                        To: types.MustTimeFromString("2021-06-04T02:54:37.855Z"),
                    },
                    Frequency: shared.PermissionFrequency{
                        Repeats: sdk.Int64(527715),
                        Unit: shared.PermissionFrequencyUnitEnumDay.ToPointer(),
                        Value: sdk.Int64(237523),
                    },
                },
                Purpose: shared.UsePurpose{
                    Code: "recusandae",
                    RefURI: sdk.String("http://lovely-dialect.biz"),
                    Text: "voluptatum",
                },
                Requester: shared.Requester{
                    Identifier: &shared.RequesterIdentifier{
                        System: sdk.String("https://www.mciindia.org"),
                        Type: sdk.String("REGNO"),
                        Value: sdk.String("MH1001"),
                    },
                    Name: "Dr. Manju",
                },
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-04-19T08:03:50.767Z"),
        },
        XCmID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsInitRaw

Creates a consent request to get data about a patient by HIU user.

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
    res, err := s.HiuFacing.PostV05ConsentRequestsInitRaw(ctx, operations.PostV05ConsentRequestsInitRawRequest{
        Authorization: "tenetur",
        RequestBody: []byte("autem"),
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

## PostV05ConsentRequestsStatusJSON

Get status of consent request done previously

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
    res, err := s.HiuFacing.PostV05ConsentRequestsStatusJSON(ctx, operations.PostV05ConsentRequestsStatusJSONRequest{
        Authorization: "totam",
        ConsentRequestStatusRequest: shared.ConsentRequestStatusRequest{
            ConsentRequestID: "porro",
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-08-30T16:24:51.367Z"),
        },
        XCmID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsStatusRaw

Get status of consent request done previously

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
    res, err := s.HiuFacing.PostV05ConsentRequestsStatusRaw(ctx, operations.PostV05ConsentRequestsStatusRawRequest{
        Authorization: "voluptas",
        RequestBody: []byte("animi"),
        XCmID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsFetch

Get consent artefact

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
    res, err := s.HiuFacing.PostV05ConsentsFetch(ctx, operations.PostV05ConsentsFetchRequest{
        Authorization: "alias",
        ConsentFetchRequest: shared.ConsentFetchRequest{
            ConsentID: "fuga",
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-09-14T23:59:09.971Z"),
        },
        XCmID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


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
    res, err := s.HiuFacing.PostV05ConsentsHiuOnNotify(ctx, operations.PostV05ConsentsHiuOnNotifyRequest{
        Authorization: "aliquam",
        HIUConsentNotificationResponse: shared.HIUConsentNotificationResponse{
            Acknowledgement: []shared.ConsentAcknowledgement{
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumOk,
                },
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumUnknown,
                },
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumUnknown,
                },
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("occaecati"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "9171b51c-1bdb-41cf-8b88-8ebdfc4ccca9",
            },
            Timestamp: types.MustTimeFromString("2021-07-19T09:34:11.767Z"),
        },
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

## PostV05HealthInformationCmRequestJSON

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


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
    res, err := s.HiuFacing.PostV05HealthInformationCmRequestJSON(ctx, operations.PostV05HealthInformationCmRequestJSONRequest{
        Authorization: "esse",
        HIRequest: shared.HIRequest{
            HiRequest: shared.HIRequestHIRequest{
                Consent: shared.Consent{
                    ID: "fc0b2dce-1087-43e4-ab00-6d678878ba85",
                },
                DataPushURL: "atque",
                DateRange: shared.DateRange{
                    From: types.MustTimeFromString("2022-05-02T11:12:42.558Z"),
                    To: types.MustTimeFromString("2022-06-24T07:51:44.560Z"),
                },
                KeyMaterial: shared.KeyMaterial{
                    CryptoAlg: "ECDH",
                    Curve: "Curve25519",
                    DhPublicKey: shared.KeyObject{
                        Expiry: types.MustTimeFromString("2022-12-09T07:44:01.941Z"),
                        KeyValue: "quas",
                        Parameters: "Curve25519/32byte random key",
                    },
                    Nonce: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                },
            },
            RequestID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            Timestamp: types.MustTimeFromString("2022-01-17T18:12:26.163Z"),
        },
        XCmID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationCmRequestRaw

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


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
    res, err := s.HiuFacing.PostV05HealthInformationCmRequestRaw(ctx, operations.PostV05HealthInformationCmRequestRawRequest{
        Authorization: "sapiente",
        RequestBody: []byte("saepe"),
        XCmID: "delectus",
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
    res, err := s.HiuFacing.PostV05HealthInformationNotifyJSON(ctx, operations.PostV05HealthInformationNotifyJSONRequest{
        Authorization: "officia",
        HealthInformationNotification: shared.HealthInformationNotification{
            Notification: shared.HealthInformationNotificationNotification{
                ConsentID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
                DoneAt: types.MustTimeFromString("2021-06-22T09:01:11.589Z"),
                Notifier: shared.HealthInformationNotificationNotificationNotifier{
                    ID: "tmh",
                    Type: shared.HealthInformationNotificationNotificationNotifierTypeEnumHip,
                },
                StatusNotification: shared.HealthInformationNotificationNotificationStatusNotification{
                    HipID: "max",
                    SessionStatus: shared.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnumTransferred,
                    StatusResponses: []shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "quia",
                            Description: sdk.String("officiis"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "mollitia",
                            Description: sdk.String("cumque"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "quis",
                            Description: sdk.String("enim"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "eum",
                            Description: sdk.String("nemo"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                    },
                },
                TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-05-25T14:42:32.888Z"),
        },
        XCmID: "sit",
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
    res, err := s.HiuFacing.PostV05HealthInformationNotifyRaw(ctx, operations.PostV05HealthInformationNotifyRawRequest{
        Authorization: "odio",
        RequestBody: []byte("minus"),
        XCmID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsFindJSON

This API is meant for identify to patient given her consent-manager-user-id


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
    res, err := s.HiuFacing.PostV05PatientsFindJSON(ctx, operations.PostV05PatientsFindJSONRequest{
        Authorization: "recusandae",
        PatientIdentificationRequest: shared.PatientIdentificationRequest{
            Query: shared.PatientIdentificationRequestQuery{
                Patient: shared.PatientIdentificationRequestQueryPatient{
                    ID: sdk.String("hinapatel79@ndhm"),
                },
                Requester: shared.PatientIdentificationRequestQueryRequester{
                    ID: sdk.String("100005"),
                    Type: shared.PatientIdentificationRequestQueryRequesterTypeEnumHip.ToPointer(),
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-10-06T14:31:03.611Z"),
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

## PostV05PatientsFindRaw

This API is meant for identify to patient given her consent-manager-user-id


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
    res, err := s.HiuFacing.PostV05PatientsFindRaw(ctx, operations.PostV05PatientsFindRawRequest{
        Authorization: "sit",
        RequestBody: []byte("aliquid"),
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

## PostV05SubscriptionRequestsCmInitJSON

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

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
    res, err := s.HiuFacing.PostV05SubscriptionRequestsCmInitJSON(ctx, operations.PostV05SubscriptionRequestsCmInitJSONRequest{
        Authorization: "sed",
        SubscriptionRequest: shared.SubscriptionRequest{
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Subscription: shared.SubscriptionRequestSubscription{
                Categories: []shared.SubscriptionCategoryEnum{
                    shared.SubscriptionCategoryEnumLink,
                    shared.SubscriptionCategoryEnumLink,
                    shared.SubscriptionCategoryEnumLink,
                },
                Hips: []shared.OrganizationRepresentation{
                    shared.OrganizationRepresentation{
                        ID: "3fa4a41c-480d-43f2-932a-f03102d514f4",
                    },
                },
                Hiu: shared.OrganizationRepresentation{
                    ID: "cc6f18bf-9621-4a6a-8f77-a87ee3e4be75",
                },
                Patient: shared.ConsentManagerPatientID{
                    ID: sdk.String("hinapatel79@ndhm"),
                },
                Period: shared.SubscriptionPeriod{
                    From: types.MustTimeFromString("2022-03-25T08:30:08.963Z"),
                    To: types.MustTimeFromString("2022-08-29T22:58:29.382Z"),
                },
                Purpose: shared.UsePurpose{
                    Code: "facilis",
                    RefURI: sdk.String("http://firsthand-engine.com"),
                    Text: "praesentium",
                },
            },
            Timestamp: types.MustTimeFromString("2022-05-03T03:35:37.503Z"),
        },
        XCmID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsCmInitRaw

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

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
    res, err := s.HiuFacing.PostV05SubscriptionRequestsCmInitRaw(ctx, operations.PostV05SubscriptionRequestsCmInitRawRequest{
        Authorization: "libero",
        RequestBody: []byte("iste"),
        XCmID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsHiuOnNotify

This API is called by HIU as acknowledgement to subscription request relevant notifications. 


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
    res, err := s.HiuFacing.PostV05SubscriptionRequestsHiuOnNotify(ctx, operations.PostV05SubscriptionRequestsHiuOnNotifyRequest{
        Authorization: "minus",
        HIUSubscriptionRequestNotificationAcknowledgement: shared.HIUSubscriptionRequestNotificationAcknowledgement{
            Acknowledgement: &shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement{
                Status: shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnumOk,
                SubscriptionRequestID: "subscription Id",
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("temporibus"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "975e0e84-19d8-4f84-b144-f3e07edcc4aa",
            },
            Timestamp: types.MustTimeFromString("2022-01-11T19:12:20.875Z"),
        },
        XCmID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


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
    res, err := s.HiuFacing.PostV05SubscriptionsHiuOnNotify(ctx, operations.PostV05SubscriptionsHiuOnNotifyRequest{
        Authorization: "porro",
        HIUSubscriptionNotificationAcknowledgment: shared.HIUSubscriptionNotificationAcknowledgment{
            Acknowledgement: &shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgement{
                EventID: "subscription event Id",
                Status: shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("nobis"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "d905a972-e056-4728-a27b-2d309470bf7a",
            },
            Timestamp: types.MustTimeFromString("2022-01-14T01:36:15.458Z"),
        },
        XCmID: "culpa",
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
    res, err := s.HiuFacing.PostV05UsersAuthConfirmJSON(ctx, operations.PostV05UsersAuthConfirmJSONRequest{
        Authorization: "voluptatum",
        PatientAuthConfirmRequest: shared.PatientAuthConfirmRequest{
            Credential: shared.PatientAuthConfirmRequestCredential{
                AuthCode: sdk.String("iusto"),
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
            Timestamp: types.MustTimeFromString("2021-11-17T00:24:00.790Z"),
            TransactionID: "non",
        },
        XCmID: "ullam",
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
    res, err := s.HiuFacing.PostV05UsersAuthConfirmRaw(ctx, operations.PostV05UsersAuthConfirmRawRequest{
        Authorization: "laborum",
        RequestBody: []byte("voluptas"),
        XCmID: "doloribus",
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
    res, err := s.HiuFacing.PostV05UsersAuthFetchModesJSON(ctx, operations.PostV05UsersAuthFetchModesJSONRequest{
        Authorization: "animi",
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
            Timestamp: types.MustTimeFromString("2022-02-06T08:46:52.093Z"),
        },
        XCmID: "distinctio",
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
    res, err := s.HiuFacing.PostV05UsersAuthFetchModesRaw(ctx, operations.PostV05UsersAuthFetchModesRawRequest{
        Authorization: "maiores",
        RequestBody: []byte("laboriosam"),
        XCmID: "voluptatem",
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
    res, err := s.HiuFacing.PostV05UsersAuthInitJSON(ctx, operations.PostV05UsersAuthInitJSONRequest{
        Authorization: "optio",
        PatientAuthInitRequest: shared.PatientAuthInitRequest{
            Query: shared.PatientAuthInitRequestQuery{
                AuthMode: shared.AuthenticationModeEnumMobileOtp.ToPointer(),
                ID: "hinapatel@ndhm",
                Purpose: shared.PatientAuthPurposeEnumLink,
                Requester: shared.PatientAuthRequester{
                    ID: "100005",
                    Type: shared.PatientAuthRequesterTypeEnumHip,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-11-15T14:40:21.227Z"),
        },
        XCmID: "sed",
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
    res, err := s.HiuFacing.PostV05UsersAuthInitRaw(ctx, operations.PostV05UsersAuthInitRawRequest{
        Authorization: "amet",
        RequestBody: []byte("rerum"),
        XCmID: "in",
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
    res, err := s.HiuFacing.PostV05UsersAuthOnNotifyJSON(ctx, operations.PostV05UsersAuthOnNotifyJSONRequest{
        Authorization: "nostrum",
        PatientAuthNotificationAcknowledgement: shared.PatientAuthNotificationAcknowledgement{
            Acknowledgement: &shared.PatientAuthNotificationAcknowledgementAcknowledgement{
                Status: shared.PatientAuthNotificationAcknowledgementAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("ratione"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "367fe1a0-cc8d-4f79-b0a3-96d90c364b7c",
            },
            Timestamp: types.MustTimeFromString("2022-09-07T04:48:01.873Z"),
        },
        XCmID: "nulla",
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
    res, err := s.HiuFacing.PostV05UsersAuthOnNotifyRaw(ctx, operations.PostV05UsersAuthOnNotifyRawRequest{
        Authorization: "maiores",
        RequestBody: []byte("distinctio"),
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
