# bonjourForwarding

### Available Operations

* [getNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID

## getNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidBonjourForwardingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidBonjourForwardingRequest();
    $request->networkId = 'temporibus';
    $request->number = 'quos';

    $response = $sdk->bonjourForwarding->getNetworkWirelessSsidBonjourForwarding($request);

    if ($response->getNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidBonjourForwardingRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidBonjourForwardingRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
    ];
    $request->networkId = 'itaque';
    $request->number = 'commodi';

    $response = $sdk->bonjourForwarding->updateNetworkWirelessSsidBonjourForwarding($request);

    if ($response->updateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
