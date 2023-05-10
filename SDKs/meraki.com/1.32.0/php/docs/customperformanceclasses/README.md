# customPerformanceClasses

### Available Operations

* [createNetworkApplianceTrafficShapingCustomPerformanceClass](#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [deleteNetworkApplianceTrafficShapingCustomPerformanceClass](#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClass](#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClasses](#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [updateNetworkApplianceTrafficShapingCustomPerformanceClass](#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network

## createNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->requestBody = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody();
    $request->requestBody->maxJitter = 476891;
    $request->requestBody->maxLatency = 646456;
    $request->requestBody->maxLossPercentage = 675677;
    $request->requestBody->name = 'Luz Crooks Sr.';
    $request->networkId = 'ratione';

    $response = $sdk->customPerformanceClasses->createNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->customPerformanceClassId = 'nisi';
    $request->networkId = 'perspiciatis';

    $response = $sdk->customPerformanceClasses->deleteNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->customPerformanceClassId = 'nostrum';
    $request->networkId = 'temporibus';

    $response = $sdk->customPerformanceClasses->getNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest();
    $request->networkId = 'et';

    $response = $sdk->customPerformanceClasses->getNetworkApplianceTrafficShapingCustomPerformanceClasses($request);

    if ($response->getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody();
    $request->requestBody->maxJitter = 893868;
    $request->requestBody->maxLatency = 393189;
    $request->requestBody->maxLossPercentage = 400044;
    $request->requestBody->name = 'Willard Zieme';
    $request->customPerformanceClassId = 'quaerat';
    $request->networkId = 'veniam';

    $response = $sdk->customPerformanceClasses->updateNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
