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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Directions.GetDirectionsOutputFormat(ctx, operations.GetDirectionsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetDirectionsOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2021-07-27T21:52:56.087Z"),
        Disable: sdk.String("quibusdam"),
        DistanceUnit: operations.GetDirectionsOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.GetDirectionsOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.GetDirectionsOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
        Points: "illum",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("vel"),
    })
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
## Available Resources and Operations


### [Directions](docs/directions/README.md)

* [GetDirectionsOutputFormat](docs/directions/README.md#getdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [GetOptimalDirectionsOutputFormat](docs/directions/README.md#getoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [GetTruckDirectionsOutputFormat](docs/directions/README.md#gettruckdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
* [GetTruckOptimalDirectionsOutputFormat](docs/directions/README.md#gettruckoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* [PostDirectionsOutputFormat](docs/directions/README.md#postdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [PostOptimalDirectionsOutputFormat](docs/directions/README.md#postoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
* [PostTruckDirectionsOutputFormat](docs/directions/README.md#posttruckdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [PostTruckOptimalDirectionsOutputFormat](docs/directions/README.md#posttruckoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.

### [Distance](docs/distance/README.md)

* [GetDistanceOutputFormat](docs/distance/README.md#getdistanceoutputformat) - Get distance and travel time between two geographic points
* [GetDistanceBetweenPairsOutputFormat](docs/distance/README.md#getdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points
* [GetTruckDistanceOutputFormat](docs/distance/README.md#gettruckdistanceoutputformat) - Get distance and travel time between two geographic points for a commercial vehicle
* [GetTruckDistanceBetweenPairsOutputFormat](docs/distance/README.md#gettruckdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points for a commercial vehicle
* [PostDistanceOutputFormat](docs/distance/README.md#postdistanceoutputformat) - Get distance and travel time between two geographic points
* [PostDistanceBetweenPairsOutputFormat](docs/distance/README.md#postdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points
* [PostTruckDistanceOutputFormat](docs/distance/README.md#posttruckdistanceoutputformat) - Get distance and travel time between two geographic points
* [PostTruckDistanceBetweenPairsOutputFormat](docs/distance/README.md#posttruckdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points

### [Route](docs/route/README.md)

* [GetOptimalRouteOutputFormat](docs/route/README.md#getoptimalrouteoutputformat) - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [GetRouteOutputFormat](docs/route/README.md#getrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
* [GetTruckOptimalRouteOutputFormat](docs/route/README.md#gettruckoptimalrouteoutputformat) - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* [GetTruckRouteOutputFormat](docs/route/README.md#gettruckrouteoutputformat) - Get the path, distance and travel time between a series of geographic points for a commercial vehicle
* [PostOptimalRouteOutputFormat](docs/route/README.md#postoptimalrouteoutputformat) - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [PostRouteOutputFormat](docs/route/README.md#postrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
* [PostTruckOptimalRouteOutputFormat](docs/route/README.md#posttruckoptimalrouteoutputformat) - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [PostTruckRouteOutputFormat](docs/route/README.md#posttruckrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
