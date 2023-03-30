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

    req := operations.RetrievePrefixPricingRequest{
        PathParams: operations.RetrievePrefixPricingPathParams{
            Type: "corrupti",
        },
        QueryParams: operations.RetrievePrefixPricingQueryParams{
            APIKey: "provident",
            APISecret: "distinctio",
            Prefix: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.Pricing.RetrievePrefixPricing(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingCountriesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->