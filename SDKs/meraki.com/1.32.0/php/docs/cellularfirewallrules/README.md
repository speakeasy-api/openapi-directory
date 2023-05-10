# cellularFirewallRules

### Available Operations

* [getNetworkApplianceFirewallCellularFirewallRules](#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [updateNetworkApplianceFirewallCellularFirewallRules](#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network

## getNetworkApplianceFirewallCellularFirewallRules

Return the cellular firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallCellularFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallCellularFirewallRulesRequest();
    $request->networkId = 'est';

    $response = $sdk->cellularFirewallRules->getNetworkApplianceFirewallCellularFirewallRules($request);

    if ($response->getNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallCellularFirewallRules

Update the cellular firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'eligendi';

    $response = $sdk->cellularFirewallRules->updateNetworkApplianceFirewallCellularFirewallRules($request);

    if ($response->updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
