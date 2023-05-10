# switchStacks

### Available Operations

* [getNetworkSwitchStacks](#getnetworkswitchstacks) - List the switch stacks in a network

## getNetworkSwitchStacks

List the switch stacks in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStacksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStacksRequest();
    $request->networkId = 'cupiditate';

    $response = $sdk->switchStacks->getNetworkSwitchStacks($request);

    if ($response->getNetworkSwitchStacks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
