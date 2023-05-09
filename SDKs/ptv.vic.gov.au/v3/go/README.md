# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ptv.vic.gov.au/v3/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Departures.DeparturesGetForStop(ctx, operations.DeparturesGetForStopRequest{
        DateUtc: types.MustTimeFromString("2021-10-25T05:21:43.948Z"),
        Devid: sdk.String("distinctio"),
        DirectionID: sdk.Int(844266),
        Expand: []DeparturesGetForStopExpandEnum{
            operations.DeparturesGetForStopExpandEnumVehiclePosition,
            operations.DeparturesGetForStopExpandEnumDirection,
            operations.DeparturesGetForStopExpandEnumVehiclePosition,
        },
        Gtfs: sdk.Bool(false),
        IncludeCancelled: sdk.Bool(false),
        IncludeGeopath: sdk.Bool(false),
        LookBackwards: sdk.Bool(false),
        MaxResults: sdk.Int(423655),
        PlatformNumbers: []int{
            645894,
            384382,
            437587,
        },
        RouteType: operations.DeparturesGetForStopRouteTypeEnumOne,
        Signature: sdk.String("debitis"),
        StopID: 56713,
        Token: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DeparturesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Departures](docs/departures/README.md)

* [DeparturesGetForStop](docs/departures/README.md#departuresgetforstop) - View departures for all routes from a stop
* [DeparturesGetForStopAndRoute](docs/departures/README.md#departuresgetforstopandroute) - View departures for a specific route from a stop

### [Directions](docs/directions/README.md)

* [DirectionsForDirection](docs/directions/README.md#directionsfordirection) - View all routes for a direction of travel
* [DirectionsForDirectionAndType](docs/directions/README.md#directionsfordirectionandtype) - View all routes of a particular type for a direction of travel
* [DirectionsForRoute](docs/directions/README.md#directionsforroute) - View directions that a route travels in

### [Disruptions](docs/disruptions/README.md)

* [DisruptionsGetAllDisruptions](docs/disruptions/README.md#disruptionsgetalldisruptions) - View all disruptions for all route types
* [DisruptionsGetDisruptionByID](docs/disruptions/README.md#disruptionsgetdisruptionbyid) - View a specific disruption
* [DisruptionsGetDisruptionModes](docs/disruptions/README.md#disruptionsgetdisruptionmodes) - Get all disruption modes
* [DisruptionsGetDisruptionsByRoute](docs/disruptions/README.md#disruptionsgetdisruptionsbyroute) - View all disruptions for a particular route
* [DisruptionsGetDisruptionsByRouteAndStop](docs/disruptions/README.md#disruptionsgetdisruptionsbyrouteandstop) - View all disruptions for a particular route and stop
* [DisruptionsGetDisruptionsByStop](docs/disruptions/README.md#disruptionsgetdisruptionsbystop) - View all disruptions for a particular stop

### [FareEstimate](docs/fareestimate/README.md)

* [FareEstimateGetFareEstimateByZone](docs/fareestimate/README.md#fareestimategetfareestimatebyzone) - Estimate a fare by zone

### [Outlets](docs/outlets/README.md)

* [OutletsGetAllOutlets](docs/outlets/README.md#outletsgetalloutlets) - List all ticket outlets
* [OutletsGetOutletsByGeolocation](docs/outlets/README.md#outletsgetoutletsbygeolocation) - List ticket outlets near a specific location

### [Patterns](docs/patterns/README.md)

* [PatternsGetPatternByRun](docs/patterns/README.md#patternsgetpatternbyrun) - View the stopping pattern for a specific trip/service run

### [RouteTypes](docs/routetypes/README.md)

* [RouteTypesGetRouteTypes](docs/routetypes/README.md#routetypesgetroutetypes) - View all route types and their names

### [Routes](docs/routes/README.md)

* [RoutesOneOrMoreRoutes](docs/routes/README.md#routesoneormoreroutes) - View route names and numbers for all routes
* [RoutesRouteFromID](docs/routes/README.md#routesroutefromid) - View route name and number for specific route ID

### [Runs](docs/runs/README.md)

* [RunsForRoute](docs/runs/README.md#runsforroute) - View all trip/service runs for a specific route ID
* [RunsForRouteAndRouteType](docs/runs/README.md#runsforrouteandroutetype) - View all trip/service runs for a specific route ID and route type
* [RunsForRun](docs/runs/README.md#runsforrun) - View all trip/service runs for a specific run_ref
* [RunsForRunAndRouteType](docs/runs/README.md#runsforrunandroutetype) - View the trip/service run for a specific run_ref and route type

### [Search](docs/search/README.md)

* [SearchSearch](docs/search/README.md#searchsearch) - View stops, routes and myki ticket outlets that match the search term

### [Stops](docs/stops/README.md)

* [StopsStopDetails](docs/stops/README.md#stopsstopdetails) - View facilities at a specific stop (Metro and V/Line stations only)
* [StopsStopsByGeolocation](docs/stops/README.md#stopsstopsbygeolocation) - View all stops near a specific location
* [StopsStopsForRoute](docs/stops/README.md#stopsstopsforroute) - View all stops on a specific route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
