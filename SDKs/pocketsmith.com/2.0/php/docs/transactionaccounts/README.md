# transactionAccounts

### Available Operations

* [getTransactionAccountsId](#gettransactionaccountsid) - Get transaction account
* [getUsersIdTransactionAccounts](#getusersidtransactionaccounts) - List transaction accounts in user
* [putTransactionAccountsId](#puttransactionaccountsid) - Update transaction account

## getTransactionAccountsId

Gets a transaction account by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionAccountsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionAccountsIdRequest();
    $request->id = 9356;

    $response = $sdk->transactionAccounts->getTransactionAccountsId($request);

    if ($response->transactionAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdTransactionAccounts

List all transaction accounts belonging to a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTransactionAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdTransactionAccountsRequest();
    $request->id = 667411;

    $response = $sdk->transactionAccounts->getUsersIdTransactionAccounts($request);

    if ($response->transactionAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putTransactionAccountsId

Updates the transaction account by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutTransactionAccountsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutTransactionAccountsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutTransactionAccountsIdRequest();
    $request->requestBody = new PutTransactionAccountsIdRequestBody();
    $request->requestBody->institutionId = 42;
    $request->requestBody->startingBalance = 3547.45;
    $request->requestBody->startingBalanceDate = '2015-03-15';
    $request->id = 842342;

    $response = $sdk->transactionAccounts->putTransactionAccountsId($request);

    if ($response->transactionAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
