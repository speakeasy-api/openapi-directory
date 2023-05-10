# mxPortForwardingRules

### Available Operations

* [getNetworkPortForwardingRules](#getnetworkportforwardingrules) - Return the port forwarding rules for an MX network
* [updateNetworkPortForwardingRules](#updatenetworkportforwardingrules) - Update the port forwarding rules for an MX network

## getNetworkPortForwardingRules

Return the port forwarding rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPortForwardingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPortForwardingRulesRequest();
    $request->networkId = 'quibusdam';

    $response = $sdk->mxPortForwardingRules->getNetworkPortForwardingRules($request);

    if ($response->getNetworkPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkPortForwardingRules

Update the port forwarding rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkPortForwardingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkPortForwardingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkPortForwardingRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkPortForwardingRulesRequestBodyRulesProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkPortForwardingRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkPortForwardingRulesRequest();
    $request->requestBody = new UpdateNetworkPortForwardingRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkPortForwardingRulesRequestBodyRules(),
        new UpdateNetworkPortForwardingRulesRequestBodyRules(),
        new UpdateNetworkPortForwardingRulesRequestBodyRules(),
        new UpdateNetworkPortForwardingRulesRequestBodyRules(),
    ];
    $request->networkId = 'sequi';

    $response = $sdk->mxPortForwardingRules->updateNetworkPortForwardingRules($request);

    if ($response->updateNetworkPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
