<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.AddExpiryListingsJSON(ctx, []shared.AftermarketListingExpiryCreate{
        shared.AftermarketListingExpiryCreate{
            Domain: "provident",
            ExpiresAt: "distinctio",
            LosingRegistrarID: 844266,
            PageViewsMonthly: sdk.Int64(602763),
            RevenueMonthly: sdk.Int64(857946),
        },
        shared.AftermarketListingExpiryCreate{
            Domain: "corrupti",
            ExpiresAt: "illum",
            LosingRegistrarID: 423655,
            PageViewsMonthly: sdk.Int64(623564),
            RevenueMonthly: sdk.Int64(645894),
        },
        shared.AftermarketListingExpiryCreate{
            Domain: "suscipit",
            ExpiresAt: "iure",
            LosingRegistrarID: 297534,
            PageViewsMonthly: sdk.Int64(891773),
            RevenueMonthly: sdk.Int64(56713),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->