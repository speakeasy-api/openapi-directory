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
    
    req := operations.FetchTrunkingCountryRequest{
        Security: operations.FetchTrunkingCountrySecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.FetchTrunkingCountryPathParams{
            IsoCountry: "natus",
        },
    }
    
    res, err := s.FetchTrunkingCountry(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV2TrunkingCountryInstance != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->