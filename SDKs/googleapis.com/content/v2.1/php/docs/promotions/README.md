# promotions

### Available Operations

* [contentPromotionsCreate](#contentpromotionscreate) - Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
* [contentPromotionsGet](#contentpromotionsget) - Retrieves a promotion from your Merchant Center account.

## contentPromotionsCreate

Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPromotionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PromotionInput;
use \OpenAPI\OpenAPI\Models\Shared\PromotionCouponValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PriceAmount;
use \OpenAPI\OpenAPI\Models\Shared\PromotionOfferTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PromotionProductApplicabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriod;
use \OpenAPI\OpenAPI\Models\Shared\PromotionPromotionStatus;
use \OpenAPI\OpenAPI\Models\Shared\PromotionPromotionStatusDestinationStatus;
use \OpenAPI\OpenAPI\Models\Shared\PromotionPromotionStatusDestinationStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PromotionPromotionStatusPromotionIssue;
use \OpenAPI\OpenAPI\Models\Shared\PromotionRedemptionChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\PromotionStoreApplicabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPromotionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPromotionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->promotionInput = new PromotionInput();
    $request->promotionInput->brand = [
        'animi',
        'maiores',
        'itaque',
        'nulla',
    ];
    $request->promotionInput->brandExclusion = [
        'corporis',
        'velit',
        'officiis',
    ];
    $request->promotionInput->contentLanguage = 'enim';
    $request->promotionInput->couponValueType = PromotionCouponValueTypeEnum::FREE_GIFT_WITH_VALUE;
    $request->promotionInput->freeGiftDescription = 'saepe';
    $request->promotionInput->freeGiftItemId = 'eum';
    $request->promotionInput->freeGiftValue = new PriceAmount();
    $request->promotionInput->freeGiftValue->currency = 'repudiandae';
    $request->promotionInput->freeGiftValue->value = 'accusantium';
    $request->promotionInput->genericRedemptionCode = 'officia';
    $request->promotionInput->getThisQuantityDiscounted = 770128;
    $request->promotionInput->itemGroupId = [
        'blanditiis',
    ];
    $request->promotionInput->itemGroupIdExclusion = [
        'quisquam',
        'eos',
    ];
    $request->promotionInput->itemId = [
        'natus',
        'minus',
        'quia',
    ];
    $request->promotionInput->itemIdExclusion = [
        'reprehenderit',
        'quod',
    ];
    $request->promotionInput->limitQuantity = 552440;
    $request->promotionInput->limitValue = new PriceAmount();
    $request->promotionInput->limitValue->currency = 'corrupti';
    $request->promotionInput->limitValue->value = 'amet';
    $request->promotionInput->longTitle = 'molestiae';
    $request->promotionInput->minimumPurchaseAmount = new PriceAmount();
    $request->promotionInput->minimumPurchaseAmount->currency = 'amet';
    $request->promotionInput->minimumPurchaseAmount->value = 'laborum';
    $request->promotionInput->minimumPurchaseQuantity = 266946;
    $request->promotionInput->moneyBudget = new PriceAmount();
    $request->promotionInput->moneyBudget->currency = 'perferendis';
    $request->promotionInput->moneyBudget->value = 'necessitatibus';
    $request->promotionInput->moneyOffAmount = new PriceAmount();
    $request->promotionInput->moneyOffAmount->currency = 'architecto';
    $request->promotionInput->moneyOffAmount->value = 'molestias';
    $request->promotionInput->offerType = PromotionOfferTypeEnum::OFFER_TYPE_UNSPECIFIED;
    $request->promotionInput->orderLimit = 125811;
    $request->promotionInput->percentOff = 982991;
    $request->promotionInput->productApplicability = PromotionProductApplicabilityEnum::PRODUCT_APPLICABILITY_UNSPECIFIED;
    $request->promotionInput->productType = [
        'earum',
    ];
    $request->promotionInput->productTypeExclusion = [
        'ipsam',
        'eaque',
    ];
    $request->promotionInput->promotionDestinationIds = [
        'veniam',
        'nihil',
    ];
    $request->promotionInput->promotionDisplayDates = 'ad';
    $request->promotionInput->promotionDisplayTimePeriod = new TimePeriod();
    $request->promotionInput->promotionDisplayTimePeriod->endTime = 'nisi';
    $request->promotionInput->promotionDisplayTimePeriod->startTime = 'tenetur';
    $request->promotionInput->promotionEffectiveDates = 'quis';
    $request->promotionInput->promotionEffectiveTimePeriod = new TimePeriod();
    $request->promotionInput->promotionEffectiveTimePeriod->endTime = 'quibusdam';
    $request->promotionInput->promotionEffectiveTimePeriod->startTime = 'nemo';
    $request->promotionInput->promotionId = 'suscipit';
    $request->promotionInput->promotionStatus = new PromotionPromotionStatus();
    $request->promotionInput->promotionStatus->creationDate = 'pariatur';
    $request->promotionInput->promotionStatus->destinationStatuses = [
        new PromotionPromotionStatusDestinationStatus(),
    ];
    $request->promotionInput->promotionStatus->lastUpdateDate = 'quidem';
    $request->promotionInput->promotionStatus->promotionIssue = [
        new PromotionPromotionStatusPromotionIssue(),
        new PromotionPromotionStatusPromotionIssue(),
        new PromotionPromotionStatusPromotionIssue(),
        new PromotionPromotionStatusPromotionIssue(),
    ];
    $request->promotionInput->promotionUrl = 'perferendis';
    $request->promotionInput->redemptionChannel = [
        PromotionRedemptionChannelEnum::ONLINE,
        PromotionRedemptionChannelEnum::REDEMPTION_CHANNEL_UNSPECIFIED,
        PromotionRedemptionChannelEnum::ONLINE,
    ];
    $request->promotionInput->shippingServiceNames = [
        'repudiandae',
        'architecto',
        'adipisci',
        'pariatur',
    ];
    $request->promotionInput->storeApplicability = PromotionStoreApplicabilityEnum::SPECIFIC_STORES;
    $request->promotionInput->storeCode = [
        'voluptatibus',
        'iure',
    ];
    $request->promotionInput->storeCodeExclusion = [
        'minus',
    ];
    $request->promotionInput->targetCountry = 'soluta';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'earum';
    $request->fields = 'praesentium';
    $request->key = 'error';
    $request->merchantId = 'non';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new ContentPromotionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->promotions->contentPromotionsCreate($request, $requestSecurity);

    if ($response->promotion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentPromotionsGet

Retrieves a promotion from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPromotionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPromotionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPromotionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'eaque';
    $request->id = 'a6924d3b-2ecf-4cc8-b895-010f5dd3d6fa';
    $request->key = 'quae';
    $request->merchantId = 'quos';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new ContentPromotionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->promotions->contentPromotionsGet($request, $requestSecurity);

    if ($response->promotion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
