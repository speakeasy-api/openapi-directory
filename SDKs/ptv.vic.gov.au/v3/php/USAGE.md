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