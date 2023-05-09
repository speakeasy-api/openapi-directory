# Discovery

### Available Operations

* [PostV05CareContextsOnDiscoverJSON](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [PostV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

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
        Authorization: "amet",
        PatientDiscoveryResult: shared.PatientDiscoveryResult{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "numquam",
            },
            Patient: &shared.PatientRepresentation{
                CareContexts: []shared.CareContextRepresentation{
                    shared.CareContextRepresentation{
                        Display: "ipsa",
                        ReferenceNumber: "ipsa",
                    },
                },
                Display: "iure",
                MatchedBy: []shared.IdentifierTypeEnum{
                    shared.IdentifierTypeEnumMobile,
                    shared.IdentifierTypeEnumMr,
                },
                ReferenceNumber: "quidem",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "f69280d1-ba77-4a89-abf7-37ae4203ce5e",
            },
            Timestamp: types.MustTimeFromString("2022-05-10T06:55:36.509Z"),
            TransactionID: "95d8a0d4-46ce-42af-ba73-cf3be453f870",
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
        Authorization: "expedita",
        RequestBody: []byte("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
