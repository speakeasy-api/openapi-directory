# organizations

### Available Operations

* [claimIntoOrganization](#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [cloneOrganization](#cloneorganization) - Create a new organization by cloning the addressed organization
* [getOrganization](#getorganization) - Return an organization
* [getOrganizationDeviceStatuses](#getorganizationdevicestatuses) - List the status of every Meraki device in the organization
* [getOrganizationInventory](#getorganizationinventory) - Return the inventory for an organization
* [getOrganizationThirdPartyVPNPeers](#getorganizationthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [getOrganizationUplinksLossAndLatency](#getorganizationuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizations](#getorganizations) - List the organizations that the user has privileges on
* [updateOrganizationThirdPartyVPNPeers](#updateorganizationthirdpartyvpnpeers) - Update the third party VPN peers for an organization

## claimIntoOrganization

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationRequestBodyLicenses;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationRequestBodyLicensesModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimIntoOrganizationRequest();
    $request->requestBody = new ClaimIntoOrganizationRequestBody();
    $request->requestBody->licenses = [
        new ClaimIntoOrganizationRequestBodyLicenses(),
        new ClaimIntoOrganizationRequestBodyLicenses(),
    ];
    $request->requestBody->orders = [
        'ipsam',
        'aspernatur',
        'sequi',
        'quo',
    ];
    $request->requestBody->serials = [
        'recusandae',
        'aperiam',
    ];
    $request->organizationId = 'distinctio';

    $response = $sdk->organizations->claimIntoOrganization($request);

    if ($response->claimIntoOrganization200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloneOrganization

Create a new organization by cloning the addressed organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloneOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CloneOrganizationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloneOrganizationRequest();
    $request->requestBody = new CloneOrganizationRequestBody();
    $request->requestBody->name = 'Cody Blick';
    $request->organizationId = 'accusamus';

    $response = $sdk->organizations->cloneOrganization($request);

    if ($response->cloneOrganization201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganization

Return an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationRequest();
    $request->organizationId = 'aliquam';

    $response = $sdk->organizations->getOrganization($request);

    if ($response->getOrganization200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDeviceStatuses

List the status of every Meraki device in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDeviceStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDeviceStatusesRequest();
    $request->organizationId = 'odio';

    $response = $sdk->organizations->getOrganizationDeviceStatuses($request);

    if ($response->getOrganizationDeviceStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventory

Return the inventory for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryRequest();
    $request->includeLicenseInfo = false;
    $request->organizationId = 'occaecati';

    $response = $sdk->organizations->getOrganizationInventory($request);

    if ($response->getOrganizationInventory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationThirdPartyVPNPeers

Return the third party VPN peers for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationThirdPartyVPNPeersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationThirdPartyVPNPeersRequest();
    $request->organizationId = 'commodi';

    $response = $sdk->organizations->getOrganizationThirdPartyVPNPeers($request);

    if ($response->getOrganizationThirdPartyVPNPeers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationUplinksLossAndLatencyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationUplinksLossAndLatencyUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationUplinksLossAndLatencyRequest();
    $request->ip = 'sapiente';
    $request->organizationId = 'dolores';
    $request->t0 = 'deserunt';
    $request->t1 = 'molestiae';
    $request->timespan = 353.62;
    $request->uplink = GetOrganizationUplinksLossAndLatencyUplinkEnum::WAN2;

    $response = $sdk->organizations->getOrganizationUplinksLossAndLatency($request);

    if ($response->getOrganizationUplinksLossAndLatency200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizations

List the organizations that the user has privileges on

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->organizations->getOrganizations();

    if ($response->getOrganizations200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationThirdPartyVPNPeers

Update the third party VPN peers for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationThirdPartyVPNPeersRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationThirdPartyVPNPeersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPolicies;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationThirdPartyVPNPeersRequest();
    $request->requestBody = new UpdateOrganizationThirdPartyVPNPeersRequestBody();
    $request->requestBody->peers = [
        new UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers(),
        new UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers(),
    ];
    $request->organizationId = 'quas';

    $response = $sdk->organizations->updateOrganizationThirdPartyVPNPeers($request);

    if ($response->updateOrganizationThirdPartyVPNPeers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
