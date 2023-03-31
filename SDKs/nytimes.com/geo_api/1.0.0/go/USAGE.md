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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetQueryJSONRequest{
        DateRange: "corrupti",
        Elevation: 592845,
        Facets: "1",
        Filter: "quibusdam",
        Latitude: "unde",
        Limit: 857946,
        Longitude: "corrupti",
        Name: "illum",
        Offset: 423655,
        Query: "error",
        Sort: "deserunt",
        Sw: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Events.GetQueryJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->