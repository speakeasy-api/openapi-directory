<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetcurrencyrateRequest{
        QueryParams: operations.GetcurrencyrateQueryParams{
            License: "nobis",
            Symbol: "mollitia",
        },
    }
    
    res, err := s.CurrencyRates.Getcurrencyrate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcurrencyrate200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->