# stormControl

### Available Operations

* [getNetworkSwitchStormControl](#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [updateNetworkSwitchStormControl](#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network

## getNetworkSwitchStormControl

Return the storm control configuration for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStormControlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStormControlRequest();
    $request->networkId = 'vel';

    $response = $sdk->stormControl->getNetworkSwitchStormControl($request);

    if ($response->getNetworkSwitchStormControl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStormControl

Update the storm control configuration for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStormControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStormControlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStormControlRequest();
    $request->requestBody = new UpdateNetworkSwitchStormControlRequestBody();
    $request->requestBody->broadcastThreshold = 636996;
    $request->requestBody->multicastThreshold = 183270;
    $request->requestBody->unknownUnicastThreshold = 296452;
    $request->networkId = 'distinctio';

    $response = $sdk->stormControl->updateNetworkSwitchStormControl($request);

    if ($response->updateNetworkSwitchStormControl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
