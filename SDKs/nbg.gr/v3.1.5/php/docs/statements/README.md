# statements

### Available Operations

* [getAccountsAccountIdStatements](#getaccountsaccountidstatements) - Get Statements
* [getAccountsAccountIdStatementsStatementId](#getaccountsaccountidstatementsstatementid) - Get Statements
* [getAccountsAccountIdStatementsStatementIdFile](#getaccountsaccountidstatementsstatementidfile) - Get Statements

## getAccountsAccountIdStatements

Get Statements by Account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdStatementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdStatementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdStatementsRequest();
    $request->accountId = 'enim';
    $request->fromStatementDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T11:47:13.463Z');
    $request->sandboxId = 'minima';
    $request->toStatementDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T22:47:10.600Z');
    $request->xCustomerUserAgent = 'iure';
    $request->xFapiAuthDate = 'culpa';
    $request->xFapiCustomerIpAddress = 'doloribus';
    $request->xFapiInteractionId = 'sapiente';

    $requestSecurity = new GetAccountsAccountIdStatementsSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->statements->getAccountsAccountIdStatements($request, $requestSecurity);

    if ($response->obReadStatement2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountsAccountIdStatementsStatementId

Get Statements by Account ID and Statement ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdStatementsStatementIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdStatementsStatementIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdStatementsStatementIdRequest();
    $request->accountId = 'architecto';
    $request->sandboxId = 'mollitia';
    $request->statementId = 'dolorem';
    $request->xCustomerUserAgent = 'culpa';
    $request->xFapiAuthDate = 'consequuntur';
    $request->xFapiCustomerIpAddress = 'repellat';
    $request->xFapiInteractionId = 'mollitia';

    $requestSecurity = new GetAccountsAccountIdStatementsStatementIdSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->statements->getAccountsAccountIdStatementsStatementId($request, $requestSecurity);

    if ($response->obReadStatement2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountsAccountIdStatementsStatementIdFile

Get Statement PDF File by Account ID and Statement ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdStatementsStatementIdFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdStatementsStatementIdFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdStatementsStatementIdFileRequest();
    $request->accountId = 'occaecati';
    $request->sandboxId = 'numquam';
    $request->statementId = 'commodi';
    $request->xCustomerUserAgent = 'quam';
    $request->xFapiAuthDate = 'molestiae';
    $request->xFapiCustomerIpAddress = 'velit';
    $request->xFapiInteractionId = 'error';

    $requestSecurity = new GetAccountsAccountIdStatementsStatementIdFileSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->statements->getAccountsAccountIdStatementsStatementIdFile($request, $requestSecurity);

    if ($response->getAccountsAccountIdStatementsStatementIdFile200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
