# SDK

## Overview

Search for millions of products from the world's greatest brands.

### Available Operations

* [Details](#details) - Return more details about a list of products.
* [Search](#search) - Search for products

## Details

Return more details about a list of products.

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
    res, err := s.SDK.Details(ctx, operations.DetailsRequest{
        Ids: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```

## Search

Search for products

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
    res, err := s.SDK.Search(ctx, operations.SearchRequest{
        NumResults: sdk.String("distinctio"),
        PriceMax: sdk.Float64(8442.66),
        PriceMin: sdk.Float64(6027.63),
        Query: sdk.String("nulla"),
        SimilarToID: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```
