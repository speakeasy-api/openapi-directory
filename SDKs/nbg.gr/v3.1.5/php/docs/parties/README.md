# parties

### Available Operations

* [getAccountsAccountIdParties](#getaccountsaccountidparties) - Get Parties
* [getAccountsAccountIdParty](#getaccountsaccountidparty) - Get Party
* [getParty](#getparty) - Get Party

## getAccountsAccountIdParties

Get Parties by Account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdPartiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdPartiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdPartiesRequest();
    $request->accountId = 'impedit';
    $request->sandboxId = 'cum';
    $request->xCustomerUserAgent = 'esse';
    $request->xFapiAuthDate = 'ipsum';
    $request->xFapiCustomerIpAddress = 'excepturi';
    $request->xFapiInteractionId = 'aspernatur';

    $requestSecurity = new GetAccountsAccountIdPartiesSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->parties->getAccountsAccountIdParties($request, $requestSecurity);

    if ($response->obReadParty3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountsAccountIdParty

Get Party by Account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdPartyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdPartySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdPartyRequest();
    $request->accountId = 'perferendis';
    $request->sandboxId = 'ad';
    $request->xCustomerUserAgent = 'natus';
    $request->xFapiAuthDate = 'sed';
    $request->xFapiCustomerIpAddress = 'iste';
    $request->xFapiInteractionId = 'dolor';

    $requestSecurity = new GetAccountsAccountIdPartySecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->parties->getAccountsAccountIdParty($request, $requestSecurity);

    if ($response->obReadParty2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getParty

Get Party

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPartyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPartySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPartyRequest();
    $request->sandboxId = 'natus';
    $request->xCustomerUserAgent = 'laboriosam';
    $request->xFapiAuthDate = 'hic';
    $request->xFapiCustomerIpAddress = 'saepe';
    $request->xFapiInteractionId = 'fuga';

    $requestSecurity = new GetPartySecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->parties->getParty($request, $requestSecurity);

    if ($response->obReadParty2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
