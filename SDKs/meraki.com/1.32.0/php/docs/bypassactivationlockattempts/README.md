# bypassActivationLockAttempts

### Available Operations

* [createNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [getNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status

## createNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmBypassActivationLockAttemptRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmBypassActivationLockAttemptRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSmBypassActivationLockAttemptRequest();
    $request->requestBody = new CreateNetworkSmBypassActivationLockAttemptRequestBody();
    $request->requestBody->ids = [
        'recusandae',
    ];
    $request->networkId = 'similique';

    $response = $sdk->bypassActivationLockAttempts->createNetworkSmBypassActivationLockAttempt($request);

    if ($response->createNetworkSmBypassActivationLockAttempt201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmBypassActivationLockAttemptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmBypassActivationLockAttemptRequest();
    $request->attemptId = 'ut';
    $request->networkId = 'quidem';

    $response = $sdk->bypassActivationLockAttempts->getNetworkSmBypassActivationLockAttempt($request);

    if ($response->getNetworkSmBypassActivationLockAttempt200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
