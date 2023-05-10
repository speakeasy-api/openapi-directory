# softwares

### Available Operations

* [getNetworkSmDeviceSoftwares](#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [getNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user

## getNetworkSmDeviceSoftwares

Get a list of softwares associated with a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceSoftwaresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceSoftwaresRequest();
    $request->deviceId = 'aut';
    $request->networkId = 'eligendi';

    $response = $sdk->softwares->getNetworkSmDeviceSoftwares($request);

    if ($response->getNetworkSmDeviceSoftwares200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUserSoftwares

Get a list of softwares associated with a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserSoftwaresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUserSoftwaresRequest();
    $request->networkId = 'vel';
    $request->userId = 'perspiciatis';

    $response = $sdk->softwares->getNetworkSmUserSoftwares($request);

    if ($response->getNetworkSmUserSoftwares200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
