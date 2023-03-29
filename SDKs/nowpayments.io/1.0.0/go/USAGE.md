<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ThreeGetEstimatedPriceRequest{
        QueryParams: operations.ThreeGetEstimatedPriceQueryParams{
            Amount: "3999.5000",
            CurrencyFrom: "usd",
            CurrencyTo: "btc",
        },
    }

    ctx := context.Background()
    res, err := s.ThreeGetEstimatedPrice(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ThreeGetEstimatedPrice200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->