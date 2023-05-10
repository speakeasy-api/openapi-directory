<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksV3AppIdSettingsClearRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksV3AppIdSettingsClearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksV3AppIdSettingsClearRequest();
    $request->appId = 548814;

    $requestSecurity = new DeleteWebhooksV3AppIdSettingsClearSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->settings->deleteWebhooksV3AppIdSettingsClear($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->