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

    req := operations.FetchTrunkingCountryRequest{
        IsoCountry: "corrupti",
    }

    ctx := context.Background()
    res, err := s.FetchTrunkingCountry(ctx, req, operations.FetchTrunkingCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV2TrunkingCountryInstance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->