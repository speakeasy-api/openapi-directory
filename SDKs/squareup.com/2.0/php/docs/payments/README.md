# payments

### Available Operations

* [cancelPayment](#cancelpayment) - CancelPayment
* [cancelPaymentByIdempotencyKey](#cancelpaymentbyidempotencykey) - CancelPaymentByIdempotencyKey
* [completePayment](#completepayment) - CompletePayment
* [createPayment](#createpayment) - CreatePayment
* [getPayment](#getpayment) - GetPayment
* [updatePayment](#updatepayment) - UpdatePayment
* [getV2Payments](#getv2payments) - ListPayments

## cancelPayment

Cancels (voids) a payment. You can use this endpoint to cancel a payment with 
the APPROVED `status`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelPaymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelPaymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelPaymentRequest();
    $request->paymentId = 'aliquam';

    $requestSecurity = new CancelPaymentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payments->cancelPayment($request, $requestSecurity);

    if ($response->cancelPaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelPaymentByIdempotencyKey

Cancels (voids) a payment identified by the idempotency key that is specified in the
request.

Use this method when the status of a `CreatePayment` request is unknown (for example, after you send a
`CreatePayment` request, a network error occurs and you do not get a response). In this case, you can
direct Square to cancel the payment using this endpoint. In the request, you provide the same
idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
canceling the payment, you can submit your `CreatePayment` request again.

Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint
returns successfully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CancelPaymentByIdempotencyKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelPaymentByIdempotencyKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelPaymentByIdempotencyKeyRequest();
    $request->idempotencyKey = 'quisquam';

    $requestSecurity = new CancelPaymentByIdempotencyKeySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payments->cancelPaymentByIdempotencyKey($request, $requestSecurity);

    if ($response->cancelPaymentByIdempotencyKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## completePayment

Completes (captures) a payment.
By default, payments are set to complete immediately after they are created.

You can use this endpoint to complete a payment with the APPROVED `status`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompletePaymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompletePaymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompletePaymentRequest();
    $request->paymentId = 'quas';

    $requestSecurity = new CompletePaymentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payments->completePayment($request, $requestSecurity);

    if ($response->completePaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPayment

Creates a payment using the provided source. You can use this endpoint 
to charge a card (credit/debit card or    
Square gift card) or record a payment that the seller received outside of Square 
(cash payment from a buyer or a payment that an external entity 
processed on behalf of the seller).

The endpoint creates a 
`Payment` object and returns it in the response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreatePaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\CashPaymentDetails;
use \OpenAPI\OpenAPI\Models\Shared\ExternalPaymentDetails;
use \OpenAPI\OpenAPI\Models\Operations\CreatePaymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePaymentRequest();
    $request->acceptPartialAuthorization = false;
    $request->amountMoney = new Money();
    $request->amountMoney->amount = 162450;
    $request->amountMoney->currency = 'maiores';
    $request->appFeeMoney = new Money();
    $request->appFeeMoney->amount = 81581;
    $request->appFeeMoney->currency = 'aliquid';
    $request->autocomplete = false;
    $request->billingAddress = new Address();
    $request->billingAddress->addressLine1 = 'laudantium';
    $request->billingAddress->addressLine2 = 'est';
    $request->billingAddress->addressLine3 = 'dolor';
    $request->billingAddress->administrativeDistrictLevel1 = 'aliquid';
    $request->billingAddress->administrativeDistrictLevel2 = 'consectetur';
    $request->billingAddress->administrativeDistrictLevel3 = 'cumque';
    $request->billingAddress->country = 'Madagascar';
    $request->billingAddress->firstName = 'Juliet';
    $request->billingAddress->lastName = 'Kuphal';
    $request->billingAddress->locality = 'adipisci';
    $request->billingAddress->organization = 'recusandae';
    $request->billingAddress->postalCode = '52150';
    $request->billingAddress->sublocality = 'rerum';
    $request->billingAddress->sublocality2 = 'veritatis';
    $request->billingAddress->sublocality3 = 'tenetur';
    $request->buyerEmailAddress = 'autem';
    $request->cashDetails = new CashPaymentDetails();
    $request->cashDetails->buyerSuppliedMoney = new Money();
    $request->cashDetails->buyerSuppliedMoney->amount = 694088;
    $request->cashDetails->buyerSuppliedMoney->currency = 'totam';
    $request->cashDetails->changeBackMoney = new Money();
    $request->cashDetails->changeBackMoney->amount = 781193;
    $request->cashDetails->changeBackMoney->currency = 'deserunt';
    $request->customerId = 'magni';
    $request->delayDuration = 'nihil';
    $request->externalDetails = new ExternalPaymentDetails();
    $request->externalDetails->source = 'voluptas';
    $request->externalDetails->sourceFeeMoney = new Money();
    $request->externalDetails->sourceFeeMoney->amount = 658199;
    $request->externalDetails->sourceFeeMoney->currency = 'commodi';
    $request->externalDetails->sourceId = 'alias';
    $request->externalDetails->type = 'fuga';
    $request->idempotencyKey = 'aut';
    $request->locationId = 'dolore';
    $request->note = 'maxime';
    $request->orderId = 'aliquam';
    $request->referenceId = 'iste';
    $request->shippingAddress = new Address();
    $request->shippingAddress->addressLine1 = 'ullam';
    $request->shippingAddress->addressLine2 = 'eligendi';
    $request->shippingAddress->addressLine3 = 'placeat';
    $request->shippingAddress->administrativeDistrictLevel1 = 'voluptas';
    $request->shippingAddress->administrativeDistrictLevel2 = 'occaecati';
    $request->shippingAddress->administrativeDistrictLevel3 = 'unde';
    $request->shippingAddress->country = 'Barbados';
    $request->shippingAddress->firstName = 'Janelle';
    $request->shippingAddress->lastName = 'Block';
    $request->shippingAddress->locality = 'libero';
    $request->shippingAddress->organization = 'ipsam';
    $request->shippingAddress->postalCode = '71687';
    $request->shippingAddress->sublocality = 'beatae';
    $request->shippingAddress->sublocality2 = 'cumque';
    $request->shippingAddress->sublocality3 = 'delectus';
    $request->sourceId = 'labore';
    $request->statementDescriptionIdentifier = 'expedita';
    $request->tipMoney = new Money();
    $request->tipMoney->amount = 548256;
    $request->tipMoney->currency = 'rem';
    $request->verificationToken = 'atque';

    $requestSecurity = new CreatePaymentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payments->createPayment($request, $requestSecurity);

    if ($response->createPaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayment

Retrieves details for a specific payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentRequest();
    $request->paymentId = 'officiis';

    $requestSecurity = new GetPaymentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payments->getPayment($request, $requestSecurity);

    if ($response->getPaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePayment

Updates a payment with the APPROVED status.
You can update the `amount_money` and `tip_money` using this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Payment;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountPaymentDetails;
use \OpenAPI\OpenAPI\Models\Shared\ACHDetails;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\CardPaymentDetails;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\CardPaymentTimeline;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDetails;
use \OpenAPI\OpenAPI\Models\Shared\CashPaymentDetails;
use \OpenAPI\OpenAPI\Models\Shared\ExternalPaymentDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingFee;
use \OpenAPI\OpenAPI\Models\Shared\RiskEvaluation;
use \OpenAPI\OpenAPI\Models\Shared\DigitalWalletDetails;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaymentRequest();
    $request->updatePaymentRequest = new UpdatePaymentRequest();
    $request->updatePaymentRequest->idempotencyKey = 'cum';
    $request->updatePaymentRequest->payment = new Payment();
    $request->updatePaymentRequest->payment->amountMoney = new Money();
    $request->updatePaymentRequest->payment->amountMoney->amount = 863330;
    $request->updatePaymentRequest->payment->amountMoney->currency = 'sapiente';
    $request->updatePaymentRequest->payment->appFeeMoney = new Money();
    $request->updatePaymentRequest->payment->appFeeMoney->amount = 775427;
    $request->updatePaymentRequest->payment->appFeeMoney->currency = 'incidunt';
    $request->updatePaymentRequest->payment->approvedMoney = new Money();
    $request->updatePaymentRequest->payment->approvedMoney->amount = 797293;
    $request->updatePaymentRequest->payment->approvedMoney->currency = 'minus';
    $request->updatePaymentRequest->payment->bankAccountDetails = new BankAccountPaymentDetails();
    $request->updatePaymentRequest->payment->bankAccountDetails->accountOwnershipType = 'porro';
    $request->updatePaymentRequest->payment->bankAccountDetails->achDetails = new ACHDetails();
    $request->updatePaymentRequest->payment->bankAccountDetails->achDetails->accountNumberSuffix = 'id';
    $request->updatePaymentRequest->payment->bankAccountDetails->achDetails->accountType = 'excepturi';
    $request->updatePaymentRequest->payment->bankAccountDetails->achDetails->routingNumber = 'occaecati';
    $request->updatePaymentRequest->payment->bankAccountDetails->bankName = 'libero';
    $request->updatePaymentRequest->payment->bankAccountDetails->country = 'San Marino';
    $request->updatePaymentRequest->payment->bankAccountDetails->errors = [
        new Error(),
        new Error(),
    ];
    $request->updatePaymentRequest->payment->bankAccountDetails->fingerprint = 'hic';
    $request->updatePaymentRequest->payment->bankAccountDetails->statementDescription = 'maxime';
    $request->updatePaymentRequest->payment->bankAccountDetails->transferType = 'accusantium';
    $request->updatePaymentRequest->payment->billingAddress = new Address();
    $request->updatePaymentRequest->payment->billingAddress->addressLine1 = 'soluta';
    $request->updatePaymentRequest->payment->billingAddress->addressLine2 = 'fugit';
    $request->updatePaymentRequest->payment->billingAddress->addressLine3 = 'pariatur';
    $request->updatePaymentRequest->payment->billingAddress->administrativeDistrictLevel1 = 'eligendi';
    $request->updatePaymentRequest->payment->billingAddress->administrativeDistrictLevel2 = 'recusandae';
    $request->updatePaymentRequest->payment->billingAddress->administrativeDistrictLevel3 = 'veritatis';
    $request->updatePaymentRequest->payment->billingAddress->country = 'American Samoa';
    $request->updatePaymentRequest->payment->billingAddress->firstName = 'Jorge';
    $request->updatePaymentRequest->payment->billingAddress->lastName = 'Kshlerin';
    $request->updatePaymentRequest->payment->billingAddress->locality = 'dolor';
    $request->updatePaymentRequest->payment->billingAddress->organization = 'voluptates';
    $request->updatePaymentRequest->payment->billingAddress->postalCode = '17004';
    $request->updatePaymentRequest->payment->billingAddress->sublocality = 'at';
    $request->updatePaymentRequest->payment->billingAddress->sublocality2 = 'eum';
    $request->updatePaymentRequest->payment->billingAddress->sublocality3 = 'reprehenderit';
    $request->updatePaymentRequest->payment->buyerEmailAddress = 'voluptatum';
    $request->updatePaymentRequest->payment->capabilities = [
        'nihil',
        'atque',
        'rerum',
    ];
    $request->updatePaymentRequest->payment->cardDetails = new CardPaymentDetails();
    $request->updatePaymentRequest->payment->cardDetails->applicationCryptogram = 'deserunt';
    $request->updatePaymentRequest->payment->cardDetails->applicationIdentifier = 'atque';
    $request->updatePaymentRequest->payment->cardDetails->applicationName = 'nostrum';
    $request->updatePaymentRequest->payment->cardDetails->authResultCode = 'atque';
    $request->updatePaymentRequest->payment->cardDetails->avsStatus = 'architecto';
    $request->updatePaymentRequest->payment->cardDetails->card = new Card();
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress = new Address();
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->addressLine1 = 'est';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->addressLine2 = 'enim';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->addressLine3 = 'rem';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->administrativeDistrictLevel1 = 'magni';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->administrativeDistrictLevel2 = 'quae';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->administrativeDistrictLevel3 = 'quas';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->country = 'Slovakia (Slovak Republic)';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->firstName = 'Emilie';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->lastName = 'Grant';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->locality = 'sapiente';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->organization = 'saepe';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->postalCode = '66763-9186';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->sublocality = 'cumque';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->sublocality2 = 'quis';
    $request->updatePaymentRequest->payment->cardDetails->card->billingAddress->sublocality3 = 'enim';
    $request->updatePaymentRequest->payment->cardDetails->card->bin = 'eum';
    $request->updatePaymentRequest->payment->cardDetails->card->cardBrand = 'nemo';
    $request->updatePaymentRequest->payment->cardDetails->card->cardType = 'illum';
    $request->updatePaymentRequest->payment->cardDetails->card->cardholderName = 'nesciunt';
    $request->updatePaymentRequest->payment->cardDetails->card->customerId = 'sit';
    $request->updatePaymentRequest->payment->cardDetails->card->enabled = false;
    $request->updatePaymentRequest->payment->cardDetails->card->expMonth = 487148;
    $request->updatePaymentRequest->payment->cardDetails->card->expYear = 794306;
    $request->updatePaymentRequest->payment->cardDetails->card->fingerprint = 'asperiores';
    $request->updatePaymentRequest->payment->cardDetails->card->id = 'ee81206e-2813-4fa4-a41c-480d3f2132af';
    $request->updatePaymentRequest->payment->cardDetails->card->last4 = 'eaque';
    $request->updatePaymentRequest->payment->cardDetails->card->prepaidType = 'dolorem';
    $request->updatePaymentRequest->payment->cardDetails->card->referenceId = 'architecto';
    $request->updatePaymentRequest->payment->cardDetails->card->version = 44929;
    $request->updatePaymentRequest->payment->cardDetails->cardPaymentTimeline = new CardPaymentTimeline();
    $request->updatePaymentRequest->payment->cardDetails->cardPaymentTimeline->authorizedAt = 'aspernatur';
    $request->updatePaymentRequest->payment->cardDetails->cardPaymentTimeline->capturedAt = 'nulla';
    $request->updatePaymentRequest->payment->cardDetails->cardPaymentTimeline->voidedAt = 'enim';
    $request->updatePaymentRequest->payment->cardDetails->cvvStatus = 'illo';
    $request->updatePaymentRequest->payment->cardDetails->deviceDetails = new DeviceDetails();
    $request->updatePaymentRequest->payment->cardDetails->deviceDetails->deviceId = 'magnam';
    $request->updatePaymentRequest->payment->cardDetails->deviceDetails->deviceInstallationId = 'delectus';
    $request->updatePaymentRequest->payment->cardDetails->deviceDetails->deviceName = 'numquam';
    $request->updatePaymentRequest->payment->cardDetails->entryMethod = 'optio';
    $request->updatePaymentRequest->payment->cardDetails->errors = [
        new Error(),
        new Error(),
        new Error(),
        new Error(),
    ];
    $request->updatePaymentRequest->payment->cardDetails->refundRequiresCardPresence = false;
    $request->updatePaymentRequest->payment->cardDetails->statementDescription = 'ex';
    $request->updatePaymentRequest->payment->cardDetails->status = 'repellat';
    $request->updatePaymentRequest->payment->cardDetails->verificationMethod = 'quae';
    $request->updatePaymentRequest->payment->cardDetails->verificationResults = 'deleniti';
    $request->updatePaymentRequest->payment->cashDetails = new CashPaymentDetails();
    $request->updatePaymentRequest->payment->cashDetails->buyerSuppliedMoney = new Money();
    $request->updatePaymentRequest->payment->cashDetails->buyerSuppliedMoney->amount = 711615;
    $request->updatePaymentRequest->payment->cashDetails->buyerSuppliedMoney->currency = 'hic';
    $request->updatePaymentRequest->payment->cashDetails->changeBackMoney = new Money();
    $request->updatePaymentRequest->payment->cashDetails->changeBackMoney->amount = 569834;
    $request->updatePaymentRequest->payment->cashDetails->changeBackMoney->currency = 'aliquid';
    $request->updatePaymentRequest->payment->createdAt = 'sed';
    $request->updatePaymentRequest->payment->customerId = 'beatae';
    $request->updatePaymentRequest->payment->delayAction = 'similique';
    $request->updatePaymentRequest->payment->delayDuration = 'ea';
    $request->updatePaymentRequest->payment->delayedUntil = 'animi';
    $request->updatePaymentRequest->payment->employeeId = 'dolore';
    $request->updatePaymentRequest->payment->externalDetails = new ExternalPaymentDetails();
    $request->updatePaymentRequest->payment->externalDetails->source = 'tenetur';
    $request->updatePaymentRequest->payment->externalDetails->sourceFeeMoney = new Money();
    $request->updatePaymentRequest->payment->externalDetails->sourceFeeMoney->amount = 493407;
    $request->updatePaymentRequest->payment->externalDetails->sourceFeeMoney->currency = 'esse';
    $request->updatePaymentRequest->payment->externalDetails->sourceId = 'animi';
    $request->updatePaymentRequest->payment->externalDetails->type = 'laudantium';
    $request->updatePaymentRequest->payment->id = '7ee3e4be-752c-465b-b441-8e3bb91c8d97';
    $request->updatePaymentRequest->payment->locationId = 'enim';
    $request->updatePaymentRequest->payment->note = 'accusamus';
    $request->updatePaymentRequest->payment->orderId = 'aperiam';
    $request->updatePaymentRequest->payment->processingFee = [
        new ProcessingFee(),
        new ProcessingFee(),
        new ProcessingFee(),
        new ProcessingFee(),
    ];
    $request->updatePaymentRequest->payment->receiptNumber = 'laudantium';
    $request->updatePaymentRequest->payment->receiptUrl = 'tempora';
    $request->updatePaymentRequest->payment->referenceId = 'quae';
    $request->updatePaymentRequest->payment->refundIds = [
        'illum',
        'rem',
        'tenetur',
    ];
    $request->updatePaymentRequest->payment->refundedMoney = new Money();
    $request->updatePaymentRequest->payment->refundedMoney->amount = 537946;
    $request->updatePaymentRequest->payment->refundedMoney->currency = 'modi';
    $request->updatePaymentRequest->payment->riskEvaluation = new RiskEvaluation();
    $request->updatePaymentRequest->payment->riskEvaluation->createdAt = 'earum';
    $request->updatePaymentRequest->payment->riskEvaluation->riskLevel = 'architecto';
    $request->updatePaymentRequest->payment->shippingAddress = new Address();
    $request->updatePaymentRequest->payment->shippingAddress->addressLine1 = 'aliquam';
    $request->updatePaymentRequest->payment->shippingAddress->addressLine2 = 'labore';
    $request->updatePaymentRequest->payment->shippingAddress->addressLine3 = 'maiores';
    $request->updatePaymentRequest->payment->shippingAddress->administrativeDistrictLevel1 = 'sequi';
    $request->updatePaymentRequest->payment->shippingAddress->administrativeDistrictLevel2 = 'saepe';
    $request->updatePaymentRequest->payment->shippingAddress->administrativeDistrictLevel3 = 'consequatur';
    $request->updatePaymentRequest->payment->shippingAddress->country = 'Kenya';
    $request->updatePaymentRequest->payment->shippingAddress->firstName = 'Silas';
    $request->updatePaymentRequest->payment->shippingAddress->lastName = 'Schumm';
    $request->updatePaymentRequest->payment->shippingAddress->locality = 'quisquam';
    $request->updatePaymentRequest->payment->shippingAddress->organization = 'cumque';
    $request->updatePaymentRequest->payment->shippingAddress->postalCode = '66391';
    $request->updatePaymentRequest->payment->shippingAddress->sublocality = 'porro';
    $request->updatePaymentRequest->payment->shippingAddress->sublocality2 = 'laborum';
    $request->updatePaymentRequest->payment->shippingAddress->sublocality3 = 'nobis';
    $request->updatePaymentRequest->payment->sourceType = 'quibusdam';
    $request->updatePaymentRequest->payment->statementDescriptionIdentifier = 'omnis';
    $request->updatePaymentRequest->payment->status = 'aut';
    $request->updatePaymentRequest->payment->tipMoney = new Money();
    $request->updatePaymentRequest->payment->tipMoney->amount = 369941;
    $request->updatePaymentRequest->payment->tipMoney->currency = 'officia';
    $request->updatePaymentRequest->payment->totalMoney = new Money();
    $request->updatePaymentRequest->payment->totalMoney->amount = 584640;
    $request->updatePaymentRequest->payment->totalMoney->currency = 'reprehenderit';
    $request->updatePaymentRequest->payment->updatedAt = 'quia';
    $request->updatePaymentRequest->payment->versionToken = 'necessitatibus';
    $request->updatePaymentRequest->payment->walletDetails = new DigitalWalletDetails();
    $request->updatePaymentRequest->payment->walletDetails->status = 'accusantium';
    $request->paymentId = 'ad';

    $requestSecurity = new UpdatePaymentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payments->updatePayment($request, $requestSecurity);

    if ($response->updatePaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2Payments

Retrieves a list of payments taken by the account making the request.

Results are eventually consistent, and new payments or changes to payments might take several
seconds to appear.

The maximum results per page is 100.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PaymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PaymentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2PaymentsRequest();
    $request->beginTime = 'nisi';
    $request->cardBrand = 'molestiae';
    $request->cursor = 'quia';
    $request->endTime = 'laudantium';
    $request->last4 = 'sed';
    $request->limit = 140439;
    $request->locationId = 'iusto';
    $request->sortOrder = 'expedita';
    $request->total = 176935;

    $requestSecurity = new GetV2PaymentsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payments->getV2Payments($request, $requestSecurity);

    if ($response->listPaymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
