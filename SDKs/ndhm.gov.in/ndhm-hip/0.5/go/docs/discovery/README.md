# Discovery

### Available Operations

* [PostV05CareContextsDiscoverJSON](#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [PostV05CareContextsDiscoverRaw](#postv05carecontextsdiscoverraw) - Discover patient's accounts

## PostV05CareContextsDiscoverJSON

Request for patient care context discover, made by Gateway intended for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
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
        Authorization: "quod",
        PatientDiscoveryRequest: shared.PatientDiscoveryRequest{
            Patient: shared.PatientDiscoveryRequestPatient{
                Gender: shared.PatientDiscoveryRequestPatientGenderEnumF,
                ID: "<patient-id>@<consent-manager-id>",
                Name: "chandler bing",
                UnverifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumMr,
                        Value: "+919800083232",
                    },
                },
                VerifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumHealthID,
                        Value: "+919800083232",
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumMr,
                        Value: "+919800083232",
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumMr,
                        Value: "+919800083232",
                    },
                },
                YearOfBirth: 2000,
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-03-04T08:46:39.442Z"),
            TransactionID: "f2a70c68-8282-4aa4-8256-2f222e9817ee",
        },
        XHipID: "veritatis",
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

Request for patient care context discover, made by Gateway intended for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
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
        Authorization: "esse",
        RequestBody: []byte("quod"),
        XHipID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
