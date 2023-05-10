# mx1ManyNATRules

### Available Operations

* [getNetworkOneToManyNatRules](#getnetworkonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [updateNetworkOneToManyNatRules](#updatenetworkonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network

## getNetworkOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkOneToManyNatRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkOneToManyNatRulesRequest();
    $request->networkId = 'facilis';

    $response = $sdk->mx1ManyNATRules->getNetworkOneToManyNatRules($request);

    if ($response->getNetworkOneToManyNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToManyNatRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToManyNatRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToManyNatRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkOneToManyNatRulesRequest();
    $request->requestBody = new UpdateNetworkOneToManyNatRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkOneToManyNatRulesRequestBodyRules(),
        new UpdateNetworkOneToManyNatRulesRequestBodyRules(),
        new UpdateNetworkOneToManyNatRulesRequestBodyRules(),
    ];
    $request->networkId = 'qui';

    $response = $sdk->mx1ManyNATRules->updateNetworkOneToManyNatRules($request);

    if ($response->updateNetworkOneToManyNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
