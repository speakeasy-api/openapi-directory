# uplinkBandwidth

### Available Operations

* [getNetworkApplianceTrafficShapingUplinkBandwidth](#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [updateNetworkApplianceTrafficShapingUplinkBandwidth](#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.

## getNetworkApplianceTrafficShapingUplinkBandwidth

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingUplinkBandwidthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingUplinkBandwidthRequest();
    $request->networkId = 'quod';

    $response = $sdk->uplinkBandwidth->getNetworkApplianceTrafficShapingUplinkBandwidth($request);

    if ($response->getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingUplinkBandwidth

Updates the uplink bandwidth settings for your MX network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody();
    $request->requestBody->bandwidthLimits = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits();
    $request->requestBody->bandwidthLimits->cellular = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular();
    $request->requestBody->bandwidthLimits->cellular->limitDown = 777533;
    $request->requestBody->bandwidthLimits->cellular->limitUp = 996630;
    $request->requestBody->bandwidthLimits->wan1 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1();
    $request->requestBody->bandwidthLimits->wan1->limitDown = 527994;
    $request->requestBody->bandwidthLimits->wan1->limitUp = 568218;
    $request->requestBody->bandwidthLimits->wan2 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2();
    $request->requestBody->bandwidthLimits->wan2->limitDown = 846748;
    $request->requestBody->bandwidthLimits->wan2->limitUp = 229497;
    $request->networkId = 'totam';

    $response = $sdk->uplinkBandwidth->updateNetworkApplianceTrafficShapingUplinkBandwidth($request);

    if ($response->updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
