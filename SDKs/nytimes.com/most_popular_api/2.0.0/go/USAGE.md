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
        Security: operations.GETMostemailedSectionTimePeriodJSONSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.GETMostemailedSectionTimePeriodJSONPathParams{
            Section: "Public Editor",
            TimePeriod: "7",
        },
    }

    ctx := context.Background()
    res, err := s.GETMostemailedSectionTimePeriodJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GETMostemailedSectionTimePeriodJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->