# Steps

## Overview

Steps

### Available Operations

* [GetV2StepsJSON](#getv2stepsjson) - List steps
* [GetV2StepsIDJSON](#getv2stepsidjson) - Fetch a step

## GetV2StepsJSON

Fetches multiple step records. The records can be filtered, paged, and sorted according to
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
    res, err := s.Steps.GetV2StepsJSON(ctx, operations.GetV2StepsJSONRequest{
        CadenceID: sdk.Int64(125811),
        HasDueActions: sdk.Bool(false),
        Ids: []int64{
            205011,
            139745,
            936845,
            330596,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(373106),
        PerPage: sdk.Int64(51053),
        SortBy: sdk.String("exercitationem"),
        SortDirection: sdk.String("veniam"),
        Type: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2StepsIDJSON

Fetches a step, by ID only.


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
    res, err := s.Steps.GetV2StepsIDJSON(ctx, operations.GetV2StepsIDJSONRequest{
        ID: "56f5d56d-0bd0-4af2-9fe1-3db4f62cba3f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
