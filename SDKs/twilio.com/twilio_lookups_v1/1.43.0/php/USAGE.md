<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPhoneNumberRequest();
    $request->addOns = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->addOnsData = [
        'nulla' => 'corrupti',
        'illum' => 'vel',
        'error' => 'deserunt',
    ];
    $request->countryCode = 'HM';
    $request->phoneNumber = 'iure';
    $request->type = [
        'debitis',
        'ipsa',
    ];

    $requestSecurity = new FetchPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->fetchPhoneNumber($request, $requestSecurity);

    if ($response->lookupsV1PhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->