# Ccc

## Overview

Endpoint for getting Commercial Credit Card data

### Available Operations

* [GetCommercialCreditCards](#getcommercialcreditcards) - Gets a list of all `Commerical Credit Card` objects.
* [HeadCommercialCreditCards](#headcommercialcreditcards) - Gets header information on the current set of `Commerical Credit Card` data

## GetCommercialCreditCards

Gets a list of all `Commerical Credit Card` objects.

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
    res, err := s.Ccc.GetCommercialCreditCards(ctx, operations.GetCommercialCreditCardsRequest{
        IfModifiedSince: sdk.String("debitis"),
        IfNoneMatch: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONObject != nil {
        // handle response
    }
}
```

## HeadCommercialCreditCards

Gets header information on the current set of `Commerical Credit Card` data

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
    res, err := s.Ccc.HeadCommercialCreditCards(ctx, operations.HeadCommercialCreditCardsRequest{
        IfModifiedSince: sdk.String("delectus"),
        IfNoneMatch: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
