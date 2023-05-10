<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest();
    $request->appId = 548814;
    $request->cardId = 'provident';

    $requestSecurity = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->cards->deleteCrmV3ExtensionsCardsAppIdCardIdArchive($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->