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
use \OpenAPI\OpenAPI\Models\Operations\AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\AerodromesByDistance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest();
    $request->aerodromesByDistance = new AerodromesByDistance();
    $request->aerodromesByDistance->distance = 592845;
    $request->aerodromesByDistance->latitude = 844266;
    $request->aerodromesByDistance->longitude = 857946;
    $request->xApiKey = 'corrupti';

    $response = $sdk->aerodromes->aerodromesByDistanceUsV1AerodromesDistanceQueryPost($request);

    if ($response->aerodromeDistanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [aerodromes](docs/aerodromes/README.md)

* [aerodromesByDistanceUsV1AerodromesDistanceQueryPost](docs/aerodromes/README.md#aerodromesbydistanceusv1aerodromesdistancequerypost) - Retrieve aerodromes within given distance of location.
* [aerodromesByPolyUsV1AerodromesPolygonQueryPost](docs/aerodromes/README.md#aerodromesbypolyusv1aerodromespolygonquerypost) - Retrieve aerodromes located within given area.
* [aerodromesByRouteUsV1AerodromesRouteQueryPost](docs/aerodromes/README.md#aerodromesbyrouteusv1aerodromesroutequerypost) - Retrieve aerodromes found along a route.

### [airspace](docs/airspace/README.md)

* [aspByDistanceUsV1AirspaceDistanceQueryPost](docs/airspace/README.md#aspbydistanceusv1airspacedistancequerypost) - Retrieve all requested types of airspace located within given distance of location.
* [aspByPolyUsV1AirspacePolygonQueryPost](docs/airspace/README.md#aspbypolyusv1airspacepolygonquerypost) - Retrieve all requested types of airspace located within given GeoJSON Polygon.
* [aspByRouteUsV1AirspaceRouteQueryPost](docs/airspace/README.md#aspbyrouteusv1airspaceroutequerypost) - Retrieve all requested types of airspace traversed by route.

### [flightRestrictions](docs/flightrestrictions/README.md)

* [tfrByDistanceUsV1RestrictionsDistanceQueryPost](docs/flightrestrictions/README.md#tfrbydistanceusv1restrictionsdistancequerypost) - Retrieve flight restrictions applicable within given distance of location.
* [tfrByPolyUsV1RestrictionsPolygonQueryPost](docs/flightrestrictions/README.md#tfrbypolyusv1restrictionspolygonquerypost) - Retrieve flight restrictions applicable within given area.
* [tfrByRouteUsV1RestrictionsRouteQueryPost](docs/flightrestrictions/README.md#tfrbyrouteusv1restrictionsroutequerypost) - Retrieve flight restrictions applicable along route.

### [restrictedPublicVenues](docs/restrictedpublicvenues/README.md)

* [venByDistanceUsV1VenuesDistanceQueryPost](docs/restrictedpublicvenues/README.md#venbydistanceusv1venuesdistancequerypost) - Retrieve all restricted public venues located within given distance of location.
* [venByPolyUsV1VenuesPolygonQueryPost](docs/restrictedpublicvenues/README.md#venbypolyusv1venuespolygonquerypost) - Retrieve all restricted public venues located within given GeoJSON Polygon.
* [venByRouteUsV1VenuesRouteQueryPost](docs/restrictedpublicvenues/README.md#venbyrouteusv1venuesroutequerypost) - Retrieve all restricted public venues traversed by route.

### [specialSecurityAreas](docs/specialsecurityareas/README.md)

* [ssaByDistanceUsV1SsaDistanceQueryPost](docs/specialsecurityareas/README.md#ssabydistanceusv1ssadistancequerypost) - Retrieve all special security areas located within given distance of location.
* [ssaByPolyUsV1SsaPolygonQueryPost](docs/specialsecurityareas/README.md#ssabypolyusv1ssapolygonquerypost) - Retrieve all special security areas located within given GeoJSON Polygon.
* [ssaByRouteUsV1SsaRouteQueryPost](docs/specialsecurityareas/README.md#ssabyrouteusv1ssaroutequerypost) - Retrieve all special security areas traversed by route.

### [surfaceObstacles](docs/surfaceobstacles/README.md)

* [obstaclesByDistanceUsV1ObstaclesDistanceQueryPost](docs/surfaceobstacles/README.md#obstaclesbydistanceusv1obstaclesdistancequerypost) - Retrieve obstacles within given distance of location.
* [obstaclesByPolyUsV1ObstaclesPolygonQueryPost](docs/surfaceobstacles/README.md#obstaclesbypolyusv1obstaclespolygonquerypost) - Retrieve obstacles located within given area.
* [obstaclesByRouteUsV1ObstaclesRouteQueryPost](docs/surfaceobstacles/README.md#obstaclesbyrouteusv1obstaclesroutequerypost) - Retrieve obstacles found along a route.

### [uasOperatingAreas](docs/uasoperatingareas/README.md)

* [uoaByDistanceUsV1UoaDistanceQueryPost](docs/uasoperatingareas/README.md#uoabydistanceusv1uoadistancequerypost) - Retrieve UAS Operating Areas (UOAs) found within given distance of location.
* [uoaByPolyUsV1UoaPolygonQueryPost](docs/uasoperatingareas/README.md#uoabypolyusv1uoapolygonquerypost) - Retrieve UAS Operating Areas (UOAs) found within given area.
* [uoaByRouteUsV1UoaRouteQueryPost](docs/uasoperatingareas/README.md#uoabyrouteusv1uoaroutequerypost) - Retrieve UAS Operating Areas (UOAs) found along route.

### [weather](docs/weather/README.md)

* [wxByDistanceUsV1WxForecastDistanceQueryPost](docs/weather/README.md#wxbydistanceusv1wxforecastdistancequerypost) - Retrieve forecast values within given distance of location for all requested weather elements and time periods.
* [wxByPolyUsV1WxForecastPolygonQueryPost](docs/weather/README.md#wxbypolyusv1wxforecastpolygonquerypost) - Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
* [wxByRouteUsV1WxForecastRouteQueryPost](docs/weather/README.md#wxbyrouteusv1wxforecastroutequerypost) - Retrieve forecast values along a route for all requested weather elements and time periods.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
