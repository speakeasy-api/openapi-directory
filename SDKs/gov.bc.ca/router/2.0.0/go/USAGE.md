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
    
    req := operations.GetDirectionsOutputFormatRequest{
        PathParams: operations.GetDirectionsOutputFormatPathParams{
            OutputFormat: "kml",
        },
        QueryParams: operations.GetDirectionsOutputFormatQueryParams{
            CorrectSide: false,
            Criteria: "shortest",
            Departure: "2012-09-29T14:14:23Z",
            Disable: "quia",
            DistanceUnit: "mi",
            OutputSRS: 2629240772588096916,
            Points: "distinctio",
            RoundTrip: false,
            RouteDescription: "nesciunt",
        },
    }
    
    res, err := s.Directions.GetDirectionsOutputFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->