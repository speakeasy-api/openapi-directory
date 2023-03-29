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

    req := operations.GETListsBestSellersHistoryJSONRequest{
        Security: operations.GETListsBestSellersHistoryJSONSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GETListsBestSellersHistoryJSONQueryParams{
            AgeGroup: "unde",
            Author: "deserunt",
            Contributor: "porro",
            Isbn: "nulla",
            Price: "id",
            Publisher: "vero",
            Title: "Global Configuration Administrator",
        },
    }

    ctx := context.Background()
    res, err := s.GETListsBestSellersHistoryJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GETListsBestSellersHistoryJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->