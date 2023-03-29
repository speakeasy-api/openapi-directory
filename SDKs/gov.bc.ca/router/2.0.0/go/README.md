# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/router/2.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Departure: "2022-07-11T11:40:38.566Z",
            Disable: "nulla",
            DistanceUnit: "mi",
            OutputSRS: "26910",
            Points: "perspiciatis",
            RoundTrip: false,
            RouteDescription: "nulla",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Directions

* `GetDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points
* `GetOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* `GetTruckDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
* `GetTruckOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* `PostDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points
* `PostOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
* `PostTruckDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points
* `PostTruckOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.

### Distance

* `GetDistanceOutputFormat` - Get distance and travel time between two geographic points
* `GetDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points
* `GetTruckDistanceOutputFormat` - Get distance and travel time between two geographic points for a commercial vehicle
* `GetTruckDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points for a commercial vehicle
* `PostDistanceOutputFormat` - Get distance and travel time between two geographic points
* `PostDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points
* `PostTruckDistanceOutputFormat` - Get distance and travel time between two geographic points
* `PostTruckDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points

### Route

* `GetOptimalRouteOutputFormat` - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* `GetRouteOutputFormat` - Get the path, distance and travel time between a series of geographic points
* `GetTruckOptimalRouteOutputFormat` - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* `GetTruckRouteOutputFormat` - Get the path, distance and travel time between a series of geographic points for a commercial vehicle
* `PostOptimalRouteOutputFormat` - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* `PostRouteOutputFormat` - Get the path, distance and travel time between a series of geographic points
* `PostTruckOptimalRouteOutputFormat` - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* `PostTruckRouteOutputFormat` - Get the path, distance and travel time between a series of geographic points
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
