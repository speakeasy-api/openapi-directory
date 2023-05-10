<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClientClientIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClientClientIdRequest();
    $request->clientId = 'corrupti';

    $response = $sdk->client->getClientClientId($request);

    if ($response->getClientClientId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->