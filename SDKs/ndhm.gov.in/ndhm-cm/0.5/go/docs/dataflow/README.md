# DataFlow

### Available Operations

* [PostV05HealthInformationNotifyJSON](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [PostV05HealthInformationOnRequestJSON](#postv05healthinformationonrequestjson) - Health information data request acknowledgement from HIP
* [PostV05HealthInformationOnRequestRaw](#postv05healthinformationonrequestraw) - Health information data request acknowledgement from HIP
* [PostV05HealthInformationRequestJSON](#postv05healthinformationrequestjson) - Health information data request from HIU
* [PostV05HealthInformationRequestRaw](#postv05healthinformationrequestraw) - Health information data request from HIU

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
    res, err := s.DataFlow.PostV05HealthInformationNotifyJSON(ctx, operations.PostV05HealthInformationNotifyJSONRequest{
        Authorization: "vero",
        HealthInformationNotification: shared.HealthInformationNotification{
            Notification: shared.HealthInformationNotificationNotification{
                ConsentID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
                DoneAt: types.MustTimeFromString("2022-11-24T10:55:00.183Z"),
                Notifier: shared.HealthInformationNotificationNotificationNotifier{
                    ID: "100005",
                    Type: shared.HealthInformationNotificationNotificationNotifierTypeEnumHiu,
                },
                StatusNotification: shared.HealthInformationNotificationNotificationStatusNotification{
                    HipID: "max",
                    SessionStatus: shared.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnumTransferred,
                    StatusResponses: []shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "ullam",
                            Description: sdk.String("provident"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "quos",
                            Description: sdk.String("sint"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "accusantium",
                            Description: sdk.String("mollitia"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                    },
                },
                TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2021-01-16T22:43:33.071Z"),
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
    res, err := s.DataFlow.PostV05HealthInformationNotifyRaw(ctx, operations.PostV05HealthInformationNotifyRawRequest{
        Authorization: "ad",
        RequestBody: []byte("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationOnRequestJSON

This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


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
    res, err := s.DataFlow.PostV05HealthInformationOnRequestJSON(ctx, operations.PostV05HealthInformationOnRequestJSONRequest{
        Authorization: "dolor",
        HIPHealthInformationRequestAcknowledgement: shared.HIPHealthInformationRequestAcknowledgement{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "odit",
            },
            HiRequest: &shared.HIPHealthInformationRequestAcknowledgementHiRequest{
                SessionStatus: shared.HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnumAcknowledged,
                TransactionID: "516fe4c8-b711-4e5b-bfd2-ed028921cddc",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "692601fb-576b-40d5-b0d3-0c5fbb258705",
            },
            Timestamp: types.MustTimeFromString("2022-10-27T11:39:54.088Z"),
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

## PostV05HealthInformationOnRequestRaw

This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


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
    res, err := s.DataFlow.PostV05HealthInformationOnRequestRaw(ctx, operations.PostV05HealthInformationOnRequestRawRequest{
        Authorization: "perferendis",
        RequestBody: []byte("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationRequestJSON

HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - ***/v0.5/health-information/cm/on-request***. 


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
    res, err := s.DataFlow.PostV05HealthInformationRequestJSON(ctx, operations.PostV05HealthInformationRequestJSONRequest{
        Authorization: "minus",
        HIRequest: shared.HIRequest{
            HiRequest: shared.HIRequestHIRequest{
                Consent: shared.Consent{
                    ID: "73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48",
                },
                DataPushURL: "aliquid",
                DateRange: shared.DateRange{
                    From: types.MustTimeFromString("2022-10-16T09:46:06.582Z"),
                    To: types.MustTimeFromString("2022-10-25T00:56:56.568Z"),
                },
                KeyMaterial: shared.KeyMaterial{
                    CryptoAlg: "ECDH",
                    Curve: "Curve25519",
                    DhPublicKey: shared.KeyObject{
                        Expiry: types.MustTimeFromString("2022-01-21T07:17:52.299Z"),
                        KeyValue: "excepturi",
                        Parameters: "Curve25519/32byte random key",
                    },
                    Nonce: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                },
            },
            RequestID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            Timestamp: types.MustTimeFromString("2022-02-04T23:02:58.199Z"),
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

## PostV05HealthInformationRequestRaw

HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - ***/v0.5/health-information/cm/on-request***. 


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
    res, err := s.DataFlow.PostV05HealthInformationRequestRaw(ctx, operations.PostV05HealthInformationRequestRawRequest{
        Authorization: "dignissimos",
        RequestBody: []byte("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
