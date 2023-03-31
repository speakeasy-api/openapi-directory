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

    req := operations.FindPlacesFindPlacesGetRequest{
        Key: "corrupti",
        Language: "fr",
        Text: "distinctio",
    }

    ctx := context.Background()
    res, err := s.LocationEndpoints.FindPlacesFindPlacesGet(ctx, req, operations.FindPlacesFindPlacesGetSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindPlacesModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->