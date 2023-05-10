# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchUser](#fetchuser) - Fetch a frontline user
* [updateUser](#updateuser) - Update an existing frontline user

## fetchUser

Fetch a frontline user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUserRequest();
    $request->sid = 'provident';

    $requestSecurity = new FetchUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUser($request, $requestSecurity);

    if ($response->frontlineV1User !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUser

Update an existing frontline user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserUpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserEnumStateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserRequest();
    $request->requestBody = new UpdateUserUpdateUserRequest();
    $request->requestBody->avatar = 'distinctio';
    $request->requestBody->friendlyName = 'quibusdam';
    $request->requestBody->isAvailable = false;
    $request->requestBody->state = UserEnumStateTypeEnum::DEACTIVATED;
    $request->sid = 'nulla';

    $requestSecurity = new UpdateUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUser($request, $requestSecurity);

    if ($response->frontlineV1User !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
