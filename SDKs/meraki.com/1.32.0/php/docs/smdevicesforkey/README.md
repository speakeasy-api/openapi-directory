# smDevicesForKey

### Available Operations

* [getNetworkPiiSmDevicesForKey](#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

## getNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiSmDevicesForKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiSmDevicesForKeyRequest();
    $request->bluetoothMac = 'excepturi';
    $request->email = 'Dudley24@gmail.com';
    $request->imei = 'commodi';
    $request->mac = 'sapiente';
    $request->networkId = 'ullam';
    $request->serial = 'quo';
    $request->username = 'Dejuan.Luettgen';

    $response = $sdk->smDevicesForKey->getNetworkPiiSmDevicesForKey($request);

    if ($response->getNetworkPiiSmDevicesForKey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
