# mxL7ApplicationCategories

### Available Operations

* [getNetworkL7FirewallRulesApplicationCategories](#getnetworkl7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network

## getNetworkL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkL7FirewallRulesApplicationCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkL7FirewallRulesApplicationCategoriesRequest();
    $request->networkId = 'vero';

    $response = $sdk->mxL7ApplicationCategories->getNetworkL7FirewallRulesApplicationCategories($request);

    if ($response->getNetworkL7FirewallRulesApplicationCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
