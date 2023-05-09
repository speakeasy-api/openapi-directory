# DataFlow

### Available Operations

* [PostV05HealthInformationHipRequestJSON](#postv05healthinformationhiprequestjson) - Health information data request
* [PostV05HealthInformationHipRequestRaw](#postv05healthinformationhiprequestraw) - Health information data request

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
        Authorization: "sapiente",
        HIPHealthInformationRequest: shared.HIPHealthInformationRequest{
            HiRequest: shared.HIPHealthInformationRequestHiRequest{
                Consent: shared.Consent{
                    ID: "ce6c5561-46c3-4e25-8fb0-08c42e141aac",
                },
                DataPushURL: "velit",
                DateRange: shared.DateRange{
                    From: types.MustTimeFromString("2022-07-31T12:04:26.954Z"),
                    To: types.MustTimeFromString("2021-04-30T16:20:53.400Z"),
                },
                KeyMaterial: shared.KeyMaterial{
                    CryptoAlg: "ECDH",
                    Curve: "Curve25519",
                    DhPublicKey: shared.KeyObject{
                        Expiry: types.MustTimeFromString("2020-06-02T16:42:54.630Z"),
                        KeyValue: "voluptas",
                        Parameters: "Curve25519/32byte random key",
                    },
                    Nonce: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                },
            },
            RequestID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            Timestamp: types.MustTimeFromString("2022-10-22T12:27:01.822Z"),
            TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        },
        XHipID: "tempora",
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
        Authorization: "numquam",
        RequestBody: []byte("explicabo"),
        XHipID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
