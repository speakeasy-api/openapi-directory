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
    $request->addressCountryCode = 'corrupti';
    $request->addressLine1 = 'provident';
    $request->addressLine2 = 'distinctio';
    $request->city = 'New Orleans';
    $request->countryCode = 'TC';
    $request->dateOfBirth = 'corrupti';
    $request->fields = 'illum';
    $request->firstName = 'Henry';
    $request->lastName = 'Mueller';
    $request->nationalId = 'deserunt';
    $request->phoneNumber = 'suscipit';
    $request->postalCode = '28092';
    $request->state = 'suscipit';

    $requestSecurity = new FetchPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->fetchPhoneNumber($request, $requestSecurity);

    if ($response->lookupsV2PhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->