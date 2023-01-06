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
    
    req := operations.GetAllFacilitiesRequest{
        Security: operations.GetAllFacilitiesSecurity{
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Headers: operations.GetAllFacilitiesHeaders{
            Accept: "text/csv",
        },
    }
    
    res, err := s.Facilities.GetAllFacilities(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GeoFacilitiesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->