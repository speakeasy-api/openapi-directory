# products

### Available Operations

* [contentProductsCustombatch](#contentproductscustombatch) - Retrieves, inserts, and deletes multiple products in a single request.
* [contentProductsDelete](#contentproductsdelete) - Deletes a product from your Merchant Center account.
* [contentProductsGet](#contentproductsget) - Retrieves a product from your Merchant Center account.
* [contentProductsInsert](#contentproductsinsert) - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* [contentProductsList](#contentproductslist) - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
* [contentProductsUpdate](#contentproductsupdate) - Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

## contentProductsCustombatch

Retrieves, inserts, and deletes multiple products in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductsCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductsCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\Product;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\Installment;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyPoints;
use \OpenAPI\OpenAPI\Models\Shared\ProductProductDetail;
use \OpenAPI\OpenAPI\Models\Shared\ProductDimension;
use \OpenAPI\OpenAPI\Models\Shared\ProductWeight;
use \OpenAPI\OpenAPI\Models\Shared\ProductShipping;
use \OpenAPI\OpenAPI\Models\Shared\ProductShippingDimension;
use \OpenAPI\OpenAPI\Models\Shared\ProductShippingWeight;
use \OpenAPI\OpenAPI\Models\Shared\ProductSubscriptionCost;
use \OpenAPI\OpenAPI\Models\Shared\ProductTax;
use \OpenAPI\OpenAPI\Models\Shared\ProductUnitPricingBaseMeasure;
use \OpenAPI\OpenAPI\Models\Shared\ProductUnitPricingMeasure;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductsCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->productsCustomBatchRequest = new ProductsCustomBatchRequest();
    $request->productsCustomBatchRequest->entries = [
        new ProductsCustomBatchRequestEntry(),
        new ProductsCustomBatchRequestEntry(),
        new ProductsCustomBatchRequestEntry(),
        new ProductsCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'vero';
    $request->key = 'qui';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new ContentProductsCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->contentProductsCustombatch($request, $requestSecurity);

    if ($response->productsCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductsDelete

Deletes a product from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->feedId = 'illo';
    $request->fields = 'hic';
    $request->key = 'deserunt';
    $request->merchantId = 'delectus';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->productId = 'distinctio';
    $request->quotaUser = 'in';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new ContentProductsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->contentProductsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductsGet

Retrieves a product from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'in';
    $request->fields = 'explicabo';
    $request->key = 'accusamus';
    $request->merchantId = 'rem';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->productId = 'odit';
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new ContentProductsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->contentProductsGet($request, $requestSecurity);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductsInsert

Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Product;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\Installment;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyPoints;
use \OpenAPI\OpenAPI\Models\Shared\ProductProductDetail;
use \OpenAPI\OpenAPI\Models\Shared\ProductDimension;
use \OpenAPI\OpenAPI\Models\Shared\ProductWeight;
use \OpenAPI\OpenAPI\Models\Shared\ProductShipping;
use \OpenAPI\OpenAPI\Models\Shared\ProductShippingDimension;
use \OpenAPI\OpenAPI\Models\Shared\ProductShippingWeight;
use \OpenAPI\OpenAPI\Models\Shared\ProductSubscriptionCost;
use \OpenAPI\OpenAPI\Models\Shared\ProductTax;
use \OpenAPI\OpenAPI\Models\Shared\ProductUnitPricingBaseMeasure;
use \OpenAPI\OpenAPI\Models\Shared\ProductUnitPricingMeasure;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->product = new Product();
    $request->product->additionalImageLinks = [
        'libero',
        'magnam',
    ];
    $request->product->additionalSizeType = 'sit';
    $request->product->adsGrouping = 'modi';
    $request->product->adsLabels = [
        'nesciunt',
        'mollitia',
    ];
    $request->product->adsRedirect = 'dignissimos';
    $request->product->adult = false;
    $request->product->ageGroup = 'fugiat';
    $request->product->availability = 'nostrum';
    $request->product->availabilityDate = 'molestiae';
    $request->product->brand = 'veniam';
    $request->product->canonicalLink = 'reiciendis';
    $request->product->channel = 'ab';
    $request->product->color = 'modi';
    $request->product->condition = 'aut';
    $request->product->contentLanguage = 'aut';
    $request->product->costOfGoodsSold = new Price();
    $request->product->costOfGoodsSold->currency = 'eveniet';
    $request->product->costOfGoodsSold->value = 'odio';
    $request->product->customAttributes = [
        new CustomAttribute(),
        new CustomAttribute(),
    ];
    $request->product->customLabel0 = 'numquam';
    $request->product->customLabel1 = 'dolorum';
    $request->product->customLabel2 = 'possimus';
    $request->product->customLabel3 = 'voluptate';
    $request->product->customLabel4 = 'consectetur';
    $request->product->description = 'nesciunt';
    $request->product->disclosureDate = 'quaerat';
    $request->product->displayAdsId = 'itaque';
    $request->product->displayAdsLink = 'minus';
    $request->product->displayAdsSimilarIds = [
        'distinctio',
    ];
    $request->product->displayAdsTitle = 'iusto';
    $request->product->displayAdsValue = 5580.51;
    $request->product->energyEfficiencyClass = 'et';
    $request->product->excludedDestinations = [
        'amet',
        'autem',
        'fuga',
    ];
    $request->product->expirationDate = 'alias';
    $request->product->externalSellerId = 'rem';
    $request->product->feedLabel = 'aut';
    $request->product->gender = 'male';
    $request->product->googleProductCategory = 'laudantium';
    $request->product->gtin = 'repellendus';
    $request->product->id = '100efada-200e-4f04-a2eb-2164cf9ab836';
    $request->product->identifierExists = false;
    $request->product->imageLink = 'ea';
    $request->product->includedDestinations = [
        'ducimus',
        'odit',
        'velit',
        'reiciendis',
    ];
    $request->product->installment = new Installment();
    $request->product->installment->amount = new Price();
    $request->product->installment->amount->currency = 'repellat';
    $request->product->installment->amount->value = 'nulla';
    $request->product->installment->months = 'laborum';
    $request->product->isBundle = false;
    $request->product->itemGroupId = 'natus';
    $request->product->kind = 'accusamus';
    $request->product->lifestyleImageLinks = [
        'nisi',
    ];
    $request->product->link = 'rerum';
    $request->product->linkTemplate = 'recusandae';
    $request->product->loyaltyPoints = new LoyaltyPoints();
    $request->product->loyaltyPoints->name = 'Kyle Leffler';
    $request->product->loyaltyPoints->pointsValue = 'quisquam';
    $request->product->loyaltyPoints->ratio = 1202.77;
    $request->product->material = 'voluptatibus';
    $request->product->maxEnergyEfficiencyClass = 'eligendi';
    $request->product->maxHandlingTime = 'quae';
    $request->product->minEnergyEfficiencyClass = 'officiis';
    $request->product->minHandlingTime = 'architecto';
    $request->product->mobileLink = 'architecto';
    $request->product->mobileLinkTemplate = 'enim';
    $request->product->mpn = 'optio';
    $request->product->multipack = 'rem';
    $request->product->offerId = 'perferendis';
    $request->product->pattern = 'facilis';
    $request->product->pause = 'reiciendis';
    $request->product->pickupMethod = 'a';
    $request->product->pickupSla = 'iste';
    $request->product->price = new Price();
    $request->product->price->currency = 'dicta';
    $request->product->price->value = 'quos';
    $request->product->productDetails = [
        new ProductProductDetail(),
        new ProductProductDetail(),
    ];
    $request->product->productHeight = new ProductDimension();
    $request->product->productHeight->unit = 'dolore';
    $request->product->productHeight->value = 2662.84;
    $request->product->productHighlights = [
        'maxime',
        'modi',
        'consequuntur',
        'assumenda',
    ];
    $request->product->productLength = new ProductDimension();
    $request->product->productLength->unit = 'vero';
    $request->product->productLength->value = 9851.09;
    $request->product->productTypes = [
        'porro',
        'accusamus',
        'totam',
        'reiciendis',
    ];
    $request->product->productWeight = new ProductWeight();
    $request->product->productWeight->unit = 'ab';
    $request->product->productWeight->value = 5734.44;
    $request->product->productWidth = new ProductDimension();
    $request->product->productWidth->unit = 'nihil';
    $request->product->productWidth->value = 4584.12;
    $request->product->promotionIds = [
        'odio',
        'nesciunt',
    ];
    $request->product->salePrice = new Price();
    $request->product->salePrice->currency = 'debitis';
    $request->product->salePrice->value = 'vel';
    $request->product->salePriceEffectiveDate = 'neque';
    $request->product->sellOnGoogleQuantity = 'corporis';
    $request->product->shipping = [
        new ProductShipping(),
        new ProductShipping(),
    ];
    $request->product->shippingHeight = new ProductShippingDimension();
    $request->product->shippingHeight->unit = 'consequuntur';
    $request->product->shippingHeight->value = 6411.33;
    $request->product->shippingLabel = 'reprehenderit';
    $request->product->shippingLength = new ProductShippingDimension();
    $request->product->shippingLength->unit = 'distinctio';
    $request->product->shippingLength->value = 2628;
    $request->product->shippingWeight = new ProductShippingWeight();
    $request->product->shippingWeight->unit = 'ipsa';
    $request->product->shippingWeight->value = 5220.62;
    $request->product->shippingWidth = new ProductShippingDimension();
    $request->product->shippingWidth->unit = 'maiores';
    $request->product->shippingWidth->value = 351.6;
    $request->product->shoppingAdsExcludedCountries = [
        'saepe',
        'neque',
    ];
    $request->product->sizeSystem = 'facere';
    $request->product->sizeType = 'aliquam';
    $request->product->sizes = [
        'doloribus',
        'fugiat',
        'est',
    ];
    $request->product->source = 'delectus';
    $request->product->subscriptionCost = new ProductSubscriptionCost();
    $request->product->subscriptionCost->amount = new Price();
    $request->product->subscriptionCost->amount->currency = 'velit';
    $request->product->subscriptionCost->amount->value = 'vitae';
    $request->product->subscriptionCost->period = 'nesciunt';
    $request->product->subscriptionCost->periodLength = 'similique';
    $request->product->targetCountry = 'illo';
    $request->product->taxCategory = 'repellat';
    $request->product->taxes = [
        new ProductTax(),
        new ProductTax(),
    ];
    $request->product->title = 'Dr.';
    $request->product->transitTimeLabel = 'possimus';
    $request->product->unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure();
    $request->product->unitPricingBaseMeasure->unit = 'unde';
    $request->product->unitPricingBaseMeasure->value = 'incidunt';
    $request->product->unitPricingMeasure = new ProductUnitPricingMeasure();
    $request->product->unitPricingMeasure->unit = 'explicabo';
    $request->product->unitPricingMeasure->value = 3684.91;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'alias';
    $request->feedId = 'quidem';
    $request->fields = 'nesciunt';
    $request->key = 'commodi';
    $request->merchantId = 'sapiente';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'veniam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new ContentProductsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->contentProductsInsert($request, $requestSecurity);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductsList

Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->fields = 'adipisci';
    $request->key = 'libero';
    $request->maxResults = 448386;
    $request->merchantId = 'minima';
    $request->oauthToken = 'ex';
    $request->pageToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ContentProductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->contentProductsList($request, $requestSecurity);

    if ($response->productsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductsUpdate

Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Product;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\Installment;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyPoints;
use \OpenAPI\OpenAPI\Models\Shared\ProductProductDetail;
use \OpenAPI\OpenAPI\Models\Shared\ProductDimension;
use \OpenAPI\OpenAPI\Models\Shared\ProductWeight;
use \OpenAPI\OpenAPI\Models\Shared\ProductShipping;
use \OpenAPI\OpenAPI\Models\Shared\ProductShippingDimension;
use \OpenAPI\OpenAPI\Models\Shared\ProductShippingWeight;
use \OpenAPI\OpenAPI\Models\Shared\ProductSubscriptionCost;
use \OpenAPI\OpenAPI\Models\Shared\ProductTax;
use \OpenAPI\OpenAPI\Models\Shared\ProductUnitPricingBaseMeasure;
use \OpenAPI\OpenAPI\Models\Shared\ProductUnitPricingMeasure;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->product = new Product();
    $request->product->additionalImageLinks = [
        'dolor',
        'ducimus',
        'fuga',
        'minima',
    ];
    $request->product->additionalSizeType = 'architecto';
    $request->product->adsGrouping = 'qui';
    $request->product->adsLabels = [
        'magni',
        'incidunt',
    ];
    $request->product->adsRedirect = 'adipisci';
    $request->product->adult = false;
    $request->product->ageGroup = 'praesentium';
    $request->product->availability = 'dolor';
    $request->product->availabilityDate = 'exercitationem';
    $request->product->brand = 'expedita';
    $request->product->canonicalLink = 'facilis';
    $request->product->channel = 'impedit';
    $request->product->color = 'sit';
    $request->product->condition = 'nemo';
    $request->product->contentLanguage = 'culpa';
    $request->product->costOfGoodsSold = new Price();
    $request->product->costOfGoodsSold->currency = 'consequuntur';
    $request->product->costOfGoodsSold->value = 'amet';
    $request->product->customAttributes = [
        new CustomAttribute(),
        new CustomAttribute(),
        new CustomAttribute(),
    ];
    $request->product->customLabel0 = 'modi';
    $request->product->customLabel1 = 'veniam';
    $request->product->customLabel2 = 'quod';
    $request->product->customLabel3 = 'itaque';
    $request->product->customLabel4 = 'a';
    $request->product->description = 'quisquam';
    $request->product->disclosureDate = 'enim';
    $request->product->displayAdsId = 'doloribus';
    $request->product->displayAdsLink = 'assumenda';
    $request->product->displayAdsSimilarIds = [
        'architecto',
        'alias',
        'culpa',
        'ipsa',
    ];
    $request->product->displayAdsTitle = 'nobis';
    $request->product->displayAdsValue = 8981.93;
    $request->product->energyEfficiencyClass = 'quia';
    $request->product->excludedDestinations = [
        'vel',
    ];
    $request->product->expirationDate = 'perspiciatis';
    $request->product->externalSellerId = 'debitis';
    $request->product->feedLabel = 'ullam';
    $request->product->gender = 'female';
    $request->product->googleProductCategory = 'accusantium';
    $request->product->gtin = 'perferendis';
    $request->product->id = '19c6dc5e-3476-4279-9bfb-be6949fb2bb4';
    $request->product->identifierExists = false;
    $request->product->imageLink = 'recusandae';
    $request->product->includedDestinations = [
        'id',
        'saepe',
        'autem',
        'quo',
    ];
    $request->product->installment = new Installment();
    $request->product->installment->amount = new Price();
    $request->product->installment->amount->currency = 'nesciunt';
    $request->product->installment->amount->value = 'illum';
    $request->product->installment->months = 'nemo';
    $request->product->isBundle = false;
    $request->product->itemGroupId = 'illum';
    $request->product->kind = 'facilis';
    $request->product->lifestyleImageLinks = [
        'mollitia',
    ];
    $request->product->link = 'assumenda';
    $request->product->linkTemplate = 'recusandae';
    $request->product->loyaltyPoints = new LoyaltyPoints();
    $request->product->loyaltyPoints->name = 'Dewey Hand';
    $request->product->loyaltyPoints->pointsValue = 'eveniet';
    $request->product->loyaltyPoints->ratio = 6731.91;
    $request->product->material = 'incidunt';
    $request->product->maxEnergyEfficiencyClass = 'maxime';
    $request->product->maxHandlingTime = 'ipsam';
    $request->product->minEnergyEfficiencyClass = 'alias';
    $request->product->minHandlingTime = 'suscipit';
    $request->product->mobileLink = 'deserunt';
    $request->product->mobileLinkTemplate = 'molestias';
    $request->product->mpn = 'laborum';
    $request->product->multipack = 'est';
    $request->product->offerId = 'occaecati';
    $request->product->pattern = 'labore';
    $request->product->pause = 'quo';
    $request->product->pickupMethod = 'perferendis';
    $request->product->pickupSla = 'fugit';
    $request->product->price = new Price();
    $request->product->price->currency = 'aliquid';
    $request->product->price->value = 'magnam';
    $request->product->productDetails = [
        new ProductProductDetail(),
        new ProductProductDetail(),
    ];
    $request->product->productHeight = new ProductDimension();
    $request->product->productHeight->unit = 'eligendi';
    $request->product->productHeight->value = 9421.85;
    $request->product->productHighlights = [
        'officiis',
        'unde',
    ];
    $request->product->productLength = new ProductDimension();
    $request->product->productLength->unit = 'nulla';
    $request->product->productLength->value = 6213.93;
    $request->product->productTypes = [
        'magnam',
        'nostrum',
        'esse',
    ];
    $request->product->productWeight = new ProductWeight();
    $request->product->productWeight->unit = 'corrupti';
    $request->product->productWeight->value = 6847.99;
    $request->product->productWidth = new ProductDimension();
    $request->product->productWidth->unit = 'facere';
    $request->product->productWidth->value = 7736.59;
    $request->product->promotionIds = [
        'deserunt',
    ];
    $request->product->salePrice = new Price();
    $request->product->salePrice->currency = 'quod';
    $request->product->salePrice->value = 'laboriosam';
    $request->product->salePriceEffectiveDate = 'doloremque';
    $request->product->sellOnGoogleQuantity = 'voluptatem';
    $request->product->shipping = [
        new ProductShipping(),
        new ProductShipping(),
        new ProductShipping(),
        new ProductShipping(),
    ];
    $request->product->shippingHeight = new ProductShippingDimension();
    $request->product->shippingHeight->unit = 'necessitatibus';
    $request->product->shippingHeight->value = 8075.64;
    $request->product->shippingLabel = 'consequatur';
    $request->product->shippingLength = new ProductShippingDimension();
    $request->product->shippingLength->unit = 'eaque';
    $request->product->shippingLength->value = 1023.9;
    $request->product->shippingWeight = new ProductShippingWeight();
    $request->product->shippingWeight->unit = 'similique';
    $request->product->shippingWeight->value = 7832.74;
    $request->product->shippingWidth = new ProductShippingDimension();
    $request->product->shippingWidth->unit = 'blanditiis';
    $request->product->shippingWidth->value = 608.92;
    $request->product->shoppingAdsExcludedCountries = [
        'officiis',
    ];
    $request->product->sizeSystem = 'sed';
    $request->product->sizeType = 'necessitatibus';
    $request->product->sizes = [
        'ipsa',
        'excepturi',
        'a',
        'maiores',
    ];
    $request->product->source = 'laudantium';
    $request->product->subscriptionCost = new ProductSubscriptionCost();
    $request->product->subscriptionCost->amount = new Price();
    $request->product->subscriptionCost->amount->currency = 'maiores';
    $request->product->subscriptionCost->amount->value = 'alias';
    $request->product->subscriptionCost->period = 'asperiores';
    $request->product->subscriptionCost->periodLength = 'rem';
    $request->product->targetCountry = 'dicta';
    $request->product->taxCategory = 'suscipit';
    $request->product->taxes = [
        new ProductTax(),
        new ProductTax(),
        new ProductTax(),
        new ProductTax(),
    ];
    $request->product->title = 'Dr.';
    $request->product->transitTimeLabel = 'velit';
    $request->product->unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure();
    $request->product->unitPricingBaseMeasure->unit = 'eius';
    $request->product->unitPricingBaseMeasure->value = 'esse';
    $request->product->unitPricingMeasure = new ProductUnitPricingMeasure();
    $request->product->unitPricingMeasure->unit = 'in';
    $request->product->unitPricingMeasure->value = 7574.07;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'excepturi';
    $request->key = 'accusantium';
    $request->merchantId = 'qui';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->productId = 'beatae';
    $request->quotaUser = 'incidunt';
    $request->updateMask = 'dicta';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new ContentProductsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->contentProductsUpdate($request, $requestSecurity);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
