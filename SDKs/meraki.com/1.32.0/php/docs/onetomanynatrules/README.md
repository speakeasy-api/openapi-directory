# oneToManyNatRules

### Available Operations

* [getNetworkApplianceFirewallOneToManyNatRules](#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToManyNatRules](#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network

## getNetworkApplianceFirewallOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallOneToManyNatRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallOneToManyNatRulesRequest();
    $request->networkId = 'deleniti';

    $response = $sdk->oneToManyNatRules->getNetworkApplianceFirewallOneToManyNatRules($request);

    if ($response->getNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallOneToManyNatRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(),
    ];
    $request->networkId = 'dolore';

    $response = $sdk->oneToManyNatRules->updateNetworkApplianceFirewallOneToManyNatRules($request);

    if ($response->updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
