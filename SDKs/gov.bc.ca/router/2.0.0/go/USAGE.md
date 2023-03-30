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

    req := operations.GetDirectionsOutputFormatRequest{
        PathParams: operations.GetDirectionsOutputFormatPathParams{
            OutputFormat: "kml",
        },
        QueryParams: operations.GetDirectionsOutputFormatQueryParams{
            CorrectSide: false,
            Criteria: "fastest",
            Departure: "2021-04-24T16:27:50.833Z",
            Disable: "unde",
            DistanceUnit: "mi",
            OutputSRS: "26908",
            Points: "illum",
            RoundTrip: false,
            RouteDescription: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.Directions.GetDirectionsOutputFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->