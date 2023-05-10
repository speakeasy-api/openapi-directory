<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAccountSettingsRequest();
    $request->subaccountSid = 'corrupti';

    $requestSecurity = new FetchAccountSettingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->fetchAccountSettings($request, $requestSecurity);

    if ($response->insightsV1AccountSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->