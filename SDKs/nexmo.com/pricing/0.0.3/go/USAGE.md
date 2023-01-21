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
    
    req := operations.RetrievePrefixPricingRequest{
        PathParams: operations.RetrievePrefixPricingPathParams{
            Type: "sit",
        },
        QueryParams: operations.RetrievePrefixPricingQueryParams{
            APIKey: "voluptas",
            APISecret: "culpa",
            Prefix: "expedita",
        },
    }
    
    res, err := s.Pricing.RetrievePrefixPricing(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingCountriesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->