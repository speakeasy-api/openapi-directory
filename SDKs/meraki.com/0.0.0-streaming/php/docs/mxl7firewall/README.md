# mxL7Firewall

### Available Operations

* [getNetworkL7FirewallRules](#getnetworkl7firewallrules) - List the MX L7 firewall rules for an MX network
* [updateNetworkL7FirewallRules](#updatenetworkl7firewallrules) - Update the MX L7 firewall rules for an MX network

## getNetworkL7FirewallRules

List the MX L7 firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkL7FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkL7FirewallRulesRequest();
    $request->networkId = 'omnis';

    $response = $sdk->mxL7Firewall->getNetworkL7FirewallRules($request);

    if ($response->getNetworkL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkL7FirewallRules

Update the MX L7 firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkL7FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkL7FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkL7FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkL7FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkL7FirewallRulesRequestBodyRulesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkL7FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkL7FirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkL7FirewallRulesRequestBodyRules(),
        new UpdateNetworkL7FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'ipsum';

    $response = $sdk->mxL7Firewall->updateNetworkL7FirewallRules($request);

    if ($response->updateNetworkL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
