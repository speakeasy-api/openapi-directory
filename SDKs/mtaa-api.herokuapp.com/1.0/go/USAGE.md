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
    
    req := operations.DistrictsInARegionRequest{
        PathParams: operations.DistrictsInARegionPathParams{
            Country: "ut",
            Region: "et",
        },
    }
    
    res, err := s.DistrictsInRegion.DistrictsInARegion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->