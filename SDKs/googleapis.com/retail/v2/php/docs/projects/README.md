# projects

### Available Operations

* [retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute](#retailprojectslocationscatalogsattributesconfigaddcatalogattribute) - Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
* [retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute](#retailprojectslocationscatalogsattributesconfigremovecatalogattribute) - Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.
* [retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute](#retailprojectslocationscatalogsattributesconfigreplacecatalogattribute) - Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.
* [retailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces](#retailprojectslocationscatalogsbranchesproductsaddfulfillmentplaces) - We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [retailProjectsLocationsCatalogsBranchesProductsAddLocalInventories](#retailprojectslocationscatalogsbranchesproductsaddlocalinventories) - Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [retailProjectsLocationsCatalogsBranchesProductsCreate](#retailprojectslocationscatalogsbranchesproductscreate) - Creates a Product.
* [retailProjectsLocationsCatalogsBranchesProductsImport](#retailprojectslocationscatalogsbranchesproductsimport) - Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
* [retailProjectsLocationsCatalogsBranchesProductsList](#retailprojectslocationscatalogsbranchesproductslist) - Gets a list of Products.
* [retailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces](#retailprojectslocationscatalogsbranchesproductsremovefulfillmentplaces) - We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [retailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories](#retailprojectslocationscatalogsbranchesproductsremovelocalinventories) - Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [retailProjectsLocationsCatalogsBranchesProductsSetInventory](#retailprojectslocationscatalogsbranchesproductssetinventory) - Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.
* [retailProjectsLocationsCatalogsCompleteQuery](#retailprojectslocationscatalogscompletequery) - Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* [retailProjectsLocationsCatalogsCompletionDataImport](#retailprojectslocationscatalogscompletiondataimport) - Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* [retailProjectsLocationsCatalogsControlsCreate](#retailprojectslocationscatalogscontrolscreate) - Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
* [retailProjectsLocationsCatalogsControlsList](#retailprojectslocationscatalogscontrolslist) - Lists all Controls by their parent Catalog.
* [retailProjectsLocationsCatalogsGetDefaultBranch](#retailprojectslocationscatalogsgetdefaultbranch) - Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
* [retailProjectsLocationsCatalogsList](#retailprojectslocationscatalogslist) - Lists all the Catalogs associated with the project.
* [retailProjectsLocationsCatalogsModelsCreate](#retailprojectslocationscatalogsmodelscreate) - Creates a new model.
* [retailProjectsLocationsCatalogsModelsList](#retailprojectslocationscatalogsmodelslist) - Lists all the models linked to this event store.
* [retailProjectsLocationsCatalogsModelsPause](#retailprojectslocationscatalogsmodelspause) - Pauses the training of an existing model.
* [retailProjectsLocationsCatalogsModelsResume](#retailprojectslocationscatalogsmodelsresume) - Resumes the training of an existing model.
* [retailProjectsLocationsCatalogsModelsTune](#retailprojectslocationscatalogsmodelstune) - Tunes an existing model.
* [retailProjectsLocationsCatalogsServingConfigsAddControl](#retailprojectslocationscatalogsservingconfigsaddcontrol) - Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.
* [retailProjectsLocationsCatalogsServingConfigsCreate](#retailprojectslocationscatalogsservingconfigscreate) - Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.
* [retailProjectsLocationsCatalogsServingConfigsDelete](#retailprojectslocationscatalogsservingconfigsdelete) - Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
* [retailProjectsLocationsCatalogsServingConfigsList](#retailprojectslocationscatalogsservingconfigslist) - Lists all ServingConfigs linked to this catalog.
* [retailProjectsLocationsCatalogsServingConfigsPatch](#retailprojectslocationscatalogsservingconfigspatch) - Updates a ServingConfig.
* [retailProjectsLocationsCatalogsServingConfigsPredict](#retailprojectslocationscatalogsservingconfigspredict) - Makes a recommendation prediction.
* [retailProjectsLocationsCatalogsServingConfigsRemoveControl](#retailprojectslocationscatalogsservingconfigsremovecontrol) - Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.
* [retailProjectsLocationsCatalogsServingConfigsSearch](#retailprojectslocationscatalogsservingconfigssearch) - Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* [retailProjectsLocationsCatalogsSetDefaultBranch](#retailprojectslocationscatalogssetdefaultbranch) - Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.
* [retailProjectsLocationsCatalogsUserEventsCollect](#retailprojectslocationscatalogsusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* [retailProjectsLocationsCatalogsUserEventsImport](#retailprojectslocationscatalogsusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.
* [retailProjectsLocationsCatalogsUserEventsPurge](#retailprojectslocationscatalogsusereventspurge) - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* [retailProjectsLocationsCatalogsUserEventsRejoin](#retailprojectslocationscatalogsusereventsrejoin) - Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.
* [retailProjectsLocationsCatalogsUserEventsWrite](#retailprojectslocationscatalogsusereventswrite) - Writes a single user event.
* [retailProjectsOperationsGet](#retailprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [retailProjectsOperationsList](#retailprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute

Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2AddCatalogAttributeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput = new GoogleCloudRetailV2AddCatalogAttributeRequestInput();
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute = new GoogleCloudRetailV2CatalogAttributeInput();
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->dynamicFacetableOption = GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum::DYNAMIC_FACETABLE_ENABLED;
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->exactSearchableOption = GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum::EXACT_SEARCHABLE_ENABLED;
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->indexableOption = GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum::INDEXABLE_DISABLED;
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->key = 'placeat';
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->retrievableOption = GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum::RETRIEVABLE_ENABLED;
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->searchableOption = GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum::SEARCHABLE_ENABLED;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->attributesConfig = 'recusandae';
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2AttributesConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute

Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RemoveCatalogAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2RemoveCatalogAttributeRequest = new GoogleCloudRetailV2RemoveCatalogAttributeRequest();
    $request->googleCloudRetailV2RemoveCatalogAttributeRequest->key = 'sapiente';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->attributesConfig = 'at';
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2AttributesConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute

Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2ReplaceCatalogAttributeRequestInput = new GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput();
    $request->googleCloudRetailV2ReplaceCatalogAttributeRequestInput->catalogAttribute = new GoogleCloudRetailV2CatalogAttributeInput();
    $request->googleCloudRetailV2ReplaceCatalogAttributeRequestInput->catalogAttribute->dynamicFacetableOption = GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum::DYNAMIC_FACETABLE_DISABLED;
    $request->googleCloudRetailV2ReplaceCatalogAttributeRequestInput->catalogAttribute->exactSearchableOption = GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum::EXACT_SEARCHABLE_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2ReplaceCatalogAttributeRequestInput->catalogAttribute->indexableOption = GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum::INDEXABLE_DISABLED;
    $request->googleCloudRetailV2ReplaceCatalogAttributeRequestInput->catalogAttribute->key = 'officia';
    $request->googleCloudRetailV2ReplaceCatalogAttributeRequestInput->catalogAttribute->retrievableOption = GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum::RETRIEVABLE_ENABLED;
    $request->googleCloudRetailV2ReplaceCatalogAttributeRequestInput->catalogAttribute->searchableOption = GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum::SEARCHABLE_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2ReplaceCatalogAttributeRequestInput->updateMask = 'deleniti';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->attributesConfig = 'totam';
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2AttributesConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces

We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2AddFulfillmentPlacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2AddFulfillmentPlacesRequest = new GoogleCloudRetailV2AddFulfillmentPlacesRequest();
    $request->googleCloudRetailV2AddFulfillmentPlacesRequest->addTime = 'ipsum';
    $request->googleCloudRetailV2AddFulfillmentPlacesRequest->allowMissing = false;
    $request->googleCloudRetailV2AddFulfillmentPlacesRequest->placeIds = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->googleCloudRetailV2AddFulfillmentPlacesRequest->type = 'natus';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->product = 'saepe';
    $request->quotaUser = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsBranchesProductsAddLocalInventories

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2AddLocalInventoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2LocalInventory;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Interval;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2AddLocalInventoriesRequest = new GoogleCloudRetailV2AddLocalInventoriesRequest();
    $request->googleCloudRetailV2AddLocalInventoriesRequest->addMask = 'iure';
    $request->googleCloudRetailV2AddLocalInventoriesRequest->addTime = 'saepe';
    $request->googleCloudRetailV2AddLocalInventoriesRequest->allowMissing = false;
    $request->googleCloudRetailV2AddLocalInventoriesRequest->localInventories = [
        new GoogleCloudRetailV2LocalInventory(),
        new GoogleCloudRetailV2LocalInventory(),
        new GoogleCloudRetailV2LocalInventory(),
    ];
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'est';
    $request->key = 'mollitia';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->product = 'dolores';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsAddLocalInventories($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsBranchesProductsCreate

Creates a Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Audience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2FulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Interval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Promotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Rating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2ProductInput = new GoogleCloudRetailV2ProductInput();
    $request->googleCloudRetailV2ProductInput->attributes = [
        'omnis' => new GoogleCloudRetailV2CustomAttribute(),
        'nemo' => new GoogleCloudRetailV2CustomAttribute(),
    ];
    $request->googleCloudRetailV2ProductInput->audience = new GoogleCloudRetailV2Audience();
    $request->googleCloudRetailV2ProductInput->audience->ageGroups = [
        'excepturi',
        'accusantium',
    ];
    $request->googleCloudRetailV2ProductInput->audience->genders = [
        'culpa',
        'doloribus',
    ];
    $request->googleCloudRetailV2ProductInput->availability = GoogleCloudRetailV2ProductAvailabilityEnum::BACKORDER;
    $request->googleCloudRetailV2ProductInput->availableQuantity = 102044;
    $request->googleCloudRetailV2ProductInput->availableTime = 'mollitia';
    $request->googleCloudRetailV2ProductInput->brands = [
        'culpa',
    ];
    $request->googleCloudRetailV2ProductInput->categories = [
        'repellat',
    ];
    $request->googleCloudRetailV2ProductInput->collectionMemberIds = [
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->googleCloudRetailV2ProductInput->colorInfo = new GoogleCloudRetailV2ColorInfo();
    $request->googleCloudRetailV2ProductInput->colorInfo->colorFamilies = [
        'molestiae',
        'velit',
    ];
    $request->googleCloudRetailV2ProductInput->colorInfo->colors = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->googleCloudRetailV2ProductInput->conditions = [
        'animi',
        'enim',
        'odit',
    ];
    $request->googleCloudRetailV2ProductInput->description = 'quo';
    $request->googleCloudRetailV2ProductInput->expireTime = 'sequi';
    $request->googleCloudRetailV2ProductInput->fulfillmentInfo = [
        new GoogleCloudRetailV2FulfillmentInfo(),
        new GoogleCloudRetailV2FulfillmentInfo(),
        new GoogleCloudRetailV2FulfillmentInfo(),
        new GoogleCloudRetailV2FulfillmentInfo(),
    ];
    $request->googleCloudRetailV2ProductInput->gtin = 'ipsam';
    $request->googleCloudRetailV2ProductInput->id = 'ad019da1-ffe7-48f0-97b0-074f15471b5e';
    $request->googleCloudRetailV2ProductInput->images = [
        new GoogleCloudRetailV2Image(),
        new GoogleCloudRetailV2Image(),
    ];
    $request->googleCloudRetailV2ProductInput->languageCode = 'repudiandae';
    $request->googleCloudRetailV2ProductInput->materials = [
        'ipsum',
    ];
    $request->googleCloudRetailV2ProductInput->name = 'Virgil Mante';
    $request->googleCloudRetailV2ProductInput->patterns = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->googleCloudRetailV2ProductInput->priceInfo = new GoogleCloudRetailV2PriceInfo();
    $request->googleCloudRetailV2ProductInput->priceInfo->cost = 9211.58;
    $request->googleCloudRetailV2ProductInput->priceInfo->currencyCode = 'sint';
    $request->googleCloudRetailV2ProductInput->priceInfo->originalPrice = 831.12;
    $request->googleCloudRetailV2ProductInput->priceInfo->price = 9292.97;
    $request->googleCloudRetailV2ProductInput->priceInfo->priceEffectiveTime = 'incidunt';
    $request->googleCloudRetailV2ProductInput->priceInfo->priceExpireTime = 'enim';
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange = new GoogleCloudRetailV2PriceInfoPriceRange();
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange->originalPrice = new GoogleCloudRetailV2Interval();
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange->originalPrice->exclusiveMaximum = 93.56;
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange->originalPrice->exclusiveMinimum = 6674.11;
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange->originalPrice->maximum = 8423.42;
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange->originalPrice->minimum = 1317.97;
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange->price = new GoogleCloudRetailV2Interval();
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange->price->exclusiveMaximum = 6471.74;
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange->price->exclusiveMinimum = 7163.27;
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange->price->maximum = 8413.86;
    $request->googleCloudRetailV2ProductInput->priceInfo->priceRange->price->minimum = 2894.06;
    $request->googleCloudRetailV2ProductInput->primaryProductId = 'modi';
    $request->googleCloudRetailV2ProductInput->promotions = [
        new GoogleCloudRetailV2Promotion(),
    ];
    $request->googleCloudRetailV2ProductInput->publishTime = 'aliquid';
    $request->googleCloudRetailV2ProductInput->rating = new GoogleCloudRetailV2Rating();
    $request->googleCloudRetailV2ProductInput->rating->averageRating = 5865.13;
    $request->googleCloudRetailV2ProductInput->rating->ratingCount = 552822;
    $request->googleCloudRetailV2ProductInput->rating->ratingHistogram = [
        164940,
    ];
    $request->googleCloudRetailV2ProductInput->retrievableFields = 'assumenda';
    $request->googleCloudRetailV2ProductInput->sizes = [
        'alias',
        'fugit',
    ];
    $request->googleCloudRetailV2ProductInput->tags = [
        'excepturi',
        'tempora',
        'facilis',
    ];
    $request->googleCloudRetailV2ProductInput->title = 'Miss';
    $request->googleCloudRetailV2ProductInput->ttl = 'labore';
    $request->googleCloudRetailV2ProductInput->type = GoogleCloudRetailV2ProductTypeEnum::COLLECTION;
    $request->googleCloudRetailV2ProductInput->uri = 'http://excellent-roll.name';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->key = 'officia';
    $request->oauthToken = 'dolor';
    $request->parent = 'debitis';
    $request->prettyPrint = false;
    $request->productId = 'a';
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'in';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsCreate($request, $requestSecurity);

    if ($response->googleCloudRetailV2Product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsBranchesProductsImport

Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ImportProductsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ImportErrorsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductInputConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductInlineSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Audience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2FulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Interval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Promotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Rating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2ImportProductsRequestInput = new GoogleCloudRetailV2ImportProductsRequestInput();
    $request->googleCloudRetailV2ImportProductsRequestInput->errorsConfig = new GoogleCloudRetailV2ImportErrorsConfig();
    $request->googleCloudRetailV2ImportProductsRequestInput->errorsConfig->gcsPrefix = 'maiores';
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig = new GoogleCloudRetailV2ProductInputConfigInput();
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->bigQuerySource = new GoogleCloudRetailV2BigQuerySource();
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->bigQuerySource->dataSchema = 'rerum';
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->bigQuerySource->datasetId = 'dicta';
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->bigQuerySource->gcsStagingDir = 'magnam';
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate->day = 767024;
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate->month = 813798;
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate->year = 411820;
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->bigQuerySource->projectId = 'aliquid';
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->bigQuerySource->tableId = 'laborum';
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->gcsSource = new GoogleCloudRetailV2GcsSource();
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->gcsSource->dataSchema = 'accusamus';
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->gcsSource->inputUris = [
        'occaecati',
    ];
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->productInlineSource = new GoogleCloudRetailV2ProductInlineSourceInput();
    $request->googleCloudRetailV2ImportProductsRequestInput->inputConfig->productInlineSource->products = [
        new GoogleCloudRetailV2ProductInput(),
        new GoogleCloudRetailV2ProductInput(),
    ];
    $request->googleCloudRetailV2ImportProductsRequestInput->notificationPubsubTopic = 'accusamus';
    $request->googleCloudRetailV2ImportProductsRequestInput->reconciliationMode = GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum::FULL;
    $request->googleCloudRetailV2ImportProductsRequestInput->requestId = 'quidem';
    $request->googleCloudRetailV2ImportProductsRequestInput->updateMask = 'provident';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'deleniti';
    $request->key = 'sapiente';
    $request->oauthToken = 'amet';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsBranchesProductsList

Gets a list of Products.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'magnam';
    $request->filter = 'distinctio';
    $request->key = 'id';
    $request->oauthToken = 'labore';
    $request->pageSize = 290077;
    $request->pageToken = 'suscipit';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->readMask = 'eum';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2ListProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces

We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RemoveFulfillmentPlacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2RemoveFulfillmentPlacesRequest = new GoogleCloudRetailV2RemoveFulfillmentPlacesRequest();
    $request->googleCloudRetailV2RemoveFulfillmentPlacesRequest->allowMissing = false;
    $request->googleCloudRetailV2RemoveFulfillmentPlacesRequest->placeIds = [
        'et',
        'excepturi',
    ];
    $request->googleCloudRetailV2RemoveFulfillmentPlacesRequest->removeTime = 'ullam';
    $request->googleCloudRetailV2RemoveFulfillmentPlacesRequest->type = 'provident';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'mollitia';
    $request->key = 'reiciendis';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->product = 'ad';
    $request->quotaUser = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories

Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RemoveLocalInventoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2RemoveLocalInventoriesRequest = new GoogleCloudRetailV2RemoveLocalInventoriesRequest();
    $request->googleCloudRetailV2RemoveLocalInventoriesRequest->allowMissing = false;
    $request->googleCloudRetailV2RemoveLocalInventoriesRequest->placeIds = [
        'quasi',
        'iure',
    ];
    $request->googleCloudRetailV2RemoveLocalInventoriesRequest->removeTime = 'doloribus';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'deleniti';
    $request->key = 'facilis';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->product = 'architecto';
    $request->quotaUser = 'architecto';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsBranchesProductsSetInventory

Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SetInventoryRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Audience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2FulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Interval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Promotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Rating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2SetInventoryRequestInput = new GoogleCloudRetailV2SetInventoryRequestInput();
    $request->googleCloudRetailV2SetInventoryRequestInput->allowMissing = false;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory = new GoogleCloudRetailV2ProductInput();
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->attributes = [
        'repellat' => new GoogleCloudRetailV2CustomAttribute(),
        'quibusdam' => new GoogleCloudRetailV2CustomAttribute(),
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->audience = new GoogleCloudRetailV2Audience();
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->audience->ageGroups = [
        'saepe',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->audience->genders = [
        'accusantium',
        'consequuntur',
        'praesentium',
        'natus',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->availability = GoogleCloudRetailV2ProductAvailabilityEnum::AVAILABILITY_UNSPECIFIED;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->availableQuantity = 123820;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->availableTime = 'quo';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->brands = [
        'pariatur',
        'maxime',
        'ea',
        'excepturi',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->categories = [
        'ea',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->collectionMemberIds = [
        'ab',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->colorInfo = new GoogleCloudRetailV2ColorInfo();
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->colorInfo->colorFamilies = [
        'quidem',
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->colorInfo->colors = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->conditions = [
        'perferendis',
        'fugiat',
        'amet',
        'aut',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->description = 'cumque';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->expireTime = 'corporis';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->fulfillmentInfo = [
        new GoogleCloudRetailV2FulfillmentInfo(),
        new GoogleCloudRetailV2FulfillmentInfo(),
        new GoogleCloudRetailV2FulfillmentInfo(),
        new GoogleCloudRetailV2FulfillmentInfo(),
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->gtin = 'libero';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->id = 'b2587053-202c-473d-9fe9-b90c28909b3f';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->images = [
        new GoogleCloudRetailV2Image(),
        new GoogleCloudRetailV2Image(),
        new GoogleCloudRetailV2Image(),
        new GoogleCloudRetailV2Image(),
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->languageCode = 'modi';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->materials = [
        'dolorum',
        'deleniti',
        'pariatur',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->name = 'Loren Renner';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->patterns = [
        'aliquid',
        'dolorem',
        'dolorem',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo = new GoogleCloudRetailV2PriceInfo();
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->cost = 2224.43;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->currencyCode = 'qui';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->originalPrice = 2187.49;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->price = 9443.73;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceEffectiveTime = 'excepturi';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceExpireTime = 'cum';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange = new GoogleCloudRetailV2PriceInfoPriceRange();
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice = new GoogleCloudRetailV2Interval();
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->exclusiveMaximum = 4521.09;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->exclusiveMinimum = 4904.59;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->maximum = 9702.37;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->minimum = 2274.14;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange->price = new GoogleCloudRetailV2Interval();
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange->price->exclusiveMaximum = 6805.45;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange->price->exclusiveMinimum = 2543.56;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange->price->maximum = 852.95;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->priceInfo->priceRange->price->minimum = 580.29;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->primaryProductId = 'ipsa';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->promotions = [
        new GoogleCloudRetailV2Promotion(),
        new GoogleCloudRetailV2Promotion(),
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->publishTime = 'odio';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->rating = new GoogleCloudRetailV2Rating();
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->rating->averageRating = 3117.96;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->rating->ratingCount = 881005;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->rating->ratingHistogram = [
        976405,
        377752,
        617658,
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->retrievableFields = 'eos';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->sizes = [
        'sit',
        'fugiat',
        'ab',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->tags = [
        'dolorum',
        'iusto',
        'voluptate',
    ];
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->title = 'Miss';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->ttl = 'deleniti';
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->type = GoogleCloudRetailV2ProductTypeEnum::VARIANT;
    $request->googleCloudRetailV2SetInventoryRequestInput->inventory->uri = 'https://safe-world.info';
    $request->googleCloudRetailV2SetInventoryRequestInput->setMask = 'ipsum';
    $request->googleCloudRetailV2SetInventoryRequestInput->setTime = 'voluptate';
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->name = 'Marianne Thompson';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsSetInventory($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsCompleteQuery

Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsCompleteQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsCompleteQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsCompleteQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->catalog = 'at';
    $request->dataset = 'quaerat';
    $request->deviceType = 'tempora';
    $request->entity = 'vel';
    $request->fields = 'quod';
    $request->key = 'officiis';
    $request->languageCodes = [
        'dolorum',
    ];
    $request->maxSuggestions = 952792;
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->query = 'harum';
    $request->quotaUser = 'iusto';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quisquam';
    $request->visitorId = 'tenetur';

    $requestSecurity = new RetailProjectsLocationsCatalogsCompleteQuerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsCompleteQuery($request, $requestSecurity);

    if ($response->googleCloudRetailV2CompleteQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsCompletionDataImport

Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsCompletionDataImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ImportCompletionDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CompletionDataInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsCompletionDataImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsCompletionDataImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2ImportCompletionDataRequest = new GoogleCloudRetailV2ImportCompletionDataRequest();
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig = new GoogleCloudRetailV2CompletionDataInputConfig();
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig->bigQuerySource = new GoogleCloudRetailV2BigQuerySource();
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig->bigQuerySource->dataSchema = 'tempore';
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig->bigQuerySource->datasetId = 'accusamus';
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig->bigQuerySource->gcsStagingDir = 'numquam';
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate->day = 313692;
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate->month = 213312;
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate->year = 957451;
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig->bigQuerySource->projectId = 'totam';
    $request->googleCloudRetailV2ImportCompletionDataRequest->inputConfig->bigQuerySource->tableId = 'nihil';
    $request->googleCloudRetailV2ImportCompletionDataRequest->notificationPubsubTopic = 'sit';
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sed';
    $request->fields = 'vel';
    $request->key = 'libero';
    $request->oauthToken = 'voluptas';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new RetailProjectsLocationsCatalogsCompletionDataImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsCompletionDataImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsControlsCreate

Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsControlsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ControlInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Rule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RuleBoostAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Condition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ConditionTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ConditionQueryTerm;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RuleDoNotAssociateAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RuleFilterAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RuleIgnoreAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RuleOnewaySynonymsAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RuleRedirectAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RuleReplacementAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RuleTwowaySynonymsAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ControlSolutionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsControlsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsControlsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2ControlInput = new GoogleCloudRetailV2ControlInput();
    $request->googleCloudRetailV2ControlInput->displayName = 'cupiditate';
    $request->googleCloudRetailV2ControlInput->name = 'Miss Jody Rogahn';
    $request->googleCloudRetailV2ControlInput->rule = new GoogleCloudRetailV2Rule();
    $request->googleCloudRetailV2ControlInput->rule->boostAction = new GoogleCloudRetailV2RuleBoostAction();
    $request->googleCloudRetailV2ControlInput->rule->boostAction->boost = 2768.94;
    $request->googleCloudRetailV2ControlInput->rule->boostAction->productsFilter = 'aspernatur';
    $request->googleCloudRetailV2ControlInput->rule->condition = new GoogleCloudRetailV2Condition();
    $request->googleCloudRetailV2ControlInput->rule->condition->activeTimeRange = [
        new GoogleCloudRetailV2ConditionTimeRange(),
    ];
    $request->googleCloudRetailV2ControlInput->rule->condition->queryTerms = [
        new GoogleCloudRetailV2ConditionQueryTerm(),
        new GoogleCloudRetailV2ConditionQueryTerm(),
        new GoogleCloudRetailV2ConditionQueryTerm(),
    ];
    $request->googleCloudRetailV2ControlInput->rule->doNotAssociateAction = new GoogleCloudRetailV2RuleDoNotAssociateAction();
    $request->googleCloudRetailV2ControlInput->rule->doNotAssociateAction->doNotAssociateTerms = [
        'aliquid',
        'quam',
        'molestias',
    ];
    $request->googleCloudRetailV2ControlInput->rule->doNotAssociateAction->queryTerms = [
        'qui',
        'neque',
        'fugit',
        'magni',
    ];
    $request->googleCloudRetailV2ControlInput->rule->doNotAssociateAction->terms = [
        'sunt',
        'ullam',
    ];
    $request->googleCloudRetailV2ControlInput->rule->filterAction = new GoogleCloudRetailV2RuleFilterAction();
    $request->googleCloudRetailV2ControlInput->rule->filterAction->filter = 'nam';
    $request->googleCloudRetailV2ControlInput->rule->ignoreAction = new GoogleCloudRetailV2RuleIgnoreAction();
    $request->googleCloudRetailV2ControlInput->rule->ignoreAction->ignoreTerms = [
        'voluptatem',
        'cumque',
        'soluta',
        'nobis',
    ];
    $request->googleCloudRetailV2ControlInput->rule->onewaySynonymsAction = new GoogleCloudRetailV2RuleOnewaySynonymsAction();
    $request->googleCloudRetailV2ControlInput->rule->onewaySynonymsAction->onewayTerms = [
        'saepe',
    ];
    $request->googleCloudRetailV2ControlInput->rule->onewaySynonymsAction->queryTerms = [
        'veritatis',
    ];
    $request->googleCloudRetailV2ControlInput->rule->onewaySynonymsAction->synonyms = [
        'quos',
        'tempore',
        'cupiditate',
    ];
    $request->googleCloudRetailV2ControlInput->rule->redirectAction = new GoogleCloudRetailV2RuleRedirectAction();
    $request->googleCloudRetailV2ControlInput->rule->redirectAction->redirectUri = 'aperiam';
    $request->googleCloudRetailV2ControlInput->rule->replacementAction = new GoogleCloudRetailV2RuleReplacementAction();
    $request->googleCloudRetailV2ControlInput->rule->replacementAction->queryTerms = [
        'dolorem',
        'dolore',
        'labore',
        'adipisci',
    ];
    $request->googleCloudRetailV2ControlInput->rule->replacementAction->replacementTerm = 'dolorum';
    $request->googleCloudRetailV2ControlInput->rule->replacementAction->term = 'architecto';
    $request->googleCloudRetailV2ControlInput->rule->twowaySynonymsAction = new GoogleCloudRetailV2RuleTwowaySynonymsAction();
    $request->googleCloudRetailV2ControlInput->rule->twowaySynonymsAction->synonyms = [
        'aut',
    ];
    $request->googleCloudRetailV2ControlInput->searchSolutionUseCase = [
        GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum::SEARCH_SOLUTION_USE_CASE_BROWSE,
        GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum::SEARCH_SOLUTION_USE_CASE_UNSPECIFIED,
        GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum::SEARCH_SOLUTION_USE_CASE_BROWSE,
    ];
    $request->googleCloudRetailV2ControlInput->solutionTypes = [
        GoogleCloudRetailV2ControlSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
        GoogleCloudRetailV2ControlSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
        GoogleCloudRetailV2ControlSolutionTypesEnum::SOLUTION_TYPE_UNSPECIFIED,
        GoogleCloudRetailV2ControlSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->controlId = 'laudantium';
    $request->fields = 'odio';
    $request->key = 'occaecati';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new RetailProjectsLocationsCatalogsControlsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsControlsCreate($request, $requestSecurity);

    if ($response->googleCloudRetailV2Control !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsControlsList

Lists all Controls by their parent Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsControlsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsControlsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsControlsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consectetur';
    $request->fields = 'vero';
    $request->filter = 'tenetur';
    $request->key = 'dignissimos';
    $request->oauthToken = 'hic';
    $request->pageSize = 715561;
    $request->pageToken = 'quod';
    $request->parent = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new RetailProjectsLocationsCatalogsControlsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsControlsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2ListControlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsGetDefaultBranch

Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsGetDefaultBranchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsGetDefaultBranchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsGetDefaultBranchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->catalog = 'sequi';
    $request->fields = 'natus';
    $request->key = 'impedit';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new RetailProjectsLocationsCatalogsGetDefaultBranchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsGetDefaultBranch($request, $requestSecurity);

    if ($response->googleCloudRetailV2GetDefaultBranchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsList

Lists all the Catalogs associated with the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloribus';
    $request->fields = 'iusto';
    $request->key = 'eligendi';
    $request->oauthToken = 'ducimus';
    $request->pageSize = 4048;
    $request->pageToken = 'officia';
    $request->parent = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new RetailProjectsLocationsCatalogsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2ListCatalogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsModelsCreate

Creates a new model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ModelInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ModelFilteringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ModelModelFeaturesConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ModelPeriodicTuningStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ModelTrainingStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsModelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2ModelInput = new GoogleCloudRetailV2ModelInput();
    $request->googleCloudRetailV2ModelInput->displayName = 'possimus';
    $request->googleCloudRetailV2ModelInput->filteringOption = GoogleCloudRetailV2ModelFilteringOptionEnum::RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2ModelInput->modelFeaturesConfig = new GoogleCloudRetailV2ModelModelFeaturesConfig();
    $request->googleCloudRetailV2ModelInput->modelFeaturesConfig->frequentlyBoughtTogetherConfig = new GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig();
    $request->googleCloudRetailV2ModelInput->modelFeaturesConfig->frequentlyBoughtTogetherConfig->contextProductsType = GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum::CONTEXT_PRODUCTS_TYPE_UNSPECIFIED;
    $request->googleCloudRetailV2ModelInput->name = 'Mabel Cartwright';
    $request->googleCloudRetailV2ModelInput->optimizationObjective = 'quasi';
    $request->googleCloudRetailV2ModelInput->periodicTuningState = GoogleCloudRetailV2ModelPeriodicTuningStateEnum::PERIODIC_TUNING_DISABLED;
    $request->googleCloudRetailV2ModelInput->trainingState = GoogleCloudRetailV2ModelTrainingStateEnum::TRAINING;
    $request->googleCloudRetailV2ModelInput->type = 'excepturi';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->dryRun = false;
    $request->fields = 'quisquam';
    $request->key = 'saepe';
    $request->oauthToken = 'ea';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsModelsList

Lists all the models linked to this event store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsModelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->fields = 'consectetur';
    $request->key = 'recusandae';
    $request->oauthToken = 'aspernatur';
    $request->pageSize = 325310;
    $request->pageToken = 'eaque';
    $request->parent = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2ListModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsModelsPause

Pauses the training of an existing model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsPauseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsPauseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsModelsPauseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'aliquam' => 'fugit',
        'accusamus' => 'inventore',
        'non' => 'et',
        'dolorum' => 'laborum',
    ];
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

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsPause($request, $requestSecurity);

    if ($response->googleCloudRetailV2Model !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsModelsResume

Resumes the training of an existing model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsResumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsModelsResumeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'molestiae' => 'magnam',
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'esse';
    $request->key = 'rem';
    $request->name = 'Mitchell Predovic';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsResume($request, $requestSecurity);

    if ($response->googleCloudRetailV2Model !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsModelsTune

Tunes an existing model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsTuneRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsTuneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsModelsTuneRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'veritatis' => 'ipsa',
        'id' => 'quidem',
        'neque' => 'quo',
        'illum' => 'quo',
    ];
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eos';
    $request->fields = 'voluptas';
    $request->key = 'ab';
    $request->name = 'William Goodwin';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsTuneSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsTune($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsServingConfigsAddControl

Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsAddControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2AddControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsAddControlRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2AddControlRequest = new GoogleCloudRetailV2AddControlRequest();
    $request->googleCloudRetailV2AddControlRequest->controlId = 'aperiam';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'inventore';
    $request->key = 'nihil';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->servingConfig = 'aliquam';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsAddControl($request, $requestSecurity);

    if ($response->googleCloudRetailV2ServingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsServingConfigsCreate

Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ServingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ServingConfigDiversityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestDynamicFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestPersonalizationSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ServingConfigSolutionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2ServingConfig = new GoogleCloudRetailV2ServingConfig();
    $request->googleCloudRetailV2ServingConfig->boostControlIds = [
        'dolores',
        'deserunt',
        'molestiae',
        'accusantium',
    ];
    $request->googleCloudRetailV2ServingConfig->displayName = 'porro';
    $request->googleCloudRetailV2ServingConfig->diversityLevel = 'eum';
    $request->googleCloudRetailV2ServingConfig->diversityType = GoogleCloudRetailV2ServingConfigDiversityTypeEnum::RULE_BASED_DIVERSITY;
    $request->googleCloudRetailV2ServingConfig->doNotAssociateControlIds = [
        'consequuntur',
        'deleniti',
        'fugit',
    ];
    $request->googleCloudRetailV2ServingConfig->dynamicFacetSpec = new GoogleCloudRetailV2SearchRequestDynamicFacetSpec();
    $request->googleCloudRetailV2ServingConfig->dynamicFacetSpec->mode = GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum::ENABLED;
    $request->googleCloudRetailV2ServingConfig->enableCategoryFilterLevel = 'mollitia';
    $request->googleCloudRetailV2ServingConfig->facetControlIds = [
        'atque',
        'explicabo',
    ];
    $request->googleCloudRetailV2ServingConfig->filterControlIds = [
        'nisi',
        'fugit',
    ];
    $request->googleCloudRetailV2ServingConfig->ignoreControlIds = [
        'consequuntur',
        'ratione',
        'explicabo',
        'saepe',
    ];
    $request->googleCloudRetailV2ServingConfig->modelId = 'occaecati';
    $request->googleCloudRetailV2ServingConfig->name = 'Carl Koch';
    $request->googleCloudRetailV2ServingConfig->onewaySynonymsControlIds = [
        'esse',
    ];
    $request->googleCloudRetailV2ServingConfig->personalizationSpec = new GoogleCloudRetailV2SearchRequestPersonalizationSpec();
    $request->googleCloudRetailV2ServingConfig->personalizationSpec->mode = GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum::DISABLED;
    $request->googleCloudRetailV2ServingConfig->priceRerankingLevel = 'nam';
    $request->googleCloudRetailV2ServingConfig->redirectControlIds = [
        'aliquid',
        'quasi',
        'saepe',
        'vel',
    ];
    $request->googleCloudRetailV2ServingConfig->replacementControlIds = [
        'molestiae',
        'rerum',
        'occaecati',
    ];
    $request->googleCloudRetailV2ServingConfig->solutionTypes = [
        GoogleCloudRetailV2ServingConfigSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
        GoogleCloudRetailV2ServingConfigSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
    ];
    $request->googleCloudRetailV2ServingConfig->twowaySynonymsControlIds = [
        'culpa',
    ];
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'consequuntur';
    $request->key = 'consequatur';
    $request->oauthToken = 'minus';
    $request->parent = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->servingConfigId = 'consectetur';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudRetailV2ServingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsServingConfigsDelete

Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quas';
    $request->fields = 'esse';
    $request->key = 'quasi';
    $request->name = 'Jeremiah Mayer';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsServingConfigsList

Lists all ServingConfigs linked to this catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'similique';
    $request->fields = 'culpa';
    $request->key = 'aliquid';
    $request->oauthToken = 'tenetur';
    $request->pageSize = 62713;
    $request->pageToken = 'earum';
    $request->parent = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2ListServingConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsServingConfigsPatch

Updates a ServingConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ServingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ServingConfigDiversityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestDynamicFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestPersonalizationSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ServingConfigSolutionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2ServingConfig = new GoogleCloudRetailV2ServingConfig();
    $request->googleCloudRetailV2ServingConfig->boostControlIds = [
        'accusantium',
        'aliquam',
        'sapiente',
    ];
    $request->googleCloudRetailV2ServingConfig->displayName = 'dicta';
    $request->googleCloudRetailV2ServingConfig->diversityLevel = 'ullam';
    $request->googleCloudRetailV2ServingConfig->diversityType = GoogleCloudRetailV2ServingConfigDiversityTypeEnum::RULE_BASED_DIVERSITY;
    $request->googleCloudRetailV2ServingConfig->doNotAssociateControlIds = [
        'nisi',
        'aut',
    ];
    $request->googleCloudRetailV2ServingConfig->dynamicFacetSpec = new GoogleCloudRetailV2SearchRequestDynamicFacetSpec();
    $request->googleCloudRetailV2ServingConfig->dynamicFacetSpec->mode = GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum::DISABLED;
    $request->googleCloudRetailV2ServingConfig->enableCategoryFilterLevel = 'qui';
    $request->googleCloudRetailV2ServingConfig->facetControlIds = [
        'ex',
        'deleniti',
        'itaque',
        'dolorum',
    ];
    $request->googleCloudRetailV2ServingConfig->filterControlIds = [
        'omnis',
    ];
    $request->googleCloudRetailV2ServingConfig->ignoreControlIds = [
        'quasi',
        'at',
        'et',
        'voluptate',
    ];
    $request->googleCloudRetailV2ServingConfig->modelId = 'ipsa';
    $request->googleCloudRetailV2ServingConfig->name = 'Marie Feest';
    $request->googleCloudRetailV2ServingConfig->onewaySynonymsControlIds = [
        'accusantium',
        'rem',
        'aut',
        'laudantium',
    ];
    $request->googleCloudRetailV2ServingConfig->personalizationSpec = new GoogleCloudRetailV2SearchRequestPersonalizationSpec();
    $request->googleCloudRetailV2ServingConfig->personalizationSpec->mode = GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum::AUTO;
    $request->googleCloudRetailV2ServingConfig->priceRerankingLevel = 'mollitia';
    $request->googleCloudRetailV2ServingConfig->redirectControlIds = [
        'corrupti',
    ];
    $request->googleCloudRetailV2ServingConfig->replacementControlIds = [
        'voluptatem',
        'dolor',
    ];
    $request->googleCloudRetailV2ServingConfig->solutionTypes = [
        GoogleCloudRetailV2ServingConfigSolutionTypesEnum::SOLUTION_TYPE_UNSPECIFIED,
        GoogleCloudRetailV2ServingConfigSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
        GoogleCloudRetailV2ServingConfigSolutionTypesEnum::SOLUTION_TYPE_UNSPECIFIED,
    ];
    $request->googleCloudRetailV2ServingConfig->twowaySynonymsControlIds = [
        'aut',
        'dignissimos',
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'velit';
    $request->key = 'voluptatibus';
    $request->name = 'Tabitha Bayer';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->updateMask = 'officia';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsPatch($request, $requestSecurity);

    if ($response->googleCloudRetailV2ServingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsServingConfigsPredict

Makes a recommendation prediction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsPredictRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PredictRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2UserEventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CompletionDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductDetailInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Audience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2FulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Interval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Promotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Rating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsPredictSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsPredictRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2PredictRequestInput = new GoogleCloudRetailV2PredictRequestInput();
    $request->googleCloudRetailV2PredictRequestInput->filter = 'asperiores';
    $request->googleCloudRetailV2PredictRequestInput->labels = [
        'quae' => 'quaerat',
        'porro' => 'quod',
    ];
    $request->googleCloudRetailV2PredictRequestInput->pageSize = 288398;
    $request->googleCloudRetailV2PredictRequestInput->pageToken = 'ab';
    $request->googleCloudRetailV2PredictRequestInput->params = [
        'fuga' => 'id',
    ];
    $request->googleCloudRetailV2PredictRequestInput->userEvent = new GoogleCloudRetailV2UserEventInput();
    $request->googleCloudRetailV2PredictRequestInput->userEvent->attributes = [
        'velit' => new GoogleCloudRetailV2CustomAttribute(),
        'culpa' => new GoogleCloudRetailV2CustomAttribute(),
    ];
    $request->googleCloudRetailV2PredictRequestInput->userEvent->attributionToken = 'est';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->cartId = 'recusandae';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->completionDetail = new GoogleCloudRetailV2CompletionDetail();
    $request->googleCloudRetailV2PredictRequestInput->userEvent->completionDetail->completionAttributionToken = 'totam';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->completionDetail->selectedPosition = 853940;
    $request->googleCloudRetailV2PredictRequestInput->userEvent->completionDetail->selectedSuggestion = 'vel';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->entity = 'ducimus';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->eventTime = 'quos';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->eventType = 'vel';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->experimentIds = [
        'possimus',
        'facilis',
    ];
    $request->googleCloudRetailV2PredictRequestInput->userEvent->filter = 'cum';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->offset = 414857;
    $request->googleCloudRetailV2PredictRequestInput->userEvent->orderBy = 'in';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->pageCategories = [
        'reiciendis',
        'assumenda',
    ];
    $request->googleCloudRetailV2PredictRequestInput->userEvent->pageViewId = 'nemo';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->productDetails = [
        new GoogleCloudRetailV2ProductDetailInput(),
        new GoogleCloudRetailV2ProductDetailInput(),
        new GoogleCloudRetailV2ProductDetailInput(),
        new GoogleCloudRetailV2ProductDetailInput(),
    ];
    $request->googleCloudRetailV2PredictRequestInput->userEvent->purchaseTransaction = new GoogleCloudRetailV2PurchaseTransaction();
    $request->googleCloudRetailV2PredictRequestInput->userEvent->purchaseTransaction->cost = 3975.33;
    $request->googleCloudRetailV2PredictRequestInput->userEvent->purchaseTransaction->currencyCode = 'aperiam';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->purchaseTransaction->id = 'b375ed4f-6fbe-4e41-b333-17fe35b60eb1';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->purchaseTransaction->revenue = 8817.21;
    $request->googleCloudRetailV2PredictRequestInput->userEvent->purchaseTransaction->tax = 6311.26;
    $request->googleCloudRetailV2PredictRequestInput->userEvent->referrerUri = 'tempora';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->searchQuery = 'aspernatur';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->sessionId = 'voluptas';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->uri = 'http://hasty-exocrine.net';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->userInfo = new GoogleCloudRetailV2UserInfo();
    $request->googleCloudRetailV2PredictRequestInput->userEvent->userInfo->directUserRequest = false;
    $request->googleCloudRetailV2PredictRequestInput->userEvent->userInfo->ipAddress = 'dolorum';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->userInfo->userAgent = 'adipisci';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->userInfo->userId = 'minus';
    $request->googleCloudRetailV2PredictRequestInput->userEvent->visitorId = 'dolores';
    $request->googleCloudRetailV2PredictRequestInput->validateOnly = false;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'aliquam';
    $request->key = 'officiis';
    $request->oauthToken = 'temporibus';
    $request->placement = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsPredictSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsPredict($request, $requestSecurity);

    if ($response->googleCloudRetailV2PredictResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsServingConfigsRemoveControl

Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RemoveControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2RemoveControlRequest = new GoogleCloudRetailV2RemoveControlRequest();
    $request->googleCloudRetailV2RemoveControlRequest->controlId = 'hic';
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corrupti';
    $request->fields = 'pariatur';
    $request->key = 'totam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->servingConfig = 'nobis';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsRemoveControl($request, $requestSecurity);

    if ($response->googleCloudRetailV2ServingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsServingConfigsSearch

Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestBoostSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestDynamicFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestFacetSpecFacetKey;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Interval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestPersonalizationSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestQueryExpansionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestSearchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestSpellCorrectionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2SearchRequest = new GoogleCloudRetailV2SearchRequest();
    $request->googleCloudRetailV2SearchRequest->boostSpec = new GoogleCloudRetailV2SearchRequestBoostSpec();
    $request->googleCloudRetailV2SearchRequest->boostSpec->conditionBoostSpecs = [
        new GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec(),
        new GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec(),
        new GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec(),
        new GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec(),
    ];
    $request->googleCloudRetailV2SearchRequest->boostSpec->skipBoostSpecValidation = false;
    $request->googleCloudRetailV2SearchRequest->branch = 'explicabo';
    $request->googleCloudRetailV2SearchRequest->canonicalFilter = 'asperiores';
    $request->googleCloudRetailV2SearchRequest->dynamicFacetSpec = new GoogleCloudRetailV2SearchRequestDynamicFacetSpec();
    $request->googleCloudRetailV2SearchRequest->dynamicFacetSpec->mode = GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum::ENABLED;
    $request->googleCloudRetailV2SearchRequest->entity = 'voluptate';
    $request->googleCloudRetailV2SearchRequest->facetSpecs = [
        new GoogleCloudRetailV2SearchRequestFacetSpec(),
        new GoogleCloudRetailV2SearchRequestFacetSpec(),
        new GoogleCloudRetailV2SearchRequestFacetSpec(),
    ];
    $request->googleCloudRetailV2SearchRequest->filter = 'ab';
    $request->googleCloudRetailV2SearchRequest->labels = [
        'dolore' => 'laborum',
        'sed' => 'in',
        'commodi' => 'quidem',
    ];
    $request->googleCloudRetailV2SearchRequest->offset = 131289;
    $request->googleCloudRetailV2SearchRequest->orderBy = 'voluptas';
    $request->googleCloudRetailV2SearchRequest->pageCategories = [
        'architecto',
        'suscipit',
        'sapiente',
    ];
    $request->googleCloudRetailV2SearchRequest->pageSize = 895386;
    $request->googleCloudRetailV2SearchRequest->pageToken = 'illo';
    $request->googleCloudRetailV2SearchRequest->personalizationSpec = new GoogleCloudRetailV2SearchRequestPersonalizationSpec();
    $request->googleCloudRetailV2SearchRequest->personalizationSpec->mode = GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum::DISABLED;
    $request->googleCloudRetailV2SearchRequest->query = 'perferendis';
    $request->googleCloudRetailV2SearchRequest->queryExpansionSpec = new GoogleCloudRetailV2SearchRequestQueryExpansionSpec();
    $request->googleCloudRetailV2SearchRequest->queryExpansionSpec->condition = GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum::DISABLED;
    $request->googleCloudRetailV2SearchRequest->queryExpansionSpec->pinUnexpandedResults = false;
    $request->googleCloudRetailV2SearchRequest->searchMode = GoogleCloudRetailV2SearchRequestSearchModeEnum::FACETED_SEARCH_ONLY;
    $request->googleCloudRetailV2SearchRequest->spellCorrectionSpec = new GoogleCloudRetailV2SearchRequestSpellCorrectionSpec();
    $request->googleCloudRetailV2SearchRequest->spellCorrectionSpec->mode = GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum::MODE_UNSPECIFIED;
    $request->googleCloudRetailV2SearchRequest->userInfo = new GoogleCloudRetailV2UserInfo();
    $request->googleCloudRetailV2SearchRequest->userInfo->directUserRequest = false;
    $request->googleCloudRetailV2SearchRequest->userInfo->ipAddress = 'sed';
    $request->googleCloudRetailV2SearchRequest->userInfo->userAgent = 'provident';
    $request->googleCloudRetailV2SearchRequest->userInfo->userId = 'eius';
    $request->googleCloudRetailV2SearchRequest->variantRollupKeys = [
        'ipsum',
        'ea',
        'occaecati',
        'quos',
    ];
    $request->googleCloudRetailV2SearchRequest->visitorId = 'voluptatibus';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptate';
    $request->fields = 'reiciendis';
    $request->key = 'ex';
    $request->oauthToken = 'sit';
    $request->placement = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsSearch($request, $requestSecurity);

    if ($response->googleCloudRetailV2SearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsSetDefaultBranch

Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsSetDefaultBranchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2SetDefaultBranchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsSetDefaultBranchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsSetDefaultBranchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2SetDefaultBranchRequest = new GoogleCloudRetailV2SetDefaultBranchRequest();
    $request->googleCloudRetailV2SetDefaultBranchRequest->branchId = 'incidunt';
    $request->googleCloudRetailV2SetDefaultBranchRequest->force = false;
    $request->googleCloudRetailV2SetDefaultBranchRequest->note = 'ipsam';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->catalog = 'nobis';
    $request->fields = 'error';
    $request->key = 'veniam';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new RetailProjectsLocationsCatalogsSetDefaultBranchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsSetDefaultBranch($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsUserEventsCollect

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsCollectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsCollectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsCollectRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->ets = 'veniam';
    $request->fields = 'in';
    $request->key = 'officiis';
    $request->oauthToken = 'beatae';
    $request->parent = 'laudantium';
    $request->prebuiltRule = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->rawJson = 'cum';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'dolorum';
    $request->uri = 'https://phony-use.net';
    $request->userEvent = 'debitis';

    $requestSecurity = new RetailProjectsLocationsCatalogsUserEventsCollectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsUserEventsCollect($request, $requestSecurity);

    if ($response->googleApiHttpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsUserEventsImport

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ImportUserEventsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ImportErrorsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2UserEventInputConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2BigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2UserEventInlineSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2UserEventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CompletionDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductDetailInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Audience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2FulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Interval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Promotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Rating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2ImportUserEventsRequestInput = new GoogleCloudRetailV2ImportUserEventsRequestInput();
    $request->googleCloudRetailV2ImportUserEventsRequestInput->errorsConfig = new GoogleCloudRetailV2ImportErrorsConfig();
    $request->googleCloudRetailV2ImportUserEventsRequestInput->errorsConfig->gcsPrefix = 'dolorum';
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig = new GoogleCloudRetailV2UserEventInputConfigInput();
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->bigQuerySource = new GoogleCloudRetailV2BigQuerySource();
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->bigQuerySource->dataSchema = 'nostrum';
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->bigQuerySource->datasetId = 'officia';
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->bigQuerySource->gcsStagingDir = 'dolorum';
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate->day = 548361;
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate->month = 879235;
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate->year = 272683;
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->bigQuerySource->projectId = 'atque';
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->bigQuerySource->tableId = 'fugit';
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->gcsSource = new GoogleCloudRetailV2GcsSource();
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->gcsSource->dataSchema = 'ut';
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->gcsSource->inputUris = [
        'voluptatem',
        'culpa',
        'expedita',
        'magnam',
    ];
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->userEventInlineSource = new GoogleCloudRetailV2UserEventInlineSourceInput();
    $request->googleCloudRetailV2ImportUserEventsRequestInput->inputConfig->userEventInlineSource->userEvents = [
        new GoogleCloudRetailV2UserEventInput(),
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'voluptatum';
    $request->key = 'quas';
    $request->oauthToken = 'repudiandae';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'ex';

    $requestSecurity = new RetailProjectsLocationsCatalogsUserEventsImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsUserEventsImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsUserEventsPurge

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsPurgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PurgeUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsPurgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsPurgeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2PurgeUserEventsRequest = new GoogleCloudRetailV2PurgeUserEventsRequest();
    $request->googleCloudRetailV2PurgeUserEventsRequest->filter = 'sit';
    $request->googleCloudRetailV2PurgeUserEventsRequest->force = false;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'error';
    $request->key = 'consequatur';
    $request->oauthToken = 'incidunt';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new RetailProjectsLocationsCatalogsUserEventsPurgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsUserEventsPurge($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsUserEventsRejoin

Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsRejoinRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RejoinUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsRejoinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsRejoinRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2RejoinUserEventsRequest = new GoogleCloudRetailV2RejoinUserEventsRequest();
    $request->googleCloudRetailV2RejoinUserEventsRequest->userEventRejoinScope = GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum::JOINED_EVENTS;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'atque';
    $request->fields = 'laborum';
    $request->key = 'nam';
    $request->oauthToken = 'tenetur';
    $request->parent = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new RetailProjectsLocationsCatalogsUserEventsRejoinSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsUserEventsRejoin($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsUserEventsWrite

Writes a single user event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2UserEventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CompletionDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductDetailInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Audience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2FulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Interval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Promotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2Rating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2ProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2PurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsWriteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsWriteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2UserEventInput = new GoogleCloudRetailV2UserEventInput();
    $request->googleCloudRetailV2UserEventInput->attributes = [
        'reiciendis' => new GoogleCloudRetailV2CustomAttribute(),
        'provident' => new GoogleCloudRetailV2CustomAttribute(),
        'repellendus' => new GoogleCloudRetailV2CustomAttribute(),
    ];
    $request->googleCloudRetailV2UserEventInput->attributionToken = 'delectus';
    $request->googleCloudRetailV2UserEventInput->cartId = 'voluptates';
    $request->googleCloudRetailV2UserEventInput->completionDetail = new GoogleCloudRetailV2CompletionDetail();
    $request->googleCloudRetailV2UserEventInput->completionDetail->completionAttributionToken = 'perferendis';
    $request->googleCloudRetailV2UserEventInput->completionDetail->selectedPosition = 667285;
    $request->googleCloudRetailV2UserEventInput->completionDetail->selectedSuggestion = 'quidem';
    $request->googleCloudRetailV2UserEventInput->entity = 'reprehenderit';
    $request->googleCloudRetailV2UserEventInput->eventTime = 'facere';
    $request->googleCloudRetailV2UserEventInput->eventType = 'fuga';
    $request->googleCloudRetailV2UserEventInput->experimentIds = [
        'mollitia',
        'veniam',
        'voluptatem',
    ];
    $request->googleCloudRetailV2UserEventInput->filter = 'quisquam';
    $request->googleCloudRetailV2UserEventInput->offset = 919532;
    $request->googleCloudRetailV2UserEventInput->orderBy = 'quasi';
    $request->googleCloudRetailV2UserEventInput->pageCategories = [
        'reprehenderit',
        'asperiores',
        'totam',
    ];
    $request->googleCloudRetailV2UserEventInput->pageViewId = 'suscipit';
    $request->googleCloudRetailV2UserEventInput->productDetails = [
        new GoogleCloudRetailV2ProductDetailInput(),
        new GoogleCloudRetailV2ProductDetailInput(),
        new GoogleCloudRetailV2ProductDetailInput(),
    ];
    $request->googleCloudRetailV2UserEventInput->purchaseTransaction = new GoogleCloudRetailV2PurchaseTransaction();
    $request->googleCloudRetailV2UserEventInput->purchaseTransaction->cost = 8066.7;
    $request->googleCloudRetailV2UserEventInput->purchaseTransaction->currencyCode = 'et';
    $request->googleCloudRetailV2UserEventInput->purchaseTransaction->id = '73d689ee-e952-46f8-9986-e881ead4f0e1';
    $request->googleCloudRetailV2UserEventInput->purchaseTransaction->revenue = 360.33;
    $request->googleCloudRetailV2UserEventInput->purchaseTransaction->tax = 1064.29;
    $request->googleCloudRetailV2UserEventInput->referrerUri = 'dolores';
    $request->googleCloudRetailV2UserEventInput->searchQuery = 'enim';
    $request->googleCloudRetailV2UserEventInput->sessionId = 'laboriosam';
    $request->googleCloudRetailV2UserEventInput->uri = 'http://weekly-mime.biz';
    $request->googleCloudRetailV2UserEventInput->userInfo = new GoogleCloudRetailV2UserInfo();
    $request->googleCloudRetailV2UserEventInput->userInfo->directUserRequest = false;
    $request->googleCloudRetailV2UserEventInput->userInfo->ipAddress = 'saepe';
    $request->googleCloudRetailV2UserEventInput->userInfo->userAgent = 'consequuntur';
    $request->googleCloudRetailV2UserEventInput->userInfo->userId = 'occaecati';
    $request->googleCloudRetailV2UserEventInput->visitorId = 'officiis';
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'adipisci';
    $request->fields = 'eveniet';
    $request->key = 'occaecati';
    $request->oauthToken = 'consequuntur';
    $request->parent = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'reprehenderit';
    $request->writeAsync = false;

    $requestSecurity = new RetailProjectsLocationsCatalogsUserEventsWriteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsUserEventsWrite($request, $requestSecurity);

    if ($response->googleCloudRetailV2UserEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'eveniet';
    $request->key = 'non';
    $request->name = 'Ms. Brian Kerluke IV';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new RetailProjectsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->fields = 'voluptatum';
    $request->filter = 'rem';
    $request->key = 'aliquam';
    $request->name = 'Winifred Abernathy';
    $request->oauthToken = 'nihil';
    $request->pageSize = 649078;
    $request->pageToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new RetailProjectsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
