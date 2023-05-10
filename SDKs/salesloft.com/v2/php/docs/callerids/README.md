# callerIDs

## Overview

Caller ID Information

### Available Operations

* [getV2PhoneNumbersCallerIdsJson](#getv2phonenumberscalleridsjson) - List caller ids

## getV2PhoneNumbersCallerIdsJson

Each entry is a possible caller ID match for the number. Multiple
entries may be returned if the phone number is present on more than one
person in the system.  Phone number should be in E.164 format.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PhoneNumbersCallerIdsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2PhoneNumbersCallerIdsJsonRequest();
    $request->phoneNumber = 'expedita';

    $response = $sdk->callerIDs->getV2PhoneNumbersCallerIdsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
