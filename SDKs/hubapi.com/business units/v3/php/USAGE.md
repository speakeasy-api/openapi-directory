<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBusinessUnitsV3BusinessUnitsUserUserIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBusinessUnitsV3BusinessUnitsUserUserIdRequest();
    $request->name = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->properties = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->userId = 'vel';

    $requestSecurity = new GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->businessUnit->getBusinessUnitsV3BusinessUnitsUserUserId($request, $requestSecurity);

    if ($response->collectionResponsePublicBusinessUnitNoPaging !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->