# users

### Available Operations

* [getUser](#getuser) - Get info about the current user

## getUser

Get info about the current user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetUserSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->users->getUser($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
