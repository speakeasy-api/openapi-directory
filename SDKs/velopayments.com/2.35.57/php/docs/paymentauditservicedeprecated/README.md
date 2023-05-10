# paymentAuditServiceDeprecated

### Available Operations

* [~~exportTransactionsCsvv3~~](#exporttransactionscsvv3) - V3 Export Transactions :warning: **Deprecated**
* [~~getFundingsV1~~](#getfundingsv1) - V1 Get Fundings for Payor :warning: **Deprecated**
* [~~getPaymentDetailsV3~~](#getpaymentdetailsv3) - V3 Get Payment :warning: **Deprecated**
* [~~getPaymentsForPayoutPAV3~~](#getpaymentsforpayoutpav3) - V3 Get Payments for Payout :warning: **Deprecated**
* [~~getPayoutStatsV1~~](#getpayoutstatsv1) - V1 Get Payout Statistics :warning: **Deprecated**
* [~~getPayoutsForPayorV3~~](#getpayoutsforpayorv3) - V3 Get Payouts for Payor :warning: **Deprecated**
* [~~listPaymentChanges~~](#listpaymentchanges) - V1 List Payment Changes :warning: **Deprecated**
* [~~listPaymentsAuditV3~~](#listpaymentsauditv3) - V3 Get List of Payments :warning: **Deprecated**

## ~~exportTransactionsCsvv3~~

Deprecated (use /v4/paymentaudit/transactions instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportTransactionsCsvv3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportTransactionsCsvv3Request();
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-07-11');
    $request->payorId = 'c28744ed-53b8-48f3-a8d8-f5c0b2f2fb7b';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-22');

    $response = $sdk->paymentAuditServiceDeprecated->exportTransactionsCsvv3($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getFundingsV1~~

Deprecated (use /v4/paymentaudit/fundings)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFundingsV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFundingsV1Request();
    $request->page = 292794;
    $request->pageSize = 671907;
    $request->payorId = '276b2691-6fe1-4f08-b429-4e3698f447f6';
    $request->sort = 'sit';

    $response = $sdk->paymentAuditServiceDeprecated->getFundingsV1($request);

    if ($response->getFundingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPaymentDetailsV3~~

Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentDetailsV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentDetailsV3Request();
    $request->paymentId = '3e8b445e-80ca-455e-bd20-e457e1858b6a';
    $request->sensitive = false;

    $response = $sdk->paymentAuditServiceDeprecated->getPaymentDetailsV3($request);

    if ($response->paymentResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPaymentsForPayoutPAV3~~

Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsForPayoutPAV3Request;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsForPayoutPAV3StatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentsForPayoutPAV3Request();
    $request->page = 530089;
    $request->pageSize = 622385;
    $request->paymentAmountFrom = 944708;
    $request->paymentAmountTo = 710529;
    $request->payoutId = 'e3a5aa8e-4824-4d0a-b407-5088e5186206';
    $request->remoteId = 'nostrum';
    $request->sensitive = false;
    $request->sort = 'saepe';
    $request->sourceAmountFrom = 622231;
    $request->sourceAmountTo = 8511;
    $request->status = GetPaymentsForPayoutPAV3StatusEnum::UNFUNDED;
    $request->submittedDateFrom = DateTime::createFromFormat('Y-m-d', '2022-05-16');
    $request->submittedDateTo = DateTime::createFromFormat('Y-m-d', '2022-10-08');

    $response = $sdk->paymentAuditServiceDeprecated->getPaymentsForPayoutPAV3($request);

    if ($response->getPaymentsForPayoutResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPayoutStatsV1~~

Deprecated (Use /v4/paymentaudit/payoutStatistics)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayoutStatsV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayoutStatsV1Request();
    $request->payorId = '194b8abf-603a-479f-9dfe-0ab7da8a50ce';

    $response = $sdk->paymentAuditServiceDeprecated->getPayoutStatsV1($request);

    if ($response->getPayoutStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPayoutsForPayorV3~~

Deprecated (use /v4/paymentaudit/payouts instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayoutsForPayorV3Request;
use \OpenAPI\OpenAPI\Models\Operations\GetPayoutsForPayorV3StatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayoutsForPayorV3Request();
    $request->page = 97243;
    $request->pageSize = 542457;
    $request->payorId = '7f86bc17-3d68-49ee-a952-6f8d986e881e';
    $request->payoutMemo = 'dolorum';
    $request->sort = 'repellendus';
    $request->status = GetPayoutsForPayorV3StatusEnum::SUBMITTED;
    $request->submittedDateFrom = DateTime::createFromFormat('Y-m-d', '2022-11-14');
    $request->submittedDateTo = DateTime::createFromFormat('Y-m-d', '2022-08-26');

    $response = $sdk->paymentAuditServiceDeprecated->getPayoutsForPayorV3($request);

    if ($response->getPayoutsResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listPaymentChanges~~

Deprecated (use /v4/payments/deltas instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentChangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPaymentChangesRequest();
    $request->page = 36033;
    $request->pageSize = 106429;
    $request->payorId = '2563f94e-29e9-473e-922a-57a15be3e060';
    $request->updatedSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-17T09:54:13.457Z');

    $response = $sdk->paymentAuditServiceDeprecated->listPaymentChanges($request);

    if ($response->paymentDeltaResponseV1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listPaymentsAuditV3~~

Deprecated (use /v4/paymentaudit/payments instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentsAuditV3Request;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentsAuditV3StatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPaymentsAuditV3Request();
    $request->page = 474668;
    $request->pageSize = 907733;
    $request->payeeId = '2b6e3ab8-845f-4059-ba60-ff2a54a31e94';
    $request->paymentAmountFrom = 477646;
    $request->paymentAmountTo = 403218;
    $request->paymentCurrency = 'ut';
    $request->paymentMemo = 'culpa';
    $request->payorId = '3e865e79-56f9-4251-a5a9-da660ff57bfa';
    $request->payorName = 'laborum';
    $request->remoteId = 'placeat';
    $request->sensitive = false;
    $request->sort = 'modi';
    $request->sourceAccountName = 'voluptatibus';
    $request->sourceAmountFrom = 564064;
    $request->sourceAmountTo = 889794;
    $request->sourceCurrency = 'sapiente';
    $request->status = ListPaymentsAuditV3StatusEnum::FAILED;
    $request->submittedDateFrom = DateTime::createFromFormat('Y-m-d', '2022-04-21');
    $request->submittedDateTo = DateTime::createFromFormat('Y-m-d', '2022-08-31');

    $response = $sdk->paymentAuditServiceDeprecated->listPaymentsAuditV3($request);

    if ($response->listPaymentsResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
