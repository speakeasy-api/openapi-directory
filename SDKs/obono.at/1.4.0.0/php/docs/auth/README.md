# auth

## Overview

authentication and authorization

### Available Operations

* [getAuth](#getauth) - Request a JWT access token using your obono username and password.

## getAuth

Request a JWT access token using your obono username and password.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAuthSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->auth->getAuth($requestSecurity);

    if ($response->authResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
