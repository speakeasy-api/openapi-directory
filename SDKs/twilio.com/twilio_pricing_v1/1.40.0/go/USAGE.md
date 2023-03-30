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

    req := operations.FetchMessagingCountryRequest{
        Security: operations.FetchMessagingCountrySecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.FetchMessagingCountryPathParams{
            IsoCountry: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.FetchMessagingCountry(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV1MessagingMessagingCountryInstance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->