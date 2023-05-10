# piiKeys

### Available Operations

* [getNetworkPiiPiiKeys](#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier

## getNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiPiiKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiPiiKeysRequest();
    $request->bluetoothMac = 'error';
    $request->email = 'Alena_Herzog4@yahoo.com';
    $request->imei = 'consectetur';
    $request->mac = 'laborum';
    $request->networkId = 'occaecati';
    $request->serial = 'dolorem';
    $request->username = 'Thea27';

    $response = $sdk->piiKeys->getNetworkPiiPiiKeys($request);

    if ($response->getNetworkPiiPiiKeys200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
