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
    
    req := operations.GetcitymatchRequest{
        QueryParams: operations.GetcitymatchQueryParams{
            City: "sit",
            License: "voluptas",
        },
    }
    
    res, err := s.CityNameSimilarityKey.Getcitymatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcitymatch200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->