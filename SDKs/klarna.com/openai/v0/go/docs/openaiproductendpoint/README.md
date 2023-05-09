# OpenAiProductEndpoint

## Overview

Open AI Product Endpoint. Query for products.

### Available Operations

* [ProductsUsingGET](#productsusingget) - API for fetching Klarna product information

## ProductsUsingGET

API for fetching Klarna product information

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
    res, err := s.OpenAiProductEndpoint.ProductsUsingGET(ctx, operations.ProductsUsingGETRequest{
        Budget: sdk.Int64(844266),
        Q: "unde",
        Size: sdk.Int64(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductResponse != nil {
        // handle response
    }
}
```
