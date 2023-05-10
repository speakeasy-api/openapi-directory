# users

### Available Operations

* [getMe](#getme) - Get the authorised user
* [getUsersId](#getusersid) - Get user
* [putUsersId](#putusersid) - Update user

## getMe

Gets the user that corresponds to the access token used in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->users->getMe();

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersId

Gets a user by ID. You must be authorised as the target user in order to make this request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdRequest();
    $request->id = 287991;

    $response = $sdk->users->getUsersId($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersId

Updates the user by their ID. You must be authorised as the target user in order to make this request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdRequest();
    $request->requestBody = new PutUsersIdRequestBody();
    $request->requestBody->alwaysShowBaseCurrency = true;
    $request->requestBody->baseCurrencyCode = 'nzd';
    $request->requestBody->betaUser = true;
    $request->requestBody->email = 'foo@bar.com';
    $request->requestBody->name = 'John Appleseed';
    $request->requestBody->timeZone = 'Auckland';
    $request->requestBody->weekStartDay = 1;
    $request->id = 290077;

    $response = $sdk->users->putUsersId($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
