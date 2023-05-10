# paymentAuditService

## Overview

Payment Audit Service APIs allow you to see the history of fundings, payouts, and payments to payees.

### Available Operations

* [exportTransactionsCsvv4](#exporttransactionscsvv4) - Export Transactions
* [getFundingsV4](#getfundingsv4) - Get Fundings for Payor
* [getPaymentDetailsV4](#getpaymentdetailsv4) - Get Payment
* [getPaymentsForPayoutV4](#getpaymentsforpayoutv4) - Get Payments for Payout
* [getPayoutStatsV4](#getpayoutstatsv4) - Get Payout Statistics
* [getPayoutsForPayorV4](#getpayoutsforpayorv4) - Get Payouts for Payor
* [listPaymentChangesV4](#listpaymentchangesv4) - List Payment Changes
* [listPaymentsAuditV4](#listpaymentsauditv4) - Get List of Payments

## exportTransactionsCsvv4

Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportTransactionsCsvv4Request;
use \OpenAPI\OpenAPI\Models\Operations\ExportTransactionsCsvv4IncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportTransactionsCsvv4Request();
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-12');
    $request->include = ExportTransactionsCsvv4IncludeEnum::PAYOR_ONLY;
    $request->payorId = '5626d436-813f-416d-9f5f-ce6c556146c3';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-08');

    $response = $sdk->paymentAuditService->exportTransactionsCsvv4($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFundingsV4

<p>Get a list of Fundings for a payor.</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFundingsV4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFundingsV4Request();
    $request->page = 325310;
    $request->pageSize = 53427;
    $request->payorId = 'fb008c42-e141-4aac-b66c-8dd6b1442907';
    $request->sort = 'magnam';
    $request->sourceAccountName = 'odio';

    $response = $sdk->paymentAuditService->getFundingsV4($request);

    if ($response->getFundingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentDetailsV4

Get the payment with the given id. This contains the payment history.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentDetailsV4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentDetailsV4Request();
    $request->paymentId = '4778a7bd-466d-428c-90ab-3cdca4251904';
    $request->sensitive = false;

    $response = $sdk->paymentAuditService->getPaymentDetailsV4($request);

    if ($response->paymentResponseV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentsForPayoutV4

Get List of payments for Payout, allowing for RETURNED status


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsForPayoutV4Request;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsForPayoutV4StatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsForPayoutV4TransmissionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentsForPayoutV4Request();
    $request->page = 892050;
    $request->pageSize = 370853;
    $request->paymentAmountFrom = 133465;
    $request->paymentAmountTo = 197054;
    $request->payoutId = 'c7e0bc71-78e4-4796-b2a7-0c688282aa48';
    $request->railsId = 'explicabo';
    $request->remoteId = 'minima';
    $request->remoteSystemId = 'nisi';
    $request->sensitive = false;
    $request->sort = 'fugit';
    $request->sourceAmountFrom = 956406;
    $request->sourceAmountTo = 159870;
    $request->status = GetPaymentsForPayoutV4StatusEnum::FUNDED;
    $request->submittedDateFrom = DateTime::createFromFormat('Y-m-d', '2022-02-05');
    $request->submittedDateTo = DateTime::createFromFormat('Y-m-d', '2021-11-30');
    $request->transmissionType = GetPaymentsForPayoutV4TransmissionTypeEnum::ACH;

    $response = $sdk->paymentAuditService->getPaymentsForPayoutV4($request);

    if ($response->getPaymentsForPayoutResponseV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayoutStatsV4

<p>Get payout statistics for a payor.</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayoutStatsV4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayoutStatsV4Request();
    $request->payorId = '7ee17cbe-61e6-4b7b-95bc-0ab3c20c4f37';

    $response = $sdk->paymentAuditService->getPayoutStatsV4($request);

    if ($response->getPayoutStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayoutsForPayorV4

Get List of payouts for payor


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayoutsForPayorV4Request;
use \OpenAPI\OpenAPI\Models\Operations\GetPayoutsForPayorV4ScheduleStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPayoutsForPayorV4StatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayoutsForPayorV4Request();
    $request->fromPayorName = 'blanditiis';
    $request->page = 590984;
    $request->pageSize = 953722;
    $request->payorId = 'd871f99d-d2ef-4d12-9aa6-f1e674bdb04f';
    $request->payoutMemo = 'dicta';
    $request->scheduleStatus = GetPayoutsForPayorV4ScheduleStatusEnum::SCHEDULED;
    $request->scheduledForDateFrom = DateTime::createFromFormat('Y-m-d', '2022-08-23');
    $request->scheduledForDateTo = DateTime::createFromFormat('Y-m-d', '2022-12-26');
    $request->sort = 'voluptatum';
    $request->status = GetPayoutsForPayorV4StatusEnum::REJECTED;
    $request->submittedDateFrom = DateTime::createFromFormat('Y-m-d', '2021-10-18');
    $request->submittedDateTo = DateTime::createFromFormat('Y-m-d', '2021-02-21');

    $response = $sdk->paymentAuditService->getPayoutsForPayorV4($request);

    if ($response->getPayoutsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPaymentChangesV4

Get a paginated response listing payment changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentChangesV4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPaymentChangesV4Request();
    $request->page = 680270;
    $request->pageSize = 99615;
    $request->payorId = '9f1d1705-1339-4d08-886a-1840394c2607';
    $request->updatedSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-07T16:50:11.026Z');

    $response = $sdk->paymentAuditService->listPaymentChangesV4($request);

    if ($response->paymentDeltaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPaymentsAuditV4

Get payments for the given payor Id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentsAuditV4Request;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentsAuditV4PostInstructFxStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentsAuditV4ScheduleStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentsAuditV4StatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentsAuditV4TransmissionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPaymentsAuditV4Request();
    $request->page = 618480;
    $request->pageSize = 244651;
    $request->payeeId = 'f5f0642d-ac7a-4f51-9cc4-13aa63aae8d6';
    $request->paymentAmountFrom = 497678;
    $request->paymentAmountTo = 554688;
    $request->paymentCurrency = 'vel';
    $request->paymentMemo = 'labore';
    $request->payorId = 'dbb675fd-5e60-4b37-9ed4-f6fbee41f333';
    $request->payorName = 'beatae';
    $request->postInstructFxStatus = ListPaymentsAuditV4PostInstructFxStatusEnum::EXECUTED;
    $request->railsId = 'a';
    $request->remoteId = 'debitis';
    $request->remoteSystemId = 'consectetur';
    $request->scheduleStatus = ListPaymentsAuditV4ScheduleStatusEnum::SCHEDULED;
    $request->scheduledForDateFrom = DateTime::createFromFormat('Y-m-d', '2022-03-25');
    $request->scheduledForDateTo = DateTime::createFromFormat('Y-m-d', '2022-01-31');
    $request->sensitive = false;
    $request->sort = 'libero';
    $request->sourceAccountName = 'vitae';
    $request->sourceAmountFrom = 881721;
    $request->sourceAmountTo = 631126;
    $request->sourceCurrency = 'tempora';
    $request->status = ListPaymentsAuditV4StatusEnum::AWAITING_FUNDS;
    $request->submittedDateFrom = DateTime::createFromFormat('Y-m-d', '2022-08-17');
    $request->submittedDateTo = DateTime::createFromFormat('Y-m-d', '2022-09-04');
    $request->transmissionType = ListPaymentsAuditV4TransmissionTypeEnum::LOCAL;

    $response = $sdk->paymentAuditService->listPaymentsAuditV4($request);

    if ($response->listPaymentsResponseV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
