# projects

### Available Operations

* [recommendationengineProjectsLocationsCatalogsCatalogItemsCreate](#recommendationengineprojectslocationscatalogscatalogitemscreate) - Creates a catalog item.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsImport](#recommendationengineprojectslocationscatalogscatalogitemsimport) - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsList](#recommendationengineprojectslocationscatalogscatalogitemslist) - Gets a list of catalog items.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsPatch](#recommendationengineprojectslocationscatalogscatalogitemspatch) - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* [recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict](#recommendationengineprojectslocationscatalogseventstoresplacementspredict) - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate](#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationscreate) - Register an API key for use with predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete](#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationsdelete) - Unregister an apiKey from using for predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList](#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationslist) - List the registered apiKeys for use with predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect](#recommendationengineprojectslocationscatalogseventstoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport](#recommendationengineprojectslocationscatalogseventstoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList](#recommendationengineprojectslocationscatalogseventstoresusereventslist) - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge](#recommendationengineprojectslocationscatalogseventstoresusereventspurge) - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin](#recommendationengineprojectslocationscatalogseventstoresusereventsrejoin) - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite](#recommendationengineprojectslocationscatalogseventstoresusereventswrite) - Writes a single user event.
* [recommendationengineProjectsLocationsCatalogsList](#recommendationengineprojectslocationscatalogslist) - Lists all the catalog configurations associated with the project.
* [recommendationengineProjectsLocationsCatalogsOperationsGet](#recommendationengineprojectslocationscatalogsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [recommendationengineProjectsLocationsCatalogsOperationsList](#recommendationengineprojectslocationscatalogsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## recommendationengineProjectsLocationsCatalogsCatalogItemsCreate

Creates a catalog item.

### Example Usage

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
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->description = 'natus';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->id = '6fea7596-eb10-4faa-a235-2c5955907aff';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemAttributes->categoricalFeatures = [
        'mollitia' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemAttributes->numericalFeatures = [
        'culpa' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemGroupId = 'consequuntur';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->languageCode = 'repellat';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->availableQuantity = 'mollitia';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->canonicalProductUri = 'occaecati';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->costs = [
        'commodi' => 4663.11,
        'molestiae' => 2444.25,
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->currencyCode = 'error';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->exactPrice->displayPrice = 1589.69;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->exactPrice->originalPrice = 3380.07;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->images = [
        new GoogleCloudRecommendationengineV1beta1Image(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->priceRange->max = 6747.52;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->priceRange->min = 6563.3;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->stockState = GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum::IN_STOCK;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->tags = [
        'quo',
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->title = 'Mr.';
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'possimus';
    $request->key = 'aut';
    $request->oauthToken = 'quasi';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'quasi';

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

## recommendationengineProjectsLocationsCatalogsCatalogItemsImport

Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1CatalogInlineSource;
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserEventInlineSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1EventDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductEventDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest = new GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest();
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->errorsConfig = new GoogleCloudRecommendationengineV1beta1ImportErrorsConfig();
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->errorsConfig->gcsPrefix = 'voluptatibus';
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig = new GoogleCloudRecommendationengineV1beta1InputConfig();
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->bigQuerySource = new GoogleCloudRecommendationengineV1beta1BigQuerySource();
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->bigQuerySource->dataSchema = 'vero';
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->bigQuerySource->datasetId = 'nihil';
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->bigQuerySource->gcsStagingDir = 'praesentium';
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->bigQuerySource->projectId = 'voluptatibus';
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->bigQuerySource->tableId = 'ipsa';
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->catalogInlineSource = new GoogleCloudRecommendationengineV1beta1CatalogInlineSource();
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->catalogInlineSource->catalogItems = [
        new GoogleCloudRecommendationengineV1beta1CatalogItem(),
        new GoogleCloudRecommendationengineV1beta1CatalogItem(),
        new GoogleCloudRecommendationengineV1beta1CatalogItem(),
    ];
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->gcsSource = new GoogleCloudRecommendationengineV1beta1GcsSource();
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->gcsSource->inputUris = [
        'cum',
        'perferendis',
    ];
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->gcsSource->jsonSchema = 'doloremque';
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->userEventInlineSource = new GoogleCloudRecommendationengineV1beta1UserEventInlineSource();
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->inputConfig->userEventInlineSource->userEvents = [
        new GoogleCloudRecommendationengineV1beta1UserEvent(),
        new GoogleCloudRecommendationengineV1beta1UserEvent(),
    ];
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->requestId = 'ut';
    $request->googleCloudRecommendationengineV1beta1ImportCatalogItemsRequest->updateMask = 'maiores';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'iusto';
    $request->key = 'dicta';
    $request->oauthToken = 'harum';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsCatalogItemsImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsCatalogItemsList

Gets a list of catalog items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsCatalogItemsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'excepturi';
    $request->filter = 'pariatur';
    $request->key = 'modi';
    $request->oauthToken = 'praesentium';
    $request->pageSize = 523248;
    $request->pageToken = 'voluptates';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsCatalogItemsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsCatalogItemsList($request, $requestSecurity);

    if ($response->googleCloudRecommendationengineV1beta1ListCatalogItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsCatalogItemsPatch

Updates a catalog item. Partial updating is supported. Non-existing items will be created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRecommendationengineV1beta1CatalogItem = new GoogleCloudRecommendationengineV1beta1CatalogItem();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->categoryHierarchies = [
        new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(),
        new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->description = 'enim';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->id = '0ad2abd4-4269-4802-9502-a94bb4f63c96';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemAttributes->categoricalFeatures = [
        'necessitatibus' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
        'sint' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
        'officia' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemAttributes->numericalFeatures = [
        'debitis' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->itemGroupId = 'a';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->languageCode = 'dolorum';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata = new GoogleCloudRecommendationengineV1beta1ProductCatalogItem();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->availableQuantity = 'in';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->canonicalProductUri = 'in';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->costs = [
        'maiores' => 6994.79,
        'dicta' => 2974.37,
        'cumque' => 8137.98,
        'ea' => 3965.06,
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->currencyCode = 'laborum';
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->exactPrice = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->exactPrice->displayPrice = 8811.04;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->exactPrice->originalPrice = 2497.96;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->images = [
        new GoogleCloudRecommendationengineV1beta1Image(),
        new GoogleCloudRecommendationengineV1beta1Image(),
        new GoogleCloudRecommendationengineV1beta1Image(),
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->priceRange = new GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange();
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->priceRange->max = 3132.18;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->priceRange->min = 8817.36;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->productMetadata->stockState = GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum::BACKORDER;
    $request->googleCloudRecommendationengineV1beta1CatalogItem->tags = [
        'provident',
        'nam',
        'id',
    ];
    $request->googleCloudRecommendationengineV1beta1CatalogItem->title = 'Ms.';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'deserunt';
    $request->key = 'nisi';
    $request->name = 'Ada Moen IV';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->updateMask = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsCatalogItemsPatch($request, $requestSecurity);

    if ($response->googleCloudRecommendationengineV1beta1CatalogItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict

Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1PredictRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1EventDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1FeatureMap;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1FeatureMapStringList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1FeatureMapFloatList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductEventDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecommendationengineV1beta1PredictRequest = new GoogleCloudRecommendationengineV1beta1PredictRequest();
    $request->googleCloudRecommendationengineV1beta1PredictRequest->dryRun = false;
    $request->googleCloudRecommendationengineV1beta1PredictRequest->filter = 'natus';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->labels = [
        'eum' => 'vero',
        'aspernatur' => 'architecto',
        'magnam' => 'et',
    ];
    $request->googleCloudRecommendationengineV1beta1PredictRequest->pageSize = 569965;
    $request->googleCloudRecommendationengineV1beta1PredictRequest->pageToken = 'ullam';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->params = [
        'quos' => 'sint',
        'accusantium' => 'mollitia',
        'reiciendis' => 'mollitia',
    ];
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent = new GoogleCloudRecommendationengineV1beta1UserEvent();
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail();
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventDetail->eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap();
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventDetail->eventAttributes->categoricalFeatures = [
        'eum' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
        'dolor' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
    ];
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventDetail->eventAttributes->numericalFeatures = [
        'odit' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
        'nemo' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
        'quasi' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
        'iure' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
    ];
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventDetail->experimentIds = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventDetail->pageViewId = 'facilis';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventDetail->recommendationToken = 'in';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventDetail->referrerUri = 'architecto';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventDetail->uri = 'http://vacant-flexibility.net';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum::AUTOML;
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventTime = 'repellat';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->eventType = 'quibusdam';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail();
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->cartId = 'sed';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->listId = 'saepe';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->pageCategories = [
        new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(),
        new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(),
        new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(),
        new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(),
    ];
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->productDetails = [
        new GoogleCloudRecommendationengineV1beta1ProductDetail(),
    ];
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction();
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->purchaseTransaction->costs = [
        'praesentium' => 6155.6,
    ];
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->purchaseTransaction->currencyCode = 'magni';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->purchaseTransaction->id = '1cddc692-601f-4b57-ab0d-5f0d30c5fbb2';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->purchaseTransaction->revenue = 3394.04;
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->purchaseTransaction->taxes = [
        'dignissimos' => 543.38,
        'quis' => 1999.96,
        'eos' => 185.21,
    ];
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->productEventDetail->searchQuery = 'dolores';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo();
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->userInfo->directUserRequest = false;
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->userInfo->ipAddress = 'minus';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->userInfo->userAgent = 'quam';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->userInfo->userId = 'dolor';
    $request->googleCloudRecommendationengineV1beta1PredictRequest->userEvent->userInfo->visitorId = 'vero';
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'omnis';
    $request->key = 'facilis';
    $request->name = 'George Sawayn';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict($request, $requestSecurity);

    if ($response->googleCloudRecommendationengineV1beta1PredictResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate

Register an API key for use with predict method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest = new GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest();
    $request->googleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest->predictionApiKeyRegistration = new GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration();
    $request->googleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest->predictionApiKeyRegistration->apiKey = 'asperiores';
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->oauthToken = 'pariatur';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate($request, $requestSecurity);

    if ($response->googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete

Unregister an apiKey from using for predict method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'dolorem';
    $request->key = 'dolor';
    $request->name = 'Tiffany Welch';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList

List the registered apiKeys for use with predict method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'ipsa';
    $request->key = 'iure';
    $request->oauthToken = 'odio';
    $request->pageSize = 311796;
    $request->pageToken = 'accusamus';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList($request, $requestSecurity);

    if ($response->googleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->ets = 'ab';
    $request->fields = 'soluta';
    $request->key = 'dolorum';
    $request->oauthToken = 'iusto';
    $request->parent = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'omnis';
    $request->uri = 'https://safe-world.info';
    $request->userEvent = 'ipsum';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect($request, $requestSecurity);

    if ($response->googleApiHttpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1CatalogInlineSource;
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserEventInlineSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1EventDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductEventDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest = new GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest();
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->errorsConfig = new GoogleCloudRecommendationengineV1beta1ImportErrorsConfig();
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->errorsConfig->gcsPrefix = 'id';
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig = new GoogleCloudRecommendationengineV1beta1InputConfig();
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->bigQuerySource = new GoogleCloudRecommendationengineV1beta1BigQuerySource();
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->bigQuerySource->dataSchema = 'saepe';
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->bigQuerySource->datasetId = 'eius';
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->bigQuerySource->gcsStagingDir = 'aspernatur';
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->bigQuerySource->projectId = 'perferendis';
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->bigQuerySource->tableId = 'amet';
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->catalogInlineSource = new GoogleCloudRecommendationengineV1beta1CatalogInlineSource();
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->catalogInlineSource->catalogItems = [
        new GoogleCloudRecommendationengineV1beta1CatalogItem(),
        new GoogleCloudRecommendationengineV1beta1CatalogItem(),
        new GoogleCloudRecommendationengineV1beta1CatalogItem(),
        new GoogleCloudRecommendationengineV1beta1CatalogItem(),
    ];
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->gcsSource = new GoogleCloudRecommendationengineV1beta1GcsSource();
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->gcsSource->inputUris = [
        'ad',
        'saepe',
        'suscipit',
        'deserunt',
    ];
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->gcsSource->jsonSchema = 'provident';
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->userEventInlineSource = new GoogleCloudRecommendationengineV1beta1UserEventInlineSource();
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->inputConfig->userEventInlineSource->userEvents = [
        new GoogleCloudRecommendationengineV1beta1UserEvent(),
        new GoogleCloudRecommendationengineV1beta1UserEvent(),
    ];
    $request->googleCloudRecommendationengineV1beta1ImportUserEventsRequest->requestId = 'repellendus';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'at';
    $request->key = 'quaerat';
    $request->oauthToken = 'tempora';
    $request->parent = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList

Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'harum';
    $request->fields = 'iusto';
    $request->filter = 'ipsum';
    $request->key = 'quisquam';
    $request->oauthToken = 'tenetur';
    $request->pageSize = 229442;
    $request->pageToken = 'tempore';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList($request, $requestSecurity);

    if ($response->googleCloudRecommendationengineV1beta1ListUserEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRecommendationengineV1beta1PurgeUserEventsRequest = new GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest();
    $request->googleCloudRecommendationengineV1beta1PurgeUserEventsRequest->filter = 'totam';
    $request->googleCloudRecommendationengineV1beta1PurgeUserEventsRequest->force = false;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'expedita';
    $request->fields = 'neque';
    $request->key = 'sed';
    $request->oauthToken = 'vel';
    $request->parent = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin

Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecommendationengineV1beta1RejoinUserEventsRequest = new GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest();
    $request->googleCloudRecommendationengineV1beta1RejoinUserEventsRequest->userEventRejoinScope = GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum::USER_EVENT_REJOIN_SCOPE_UNSPECIFIED;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maxime';
    $request->fields = 'pariatur';
    $request->key = 'soluta';
    $request->oauthToken = 'dicta';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite

Writes a single user event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1EventDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1FeatureMap;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1FeatureMapStringList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1FeatureMapFloatList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductEventDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommendationengineV1beta1UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecommendationengineV1beta1UserEvent = new GoogleCloudRecommendationengineV1beta1UserEvent();
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventDetail = new GoogleCloudRecommendationengineV1beta1EventDetail();
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventDetail->eventAttributes = new GoogleCloudRecommendationengineV1beta1FeatureMap();
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventDetail->eventAttributes->categoricalFeatures = [
        'facilis' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
        'aliquid' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
        'quam' => new GoogleCloudRecommendationengineV1beta1FeatureMapStringList(),
    ];
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventDetail->eventAttributes->numericalFeatures = [
        'temporibus' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
        'qui' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
        'neque' => new GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(),
    ];
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventDetail->experimentIds = [
        'magni',
    ];
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventDetail->pageViewId = 'odio';
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventDetail->recommendationToken = 'sunt';
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventDetail->referrerUri = 'ullam';
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventDetail->uri = 'https://warlike-ankle.net';
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventSource = GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum::ECOMMERCE;
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventTime = 'nobis';
    $request->googleCloudRecommendationengineV1beta1UserEvent->eventType = 'et';
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail = new GoogleCloudRecommendationengineV1beta1ProductEventDetail();
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->cartId = 'saepe';
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->listId = 'ipsum';
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->pageCategories = [
        new GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(),
    ];
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->productDetails = [
        new GoogleCloudRecommendationengineV1beta1ProductDetail(),
        new GoogleCloudRecommendationengineV1beta1ProductDetail(),
        new GoogleCloudRecommendationengineV1beta1ProductDetail(),
    ];
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->purchaseTransaction = new GoogleCloudRecommendationengineV1beta1PurchaseTransaction();
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->purchaseTransaction->costs = [
        'tempore' => 5844.76,
        'aperiam' => 9619.37,
        'dolorem' => 2921.47,
    ];
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->purchaseTransaction->currencyCode = 'labore';
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->purchaseTransaction->id = '3a1108e0-adcf-44b9-a187-9fce953f73ef';
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->purchaseTransaction->revenue = 4922.68;
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->purchaseTransaction->taxes = [
        'distinctio' => 7992.03,
        'odio' => 6304.48,
        'facilis' => 8742.88,
        'ducimus' => 2930.2,
    ];
    $request->googleCloudRecommendationengineV1beta1UserEvent->productEventDetail->searchQuery = 'quibusdam';
    $request->googleCloudRecommendationengineV1beta1UserEvent->userInfo = new GoogleCloudRecommendationengineV1beta1UserInfo();
    $request->googleCloudRecommendationengineV1beta1UserEvent->userInfo->directUserRequest = false;
    $request->googleCloudRecommendationengineV1beta1UserEvent->userInfo->ipAddress = 'illum';
    $request->googleCloudRecommendationengineV1beta1UserEvent->userInfo->userAgent = 'sequi';
    $request->googleCloudRecommendationengineV1beta1UserEvent->userInfo->userId = 'natus';
    $request->googleCloudRecommendationengineV1beta1UserEvent->userInfo->visitorId = 'impedit';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'exercitationem';
    $request->fields = 'nulla';
    $request->key = 'fugit';
    $request->oauthToken = 'porro';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite($request, $requestSecurity);

    if ($response->googleCloudRecommendationengineV1beta1UserEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsList

Lists all the catalog configurations associated with the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->fields = 'ipsam';
    $request->key = 'ea';
    $request->oauthToken = 'aspernatur';
    $request->pageSize = 428224;
    $request->pageToken = 'possimus';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ratione';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsList($request, $requestSecurity);

    if ($response->googleCloudRecommendationengineV1beta1ListCatalogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'ex';
    $request->key = 'nulla';
    $request->name = 'Boyd Heathcote';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommendationengineProjectsLocationsCatalogsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommendationengineProjectsLocationsCatalogsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendationengineProjectsLocationsCatalogsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'ea';
    $request->filter = 'quo';
    $request->key = 'consectetur';
    $request->name = 'Dr. Bruce Hane';
    $request->oauthToken = 'aut';
    $request->pageSize = 11427;
    $request->pageToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new RecommendationengineProjectsLocationsCatalogsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommendationengineProjectsLocationsCatalogsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
