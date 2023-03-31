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

    req := operations.GETMostemailedSectionTimePeriodJSONRequest{
        Section: "Public Editor",
        TimePeriod: "7",
    }

    ctx := context.Background()
    res, err := s.GETMostemailedSectionTimePeriodJSON(ctx, req, operations.GETMostemailedSectionTimePeriodJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETMostemailedSectionTimePeriodJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->