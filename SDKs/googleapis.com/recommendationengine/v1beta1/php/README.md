# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [recommendationengineProjectsLocationsCatalogsCatalogItemsCreate](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemscreate) - Creates a catalog item.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsImport](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemsimport) - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsList](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemslist) - Gets a list of catalog items.
* [recommendationengineProjectsLocationsCatalogsCatalogItemsPatch](docs/projects/README.md#recommendationengineprojectslocationscatalogscatalogitemspatch) - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* [recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresplacementspredict) - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationscreate) - Register an API key for use with predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationsdelete) - Unregister an apiKey from using for predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstorespredictionapikeyregistrationslist) - List the registered apiKeys for use with predict method.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventslist) - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventspurge) - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventsrejoin) - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* [recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite](docs/projects/README.md#recommendationengineprojectslocationscatalogseventstoresusereventswrite) - Writes a single user event.
* [recommendationengineProjectsLocationsCatalogsList](docs/projects/README.md#recommendationengineprojectslocationscatalogslist) - Lists all the catalog configurations associated with the project.
* [recommendationengineProjectsLocationsCatalogsOperationsGet](docs/projects/README.md#recommendationengineprojectslocationscatalogsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [recommendationengineProjectsLocationsCatalogsOperationsList](docs/projects/README.md#recommendationengineprojectslocationscatalogsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
