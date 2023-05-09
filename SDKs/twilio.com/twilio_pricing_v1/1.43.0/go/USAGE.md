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
    res, err := s.FetchMessagingCountry(ctx, operations.FetchMessagingCountryRequest{
        IsoCountry: "corrupti",
    }, operations.FetchMessagingCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV1MessagingMessagingCountryInstance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->