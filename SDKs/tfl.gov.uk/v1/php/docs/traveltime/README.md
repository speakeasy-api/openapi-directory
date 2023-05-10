# travelTime

### Available Operations

* [travelTimeGetCompareOverlay](#traveltimegetcompareoverlay) - Gets the TravelTime overlay.
* [travelTimeGetOverlay](#traveltimegetoverlay) - Gets the TravelTime overlay.

## travelTimeGetCompareOverlay

Gets the TravelTime overlay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelTimeGetCompareOverlayRequest;
use \OpenAPI\OpenAPI\Models\Operations\TravelTimeGetCompareOverlayDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelTimeGetCompareOverlayRequest();
    $request->compareType = 'aliquam';
    $request->compareValue = 'sapiente';
    $request->direction = TravelTimeGetCompareOverlayDirectionEnum::AVERAGE;
    $request->height = 355369;
    $request->mapCenterLat = 4438.79;
    $request->mapCenterLon = 3567.07;
    $request->modeId = 'nisi';
    $request->pinLat = 163.28;
    $request->pinLon = 5318.49;
    $request->scenarioTitle = 'qui';
    $request->timeOfDayId = 'quibusdam';
    $request->travelTimeInterval = 401259;
    $request->width = 536275;
    $request->z = 929292;

    $response = $sdk->travelTime->travelTimeGetCompareOverlay($request);

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## travelTimeGetOverlay

Gets the TravelTime overlay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelTimeGetOverlayRequest;
use \OpenAPI\OpenAPI\Models\Operations\TravelTimeGetOverlayDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelTimeGetOverlayRequest();
    $request->direction = TravelTimeGetOverlayDirectionEnum::TO;
    $request->height = 99615;
    $request->mapCenterLat = 6091.78;
    $request->mapCenterLon = 9453.02;
    $request->modeId = 'quasi';
    $request->pinLat = 8694.89;
    $request->pinLon = 920.27;
    $request->scenarioTitle = 'voluptate';
    $request->timeOfDayId = 'ipsa';
    $request->travelTimeInterval = 326701;
    $request->width = 86532;
    $request->z = 232744;

    $response = $sdk->travelTime->travelTimeGetOverlay($request);

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
