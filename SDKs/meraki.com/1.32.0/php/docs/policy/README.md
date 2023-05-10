# policy

### Available Operations

* [getNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [updateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network

## getNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientPolicyRequest();
    $request->clientId = 'eveniet';
    $request->networkId = 'dolorem';

    $response = $sdk->policy->getNetworkClientPolicy($request);

    if ($response->getNetworkClientPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkClientPolicyRequest();
    $request->requestBody = new UpdateNetworkClientPolicyRequestBody();
    $request->requestBody->devicePolicy = 'laborum';
    $request->requestBody->groupPolicyId = 'eos';
    $request->clientId = 'dolor';
    $request->networkId = 'consectetur';

    $response = $sdk->policy->updateNetworkClientPolicy($request);

    if ($response->updateNetworkClientPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
