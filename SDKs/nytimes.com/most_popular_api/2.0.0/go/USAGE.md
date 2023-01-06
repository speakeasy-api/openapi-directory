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
    
    req := operations.GetMostemailedSectionTimePeriodJSONRequest{
        Security: operations.GetMostemailedSectionTimePeriodJSONSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.GetMostemailedSectionTimePeriodJSONPathParams{
            Section: "Automobiles",
            TimePeriod: "30",
        },
    }
    
    res, err := s.GetMostemailedSectionTimePeriodJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GETMostemailedSectionTimePeriodJSON200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->