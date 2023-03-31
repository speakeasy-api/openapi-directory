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
        AgeGroup: "corrupti",
        Author: "provident",
        Contributor: "distinctio",
        Isbn: "quibusdam",
        Price: "unde",
        Publisher: "nulla",
        Title: "Ms.",
    }

    ctx := context.Background()
    res, err := s.GETListsBestSellersHistoryJSON(ctx, req, operations.GETListsBestSellersHistoryJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETListsBestSellersHistoryJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->