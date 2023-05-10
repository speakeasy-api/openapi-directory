# mtu

### Available Operations

* [getNetworkSwitchMtu](#getnetworkswitchmtu) - Return the MTU configuration
* [updateNetworkSwitchMtu](#updatenetworkswitchmtu) - Update the MTU configuration

## getNetworkSwitchMtu

Return the MTU configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchMtuRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchMtuRequest();
    $request->networkId = 'dolore';

    $response = $sdk->mtu->getNetworkSwitchMtu($request);

    if ($response->getNetworkSwitchMtu200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchMtu

Update the MTU configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchMtuRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchMtuRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchMtuRequestBodyOverrides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchMtuRequest();
    $request->requestBody = new UpdateNetworkSwitchMtuRequestBody();
    $request->requestBody->defaultMtuSize = 448405;
    $request->requestBody->overrides = [
        new UpdateNetworkSwitchMtuRequestBodyOverrides(),
        new UpdateNetworkSwitchMtuRequestBodyOverrides(),
        new UpdateNetworkSwitchMtuRequestBodyOverrides(),
        new UpdateNetworkSwitchMtuRequestBodyOverrides(),
    ];
    $request->networkId = 'fugiat';

    $response = $sdk->mtu->updateNetworkSwitchMtu($request);

    if ($response->updateNetworkSwitchMtu200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
