# mxL3OutboundFirewall

### Available Operations

* [getNetworkL3FirewallRules](#getnetworkl3firewallrules) - Return the L3 firewall rules for an MX network
* [updateNetworkL3FirewallRules](#updatenetworkl3firewallrules) - Update the L3 firewall rules of an MX network

## getNetworkL3FirewallRules

Return the L3 firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkL3FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkL3FirewallRulesRequest();
    $request->networkId = 'occaecati';

    $response = $sdk->mxL3OutboundFirewall->getNetworkL3FirewallRules($request);

    if ($response->getNetworkL3FirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkL3FirewallRules

Update the L3 firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkL3FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkL3FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkL3FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkL3FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkL3FirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkL3FirewallRulesRequestBodyRules(),
        new UpdateNetworkL3FirewallRulesRequestBodyRules(),
        new UpdateNetworkL3FirewallRulesRequestBodyRules(),
        new UpdateNetworkL3FirewallRulesRequestBodyRules(),
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->networkId = 'quisquam';

    $response = $sdk->mxL3OutboundFirewall->updateNetworkL3FirewallRules($request);

    if ($response->updateNetworkL3FirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
