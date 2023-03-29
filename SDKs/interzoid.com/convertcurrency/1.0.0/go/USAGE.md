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

    req := operations.ConvertcurrencyRequest{
        QueryParams: operations.ConvertcurrencyQueryParams{
            Amount: "unde",
            From: "deserunt",
            License: "porro",
            To: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.LiveCurrencyRateConversion.Convertcurrency(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Convertcurrency200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->