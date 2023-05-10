# inappproducts

### Available Operations

* [androidpublisherInappproductsDelete](#androidpublisherinappproductsdelete) - Deletes an in-app product (i.e. a managed product or a subscription).
* [androidpublisherInappproductsGet](#androidpublisherinappproductsget) - Gets an in-app product, which can be a managed product or a subscription.
* [androidpublisherInappproductsInsert](#androidpublisherinappproductsinsert) - Creates an in-app product (i.e. a managed product or a subscription).
* [androidpublisherInappproductsList](#androidpublisherinappproductslist) - Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
* [androidpublisherInappproductsPatch](#androidpublisherinappproductspatch) - Patches an in-app product (i.e. a managed product or a subscription).
* [androidpublisherInappproductsUpdate](#androidpublisherinappproductsupdate) - Updates an in-app product (i.e. a managed product or a subscription).

## androidpublisherInappproductsDelete

Deletes an in-app product (i.e. a managed product or a subscription).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->fields = 'odio';
    $request->key = 'occaecati';
    $request->oauthToken = 'commodi';
    $request->packageName = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->sku = 'deserunt';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new AndroidpublisherInappproductsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInappproductsGet

Gets an in-app product, which can be a managed product or a subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'consequuntur';
    $request->key = 'deleniti';
    $request->oauthToken = 'fugit';
    $request->packageName = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->sku = 'incidunt';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new AndroidpublisherInappproductsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsGet($request, $requestSecurity);

    if ($response->inAppProduct !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInappproductsInsert

Creates an in-app product (i.e. a managed product or a subscription).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppProduct;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductListing;
use \OpenAPI\OpenAPI\Models\Shared\ManagedProductTaxAndComplianceSettings;
use \OpenAPI\OpenAPI\Models\Shared\ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfo;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfoStreamingTaxTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfoTaxTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductPurchaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTaxAndComplianceSettings;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->inAppProduct = new InAppProduct();
    $request->inAppProduct->defaultLanguage = 'nisi';
    $request->inAppProduct->defaultPrice = new Price();
    $request->inAppProduct->defaultPrice->currency = 'fugit';
    $request->inAppProduct->defaultPrice->priceMicros = 'sapiente';
    $request->inAppProduct->gracePeriod = 'consequuntur';
    $request->inAppProduct->listings = [
        'explicabo' => new InAppProductListing(),
    ];
    $request->inAppProduct->managedProductTaxesAndComplianceSettings = new ManagedProductTaxAndComplianceSettings();
    $request->inAppProduct->managedProductTaxesAndComplianceSettings->eeaWithdrawalRightType = ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum::WITHDRAWAL_RIGHT_SERVICE;
    $request->inAppProduct->managedProductTaxesAndComplianceSettings->taxRateInfoByRegionCode = [
        'atque' => new RegionalTaxRateInfo(),
        'et' => new RegionalTaxRateInfo(),
        'esse' => new RegionalTaxRateInfo(),
    ];
    $request->inAppProduct->packageName = 'eveniet';
    $request->inAppProduct->prices = [
        'veritatis' => new Price(),
        'esse' => new Price(),
        'quod' => new Price(),
        'nam' => new Price(),
    ];
    $request->inAppProduct->purchaseType = InAppProductPurchaseTypeEnum::SUBSCRIPTION;
    $request->inAppProduct->sku = 'aliquid';
    $request->inAppProduct->status = InAppProductStatusEnum::STATUS_UNSPECIFIED;
    $request->inAppProduct->subscriptionPeriod = 'saepe';
    $request->inAppProduct->subscriptionTaxesAndComplianceSettings = new SubscriptionTaxAndComplianceSettings();
    $request->inAppProduct->subscriptionTaxesAndComplianceSettings->eeaWithdrawalRightType = SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum::WITHDRAWAL_RIGHT_DIGITAL_CONTENT;
    $request->inAppProduct->subscriptionTaxesAndComplianceSettings->taxRateInfoByRegionCode = [
        'molestiae' => new RegionalTaxRateInfo(),
        'rerum' => new RegionalTaxRateInfo(),
        'occaecati' => new RegionalTaxRateInfo(),
    ];
    $request->inAppProduct->trialPeriod = 'minima';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->autoConvertMissingPrices = false;
    $request->callback = 'sit';
    $request->fields = 'culpa';
    $request->key = 'tempore';
    $request->oauthToken = 'adipisci';
    $request->packageName = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new AndroidpublisherInappproductsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsInsert($request, $requestSecurity);

    if ($response->inAppProduct !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInappproductsList

Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'blanditiis';
    $request->key = 'provident';
    $request->maxResults = 953722;
    $request->oauthToken = 'nulla';
    $request->packageName = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->startIndex = 97468;
    $request->token = 'a';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new AndroidpublisherInappproductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsList($request, $requestSecurity);

    if ($response->inappproductsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInappproductsPatch

Patches an in-app product (i.e. a managed product or a subscription).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppProduct;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductListing;
use \OpenAPI\OpenAPI\Models\Shared\ManagedProductTaxAndComplianceSettings;
use \OpenAPI\OpenAPI\Models\Shared\ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfo;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfoStreamingTaxTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfoTaxTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductPurchaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTaxAndComplianceSettings;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->inAppProduct = new InAppProduct();
    $request->inAppProduct->defaultLanguage = 'possimus';
    $request->inAppProduct->defaultPrice = new Price();
    $request->inAppProduct->defaultPrice->currency = 'quia';
    $request->inAppProduct->defaultPrice->priceMicros = 'eveniet';
    $request->inAppProduct->gracePeriod = 'asperiores';
    $request->inAppProduct->listings = [
        'veritatis' => new InAppProductListing(),
        'consequuntur' => new InAppProductListing(),
        'quasi' => new InAppProductListing(),
        'similique' => new InAppProductListing(),
    ];
    $request->inAppProduct->managedProductTaxesAndComplianceSettings = new ManagedProductTaxAndComplianceSettings();
    $request->inAppProduct->managedProductTaxesAndComplianceSettings->eeaWithdrawalRightType = ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum::WITHDRAWAL_RIGHT_DIGITAL_CONTENT;
    $request->inAppProduct->managedProductTaxesAndComplianceSettings->taxRateInfoByRegionCode = [
        'tenetur' => new RegionalTaxRateInfo(),
        'quae' => new RegionalTaxRateInfo(),
    ];
    $request->inAppProduct->packageName = 'earum';
    $request->inAppProduct->prices = [
        'in' => new Price(),
        'eius' => new Price(),
    ];
    $request->inAppProduct->purchaseType = InAppProductPurchaseTypeEnum::SUBSCRIPTION;
    $request->inAppProduct->sku = 'illum';
    $request->inAppProduct->status = InAppProductStatusEnum::INACTIVE;
    $request->inAppProduct->subscriptionPeriod = 'accusantium';
    $request->inAppProduct->subscriptionTaxesAndComplianceSettings = new SubscriptionTaxAndComplianceSettings();
    $request->inAppProduct->subscriptionTaxesAndComplianceSettings->eeaWithdrawalRightType = SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum::WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED;
    $request->inAppProduct->subscriptionTaxesAndComplianceSettings->taxRateInfoByRegionCode = [
        'dicta' => new RegionalTaxRateInfo(),
        'ullam' => new RegionalTaxRateInfo(),
        'reprehenderit' => new RegionalTaxRateInfo(),
        'ullam' => new RegionalTaxRateInfo(),
    ];
    $request->inAppProduct->trialPeriod = 'nisi';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->autoConvertMissingPrices = false;
    $request->callback = 'qui';
    $request->fields = 'quibusdam';
    $request->key = 'ex';
    $request->oauthToken = 'deleniti';
    $request->packageName = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->sku = 'architecto';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new AndroidpublisherInappproductsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsPatch($request, $requestSecurity);

    if ($response->inAppProduct !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInappproductsUpdate

Updates an in-app product (i.e. a managed product or a subscription).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppProduct;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductListing;
use \OpenAPI\OpenAPI\Models\Shared\ManagedProductTaxAndComplianceSettings;
use \OpenAPI\OpenAPI\Models\Shared\ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfo;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfoStreamingTaxTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalTaxRateInfoTaxTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductPurchaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTaxAndComplianceSettings;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->inAppProduct = new InAppProduct();
    $request->inAppProduct->defaultLanguage = 'at';
    $request->inAppProduct->defaultPrice = new Price();
    $request->inAppProduct->defaultPrice->currency = 'et';
    $request->inAppProduct->defaultPrice->priceMicros = 'voluptate';
    $request->inAppProduct->gracePeriod = 'ipsa';
    $request->inAppProduct->listings = [
        'veritatis' => new InAppProductListing(),
        'consectetur' => new InAppProductListing(),
    ];
    $request->inAppProduct->managedProductTaxesAndComplianceSettings = new ManagedProductTaxAndComplianceSettings();
    $request->inAppProduct->managedProductTaxesAndComplianceSettings->eeaWithdrawalRightType = ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum::WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED;
    $request->inAppProduct->managedProductTaxesAndComplianceSettings->taxRateInfoByRegionCode = [
        'temporibus' => new RegionalTaxRateInfo(),
        'accusantium' => new RegionalTaxRateInfo(),
        'rem' => new RegionalTaxRateInfo(),
    ];
    $request->inAppProduct->packageName = 'aut';
    $request->inAppProduct->prices = [
        'eum' => new Price(),
        'mollitia' => new Price(),
        'ab' => new Price(),
    ];
    $request->inAppProduct->purchaseType = InAppProductPurchaseTypeEnum::MANAGED_USER;
    $request->inAppProduct->sku = 'non';
    $request->inAppProduct->status = InAppProductStatusEnum::STATUS_UNSPECIFIED;
    $request->inAppProduct->subscriptionPeriod = 'dolor';
    $request->inAppProduct->subscriptionTaxesAndComplianceSettings = new SubscriptionTaxAndComplianceSettings();
    $request->inAppProduct->subscriptionTaxesAndComplianceSettings->eeaWithdrawalRightType = SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum::WITHDRAWAL_RIGHT_DIGITAL_CONTENT;
    $request->inAppProduct->subscriptionTaxesAndComplianceSettings->taxRateInfoByRegionCode = [
        'impedit' => new RegionalTaxRateInfo(),
        'explicabo' => new RegionalTaxRateInfo(),
    ];
    $request->inAppProduct->trialPeriod = 'voluptas';
    $request->accessToken = 'aut';
    $request->allowMissing = false;
    $request->alt = AltEnum::MEDIA;
    $request->autoConvertMissingPrices = false;
    $request->callback = 'dicta';
    $request->fields = 'maiores';
    $request->key = 'natus';
    $request->oauthToken = 'velit';
    $request->packageName = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->sku = 'asperiores';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new AndroidpublisherInappproductsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsUpdate($request, $requestSecurity);

    if ($response->inAppProduct !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
