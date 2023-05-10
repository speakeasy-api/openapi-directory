# emailValidation

### Available Operations

* [emailValidation](#emailvalidation) - Email Validation

## emailValidation

Email Validation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EmailValidationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmailValidationRequest();
    $request->userEmailHere = 'example@example.com';
    $request->yourApiKeyHere = 'asd24#sdfs322#';

    $response = $sdk->emailValidation->emailValidation($request);

    if ($response->emailValidation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
