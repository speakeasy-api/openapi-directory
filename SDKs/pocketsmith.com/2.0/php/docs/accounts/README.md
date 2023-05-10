# accounts

### Available Operations

* [deleteAccountsId](#deleteaccountsid) - Delete account
* [getAccountsId](#getaccountsid) - Get account
* [getInstitutionsIdAccounts](#getinstitutionsidaccounts) - List accounts in institution
* [getUsersIdAccounts](#getusersidaccounts) - List accounts in user
* [postUsersIdAccounts](#postusersidaccounts) - Create an account in user
* [putAccountsId](#putaccountsid) - Update account
* [putUsersIdAccounts](#putusersidaccounts) - Update the display order of accounts in user

## deleteAccountsId

Deletes an account and all its data by ID, optionally merge scenarios into another account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountsIdRequest();
    $request->id = 592845;

    $response = $sdk->accounts->deleteAccountsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountsId

Gets an account by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsIdRequest();
    $request->id = 715190;

    $response = $sdk->accounts->getAccountsId($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstitutionsIdAccounts

Lists accounts belonging to an institution by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstitutionsIdAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstitutionsIdAccountsRequest();
    $request->id = 844266;

    $response = $sdk->accounts->getInstitutionsIdAccounts($request);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdAccounts

Lists all accounts belonging to the user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdAccountsRequest();
    $request->id = 602763;

    $response = $sdk->accounts->getUsersIdAccounts($request);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdAccounts

Creates and returns an account belonging to the user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdAccountsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdAccountsRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdAccountsRequest();
    $request->requestBody = new PostUsersIdAccountsRequestBody();
    $request->requestBody->currencyCode = 'NZD';
    $request->requestBody->institutionId = 42;
    $request->requestBody->title = 'Foo';
    $request->requestBody->type = PostUsersIdAccountsRequestBodyTypeEnum::BANK;
    $request->id = 857946;

    $response = $sdk->accounts->postUsersIdAccounts($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccountsId

Updates and returns an account by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountsIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountsIdRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccountsIdRequest();
    $request->requestBody = new PutAccountsIdRequestBody();
    $request->requestBody->currencyCode = 'NZD';
    $request->requestBody->isNetWorth = false;
    $request->requestBody->title = 'Savings';
    $request->requestBody->type = PutAccountsIdRequestBodyTypeEnum::BANK;
    $request->id = 544883;

    $response = $sdk->accounts->putAccountsId($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdAccounts

Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdAccountsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\Scenario;
use \OpenAPI\OpenAPI\Models\Shared\ScenarioTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactionAccount;
use \OpenAPI\OpenAPI\Models\Shared\Institution;
use \OpenAPI\OpenAPI\Models\Shared\TransactionAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdAccountsRequest();
    $request->requestBody = new PutUsersIdAccountsRequestBody();
    $request->requestBody->accounts = [
        new Account(),
        new Account(),
        new Account(),
        new Account(),
    ];
    $request->id = 423655;

    $response = $sdk->accounts->putUsersIdAccounts($request);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
