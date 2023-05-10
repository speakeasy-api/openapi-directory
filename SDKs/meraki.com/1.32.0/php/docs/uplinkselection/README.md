# uplinkSelection

### Available Operations

* [getNetworkApplianceTrafficShapingUplinkSelection](#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [updateNetworkApplianceTrafficShapingUplinkSelection](#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network

## getNetworkApplianceTrafficShapingUplinkSelection

Show uplink selection settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingUplinkSelectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingUplinkSelectionRequest();
    $request->networkId = 'ex';

    $response = $sdk->uplinkSelection->getNetworkApplianceTrafficShapingUplinkSelection($request);

    if ($response->getNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingUplinkSelection

Update uplink selection settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody();
    $request->requestBody->activeActiveAutoVpnEnabled = false;
    $request->requestBody->defaultUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum::WAN1;
    $request->requestBody->failoverAndFailback = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback();
    $request->requestBody->failoverAndFailback->immediate = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate();
    $request->requestBody->failoverAndFailback->immediate->enabled = false;
    $request->requestBody->loadBalancingEnabled = false;
    $request->requestBody->vpnTrafficUplinkPreferences = [
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(),
    ];
    $request->requestBody->wanTrafficUplinkPreferences = [
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(),
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(),
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(),
    ];
    $request->networkId = 'commodi';

    $response = $sdk->uplinkSelection->updateNetworkApplianceTrafficShapingUplinkSelection($request);

    if ($response->updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
