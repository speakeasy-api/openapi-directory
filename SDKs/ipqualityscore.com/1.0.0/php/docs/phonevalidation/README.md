# phoneValidation

### Available Operations

* [phoneValidation](#phonevalidation) - Phone Validation

## phoneValidation

Phone Validation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PhoneValidationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PhoneValidationRequest();
    $request->userPhoneHere = '18007132618';
    $request->yourApiKeyHere = 'asd24#sdfs322#';
    $request->country = 'UK';

    $response = $sdk->phoneValidation->phoneValidation($request);

    if ($response->phoneValidation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
