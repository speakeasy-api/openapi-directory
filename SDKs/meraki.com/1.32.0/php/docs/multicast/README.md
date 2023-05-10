# multicast

### Available Operations

* [createNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [getNetworkSwitchRoutingMulticast](#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [getNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [updateNetworkSwitchRoutingMulticast](#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point

## createNetworkSwitchRoutingMulticastRendezvousPoint

Create a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchRoutingMulticastRendezvousPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->requestBody = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody();
    $request->requestBody->interfaceIp = 'minus';
    $request->requestBody->multicastGroup = 'tempora';
    $request->networkId = 'sequi';

    $response = $sdk->multicast->createNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchRoutingMulticastRendezvousPoint

Delete a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->networkId = 'natus';
    $request->rendezvousPointId = 'saepe';

    $response = $sdk->multicast->deleteNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticast

Return multicast settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRequest();
    $request->networkId = 'quibusdam';

    $response = $sdk->multicast->getNetworkSwitchRoutingMulticast($request);

    if ($response->getNetworkSwitchRoutingMulticast200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoint

Return a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRendezvousPointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->networkId = 'corrupti';
    $request->rendezvousPointId = 'maxime';

    $response = $sdk->multicast->getNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoints

List multicast rendezvous points

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRendezvousPointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRendezvousPointsRequest();
    $request->networkId = 'aliquam';

    $response = $sdk->multicast->getNetworkSwitchRoutingMulticastRendezvousPoints($request);

    if ($response->getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingMulticast

Update multicast settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingMulticastRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingMulticastRequestBody();
    $request->requestBody->defaultSettings = new UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings();
    $request->requestBody->defaultSettings->floodUnknownMulticastTrafficEnabled = false;
    $request->requestBody->defaultSettings->igmpSnoopingEnabled = false;
    $request->requestBody->overrides = [
        new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(),
    ];
    $request->networkId = 'explicabo';

    $response = $sdk->multicast->updateNetworkSwitchRoutingMulticast($request);

    if ($response->updateNetworkSwitchRoutingMulticast200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingMulticastRendezvousPoint

Update a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody();
    $request->requestBody->interfaceIp = 'eaque';
    $request->requestBody->multicastGroup = 'hic';
    $request->networkId = 'incidunt';
    $request->rendezvousPointId = 'quae';

    $response = $sdk->multicast->updateNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
