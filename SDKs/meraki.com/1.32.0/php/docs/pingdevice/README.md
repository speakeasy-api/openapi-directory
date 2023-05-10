# pingDevice

### Available Operations

* [createDeviceLiveToolsPingDevice](#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [getDeviceLiveToolsPingDevice](#getdevicelivetoolspingdevice) - Return a ping device job

## createDeviceLiveToolsPingDevice

Enqueue a job to check connectivity status to the device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDeviceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceLiveToolsPingDeviceRequest();
    $request->requestBody = new CreateDeviceLiveToolsPingDeviceRequestBody();
    $request->requestBody->count = 626341;
    $request->serial = 'odio';

    $response = $sdk->pingDevice->createDeviceLiveToolsPingDevice($request);

    if ($response->createDeviceLiveToolsPingDevice201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceLiveToolsPingDevice

Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLiveToolsPingDeviceRequest();
    $request->id = 'e88ddb36-fd1c-4cc3-81c8-6573474f0a74';
    $request->serial = 'eaque';

    $response = $sdk->pingDevice->getDeviceLiveToolsPingDevice($request);

    if ($response->getDeviceLiveToolsPingDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
