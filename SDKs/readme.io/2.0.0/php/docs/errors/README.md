# errors

### Available Operations

* [getErrors](#geterrors) - Get errors

## getErrors

Returns with all of the error page types for this project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetErrorsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetErrorsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->errors->getErrors($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
