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
    
    req := operations.GetListsBestSellersHistoryJSONRequest{
        Security: operations.GetListsBestSellersHistoryJSONSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetListsBestSellersHistoryJSONQueryParams{
            AgeGroup: "exercitationem",
            Author: "magni",
            Contributor: "non",
            Isbn: "laboriosam",
            Price: "perspiciatis",
            Publisher: "dolore",
            Title: "odio",
        },
    }
    
    res, err := s.GetListsBestSellersHistoryJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GETListsBestSellersHistoryJSON200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->