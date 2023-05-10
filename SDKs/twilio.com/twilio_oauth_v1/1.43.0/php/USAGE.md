<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceCodeCreateDeviceCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceCodeCreateDeviceCodeRequest();
    $request->audiences = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->clientSid = 'unde';
    $request->scopes = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];

    $requestSecurity = new CreateDeviceCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createDeviceCode($request, $requestSecurity);

    if ($response->oauthV1DeviceCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->