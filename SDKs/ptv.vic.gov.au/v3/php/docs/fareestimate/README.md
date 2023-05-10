# fareEstimate

### Available Operations

* [fareEstimateGetFareEstimateByZone](#fareestimategetfareestimatebyzone) - Estimate a fare by zone

## fareEstimateGetFareEstimateByZone

Estimate a fare by zone

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FareEstimateGetFareEstimateByZoneRequest;
use \OpenAPI\OpenAPI\Models\Operations\FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FareEstimateGetFareEstimateByZoneRequest();
    $request->devid = 'nobis';
    $request->isJourneyInFreeTramZone = false;
    $request->journeyTouchOffUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T03:24:11.703Z');
    $request->journeyTouchOnUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T08:35:09.957Z');
    $request->maxZone = 570197;
    $request->minZone = 38425;
    $request->signature = 'iure';
    $request->token = 'culpa';
    $request->travelledRouteTypes = [
        FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum::FOUR,
        FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum::ZERO,
        FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum::THREE,
        FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum::ONE,
    ];

    $response = $sdk->fareEstimate->fareEstimateGetFareEstimateByZone($request);

    if ($response->v3FareEstimateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
