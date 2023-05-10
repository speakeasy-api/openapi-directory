# scheduledPayments

### Available Operations

* [getAccountsAccountIdScheduledPayments](#getaccountsaccountidscheduledpayments) - Get Scheduled Payments

## getAccountsAccountIdScheduledPayments

Get Scheduled Payments by Account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdScheduledPaymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdScheduledPaymentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdScheduledPaymentsRequest();
    $request->accountId = 'quidem';
    $request->sandboxId = 'architecto';
    $request->xCustomerUserAgent = 'ipsa';
    $request->xFapiAuthDate = 'reiciendis';
    $request->xFapiCustomerIpAddress = 'est';
    $request->xFapiInteractionId = 'mollitia';

    $requestSecurity = new GetAccountsAccountIdScheduledPaymentsSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->scheduledPayments->getAccountsAccountIdScheduledPayments($request, $requestSecurity);

    if ($response->obReadScheduledPayment3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
