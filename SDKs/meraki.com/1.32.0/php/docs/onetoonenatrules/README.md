# oneToOneNatRules

### Available Operations

* [getNetworkApplianceFirewallOneToOneNatRules](#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToOneNatRules](#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network

## getNetworkApplianceFirewallOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallOneToOneNatRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallOneToOneNatRulesRequest();
    $request->networkId = 'possimus';

    $response = $sdk->oneToOneNatRules->getNetworkApplianceFirewallOneToOneNatRules($request);

    if ($response->getNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallOneToOneNatRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules(),
    ];
    $request->networkId = 'deleniti';

    $response = $sdk->oneToOneNatRules->updateNetworkApplianceFirewallOneToOneNatRules($request);

    if ($response->updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
