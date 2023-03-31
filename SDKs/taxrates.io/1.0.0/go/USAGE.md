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

    req := operations.TaxRatesByCountryCodeRequest{
        CountryCode: "US",
        Date: "2020-09-02",
        Domain: "api.taxrates.io",
        Filter: "corrupti",
        ProductCodes: "C010",
        Province: "provident",
        Zip: "71642",
    }

    ctx := context.Background()
    res, err := s.V1Tax.TaxRatesByCountryCode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxRatesByCountryCode200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->