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
            CountryCode: "sit",
            Date: "voluptas",
            Domain: "culpa",
            Filter: "expedita",
            ProductCodes: "consequuntur",
            Province: "dolor",
            Zip: "expedita",
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