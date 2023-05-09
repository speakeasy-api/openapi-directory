# DataTransfer

### Available Operations

* [PostV05HealthInformationTransferJSON](#postv05healthinformationtransferjson) - health information transfer API
* [PostV05HealthInformationTransferRaw](#postv05healthinformationtransferraw) - health information transfer API

## PostV05HealthInformationTransferJSON

**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
  5. checksum is Md5 checksum of the data conent, before encryption
  6. Please refer to the NDHM Sandbox Documentation for the format of FHIR bundle that is passed through content 


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
    res, err := s.DataTransfer.PostV05HealthInformationTransferJSON(ctx, operations.PostV05HealthInformationTransferJSONRequest{
        Authorization: "ipsa",
        DataNotification: shared.DataNotification{
            Entries: []interface{}{
                shared.EntryContent{
                    CareContextReference: "RVH1008",
                    Checksum: "odio",
                    Content: "Encrypted content of data packaged in FHIR bundle",
                    Media: shared.EntryContentMediaEnumApplicationFhirPlusJSON,
                },
                shared.EntryContent{
                    CareContextReference: "RVH1008",
                    Checksum: "esse",
                    Content: "Encrypted content of data packaged in FHIR bundle",
                    Media: shared.EntryContentMediaEnumApplicationFhirPlusJSON,
                },
            },
            KeyMaterial: shared.KeyMaterial{
                CryptoAlg: "ECDH",
                Curve: "Curve25519",
                DhPublicKey: shared.KeyObject{
                    Expiry: types.MustTimeFromString("2022-06-23T12:34:06.790Z"),
                    KeyValue: "fuga",
                    Parameters: "Curve25519/32byte random key",
                },
                Nonce: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            },
            PageCount: 442015,
            PageNumber: 695626,
            TransactionID: "d466d28c-10ab-43cd-8a42-51904e523c7e",
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
  6. Please refer to the NDHM Sandbox Documentation for the format of FHIR bundle that is passed through content 


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
    res, err := s.DataTransfer.PostV05HealthInformationTransferRaw(ctx, operations.PostV05HealthInformationTransferRawRequest{
        Authorization: "aperiam",
        RequestBody: []byte("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
