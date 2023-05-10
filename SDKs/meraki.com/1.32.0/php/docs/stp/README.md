# stp

### Available Operations

* [getNetworkSwitchStp](#getnetworkswitchstp) - Returns STP settings
* [updateNetworkSwitchStp](#updatenetworkswitchstp) - Updates STP settings

## getNetworkSwitchStp

Returns STP settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStpRequest();
    $request->networkId = 'incidunt';

    $response = $sdk->stp->getNetworkSwitchStp($request);

    if ($response->getNetworkSwitchStp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStp

Updates STP settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequestBodyStpBridgePriority;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStpRequest();
    $request->requestBody = new UpdateNetworkSwitchStpRequestBody();
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stpBridgePriority = [
        new UpdateNetworkSwitchStpRequestBodyStpBridgePriority(),
    ];
    $request->networkId = 'porro';

    $response = $sdk->stp->updateNetworkSwitchStp($request);

    if ($response->updateNetworkSwitchStp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
