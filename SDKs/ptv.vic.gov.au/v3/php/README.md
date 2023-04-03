# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### departures

* `departuresGetForStop` - View departures for all routes from a stop
* `departuresGetForStopAndRoute` - View departures for a specific route from a stop

### directions

* `directionsForDirection` - View all routes for a direction of travel
* `directionsForDirectionAndType` - View all routes of a particular type for a direction of travel
* `directionsForRoute` - View directions that a route travels in

### disruptions

* `disruptionsGetAllDisruptions` - View all disruptions for all route types
* `disruptionsGetDisruptionById` - View a specific disruption
* `disruptionsGetDisruptionModes` - Get all disruption modes
* `disruptionsGetDisruptionsByRoute` - View all disruptions for a particular route
* `disruptionsGetDisruptionsByRouteAndStop` - View all disruptions for a particular route and stop
* `disruptionsGetDisruptionsByStop` - View all disruptions for a particular stop

### fareEstimate

* `fareEstimateGetFareEstimateByZone` - Estimate a fare by zone

### outlets

* `outletsGetAllOutlets` - List all ticket outlets
* `outletsGetOutletsByGeolocation` - List ticket outlets near a specific location

### patterns

* `patternsGetPatternByRun` - View the stopping pattern for a specific trip/service run

### routeTypes

* `routeTypesGetRouteTypes` - View all route types and their names

### routes

* `routesOneOrMoreRoutes` - View route names and numbers for all routes
* `routesRouteFromId` - View route name and number for specific route ID

### runs

* `runsForRoute` - View all trip/service runs for a specific route ID
* `runsForRouteAndRouteType` - View all trip/service runs for a specific route ID and route type
* `runsForRun` - View all trip/service runs for a specific run_ref
* `runsForRunAndRouteType` - View the trip/service run for a specific run_ref and route type

### search

* `searchSearch` - View stops, routes and myki ticket outlets that match the search term

### stops

* `stopsStopDetails` - View facilities at a specific stop (Metro and V/Line stations only)
* `stopsStopsByGeolocation` - View all stops near a specific location
* `stopsStopsForRoute` - View all stops on a specific route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
