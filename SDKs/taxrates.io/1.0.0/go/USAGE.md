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
    
    req := operations.TaxRatesByCountryCodeRequest{
        QueryParams: operations.TaxRatesByCountryCodeQueryParams{
            CountryCode: "autem",
            Date: "sed",
            Domain: "corporis",
            Filter: "sed",
            ProductCodes: "numquam",
            Province: "eveniet",
            Zip: "quia",
        },
    }
    
    res, err := s.V1Tax.TaxRatesByCountryCode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxRatesByCountryCode200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->