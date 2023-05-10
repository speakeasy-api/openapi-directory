# payouts

## Overview

<p>Payout APIs allow you to create and instruct payouts to payees</p>
<p>There are three phases to a payout:</p>
<ul>
    <li>Submit - the payments are created within the platform</li>
    <li>Quote - optional step if FX is involved</li>
    <li>Instruct - the payments are sent to the payment rails for processing</li>
</ul>
<p>Between 1 and 2000 payments can be created within the platform as part of a Payout</p>


### Available Operations

* [createQuoteForPayoutV3](#createquoteforpayoutv3) - Create a quote for the payout
* [deschedulePayout](#deschedulepayout) - Deschedule a payout
* [getPaymentsForPayoutV3](#getpaymentsforpayoutv3) - Retrieve payments for a payout
* [getPayoutSummaryV3](#getpayoutsummaryv3) - Get Payout Summary
* [instructPayoutV3](#instructpayoutv3) - Instruct Payout
* [scheduleForPayout](#scheduleforpayout) - Schedule a payout
* [submitPayoutV3Json](#submitpayoutv3json) - Submit Payout
* [submitPayoutV3Multipart](#submitpayoutv3multipart) - Submit Payout
* [withdrawPayment](#withdrawpayment) - Withdraw a Payment
* [withdrawPayoutV3](#withdrawpayoutv3) - Withdraw Payout

## createQuoteForPayoutV3

Create quote for a payout

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateQuoteForPayoutV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateQuoteForPayoutV3Request();
    $request->payoutId = 'bb8a7202-6114-435e-939d-bc2259b1abda';

    $response = $sdk->payouts->createQuoteForPayoutV3($request);

    if ($response->quoteResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deschedulePayout

Remove the schedule for a scheduled payout

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeschedulePayoutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeschedulePayoutRequest();
    $request->payoutId = '8c070e10-84cb-4067-ad1a-d879eeb9665b';

    $response = $sdk->payouts->deschedulePayout($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentsForPayoutV3

Retrieve payments for a payout

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsForPayoutV3Request;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsForPayoutV3StatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsForPayoutV3TransmissionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentsForPayoutV3Request();
    $request->page = 515638;
    $request->pageSize = 357207;
    $request->paymentMemo = 'officiis';
    $request->payorPaymentId = 'voluptatibus';
    $request->payoutId = 'bd02bae0-be2d-4782-a59e-3ea4b5197f92';
    $request->remoteId = 'numquam';
    $request->sourceAccountName = 'numquam';
    $request->status = GetPaymentsForPayoutV3StatusEnum::ACCEPTED;
    $request->transmissionType = GetPaymentsForPayoutV3TransmissionTypeEnum::WIRE;

    $response = $sdk->payouts->getPaymentsForPayoutV3($request);

    if ($response->pagedPaymentsResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayoutSummaryV3

Get payout summary - returns the current state of the payout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayoutSummaryV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayoutSummaryV3Request();
    $request->payoutId = 'a7ce52b8-95c5-437c-a454-efb0b34896c3';

    $response = $sdk->payouts->getPayoutSummaryV3($request);

    if ($response->payoutSummaryResponseV3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## instructPayoutV3

Instruct a payout to be made for the specified payoutId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InstructPayoutV3Request;
use \OpenAPI\OpenAPI\Models\Shared\InstructPayoutRequestV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstructPayoutV3Request();
    $request->instructPayoutRequestV3 = new InstructPayoutRequestV3();
    $request->instructPayoutRequestV3->fxRateDegredationThresholdPercentage = 7955.91;
    $request->payoutId = 'a5acfbe2-fd57-4075-b792-9177deac646e';

    $response = $sdk->payouts->instructPayoutV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scheduleForPayout

<p>Schedule a payout for auto-instruction in the future
or update existing payout schedule if the payout has been scheduled before.</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScheduleForPayoutRequest;
use \OpenAPI\OpenAPI\Models\Shared\SchedulePayoutRequestV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScheduleForPayoutRequest();
    $request->schedulePayoutRequestV3 = new SchedulePayoutRequestV3();
    $request->schedulePayoutRequestV3->notificationsEnabled = false;
    $request->schedulePayoutRequestV3->scheduledFor = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2025-01-01T10:00:00Z');
    $request->payoutId = 'cb573409-e3eb-41e5-a2b1-2eb07f116db9';

    $response = $sdk->payouts->scheduleForPayout($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitPayoutV3Json

<p>Create a new payout and return a location header with a link to the payout</p>
<p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>
<p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>
<p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreatePayoutRequestV3;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInstructionV3;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInstructionV3TransmissionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayoutRequestV3();
    $request->payments = [
        new PaymentInstructionV3(),
        new PaymentInstructionV3(),
        new PaymentInstructionV3(),
    ];
    $request->payoutFromPayorId = 'c4261044-13df-4a6c-b1d4-fa8be2b46f5a';
    $request->payoutMemo = 'Monthly Payment';
    $request->payoutToPayorId = '9afc6b39-de12-466a-a9ca-07c7a23b312d';

    $response = $sdk->payouts->submitPayoutV3Json($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitPayoutV3Multipart

<p>Create a new payout and return a location header with a link to the payout</p>
<p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>
<p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>
<p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitPayoutV3MultipartFormData;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInstructionV3;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInstructionV3TransmissionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitPayoutV3MultipartFormData();
    $request->file = [
        new PaymentInstructionV3(),
        new PaymentInstructionV3(),
    ];
    $request->payorId = '45fc95fa-8897-40e1-89db-b30fcb33ea05';
    $request->payoutFromPayorId = '5b197cd4-4e2f-452d-82d3-513bb6f48b65';
    $request->payoutToPayorId = '6bcdb35f-f2e4-4b27-937a-8cd9e7319c17';

    $response = $sdk->payouts->submitPayoutV3Multipart($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## withdrawPayment

<p>withdraw a payment </p>
<p>There are a variety of reasons why this can fail</p>
<ul>
    <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
    <li>the payout must not be in a state of 'instructed'</li>
</ul>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WithdrawPaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\WithdrawPaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WithdrawPaymentRequest();
    $request->withdrawPaymentRequest = new WithdrawPaymentRequest();
    $request->withdrawPaymentRequest->reason = 'Payment submitted in error';
    $request->paymentId = '7d525f77-b114-4eeb-92ff-785fc37814d4';

    $response = $sdk->payouts->withdrawPayment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## withdrawPayoutV3

Withdraw Payout will remove the payout details from the rails but the payout will still be accessible in payout service in WITHDRAWN status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WithdrawPayoutV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WithdrawPayoutV3Request();
    $request->payoutId = 'c98e0c2b-b89e-4b75-9ad6-36c600503d8b';

    $response = $sdk->payouts->withdrawPayoutV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
