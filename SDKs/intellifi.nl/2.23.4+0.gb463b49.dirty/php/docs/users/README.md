# users

## Overview

The `users` resource contains the user accounts that can log into the Brain Management Console.

Note that this resource is only accessible for administrator users logged into the Brain Management Console.
It is not possible to access this resource using API key authentication.
This resource is therefore irrelevant to most applications.


### Available Operations

* [addUser](#adduser) - Create user
* [deleteUser](#deleteuser) - Delete user
* [getUserById](#getuserbyid) - Get user
* [getUsers](#getusers) - Get all users
* [updateUser](#updateuser) - Update existing user

## addUser

Can only be used by an **administrative** user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Operations\AddUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserInput();
    $request->email = 'user@intellifi.nl';
    $request->firstName = 'Foo';
    $request->isAdmin = false;
    $request->isLocked = false;
    $request->lastName = 'Bar';
    $request->password = 'password1';

    $requestSecurity = new AddUserSecurity();
    $requestSecurity->cookieSid = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->addUser($request, $requestSecurity);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUser

Can only be used by an **administrative** user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->id = 'be2fd570-7577-4929-977d-eac646ecb573';

    $requestSecurity = new DeleteUserSecurity();
    $requestSecurity->cookieSid = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->deleteUser($request, $requestSecurity);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserById

Can only be used by an **administrative** user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserByIdRequest();
    $request->id = '409e3eb1-e5a2-4b12-ab07-f116db99545f';

    $requestSecurity = new GetUserByIdSecurity();
    $requestSecurity->cookieSid = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUserById($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

Can only be used by an **administrative** user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-12T10:26:34.895Z');
    $request->afterId = 'enim';
    $request->before = 'hic';
    $request->beforeId = 'animi';
    $request->email = 'Joseph.Mann@yahoo.com';
    $request->firstName = 'Stephanie';
    $request->from = 'architecto';
    $request->fromId = 'quos';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->isAdmin = false;
    $request->isLocked = false;
    $request->lastName = 'Morar';
    $request->limit = 826862;
    $request->populate = 'tempore';
    $request->resultsOnly = false;
    $request->select = 'libero';
    $request->sort = 'velit';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 385.57;
    $request->until = 'delectus';
    $request->untilId = 'impedit';

    $requestSecurity = new GetUsersSecurity();
    $requestSecurity->cookieSid = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->getUsers($request, $requestSecurity);

    if ($response->getUsers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUser

Can only be used by an **administrative** user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserRequest();
    $request->userInput = new UserInput();
    $request->userInput->email = 'user@intellifi.nl';
    $request->userInput->firstName = 'Foo';
    $request->userInput->isAdmin = false;
    $request->userInput->isLocked = false;
    $request->userInput->lastName = 'Bar';
    $request->userInput->password = 'password1';
    $request->id = 'b33ea055-b197-4cd4-8e2f-52d82d3513bb';

    $requestSecurity = new UpdateUserSecurity();
    $requestSecurity->cookieSid = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->updateUser($request, $requestSecurity);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
