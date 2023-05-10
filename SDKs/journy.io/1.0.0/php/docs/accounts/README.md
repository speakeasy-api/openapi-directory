# accounts

## Overview

Endpoints for creating, deleting or updating accounts.

### Available Operations

* [addUserToAccount](#addusertoaccount) - Add users to an account
* [deleteAccount](#deleteaccount) - Delete account
* [removeUserFromAccount](#removeuserfromaccount) - Remove user from account
* [upsertAccount](#upsertaccount) - Create or update account

## addUserToAccount

You can add up to 100 users to an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBodyAccount;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBodyUsers;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBodyUsersIdentification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddUserToAccountRequestBody();
    $request->account = new AddUserToAccountRequestBodyAccount();
    $request->account->accountId = 'quibusdam';
    $request->account->domain = 'unde';
    $request->users = [
        new AddUserToAccountRequestBodyUsers(),
        new AddUserToAccountRequestBodyUsers(),
        new AddUserToAccountRequestBodyUsers(),
        new AddUserToAccountRequestBodyUsers(),
    ];

    $response = $sdk->accounts->addUserToAccount($request);

    if ($response->addUserToAccount201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccount

Endpoint used to delete an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountRequestBodyIdentification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountRequestBody();
    $request->identification = new DeleteAccountRequestBodyIdentification();
    $request->identification->accountId = 'corrupti';
    $request->identification->domain = 'illum';

    $response = $sdk->accounts->deleteAccount($request);

    if ($response->deleteAccount202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeUserFromAccount

You can remove up to 100 users from an account.

When removing a user, the user will still be stored in journy.io, but marked as "removed".


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveUserFromAccountRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RemoveUserFromAccountRequestBodyAccount;
use \OpenAPI\OpenAPI\Models\Operations\RemoveUserFromAccountRequestBodyUsers;
use \OpenAPI\OpenAPI\Models\Operations\RemoveUserFromAccountRequestBodyUsersIdentification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveUserFromAccountRequestBody();
    $request->account = new RemoveUserFromAccountRequestBodyAccount();
    $request->account->accountId = 'vel';
    $request->account->domain = 'error';
    $request->users = [
        new RemoveUserFromAccountRequestBodyUsers(),
        new RemoveUserFromAccountRequestBodyUsers(),
        new RemoveUserFromAccountRequestBodyUsers(),
    ];

    $response = $sdk->accounts->removeUserFromAccount($request);

    if ($response->removeUserFromAccount204ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upsertAccount

Endpoint used to create or update an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpsertAccountRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpsertAccountRequestBodyIdentification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpsertAccountRequestBody();
    $request->identification = new UpsertAccountRequestBodyIdentification();
    $request->identification->accountId = 'suscipit';
    $request->identification->domain = 'iure';
    $request->properties = [
        'debitis' => 'ipsa',
        'delectus' => 'tempora',
    ];

    $response = $sdk->accounts->upsertAccount($request);

    if ($response->upsertAccount201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
