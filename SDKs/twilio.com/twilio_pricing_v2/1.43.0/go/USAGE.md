<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FetchTrunkingCountry(ctx, operations.FetchTrunkingCountryRequest{
        IsoCountry: "corrupti",
    }, operations.FetchTrunkingCountrySecurity{
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