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
            OutputFormat: "json",
        },
        QueryParams: operations.GetDirectionsOutputFormatQueryParams{
            CorrectSide: false,
            Criteria: "fastest",
            Departure: "2019-04-21T07:38:14Z",
            Disable: "consequuntur",
            DistanceUnit: "km",
            OutputSRS: 1774932891286980153,
            Points: "voluptas",
            RoundTrip: true,
            RouteDescription: "et",
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