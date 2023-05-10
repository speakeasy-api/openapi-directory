# balances

### Available Operations

* [getAccountsAccountIdBalances](#getaccountsaccountidbalances) - Get Balances

## getAccountsAccountIdBalances

Get Balances by Account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdBalancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdBalancesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdBalancesRequest();
    $request->accountId = 'officia';
    $request->sandboxId = 'occaecati';
    $request->xCustomerUserAgent = 'fugit';
    $request->xFapiAuthDate = 'deleniti';
    $request->xFapiCustomerIpAddress = 'hic';
    $request->xFapiInteractionId = 'optio';

    $requestSecurity = new GetAccountsAccountIdBalancesSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->balances->getAccountsAccountIdBalances($request, $requestSecurity);

    if ($response->obReadBalance1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
