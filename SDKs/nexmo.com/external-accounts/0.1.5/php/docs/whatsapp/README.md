# whatsApp

### Available Operations

* [getWAAccount](#getwaaccount) - Retrieve a Whatsapp account

## getWAAccount

Retrieve a Whatsapp account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWAAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWAAccountSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWAAccountRequest();
    $request->externalId = 'placeat';

    $requestSecurity = new GetWAAccountSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->whatsApp->getWAAccount($request, $requestSecurity);

    if ($response->waAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
