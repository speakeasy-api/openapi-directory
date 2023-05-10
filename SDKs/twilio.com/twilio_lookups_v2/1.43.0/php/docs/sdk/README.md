# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchPhoneNumber](#fetchphonenumber)

## fetchPhoneNumber

### Example Usage

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
    $request->addressCountryCode = 'molestiae';
    $request->addressLine1 = 'minus';
    $request->addressLine2 = 'placeat';
    $request->city = 'Jayceestead';
    $request->countryCode = 'HR';
    $request->dateOfBirth = 'recusandae';
    $request->fields = 'temporibus';
    $request->firstName = 'Antonetta';
    $request->lastName = 'Hauck';
    $request->nationalId = 'veritatis';
    $request->phoneNumber = 'deserunt';
    $request->postalCode = '38971';
    $request->state = 'at';

    $requestSecurity = new FetchPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchPhoneNumber($request, $requestSecurity);

    if ($response->lookupsV2PhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
