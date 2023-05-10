# userAccountsFindAndModifyUserAccounts

### Available Operations

* [deleteUserAccountsUserAccountId](#deleteuseraccountsuseraccountid) - Removes the user account
* [getUserAccounts](#getuseraccounts) - Returns a paginated list of userAccounts
* [getUserAccountsUserAccountId](#getuseraccountsuseraccountid) - Returns a single user account
* [patchUserAccountsUserAccountId](#patchuseraccountsuseraccountid) - Updates the user account fields
* [postUserAccountsUserAccountId](#postuseraccountsuseraccountid) - Updates the user account or adds the user account if it doesn't exist

## deleteUserAccountsUserAccountId

Removes the user account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserAccountsUserAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserAccountsUserAccountIdRequest();
    $request->userAccountId = 'doloribus';

    $response = $sdk->userAccountsFindAndModifyUserAccounts->deleteUserAccountsUserAccountId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserAccounts

- Results are paginated and the default is value is 1000 if no limit is provided


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserAccountsRequest();
    $request->limit = 891924;
    $request->pageNumber = 260341;
    $request->query = 'maxime';
    $request->sort = 'deleniti';

    $response = $sdk->userAccountsFindAndModifyUserAccounts->getUserAccounts($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserAccountsUserAccountId

Returns a single user account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserAccountsUserAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserAccountsUserAccountIdRequest();
    $request->userAccountId = 'facilis';

    $response = $sdk->userAccountsFindAndModifyUserAccounts->getUserAccountsUserAccountId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchUserAccountsUserAccountId

Updates the user account fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchUserAccountsUserAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchUserAccountsUserAccountIdRequest();
    $request->customData = 'in';
    $request->email = 'Bailee_VonRueden@gmail.com';
    $request->name = 'Kristie Spencer';
    $request->userAccountId = 'pariatur';
    $request->userId = 'accusantium';

    $response = $sdk->userAccountsFindAndModifyUserAccounts->patchUserAccountsUserAccountId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUserAccountsUserAccountId

Updates the user account or adds the user account if it doesn't exist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostUserAccountsUserAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUserAccountsUserAccountIdRequest();
    $request->customData = 'consequuntur';
    $request->email = 'Levi77@yahoo.com';
    $request->name = 'Ervin Schoen';
    $request->userAccountId = 'odit';
    $request->userId = 'ea';

    $response = $sdk->userAccountsFindAndModifyUserAccounts->postUserAccountsUserAccountId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
