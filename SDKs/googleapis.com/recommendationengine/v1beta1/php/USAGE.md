<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1CatalogItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1FeatureMap;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1FeatureMapStringList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1FeatureMapFloatList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductCatalogItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRecommendationengineV1beta1CatalogItem = new GoogleCloudRecommendationengineV1beta1CatalogItem();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->categoryHierarchies = [
        new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(),
        new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(),
        new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->description = 'distinctio';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->id = 'd9d8d69a-674e-40f4-a7cc-8796ed151a05';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemAttributes->categoricalFeatures = [
        'sapiente' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
        'quo' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
        'odit' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
        'at' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemAttributes->numericalFeatures = [
        'maiores' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
        'molestiae' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
        'quod' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
        'quod' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemGroupId = 'esse';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->languageCode = 'totam';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->availableQuantity = 'porro';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->canonicalProductUri = 'dolorum';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->costs = [
        'nam' => 6399.21,
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->currencyCode = 'occaecati';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->exactPrice->displayPrice = 1433.53;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->exactPrice->originalPrice = 5373.73;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->images = [
        new GoogleCloudRecommendationengineV1beta1Image(),
        new GoogleCloudRecommendationengineV1beta1Image(),
        new GoogleCloudRecommendationengineV1beta1Image(),
        new GoogleCloudRecommendationengineV1beta1Image(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->priceRange->max = 7586.16;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->priceRange->min = 5218.48;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->stockState = GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum::STOCK_STATE_UNSPECIFIED;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->tags = [
        'molestiae',
        'modi',
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->title = 'Mr.';
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'ipsum';
    $request->key = 'excepturi';
    $request->oauthToken = 'aspernatur';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsCatalogItemsCreate($request, $requestSecurity);

    if ($response->googleCloudRecommendationengineV1beta1CatalogItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->