# standingOrders

### Available Operations

* [getAccountsAccountIdStandingOrders](#getaccountsaccountidstandingorders) - Get Standing Orders

## getAccountsAccountIdStandingOrders

Get Standing Orders by Account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdStandingOrdersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdStandingOrdersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdStandingOrdersRequest();
    $request->accountId = 'laborum';
    $request->sandboxId = 'dolores';
    $request->xCustomerUserAgent = 'dolorem';
    $request->xFapiAuthDate = 'corporis';
    $request->xFapiCustomerIpAddress = 'explicabo';
    $request->xFapiInteractionId = 'nobis';

    $requestSecurity = new GetAccountsAccountIdStandingOrdersSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->standingOrders->getAccountsAccountIdStandingOrders($request, $requestSecurity);

    if ($response->obReadStandingOrder6 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
