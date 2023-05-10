# floorPlans

### Available Operations

* [createNetworkFloorPlan](#createnetworkfloorplan) - Upload a floor plan
* [deleteNetworkFloorPlan](#deletenetworkfloorplan) - Destroy a floor plan
* [getNetworkFloorPlan](#getnetworkfloorplan) - Find a floor plan by ID
* [getNetworkFloorPlans](#getnetworkfloorplans) - List the floor plans that belong to your network
* [updateNetworkFloorPlan](#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data

## createNetworkFloorPlan

Upload a floor plan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyBottomLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyBottomRightCorner;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyCenter;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyTopLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyTopRightCorner;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFloorPlanRequest();
    $request->requestBody = new CreateNetworkFloorPlanRequestBody();
    $request->requestBody->bottomLeftCorner = new CreateNetworkFloorPlanRequestBodyBottomLeftCorner();
    $request->requestBody->bottomLeftCorner->lat = 5365.79;
    $request->requestBody->bottomLeftCorner->lng = 6070.45;
    $request->requestBody->bottomRightCorner = new CreateNetworkFloorPlanRequestBodyBottomRightCorner();
    $request->requestBody->bottomRightCorner->lat = 8966.72;
    $request->requestBody->bottomRightCorner->lng = 7146.97;
    $request->requestBody->center = new CreateNetworkFloorPlanRequestBodyCenter();
    $request->requestBody->center->lat = 9903.39;
    $request->requestBody->center->lng = 4694.97;
    $request->requestBody->imageContents = 'ipsum';
    $request->requestBody->name = 'Alberta Ullrich';
    $request->requestBody->topLeftCorner = new CreateNetworkFloorPlanRequestBodyTopLeftCorner();
    $request->requestBody->topLeftCorner->lat = 206.51;
    $request->requestBody->topLeftCorner->lng = 2292.19;
    $request->requestBody->topRightCorner = new CreateNetworkFloorPlanRequestBodyTopRightCorner();
    $request->requestBody->topRightCorner->lat = 7583.79;
    $request->requestBody->topRightCorner->lng = 8815.86;
    $request->networkId = 'ad';

    $response = $sdk->floorPlans->createNetworkFloorPlan($request);

    if ($response->createNetworkFloorPlan201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkFloorPlan

Destroy a floor plan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkFloorPlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkFloorPlanRequest();
    $request->floorPlanId = 'saepe';
    $request->networkId = 'suscipit';

    $response = $sdk->floorPlans->deleteNetworkFloorPlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFloorPlan

Find a floor plan by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFloorPlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFloorPlanRequest();
    $request->floorPlanId = 'deserunt';
    $request->networkId = 'provident';

    $response = $sdk->floorPlans->getNetworkFloorPlan($request);

    if ($response->getNetworkFloorPlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFloorPlans

List the floor plans that belong to your network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFloorPlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFloorPlansRequest();
    $request->networkId = 'minima';

    $response = $sdk->floorPlans->getNetworkFloorPlans($request);

    if ($response->getNetworkFloorPlans200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFloorPlan

Update a floor plan's geolocation and other meta data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyBottomLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyBottomRightCorner;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyCenter;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyTopLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyTopRightCorner;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFloorPlanRequest();
    $request->requestBody = new UpdateNetworkFloorPlanRequestBody();
    $request->requestBody->bottomLeftCorner = new UpdateNetworkFloorPlanRequestBodyBottomLeftCorner();
    $request->requestBody->bottomLeftCorner->lat = 8310.49;
    $request->requestBody->bottomLeftCorner->lng = 5197.11;
    $request->requestBody->bottomRightCorner = new UpdateNetworkFloorPlanRequestBodyBottomRightCorner();
    $request->requestBody->bottomRightCorner->lat = 6289.82;
    $request->requestBody->bottomRightCorner->lng = 0.55;
    $request->requestBody->center = new UpdateNetworkFloorPlanRequestBodyCenter();
    $request->requestBody->center->lat = 8726.51;
    $request->requestBody->center->lng = 3118.6;
    $request->requestBody->imageContents = 'tempora';
    $request->requestBody->name = 'Bernadette Torp';
    $request->requestBody->topLeftCorner = new UpdateNetworkFloorPlanRequestBodyTopLeftCorner();
    $request->requestBody->topLeftCorner->lat = 9527.92;
    $request->requestBody->topLeftCorner->lng = 4561.3;
    $request->requestBody->topRightCorner = new UpdateNetworkFloorPlanRequestBodyTopRightCorner();
    $request->requestBody->topRightCorner->lat = 6874.88;
    $request->requestBody->topRightCorner->lng = 4834.09;
    $request->floorPlanId = 'ipsum';
    $request->networkId = 'quisquam';

    $response = $sdk->floorPlans->updateNetworkFloorPlan($request);

    if ($response->updateNetworkFloorPlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
