# disruptions

### Available Operations

* [disruptionsGetAllDisruptions](#disruptionsgetalldisruptions) - View all disruptions for all route types
* [disruptionsGetDisruptionById](#disruptionsgetdisruptionbyid) - View a specific disruption
* [disruptionsGetDisruptionModes](#disruptionsgetdisruptionmodes) - Get all disruption modes
* [disruptionsGetDisruptionsByRoute](#disruptionsgetdisruptionsbyroute) - View all disruptions for a particular route
* [disruptionsGetDisruptionsByRouteAndStop](#disruptionsgetdisruptionsbyrouteandstop) - View all disruptions for a particular route and stop
* [disruptionsGetDisruptionsByStop](#disruptionsgetdisruptionsbystop) - View all disruptions for a particular stop

## disruptionsGetAllDisruptions

View all disruptions for all route types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetAllDisruptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetAllDisruptionsDisruptionModesEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetAllDisruptionsDisruptionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetAllDisruptionsRouteTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisruptionsGetAllDisruptionsRequest();
    $request->devid = 'esse';
    $request->disruptionModes = [
        DisruptionsGetAllDisruptionsDisruptionModesEnum::NINE,
    ];
    $request->disruptionStatus = DisruptionsGetAllDisruptionsDisruptionStatusEnum::CURRENT;
    $request->routeTypes = [
        DisruptionsGetAllDisruptionsRouteTypesEnum::ONE,
    ];
    $request->signature = 'natus';
    $request->token = 'sed';

    $response = $sdk->disruptions->disruptionsGetAllDisruptions($request);

    if ($response->v3DisruptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disruptionsGetDisruptionById

View a specific disruption

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetDisruptionByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisruptionsGetDisruptionByIdRequest();
    $request->devid = 'iste';
    $request->disruptionId = 222321;
    $request->signature = 'natus';
    $request->token = 'laboriosam';

    $response = $sdk->disruptions->disruptionsGetDisruptionById($request);

    if ($response->v3DisruptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disruptionsGetDisruptionModes

Get all disruption modes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetDisruptionModesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisruptionsGetDisruptionModesRequest();
    $request->devid = 'hic';
    $request->signature = 'saepe';
    $request->token = 'fuga';

    $response = $sdk->disruptions->disruptionsGetDisruptionModes($request);

    if ($response->v3DisruptionModesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disruptionsGetDisruptionsByRoute

View all disruptions for a particular route

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetDisruptionsByRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetDisruptionsByRouteDisruptionStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisruptionsGetDisruptionsByRouteRequest();
    $request->devid = 'in';
    $request->disruptionStatus = DisruptionsGetDisruptionsByRouteDisruptionStatusEnum::CURRENT;
    $request->routeId = 613064;
    $request->signature = 'iure';
    $request->token = 'saepe';

    $response = $sdk->disruptions->disruptionsGetDisruptionsByRoute($request);

    if ($response->v3DisruptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disruptionsGetDisruptionsByRouteAndStop

View all disruptions for a particular route and stop

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetDisruptionsByRouteAndStopRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisruptionsGetDisruptionsByRouteAndStopRequest();
    $request->devid = 'quidem';
    $request->disruptionStatus = DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum::CURRENT;
    $request->routeId = 60225;
    $request->signature = 'reiciendis';
    $request->stopId = 666767;
    $request->token = 'mollitia';

    $response = $sdk->disruptions->disruptionsGetDisruptionsByRouteAndStop($request);

    if ($response->v3DisruptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disruptionsGetDisruptionsByStop

View all disruptions for a particular stop

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetDisruptionsByStopRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisruptionsGetDisruptionsByStopDisruptionStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisruptionsGetDisruptionsByStopRequest();
    $request->devid = 'laborum';
    $request->disruptionStatus = DisruptionsGetDisruptionsByStopDisruptionStatusEnum::CURRENT;
    $request->signature = 'dolorem';
    $request->stopId = 358152;
    $request->token = 'explicabo';

    $response = $sdk->disruptions->disruptionsGetDisruptionsByStop($request);

    if ($response->v3DisruptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
