# transactions

## Overview

Transactions represent the movement of money into and out of an
account. They have many characteristics that vary depending on
the kind of transaction. Transactions may be temporarily `HELD`
(pending) or `SETTLED`, typically depending on which payment
method was used at the point of sale.


### Available Operations

* [getAccountsAccountIdTransactions](#getaccountsaccountidtransactions) - List transactions by account
* [getTransactions](#gettransactions) - List transactions
* [getTransactionsId](#gettransactionsid) - Retrieve transaction

## getAccountsAccountIdTransactions

Retrieve a list of all transactions for a specific account. The returned
list is [paginated](#pagination) and can be scrolled by following the
`next` and `prev` links where present. To narrow the results to a
specific date range pass one or both of `filter[since]` and
`filter[until]` in the query string. These filter parameters
**should not** be used for pagination. Results are ordered newest first
to oldest last.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionStatusEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdTransactionsRequest();
    $request->accountId = 'mollitia';
    $request->filterCategory = 'dolorem';
    $request->filterSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T05:51:25.673Z');
    $request->filterStatus = TransactionStatusEnumEnum::SETTLED;
    $request->filterTag = 'mollitia';
    $request->filterUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-30T02:19:51.375Z');
    $request->pageSize = 414369;

    $response = $sdk->transactions->getAccountsAccountIdTransactions($request);

    if ($response->listTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactions

Retrieve a list of all transactions across all accounts for the currently
authenticated user. The returned list is [paginated](#pagination) and can
be scrolled by following the `next` and `prev` links where present. To
narrow the results to a specific date range pass one or both of
`filter[since]` and `filter[until]` in the query string. These filter
parameters **should not** be used for pagination. Results are ordered
newest first to oldest last.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionStatusEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsRequest();
    $request->filterCategory = 'quam';
    $request->filterSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T18:49:53.900Z');
    $request->filterStatus = TransactionStatusEnumEnum::SETTLED;
    $request->filterTag = 'quia';
    $request->filterUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-21T17:06:48.722Z');
    $request->pageSize = 674752;

    $response = $sdk->transactions->getTransactions($request);

    if ($response->listTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionsId

Retrieve a specific transaction by providing its unique identifier.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsIdRequest();
    $request->id = 'a52c3f5a-d019-4da1-bfe7-8f097b0074f1';

    $response = $sdk->transactions->getTransactionsId($request);

    if ($response->getTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
