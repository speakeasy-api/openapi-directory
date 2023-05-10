# rootVmwareConfig

### Available Operations

* [getPreferredCdpNetworkProtocol](#getpreferredcdpnetworkprotocol) - Returns the current preference of CDM between IPv4 and IPv6 for CDP data transfer
* [getVmwareRecoveryNetworks](#getvmwarerecoverynetworks) - Get all the VMware recovery networks for a compute resource ID
* [setPreferredCdpNetworkProtocol](#setpreferredcdpnetworkprotocol) - Set the current preference of CDM between IPv4 and IPv6 for CDP data transfer

## getPreferredCdpNetworkProtocol

Returns the current preference of CDM between IPv4 and IPv6 for CDP data transfer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootVmwareConfig->getPreferredCdpNetworkProtocol();

    if ($response->preferredCdpNetworkProtocolObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmwareRecoveryNetworks

Get all the networks for snapshot recovery for the specified compute resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetVmwareRecoveryNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVmwareRecoveryNetworksComputeResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmwareRecoveryNetworksRequest();
    $request->computeResourceId = 'commodi';
    $request->computeResourceType = GetVmwareRecoveryNetworksComputeResourceTypeEnum::RESOURCE_POOL;

    $response = $sdk->rootVmwareConfig->getVmwareRecoveryNetworks($request);

    if ($response->vmwareNetworkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setPreferredCdpNetworkProtocol

Set the current preference of CDM between IPv4 and IPv6 for CDP data transfer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\PreferredCdpNetworkProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
$request = PreferredCdpNetworkProtocolEnum::I_PV4

    $response = $sdk->rootVmwareConfig->setPreferredCdpNetworkProtocol($request);

    if ($response->preferredCdpNetworkProtocolObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
