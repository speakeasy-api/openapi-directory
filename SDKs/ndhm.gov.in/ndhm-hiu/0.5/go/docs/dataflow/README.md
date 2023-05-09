# DataFlow

### Available Operations

* [PostV05HealthInformationHiuOnRequestJSON](#postv05healthinformationhiuonrequestjson) - Health information data request
* [PostV05HealthInformationHiuOnRequestRaw](#postv05healthinformationhiuonrequestraw) - Health information data request
* [PostV05HealthInformationTransferJSON](#postv05healthinformationtransferjson) - health information transfer API
* [PostV05HealthInformationTransferRaw](#postv05healthinformationtransferraw) - health information transfer API

## PostV05HealthInformationHiuOnRequestJSON

Callback API for acknowledgement of Health information request made by HIU. Gateway calls this API when request has validated for the specified  consent id. Either the **hiRequest** or **error** would be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
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
    res, err := s.DataFlow.PostV05HealthInformationHiuOnRequestJSON(ctx, operations.PostV05HealthInformationHiuOnRequestJSONRequest{
        Authorization: "illum",
        HIUHealthInformationRequestResponse: shared.HIUHealthInformationRequestResponse{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "accusantium",
            },
            HiRequest: &shared.HIUHealthInformationRequestResponseHiRequest{
                SessionStatus: shared.HIUHealthInformationRequestResponseHiRequestSessionStatusEnumRequested,
                TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            },
            RequestID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            Resp: shared.RequestReference{
                RequestID: "f1575608-2d68-4ea1-9f1d-17051339d080",
            },
            Timestamp: types.MustTimeFromString("2022-02-21T23:29:55.837Z"),
        },
        XHiuID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationHiuOnRequestRaw

Callback API for acknowledgement of Health information request made by HIU. Gateway calls this API when request has validated for the specified  consent id. Either the **hiRequest** or **error** would be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
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
    res, err := s.DataFlow.PostV05HealthInformationHiuOnRequestRaw(ctx, operations.PostV05HealthInformationHiuOnRequestRawRequest{
        Authorization: "ab",
        RequestBody: []byte("corrupti"),
        XHiuID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationTransferJSON

**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
  5. checksum is Md5 checksum of the data conent, before encryption
  6. Please refer to the NDHM Sandbox documentation for the format of FHIR bundle that is passed through content 


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
    res, err := s.DataFlow.PostV05HealthInformationTransferJSON(ctx, operations.PostV05HealthInformationTransferJSONRequest{
        Authorization: "voluptatem",
        DataNotification: shared.DataNotification{
            Entries: []interface{}{
                shared.EntryLink{
                    CareContextReference: "NCC1701",
                    Checksum: "numquam",
                    Link: "https://data-from.net/sa2321afaf12e13",
                    Media: shared.EntryLinkMediaEnumApplicationFhirPlusJSON,
                },
            },
            KeyMaterial: shared.KeyMaterial{
                CryptoAlg: "ECDH",
                Curve: "Curve25519",
                DhPublicKey: shared.KeyObject{
                    Expiry: types.MustTimeFromString("2022-08-10T11:52:05.487Z"),
                    KeyValue: "voluptas",
                    Parameters: "Curve25519/32byte random key",
                },
                Nonce: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            },
            PageCount: 12036,
            PageNumber: 491025,
            TransactionID: "1f93f5f0-642d-4ac7-af51-5cc413aa63aa",
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

## PostV05HealthInformationTransferRaw

**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
  5. checksum is Md5 checksum of the data conent, before encryption
  6. Please refer to the NDHM Sandbox documentation for the format of FHIR bundle that is passed through content 


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
    res, err := s.DataFlow.PostV05HealthInformationTransferRaw(ctx, operations.PostV05HealthInformationTransferRawRequest{
        Authorization: "recusandae",
        RequestBody: []byte("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
