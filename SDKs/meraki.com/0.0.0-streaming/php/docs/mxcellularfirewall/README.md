# mxCellularFirewall

### Available Operations

* [getNetworkCellularFirewallRules](#getnetworkcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [updateNetworkCellularFirewallRules](#updatenetworkcellularfirewallrules) - Update the cellular firewall rules of an MX network

## getNetworkCellularFirewallRules

Return the cellular firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularFirewallRulesRequest();
    $request->networkId = 'vero';

    $response = $sdk->mxCellularFirewall->getNetworkCellularFirewallRules($request);

    if ($response->getNetworkCellularFirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularFirewallRules

Update the cellular firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularFirewallRulesRequest();
    $request->requestBody = new UpdateNetworkCellularFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkCellularFirewallRulesRequestBodyRules(),
        new UpdateNetworkCellularFirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'dolore';

    $response = $sdk->mxCellularFirewall->updateNetworkCellularFirewallRules($request);

    if ($response->updateNetworkCellularFirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
