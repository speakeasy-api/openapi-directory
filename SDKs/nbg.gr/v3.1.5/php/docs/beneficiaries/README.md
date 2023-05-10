# beneficiaries

### Available Operations

* [getAccountsAccountIdBeneficiaries](#getaccountsaccountidbeneficiaries) - Get Beneficiaries

## getAccountsAccountIdBeneficiaries

Get Beneficiaries by Account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdBeneficiariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdBeneficiariesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdBeneficiariesRequest();
    $request->accountId = 'totam';
    $request->sandboxId = 'beatae';
    $request->xCustomerUserAgent = 'commodi';
    $request->xFapiAuthDate = 'molestiae';
    $request->xFapiCustomerIpAddress = 'modi';
    $request->xFapiInteractionId = 'qui';

    $requestSecurity = new GetAccountsAccountIdBeneficiariesSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->beneficiaries->getAccountsAccountIdBeneficiaries($request, $requestSecurity);

    if ($response->obReadBeneficiary5 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
