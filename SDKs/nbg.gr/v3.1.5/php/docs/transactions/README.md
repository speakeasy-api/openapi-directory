# transactions

### Available Operations

* [getAccountsAccountIdStatementsStatementIdTransactions](#getaccountsaccountidstatementsstatementidtransactions) - Get Transactions
* [getAccountsAccountIdTransactions](#getaccountsaccountidtransactions) - Get Transactions

## getAccountsAccountIdStatementsStatementIdTransactions

Get Transactions by Account ID and Statement ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdStatementsStatementIdTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdStatementsStatementIdTransactionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdStatementsStatementIdTransactionsRequest();
    $request->accountId = 'quia';
    $request->sandboxId = 'quis';
    $request->statementId = 'vitae';
    $request->xCustomerUserAgent = 'laborum';
    $request->xFapiAuthDate = 'animi';
    $request->xFapiCustomerIpAddress = 'enim';
    $request->xFapiInteractionId = 'odit';

    $requestSecurity = new GetAccountsAccountIdStatementsStatementIdTransactionsSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->transactions->getAccountsAccountIdStatementsStatementIdTransactions($request, $requestSecurity);

    if ($response->obReadTransaction6 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountsAccountIdTransactions

Get Transactions by Account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdTransactionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdTransactionsRequest();
    $request->accountId = 'quo';
    $request->fromBookingDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T09:45:27.272Z');
    $request->sandboxId = 'ipsam';
    $request->toBookingDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-11T16:11:54.761Z');
    $request->xCustomerUserAgent = 'aut';
    $request->xFapiAuthDate = 'quasi';
    $request->xFapiCustomerIpAddress = 'error';
    $request->xFapiInteractionId = 'temporibus';

    $requestSecurity = new GetAccountsAccountIdTransactionsSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->transactions->getAccountsAccountIdTransactions($request, $requestSecurity);

    if ($response->obReadTransaction6 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
