# sourceAccounts

## Overview

<p>Source Accounts are where funds are drawn from for making payouts</p>


### Available Operations

* [~~getSourceAccountV2~~](#getsourceaccountv2) - Get Source Account :warning: **Deprecated**
* [getSourceAccountV3](#getsourceaccountv3) - Get details about given source account.
* [~~getSourceAccountsV2~~](#getsourceaccountsv2) - Get list of source accounts :warning: **Deprecated**
* [getSourceAccountsV3](#getsourceaccountsv3) - Get list of source accounts
* [~~setNotificationsRequest~~](#setnotificationsrequest) - Set notifications :warning: **Deprecated**
* [setNotificationsRequestV3](#setnotificationsrequestv3) - Set notifications
* [~~transferFundsV2~~](#transferfundsv2) - Transfer Funds between source accounts :warning: **Deprecated**
* [transferFundsV3](#transferfundsv3) - Transfer Funds between source accounts

## ~~getSourceAccountV2~~

Get details about given source account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSourceAccountV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSourceAccountV2Request();
    $request->sourceAccountId = 'b31180f7-39ae-49e0-97eb-809e2810331f';

    $response = $sdk->sourceAccounts->getSourceAccountV2($request);

    if ($response->sourceAccountResponseV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSourceAccountV3

Get details about given source account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSourceAccountV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSourceAccountV3Request();
    $request->sourceAccountId = '3981d4c7-00b6-407f-bc93-c73b9da3f2ce';

    $response = $sdk->sourceAccounts->getSourceAccountV3($request);

    if ($response->sourceAccountResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getSourceAccountsV2~~

List source accounts.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSourceAccountsV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSourceAccountsV2Request();
    $request->fundingAccountId = 'da7e23f2-2574-411f-af4b-7544e472e802';
    $request->page = 535802;
    $request->pageSize = 316730;
    $request->payorId = '7a5b4046-3a7d-4575-b140-0e764ad7334e';
    $request->physicalAccountId = 'c1b781b3-6a08-4088-9100-efada200ef04';
    $request->physicalAccountName = 'qui';
    $request->sort = 'qui';

    $response = $sdk->sourceAccounts->getSourceAccountsV2($request);

    if ($response->listSourceAccountResponseV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSourceAccountsV3

List source accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSourceAccountsV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSourceAccountsV3Request();
    $request->fundingAccountId = 'eb2164cf-9ab8-4366-8723-ffda9e06bee4';
    $request->includeUserDeleted = 'rem';
    $request->page = 157884;
    $request->pageSize = 354225;
    $request->payorId = 'c1fc0e11-5c80-4bff-9185-44ec42defcce';
    $request->physicalAccountId = '8f197777-3e63-4562-a7b4-08f05e3d48fd';
    $request->physicalAccountName = 'est';
    $request->sort = 'delectus';
    $request->type = 'velit';

    $response = $sdk->sourceAccounts->getSourceAccountsV3($request);

    if ($response->listSourceAccountResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~setNotificationsRequest~~

<p>Set notifications for a given source account</p>
<p>deprecated since 2.34 (use v3 version)</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetNotificationsRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetNotificationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetNotificationsRequestRequest();
    $request->setNotificationsRequest = new SetNotificationsRequest();
    $request->setNotificationsRequest->minimumBalance = 110522;
    $request->sourceAccountId = '3a1f5fd9-4259-4c0b-b6f2-5ea944f3b756';

    $response = $sdk->sourceAccounts->setNotificationsRequest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setNotificationsRequestV3

<p>Set notifications for a given source account</p>
<p>If the balance falls below the amount set in the request an email notification will be sent to the email address registered in the payor profile</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetNotificationsRequestV3Request;
use \OpenAPI\OpenAPI\Models\Shared\SetNotificationsRequest2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetNotificationsRequestV3Request();
    $request->setNotificationsRequest2 = new SetNotificationsRequest2();
    $request->setNotificationsRequest2->minimumBalance = 10000000;
    $request->sourceAccountId = 'c11f6c37-a512-4624-b835-bbc05a23a45c';

    $response = $sdk->sourceAccounts->setNotificationsRequestV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~transferFundsV2~~

Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TransferFundsV2Request;
use \OpenAPI\OpenAPI\Models\Shared\TransferRequestV2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferFundsV2Request();
    $request->transferRequestV2 = new TransferRequestV2();
    $request->transferRequestV2->amount = 932250;
    $request->transferRequestV2->currency = 'USD';
    $request->transferRequestV2->toSourceAccountId = 'fc5fde10-a0ce-4216-9e51-0019c6dc5e34';
    $request->sourceAccountId = '762799bf-bbe6-4949-bb2b-b4ecae6c3d5d';

    $response = $sdk->sourceAccounts->transferFundsV2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferFundsV3

Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TransferFundsV3Request;
use \OpenAPI\OpenAPI\Models\Shared\TransferRequestV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferFundsV3Request();
    $request->transferRequestV3 = new TransferRequestV3();
    $request->transferRequestV3->amount = 706872;
    $request->transferRequestV3->currency = 'USD';
    $request->transferRequestV3->toSourceAccountId = '3adebd5d-aea4-4c50-aa8a-a94c02644cf5';
    $request->sourceAccountId = 'e9d9a457-8adc-41ac-a00d-ec001ac802e2';

    $response = $sdk->sourceAccounts->transferFundsV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
