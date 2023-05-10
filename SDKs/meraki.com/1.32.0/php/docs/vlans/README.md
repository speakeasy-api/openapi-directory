# vlans

### Available Operations

* [createNetworkApplianceVlan](#createnetworkappliancevlan) - Add a VLAN
* [deleteNetworkApplianceVlan](#deletenetworkappliancevlan) - Delete a VLAN from a network
* [getNetworkApplianceVlan](#getnetworkappliancevlan) - Return a VLAN
* [getNetworkApplianceVlans](#getnetworkappliancevlans) - List the VLANs for an MX network
* [getNetworkApplianceVlansSettings](#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [updateNetworkApplianceVlan](#updatenetworkappliancevlan) - Update a VLAN
* [updateNetworkApplianceVlansSettings](#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network

## createNetworkApplianceVlan

Add a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyMandatoryDhcp;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkApplianceVlanRequest();
    $request->requestBody = new CreateNetworkApplianceVlanRequestBody();
    $request->requestBody->applianceIp = 'saepe';
    $request->requestBody->cidr = 'officia';
    $request->requestBody->groupPolicyId = 'illo';
    $request->requestBody->id = 'd48c5c2f-9e21-4d90-bd53-776bfc7677f0';
    $request->requestBody->ipv6 = new CreateNetworkApplianceVlanRequestBodyIpv6();
    $request->requestBody->ipv6->enabled = false;
    $request->requestBody->ipv6->prefixAssignments = [
        new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
        new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
        new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
        new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
    ];
    $request->requestBody->mandatoryDhcp = new CreateNetworkApplianceVlanRequestBodyMandatoryDhcp();
    $request->requestBody->mandatoryDhcp->enabled = false;
    $request->requestBody->mask = 344026;
    $request->requestBody->name = 'Monica O'Hara';
    $request->requestBody->subnet = 'magnam';
    $request->requestBody->templateVlanType = CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum::UNIQUE;
    $request->networkId = 'consequuntur';

    $response = $sdk->vlans->createNetworkApplianceVlan($request);

    if ($response->createNetworkApplianceVlan201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkApplianceVlan

Delete a VLAN from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkApplianceVlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkApplianceVlanRequest();
    $request->networkId = 'totam';
    $request->vlanId = 'hic';

    $response = $sdk->vlans->deleteNetworkApplianceVlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVlan

Return a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVlanRequest();
    $request->networkId = 'nam';
    $request->vlanId = 'eum';

    $response = $sdk->vlans->getNetworkApplianceVlan($request);

    if ($response->getNetworkApplianceVlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVlans

List the VLANs for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVlansRequest();
    $request->networkId = 'assumenda';

    $response = $sdk->vlans->getNetworkApplianceVlans($request);

    if ($response->getNetworkApplianceVlans200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVlansSettings

Returns the enabled status of VLANs for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVlansSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVlansSettingsRequest();
    $request->networkId = 'officia';

    $response = $sdk->vlans->getNetworkApplianceVlansSettings($request);

    if ($response->getNetworkApplianceVlansSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVlan

Update a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyReservedIpRanges;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVlanRequest();
    $request->requestBody = new UpdateNetworkApplianceVlanRequestBody();
    $request->requestBody->applianceIp = 'repudiandae';
    $request->requestBody->cidr = 'recusandae';
    $request->requestBody->dhcpBootFilename = 'architecto';
    $request->requestBody->dhcpBootNextServer = 'sint';
    $request->requestBody->dhcpBootOptionsEnabled = false;
    $request->requestBody->dhcpHandling = UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum::RUN_ADHCP_SERVER;
    $request->requestBody->dhcpLeaseTime = UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum::ONE_DAY;
    $request->requestBody->dhcpOptions = [
        new UpdateNetworkApplianceVlanRequestBodyDhcpOptions(),
        new UpdateNetworkApplianceVlanRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'quae',
        'impedit',
        'facilis',
        'ex',
    ];
    $request->requestBody->dnsNameservers = 'quasi';
    $request->requestBody->fixedIpAssignments = [
        'maxime' => 'vel',
        'neque' => 'dolor',
        'vitae' => 'optio',
    ];
    $request->requestBody->groupPolicyId = 'est';
    $request->requestBody->ipv6 = new UpdateNetworkApplianceVlanRequestBodyIpv6();
    $request->requestBody->ipv6->enabled = false;
    $request->requestBody->ipv6->prefixAssignments = [
        new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
        new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
        new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
    ];
    $request->requestBody->mandatoryDhcp = new UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp();
    $request->requestBody->mandatoryDhcp->enabled = false;
    $request->requestBody->mask = 873561;
    $request->requestBody->name = 'Ira Klocko';
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges(),
    ];
    $request->requestBody->subnet = 'magnam';
    $request->requestBody->templateVlanType = UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum::SAME;
    $request->requestBody->vpnNatSubnet = 'modi';
    $request->networkId = 'facere';
    $request->vlanId = 'illum';

    $response = $sdk->vlans->updateNetworkApplianceVlan($request);

    if ($response->updateNetworkApplianceVlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVlansSettings

Enable/Disable VLANs for the given network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlansSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlansSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVlansSettingsRequest();
    $request->requestBody = new UpdateNetworkApplianceVlansSettingsRequestBody();
    $request->requestBody->vlansEnabled = false;
    $request->networkId = 'perferendis';

    $response = $sdk->vlans->updateNetworkApplianceVlansSettings($request);

    if ($response->updateNetworkApplianceVlansSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
