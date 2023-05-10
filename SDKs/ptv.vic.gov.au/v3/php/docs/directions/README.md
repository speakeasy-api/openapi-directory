# directions

### Available Operations

* [directionsForDirection](#directionsfordirection) - View all routes for a direction of travel
* [directionsForDirectionAndType](#directionsfordirectionandtype) - View all routes of a particular type for a direction of travel
* [directionsForRoute](#directionsforroute) - View directions that a route travels in

## directionsForDirection

View all routes for a direction of travel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectionsForDirectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectionsForDirectionRequest();
    $request->devid = 'occaecati';
    $request->directionId = 143353;
    $request->signature = 'deleniti';
    $request->token = 'hic';

    $response = $sdk->directions->directionsForDirection($request);

    if ($response->v3DirectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directionsForDirectionAndType

View all routes of a particular type for a direction of travel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectionsForDirectionAndTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DirectionsForDirectionAndTypeRouteTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectionsForDirectionAndTypeRequest();
    $request->devid = 'optio';
    $request->directionId = 521848;
    $request->routeType = DirectionsForDirectionAndTypeRouteTypeEnum::ZERO;
    $request->signature = 'commodi';
    $request->token = 'molestiae';

    $response = $sdk->directions->directionsForDirectionAndType($request);

    if ($response->v3DirectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directionsForRoute

View directions that a route travels in

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectionsForRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectionsForRouteRequest();
    $request->devid = 'modi';
    $request->routeId = 186332;
    $request->signature = 'impedit';
    $request->token = 'cum';

    $response = $sdk->directions->directionsForRoute($request);

    if ($response->v3DirectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
