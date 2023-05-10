# performanceHistory

### Available Operations

* [getNetworkSmDevicePerformanceHistory](#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.

## getNetworkSmDevicePerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDevicePerformanceHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDevicePerformanceHistoryRequest();
    $request->deviceId = 'tempora';
    $request->endingBefore = 'exercitationem';
    $request->networkId = 'voluptas';
    $request->perPage = 157397;
    $request->startingAfter = 'delectus';

    $response = $sdk->performanceHistory->getNetworkSmDevicePerformanceHistory($request);

    if ($response->getNetworkSmDevicePerformanceHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
