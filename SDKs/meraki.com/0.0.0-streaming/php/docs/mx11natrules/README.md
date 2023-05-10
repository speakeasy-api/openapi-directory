# mx11NATRules

### Available Operations

* [getNetworkOneToOneNatRules](#getnetworkonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [updateNetworkOneToOneNatRules](#updatenetworkonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network

## getNetworkOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkOneToOneNatRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkOneToOneNatRulesRequest();
    $request->networkId = 'porro';

    $response = $sdk->mx11NATRules->getNetworkOneToOneNatRules($request);

    if ($response->getNetworkOneToOneNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToOneNatRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToOneNatRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToOneNatRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToOneNatRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkOneToOneNatRulesRequest();
    $request->requestBody = new UpdateNetworkOneToOneNatRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkOneToOneNatRulesRequestBodyRules(),
        new UpdateNetworkOneToOneNatRulesRequestBodyRules(),
        new UpdateNetworkOneToOneNatRulesRequestBodyRules(),
        new UpdateNetworkOneToOneNatRulesRequestBodyRules(),
    ];
    $request->networkId = 'ut';

    $response = $sdk->mx11NATRules->updateNetworkOneToOneNatRules($request);

    if ($response->updateNetworkOneToOneNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
