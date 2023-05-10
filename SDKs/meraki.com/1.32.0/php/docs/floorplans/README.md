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
    $request->requestBody->bottomLeftCorner->lat = 5908;
    $request->requestBody->bottomLeftCorner->lng = 2782.31;
    $request->requestBody->bottomRightCorner = new CreateNetworkFloorPlanRequestBodyBottomRightCorner();
    $request->requestBody->bottomRightCorner->lat = 9794.07;
    $request->requestBody->bottomRightCorner->lng = 4069.14;
    $request->requestBody->center = new CreateNetworkFloorPlanRequestBodyCenter();
    $request->requestBody->center->lat = 2672.47;
    $request->requestBody->center->lng = 1926.49;
    $request->requestBody->imageContents = 'nisi';
    $request->requestBody->name = 'Rhonda O'Keefe';
    $request->requestBody->topLeftCorner = new CreateNetworkFloorPlanRequestBodyTopLeftCorner();
    $request->requestBody->topLeftCorner->lat = 437.86;
    $request->requestBody->topLeftCorner->lng = 6634.57;
    $request->requestBody->topRightCorner = new CreateNetworkFloorPlanRequestBodyTopRightCorner();
    $request->requestBody->topRightCorner->lat = 9939.42;
    $request->requestBody->topRightCorner->lng = 5251.6;
    $request->networkId = 'quod';

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
    $request->floorPlanId = 'commodi';
    $request->networkId = 'natus';

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
    $request->floorPlanId = 'beatae';
    $request->networkId = 'placeat';

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
    $request->networkId = 'molestiae';

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
    $request->requestBody->bottomLeftCorner->lat = 2214.09;
    $request->requestBody->bottomLeftCorner->lng = 1551.08;
    $request->requestBody->bottomRightCorner = new UpdateNetworkFloorPlanRequestBodyBottomRightCorner();
    $request->requestBody->bottomRightCorner->lat = 8584.34;
    $request->requestBody->bottomRightCorner->lng = 5821.87;
    $request->requestBody->center = new UpdateNetworkFloorPlanRequestBodyCenter();
    $request->requestBody->center->lat = 9835.96;
    $request->requestBody->center->lng = 7302.47;
    $request->requestBody->imageContents = 'culpa';
    $request->requestBody->name = 'Ross Gulgowski';
    $request->requestBody->topLeftCorner = new UpdateNetworkFloorPlanRequestBodyTopLeftCorner();
    $request->requestBody->topLeftCorner->lat = 6426.52;
    $request->requestBody->topLeftCorner->lng = 1829.52;
    $request->requestBody->topRightCorner = new UpdateNetworkFloorPlanRequestBodyTopRightCorner();
    $request->requestBody->topRightCorner->lat = 6562.84;
    $request->requestBody->topRightCorner->lng = 8779.41;
    $request->floorPlanId = 'quas';
    $request->networkId = 'possimus';

    $response = $sdk->floorPlans->updateNetworkFloorPlan($request);

    if ($response->updateNetworkFloorPlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
