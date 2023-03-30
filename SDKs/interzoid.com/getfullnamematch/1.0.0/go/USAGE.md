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

    req := operations.GetfullnamematchRequest{
        QueryParams: operations.GetfullnamematchQueryParams{
            Fullname: "corrupti",
            License: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.FullNameMatchSimilarityKey.Getfullnamematch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getfullnamematch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->