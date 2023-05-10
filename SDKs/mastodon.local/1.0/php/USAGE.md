<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1AnnouncementsIdReactionsNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV1AnnouncementsIdReactionsNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV1AnnouncementsIdReactionsNameRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->name = 'Christopher Hills';

    $requestSecurity = new DeleteApiV1AnnouncementsIdReactionsNameSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->deleteApiV1AnnouncementsIdReactionsName($request, $requestSecurity);

    if ($response->deleteApiV1AnnouncementsIdReactionsName200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->