# transfers

## Overview

This section shows how you execute credit, balance and number transfers, as well as viewing past transactions.

### Available Operations

* [retrieveBalanceTransfers](#retrievebalancetransfers) - Retrieve list of balance transfers
* [retrieveCreditTransfers](#retrievecredittransfers) - Retrieve list of credit transfers
* [transferBalance](#transferbalance) - Transfer balance
* [transferCredit](#transfercredit) - Transfer credit
* [transferNumber](#transfernumber) - Transfer number

## retrieveBalanceTransfers

Retrieve a list of balance transfers that have taken place for a primary account within a specified time period.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveBalanceTransfersRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveBalanceTransfersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveBalanceTransfersRequest();
    $request->apiKey = 'illum';
    $request->endDate = 'vel';
    $request->startDate = 'error';
    $request->subaccount = 'deserunt';

    $requestSecurity = new RetrieveBalanceTransfersSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->transfers->retrieveBalanceTransfers($request, $requestSecurity);

    if ($response->listBalanceTransfersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveCreditTransfers

Retrieve a list of credit transfers that have taken place for a primary account within a specified time period.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCreditTransfersRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCreditTransfersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveCreditTransfersRequest();
    $request->apiKey = 'suscipit';
    $request->endDate = 'iure';
    $request->startDate = 'magnam';
    $request->subaccount = 'debitis';

    $requestSecurity = new RetrieveCreditTransfersSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->transfers->retrieveCreditTransfers($request, $requestSecurity);

    if ($response->listCreditTransfersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferBalance

Transfer balance between a primary account and one of its subaccounts. Note that balance_available_for_transfer = |account_balance - credit_limit| of the source account.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransferBalanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransferBalanceOrCreditRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransferBalanceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferBalanceRequest();
    $request->transferBalanceOrCreditRequest = new TransferBalanceOrCreditRequest();
    $request->transferBalanceOrCreditRequest->amount = 123.45;
    $request->transferBalanceOrCreditRequest->from = '7c9738e6';
    $request->transferBalanceOrCreditRequest->reference = 'This gets added to the audit log';
    $request->transferBalanceOrCreditRequest->to = 'ad6dc56f';
    $request->apiKey = 'ipsa';

    $requestSecurity = new TransferBalanceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->transfers->transferBalance($request, $requestSecurity);

    if ($response->transferBalanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferCredit

Transfer credit limit between a primary account and one of its subaccounts.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransferCreditRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransferBalanceOrCreditRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransferCreditSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferCreditRequest();
    $request->transferBalanceOrCreditRequest = new TransferBalanceOrCreditRequest();
    $request->transferBalanceOrCreditRequest->amount = 123.45;
    $request->transferBalanceOrCreditRequest->from = '7c9738e6';
    $request->transferBalanceOrCreditRequest->reference = 'This gets added to the audit log';
    $request->transferBalanceOrCreditRequest->to = 'ad6dc56f';
    $request->apiKey = 'delectus';

    $requestSecurity = new TransferCreditSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->transfers->transferCredit($request, $requestSecurity);

    if ($response->transferCreditResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferNumber

Transfer number from one account to another.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransferNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransferNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransferNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferNumberRequest();
    $request->transferNumberRequest = new TransferNumberRequest();
    $request->transferNumberRequest->country = 'GB';
    $request->transferNumberRequest->from = '7c9738e6';
    $request->transferNumberRequest->number = 23507703696;
    $request->transferNumberRequest->to = 'ad6dc56f';
    $request->apiKey = 'tempora';

    $requestSecurity = new TransferNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->transfers->transferNumber($request, $requestSecurity);

    if ($response->transferNumberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
