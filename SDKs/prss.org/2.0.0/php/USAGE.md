<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2BroadcastservicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2BroadcastservicesOrderByIDEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2BroadcastservicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2BroadcastservicesRequest();
    $request->orderById = GetApiV2BroadcastservicesOrderByIDEnum::DESC;
    $request->pageSize = 592845;
    $request->pageStart = 715190;

    $requestSecurity = new GetApiV2BroadcastservicesSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->broadcastServices->getApiV2Broadcastservices($request, $requestSecurity);

    if ($response->episodes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->