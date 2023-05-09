# Tags

## Overview

Tags

### Available Operations

* [GetV2TagsJSON](#getv2tagsjson) - List team tags

## GetV2TagsJSON

Fetches a list of the tags used for a team. The records can be filtered, paged, and sorted according to
the respective parameters.

Tags can be applied to mulitple resource types.


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
    res, err := s.Tags.GetV2TagsJSON(ctx, operations.GetV2TagsJSONRequest{
        Ids: []int64{
            821904,
            220824,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(700529),
        PerPage: sdk.Int64(153582),
        Search: sdk.String("accusamus"),
        SortBy: sdk.String("optio"),
        SortDirection: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
