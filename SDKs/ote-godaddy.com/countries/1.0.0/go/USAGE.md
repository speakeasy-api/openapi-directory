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

    req := operations.GetCountriesRequest{
        MarketID: "corrupti",
        Order: "descending",
        RegionName: "distinctio",
        RegionTypeID: 844266,
        Sort: "label",
    }

    ctx := context.Background()
    res, err := s.V1.GetCountries(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfCountrySummary != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->