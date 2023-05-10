# inboundCellularFirewallRules

### Available Operations

* [getNetworkApplianceFirewallInboundCellularFirewallRules](#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [updateNetworkApplianceFirewallInboundCellularFirewallRules](#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network

## getNetworkApplianceFirewallInboundCellularFirewallRules

Return the inbound cellular firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest();
    $request->networkId = 'quo';

    $response = $sdk->inboundCellularFirewallRules->getNetworkApplianceFirewallInboundCellularFirewallRules($request);

    if ($response->getNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallInboundCellularFirewallRules

Update the inbound cellular firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'cupiditate';

    $response = $sdk->inboundCellularFirewallRules->updateNetworkApplianceFirewallInboundCellularFirewallRules($request);

    if ($response->updateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
