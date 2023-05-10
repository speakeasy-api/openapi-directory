# smOwnersForKey

### Available Operations

* [getNetworkPiiSmOwnersForKey](#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

## getNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiSmOwnersForKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiSmOwnersForKeyRequest();
    $request->bluetoothMac = 'laboriosam';
    $request->email = 'Valentin_Jenkins@gmail.com';
    $request->imei = 'corporis';
    $request->mac = 'quis';
    $request->networkId = 'ipsum';
    $request->serial = 'perferendis';
    $request->username = 'Mallory.Considine62';

    $response = $sdk->smOwnersForKey->getNetworkPiiSmOwnersForKey($request);

    if ($response->getNetworkPiiSmOwnersForKey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
