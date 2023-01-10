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
            DateRange: "odio",
            Elevation: 5789498988459070385,
            Facets: 1117297296707549895,
            Filter: "cupiditate",
            Latitude: "aut",
            Limit: 341544842551870019,
            Longitude: "repellendus",
            Name: "soluta",
            Offset: 2871197063775501498,
            Query: "voluptate",
            Sort: "impedit",
            Sw: "velit",
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