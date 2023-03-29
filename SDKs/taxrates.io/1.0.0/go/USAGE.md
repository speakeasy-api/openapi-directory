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
        QueryParams: operations.TaxRatesByCountryCodeQueryParams{
            CountryCode: "US",
            Date: "2020-09-02",
            Domain: "api.taxrates.io",
            Filter: "unde",
            ProductCodes: "C010",
            Province: "deserunt",
            Zip: "71642",
        },
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