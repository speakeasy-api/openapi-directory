# rules

### Available Operations

* [getNetworkApplianceTrafficShapingRules](#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [getNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [updateNetworkApplianceTrafficShapingRules](#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [updateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network

## getNetworkApplianceTrafficShapingRules

Display the traffic shaping settings rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingRulesRequest();
    $request->networkId = 'quisquam';

    $response = $sdk->rules->getNetworkApplianceTrafficShapingRules($request);

    if ($response->getNetworkApplianceTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidTrafficShapingRules

Display the traffic shaping settings for a SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidTrafficShapingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidTrafficShapingRulesRequest();
    $request->networkId = 'adipisci';
    $request->number = 'quasi';

    $response = $sdk->rules->getNetworkWirelessSsidTrafficShapingRules($request);

    if ($response->getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingRules

Update the traffic shaping settings rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingRulesRequestBody();
    $request->requestBody->defaultRulesEnabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(),
    ];
    $request->networkId = 'occaecati';

    $response = $sdk->rules->updateNetworkApplianceTrafficShapingRules($request);

    if ($response->updateNetworkApplianceTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidTrafficShapingRules

Update the traffic shaping settings for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidTrafficShapingRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody();
    $request->requestBody->defaultRulesEnabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
    ];
    $request->requestBody->trafficShapingEnabled = false;
    $request->networkId = 'deleniti';
    $request->number = 'dolor';

    $response = $sdk->rules->updateNetworkWirelessSsidTrafficShapingRules($request);

    if ($response->updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
