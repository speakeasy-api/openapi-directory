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
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetQueryJSONRequest{
        QueryParams: operations.GetQueryJSONQueryParams{
            DateRange: "unde",
            Elevation: 592845,
            Facets: "1",
            Filter: "nulla",
            Latitude: "id",
            Limit: 857946,
            Longitude: "perspiciatis",
            Name: "nulla",
            Offset: 423655,
            Query: "fuga",
            Sort: "facilis",
            Sw: "eum",
        },
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