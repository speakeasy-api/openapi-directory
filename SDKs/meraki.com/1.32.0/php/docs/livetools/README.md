# liveTools

### Available Operations

* [blinkDeviceLeds](#blinkdeviceleds) - Blink the LEDs on a device
* [createDeviceLiveToolsPing](#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [createDeviceLiveToolsPingDevice](#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [cycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [getDeviceLiveToolsPing](#getdevicelivetoolsping) - Return a ping job
* [getDeviceLiveToolsPingDevice](#getdevicelivetoolspingdevice) - Return a ping device job
* [rebootDevice](#rebootdevice) - Reboot a device

## blinkDeviceLeds

Blink the LEDs on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BlinkDeviceLedsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BlinkDeviceLedsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BlinkDeviceLedsRequest();
    $request->requestBody = new BlinkDeviceLedsRequestBody();
    $request->requestBody->duration = 953677;
    $request->requestBody->duty = 909014;
    $request->requestBody->period = 573938;
    $request->serial = 'saepe';

    $response = $sdk->liveTools->blinkDeviceLeds($request);

    if ($response->blinkDeviceLeds202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->requestBody->count = 73445;
    $request->requestBody->target = 'minima';
    $request->serial = 'nulla';

    $response = $sdk->liveTools->createDeviceLiveToolsPing($request);

    if ($response->createDeviceLiveToolsPing201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->requestBody->count = 971973;
    $request->serial = 'molestias';

    $response = $sdk->liveTools->createDeviceLiveToolsPingDevice($request);

    if ($response->createDeviceLiveToolsPingDevice201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cycleDeviceSwitchPorts

Cycle a set of switch ports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CycleDeviceSwitchPortsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CycleDeviceSwitchPortsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CycleDeviceSwitchPortsRequest();
    $request->requestBody = new CycleDeviceSwitchPortsRequestBody();
    $request->requestBody->ports = [
        'amet',
    ];
    $request->serial = 'natus';

    $response = $sdk->liveTools->cycleDeviceSwitchPorts($request);

    if ($response->cycleDeviceSwitchPorts200ApplicationJSONObject !== null) {
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
    $request->id = '07f37831-983d-442e-94a8-5466597c5023';
    $request->serial = 'nesciunt';

    $response = $sdk->liveTools->getDeviceLiveToolsPing($request);

    if ($response->getDeviceLiveToolsPing200ApplicationJSONObject !== null) {
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
    $request->id = 'c1471d51-aaa6-4ddf-9abd-6487c5fc2b86';
    $request->serial = 'aspernatur';

    $response = $sdk->liveTools->getDeviceLiveToolsPingDevice($request);

    if ($response->getDeviceLiveToolsPingDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebootDevice

Reboot a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RebootDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebootDeviceRequest();
    $request->serial = 'est';

    $response = $sdk->liveTools->rebootDevice($request);

    if ($response->rebootDevice202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
