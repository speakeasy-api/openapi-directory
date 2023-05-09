# AccountStages

## Overview

Account Stage Management

### Available Operations

* [GetV2AccountStagesJSON](#getv2accountstagesjson) - List account stages
* [GetV2AccountStagesIDJSON](#getv2accountstagesidjson) - Fetch an account stage

## GetV2AccountStagesJSON

Fetches multiple account stage records. The records can be filtered, paged, and sorted according to
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
    res, err := s.AccountStages.GetV2AccountStagesJSON(ctx, operations.GetV2AccountStagesJSONRequest{
        Ids: []int64{
            437587,
            297534,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(891773),
        PerPage: sdk.Int64(56713),
        SortBy: sdk.String("delectus"),
        SortDirection: sdk.String("tempora"),
        UpdatedAt: []string{
            "molestiae",
            "minus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2AccountStagesIDJSON

Fetches an account stage, by ID only.


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
    res, err := s.AccountStages.GetV2AccountStagesIDJSON(ctx, operations.GetV2AccountStagesIDJSONRequest{
        ID: "c8796ed1-51a0-45df-82dd-f7cc78ca1ba9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
