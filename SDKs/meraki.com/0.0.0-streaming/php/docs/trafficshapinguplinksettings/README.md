# trafficShapingUplinkSettings

### Available Operations

* [getNetworkUplinkSettings](#getnetworkuplinksettings) - Returns the uplink settings for your MX network.
* [updateNetworkUplinkSettings](#updatenetworkuplinksettings) - Updates the uplink settings for your MX network.

## getNetworkUplinkSettings

Returns the uplink settings for your MX network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkUplinkSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkUplinkSettingsRequest();
    $request->networkId = 'hic';

    $response = $sdk->trafficShapingUplinkSettings->getNetworkUplinkSettings($request);

    if ($response->getNetworkUplinkSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkUplinkSettings

Updates the uplink settings for your MX network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkUplinkSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkUplinkSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkUplinkSettingsRequestBodyBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsCellular;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkUplinkSettingsRequest();
    $request->requestBody = new UpdateNetworkUplinkSettingsRequestBody();
    $request->requestBody->bandwidthLimits = new UpdateNetworkUplinkSettingsRequestBodyBandwidthLimits();
    $request->requestBody->bandwidthLimits->cellular = new UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsCellular();
    $request->requestBody->bandwidthLimits->cellular->limitDown = 848151;
    $request->requestBody->bandwidthLimits->cellular->limitUp = 52508;
    $request->requestBody->bandwidthLimits->wan1 = new UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan1();
    $request->requestBody->bandwidthLimits->wan1->limitDown = 935833;
    $request->requestBody->bandwidthLimits->wan1->limitUp = 596211;
    $request->requestBody->bandwidthLimits->wan2 = new UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan2();
    $request->requestBody->bandwidthLimits->wan2->limitDown = 983427;
    $request->requestBody->bandwidthLimits->wan2->limitUp = 891801;
    $request->networkId = 'aliquid';

    $response = $sdk->trafficShapingUplinkSettings->updateNetworkUplinkSettings($request);

    if ($response->updateNetworkUplinkSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
