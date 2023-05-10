# byClient

### Available Operations

* [getNetworkPoliciesByClient](#getnetworkpoliciesbyclient) - Get policies for all clients with policies

## getNetworkPoliciesByClient

Get policies for all clients with policies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPoliciesByClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPoliciesByClientRequest();
    $request->endingBefore = 'illo';
    $request->networkId = 'accusantium';
    $request->perPage = 424663;
    $request->startingAfter = 'ea';
    $request->t0 = 'beatae';
    $request->timespan = 8777.51;

    $response = $sdk->byClient->getNetworkPoliciesByClient($request);

    if ($response->getNetworkPoliciesByClient200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
