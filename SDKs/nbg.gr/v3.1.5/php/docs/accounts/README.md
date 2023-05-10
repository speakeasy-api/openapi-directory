# accounts

### Available Operations

* [getAccounts](#getaccounts) - Get Accounts
* [getAccountsAccountId](#getaccountsaccountid) - Get Accounts

## getAccounts

Get Accounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsRequest();
    $request->sandboxId = 'at';
    $request->xCustomerUserAgent = 'maiores';
    $request->xFapiAuthDate = 'molestiae';
    $request->xFapiCustomerIpAddress = 'quod';
    $request->xFapiInteractionId = 'quod';

    $requestSecurity = new GetAccountsSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->accounts->getAccounts($request, $requestSecurity);

    if ($response->obReadAccount5 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountsAccountId

Get Accounts by Account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdRequest();
    $request->accountId = 'esse';
    $request->sandboxId = 'totam';
    $request->xCustomerUserAgent = 'porro';
    $request->xFapiAuthDate = 'dolorum';
    $request->xFapiCustomerIpAddress = 'dicta';
    $request->xFapiInteractionId = 'nam';

    $requestSecurity = new GetAccountsAccountIdSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->accounts->getAccountsAccountId($request, $requestSecurity);

    if ($response->obReadAccount5 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
