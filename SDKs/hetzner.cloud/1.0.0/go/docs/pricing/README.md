# Pricing

## Overview

Returns prices for resources.

### Available Operations

* [GetPricing](#getpricing) - Get all prices

## GetPricing

Returns prices for all resources available on the platform. VAT and currency of the Project owner are used for calculations.

Both net and gross prices are included in the response.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Pricing.GetPricing(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPricing200ApplicationJSONObject != nil {
        // handle response
    }
}
```
