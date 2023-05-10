# devices

### Available Operations

* [createDeviceCode](#createdevicecode) - CreateDeviceCode
* [getDeviceCode](#getdevicecode) - GetDeviceCode
* [listDeviceCodes](#listdevicecodes) - ListDeviceCodes

## createDeviceCode

Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected
terminal mode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeviceCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceCode;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceCodeRequest();
    $request->deviceCode = new DeviceCode();
    $request->deviceCode->code = 'possimus';
    $request->deviceCode->createdAt = 'facilis';
    $request->deviceCode->deviceId = 'cum';
    $request->deviceCode->id = '675fd5e6-0b37-45ed-8f6f-bee41f33317f';
    $request->deviceCode->locationId = 'debitis';
    $request->deviceCode->name = 'Stacy Pollich DVM';
    $request->deviceCode->pairBy = 'libero';
    $request->deviceCode->pairedAt = 'vitae';
    $request->deviceCode->productType = 'accusamus';
    $request->deviceCode->status = 'similique';
    $request->deviceCode->statusChangedAt = 'tempora';
    $request->idempotencyKey = 'aspernatur';

    $requestSecurity = new CreateDeviceCodeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->createDeviceCode($request, $requestSecurity);

    if ($response->createDeviceCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCode

Retrieves DeviceCode with the associated ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCodeRequest();
    $request->id = '6555ba3c-2874-44ed-93b8-8f3a8d8f5c0b';

    $requestSecurity = new GetDeviceCodeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->getDeviceCode($request, $requestSecurity);

    if ($response->getDeviceCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeviceCodes

Lists all DeviceCodes associated with the merchant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceCodesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceCodesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceCodesRequest();
    $request->cursor = 'sed';
    $request->locationId = 'reiciendis';
    $request->productType = 'explicabo';
    $request->status = 'asperiores';

    $requestSecurity = new ListDeviceCodesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->devices->listDeviceCodes($request, $requestSecurity);

    if ($response->listDeviceCodesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
