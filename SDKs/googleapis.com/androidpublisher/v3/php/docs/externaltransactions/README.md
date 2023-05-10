# externaltransactions

### Available Operations

* [androidpublisherExternaltransactionsCreateexternaltransaction](#androidpublisherexternaltransactionscreateexternaltransaction) - Creates a new external transaction.
* [androidpublisherExternaltransactionsGetexternaltransaction](#androidpublisherexternaltransactionsgetexternaltransaction) - Gets an existing external transaction.
* [androidpublisherExternaltransactionsRefundexternaltransaction](#androidpublisherexternaltransactionsrefundexternaltransaction) - Refunds or partially refunds an existing external transaction.

## androidpublisherExternaltransactionsCreateexternaltransaction

Creates a new external transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherExternaltransactionsCreateexternaltransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExternalTransactionInput;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\OneTimeExternalTransaction;
use \OpenAPI\OpenAPI\Models\Shared\RecurringExternalTransaction;
use \OpenAPI\OpenAPI\Models\Shared\ExternalSubscription;
use \OpenAPI\OpenAPI\Models\Shared\ExternalSubscriptionSubscriptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExternalTransactionAddress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherExternaltransactionsCreateexternaltransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherExternaltransactionsCreateexternaltransactionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->externalTransactionInput = new ExternalTransactionInput();
    $request->externalTransactionInput->currentPreTaxAmount = new Price();
    $request->externalTransactionInput->currentPreTaxAmount->currency = 'maiores';
    $request->externalTransactionInput->currentPreTaxAmount->priceMicros = 'doloribus';
    $request->externalTransactionInput->currentTaxAmount = new Price();
    $request->externalTransactionInput->currentTaxAmount->currency = 'iusto';
    $request->externalTransactionInput->currentTaxAmount->priceMicros = 'eligendi';
    $request->externalTransactionInput->oneTimeTransaction = new OneTimeExternalTransaction();
    $request->externalTransactionInput->oneTimeTransaction->externalTransactionToken = 'ducimus';
    $request->externalTransactionInput->originalPreTaxAmount = new Price();
    $request->externalTransactionInput->originalPreTaxAmount->currency = 'alias';
    $request->externalTransactionInput->originalPreTaxAmount->priceMicros = 'officia';
    $request->externalTransactionInput->originalTaxAmount = new Price();
    $request->externalTransactionInput->originalTaxAmount->currency = 'tempora';
    $request->externalTransactionInput->originalTaxAmount->priceMicros = 'ipsam';
    $request->externalTransactionInput->recurringTransaction = new RecurringExternalTransaction();
    $request->externalTransactionInput->recurringTransaction->externalSubscription = new ExternalSubscription();
    $request->externalTransactionInput->recurringTransaction->externalSubscription->subscriptionType = ExternalSubscriptionSubscriptionTypeEnum::RECURRING;
    $request->externalTransactionInput->recurringTransaction->externalTransactionToken = 'aspernatur';
    $request->externalTransactionInput->recurringTransaction->initialExternalTransactionId = 'vel';
    $request->externalTransactionInput->testPurchase = [
        'magnam' => 'ratione',
        'ex' => 'laudantium',
        'dicta' => 'dolor',
        'maiores' => 'quasi',
    ];
    $request->externalTransactionInput->transactionTime = 'ex';
    $request->externalTransactionInput->userTaxAddress = new ExternalTransactionAddress();
    $request->externalTransactionInput->userTaxAddress->regionCode = 'nulla';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->externalTransactionId = 'sapiente';
    $request->fields = 'quisquam';
    $request->key = 'saepe';
    $request->oauthToken = 'ea';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new AndroidpublisherExternaltransactionsCreateexternaltransactionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->externaltransactions->androidpublisherExternaltransactionsCreateexternaltransaction($request, $requestSecurity);

    if ($response->externalTransaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherExternaltransactionsGetexternaltransaction

Gets an existing external transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherExternaltransactionsGetexternaltransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherExternaltransactionsGetexternaltransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherExternaltransactionsGetexternaltransactionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->fields = 'consectetur';
    $request->key = 'recusandae';
    $request->name = 'Cathy Becker';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new AndroidpublisherExternaltransactionsGetexternaltransactionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->externaltransactions->androidpublisherExternaltransactionsGetexternaltransaction($request, $requestSecurity);

    if ($response->externalTransaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherExternaltransactionsRefundexternaltransaction

Refunds or partially refunds an existing external transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherExternaltransactionsRefundexternaltransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RefundExternalTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartialRefund;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherExternaltransactionsRefundexternaltransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherExternaltransactionsRefundexternaltransactionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->refundExternalTransactionRequest = new RefundExternalTransactionRequest();
    $request->refundExternalTransactionRequest->fullRefund = [
        'accusamus' => 'inventore',
    ];
    $request->refundExternalTransactionRequest->partialRefund = new PartialRefund();
    $request->refundExternalTransactionRequest->partialRefund->refundId = 'non';
    $request->refundExternalTransactionRequest->partialRefund->refundPreTaxAmount = new Price();
    $request->refundExternalTransactionRequest->partialRefund->refundPreTaxAmount->currency = 'et';
    $request->refundExternalTransactionRequest->partialRefund->refundPreTaxAmount->priceMicros = 'dolorum';
    $request->refundExternalTransactionRequest->refundTime = 'laborum';
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'autem';
    $request->key = 'nobis';
    $request->name = 'Mack Stoltenberg';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new AndroidpublisherExternaltransactionsRefundexternaltransactionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->externaltransactions->androidpublisherExternaltransactionsRefundexternaltransaction($request, $requestSecurity);

    if ($response->externalTransaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
