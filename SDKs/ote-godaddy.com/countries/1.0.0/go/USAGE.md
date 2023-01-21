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
    
    req := operations.GetCountriesRequest{
        QueryParams: operations.GetCountriesQueryParams{
            MarketID: "sit",
            Order: "ascending",
            RegionName: "culpa",
            RegionTypeID: 501233450539197794,
            Sort: "label",
        },
    }
    
    res, err := s.V1.GetCountries(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfCountrySummary != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->