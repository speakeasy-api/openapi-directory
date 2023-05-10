# v1Transactions

### Available Operations

* [createRefund](#createrefund) - CreateRefund
* [listOrders](#listorders) - ListOrders
* [listPayments](#listpayments) - ListPayments
* [listRefunds](#listrefunds) - ListRefunds
* [listSettlements](#listsettlements) - ListSettlements
* [retrieveOrder](#retrieveorder) - RetrieveOrder
* [retrievePayment](#retrievepayment) - RetrievePayment
* [retrieveSettlement](#retrievesettlement) - RetrieveSettlement
* [updateOrder](#updateorder) - UpdateOrder

## createRefund

Issues a refund for a previously processed payment. You must issue
a refund within 60 days of the associated payment.

You cannot issue a partial refund for a split tender payment. You must
instead issue a full or partial refund for a particular tender, by
providing the applicable tender id to the V1CreateRefund endpoint.
Issuing a full refund for a split tender payment refunds all tenders
associated with the payment.

Issuing a refund for a card payment is not reversible. For development
purposes, you can create fake cash payments in Square Point of Sale and
refund them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRefundRequest;
use \OpenAPI\OpenAPI\Models\Shared\V1CreateRefundRequest;
use \OpenAPI\OpenAPI\Models\Shared\V1Money;
use \OpenAPI\OpenAPI\Models\Operations\CreateRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRefundRequest();
    $request->v1CreateRefundRequest = new V1CreateRefundRequest();
    $request->v1CreateRefundRequest->paymentId = 'nobis';
    $request->v1CreateRefundRequest->reason = 'at';
    $request->v1CreateRefundRequest->refundedMoney = new V1Money();
    $request->v1CreateRefundRequest->refundedMoney->amount = 561121;
    $request->v1CreateRefundRequest->refundedMoney->currencyCode = 'aut';
    $request->v1CreateRefundRequest->requestIdempotenceKey = 'temporibus';
    $request->v1CreateRefundRequest->type = 'tenetur';
    $request->locationId = 'incidunt';

    $requestSecurity = new CreateRefundSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Transactions->createRefund($request, $requestSecurity);

    if ($response->v1Refund !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrders

Provides summary information for a merchant's online store orders.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListOrdersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOrdersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrdersRequest();
    $request->batchToken = 'numquam';
    $request->limit = 546950;
    $request->locationId = 'similique';
    $request->order = 'dolore';

    $requestSecurity = new ListOrdersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Transactions->listOrders($request, $requestSecurity);

    if ($response->v1Orders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPayments

Provides summary information for all payments taken for a given
Square account during a date range. Date ranges cannot exceed 1 year in
length. See Date ranges for details of inclusive and exclusive dates.

*Note**: Details for payments processed with Square Point of Sale while
in offline mode may not be transmitted to Square for up to 72 hours.
Offline payments have a `created_at` value that reflects the time the
payment was originally processed, not the time it was subsequently
transmitted to Square. Consequently, the ListPayments endpoint might
list an offline payment chronologically between online payments that
were seen in a previous request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPaymentsRequest();
    $request->batchToken = 'esse';
    $request->beginTime = 'reiciendis';
    $request->endTime = 'iste';
    $request->includePartial = false;
    $request->limit = 226196;
    $request->locationId = 'occaecati';
    $request->order = 'aut';

    $requestSecurity = new ListPaymentsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Transactions->listPayments($request, $requestSecurity);

    if ($response->v1Payments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRefunds

Provides the details for all refunds initiated by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRefundsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRefundsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRefundsRequest();
    $request->batchToken = 'impedit';
    $request->beginTime = 'minima';
    $request->endTime = 'quos';
    $request->limit = 502509;
    $request->locationId = 'quas';
    $request->order = 'voluptatem';

    $requestSecurity = new ListRefundsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Transactions->listRefunds($request, $requestSecurity);

    if ($response->v1Refunds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSettlements

Provides summary information for all deposits and withdrawals
initiated by Square to a linked bank account during a date range. Date
ranges cannot exceed one year in length.

*Note**: the ListSettlements endpoint does not provide entry
information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSettlementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSettlementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSettlementsRequest();
    $request->batchToken = 'provident';
    $request->beginTime = 'quas';
    $request->endTime = 'ipsum';
    $request->limit = 874283;
    $request->locationId = 'fuga';
    $request->order = 'facilis';
    $request->status = 'maiores';

    $requestSecurity = new ListSettlementsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Transactions->listSettlements($request, $requestSecurity);

    if ($response->v1Settlements !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveOrder

Provides comprehensive information for a single online store order, including the order's history.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveOrderRequest();
    $request->locationId = 'error';
    $request->orderId = 'recusandae';

    $requestSecurity = new RetrieveOrderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Transactions->retrieveOrder($request, $requestSecurity);

    if ($response->v1Order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrievePayment

Provides comprehensive information for a single payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrievePaymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrievePaymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrievePaymentRequest();
    $request->locationId = 'a';
    $request->paymentId = 'consectetur';

    $requestSecurity = new RetrievePaymentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Transactions->retrievePayment($request, $requestSecurity);

    if ($response->v1Payment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveSettlement

Provides comprehensive information for a single settlement.

The returned `Settlement` objects include an `entries` field that lists
the transactions that contribute to the settlement total. Most
settlement entries correspond to a payment payout, but settlement
entries are also generated for less common events, like refunds, manual
adjustments, or chargeback holds.

Square initiates its regular deposits as indicated in the
[Deposit Options with Square](https://squareup.com/help/us/en/article/3807)
help article. Details for a regular deposit are usually not available
from Connect API endpoints before 10 p.m. PST the same day.

Square does not know when an initiated settlement **completes**, only
whether it has failed. A completed settlement is typically reflected in
a bank account within 3 business days, but in exceptional cases it may
take longer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSettlementRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSettlementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveSettlementRequest();
    $request->locationId = 'sapiente';
    $request->settlementId = 'voluptatibus';

    $requestSecurity = new RetrieveSettlementSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Transactions->retrieveSettlement($request, $requestSecurity);

    if ($response->v1Settlement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrder

Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\V1UpdateOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrderRequest();
    $request->v1UpdateOrderRequest = new V1UpdateOrderRequest();
    $request->v1UpdateOrderRequest->action = 'assumenda';
    $request->v1UpdateOrderRequest->canceledNote = 'repellendus';
    $request->v1UpdateOrderRequest->completedNote = 'omnis';
    $request->v1UpdateOrderRequest->refundedNote = 'delectus';
    $request->v1UpdateOrderRequest->shippedTrackingNumber = 'odio';
    $request->locationId = 'voluptatibus';
    $request->orderId = 'aut';

    $requestSecurity = new UpdateOrderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1Transactions->updateOrder($request, $requestSecurity);

    if ($response->v1Order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
