# transactions

### Available Operations

* [deleteTransactionsId](#deletetransactionsid) - Delete transaction
* [getAccountsIdTransactions](#getaccountsidtransactions) - List transactions in account
* [getCategoriesIdTransactions](#getcategoriesidtransactions) - List transactions in categories
* [getTransactionAccountsIdTransactions](#gettransactionaccountsidtransactions) - List transactions in transaction account
* [getTransactionsId](#gettransactionsid) - Get a transaction
* [getUsersIdTransactions](#getusersidtransactions) - List transactions in user
* [postTransactionAccountsIdTransactions](#posttransactionaccountsidtransactions) - Create a transaction in transaction account
* [putTransactionsId](#puttransactionsid) - Update a transaction

## deleteTransactionsId

Deletes a transaction and all its data by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTransactionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTransactionsIdRequest();
    $request->id = 131797;

    $response = $sdk->transactions->deleteTransactionsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountsIdTransactions

Lists transactions belonging to an account by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsIdTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsIdTransactionsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsIdTransactionsRequest();
    $request->endDate = 'deserunt';
    $request->id = 716327;
    $request->needsReview = 841386;
    $request->page = 289406;
    $request->search = 'modi';
    $request->startDate = 'qui';
    $request->type = GetAccountsIdTransactionsTypeEnum::DEBIT;
    $request->uncategorised = 586513;
    $request->updatedSince = 'quos';

    $response = $sdk->transactions->getAccountsIdTransactions($request);

    if ($response->transactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategoriesIdTransactions

Lists transactions belonging to one or more categories by their IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoriesIdTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoriesIdTransactionsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoriesIdTransactionsRequest();
    $request->endDate = 'perferendis';
    $request->id = '2d502a94-bb4f-463c-969e-9a3efa77dfb1';
    $request->needsReview = 297437;
    $request->page = 767024;
    $request->search = 'facere';
    $request->startDate = 'ea';
    $request->type = GetCategoriesIdTransactionsTypeEnum::DEBIT;
    $request->uncategorised = 675439;
    $request->updatedSince = 'accusamus';

    $response = $sdk->transactions->getCategoriesIdTransactions($request);

    if ($response->transactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionAccountsIdTransactions

Lists transactions belonging to a transaction account by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionAccountsIdTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionAccountsIdTransactionsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionAccountsIdTransactionsRequest();
    $request->endDate = 'non';
    $request->id = 581273;
    $request->needsReview = 313218;
    $request->page = 881736;
    $request->search = 'delectus';
    $request->startDate = 'quidem';
    $request->type = GetTransactionAccountsIdTransactionsTypeEnum::CREDIT;
    $request->uncategorised = 725255;
    $request->updatedSince = 'id';

    $response = $sdk->transactions->getTransactionAccountsIdTransactions($request);

    if ($response->transactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionsId

Gets a transaction by its ID.

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
    $request->id = 501324;

    $response = $sdk->transactions->getTransactionsId($request);

    if ($response->transaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdTransactions

Lists transactions belonging to a user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTransactionsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdTransactionsRequest();
    $request->endDate = 'deleniti';
    $request->id = 956084;
    $request->needsReview = 230533;
    $request->page = 643990;
    $request->search = 'nisi';
    $request->startDate = 'vel';
    $request->type = GetUsersIdTransactionsTypeEnum::CREDIT;
    $request->uncategorised = 606393;
    $request->updatedSince = 'molestiae';

    $response = $sdk->transactions->getUsersIdTransactions($request);

    if ($response->transactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTransactionAccountsIdTransactions

Creates a transaction in a transaction account by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTransactionAccountsIdTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTransactionAccountsIdTransactionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTransactionAccountsIdTransactionsRequest();
    $request->requestBody = new PostTransactionAccountsIdTransactionsRequestBody();
    $request->requestBody->amount = 11.5;
    $request->requestBody->categoryId = 42;
    $request->requestBody->chequeNumber = 'perferendis';
    $request->requestBody->date = '2018-02-27';
    $request->requestBody->isTransfer = false;
    $request->requestBody->labels = 'lunch,mexican';
    $request->requestBody->memo = 'nihil';
    $request->requestBody->needsReview = false;
    $request->requestBody->note = 'I really enjoyed the loaded corn chips';
    $request->requestBody->payee = 'Tex Otago';
    $request->id = 301575;

    $response = $sdk->transactions->postTransactionAccountsIdTransactions($request);

    if ($response->transaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putTransactionsId

Updates a transaction by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutTransactionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutTransactionsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutTransactionsIdRequest();
    $request->requestBody = new PutTransactionsIdRequestBody();
    $request->requestBody->amount = 225;
    $request->requestBody->categoryId = 42;
    $request->requestBody->chequeNumber = '503113643691';
    $request->requestBody->date = '2018-02-27';
    $request->requestBody->isTransfer = false;
    $request->requestBody->labels = 'foo,bar,baz';
    $request->requestBody->memo = 'Rent';
    $request->requestBody->needsReview = false;
    $request->requestBody->note = 'distinctio';
    $request->requestBody->payee = 'Bill';
    $request->id = 660174;

    $response = $sdk->transactions->putTransactionsId($request);

    if ($response->transaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
