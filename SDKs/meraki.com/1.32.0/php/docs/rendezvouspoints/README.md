# rendezvousPoints

### Available Operations

* [createNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
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
    $request->requestBody->interfaceIp = 'fuga';
    $request->requestBody->multicastGroup = 'a';
    $request->networkId = 'ipsum';

    $response = $sdk->rendezvousPoints->createNetworkSwitchRoutingMulticastRendezvousPoint($request);

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
    $request->networkId = 'amet';
    $request->rendezvousPointId = 'nisi';

    $response = $sdk->rendezvousPoints->deleteNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->statusCode === 200) {
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
    $request->networkId = 'aliquid';
    $request->rendezvousPointId = 'ex';

    $response = $sdk->rendezvousPoints->getNetworkSwitchRoutingMulticastRendezvousPoint($request);

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
    $request->networkId = 'dolore';

    $response = $sdk->rendezvousPoints->getNetworkSwitchRoutingMulticastRendezvousPoints($request);

    if ($response->getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays !== null) {
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
    $request->requestBody->interfaceIp = 'accusamus';
    $request->requestBody->multicastGroup = 'deserunt';
    $request->networkId = 'mollitia';
    $request->rendezvousPointId = 'autem';

    $response = $sdk->rendezvousPoints->updateNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
