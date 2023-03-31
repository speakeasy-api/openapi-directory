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

    req := operations.GetDirectionsOutputFormatRequest{
        CorrectSide: false,
        Criteria: "fastest",
        Departure: "2021-07-27T21:52:56.087Z",
        Disable: "quibusdam",
        DistanceUnit: "mi",
        OutputFormat: "html",
        OutputSRS: "26908",
        Points: "illum",
        RoundTrip: false,
        RouteDescription: "vel",
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