<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Apikey: shared.SchemeApikey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetQueryJSONRequest{
        QueryParams: operations.GetQueryJSONQueryParams{
            DateRange: "culpa",
            Elevation: 3890080421283342007,
            Facets: 227706880003303016,
            Filter: "ab",
            Latitude: "incidunt",
            Limit: 3184538614141096155,
            Longitude: "esse",
            Name: "incidunt",
            Offset: 263238491685024644,
            Query: "nesciunt",
            Sort: "sit",
            Sw: "sequi",
        },
    }
    
    res, err := s.Events.GetQueryJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryJSON200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->