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
    
    req := operations.ConvertcurrencyRequest{
        QueryParams: operations.ConvertcurrencyQueryParams{
            Amount: "sit",
            From: "voluptas",
            License: "culpa",
            To: "expedita",
        },
    }
    
    res, err := s.LiveCurrencyRateConversion.Convertcurrency(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Convertcurrency200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->