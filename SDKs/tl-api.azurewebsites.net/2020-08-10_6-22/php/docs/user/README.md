# user

### Available Operations

* [userGet](#userget) - Get all Users detail
This will return all properties related to User entity
            
* [userRegisterUser](#userregisteruser) - Register a new User
            
* [userUpdateUser](#userupdateuser) - Update an exsisting User
            

## userGet

Get all Users detail
This will return all properties related to User entity
            

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
    $response = $sdk->user->userGet();

    if ($response->userDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userRegisterUser

Register a new User
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UserRegisterUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserRegisterUserRequest();
    $request->accountNumber = 'quibusdam';
    $request->externalEntityNumber = 'labore';
    $request->guardian = 264730;
    $request->gymNumber = 'qui';
    $request->introduceBy = 397821;
    $request->name = 'Isaac Aufderhar';
    $request->number = 'ipsam';
    $request->typeId = 4695;
    $request->userId = 146441;

    $response = $sdk->user->userRegisterUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userUpdateUser

Update an exsisting User
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UserUpdateUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserUpdateUserRequest();
    $request->accountNumber = 'dolorum';
    $request->externalEntityNumber = 'excepturi';
    $request->guardian = 270008;
    $request->gymNumber = 'facilis';
    $request->introduceBy = 735194;
    $request->name = 'Lucia Kemmer';
    $request->number = 'sint';
    $request->typeId = 396098;
    $request->userId = 592042;

    $response = $sdk->user->userUpdateUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
