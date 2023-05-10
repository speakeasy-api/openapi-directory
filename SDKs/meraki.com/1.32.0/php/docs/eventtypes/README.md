# eventTypes

### Available Operations

* [getNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description

## getNetworkEventsEventTypes

List the event type to human-readable description

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkEventsEventTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkEventsEventTypesRequest();
    $request->networkId = 'minima';

    $response = $sdk->eventTypes->getNetworkEventsEventTypes($request);

    if ($response->getNetworkEventsEventTypes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
