# AccountTiers

## Overview

Account Tier Information

### Available Operations

* [GetV2AccountTiersJSON](#getv2accounttiersjson) - List Account Tiers
* [GetV2AccountTiersIDJSON](#getv2accounttiersidjson) - Fetch an account tier

## GetV2AccountTiersJSON

Fetches multiple account tier records. The records can be filtered, paged, and sorted according to
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
    res, err := s.AccountTiers.GetV2AccountTiersJSON(ctx, operations.GetV2AccountTiersJSONRequest{
        Ids: []int64{
            537373,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Name: []string{
            "optio",
            "totam",
            "beatae",
            "commodi",
        },
        Page: sdk.Int64(473600),
        PerPage: sdk.Int64(264555),
        SortBy: sdk.String("qui"),
        SortDirection: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2AccountTiersIDJSON

Fetches an account tier, by ID only.


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
    res, err := s.AccountTiers.GetV2AccountTiersIDJSON(ctx, operations.GetV2AccountTiersIDJSONRequest{
        ID: "b7392059-2939-46fe-a759-6eb10faaa235",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
