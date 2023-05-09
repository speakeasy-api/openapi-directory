# ActionDetailsCallInstructions

## Overview

Actions - Call Instructions

### Available Operations

* [GetV2ActionDetailsCallInstructionsJSON](#getv2actiondetailscallinstructionsjson) - List call instructions
* [GetV2ActionDetailsCallInstructionsIDJSON](#getv2actiondetailscallinstructionsidjson) - Fetch a call instructions

## GetV2ActionDetailsCallInstructionsJSON

Fetches multiple call instruction records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ActionDetailsCallInstructions.GetV2ActionDetailsCallInstructionsJSON(ctx, operations.GetV2ActionDetailsCallInstructionsJSONRequest{
        Ids: []int64{
            292147,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(286915),
        PerPage: sdk.Int64(240829),
        SortBy: sdk.String("dolorum"),
        SortDirection: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2ActionDetailsCallInstructionsIDJSON

Fetches a call instruction, by ID only.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ActionDetailsCallInstructions.GetV2ActionDetailsCallInstructionsIDJSON(ctx, operations.GetV2ActionDetailsCallInstructionsIDJSONRequest{
        ID: "108e0adc-f4b9-4218-b9fc-e953f73ef7fb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
