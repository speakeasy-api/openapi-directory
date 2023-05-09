# CallDispositions

## Overview

Call Dispositions

### Available Operations

* [GetV2CallDispositionsJSON](#getv2calldispositionsjson) - List call dispositions

## GetV2CallDispositionsJSON

Fetches multiple call disposition records. The records can be sorted according to
the respective parameters. Call dispositions must be configured in application. This will
change in the future, but please contact us if you have a pressing use case.


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
    res, err := s.CallDispositions.GetV2CallDispositionsJSON(ctx, operations.GetV2CallDispositionsJSONRequest{
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(677115),
        PerPage: sdk.Int64(341698),
        SortBy: sdk.String("officia"),
        SortDirection: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
