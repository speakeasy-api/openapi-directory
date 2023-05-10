# accounts

## Overview

Accounts represent the underlying store used to track balances
and the transactions that have occurred to modify those balances
over time. Up currently has two types of account: `SAVER`—used to
earn interest and to hit savings goals, and `TRANSACTIONAL`—used
for everyday spending.


### Available Operations

* [getAccounts](#getaccounts) - List accounts
* [getAccountsId](#getaccountsid) - Retrieve account

## getAccounts

Retrieve a paginated list of all accounts for the currently
authenticated user. The returned list is paginated and can be scrolled
by following the `prev` and `next` links where present.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountTypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\OwnershipTypeEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsRequest();
    $request->filterAccountType = AccountTypeEnumEnum::TRANSACTIONAL;
    $request->filterOwnershipType = OwnershipTypeEnumEnum::JOINT;
    $request->pageSize = 857946;

    $response = $sdk->accounts->getAccounts($request);

    if ($response->listAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountsId

Retrieve a specific account by providing its unique identifier.


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
    $request->id = '8d69a674-e0f4-467c-8879-6ed151a05dfc';

    $response = $sdk->accounts->getAccountsId($request);

    if ($response->getAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
