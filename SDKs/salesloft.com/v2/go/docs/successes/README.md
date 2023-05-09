# Successes

## Overview

Success Management

### Available Operations

* [GetV2SuccessesJSON](#getv2successesjson) - List successes

## GetV2SuccessesJSON

Fetches multiple success records. The records can be filtered, paged, and sorted according to
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
    res, err := s.Successes.GetV2SuccessesJSON(ctx, operations.GetV2SuccessesJSONRequest{
        Ids: []int64{
            621140,
            252473,
            97810,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(649032),
        PerPage: sdk.Int64(884361),
        PersonID: []int64{
            769156,
            42615,
            711871,
        },
        SortBy: sdk.String("corrupti"),
        SortDirection: sdk.String("eaque"),
        UpdatedAt: []string{
            "aliquid",
            "excepturi",
            "magni",
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
