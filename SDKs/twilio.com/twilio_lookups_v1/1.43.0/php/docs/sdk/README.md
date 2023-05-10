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
    $request->addOns = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->addOnsData = [
        'voluptatum' => 'iusto',
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->countryCode = 'BG';
    $request->phoneNumber = 'deserunt';
    $request->type = [
        'ipsam',
    ];

    $requestSecurity = new FetchPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchPhoneNumber($request, $requestSecurity);

    if ($response->lookupsV1PhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
