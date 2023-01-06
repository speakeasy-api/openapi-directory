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
            CorrectSide: true,
            Criteria: "fastest",
            Departure: "1975-06-27T08:22:02Z",
            Disable: "eos",
            DistanceUnit: "mi",
            OutputSRS: 5076055979029686948,
            Points: "exercitationem",
            RoundTrip: false,
            RouteDescription: "maiores",
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