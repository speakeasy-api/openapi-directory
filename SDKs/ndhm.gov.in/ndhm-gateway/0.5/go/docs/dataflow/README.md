# DataFlow

### Available Operations

* [PostV05HealthInformationCmOnRequestJSON](#postv05healthinformationcmonrequestjson) - Health information data request
* [PostV05HealthInformationCmOnRequestRaw](#postv05healthinformationcmonrequestraw) - Health information data request
* [PostV05HealthInformationCmRequestJSON](#postv05healthinformationcmrequestjson) - Health information data request
* [PostV05HealthInformationCmRequestRaw](#postv05healthinformationcmrequestraw) - Health information data request
* [PostV05HealthInformationHipOnRequestJSON](#postv05healthinformationhiponrequestjson) - Health information data request
* [PostV05HealthInformationHipOnRequestRaw](#postv05healthinformationhiponrequestraw) - Health information data request
* [PostV05HealthInformationHipRequestJSON](#postv05healthinformationhiprequestjson) - Health information data request
* [PostV05HealthInformationHipRequestRaw](#postv05healthinformationhiprequestraw) - Health information data request
* [PostV05HealthInformationNotifyJSON](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow

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
    res, err := s.DataFlow.PostV05HealthInformationCmOnRequestJSON(ctx, operations.PostV05HealthInformationCmOnRequestJSONRequest{
        Authorization: "incidunt",
        HIUHealthInformationRequestResponse: shared.HIUHealthInformationRequestResponse{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("saepe"),
            },
            HiRequest: &shared.HIUHealthInformationRequestResponseHiRequest{
                SessionStatus: shared.HIUHealthInformationRequestResponseHiRequestSessionStatusEnumAcknowledged,
                TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            },
            RequestID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            Resp: shared.RequestReference{
                RequestID: "52ff785f-c378-414d-8c98-e0c2bb89eb75",
            },
            Timestamp: types.MustTimeFromString("2021-02-10T19:58:48.033Z"),
        },
        XHiuID: "repellendus",
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
    res, err := s.DataFlow.PostV05HealthInformationCmOnRequestRaw(ctx, operations.PostV05HealthInformationCmOnRequestRawRequest{
        Authorization: "iure",
        RequestBody: []byte("dolorem"),
        XHiuID: "commodi",
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
    res, err := s.DataFlow.PostV05HealthInformationCmRequestJSON(ctx, operations.PostV05HealthInformationCmRequestJSONRequest{
        Authorization: "impedit",
        HIRequest: shared.HIRequest{
            HiRequest: shared.HIRequestHIRequest{
                Consent: shared.Consent{
                    ID: "600503d8-bb31-4180-b739-ae9e057eb809",
                },
                DataPushURL: "accusamus",
                DateRange: shared.DateRange{
                    From: types.MustTimeFromString("2022-06-25T04:05:11.831Z"),
                    To: types.MustTimeFromString("2022-12-20T19:24:32.195Z"),
                },
                KeyMaterial: shared.KeyMaterial{
                    CryptoAlg: "ECDH",
                    Curve: "Curve25519",
                    DhPublicKey: shared.KeyObject{
                        Expiry: types.MustTimeFromString("2022-10-11T02:08:11.390Z"),
                        KeyValue: "sunt",
                        Parameters: "Curve25519/32byte random key",
                    },
                    Nonce: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                },
            },
            RequestID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            Timestamp: types.MustTimeFromString("2022-05-01T11:53:41.043Z"),
        },
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
    res, err := s.DataFlow.PostV05HealthInformationCmRequestRaw(ctx, operations.PostV05HealthInformationCmRequestRawRequest{
        Authorization: "atque",
        RequestBody: []byte("beatae"),
        XCmID: "at",
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
    res, err := s.DataFlow.PostV05HealthInformationHipOnRequestJSON(ctx, operations.PostV05HealthInformationHipOnRequestJSONRequest{
        Authorization: "labore",
        HIPHealthInformationRequestAcknowledgement: shared.HIPHealthInformationRequestAcknowledgement{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("esse"),
            },
            HiRequest: &shared.HIPHealthInformationRequestAcknowledgementHiRequest{
                SessionStatus: shared.HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnumAcknowledged,
                TransactionID: "00b607f3-c93c-473b-9da3-f2ceda7e23f2",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "257411fa-f4b7-4544-a472-e802857a5b40",
            },
            Timestamp: types.MustTimeFromString("2022-07-28T00:11:01.662Z"),
        },
        XCmID: "nesciunt",
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
    res, err := s.DataFlow.PostV05HealthInformationHipOnRequestRaw(ctx, operations.PostV05HealthInformationHipOnRequestRawRequest{
        Authorization: "mollitia",
        RequestBody: []byte("dignissimos"),
        XCmID: "fugiat",
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
    res, err := s.DataFlow.PostV05HealthInformationHipRequestJSON(ctx, operations.PostV05HealthInformationHipRequestJSONRequest{
        Authorization: "nostrum",
        HIPHIRequest: shared.HIPHIRequest{
            HiRequest: shared.HIPHIRequestHiRequest{
                Consent: shared.Consent{
                    ID: "75f1400e-764a-4d73-b4ec-1b781b36a080",
                },
                DataPushURL: "quos",
                DateRange: shared.DateRange{
                    From: types.MustTimeFromString("2021-05-03T11:10:30.236Z"),
                    To: types.MustTimeFromString("2022-12-09T19:34:59.129Z"),
                },
                KeyMaterial: shared.KeyMaterial{
                    CryptoAlg: "ECDH",
                    Curve: "Curve25519",
                    DhPublicKey: shared.KeyObject{
                        Expiry: types.MustTimeFromString("2022-02-04T17:43:04.954Z"),
                        KeyValue: "delectus",
                        Parameters: "Curve25519/32byte random key",
                    },
                    Nonce: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                },
            },
            RequestID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            Timestamp: types.MustTimeFromString("2021-04-13T22:16:25.275Z"),
            TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        },
        XHipID: "officia",
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
    res, err := s.DataFlow.PostV05HealthInformationHipRequestRaw(ctx, operations.PostV05HealthInformationHipRequestRawRequest{
        Authorization: "sed",
        RequestBody: []byte("voluptatem"),
        XHipID: "alias",
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
    res, err := s.DataFlow.PostV05HealthInformationNotifyJSON(ctx, operations.PostV05HealthInformationNotifyJSONRequest{
        Authorization: "eveniet",
        HealthInformationNotification: shared.HealthInformationNotification{
            Notification: shared.HealthInformationNotificationNotification{
                ConsentID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
                DoneAt: types.MustTimeFromString("2022-12-01T08:37:58.653Z"),
                Notifier: shared.HealthInformationNotificationNotificationNotifier{
                    ID: "tmh",
                    Type: shared.HealthInformationNotificationNotificationNotifierTypeEnumHiu,
                },
                StatusNotification: shared.HealthInformationNotificationNotificationStatusNotification{
                    HipID: "max",
                    SessionStatus: shared.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnumTransferred,
                    StatusResponses: []shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "necessitatibus",
                            Description: sdk.String("harum"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                    },
                },
                TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-11-22T06:00:10.696Z"),
        },
        XCmID: "aliquid",
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
        Authorization: "modi",
        RequestBody: []byte("optio"),
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
