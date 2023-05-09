# Discovery

### Available Operations

* [PostV05CareContextsDiscoverJSON](#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [PostV05CareContextsDiscoverRaw](#postv05carecontextsdiscoverraw) - Discover patient's accounts
* [PostV05CareContextsOnDiscoverJSON](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [PostV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

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
    res, err := s.Discovery.PostV05CareContextsDiscoverJSON(ctx, operations.PostV05CareContextsDiscoverJSONRequest{
        Authorization: "molestias",
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
                        Type: shared.IdentifierTypeEnumMr.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                },
                VerifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumMr.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                },
                YearOfBirth: 2000,
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-10-04T01:51:27.895Z"),
            TransactionID: "ffda9e06-bee4-4825-81fc-0e115c80bff9",
        },
        XHipID: "dicta",
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
    res, err := s.Discovery.PostV05CareContextsDiscoverRaw(ctx, operations.PostV05CareContextsDiscoverRawRequest{
        Authorization: "quos",
        RequestBody: []byte("ullam"),
        XHipID: "dolore",
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
    res, err := s.Discovery.PostV05CareContextsOnDiscoverJSON(ctx, operations.PostV05CareContextsOnDiscoverJSONRequest{
        Authorization: "modi",
        PatientDiscoveryResult: shared.PatientDiscoveryResult{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("maxime"),
            },
            Patient: &shared.PatientRepresentation{
                CareContexts: []shared.CareContextRepresentation{
                    shared.CareContextRepresentation{
                        Display: "consequuntur",
                        ReferenceNumber: "assumenda",
                    },
                    shared.CareContextRepresentation{
                        Display: "vero",
                        ReferenceNumber: "doloribus",
                    },
                },
                Display: "impedit",
                MatchedBy: []shared.IdentifierTypeEnum{
                    shared.IdentifierTypeEnumHealthID,
                    shared.IdentifierTypeEnumNdhmHealthNumber,
                    shared.IdentifierTypeEnumHealthID,
                    shared.IdentifierTypeEnumMobile,
                },
                ReferenceNumber: "sint",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "77773e63-562a-47b4-88f0-5e3d48fdaf31",
            },
            Timestamp: types.MustTimeFromString("2022-05-15T17:54:47.658Z"),
            TransactionID: "1f5fd942-59c0-4b36-b25e-a944f3b756c1",
        },
        XCmID: "beatae",
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
    res, err := s.Discovery.PostV05CareContextsOnDiscoverRaw(ctx, operations.PostV05CareContextsOnDiscoverRawRequest{
        Authorization: "hic",
        RequestBody: []byte("nisi"),
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
