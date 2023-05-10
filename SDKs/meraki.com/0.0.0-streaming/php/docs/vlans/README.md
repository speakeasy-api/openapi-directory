# vlaNs

### Available Operations

* [createNetworkVlan](#createnetworkvlan) - Add a VLAN
* [deleteNetworkVlan](#deletenetworkvlan) - Delete a VLAN from a network
* [getNetworkVlan](#getnetworkvlan) - Return a VLAN
* [getNetworkVlans](#getnetworkvlans) - List the VLANs for an MX network
* [getNetworkVlansEnabledState](#getnetworkvlansenabledstate) - Returns the enabled status of VLANs for the network
* [updateNetworkVlan](#updatenetworkvlan) - Update a VLAN
* [updateNetworkVlansEnabledState](#updatenetworkvlansenabledstate) - Enable/Disable VLANs for the given network

## createNetworkVlan

Add a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkVlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkVlanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkVlanRequest();
    $request->requestBody = new CreateNetworkVlanRequestBody();
    $request->requestBody->applianceIp = 'porro';
    $request->requestBody->groupPolicyId = 'suscipit';
    $request->requestBody->id = '32ca3aed-0117-4996-b12f-de04771778ff';
    $request->requestBody->name = 'Mr. Diane Stiedemann';
    $request->requestBody->subnet = 'tempora';
    $request->networkId = 'esse';

    $response = $sdk->vlaNs->createNetworkVlan($request);

    if ($response->createNetworkVlan201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkVlan

Delete a VLAN from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkVlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkVlanRequest();
    $request->networkId = 'ex';
    $request->vlanId = 'consectetur';

    $response = $sdk->vlaNs->deleteNetworkVlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkVlan

Return a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkVlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkVlanRequest();
    $request->networkId = 'aliquid';
    $request->vlanId = 'ipsa';

    $response = $sdk->vlaNs->getNetworkVlan($request);

    if ($response->getNetworkVlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkVlans

List the VLANs for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkVlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkVlansRequest();
    $request->networkId = 'laborum';

    $response = $sdk->vlaNs->getNetworkVlans($request);

    if ($response->getNetworkVlans200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkVlansEnabledState

Returns the enabled status of VLANs for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkVlansEnabledStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkVlansEnabledStateRequest();
    $request->networkId = 'sunt';

    $response = $sdk->vlaNs->getNetworkVlansEnabledState($request);

    if ($response->getNetworkVlansEnabledState200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkVlan

Update a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkVlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkVlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkVlanRequestBodyDhcpHandlingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkVlanRequestBodyDhcpLeaseTimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkVlanRequestBodyDhcpOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkVlanRequestBodyDhcpOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkVlanRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkVlanRequest();
    $request->requestBody = new UpdateNetworkVlanRequestBody();
    $request->requestBody->applianceIp = 'nostrum';
    $request->requestBody->dhcpBootFilename = 'fugiat';
    $request->requestBody->dhcpBootNextServer = 'expedita';
    $request->requestBody->dhcpBootOptionsEnabled = false;
    $request->requestBody->dhcpHandling = UpdateNetworkVlanRequestBodyDhcpHandlingEnum::RELAY_DHCP_TO_ANOTHER_SERVER;
    $request->requestBody->dhcpLeaseTime = UpdateNetworkVlanRequestBodyDhcpLeaseTimeEnum::TWELVE_HOURS;
    $request->requestBody->dhcpOptions = [
        new UpdateNetworkVlanRequestBodyDhcpOptions(),
        new UpdateNetworkVlanRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'perferendis',
        'eum',
    ];
    $request->requestBody->dnsNameservers = 'voluptas';
    $request->requestBody->fixedIpAssignments = [
        'id' => 'ab',
        'error' => 'possimus',
        'voluptates' => 'mollitia',
    ];
    $request->requestBody->groupPolicyId = 'laborum';
    $request->requestBody->name = 'Derek Leuschke PhD';
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkVlanRequestBodyReservedIpRanges(),
        new UpdateNetworkVlanRequestBodyReservedIpRanges(),
    ];
    $request->requestBody->subnet = 'quo';
    $request->requestBody->vpnNatSubnet = 'ex';
    $request->networkId = 'ut';
    $request->vlanId = 'ad';

    $response = $sdk->vlaNs->updateNetworkVlan($request);

    if ($response->updateNetworkVlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkVlansEnabledState

Enable/Disable VLANs for the given network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkVlansEnabledStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkVlansEnabledStateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkVlansEnabledStateRequest();
    $request->requestBody = new UpdateNetworkVlansEnabledStateRequestBody();
    $request->requestBody->enabled = false;
    $request->networkId = 'expedita';

    $response = $sdk->vlaNs->updateNetworkVlansEnabledState($request);

    if ($response->updateNetworkVlansEnabledState200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
