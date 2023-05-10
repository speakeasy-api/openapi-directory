# transactions

### Available Operations

* [captureTransaction](#capturetransaction) - CaptureTransaction
* [charge](#charge) - Charge
* [listTransactions](#listtransactions) - ListTransactions
* [retrieveTransaction](#retrievetransaction) - RetrieveTransaction
* [voidTransaction](#voidtransaction) - VoidTransaction
* [getV2LocationsLocationIdRefunds](#getv2locationslocationidrefunds) - ListRefunds
* [postV2LocationsLocationIdTransactionsTransactionIdRefund](#postv2locationslocationidtransactionstransactionidrefund) - CreateRefund

## captureTransaction

Captures a transaction that was created with the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge)
endpoint with a `delay_capture` value of `true`.


See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CaptureTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CaptureTransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CaptureTransactionRequest();
    $request->locationId = 'optio';
    $request->transactionId = 'illum';

    $requestSecurity = new CaptureTransactionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->transactions->captureTransaction($request, $requestSecurity);

    if ($response->captureTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## charge

Charges a card represented by a card nonce or a customer's card on file.

Your request to this endpoint must include _either_:

- A value for the `card_nonce` parameter (to charge a card payment token generated
with the Web Payments SDK)
- Values for the `customer_card_id` and `customer_id` parameters (to charge
a customer's card on file)

In order for an eCommerce payment to potentially qualify for
[Square chargeback protection](https://squareup.com/help/article/5394), you
_must_ provide values for the following parameters in your request:

- `buyer_email_address`
- At least one of `billing_address` or `shipping_address`

When this response is returned, the amount of Square's processing fee might not yet be
calculated. To obtain the processing fee, wait about ten seconds and call
[RetrieveTransaction](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/retrieve-transaction). See the `processing_fee_money`
field of each [Tender included](https://developer.squareup.com/reference/square_2021-08-18/objects/Tender) in the transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChargeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChargeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Operations\ChargeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChargeRequest();
    $request->chargeRequest = new ChargeRequest();
    $request->chargeRequest->additionalRecipients = [
        new AdditionalRecipient(),
        new AdditionalRecipient(),
        new AdditionalRecipient(),
        new AdditionalRecipient(),
    ];
    $request->chargeRequest->amountMoney = new Money();
    $request->chargeRequest->amountMoney->amount = 945320;
    $request->chargeRequest->amountMoney->currency = 'molestias';
    $request->chargeRequest->billingAddress = new Address();
    $request->chargeRequest->billingAddress->addressLine1 = 'ipsam';
    $request->chargeRequest->billingAddress->addressLine2 = 'esse';
    $request->chargeRequest->billingAddress->addressLine3 = 'laborum';
    $request->chargeRequest->billingAddress->administrativeDistrictLevel1 = 'perspiciatis';
    $request->chargeRequest->billingAddress->administrativeDistrictLevel2 = 'voluptates';
    $request->chargeRequest->billingAddress->administrativeDistrictLevel3 = 'eum';
    $request->chargeRequest->billingAddress->country = 'Bermuda';
    $request->chargeRequest->billingAddress->firstName = 'Kaylee';
    $request->chargeRequest->billingAddress->lastName = 'Kuhic';
    $request->chargeRequest->billingAddress->locality = 'commodi';
    $request->chargeRequest->billingAddress->organization = 'porro';
    $request->chargeRequest->billingAddress->postalCode = '66108';
    $request->chargeRequest->billingAddress->sublocality = 'magni';
    $request->chargeRequest->billingAddress->sublocality2 = 'natus';
    $request->chargeRequest->billingAddress->sublocality3 = 'illum';
    $request->chargeRequest->buyerEmailAddress = 'a';
    $request->chargeRequest->cardNonce = 'impedit';
    $request->chargeRequest->customerCardId = 'unde';
    $request->chargeRequest->customerId = 'ut';
    $request->chargeRequest->delayCapture = false;
    $request->chargeRequest->idempotencyKey = 'facere';
    $request->chargeRequest->note = 'voluptas';
    $request->chargeRequest->orderId = 'doloribus';
    $request->chargeRequest->referenceId = 'recusandae';
    $request->chargeRequest->shippingAddress = new Address();
    $request->chargeRequest->shippingAddress->addressLine1 = 'quisquam';
    $request->chargeRequest->shippingAddress->addressLine2 = 'facere';
    $request->chargeRequest->shippingAddress->addressLine3 = 'dignissimos';
    $request->chargeRequest->shippingAddress->administrativeDistrictLevel1 = 'iste';
    $request->chargeRequest->shippingAddress->administrativeDistrictLevel2 = 'provident';
    $request->chargeRequest->shippingAddress->administrativeDistrictLevel3 = 'dolor';
    $request->chargeRequest->shippingAddress->country = 'Mexico';
    $request->chargeRequest->shippingAddress->firstName = 'Alva';
    $request->chargeRequest->shippingAddress->lastName = 'Beatty';
    $request->chargeRequest->shippingAddress->locality = 'eum';
    $request->chargeRequest->shippingAddress->organization = 'laboriosam';
    $request->chargeRequest->shippingAddress->postalCode = '48180-0023';
    $request->chargeRequest->shippingAddress->sublocality = 'quis';
    $request->chargeRequest->shippingAddress->sublocality2 = 'velit';
    $request->chargeRequest->shippingAddress->sublocality3 = 'ratione';
    $request->chargeRequest->verificationToken = 'quas';
    $request->locationId = 'maxime';

    $requestSecurity = new ChargeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->transactions->charge($request, $requestSecurity);

    if ($response->chargeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTransactions

Lists transactions for a particular location.

Transactions include payment information from sales and exchanges and refund
information from returns and exchanges.

Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTransactionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTransactionsRequest();
    $request->beginTime = 'recusandae';
    $request->cursor = 'cumque';
    $request->endTime = 'doloremque';
    $request->locationId = 'totam';
    $request->sortOrder = 'iure';

    $requestSecurity = new ListTransactionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->transactions->listTransactions($request, $requestSecurity);

    if ($response->listTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveTransaction

Retrieves details for a single transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveTransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveTransactionRequest();
    $request->locationId = 'maiores';
    $request->transactionId = 'est';

    $requestSecurity = new RetrieveTransactionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->transactions->retrieveTransaction($request, $requestSecurity);

    if ($response->retrieveTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## voidTransaction

Cancels a transaction that was created with the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge)
endpoint with a `delay_capture` value of `true`.


See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VoidTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\VoidTransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VoidTransactionRequest();
    $request->locationId = 'fugit';
    $request->transactionId = 'veritatis';

    $requestSecurity = new VoidTransactionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->transactions->voidTransaction($request, $requestSecurity);

    if ($response->voidTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2LocationsLocationIdRefunds

Lists refunds for one of a business's locations.

In addition to full or partial tender refunds processed through Square APIs,
refunds may result from itemized returns or exchanges through Square's
Point of Sale applications.

Refunds with a `status` of `PENDING` are not currently included in this
endpoint's response.

Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2LocationsLocationIdRefundsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV2LocationsLocationIdRefundsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2LocationsLocationIdRefundsRequest();
    $request->beginTime = 'necessitatibus';
    $request->cursor = 'iste';
    $request->endTime = 'dicta';
    $request->locationId = 'ipsam';
    $request->sortOrder = 'consequuntur';

    $requestSecurity = new GetV2LocationsLocationIdRefundsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->transactions->getV2LocationsLocationIdRefunds($request, $requestSecurity);

    if ($response->listRefundsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2LocationsLocationIdTransactionsTransactionIdRefund

Initiates a refund for a previously charged tender.

You must issue a refund within 120 days of the associated payment. See
[this article](https://squareup.com/help/us/en/article/5060) for more information
on refund behavior.

NOTE: Card-present transactions with Interac credit cards **cannot be
refunded using the Connect API**. Interac transactions must refunded
in-person (e.g., dipping the card using POS app).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2LocationsLocationIdTransactionsTransactionIdRefundRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRefundRequest;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Operations\PostV2LocationsLocationIdTransactionsTransactionIdRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2LocationsLocationIdTransactionsTransactionIdRefundRequest();
    $request->createRefundRequest = new CreateRefundRequest();
    $request->createRefundRequest->amountMoney = new Money();
    $request->createRefundRequest->amountMoney->amount = 765271;
    $request->createRefundRequest->amountMoney->currency = 'quidem';
    $request->createRefundRequest->idempotencyKey = 'non';
    $request->createRefundRequest->reason = 'beatae';
    $request->createRefundRequest->tenderId = 'sunt';
    $request->locationId = 'molestias';
    $request->transactionId = 'beatae';

    $requestSecurity = new PostV2LocationsLocationIdTransactionsTransactionIdRefundSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->transactions->postV2LocationsLocationIdTransactionsTransactionIdRefund($request, $requestSecurity);

    if ($response->createRefundResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
