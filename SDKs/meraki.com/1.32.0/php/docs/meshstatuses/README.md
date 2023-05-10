# meshStatuses

### Available Operations

* [getNetworkWirelessMeshStatuses](#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters

## getNetworkWirelessMeshStatuses

List wireless mesh statuses for repeaters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessMeshStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessMeshStatusesRequest();
    $request->endingBefore = 'necessitatibus';
    $request->networkId = 'cumque';
    $request->perPage = 611630;
    $request->startingAfter = 'reiciendis';

    $response = $sdk->meshStatuses->getNetworkWirelessMeshStatuses($request);

    if ($response->getNetworkWirelessMeshStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
