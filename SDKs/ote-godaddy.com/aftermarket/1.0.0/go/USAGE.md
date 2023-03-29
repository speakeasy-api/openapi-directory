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

    req := operations.AddExpiryListingsJSONRequest{
        Request: []shared.AftermarketListingExpiryCreate{
            shared.AftermarketListingExpiryCreate{
                Domain: "deserunt",
                ExpiresAt: "porro",
                LosingRegistrarID: 844266,
                PageViewsMonthly: 602763,
                RevenueMonthly: 857946,
            },
            shared.AftermarketListingExpiryCreate{
                Domain: "perspiciatis",
                ExpiresAt: "nulla",
                LosingRegistrarID: 423655,
                PageViewsMonthly: 623564,
                RevenueMonthly: 645894,
            },
            shared.AftermarketListingExpiryCreate{
                Domain: "eum",
                ExpiresAt: "iusto",
                LosingRegistrarID: 297534,
                PageViewsMonthly: 891773,
                RevenueMonthly: 56713,
            },
        },
    }

    ctx := context.Background()
    res, err := s.V1.AddExpiryListingsJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->