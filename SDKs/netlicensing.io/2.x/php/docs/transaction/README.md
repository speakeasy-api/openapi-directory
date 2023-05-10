# transaction

## Overview

Transaction operations

Transaction Services
<https://netlicensing.io/wiki/transaction-services>
### Available Operations

* [createTransaction](#createtransaction) - Create Transaction
* [getTransaction](#gettransaction) - Get Transaction 
* [listTransactions](#listtransactions) - List Transactions
* [updateTransaction](#updatetransaction) - Update Transaction

## createTransaction

Creates a new Transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTransactionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTransactionRequestBodySourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTransactionRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTransactionRequestBody();
    $request->active = false;
    $request->dateClosed = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T08:57:48.803Z');
    $request->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T19:05:24.174Z');
    $request->licenseeNumber = 'cupiditate';
    $request->number = 'quos';
    $request->paymentMethod = 'perferendis';
    $request->source = CreateTransactionRequestBodySourceEnum::SHOP;
    $request->status = CreateTransactionRequestBodyStatusEnum::CANCELLED;

    $requestSecurity = new CreateTransactionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->transaction->createTransaction($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransaction

Return a Transaction by 'transactionNumber'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionRequest();
    $request->transactionNumber = 'assumenda';

    $requestSecurity = new GetTransactionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->transaction->getTransaction($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTransactions

Return a list of all Transactions for the current Vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTransactionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListTransactionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->transaction->listTransactions($requestSecurity);

    if ($response->netlicensings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTransaction

Sets the provided properties to a Transaction. Return an updated Transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTransactionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTransactionRequestBodySourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTransactionRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTransactionRequest();
    $request->requestBody = new UpdateTransactionRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->dateClosed = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-30T06:52:02.282Z');
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T14:19:37.294Z');
    $request->requestBody->number = 'excepturi';
    $request->requestBody->paymentMethod = 'tempora';
    $request->requestBody->source = UpdateTransactionRequestBodySourceEnum::SHOP;
    $request->requestBody->status = UpdateTransactionRequestBodyStatusEnum::PENDING;
    $request->transactionNumber = 'tempore';

    $requestSecurity = new UpdateTransactionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->transaction->updateTransaction($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
