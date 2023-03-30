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
        Security: operations.FindPlacesFindPlacesGetSecurity{
            APIKeyHeader: shared.SchemeAPIKeyHeader{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.FindPlacesFindPlacesGetQueryParams{
            Key: "unde",
            Language: "fr",
            Text: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.LocationEndpoints.FindPlacesFindPlacesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FindPlacesModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->