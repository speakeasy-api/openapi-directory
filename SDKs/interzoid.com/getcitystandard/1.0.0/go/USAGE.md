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
    
    req := operations.GetcitystandardRequest{
        QueryParams: operations.GetcitystandardQueryParams{
            City: "asperiores",
            License: "non",
        },
    }
    
    res, err := s.CityDataStandardization.Getcitystandard(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcitystandard200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->