# occupancy

### Available Operations

* [occupancyGet](#occupancyget) - Gets the occupancy for a car park with a given id
* [occupancyGetAllChargeConnectorStatus](#occupancygetallchargeconnectorstatus) - Gets the occupancy for all charge connectors
* [occupancyGetBikePointsOccupancies](#occupancygetbikepointsoccupancies) - Get the occupancy for bike points.
* [occupancyGetChargeConnectorStatus](#occupancygetchargeconnectorstatus) - Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
* [getOccupancyCarPark](#getoccupancycarpark) - Gets the occupancy for all car parks that have occupancy data

## occupancyGet

Gets the occupancy for a car park with a given id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OccupancyGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OccupancyGetRequest();
    $request->id = '9890afa5-63e2-4516-be4c-8b711e5b7fd2';

    $response = $sdk->occupancy->occupancyGet($request);

    if ($response->tflApiPresentationEntitiesCarParkOccupancy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## occupancyGetAllChargeConnectorStatus

Gets the occupancy for all charge connectors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->occupancy->occupancyGetAllChargeConnectorStatus();

    if ($response->tflApiPresentationEntitiesChargeConnectorOccupancies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## occupancyGetBikePointsOccupancies

Get the occupancy for bike points.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OccupancyGetBikePointsOccupanciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OccupancyGetBikePointsOccupanciesRequest();
    $request->ids = [
        'pariatur',
        'accusantium',
        'consequuntur',
        'praesentium',
    ];

    $response = $sdk->occupancy->occupancyGetBikePointsOccupancies($request);

    if ($response->tflApiPresentationEntitiesBikePointOccupancies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## occupancyGetChargeConnectorStatus

Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OccupancyGetChargeConnectorStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OccupancyGetChargeConnectorStatusRequest();
    $request->ids = [
        'magni',
        'sunt',
        'quo',
    ];

    $response = $sdk->occupancy->occupancyGetChargeConnectorStatus($request);

    if ($response->tflApiPresentationEntitiesChargeConnectorOccupancies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOccupancyCarPark

Gets the occupancy for all car parks that have occupancy data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->occupancy->getOccupancyCarPark();

    if ($response->tflApiPresentationEntitiesCarParkOccupancies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
