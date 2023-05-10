# performance

### Available Operations

* [getDeviceAppliancePerformance](#getdeviceapplianceperformance) - Return the performance score for a single MX

## getDeviceAppliancePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAppliancePerformanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAppliancePerformanceRequest();
    $request->serial = 'cupiditate';

    $response = $sdk->performance->getDeviceAppliancePerformance($request);

    if ($response->getDeviceAppliancePerformance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
