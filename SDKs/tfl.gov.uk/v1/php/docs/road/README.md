# road

### Available Operations

* [roadDisruptedStreets](#roaddisruptedstreets) - Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
* [roadDisruption](#roaddisruption) - Get active disruptions, filtered by road ids
* [roadDisruptionById](#roaddisruptionbyid) - Gets a list of active disruptions filtered by disruption Ids.
* [roadGet](#roadget) - Gets all roads managed by TfL
* [roadMetaCategories](#roadmetacategories) - Gets a list of valid RoadDisruption categories
* [roadMetaSeverities](#roadmetaseverities) - Gets a list of valid RoadDisruption severity codes
* [roadStatus](#roadstatus) - Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
* [getRoadIds](#getroadids) - Gets the road with the specified id (e.g. A1)

## roadDisruptedStreets

Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RoadDisruptedStreetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoadDisruptedStreetsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-27T14:25:42.204Z');
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T20:48:38.083Z');

    $response = $sdk->road->roadDisruptedStreets($request);

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## roadDisruption

Get active disruptions, filtered by road ids

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RoadDisruptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoadDisruptionRequest();
    $request->categories = [
        'ipsa',
    ];
    $request->closures = false;
    $request->ids = [
        'odio',
        'quaerat',
    ];
    $request->severities = [
        'quidem',
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->stripContent = false;

    $response = $sdk->road->roadDisruption($request);

    if ($response->tflApiPresentationEntitiesRoadDisruptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## roadDisruptionById

Gets a list of active disruptions filtered by disruption Ids.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RoadDisruptionByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoadDisruptionByIdRequest();
    $request->disruptionIds = [
        'atque',
    ];
    $request->stripContent = false;

    $response = $sdk->road->roadDisruptionById($request);

    if ($response->tflApiPresentationEntitiesRoadDisruption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## roadGet

Gets all roads managed by TfL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->road->roadGet();

    if ($response->tflApiPresentationEntitiesRoadCorridors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## roadMetaCategories

Gets a list of valid RoadDisruption categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->road->roadMetaCategories();

    if ($response->roadMetaCategories200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## roadMetaSeverities

Gets a list of valid RoadDisruption severity codes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->road->roadMetaSeverities();

    if ($response->tflApiPresentationEntitiesStatusSeverities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## roadStatus

Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RoadStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoadStatusRequest();
    $request->dateRangeNullableEndDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-23T01:35:05.899Z');
    $request->dateRangeNullableStartDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-04T12:00:33.616Z');
    $request->ids = [
        'iusto',
        'voluptate',
        'dolorum',
    ];

    $response = $sdk->road->roadStatus($request);

    if ($response->tflApiPresentationEntitiesRoadCorridors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRoadIds

Gets the road with the specified id (e.g. A1)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRoadIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRoadIdsRequest();
    $request->ids = [
        'omnis',
        'necessitatibus',
        'distinctio',
    ];

    $response = $sdk->road->getRoadIds($request);

    if ($response->tflApiPresentationEntitiesRoadCorridors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
