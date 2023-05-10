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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeparturesGetForStopRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeparturesGetForStopExpandEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeparturesGetForStopRouteTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeparturesGetForStopRequest();
    $request->dateUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-25T05:21:43.948Z');
    $request->devid = 'distinctio';
    $request->directionId = 844266;
    $request->expand = [
        DeparturesGetForStopExpandEnum::VEHICLE_POSITION,
        DeparturesGetForStopExpandEnum::DIRECTION,
        DeparturesGetForStopExpandEnum::VEHICLE_POSITION,
    ];
    $request->gtfs = false;
    $request->includeCancelled = false;
    $request->includeGeopath = false;
    $request->lookBackwards = false;
    $request->maxResults = 423655;
    $request->platformNumbers = [
        645894,
        384382,
        437587,
    ];
    $request->routeType = DeparturesGetForStopRouteTypeEnum::ONE;
    $request->signature = 'debitis';
    $request->stopId = 56713;
    $request->token = 'delectus';

    $response = $sdk->departures->departuresGetForStop($request);

    if ($response->v3DeparturesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [departures](docs/departures/README.md)

* [departuresGetForStop](docs/departures/README.md#departuresgetforstop) - View departures for all routes from a stop
* [departuresGetForStopAndRoute](docs/departures/README.md#departuresgetforstopandroute) - View departures for a specific route from a stop

### [directions](docs/directions/README.md)

* [directionsForDirection](docs/directions/README.md#directionsfordirection) - View all routes for a direction of travel
* [directionsForDirectionAndType](docs/directions/README.md#directionsfordirectionandtype) - View all routes of a particular type for a direction of travel
* [directionsForRoute](docs/directions/README.md#directionsforroute) - View directions that a route travels in

### [disruptions](docs/disruptions/README.md)

* [disruptionsGetAllDisruptions](docs/disruptions/README.md#disruptionsgetalldisruptions) - View all disruptions for all route types
* [disruptionsGetDisruptionById](docs/disruptions/README.md#disruptionsgetdisruptionbyid) - View a specific disruption
* [disruptionsGetDisruptionModes](docs/disruptions/README.md#disruptionsgetdisruptionmodes) - Get all disruption modes
* [disruptionsGetDisruptionsByRoute](docs/disruptions/README.md#disruptionsgetdisruptionsbyroute) - View all disruptions for a particular route
* [disruptionsGetDisruptionsByRouteAndStop](docs/disruptions/README.md#disruptionsgetdisruptionsbyrouteandstop) - View all disruptions for a particular route and stop
* [disruptionsGetDisruptionsByStop](docs/disruptions/README.md#disruptionsgetdisruptionsbystop) - View all disruptions for a particular stop

### [fareEstimate](docs/fareestimate/README.md)

* [fareEstimateGetFareEstimateByZone](docs/fareestimate/README.md#fareestimategetfareestimatebyzone) - Estimate a fare by zone

### [outlets](docs/outlets/README.md)

* [outletsGetAllOutlets](docs/outlets/README.md#outletsgetalloutlets) - List all ticket outlets
* [outletsGetOutletsByGeolocation](docs/outlets/README.md#outletsgetoutletsbygeolocation) - List ticket outlets near a specific location

### [patterns](docs/patterns/README.md)

* [patternsGetPatternByRun](docs/patterns/README.md#patternsgetpatternbyrun) - View the stopping pattern for a specific trip/service run

### [routeTypes](docs/routetypes/README.md)

* [routeTypesGetRouteTypes](docs/routetypes/README.md#routetypesgetroutetypes) - View all route types and their names

### [routes](docs/routes/README.md)

* [routesOneOrMoreRoutes](docs/routes/README.md#routesoneormoreroutes) - View route names and numbers for all routes
* [routesRouteFromId](docs/routes/README.md#routesroutefromid) - View route name and number for specific route ID

### [runs](docs/runs/README.md)

* [runsForRoute](docs/runs/README.md#runsforroute) - View all trip/service runs for a specific route ID
* [runsForRouteAndRouteType](docs/runs/README.md#runsforrouteandroutetype) - View all trip/service runs for a specific route ID and route type
* [runsForRun](docs/runs/README.md#runsforrun) - View all trip/service runs for a specific run_ref
* [runsForRunAndRouteType](docs/runs/README.md#runsforrunandroutetype) - View the trip/service run for a specific run_ref and route type

### [search](docs/search/README.md)

* [searchSearch](docs/search/README.md#searchsearch) - View stops, routes and myki ticket outlets that match the search term

### [stops](docs/stops/README.md)

* [stopsStopDetails](docs/stops/README.md#stopsstopdetails) - View facilities at a specific stop (Metro and V/Line stations only)
* [stopsStopsByGeolocation](docs/stops/README.md#stopsstopsbygeolocation) - View all stops near a specific location
* [stopsStopsForRoute](docs/stops/README.md#stopsstopsforroute) - View all stops on a specific route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
