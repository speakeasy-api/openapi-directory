# trafficShaping

### Available Operations

* [createNetworkApplianceTrafficShapingCustomPerformanceClass](#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [deleteNetworkApplianceTrafficShapingCustomPerformanceClass](#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [getNetworkApplianceTrafficShaping](#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClass](#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClasses](#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [getNetworkApplianceTrafficShapingRules](#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [getNetworkApplianceTrafficShapingUplinkBandwidth](#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [getNetworkApplianceTrafficShapingUplinkSelection](#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [getNetworkTrafficShapingApplicationCategories](#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [getNetworkTrafficShapingDscpTaggingOptions](#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [getNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [updateNetworkApplianceTrafficShaping](#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [updateNetworkApplianceTrafficShapingCustomPerformanceClass](#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [updateNetworkApplianceTrafficShapingRules](#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [updateNetworkApplianceTrafficShapingUplinkBandwidth](#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [updateNetworkApplianceTrafficShapingUplinkSelection](#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [updateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network

## createNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->requestBody = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody();
    $request->requestBody->maxJitter = 623092;
    $request->requestBody->maxLatency = 514574;
    $request->requestBody->maxLossPercentage = 71075;
    $request->requestBody->name = 'Angela Lubowitz III';
    $request->networkId = 'perspiciatis';

    $response = $sdk->trafficShaping->createNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->customPerformanceClassId = 'tempore';
    $request->networkId = 'nisi';

    $response = $sdk->trafficShaping->deleteNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShaping

Display the traffic shaping settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingRequest();
    $request->networkId = 'similique';

    $response = $sdk->trafficShaping->getNetworkApplianceTrafficShaping($request);

    if ($response->getNetworkApplianceTrafficShaping200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->customPerformanceClassId = 'esse';
    $request->networkId = 'alias';

    $response = $sdk->trafficShaping->getNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest();
    $request->networkId = 'libero';

    $response = $sdk->trafficShaping->getNetworkApplianceTrafficShapingCustomPerformanceClasses($request);

    if ($response->getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->networkId = 'perferendis';

    $response = $sdk->trafficShaping->getNetworkApplianceTrafficShapingRules($request);

    if ($response->getNetworkApplianceTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->networkId = 'possimus';

    $response = $sdk->trafficShaping->getNetworkApplianceTrafficShapingUplinkBandwidth($request);

    if ($response->getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->networkId = 'temporibus';

    $response = $sdk->trafficShaping->getNetworkApplianceTrafficShapingUplinkSelection($request);

    if ($response->getNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTrafficShapingApplicationCategories

Returns the application categories for traffic shaping rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficShapingApplicationCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficShapingApplicationCategoriesRequest();
    $request->networkId = 'quos';

    $response = $sdk->trafficShaping->getNetworkTrafficShapingApplicationCategories($request);

    if ($response->getNetworkTrafficShapingApplicationCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficShapingDscpTaggingOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficShapingDscpTaggingOptionsRequest();
    $request->networkId = 'consequuntur';

    $response = $sdk->trafficShaping->getNetworkTrafficShapingDscpTaggingOptions($request);

    if ($response->getNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects !== null) {
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
    $request->networkId = 'earum';
    $request->number = 'excepturi';

    $response = $sdk->trafficShaping->getNetworkWirelessSsidTrafficShapingRules($request);

    if ($response->getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShaping

Update the traffic shaping settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingRequestBody();
    $request->requestBody->globalBandwidthLimits = new UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits();
    $request->requestBody->globalBandwidthLimits->limitDown = 253805;
    $request->requestBody->globalBandwidthLimits->limitUp = 940497;
    $request->networkId = 'repellat';

    $response = $sdk->trafficShaping->updateNetworkApplianceTrafficShaping($request);

    if ($response->updateNetworkApplianceTrafficShaping200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody();
    $request->requestBody->maxJitter = 966607;
    $request->requestBody->maxLatency = 692918;
    $request->requestBody->maxLossPercentage = 844253;
    $request->requestBody->name = 'Cecelia Brown';
    $request->customPerformanceClassId = 'illo';
    $request->networkId = 'nulla';

    $response = $sdk->trafficShaping->updateNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject !== null) {
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
        new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(),
    ];
    $request->networkId = 'quisquam';

    $response = $sdk->trafficShaping->updateNetworkApplianceTrafficShapingRules($request);

    if ($response->updateNetworkApplianceTrafficShapingRules200ApplicationJSONObject !== null) {
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
    $request->requestBody->bandwidthLimits->cellular->limitDown = 415732;
    $request->requestBody->bandwidthLimits->cellular->limitUp = 574458;
    $request->requestBody->bandwidthLimits->wan1 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1();
    $request->requestBody->bandwidthLimits->wan1->limitDown = 42665;
    $request->requestBody->bandwidthLimits->wan1->limitUp = 193499;
    $request->requestBody->bandwidthLimits->wan2 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2();
    $request->requestBody->bandwidthLimits->wan2->limitDown = 533171;
    $request->requestBody->bandwidthLimits->wan2->limitUp = 694119;
    $request->networkId = 'dicta';

    $response = $sdk->trafficShaping->updateNetworkApplianceTrafficShapingUplinkBandwidth($request);

    if ($response->updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject !== null) {
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
    $request->requestBody->defaultUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum::WAN2;
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
    $request->networkId = 'nihil';

    $response = $sdk->trafficShaping->updateNetworkApplianceTrafficShapingUplinkSelection($request);

    if ($response->updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject !== null) {
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
    $request->networkId = 'enim';
    $request->number = 'vitae';

    $response = $sdk->trafficShaping->updateNetworkWirelessSsidTrafficShapingRules($request);

    if ($response->updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
