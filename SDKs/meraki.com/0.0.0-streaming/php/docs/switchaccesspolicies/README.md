# switchAccessPolicies

### Available Operations

* [getNetworkAccessPolicies](#getnetworkaccesspolicies) - List the access policies for this network

## getNetworkAccessPolicies

List the access policies for this network. Only valid for MS networks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAccessPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAccessPoliciesRequest();
    $request->networkId = 'iure';

    $response = $sdk->switchAccessPolicies->getNetworkAccessPolicies($request);

    if ($response->getNetworkAccessPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
