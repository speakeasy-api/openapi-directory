# order

### Available Operations

* [getNetworkSwitchQosRulesOrder](#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [updateNetworkSwitchQosRulesOrder](#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch

## getNetworkSwitchQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchQosRulesOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchQosRulesOrderRequest();
    $request->networkId = 'iure';

    $response = $sdk->order->getNetworkSwitchQosRulesOrder($request);

    if ($response->getNetworkSwitchQosRulesOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchQosRulesOrder

Update the order in which the rules should be processed by the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRulesOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRulesOrderRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchQosRulesOrderRequest();
    $request->requestBody = new UpdateNetworkSwitchQosRulesOrderRequestBody();
    $request->requestBody->ruleIds = [
        'placeat',
    ];
    $request->networkId = 'voluptatum';

    $response = $sdk->order->updateNetworkSwitchQosRulesOrder($request);

    if ($response->updateNetworkSwitchQosRulesOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
