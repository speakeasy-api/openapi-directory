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

    req := operations.GetcurrencyrateRequest{
        QueryParams: operations.GetcurrencyrateQueryParams{
            License: "corrupti",
            Symbol: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.CurrencyRates.Getcurrencyrate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcurrencyrate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->