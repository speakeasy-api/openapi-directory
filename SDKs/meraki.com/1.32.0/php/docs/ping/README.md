# ping

### Available Operations

* [createDeviceLiveToolsPing](#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [getDeviceLiveToolsPing](#getdevicelivetoolsping) - Return a ping job

## createDeviceLiveToolsPing

Enqueue a job to ping a target host from the device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceLiveToolsPingRequest();
    $request->requestBody = new CreateDeviceLiveToolsPingRequestBody();
    $request->requestBody->count = 526451;
    $request->requestBody->target = 'sit';
    $request->serial = 'cumque';

    $response = $sdk->ping->createDeviceLiveToolsPing($request);

    if ($response->createDeviceLiveToolsPing201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceLiveToolsPing

Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLiveToolsPingRequest();
    $request->id = 'a37fb107-8903-42ac-b331-72e2dd79ec74';
    $request->serial = 'distinctio';

    $response = $sdk->ping->getDeviceLiveToolsPing($request);

    if ($response->getDeviceLiveToolsPing200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
