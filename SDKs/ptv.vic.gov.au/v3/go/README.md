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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeparturesGetForStopRequest{
        DateUtc: "2021-10-25T05:21:43.948Z",
        Devid: "distinctio",
        DirectionID: 844266,
        Expand: []DeparturesGetForStopExpandEnum{
            "VehiclePosition",
            "Direction",
            "VehiclePosition",
        },
        Gtfs: false,
        IncludeCancelled: false,
        IncludeGeopath: false,
        LookBackwards: false,
        MaxResults: 423655,
        PlatformNumbers: []int{
            645894,
            384382,
            437587,
        },
        RouteType: "1",
        Signature: "debitis",
        StopID: 56713,
        Token: "delectus",
    }

    ctx := context.Background()
    res, err := s.Departures.DeparturesGetForStop(ctx, req)
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


### Departures

* `DeparturesGetForStop` - View departures for all routes from a stop
* `DeparturesGetForStopAndRoute` - View departures for a specific route from a stop

### Directions

* `DirectionsForDirection` - View all routes for a direction of travel
* `DirectionsForDirectionAndType` - View all routes of a particular type for a direction of travel
* `DirectionsForRoute` - View directions that a route travels in

### Disruptions

* `DisruptionsGetAllDisruptions` - View all disruptions for all route types
* `DisruptionsGetDisruptionByID` - View a specific disruption
* `DisruptionsGetDisruptionModes` - Get all disruption modes
* `DisruptionsGetDisruptionsByRoute` - View all disruptions for a particular route
* `DisruptionsGetDisruptionsByRouteAndStop` - View all disruptions for a particular route and stop
* `DisruptionsGetDisruptionsByStop` - View all disruptions for a particular stop

### FareEstimate

* `FareEstimateGetFareEstimateByZone` - Estimate a fare by zone

### Outlets

* `OutletsGetAllOutlets` - List all ticket outlets
* `OutletsGetOutletsByGeolocation` - List ticket outlets near a specific location

### Patterns

* `PatternsGetPatternByRun` - View the stopping pattern for a specific trip/service run

### RouteTypes

* `RouteTypesGetRouteTypes` - View all route types and their names

### Routes

* `RoutesOneOrMoreRoutes` - View route names and numbers for all routes
* `RoutesRouteFromID` - View route name and number for specific route ID

### Runs

* `RunsForRoute` - View all trip/service runs for a specific route ID
* `RunsForRouteAndRouteType` - View all trip/service runs for a specific route ID and route type
* `RunsForRun` - View all trip/service runs for a specific run_ref
* `RunsForRunAndRouteType` - View the trip/service run for a specific run_ref and route type

### Search

* `SearchSearch` - View stops, routes and myki ticket outlets that match the search term

### Stops

* `StopsStopDetails` - View facilities at a specific stop (Metro and V/Line stations only)
* `StopsStopsByGeolocation` - View all stops near a specific location
* `StopsStopsForRoute` - View all stops on a specific route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
