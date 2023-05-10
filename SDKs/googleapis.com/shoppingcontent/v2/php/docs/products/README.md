# products

### Available Operations

* [contentProductsCustombatch](#contentproductscustombatch) - Retrieves, inserts, and deletes multiple products in a single request.
* [contentProductsDelete](#contentproductsdelete) - Deletes a product from your Merchant Center account.
* [contentProductsGet](#contentproductsget) - Retrieves a product from your Merchant Center account.
* [contentProductsInsert](#contentproductsinsert) - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* [contentProductsList](#contentproductslist) - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

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
use \OpenAPI\OpenAPI\Models\Shared\ProductAspect;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\CustomGroup;
use \OpenAPI\OpenAPI\Models\Shared\ProductDestination;
use \OpenAPI\OpenAPI\Models\Shared\Installment;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyPoints;
use \OpenAPI\OpenAPI\Models\Shared\ProductShipping;
use \OpenAPI\OpenAPI\Models\Shared\ProductShippingDimension;
use \OpenAPI\OpenAPI\Models\Shared\ProductShippingWeight;
use \OpenAPI\OpenAPI\Models\Shared\ProductTax;
use \OpenAPI\OpenAPI\Models\Shared\ProductUnitPricingBaseMeasure;
use \OpenAPI\OpenAPI\Models\Shared\ProductUnitPricingMeasure;
use \OpenAPI\OpenAPI\Models\Shared\Error;
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
    ];
    $request->accessToken = 'quae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->dryRun = false;
    $request->fields = 'quaerat';
    $request->key = 'molestiae';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'adipisci';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->dryRun = false;
    $request->fields = 'recusandae';
    $request->key = 'esse';
    $request->merchantId = 'provident';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->productId = 'eum';
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'aspernatur';

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
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'mollitia';
    $request->key = 'provident';
    $request->merchantId = 'possimus';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->productId = 'ex';
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'repellat';

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
use \OpenAPI\OpenAPI\Models\Shared\ProductAspect;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\CustomGroup;
use \OpenAPI\OpenAPI\Models\Shared\ProductDestination;
use \OpenAPI\OpenAPI\Models\Shared\Installment;
use \OpenAPI\OpenAPI\Models\Shared\LoyaltyPoints;
use \OpenAPI\OpenAPI\Models\Shared\ProductShipping;
use \OpenAPI\OpenAPI\Models\Shared\ProductShippingDimension;
use \OpenAPI\OpenAPI\Models\Shared\ProductShippingWeight;
use \OpenAPI\OpenAPI\Models\Shared\ProductTax;
use \OpenAPI\OpenAPI\Models\Shared\ProductUnitPricingBaseMeasure;
use \OpenAPI\OpenAPI\Models\Shared\ProductUnitPricingMeasure;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->product = new Product();
    $request->product->additionalImageLinks = [
        'in',
        'nam',
    ];
    $request->product->additionalProductTypes = [
        'officia',
        'laborum',
        'placeat',
        'modi',
    ];
    $request->product->adult = false;
    $request->product->adwordsGrouping = 'voluptatibus';
    $request->product->adwordsLabels = [
        'officiis',
        'sapiente',
        'cumque',
    ];
    $request->product->adwordsRedirect = 'vitae';
    $request->product->ageGroup = 'rerum';
    $request->product->aspects = [
        new ProductAspect(),
        new ProductAspect(),
    ];
    $request->product->availability = 'quis';
    $request->product->availabilityDate = 'inventore';
    $request->product->brand = 'fugit';
    $request->product->canonicalLink = 'cumque';
    $request->product->channel = 'quae';
    $request->product->color = 'perferendis';
    $request->product->condition = 'velit';
    $request->product->contentLanguage = 'aspernatur';
    $request->product->costOfGoodsSold = new Price();
    $request->product->costOfGoodsSold->currency = 'eum';
    $request->product->costOfGoodsSold->value = 'eius';
    $request->product->customAttributes = [
        new CustomAttribute(),
        new CustomAttribute(),
        new CustomAttribute(),
    ];
    $request->product->customGroups = [
        new CustomGroup(),
        new CustomGroup(),
        new CustomGroup(),
        new CustomGroup(),
    ];
    $request->product->customLabel0 = 'impedit';
    $request->product->customLabel1 = 'eos';
    $request->product->customLabel2 = 'sapiente';
    $request->product->customLabel3 = 'eum';
    $request->product->customLabel4 = 'dicta';
    $request->product->description = 'minima';
    $request->product->destinations = [
        new ProductDestination(),
    ];
    $request->product->displayAdsId = 'cupiditate';
    $request->product->displayAdsLink = 'provident';
    $request->product->displayAdsSimilarIds = [
        'soluta',
        'hic',
        'illum',
        'eaque',
    ];
    $request->product->displayAdsTitle = 'earum';
    $request->product->displayAdsValue = 5962.11;
    $request->product->energyEfficiencyClass = 'maiores';
    $request->product->expirationDate = 'debitis';
    $request->product->gender = 'female';
    $request->product->googleProductCategory = 'porro';
    $request->product->gtin = 'suscipit';
    $request->product->id = '32ca3aed-0117-4996-b12f-de04771778ff';
    $request->product->identifierExists = false;
    $request->product->imageLink = 'vel';
    $request->product->installment = new Installment();
    $request->product->installment->amount = new Price();
    $request->product->installment->amount->currency = 'architecto';
    $request->product->installment->amount->value = 'fugiat';
    $request->product->installment->months = 'doloremque';
    $request->product->isBundle = false;
    $request->product->itemGroupId = 'dicta';
    $request->product->kind = 'odio';
    $request->product->link = 'tempora';
    $request->product->loyaltyPoints = new LoyaltyPoints();
    $request->product->loyaltyPoints->name = 'Carla Feil MD';
    $request->product->loyaltyPoints->pointsValue = 'sunt';
    $request->product->loyaltyPoints->ratio = 3447.18;
    $request->product->material = 'fugiat';
    $request->product->maxEnergyEfficiencyClass = 'expedita';
    $request->product->maxHandlingTime = 'aliquid';
    $request->product->minEnergyEfficiencyClass = 'officia';
    $request->product->minHandlingTime = 'suscipit';
    $request->product->mobileLink = 'aliquid';
    $request->product->mpn = 'perferendis';
    $request->product->multipack = 'eum';
    $request->product->offerId = 'voluptas';
    $request->product->onlineOnly = false;
    $request->product->pattern = 'iste';
    $request->product->price = new Price();
    $request->product->price->currency = 'id';
    $request->product->price->value = 'ab';
    $request->product->productType = 'error';
    $request->product->promotionIds = [
        'voluptates',
        'mollitia',
        'laborum',
        'libero',
    ];
    $request->product->salePrice = new Price();
    $request->product->salePrice->currency = 'ad';
    $request->product->salePrice->value = 'deleniti';
    $request->product->salePriceEffectiveDate = 'enim';
    $request->product->sellOnGoogleQuantity = 'vitae';
    $request->product->shipping = [
        new ProductShipping(),
        new ProductShipping(),
        new ProductShipping(),
        new ProductShipping(),
    ];
    $request->product->shippingHeight = new ProductShippingDimension();
    $request->product->shippingHeight->unit = 'ex';
    $request->product->shippingHeight->value = 7758.03;
    $request->product->shippingLabel = 'ex';
    $request->product->shippingLength = new ProductShippingDimension();
    $request->product->shippingLength->unit = 'ut';
    $request->product->shippingLength->value = 3210.43;
    $request->product->shippingWeight = new ProductShippingWeight();
    $request->product->shippingWeight->unit = 'expedita';
    $request->product->shippingWeight->value = 299.5;
    $request->product->shippingWidth = new ProductShippingDimension();
    $request->product->shippingWidth->unit = 'molestias';
    $request->product->shippingWidth->value = 7372.54;
    $request->product->sizeSystem = 'aliquid';
    $request->product->sizeType = 'beatae';
    $request->product->sizes = [
        'omnis',
        'veritatis',
        'rerum',
    ];
    $request->product->source = 'est';
    $request->product->targetCountry = 'culpa';
    $request->product->taxes = [
        new ProductTax(),
    ];
    $request->product->title = 'Dr.';
    $request->product->unitPricingBaseMeasure = new ProductUnitPricingBaseMeasure();
    $request->product->unitPricingBaseMeasure->unit = 'officiis';
    $request->product->unitPricingBaseMeasure->value = 'architecto';
    $request->product->unitPricingMeasure = new ProductUnitPricingMeasure();
    $request->product->unitPricingMeasure->unit = 'fuga';
    $request->product->unitPricingMeasure->value = 8671.68;
    $request->product->validatedDestinations = [
        'voluptatem',
        'alias',
        'deleniti',
        'earum',
    ];
    $request->product->warnings = [
        new Error(),
        new Error(),
    ];
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->dryRun = false;
    $request->fields = 'nemo';
    $request->key = 'asperiores';
    $request->merchantId = 'ratione';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'totam';

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
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'culpa';
    $request->includeInvalidInsertedItems = false;
    $request->key = 'dolor';
    $request->maxResults = 307376;
    $request->merchantId = 'inventore';
    $request->oauthToken = 'deleniti';
    $request->pageToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'consequatur';

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
