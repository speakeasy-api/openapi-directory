# CallSentiments

## Overview

Call Sentiments

### Available Operations

* [GetV2CallSentimentsJSON](#getv2callsentimentsjson) - List call sentiments

## GetV2CallSentimentsJSON

Fetches multiple call sentiment records. The records can be sorted according to
the respective parameters. Call sentiments must be configured in application. This will
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
    res, err := s.CallSentiments.GetV2CallSentimentsJSON(ctx, operations.GetV2CallSentimentsJSONRequest{
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Name: sdk.String("Caleb Goldner"),
        Page: sdk.Int64(282699),
        PerPage: sdk.Int64(856303),
        SortBy: sdk.String("voluptatem"),
        SortDirection: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
