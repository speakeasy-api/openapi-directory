# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### directions

* `GetDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points
* `GetOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* `GetTruckDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
* `GetTruckOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* `PostDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points
* `PostOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
* `PostTruckDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points
* `PostTruckOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.

### distance

* `GetDistanceOutputFormat` - Get distance and travel time between two geographic points
* `GetDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points
* `GetTruckDistanceOutputFormat` - Get distance and travel time between two geographic points for a commercial vehicle
* `GetTruckDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points for a commercial vehicle
* `PostDistanceOutputFormat` - Get distance and travel time between two geographic points
* `PostDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points
* `PostTruckDistanceOutputFormat` - Get distance and travel time between two geographic points
* `PostTruckDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points

### route

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
