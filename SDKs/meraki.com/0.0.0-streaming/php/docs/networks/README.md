# networks

### Available Operations

* [bindNetwork](#bindnetwork) - Bind a network to a template.
* [combineOrganizationNetworks](#combineorganizationnetworks) - Combine multiple networks into a single network
* [createOrganizationNetwork](#createorganizationnetwork) - Create a network
* [deleteNetwork](#deletenetwork) - Delete a network
* [getNetwork](#getnetwork) - Return a network
* [getNetworkAirMarshal](#getnetworkairmarshal) - List Air Marshal scan results from a network
* [getNetworkSiteToSiteVpn](#getnetworksitetositevpn) - Return the site-to-site VPN settings of a network
* [getNetworkTraffic](#getnetworktraffic) - Return the traffic analysis data for this network
* [getOrganizationNetworks](#getorganizationnetworks) - List the networks in an organization
* [splitNetwork](#splitnetwork) - Split a combined network into individual networks for each type of device
* [unbindNetwork](#unbindnetwork) - Unbind a network from a template.
* [updateNetwork](#updatenetwork) - Update a network
* [updateNetworkSiteToSiteVpn](#updatenetworksitetositevpn) - Update the site-to-site VPN settings of a network

## bindNetwork

Bind a network to a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BindNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\BindNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BindNetworkRequest();
    $request->requestBody = new BindNetworkRequestBody();
    $request->requestBody->autoBind = false;
    $request->requestBody->configTemplateId = 'non';
    $request->networkId = 'et';

    $response = $sdk->networks->bindNetwork($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## combineOrganizationNetworks

Combine multiple networks into a single network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CombineOrganizationNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\CombineOrganizationNetworksRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CombineOrganizationNetworksRequest();
    $request->requestBody = new CombineOrganizationNetworksRequestBody();
    $request->requestBody->enrollmentString = 'dolorum';
    $request->requestBody->name = 'Clark Franecki';
    $request->requestBody->networkIds = [
        'quas',
        'assumenda',
        'nulla',
        'voluptas',
    ];
    $request->organizationId = 'libero';

    $response = $sdk->networks->combineOrganizationNetworks($request);

    if ($response->combineOrganizationNetworks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationNetwork

Create a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationNetworkRequest();
    $request->requestBody = new CreateOrganizationNetworkRequestBody();
    $request->requestBody->copyFromNetworkId = 'quasi';
    $request->requestBody->disableMyMerakiCom = false;
    $request->requestBody->disableRemoteStatusPage = false;
    $request->requestBody->name = 'Carrie Cole IV';
    $request->requestBody->tags = 'magnam';
    $request->requestBody->timeZone = 'odio';
    $request->requestBody->type = 'eius';
    $request->organizationId = 'esse';

    $response = $sdk->networks->createOrganizationNetwork($request);

    if ($response->createOrganizationNetwork201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetwork

Delete a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkRequest();
    $request->networkId = 'esse';

    $response = $sdk->networks->deleteNetwork($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetwork

Return a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkRequest();
    $request->networkId = 'rem';

    $response = $sdk->networks->getNetwork($request);

    if ($response->getNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAirMarshal

List Air Marshal scan results from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAirMarshalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAirMarshalRequest();
    $request->networkId = 'fuga';
    $request->t0 = 'reprehenderit';
    $request->timespan = 6956.26;

    $response = $sdk->networks->getNetworkAirMarshal($request);

    if ($response->getNetworkAirMarshal200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSiteToSiteVpnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSiteToSiteVpnRequest();
    $request->networkId = 'fugiat';

    $response = $sdk->networks->getNetworkSiteToSiteVpn($request);

    if ($response->getNetworkSiteToSiteVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTraffic

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficDeviceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficRequest();
    $request->deviceType = GetNetworkTrafficDeviceTypeEnum::COMBINED;
    $request->networkId = 'eum';
    $request->t0 = 'suscipit';
    $request->timespan = 8268.71;

    $response = $sdk->networks->getNetworkTraffic($request);

    if ($response->getNetworkTraffic200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationNetworks

List the networks in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationNetworksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationNetworksRequest();
    $request->configTemplateId = 'eos';
    $request->organizationId = 'praesentium';

    $response = $sdk->networks->getOrganizationNetworks($request);

    if ($response->getOrganizationNetworks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## splitNetwork

Split a combined network into individual networks for each type of device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SplitNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SplitNetworkRequest();
    $request->networkId = 'quisquam';

    $response = $sdk->networks->splitNetwork($request);

    if ($response->splitNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unbindNetwork

Unbind a network from a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnbindNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnbindNetworkRequest();
    $request->networkId = 'veritatis';

    $response = $sdk->networks->unbindNetwork($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetwork

Update a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkRequest();
    $request->requestBody = new UpdateNetworkRequestBody();
    $request->requestBody->disableMyMerakiCom = false;
    $request->requestBody->disableRemoteStatusPage = false;
    $request->requestBody->enrollmentString = 'ipsa';
    $request->requestBody->name = 'Rickey DuBuque';
    $request->requestBody->tags = 'quo';
    $request->requestBody->timeZone = 'fuga';
    $request->networkId = 'eius';

    $response = $sdk->networks->updateNetwork($request);

    if ($response->updateNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBodyHubs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBodyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBodySubnets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSiteToSiteVpnRequest();
    $request->requestBody = new UpdateNetworkSiteToSiteVpnRequestBody();
    $request->requestBody->hubs = [
        new UpdateNetworkSiteToSiteVpnRequestBodyHubs(),
    ];
    $request->requestBody->mode = UpdateNetworkSiteToSiteVpnRequestBodyModeEnum::NONE;
    $request->requestBody->subnets = [
        new UpdateNetworkSiteToSiteVpnRequestBodySubnets(),
    ];
    $request->networkId = 'cupiditate';

    $response = $sdk->networks->updateNetworkSiteToSiteVpn($request);

    if ($response->updateNetworkSiteToSiteVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
