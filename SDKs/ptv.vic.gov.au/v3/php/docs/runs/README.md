# runs

### Available Operations

* [runsForRoute](#runsforroute) - View all trip/service runs for a specific route ID
* [runsForRouteAndRouteType](#runsforrouteandroutetype) - View all trip/service runs for a specific route ID and route type
* [runsForRun](#runsforrun) - View all trip/service runs for a specific run_ref
* [runsForRunAndRouteType](#runsforrunandroutetype) - View the trip/service run for a specific run_ref and route type

## runsForRoute

View all trip/service runs for a specific route ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunsForRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\RunsForRouteExpandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunsForRouteRequest();
    $request->dateUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T16:42:52.927Z');
    $request->devid = 'reprehenderit';
    $request->expand = [
        RunsForRouteExpandEnum::NONE,
        RunsForRouteExpandEnum::ALL,
    ];
    $request->routeId = 359444;
    $request->signature = 'dolore';
    $request->token = 'iusto';

    $response = $sdk->runs->runsForRoute($request);

    if ($response->v3RunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runsForRouteAndRouteType

View all trip/service runs for a specific route ID and route type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunsForRouteAndRouteTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\RunsForRouteAndRouteTypeExpandEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunsForRouteAndRouteTypeRouteTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunsForRouteAndRouteTypeRequest();
    $request->dateUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-24T15:19:40.519Z');
    $request->devid = 'enim';
    $request->expand = [
        RunsForRouteAndRouteTypeExpandEnum::VEHICLE_DESCRIPTOR,
        RunsForRouteAndRouteTypeExpandEnum::NONE,
        RunsForRouteAndRouteTypeExpandEnum::ALL,
        RunsForRouteAndRouteTypeExpandEnum::ALL,
    ];
    $request->routeId = 692472;
    $request->routeType = RunsForRouteAndRouteTypeRouteTypeEnum::TWO;
    $request->signature = 'excepturi';
    $request->token = 'pariatur';

    $response = $sdk->runs->runsForRouteAndRouteType($request);

    if ($response->v3RunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runsForRun

View all trip/service runs for a specific run_ref

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunsForRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\RunsForRunExpandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunsForRunRequest();
    $request->dateUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T05:25:54.356Z');
    $request->devid = 'rem';
    $request->expand = [
        RunsForRunExpandEnum::ALL,
        RunsForRunExpandEnum::NONE,
        RunsForRunExpandEnum::VEHICLE_POSITION,
        RunsForRunExpandEnum::ALL,
    ];
    $request->includeGeopath = false;
    $request->runRef = 'itaque';
    $request->signature = 'incidunt';
    $request->token = 'enim';

    $response = $sdk->runs->runsForRun($request);

    if ($response->v3RunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runsForRunAndRouteType

View the trip/service run for a specific run_ref and route type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunsForRunAndRouteTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\RunsForRunAndRouteTypeExpandEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunsForRunAndRouteTypeRouteTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunsForRunAndRouteTypeRequest();
    $request->dateUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T09:29:06.042Z');
    $request->devid = 'quibusdam';
    $request->expand = [
        RunsForRunAndRouteTypeExpandEnum::VEHICLE_POSITION,
    ];
    $request->includeGeopath = false;
    $request->routeType = RunsForRunAndRouteTypeRouteTypeEnum::THREE;
    $request->runRef = 'quibusdam';
    $request->signature = 'labore';
    $request->token = 'modi';

    $response = $sdk->runs->runsForRunAndRouteType($request);

    if ($response->v3RunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
