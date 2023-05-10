# departures

### Available Operations

* [departuresGetForStop](#departuresgetforstop) - View departures for all routes from a stop
* [departuresGetForStopAndRoute](#departuresgetforstopandroute) - View departures for a specific route from a stop

## departuresGetForStop

View departures for all routes from a stop

### Example Usage

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
    $request->dateUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T01:03:07.567Z');
    $request->devid = 'molestiae';
    $request->directionId = 791725;
    $request->expand = [
        DeparturesGetForStopExpandEnum::DIRECTION,
        DeparturesGetForStopExpandEnum::DIRECTION,
        DeparturesGetForStopExpandEnum::DISRUPTION,
        DeparturesGetForStopExpandEnum::RUN,
    ];
    $request->gtfs = false;
    $request->includeCancelled = false;
    $request->includeGeopath = false;
    $request->lookBackwards = false;
    $request->maxResults = 925597;
    $request->platformNumbers = [
        71036,
        337396,
        87129,
        648172,
    ];
    $request->routeType = DeparturesGetForStopRouteTypeEnum::ZERO;
    $request->signature = 'ipsam';
    $request->stopId = 832620;
    $request->token = 'sapiente';

    $response = $sdk->departures->departuresGetForStop($request);

    if ($response->v3DeparturesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## departuresGetForStopAndRoute

View departures for a specific route from a stop

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeparturesGetForStopAndRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeparturesGetForStopAndRouteExpandEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeparturesGetForStopAndRouteRouteTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeparturesGetForStopAndRouteRequest();
    $request->dateUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-31T07:34:52.790Z');
    $request->devid = 'at';
    $request->directionId = 870088;
    $request->expand = [
        DeparturesGetForStopAndRouteExpandEnum::DIRECTION,
        DeparturesGetForStopAndRouteExpandEnum::VEHICLE_POSITION,
        DeparturesGetForStopAndRouteExpandEnum::VEHICLE_POSITION,
        DeparturesGetForStopAndRouteExpandEnum::DIRECTION,
    ];
    $request->gtfs = false;
    $request->includeCancelled = false;
    $request->includeGeopath = false;
    $request->lookBackwards = false;
    $request->maxResults = 520478;
    $request->routeId = 'porro';
    $request->routeType = DeparturesGetForStopAndRouteRouteTypeEnum::THREE;
    $request->signature = 'dicta';
    $request->stopId = 720633;
    $request->token = 'officia';

    $response = $sdk->departures->departuresGetForStopAndRoute($request);

    if ($response->v3DeparturesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
