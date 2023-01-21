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
    
    req := operations.GetcountrymatchRequest{
        QueryParams: operations.GetcountrymatchQueryParams{
            Country: "sit",
            License: "voluptas",
        },
    }
    
    res, err := s.CountryMatchSimilarityKey.Getcountrymatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcountrymatch200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->