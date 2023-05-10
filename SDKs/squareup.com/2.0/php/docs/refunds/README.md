# refunds

### Available Operations

* [getPaymentRefund](#getpaymentrefund) - GetPaymentRefund
* [listPaymentRefunds](#listpaymentrefunds) - ListPaymentRefunds
* [refundPayment](#refundpayment) - RefundPayment

## getPaymentRefund

Retrieves a specific refund using the `refund_id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentRefundRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentRefundRequest();
    $request->refundId = 'repellendus';

    $requestSecurity = new GetPaymentRefundSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->refunds->getPaymentRefund($request, $requestSecurity);

    if ($response->getPaymentRefundResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPaymentRefunds

Retrieves a list of refunds for the account making the request.

Results are eventually consistent, and new refunds or changes to refunds might take several
seconds to appear.

The maximum results per page is 100.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentRefundsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentRefundsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPaymentRefundsRequest();
    $request->beginTime = 'nesciunt';
    $request->cursor = 'ipsa';
    $request->endTime = 'sint';
    $request->limit = 291389;
    $request->locationId = 'esse';
    $request->sortOrder = 'accusantium';
    $request->sourceType = 'distinctio';
    $request->status = 'sapiente';

    $requestSecurity = new ListPaymentRefundsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->refunds->listPaymentRefunds($request, $requestSecurity);

    if ($response->listPaymentRefundsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refundPayment

Refunds a payment. You can refund the entire payment amount or a
portion of it. You can use this endpoint to refund a card payment or record a 
refund of a cash or external payment. For more information, see
[Refund Payment](https://developer.squareup.com/docs/payments-api/refund-payments).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RefundPaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Operations\RefundPaymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefundPaymentRequest();
    $request->amountMoney = new Money();
    $request->amountMoney->amount = 463050;
    $request->amountMoney->currency = 'est';
    $request->appFeeMoney = new Money();
    $request->appFeeMoney->amount = 307306;
    $request->appFeeMoney->currency = 'delectus';
    $request->idempotencyKey = 'culpa';
    $request->paymentId = 'voluptatum';
    $request->reason = 'iusto';

    $requestSecurity = new RefundPaymentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->refunds->refundPayment($request, $requestSecurity);

    if ($response->refundPaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
