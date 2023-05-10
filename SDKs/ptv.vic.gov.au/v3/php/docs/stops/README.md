# stops

### Available Operations

* [stopsStopDetails](#stopsstopdetails) - View facilities at a specific stop (Metro and V/Line stations only)
* [stopsStopsByGeolocation](#stopsstopsbygeolocation) - View all stops near a specific location
* [stopsStopsForRoute](#stopsstopsforroute) - View all stops on a specific route

## stopsStopDetails

View facilities at a specific stop (Metro and V/Line stations only)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopsStopDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopsStopDetailsRouteTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopsStopDetailsRequest();
    $request->devid = 'fugit';
    $request->gtfs = false;
    $request->routeType = StopsStopDetailsRouteTypeEnum::THREE;
    $request->signature = 'excepturi';
    $request->stopAccessibility = false;
    $request->stopAmenities = false;
    $request->stopContact = false;
    $request->stopDisruptions = false;
    $request->stopId = 270008;
    $request->stopLocation = false;
    $request->stopStaffing = false;
    $request->stopTicket = false;
    $request->token = 'facilis';

    $response = $sdk->stops->stopsStopDetails($request);

    if ($response->v3StopResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopsStopsByGeolocation

View all stops near a specific location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopsStopsByGeolocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopsStopsByGeolocationRouteTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopsStopsByGeolocationRequest();
    $request->devid = 'tempore';
    $request->latitude = 2884.76;
    $request->longitude = 9621.89;
    $request->maxDistance = 4332.88;
    $request->maxResults = 248753;
    $request->routeTypes = [
        StopsStopsByGeolocationRouteTypesEnum::TWO,
        StopsStopsByGeolocationRouteTypesEnum::ONE,
        StopsStopsByGeolocationRouteTypesEnum::TWO,
        StopsStopsByGeolocationRouteTypesEnum::FOUR,
    ];
    $request->signature = 'sint';
    $request->stopDisruptions = false;
    $request->token = 'officia';

    $response = $sdk->stops->stopsStopsByGeolocation($request);

    if ($response->v3StopsByDistanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopsStopsForRoute

View all stops on a specific route

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopsStopsForRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopsStopsForRouteRouteTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopsStopsForRouteRequest();
    $request->devid = 'dolor';
    $request->directionId = 891555;
    $request->geopathUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-17T08:08:22.040Z');
    $request->includeGeopath = false;
    $request->routeId = 447125;
    $request->routeType = StopsStopsForRouteRouteTypeEnum::TWO;
    $request->signature = 'illum';
    $request->stopDisruptions = false;
    $request->token = 'maiores';

    $response = $sdk->stops->stopsStopsForRoute($request);

    if ($response->v3StopsOnRouteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
