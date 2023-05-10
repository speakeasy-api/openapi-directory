# users

## Overview

User management

### Available Operations

* [deleteUsersId](#deleteusersid) - Delete a User
* [getUsers](#getusers) - Fetch a list of Users
* [postUsers](#postusers) - Create a User
* [putUsersId](#putusersid) - Update a User

## deleteUsersId

Delete a User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdRequest();
    $request->id = 273542;

    $response = $sdk->users->deleteUsersId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

Fetch a list of Users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->userId = 'vel';

    $response = $sdk->users->getUsers($request);

    if ($response->users !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsers

Create a User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\User;

$sdk = SDK::builder()
    ->build();

try {
    $request = new User();
    $request->administrator = false;
    $request->attributes = [
        'officiis' => 'qui',
        'dolorum' => 'a',
        'esse' => 'harum',
        'iusto' => 'ipsum',
    ];
    $request->coordinateFormat = 'quisquam';
    $request->deviceLimit = 947371;
    $request->deviceReadonly = false;
    $request->disabled = false;
    $request->email = 'Mortimer31@gmail.com';
    $request->expirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-16T12:43:49.763Z');
    $request->id = 518201;
    $request->latitude = 4717.52;
    $request->limitCommands = false;
    $request->longitude = 256.62;
    $request->map = 'expedita';
    $request->name = 'Jane Kassulke';
    $request->password = 'deserunt';
    $request->phone = '321.688.7165 x211';
    $request->poiLayer = 'distinctio';
    $request->readonly = false;
    $request->twelveHourFormat = false;
    $request->userLimit = 704474;
    $request->zoom = 396060;

    $response = $sdk->users->postUsers($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersId

Update a User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\User;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdRequest();
    $request->user = new User();
    $request->user->administrator = false;
    $request->user->attributes = [
        'molestias' => 'temporibus',
        'qui' => 'neque',
    ];
    $request->user->coordinateFormat = 'fugit';
    $request->user->deviceLimit = 164959;
    $request->user->deviceReadonly = false;
    $request->user->disabled = false;
    $request->user->email = 'Brady_Hermiston3@yahoo.com';
    $request->user->expirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-05T00:59:28.911Z');
    $request->user->id = 748664;
    $request->user->latitude = 925.96;
    $request->user->limitCommands = false;
    $request->user->longitude = 9037.2;
    $request->user->map = 'ipsum';
    $request->user->name = 'Gayle Lueilwitz';
    $request->user->password = 'aperiam';
    $request->user->phone = '322.361.0059 x06879';
    $request->user->poiLayer = 'ut';
    $request->user->readonly = false;
    $request->user->twelveHourFormat = false;
    $request->user->userLimit = 703495;
    $request->user->zoom = 586410;
    $request->id = 181631;

    $response = $sdk->users->putUsersId($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
