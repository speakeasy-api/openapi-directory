# Pi

## Overview

Digits of PI and more.This API is free (rate limited).

### Available Operations

* [GetNumbersPi](#getnumberspi) - Get digits of pi (Ï€)

## GetNumbersPi

Get digits of pi (Ï€)

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
    res, err := s.Pi.GetNumbersPi(ctx, operations.GetNumbersPiRequest{
        From: sdk.Int64(87129),
        To: sdk.Int64(648172),
    }, operations.GetNumbersPiSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
