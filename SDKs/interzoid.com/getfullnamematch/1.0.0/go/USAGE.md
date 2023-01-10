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
    
    req := operations.GetfullnamematchRequest{
        QueryParams: operations.GetfullnamematchQueryParams{
            Fullname: "qui",
            License: "blanditiis",
        },
    }
    
    res, err := s.FullNameMatchSimilarityKey.Getfullnamematch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getfullnamematch200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->