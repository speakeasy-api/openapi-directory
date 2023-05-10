# giftCardActivities

### Available Operations

* [createGiftCardActivity](#creategiftcardactivity) - CreateGiftCardActivity
* [listGiftCardActivities](#listgiftcardactivities) - ListGiftCardActivities

## createGiftCardActivity

Creates a gift card activity. For more information, see 
[GiftCardActivity](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#giftcardactivity) and 
[Using activated gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#using-activated-gift-cards).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateGiftCardActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivity;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityActivate;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityAdjustDecrement;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityAdjustIncrement;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityBlock;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityClearBalance;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityDeactivate;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityImport;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityImportReversal;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityLoad;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityRedeem;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityRefund;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityUnblock;
use \OpenAPI\OpenAPI\Models\Shared\GiftCardActivityUnlinkedActivityRefund;
use \OpenAPI\OpenAPI\Models\Operations\CreateGiftCardActivitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGiftCardActivityRequest();
    $request->giftCardActivity = new GiftCardActivity();
    $request->giftCardActivity->activateActivityDetails = new GiftCardActivityActivate();
    $request->giftCardActivity->activateActivityDetails->amountMoney = new Money();
    $request->giftCardActivity->activateActivityDetails->amountMoney->amount = 333507;
    $request->giftCardActivity->activateActivityDetails->amountMoney->currency = 'minima';
    $request->giftCardActivity->activateActivityDetails->buyerPaymentInstrumentIds = [
        'reiciendis',
        'nulla',
        'magni',
        'aperiam',
    ];
    $request->giftCardActivity->activateActivityDetails->lineItemUid = 'saepe';
    $request->giftCardActivity->activateActivityDetails->orderId = 'numquam';
    $request->giftCardActivity->activateActivityDetails->referenceId = 'veniam';
    $request->giftCardActivity->adjustDecrementActivityDetails = new GiftCardActivityAdjustDecrement();
    $request->giftCardActivity->adjustDecrementActivityDetails->amountMoney = new Money();
    $request->giftCardActivity->adjustDecrementActivityDetails->amountMoney->amount = 446135;
    $request->giftCardActivity->adjustDecrementActivityDetails->amountMoney->currency = 'officiis';
    $request->giftCardActivity->adjustDecrementActivityDetails->reason = 'beatae';
    $request->giftCardActivity->adjustIncrementActivityDetails = new GiftCardActivityAdjustIncrement();
    $request->giftCardActivity->adjustIncrementActivityDetails->amountMoney = new Money();
    $request->giftCardActivity->adjustIncrementActivityDetails->amountMoney->amount = 512452;
    $request->giftCardActivity->adjustIncrementActivityDetails->amountMoney->currency = 'exercitationem';
    $request->giftCardActivity->adjustIncrementActivityDetails->reason = 'praesentium';
    $request->giftCardActivity->blockActivityDetails = new GiftCardActivityBlock();
    $request->giftCardActivity->blockActivityDetails->reason = 'cum';
    $request->giftCardActivity->clearBalanceActivityDetails = new GiftCardActivityClearBalance();
    $request->giftCardActivity->clearBalanceActivityDetails->reason = 'laboriosam';
    $request->giftCardActivity->createdAt = 'dolorum';
    $request->giftCardActivity->deactivateActivityDetails = new GiftCardActivityDeactivate();
    $request->giftCardActivity->deactivateActivityDetails->reason = 'voluptatum';
    $request->giftCardActivity->giftCardBalanceMoney = new Money();
    $request->giftCardActivity->giftCardBalanceMoney->amount = 622385;
    $request->giftCardActivity->giftCardBalanceMoney->currency = 'hic';
    $request->giftCardActivity->giftCardGan = 'expedita';
    $request->giftCardActivity->giftCardId = 'debitis';
    $request->giftCardActivity->id = '3a5aa8e4-824d-40ab-8075-088e51862065';
    $request->giftCardActivity->importActivityDetails = new GiftCardActivityImport();
    $request->giftCardActivity->importActivityDetails->amountMoney = new Money();
    $request->giftCardActivity->importActivityDetails->amountMoney->amount = 906172;
    $request->giftCardActivity->importActivityDetails->amountMoney->currency = 'error';
    $request->giftCardActivity->importReversalActivityDetails = new GiftCardActivityImportReversal();
    $request->giftCardActivity->importReversalActivityDetails->amountMoney = new Money();
    $request->giftCardActivity->importReversalActivityDetails->amountMoney->amount = 8511;
    $request->giftCardActivity->importReversalActivityDetails->amountMoney->currency = 'incidunt';
    $request->giftCardActivity->loadActivityDetails = new GiftCardActivityLoad();
    $request->giftCardActivity->loadActivityDetails->amountMoney = new Money();
    $request->giftCardActivity->loadActivityDetails->amountMoney->amount = 968865;
    $request->giftCardActivity->loadActivityDetails->amountMoney->currency = 'dolorem';
    $request->giftCardActivity->loadActivityDetails->buyerPaymentInstrumentIds = [
        'dicta',
        'architecto',
        'occaecati',
    ];
    $request->giftCardActivity->loadActivityDetails->lineItemUid = 'labore';
    $request->giftCardActivity->loadActivityDetails->orderId = 'quidem';
    $request->giftCardActivity->loadActivityDetails->referenceId = 'atque';
    $request->giftCardActivity->locationId = 'laborum';
    $request->giftCardActivity->redeemActivityDetails = new GiftCardActivityRedeem();
    $request->giftCardActivity->redeemActivityDetails->amountMoney = new Money();
    $request->giftCardActivity->redeemActivityDetails->amountMoney->amount = 724148;
    $request->giftCardActivity->redeemActivityDetails->amountMoney->currency = 'tenetur';
    $request->giftCardActivity->redeemActivityDetails->paymentId = 'laboriosam';
    $request->giftCardActivity->redeemActivityDetails->referenceId = 'alias';
    $request->giftCardActivity->refundActivityDetails = new GiftCardActivityRefund();
    $request->giftCardActivity->refundActivityDetails->amountMoney = new Money();
    $request->giftCardActivity->refundActivityDetails->amountMoney->amount = 227084;
    $request->giftCardActivity->refundActivityDetails->amountMoney->currency = 'deserunt';
    $request->giftCardActivity->refundActivityDetails->paymentId = 'voluptate';
    $request->giftCardActivity->refundActivityDetails->redeemActivityId = 'unde';
    $request->giftCardActivity->refundActivityDetails->referenceId = 'reiciendis';
    $request->giftCardActivity->type = 'provident';
    $request->giftCardActivity->unblockActivityDetails = new GiftCardActivityUnblock();
    $request->giftCardActivity->unblockActivityDetails->reason = 'repellendus';
    $request->giftCardActivity->unlinkedActivityRefundActivityDetails = new GiftCardActivityUnlinkedActivityRefund();
    $request->giftCardActivity->unlinkedActivityRefundActivityDetails->amountMoney = new Money();
    $request->giftCardActivity->unlinkedActivityRefundActivityDetails->amountMoney->amount = 962771;
    $request->giftCardActivity->unlinkedActivityRefundActivityDetails->amountMoney->currency = 'voluptates';
    $request->giftCardActivity->unlinkedActivityRefundActivityDetails->paymentId = 'perferendis';
    $request->giftCardActivity->unlinkedActivityRefundActivityDetails->referenceId = 'est';
    $request->idempotencyKey = 'quidem';

    $requestSecurity = new CreateGiftCardActivitySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->giftCardActivities->createGiftCardActivity($request, $requestSecurity);

    if ($response->createGiftCardActivityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGiftCardActivities

Lists gift card activities. By default, you get gift card activities for all
gift cards in the seller's account. You can optionally specify query parameters to
filter the list. For example, you can get a list of gift card activities for a gift card,
for all gift cards in a specific region, or for activities within a time window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListGiftCardActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGiftCardActivitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGiftCardActivitiesRequest();
    $request->beginTime = 'reprehenderit';
    $request->cursor = 'facere';
    $request->endTime = 'fuga';
    $request->giftCardId = 'praesentium';
    $request->limit = 648598;
    $request->locationId = 'veniam';
    $request->sortOrder = 'voluptatem';
    $request->type = 'quisquam';

    $requestSecurity = new ListGiftCardActivitiesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->giftCardActivities->listGiftCardActivities($request, $requestSecurity);

    if ($response->listGiftCardActivitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
