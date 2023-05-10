# ssiDs

### Available Operations

* [getNetworkDeviceWirelessStatus](#getnetworkdevicewirelessstatus) - Return the SSID statuses of an access point
* [getNetworkSsid](#getnetworkssid) - Return a single SSID
* [getNetworkSsids](#getnetworkssids) - List the SSIDs in a network
* [updateNetworkSsid](#updatenetworkssid) - Update the attributes of an SSID

## getNetworkDeviceWirelessStatus

Return the SSID statuses of an access point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDeviceWirelessStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDeviceWirelessStatusRequest();
    $request->networkId = 'officiis';
    $request->serial = 'accusamus';

    $response = $sdk->ssiDs->getNetworkDeviceWirelessStatus($request);

    if ($response->getNetworkDeviceWirelessStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSsid

Return a single SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSsidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSsidRequest();
    $request->networkId = 'natus';
    $request->number = 'minima';

    $response = $sdk->ssiDs->getNetworkSsid($request);

    if ($response->getNetworkSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSsids

List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSsidsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSsidsRequest();
    $request->networkId = 'aspernatur';

    $response = $sdk->ssiDs->getNetworkSsids($request);

    if ($response->getNetworkSsids200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSsid

Update the attributes of an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBodyApTagsAndVlanIds;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBodyAuthModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBodyEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBodyEnterpriseAdminAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBodyRadiusAccountingServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBodyRadiusFailoverPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBodyRadiusLoadBalancingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBodyRadiusServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBodySplashPageEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidRequestBodyWpaEncryptionModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSsidRequest();
    $request->requestBody = new UpdateNetworkSsidRequestBody();
    $request->requestBody->apTagsAndVlanIds = [
        new UpdateNetworkSsidRequestBodyApTagsAndVlanIds(),
        new UpdateNetworkSsidRequestBodyApTagsAndVlanIds(),
    ];
    $request->requestBody->authMode = UpdateNetworkSsidRequestBodyAuthModeEnum::PSK;
    $request->requestBody->availabilityTags = [
        'at',
        'error',
        'blanditiis',
    ];
    $request->requestBody->availableOnAllAps = false;
    $request->requestBody->bandSelection = 'suscipit';
    $request->requestBody->concentratorNetworkId = 'repudiandae';
    $request->requestBody->defaultVlanId = 542129;
    $request->requestBody->disassociateClientsOnVpnFailover = false;
    $request->requestBody->enabled = false;
    $request->requestBody->encryptionMode = UpdateNetworkSsidRequestBodyEncryptionModeEnum::WPA;
    $request->requestBody->enterpriseAdminAccess = UpdateNetworkSsidRequestBodyEnterpriseAdminAccessEnum::ACCESS_DISABLED;
    $request->requestBody->ipAssignmentMode = 'recusandae';
    $request->requestBody->lanIsolationEnabled = false;
    $request->requestBody->minBitrate = 6806.97;
    $request->requestBody->name = 'Dr. Leroy Wisoky Jr.';
    $request->requestBody->perClientBandwidthLimitDown = 106429;
    $request->requestBody->perClientBandwidthLimitUp = 174772;
    $request->requestBody->psk = 'enim';
    $request->requestBody->radiusAccountingEnabled = false;
    $request->requestBody->radiusAccountingServers = [
        new UpdateNetworkSsidRequestBodyRadiusAccountingServers(),
        new UpdateNetworkSsidRequestBodyRadiusAccountingServers(),
    ];
    $request->requestBody->radiusAttributeForGroupPolicies = 'velit';
    $request->requestBody->radiusCoaEnabled = false;
    $request->requestBody->radiusFailoverPolicy = UpdateNetworkSsidRequestBodyRadiusFailoverPolicyEnum::DENY_ACCESS;
    $request->requestBody->radiusLoadBalancingPolicy = UpdateNetworkSsidRequestBodyRadiusLoadBalancingPolicyEnum::STRICT_PRIORITY_ORDER;
    $request->requestBody->radiusOverride = false;
    $request->requestBody->radiusServers = [
        new UpdateNetworkSsidRequestBodyRadiusServers(),
        new UpdateNetworkSsidRequestBodyRadiusServers(),
    ];
    $request->requestBody->secondaryConcentratorNetworkId = 'saepe';
    $request->requestBody->splashPage = UpdateNetworkSsidRequestBodySplashPageEnum::CLICK_THROUGH_SPLASH_PAGE;
    $request->requestBody->useVlanTagging = false;
    $request->requestBody->visible = false;
    $request->requestBody->vlanId = 580107;
    $request->requestBody->walledGardenEnabled = false;
    $request->requestBody->walledGardenRanges = 'officiis';
    $request->requestBody->wpaEncryptionMode = UpdateNetworkSsidRequestBodyWpaEncryptionModeEnum::WPA3192_BIT_SECURITY;
    $request->networkId = 'in';
    $request->number = 'adipisci';

    $response = $sdk->ssiDs->updateNetworkSsid($request);

    if ($response->updateNetworkSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
