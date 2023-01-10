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
    
    req := operations.GetglobaltimeRequest{
        QueryParams: operations.GetglobaltimeQueryParams{
            License: "quia",
            Locale: "iure",
        },
    }
    
    res, err := s.CurrentGlobalTime.Getglobaltime(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getglobaltime200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->