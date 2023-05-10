# wirelessSettings

### Available Operations

* [getNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [updateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network

## getNetworkWirelessSettings

Return the wireless settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSettingsRequest();
    $request->networkId = 'numquam';

    $response = $sdk->wirelessSettings->getNetworkWirelessSettings($request);

    if ($response->getNetworkWirelessSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSettings

Update the wireless settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSettingsRequest();
    $request->requestBody = new UpdateNetworkWirelessSettingsRequestBody();
    $request->requestBody->ipv6BridgeEnabled = false;
    $request->requestBody->ledLightsOn = false;
    $request->requestBody->locationAnalyticsEnabled = false;
    $request->requestBody->meshingEnabled = false;
    $request->requestBody->upgradeStrategy = UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum::MINIMIZE_CLIENT_DOWNTIME;
    $request->networkId = 'quos';

    $response = $sdk->wirelessSettings->updateNetworkWirelessSettings($request);

    if ($response->updateNetworkWirelessSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
