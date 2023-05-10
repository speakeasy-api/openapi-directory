# viberServiceMessage

## Overview

Managing your [Viber Service Message](https://developer.nexmo.com/messages/concepts/viber) account

### Available Operations

* [getVSMAccount](#getvsmaccount) - Retrieve a Viber Service Message account

## getVSMAccount

Retrieve a Viber Service Message account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVSMAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVSMAccountSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVSMAccountRequest();
    $request->externalId = 'minus';

    $requestSecurity = new GetVSMAccountSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->viberServiceMessage->getVSMAccount($request, $requestSecurity);

    if ($response->vsmAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
