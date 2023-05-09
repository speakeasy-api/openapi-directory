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
    res, err := s.V1.GetCountries(ctx, operations.GetCountriesRequest{
        MarketID: "corrupti",
        Order: operations.GetCountriesOrderEnumDescending.ToPointer(),
        RegionName: sdk.String("distinctio"),
        RegionTypeID: sdk.Int64(844266),
        Sort: operations.GetCountriesSortEnumLabel.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfCountrySummary != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->