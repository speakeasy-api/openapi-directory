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
    
    req := operations.GetaddressmatchRequest{
        QueryParams: operations.GetaddressmatchQueryParams{
            Address: "ipsam",
            License: "commodi",
        },
    }
    
    res, err := s.StreetAddressSimilarityKey.Getaddressmatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getaddressmatch200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->