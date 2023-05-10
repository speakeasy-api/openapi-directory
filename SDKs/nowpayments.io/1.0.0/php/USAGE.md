<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllTransfersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllTransfersRequest();
    $request->id = '111';
    $request->limit = '10';
    $request->offset = '0';
    $request->order = 'ASC';
    $request->status = 'CREATED';

    $response = $sdk->billingSubPartnerAPI->getAllTransfers($request);

    if ($response->getAllTransfers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->