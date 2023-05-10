# projects

### Available Operations

* [retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute](#retailprojectslocationscatalogsattributesconfigaddcatalogattribute) - Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
* [retailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes](#retailprojectslocationscatalogsattributesconfigbatchremovecatalogattributes) - Removes all specified CatalogAttributes from the AttributesConfig.
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAddCatalogAttributeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput = new GoogleCloudRetailV2betaAddCatalogAttributeRequestInput();
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute = new GoogleCloudRetailV2betaCatalogAttributeInput();
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->dynamicFacetableOption = GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum::DYNAMIC_FACETABLE_ENABLED;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->exactSearchableOption = GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum::EXACT_SEARCHABLE_DISABLED;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->indexableOption = GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum::INDEXABLE_DISABLED;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->key = 'voluptatum';
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->recommendationsFilteringOption = GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum::RECOMMENDATIONS_FILTERING_DISABLED;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->retrievableOption = GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum::RETRIEVABLE_ENABLED;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->searchableOption = GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum::SEARCHABLE_ENABLED;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->attributesConfig = 'ab';
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaAttributesConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes

Removes all specified CatalogAttributes from the AttributesConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaBatchRemoveCatalogAttributesRequest = new GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest();
    $request->googleCloudRetailV2betaBatchRemoveCatalogAttributesRequest->attributeKeys = [
        'at',
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->attributesConfig = 'molestiae';
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaBatchRemoveCatalogAttributesResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRemoveCatalogAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaRemoveCatalogAttributeRequest = new GoogleCloudRetailV2betaRemoveCatalogAttributeRequest();
    $request->googleCloudRetailV2betaRemoveCatalogAttributeRequest->key = 'officia';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->attributesConfig = 'deleniti';
    $request->callback = 'hic';
    $request->fields = 'optio';
    $request->key = 'totam';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaAttributesConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaReplaceCatalogAttributeRequestInput = new GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput();
    $request->googleCloudRetailV2betaReplaceCatalogAttributeRequestInput->catalogAttribute = new GoogleCloudRetailV2betaCatalogAttributeInput();
    $request->googleCloudRetailV2betaReplaceCatalogAttributeRequestInput->catalogAttribute->dynamicFacetableOption = GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum::DYNAMIC_FACETABLE_DISABLED;
    $request->googleCloudRetailV2betaReplaceCatalogAttributeRequestInput->catalogAttribute->exactSearchableOption = GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum::EXACT_SEARCHABLE_DISABLED;
    $request->googleCloudRetailV2betaReplaceCatalogAttributeRequestInput->catalogAttribute->indexableOption = GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum::INDEXABLE_ENABLED;
    $request->googleCloudRetailV2betaReplaceCatalogAttributeRequestInput->catalogAttribute->key = 'ipsum';
    $request->googleCloudRetailV2betaReplaceCatalogAttributeRequestInput->catalogAttribute->recommendationsFilteringOption = GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum::RECOMMENDATIONS_FILTERING_DISABLED;
    $request->googleCloudRetailV2betaReplaceCatalogAttributeRequestInput->catalogAttribute->retrievableOption = GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum::RETRIEVABLE_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2betaReplaceCatalogAttributeRequestInput->catalogAttribute->searchableOption = GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum::SEARCHABLE_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2betaReplaceCatalogAttributeRequestInput->updateMask = 'ad';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->attributesConfig = 'iste';
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaAttributesConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAddFulfillmentPlacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaAddFulfillmentPlacesRequest = new GoogleCloudRetailV2betaAddFulfillmentPlacesRequest();
    $request->googleCloudRetailV2betaAddFulfillmentPlacesRequest->addTime = 'iste';
    $request->googleCloudRetailV2betaAddFulfillmentPlacesRequest->allowMissing = false;
    $request->googleCloudRetailV2betaAddFulfillmentPlacesRequest->placeIds = [
        'saepe',
        'quidem',
    ];
    $request->googleCloudRetailV2betaAddFulfillmentPlacesRequest->type = 'architecto';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->product = 'dolorem';
    $request->quotaUser = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAddLocalInventoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaLocalInventory;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaInterval;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaAddLocalInventoriesRequest = new GoogleCloudRetailV2betaAddLocalInventoriesRequest();
    $request->googleCloudRetailV2betaAddLocalInventoriesRequest->addMask = 'omnis';
    $request->googleCloudRetailV2betaAddLocalInventoriesRequest->addTime = 'nemo';
    $request->googleCloudRetailV2betaAddLocalInventoriesRequest->allowMissing = false;
    $request->googleCloudRetailV2betaAddLocalInventoriesRequest->localInventories = [
        new GoogleCloudRetailV2betaLocalInventory(),
        new GoogleCloudRetailV2betaLocalInventory(),
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'culpa';
    $request->key = 'doloribus';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->product = 'architecto';
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'culpa';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaProductInput = new GoogleCloudRetailV2betaProductInput();
    $request->googleCloudRetailV2betaProductInput->attributes = [
        'mollitia' => new GoogleCloudRetailV2betaCustomAttribute(),
        'occaecati' => new GoogleCloudRetailV2betaCustomAttribute(),
        'numquam' => new GoogleCloudRetailV2betaCustomAttribute(),
        'commodi' => new GoogleCloudRetailV2betaCustomAttribute(),
    ];
    $request->googleCloudRetailV2betaProductInput->audience = new GoogleCloudRetailV2betaAudience();
    $request->googleCloudRetailV2betaProductInput->audience->ageGroups = [
        'molestiae',
        'velit',
    ];
    $request->googleCloudRetailV2betaProductInput->audience->genders = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->googleCloudRetailV2betaProductInput->availability = GoogleCloudRetailV2betaProductAvailabilityEnum::PREORDER;
    $request->googleCloudRetailV2betaProductInput->availableQuantity = 656330;
    $request->googleCloudRetailV2betaProductInput->availableTime = 'enim';
    $request->googleCloudRetailV2betaProductInput->brands = [
        'quo',
    ];
    $request->googleCloudRetailV2betaProductInput->categories = [
        'tenetur',
    ];
    $request->googleCloudRetailV2betaProductInput->collectionMemberIds = [
        'id',
        'possimus',
    ];
    $request->googleCloudRetailV2betaProductInput->colorInfo = new GoogleCloudRetailV2betaColorInfo();
    $request->googleCloudRetailV2betaProductInput->colorInfo->colorFamilies = [
        'quasi',
    ];
    $request->googleCloudRetailV2betaProductInput->colorInfo->colors = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->googleCloudRetailV2betaProductInput->conditions = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->googleCloudRetailV2betaProductInput->description = 'voluptatibus';
    $request->googleCloudRetailV2betaProductInput->expireTime = 'ipsa';
    $request->googleCloudRetailV2betaProductInput->fulfillmentInfo = [
        new GoogleCloudRetailV2betaFulfillmentInfo(),
        new GoogleCloudRetailV2betaFulfillmentInfo(),
        new GoogleCloudRetailV2betaFulfillmentInfo(),
    ];
    $request->googleCloudRetailV2betaProductInput->gtin = 'voluptate';
    $request->googleCloudRetailV2betaProductInput->id = 'b0074f15-471b-45e6-a13b-99d488e1e91e';
    $request->googleCloudRetailV2betaProductInput->images = [
        new GoogleCloudRetailV2betaImage(),
        new GoogleCloudRetailV2betaImage(),
    ];
    $request->googleCloudRetailV2betaProductInput->languageCode = 'enim';
    $request->googleCloudRetailV2betaProductInput->materials = [
        'est',
    ];
    $request->googleCloudRetailV2betaProductInput->name = 'Benjamin O'Connell';
    $request->googleCloudRetailV2betaProductInput->patterns = [
        'modi',
        'qui',
    ];
    $request->googleCloudRetailV2betaProductInput->priceInfo = new GoogleCloudRetailV2betaPriceInfo();
    $request->googleCloudRetailV2betaProductInput->priceInfo->cost = 3978.21;
    $request->googleCloudRetailV2betaProductInput->priceInfo->currencyCode = 'cupiditate';
    $request->googleCloudRetailV2betaProductInput->priceInfo->originalPrice = 5528.22;
    $request->googleCloudRetailV2betaProductInput->priceInfo->price = 201.07;
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceEffectiveTime = 'magni';
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceExpireTime = 'assumenda';
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange();
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange->originalPrice = new GoogleCloudRetailV2betaInterval();
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange->originalPrice->exclusiveMaximum = 3698.08;
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange->originalPrice->exclusiveMinimum = 46.95;
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange->originalPrice->maximum = 1464.41;
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange->originalPrice->minimum = 6778.17;
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange->price = new GoogleCloudRetailV2betaInterval();
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange->price->exclusiveMaximum = 5696.18;
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange->price->exclusiveMinimum = 2700.08;
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange->price->maximum = 7037.37;
    $request->googleCloudRetailV2betaProductInput->priceInfo->priceRange->price->minimum = 7351.94;
    $request->googleCloudRetailV2betaProductInput->primaryProductId = 'labore';
    $request->googleCloudRetailV2betaProductInput->promotions = [
        new GoogleCloudRetailV2betaPromotion(),
        new GoogleCloudRetailV2betaPromotion(),
        new GoogleCloudRetailV2betaPromotion(),
        new GoogleCloudRetailV2betaPromotion(),
    ];
    $request->googleCloudRetailV2betaProductInput->publishTime = 'eum';
    $request->googleCloudRetailV2betaProductInput->rating = new GoogleCloudRetailV2betaRating();
    $request->googleCloudRetailV2betaProductInput->rating->averageRating = 2487.53;
    $request->googleCloudRetailV2betaProductInput->rating->ratingCount = 756107;
    $request->googleCloudRetailV2betaProductInput->rating->ratingHistogram = [
        396098,
        592042,
        896039,
    ];
    $request->googleCloudRetailV2betaProductInput->retrievableFields = 'sint';
    $request->googleCloudRetailV2betaProductInput->sizes = [
        'dolor',
        'debitis',
        'a',
    ];
    $request->googleCloudRetailV2betaProductInput->tags = [
        'in',
        'in',
        'illum',
    ];
    $request->googleCloudRetailV2betaProductInput->title = 'Dr.';
    $request->googleCloudRetailV2betaProductInput->ttl = 'rerum';
    $request->googleCloudRetailV2betaProductInput->type = GoogleCloudRetailV2betaProductTypeEnum::TYPE_UNSPECIFIED;
    $request->googleCloudRetailV2betaProductInput->uri = 'http://smoggy-sledge.info';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'non';
    $request->key = 'occaecati';
    $request->oauthToken = 'enim';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->productId = 'delectus';
    $request->quotaUser = 'quidem';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsCreate($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaProduct !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImportProductsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImportErrorsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductInputConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaBigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductInlineSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaImportProductsRequestInput = new GoogleCloudRetailV2betaImportProductsRequestInput();
    $request->googleCloudRetailV2betaImportProductsRequestInput->errorsConfig = new GoogleCloudRetailV2betaImportErrorsConfig();
    $request->googleCloudRetailV2betaImportProductsRequestInput->errorsConfig->gcsPrefix = 'blanditiis';
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig = new GoogleCloudRetailV2betaProductInputConfigInput();
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->bigQuerySource = new GoogleCloudRetailV2betaBigQuerySource();
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->bigQuerySource->dataSchema = 'deleniti';
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->bigQuerySource->datasetId = 'sapiente';
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->bigQuerySource->gcsStagingDir = 'amet';
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate->day = 643990;
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate->month = 394869;
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate->year = 423855;
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->bigQuerySource->projectId = 'natus';
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->bigQuerySource->tableId = 'omnis';
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->gcsSource = new GoogleCloudRetailV2betaGcsSource();
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->gcsSource->dataSchema = 'molestiae';
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->gcsSource->inputUris = [
        'nihil',
    ];
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->productInlineSource = new GoogleCloudRetailV2betaProductInlineSourceInput();
    $request->googleCloudRetailV2betaImportProductsRequestInput->inputConfig->productInlineSource->products = [
        new GoogleCloudRetailV2betaProductInput(),
        new GoogleCloudRetailV2betaProductInput(),
    ];
    $request->googleCloudRetailV2betaImportProductsRequestInput->notificationPubsubTopic = 'distinctio';
    $request->googleCloudRetailV2betaImportProductsRequestInput->reconciliationMode = GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum::INCREMENTAL;
    $request->googleCloudRetailV2betaImportProductsRequestInput->requestId = 'labore';
    $request->googleCloudRetailV2betaImportProductsRequestInput->updateMask = 'labore';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'accusantium';
    $request->filter = 'mollitia';
    $request->key = 'reiciendis';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 320997;
    $request->pageToken = 'eum';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->readMask = 'odit';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaListProductsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaRemoveFulfillmentPlacesRequest = new GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest();
    $request->googleCloudRetailV2betaRemoveFulfillmentPlacesRequest->allowMissing = false;
    $request->googleCloudRetailV2betaRemoveFulfillmentPlacesRequest->placeIds = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->googleCloudRetailV2betaRemoveFulfillmentPlacesRequest->removeTime = 'facilis';
    $request->googleCloudRetailV2betaRemoveFulfillmentPlacesRequest->type = 'in';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'ullam';
    $request->key = 'expedita';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->product = 'repellat';
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRemoveLocalInventoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaRemoveLocalInventoriesRequest = new GoogleCloudRetailV2betaRemoveLocalInventoriesRequest();
    $request->googleCloudRetailV2betaRemoveLocalInventoriesRequest->allowMissing = false;
    $request->googleCloudRetailV2betaRemoveLocalInventoriesRequest->placeIds = [
        'consequuntur',
    ];
    $request->googleCloudRetailV2betaRemoveLocalInventoriesRequest->removeTime = 'praesentium';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->product = 'maxime';
    $request->quotaUser = 'ea';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'odit';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSetInventoryRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaSetInventoryRequestInput = new GoogleCloudRetailV2betaSetInventoryRequestInput();
    $request->googleCloudRetailV2betaSetInventoryRequestInput->allowMissing = false;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory = new GoogleCloudRetailV2betaProductInput();
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->attributes = [
        'ab' => new GoogleCloudRetailV2betaCustomAttribute(),
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->audience = new GoogleCloudRetailV2betaAudience();
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->audience->ageGroups = [
        'quidem',
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->audience->genders = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->availability = GoogleCloudRetailV2betaProductAvailabilityEnum::BACKORDER;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->availableQuantity = 16627;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->availableTime = 'fugiat';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->brands = [
        'aut',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->categories = [
        'corporis',
        'hic',
        'libero',
        'nobis',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->collectionMemberIds = [
        'quis',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->colorInfo = new GoogleCloudRetailV2betaColorInfo();
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->colorInfo->colorFamilies = [
        'dignissimos',
        'eaque',
        'quis',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->colorInfo->colors = [
        'eos',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->conditions = [
        'dolores',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->description = 'minus';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->expireTime = 'quam';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->fulfillmentInfo = [
        new GoogleCloudRetailV2betaFulfillmentInfo(),
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->gtin = 'vero';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->id = '5fe9b90c-2890-49b3-be49-a8d9cbf48633';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->images = [
        new GoogleCloudRetailV2betaImage(),
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->languageCode = 'qui';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->materials = [
        'hic',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->name = 'Felipe Klein';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->patterns = [
        'dolorum',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo = new GoogleCloudRetailV2betaPriceInfo();
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->cost = 2543.56;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->currencyCode = 'veritatis';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->originalPrice = 580.29;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->price = 564.18;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceEffectiveTime = 'iure';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceExpireTime = 'odio';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange();
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice = new GoogleCloudRetailV2betaInterval();
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->exclusiveMaximum = 3117.96;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->exclusiveMinimum = 8810.05;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->maximum = 6963.44;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->minimum = 9764.05;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange->price = new GoogleCloudRetailV2betaInterval();
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange->price->exclusiveMaximum = 3777.52;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange->price->exclusiveMinimum = 6176.58;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange->price->maximum = 1796.03;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->priceInfo->priceRange->price->minimum = 5424.99;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->primaryProductId = 'sit';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->promotions = [
        new GoogleCloudRetailV2betaPromotion(),
        new GoogleCloudRetailV2betaPromotion(),
        new GoogleCloudRetailV2betaPromotion(),
        new GoogleCloudRetailV2betaPromotion(),
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->publishTime = 'ab';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->rating = new GoogleCloudRetailV2betaRating();
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->rating->averageRating = 7438.35;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->rating->ratingCount = 679393;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->rating->ratingHistogram = [
        453697,
        677082,
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->retrievableFields = 'deleniti';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->sizes = [
        'necessitatibus',
        'distinctio',
        'asperiores',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->tags = [
        'ipsum',
        'voluptate',
    ];
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->title = 'Miss';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->ttl = 'saepe';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->type = GoogleCloudRetailV2betaProductTypeEnum::PRIMARY;
    $request->googleCloudRetailV2betaSetInventoryRequestInput->inventory->uri = 'http://agitated-cue.net';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->setMask = 'accusamus';
    $request->googleCloudRetailV2betaSetInventoryRequestInput->setTime = 'ad';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'provident';
    $request->key = 'minima';
    $request->name = 'Dr. Jimmie Murphy';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'officiis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->catalog = 'harum';
    $request->dataset = 'iusto';
    $request->deviceType = 'ipsum';
    $request->entity = 'quisquam';
    $request->fields = 'tenetur';
    $request->key = 'amet';
    $request->languageCodes = [
        'accusamus',
        'numquam',
        'enim',
    ];
    $request->maxSuggestions = 213312;
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->query = 'totam';
    $request->quotaUser = 'nihil';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'expedita';
    $request->visitorId = 'neque';

    $requestSecurity = new RetailProjectsLocationsCatalogsCompleteQuerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsCompleteQuery($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaCompleteQueryResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImportCompletionDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCompletionDataInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaBigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsCompletionDataImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsCompletionDataImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaImportCompletionDataRequest = new GoogleCloudRetailV2betaImportCompletionDataRequest();
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig = new GoogleCloudRetailV2betaCompletionDataInputConfig();
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig->bigQuerySource = new GoogleCloudRetailV2betaBigQuerySource();
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig->bigQuerySource->dataSchema = 'vel';
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig->bigQuerySource->datasetId = 'libero';
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig->bigQuerySource->gcsStagingDir = 'voluptas';
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate->day = 646265;
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate->month = 463575;
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate->year = 214880;
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig->bigQuerySource->projectId = 'incidunt';
    $request->googleCloudRetailV2betaImportCompletionDataRequest->inputConfig->bigQuerySource->tableId = 'qui';
    $request->googleCloudRetailV2betaImportCompletionDataRequest->notificationPubsubTopic = 'cupiditate';
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'dicta';
    $request->key = 'laborum';
    $request->oauthToken = 'totam';
    $request->parent = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'distinctio';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaControlInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRuleBoostAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaConditionTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaConditionQueryTerm;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRuleDoNotAssociateAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRuleFilterAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRuleIgnoreAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRuleOnewaySynonymsAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRuleRedirectAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRuleReplacementAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRuleTwowaySynonymsAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaControlSolutionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsControlsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsControlsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaControlInput = new GoogleCloudRetailV2betaControlInput();
    $request->googleCloudRetailV2betaControlInput->displayName = 'aliquid';
    $request->googleCloudRetailV2betaControlInput->facetSpec = new GoogleCloudRetailV2betaSearchRequestFacetSpec();
    $request->googleCloudRetailV2betaControlInput->facetSpec->enableDynamicPosition = false;
    $request->googleCloudRetailV2betaControlInput->facetSpec->excludedFilterKeys = [
        'molestias',
        'temporibus',
    ];
    $request->googleCloudRetailV2betaControlInput->facetSpec->facetKey = new GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey();
    $request->googleCloudRetailV2betaControlInput->facetSpec->facetKey->caseInsensitive = false;
    $request->googleCloudRetailV2betaControlInput->facetSpec->facetKey->contains = [
        'neque',
    ];
    $request->googleCloudRetailV2betaControlInput->facetSpec->facetKey->intervals = [
        new GoogleCloudRetailV2betaInterval(),
    ];
    $request->googleCloudRetailV2betaControlInput->facetSpec->facetKey->key = 'magni';
    $request->googleCloudRetailV2betaControlInput->facetSpec->facetKey->orderBy = 'odio';
    $request->googleCloudRetailV2betaControlInput->facetSpec->facetKey->prefixes = [
        'ullam',
    ];
    $request->googleCloudRetailV2betaControlInput->facetSpec->facetKey->query = 'nam';
    $request->googleCloudRetailV2betaControlInput->facetSpec->facetKey->restrictedValues = [
        'voluptatem',
        'cumque',
        'soluta',
        'nobis',
    ];
    $request->googleCloudRetailV2betaControlInput->facetSpec->facetKey->returnMinMax = false;
    $request->googleCloudRetailV2betaControlInput->facetSpec->limit = 92596;
    $request->googleCloudRetailV2betaControlInput->name = 'Dale Boehm';
    $request->googleCloudRetailV2betaControlInput->rule = new GoogleCloudRetailV2betaRule();
    $request->googleCloudRetailV2betaControlInput->rule->boostAction = new GoogleCloudRetailV2betaRuleBoostAction();
    $request->googleCloudRetailV2betaControlInput->rule->boostAction->boost = 7316.94;
    $request->googleCloudRetailV2betaControlInput->rule->boostAction->productsFilter = 'cupiditate';
    $request->googleCloudRetailV2betaControlInput->rule->condition = new GoogleCloudRetailV2betaCondition();
    $request->googleCloudRetailV2betaControlInput->rule->condition->activeTimeRange = [
        new GoogleCloudRetailV2betaConditionTimeRange(),
    ];
    $request->googleCloudRetailV2betaControlInput->rule->condition->queryTerms = [
        new GoogleCloudRetailV2betaConditionQueryTerm(),
        new GoogleCloudRetailV2betaConditionQueryTerm(),
        new GoogleCloudRetailV2betaConditionQueryTerm(),
        new GoogleCloudRetailV2betaConditionQueryTerm(),
    ];
    $request->googleCloudRetailV2betaControlInput->rule->doNotAssociateAction = new GoogleCloudRetailV2betaRuleDoNotAssociateAction();
    $request->googleCloudRetailV2betaControlInput->rule->doNotAssociateAction->doNotAssociateTerms = [
        'dolore',
    ];
    $request->googleCloudRetailV2betaControlInput->rule->doNotAssociateAction->queryTerms = [
        'adipisci',
        'dolorum',
    ];
    $request->googleCloudRetailV2betaControlInput->rule->doNotAssociateAction->terms = [
        'quae',
    ];
    $request->googleCloudRetailV2betaControlInput->rule->filterAction = new GoogleCloudRetailV2betaRuleFilterAction();
    $request->googleCloudRetailV2betaControlInput->rule->filterAction->filter = 'aut';
    $request->googleCloudRetailV2betaControlInput->rule->ignoreAction = new GoogleCloudRetailV2betaRuleIgnoreAction();
    $request->googleCloudRetailV2betaControlInput->rule->ignoreAction->ignoreTerms = [
        'itaque',
        'consequatur',
        'est',
    ];
    $request->googleCloudRetailV2betaControlInput->rule->onewaySynonymsAction = new GoogleCloudRetailV2betaRuleOnewaySynonymsAction();
    $request->googleCloudRetailV2betaControlInput->rule->onewaySynonymsAction->onewayTerms = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->googleCloudRetailV2betaControlInput->rule->onewaySynonymsAction->queryTerms = [
        'qui',
        'quae',
        'laudantium',
    ];
    $request->googleCloudRetailV2betaControlInput->rule->onewaySynonymsAction->synonyms = [
        'occaecati',
        'voluptatibus',
    ];
    $request->googleCloudRetailV2betaControlInput->rule->redirectAction = new GoogleCloudRetailV2betaRuleRedirectAction();
    $request->googleCloudRetailV2betaControlInput->rule->redirectAction->redirectUri = 'quisquam';
    $request->googleCloudRetailV2betaControlInput->rule->replacementAction = new GoogleCloudRetailV2betaRuleReplacementAction();
    $request->googleCloudRetailV2betaControlInput->rule->replacementAction->queryTerms = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->googleCloudRetailV2betaControlInput->rule->replacementAction->replacementTerm = 'voluptate';
    $request->googleCloudRetailV2betaControlInput->rule->replacementAction->term = 'consectetur';
    $request->googleCloudRetailV2betaControlInput->rule->twowaySynonymsAction = new GoogleCloudRetailV2betaRuleTwowaySynonymsAction();
    $request->googleCloudRetailV2betaControlInput->rule->twowaySynonymsAction->synonyms = [
        'tenetur',
        'dignissimos',
        'hic',
        'distinctio',
    ];
    $request->googleCloudRetailV2betaControlInput->searchSolutionUseCase = [
        GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum::SEARCH_SOLUTION_USE_CASE_SEARCH,
        GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum::SEARCH_SOLUTION_USE_CASE_SEARCH,
        GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum::SEARCH_SOLUTION_USE_CASE_BROWSE,
        GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum::SEARCH_SOLUTION_USE_CASE_BROWSE,
    ];
    $request->googleCloudRetailV2betaControlInput->solutionTypes = [
        GoogleCloudRetailV2betaControlSolutionTypesEnum::SOLUTION_TYPE_UNSPECIFIED,
        GoogleCloudRetailV2betaControlSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
    ];
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->controlId = 'impedit';
    $request->fields = 'aut';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'exercitationem';
    $request->parent = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new RetailProjectsLocationsCatalogsControlsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsControlsCreate($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaControl !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ducimus';
    $request->fields = 'alias';
    $request->filter = 'officia';
    $request->key = 'tempora';
    $request->oauthToken = 'ipsam';
    $request->pageSize = 410492;
    $request->pageToken = 'aspernatur';
    $request->parent = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'ratione';

    $requestSecurity = new RetailProjectsLocationsCatalogsControlsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsControlsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaListControlsResponse !== null) {
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
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->catalog = 'maiores';
    $request->fields = 'quasi';
    $request->key = 'ex';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'nostrum';

    $requestSecurity = new RetailProjectsLocationsCatalogsGetDefaultBranchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsGetDefaultBranch($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaGetDefaultBranchResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'impedit';
    $request->key = 'corporis';
    $request->oauthToken = 'veniam';
    $request->pageSize = 399499;
    $request->pageToken = 'inventore';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new RetailProjectsLocationsCatalogsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaListCatalogsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaModelInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaModelFilteringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaModelModelFeaturesConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaModelPeriodicTuningStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaModelTrainingStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsModelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaModelInput = new GoogleCloudRetailV2betaModelInput();
    $request->googleCloudRetailV2betaModelInput->displayName = 'aspernatur';
    $request->googleCloudRetailV2betaModelInput->filteringOption = GoogleCloudRetailV2betaModelFilteringOptionEnum::RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2betaModelInput->modelFeaturesConfig = new GoogleCloudRetailV2betaModelModelFeaturesConfig();
    $request->googleCloudRetailV2betaModelInput->modelFeaturesConfig->frequentlyBoughtTogetherConfig = new GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfig();
    $request->googleCloudRetailV2betaModelInput->modelFeaturesConfig->frequentlyBoughtTogetherConfig->contextProductsType = GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum::CONTEXT_PRODUCTS_TYPE_UNSPECIFIED;
    $request->googleCloudRetailV2betaModelInput->name = 'Ms. Marco Ankunding';
    $request->googleCloudRetailV2betaModelInput->optimizationObjective = 'aliquam';
    $request->googleCloudRetailV2betaModelInput->periodicTuningState = GoogleCloudRetailV2betaModelPeriodicTuningStateEnum::PERIODIC_TUNING_STATE_UNSPECIFIED;
    $request->googleCloudRetailV2betaModelInput->trainingState = GoogleCloudRetailV2betaModelTrainingStateEnum::TRAINING;
    $request->googleCloudRetailV2betaModelInput->type = 'inventore';
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->dryRun = false;
    $request->fields = 'laborum';
    $request->key = 'placeat';
    $request->oauthToken = 'velit';
    $request->parent = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quas';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'libero';
    $request->fields = 'quasi';
    $request->key = 'tempora';
    $request->oauthToken = 'numquam';
    $request->pageSize = 131482;
    $request->pageToken = 'provident';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaListModelsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'esse' => 'rem',
        'fuga' => 'reprehenderit',
    ];
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->fields = 'eum';
    $request->key = 'suscipit';
    $request->name = 'Alan Lang Jr.';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsPause($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaModel !== null) {
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
        'fuga' => 'eius',
        'eos' => 'voluptas',
        'ab' => 'cupiditate',
        'consequatur' => 'tempora',
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'sequi';
    $request->key = 'quo';
    $request->name = 'Sophie Bayer';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsResume($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaModel !== null) {
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
        'odio' => 'occaecati',
        'commodi' => 'sapiente',
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'accusantium';
    $request->key = 'porro';
    $request->name = 'Dianne Langosh';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'incidunt';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAddControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsAddControlRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaAddControlRequest = new GoogleCloudRetailV2betaAddControlRequest();
    $request->googleCloudRetailV2betaAddControlRequest->controlId = 'explicabo';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'sapiente';
    $request->key = 'consequuntur';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->servingConfig = 'saepe';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsAddControl($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaServingConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaServingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaServingConfigDiversityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaServingConfigSolutionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaServingConfig = new GoogleCloudRetailV2betaServingConfig();
    $request->googleCloudRetailV2betaServingConfig->boostControlIds = [
        'eveniet',
        'accusamus',
    ];
    $request->googleCloudRetailV2betaServingConfig->displayName = 'veritatis';
    $request->googleCloudRetailV2betaServingConfig->diversityLevel = 'esse';
    $request->googleCloudRetailV2betaServingConfig->diversityType = GoogleCloudRetailV2betaServingConfigDiversityTypeEnum::DATA_DRIVEN_DIVERSITY;
    $request->googleCloudRetailV2betaServingConfig->doNotAssociateControlIds = [
        'vero',
        'aliquid',
        'quasi',
    ];
    $request->googleCloudRetailV2betaServingConfig->dynamicFacetSpec = new GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec();
    $request->googleCloudRetailV2betaServingConfig->dynamicFacetSpec->mode = GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum::ENABLED;
    $request->googleCloudRetailV2betaServingConfig->enableCategoryFilterLevel = 'vel';
    $request->googleCloudRetailV2betaServingConfig->facetControlIds = [
        'molestiae',
        'rerum',
        'occaecati',
    ];
    $request->googleCloudRetailV2betaServingConfig->filterControlIds = [
        'distinctio',
        'eligendi',
    ];
    $request->googleCloudRetailV2betaServingConfig->ignoreControlIds = [
        'culpa',
    ];
    $request->googleCloudRetailV2betaServingConfig->modelId = 'tempore';
    $request->googleCloudRetailV2betaServingConfig->name = 'Miss Blanca Cronin';
    $request->googleCloudRetailV2betaServingConfig->onewaySynonymsControlIds = [
        'consectetur',
        'esse',
        'blanditiis',
        'provident',
    ];
    $request->googleCloudRetailV2betaServingConfig->personalizationSpec = new GoogleCloudRetailV2betaSearchRequestPersonalizationSpec();
    $request->googleCloudRetailV2betaServingConfig->personalizationSpec->mode = GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum::DISABLED;
    $request->googleCloudRetailV2betaServingConfig->priceRerankingLevel = 'nulla';
    $request->googleCloudRetailV2betaServingConfig->redirectControlIds = [
        'esse',
        'quasi',
        'a',
    ];
    $request->googleCloudRetailV2betaServingConfig->replacementControlIds = [
        'sint',
        'pariatur',
        'possimus',
    ];
    $request->googleCloudRetailV2betaServingConfig->solutionTypes = [
        GoogleCloudRetailV2betaServingConfigSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
    ];
    $request->googleCloudRetailV2betaServingConfig->twowaySynonymsControlIds = [
        'facere',
        'veritatis',
        'consequuntur',
        'quasi',
    ];
    $request->accessToken = 'similique';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'tenetur';
    $request->key = 'quae';
    $request->oauthToken = 'earum';
    $request->parent = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->servingConfigId = 'eius';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaServingConfig !== null) {
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
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'dicta';
    $request->key = 'ullam';
    $request->name = 'Ms. Dana Huel';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'itaque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tenetur';
    $request->fields = 'quasi';
    $request->key = 'at';
    $request->oauthToken = 'et';
    $request->pageSize = 454162;
    $request->pageToken = 'ipsa';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaListServingConfigsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaServingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaServingConfigDiversityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaServingConfigSolutionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaServingConfig = new GoogleCloudRetailV2betaServingConfig();
    $request->googleCloudRetailV2betaServingConfig->boostControlIds = [
        'accusantium',
        'rem',
        'aut',
        'laudantium',
    ];
    $request->googleCloudRetailV2betaServingConfig->displayName = 'eum';
    $request->googleCloudRetailV2betaServingConfig->diversityLevel = 'mollitia';
    $request->googleCloudRetailV2betaServingConfig->diversityType = GoogleCloudRetailV2betaServingConfigDiversityTypeEnum::DIVERSITY_TYPE_UNSPECIFIED;
    $request->googleCloudRetailV2betaServingConfig->doNotAssociateControlIds = [
        'non',
        'voluptatem',
        'dolor',
    ];
    $request->googleCloudRetailV2betaServingConfig->dynamicFacetSpec = new GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec();
    $request->googleCloudRetailV2betaServingConfig->dynamicFacetSpec->mode = GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum::DISABLED;
    $request->googleCloudRetailV2betaServingConfig->enableCategoryFilterLevel = 'numquam';
    $request->googleCloudRetailV2betaServingConfig->facetControlIds = [
        'explicabo',
        'voluptas',
        'aut',
        'dignissimos',
    ];
    $request->googleCloudRetailV2betaServingConfig->filterControlIds = [
        'maiores',
    ];
    $request->googleCloudRetailV2betaServingConfig->ignoreControlIds = [
        'velit',
        'voluptatibus',
        'voluptas',
    ];
    $request->googleCloudRetailV2betaServingConfig->modelId = 'asperiores';
    $request->googleCloudRetailV2betaServingConfig->name = 'Eileen Hagenes';
    $request->googleCloudRetailV2betaServingConfig->onewaySynonymsControlIds = [
        'maxime',
        'dignissimos',
        'officia',
    ];
    $request->googleCloudRetailV2betaServingConfig->personalizationSpec = new GoogleCloudRetailV2betaSearchRequestPersonalizationSpec();
    $request->googleCloudRetailV2betaServingConfig->personalizationSpec->mode = GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum::DISABLED;
    $request->googleCloudRetailV2betaServingConfig->priceRerankingLevel = 'nemo';
    $request->googleCloudRetailV2betaServingConfig->redirectControlIds = [
        'quaerat',
    ];
    $request->googleCloudRetailV2betaServingConfig->replacementControlIds = [
        'quod',
        'labore',
        'ab',
        'adipisci',
    ];
    $request->googleCloudRetailV2betaServingConfig->solutionTypes = [
        GoogleCloudRetailV2betaServingConfigSolutionTypesEnum::SOLUTION_TYPE_RECOMMENDATION,
        GoogleCloudRetailV2betaServingConfigSolutionTypesEnum::SOLUTION_TYPE_RECOMMENDATION,
        GoogleCloudRetailV2betaServingConfigSolutionTypesEnum::SOLUTION_TYPE_UNSPECIFIED,
    ];
    $request->googleCloudRetailV2betaServingConfig->twowaySynonymsControlIds = [
        'est',
        'recusandae',
        'totam',
    ];
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ducimus';
    $request->fields = 'quos';
    $request->key = 'vel';
    $request->name = 'Elena Quigley';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->updateMask = 'reiciendis';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsPatch($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaServingConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPredictRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserEventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCompletionDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductDetailInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsPredictSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsPredictRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaPredictRequestInput = new GoogleCloudRetailV2betaPredictRequestInput();
    $request->googleCloudRetailV2betaPredictRequestInput->filter = 'aliquid';
    $request->googleCloudRetailV2betaPredictRequestInput->labels = [
        'cum' => 'consectetur',
    ];
    $request->googleCloudRetailV2betaPredictRequestInput->pageSize = 449083;
    $request->googleCloudRetailV2betaPredictRequestInput->pageToken = 'exercitationem';
    $request->googleCloudRetailV2betaPredictRequestInput->params = [
        'facere' => 'numquam',
        'doloribus' => 'suscipit',
        'reiciendis' => 'quidem',
        'saepe' => 'necessitatibus',
    ];
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent = new GoogleCloudRetailV2betaUserEventInput();
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->attributes = [
        'sunt' => new GoogleCloudRetailV2betaCustomAttribute(),
        'asperiores' => new GoogleCloudRetailV2betaCustomAttribute(),
    ];
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->attributionToken = 'adipisci';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->cartId = 'non';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->completionDetail = new GoogleCloudRetailV2betaCompletionDetail();
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->completionDetail->completionAttributionToken = 'amet';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->completionDetail->selectedPosition = 105906;
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->completionDetail->selectedSuggestion = 'dignissimos';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->entity = 'a';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->eventTime = 'debitis';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->eventType = 'consectetur';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->experimentIds = [
        'harum',
        'laboriosam',
    ];
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->filter = 'ipsa';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->offset = 916727;
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->orderBy = 'libero';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->pageCategories = [
        'accusamus',
    ];
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->pageViewId = 'similique';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->productDetails = [
        new GoogleCloudRetailV2betaProductDetailInput(),
        new GoogleCloudRetailV2betaProductDetailInput(),
    ];
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->purchaseTransaction = new GoogleCloudRetailV2betaPurchaseTransaction();
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->purchaseTransaction->cost = 1328.15;
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->purchaseTransaction->currencyCode = 'voluptas';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->purchaseTransaction->id = '555ba3c2-8744-4ed5-bb88-f3a8d8f5c0b2';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->purchaseTransaction->revenue = 9679.66;
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->purchaseTransaction->tax = 1318.52;
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->referrerUri = 'asperiores';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->searchQuery = 'facilis';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->sessionId = 'voluptate';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->uri = 'https://biodegradable-operation.biz';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->userInfo = new GoogleCloudRetailV2betaUserInfo();
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->userInfo->directUserRequest = false;
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->userInfo->ipAddress = 'laborum';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->userInfo->userAgent = 'sed';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->userInfo->userId = 'in';
    $request->googleCloudRetailV2betaPredictRequestInput->userEvent->visitorId = 'commodi';
    $request->googleCloudRetailV2betaPredictRequestInput->validateOnly = false;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->fields = 'unde';
    $request->key = 'architecto';
    $request->oauthToken = 'suscipit';
    $request->placement = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsPredictSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsPredict($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaPredictResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRemoveControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaRemoveControlRequest = new GoogleCloudRetailV2betaRemoveControlRequest();
    $request->googleCloudRetailV2betaRemoveControlRequest->controlId = 'corrupti';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sed';
    $request->fields = 'provident';
    $request->key = 'eius';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->servingConfig = 'ea';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsRemoveControl($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaServingConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestBoostSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestSearchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaSearchRequest = new GoogleCloudRetailV2betaSearchRequest();
    $request->googleCloudRetailV2betaSearchRequest->boostSpec = new GoogleCloudRetailV2betaSearchRequestBoostSpec();
    $request->googleCloudRetailV2betaSearchRequest->boostSpec->conditionBoostSpecs = [
        new GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec(),
        new GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec(),
    ];
    $request->googleCloudRetailV2betaSearchRequest->boostSpec->skipBoostSpecValidation = false;
    $request->googleCloudRetailV2betaSearchRequest->branch = 'tempora';
    $request->googleCloudRetailV2betaSearchRequest->canonicalFilter = 'voluptate';
    $request->googleCloudRetailV2betaSearchRequest->dynamicFacetSpec = new GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec();
    $request->googleCloudRetailV2betaSearchRequest->dynamicFacetSpec->mode = GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum::ENABLED;
    $request->googleCloudRetailV2betaSearchRequest->entity = 'ex';
    $request->googleCloudRetailV2betaSearchRequest->facetSpecs = [
        new GoogleCloudRetailV2betaSearchRequestFacetSpec(),
    ];
    $request->googleCloudRetailV2betaSearchRequest->filter = 'non';
    $request->googleCloudRetailV2betaSearchRequest->labels = [
        'praesentium' => 'facilis',
        'quaerat' => 'incidunt',
        'ipsam' => 'debitis',
        'rem' => 'sit',
    ];
    $request->googleCloudRetailV2betaSearchRequest->offset = 750595;
    $request->googleCloudRetailV2betaSearchRequest->orderBy = 'error';
    $request->googleCloudRetailV2betaSearchRequest->pageCategories = [
        'minima',
        'recusandae',
    ];
    $request->googleCloudRetailV2betaSearchRequest->pageSize = 967122;
    $request->googleCloudRetailV2betaSearchRequest->pageToken = 'nulla';
    $request->googleCloudRetailV2betaSearchRequest->personalizationSpec = new GoogleCloudRetailV2betaSearchRequestPersonalizationSpec();
    $request->googleCloudRetailV2betaSearchRequest->personalizationSpec->mode = GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum::MODE_UNSPECIFIED;
    $request->googleCloudRetailV2betaSearchRequest->query = 'aperiam';
    $request->googleCloudRetailV2betaSearchRequest->queryExpansionSpec = new GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec();
    $request->googleCloudRetailV2betaSearchRequest->queryExpansionSpec->condition = GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum::AUTO;
    $request->googleCloudRetailV2betaSearchRequest->queryExpansionSpec->pinUnexpandedResults = false;
    $request->googleCloudRetailV2betaSearchRequest->searchMode = GoogleCloudRetailV2betaSearchRequestSearchModeEnum::SEARCH_MODE_UNSPECIFIED;
    $request->googleCloudRetailV2betaSearchRequest->spellCorrectionSpec = new GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec();
    $request->googleCloudRetailV2betaSearchRequest->spellCorrectionSpec->mode = GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum::MODE_UNSPECIFIED;
    $request->googleCloudRetailV2betaSearchRequest->userInfo = new GoogleCloudRetailV2betaUserInfo();
    $request->googleCloudRetailV2betaSearchRequest->userInfo->directUserRequest = false;
    $request->googleCloudRetailV2betaSearchRequest->userInfo->ipAddress = 'in';
    $request->googleCloudRetailV2betaSearchRequest->userInfo->userAgent = 'officiis';
    $request->googleCloudRetailV2betaSearchRequest->userInfo->userId = 'beatae';
    $request->googleCloudRetailV2betaSearchRequest->variantRollupKeys = [
        'exercitationem',
        'praesentium',
        'cum',
    ];
    $request->googleCloudRetailV2betaSearchRequest->visitorId = 'laboriosam';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'hic';
    $request->key = 'expedita';
    $request->oauthToken = 'debitis';
    $request->placement = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsSearch($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaSearchResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaSetDefaultBranchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsSetDefaultBranchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsSetDefaultBranchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaSetDefaultBranchRequest = new GoogleCloudRetailV2betaSetDefaultBranchRequest();
    $request->googleCloudRetailV2betaSetDefaultBranchRequest->branchId = 'corrupti';
    $request->googleCloudRetailV2betaSetDefaultBranchRequest->force = false;
    $request->googleCloudRetailV2betaSetDefaultBranchRequest->note = 'accusamus';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->catalog = 'ut';
    $request->fields = 'fugiat';
    $request->key = 'voluptatem';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'consequatur';

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
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatum';
    $request->ets = 'quas';
    $request->fields = 'repudiandae';
    $request->key = 'corporis';
    $request->oauthToken = 'et';
    $request->parent = 'blanditiis';
    $request->prebuiltRule = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->rawJson = 'sit';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'nostrum';
    $request->uri = 'https://phony-ad.biz';
    $request->userEvent = 'reiciendis';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImportUserEventsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImportErrorsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserEventInputConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaBigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserEventInlineSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserEventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCompletionDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductDetailInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaImportUserEventsRequestInput = new GoogleCloudRetailV2betaImportUserEventsRequestInput();
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->errorsConfig = new GoogleCloudRetailV2betaImportErrorsConfig();
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->errorsConfig->gcsPrefix = 'harum';
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig = new GoogleCloudRetailV2betaUserEventInputConfigInput();
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->bigQuerySource = new GoogleCloudRetailV2betaBigQuerySource();
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->bigQuerySource->dataSchema = 'dicta';
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->bigQuerySource->datasetId = 'architecto';
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->bigQuerySource->gcsStagingDir = 'occaecati';
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate->day = 289776;
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate->month = 695270;
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate->year = 539074;
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->bigQuerySource->projectId = 'laborum';
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->bigQuerySource->tableId = 'nam';
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->gcsSource = new GoogleCloudRetailV2betaGcsSource();
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->gcsSource->dataSchema = 'tenetur';
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->gcsSource->inputUris = [
        'alias',
        'amet',
    ];
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->userEventInlineSource = new GoogleCloudRetailV2betaUserEventInlineSourceInput();
    $request->googleCloudRetailV2betaImportUserEventsRequestInput->inputConfig->userEventInlineSource->userEvents = [
        new GoogleCloudRetailV2betaUserEventInput(),
        new GoogleCloudRetailV2betaUserEventInput(),
        new GoogleCloudRetailV2betaUserEventInput(),
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'provident';
    $request->key = 'repellendus';
    $request->oauthToken = 'delectus';
    $request->parent = 'voluptates';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quidem';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPurgeUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsPurgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsPurgeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2betaPurgeUserEventsRequest = new GoogleCloudRetailV2betaPurgeUserEventsRequest();
    $request->googleCloudRetailV2betaPurgeUserEventsRequest->filter = 'facere';
    $request->googleCloudRetailV2betaPurgeUserEventsRequest->force = false;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'mollitia';
    $request->fields = 'veniam';
    $request->key = 'voluptatem';
    $request->oauthToken = 'quisquam';
    $request->parent = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'reprehenderit';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRejoinUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsRejoinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsRejoinRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaRejoinUserEventsRequest = new GoogleCloudRetailV2betaRejoinUserEventsRequest();
    $request->googleCloudRetailV2betaRejoinUserEventsRequest->userEventRejoinScope = GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScopeEnum::JOINED_EVENTS;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'et';
    $request->key = 'esse';
    $request->oauthToken = 'amet';
    $request->parent = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'error';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserEventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCompletionDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductDetailInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaPurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsWriteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsWriteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaUserEventInput = new GoogleCloudRetailV2betaUserEventInput();
    $request->googleCloudRetailV2betaUserEventInput->attributes = [
        'accusamus' => new GoogleCloudRetailV2betaCustomAttribute(),
        'natus' => new GoogleCloudRetailV2betaCustomAttribute(),
        'minima' => new GoogleCloudRetailV2betaCustomAttribute(),
        'aspernatur' => new GoogleCloudRetailV2betaCustomAttribute(),
    ];
    $request->googleCloudRetailV2betaUserEventInput->attributionToken = 'ex';
    $request->googleCloudRetailV2betaUserEventInput->cartId = 'maiores';
    $request->googleCloudRetailV2betaUserEventInput->completionDetail = new GoogleCloudRetailV2betaCompletionDetail();
    $request->googleCloudRetailV2betaUserEventInput->completionDetail->completionAttributionToken = 'corrupti';
    $request->googleCloudRetailV2betaUserEventInput->completionDetail->selectedPosition = 871786;
    $request->googleCloudRetailV2betaUserEventInput->completionDetail->selectedSuggestion = 'error';
    $request->googleCloudRetailV2betaUserEventInput->entity = 'blanditiis';
    $request->googleCloudRetailV2betaUserEventInput->eventTime = 'suscipit';
    $request->googleCloudRetailV2betaUserEventInput->eventType = 'repudiandae';
    $request->googleCloudRetailV2betaUserEventInput->experimentIds = [
        'atque',
        'sunt',
        'recusandae',
    ];
    $request->googleCloudRetailV2betaUserEventInput->filter = 'dolorum';
    $request->googleCloudRetailV2betaUserEventInput->offset = 829898;
    $request->googleCloudRetailV2betaUserEventInput->orderBy = 'labore';
    $request->googleCloudRetailV2betaUserEventInput->pageCategories = [
        'doloremque',
        'repudiandae',
        'dicta',
        'accusantium',
    ];
    $request->googleCloudRetailV2betaUserEventInput->pageViewId = 'beatae';
    $request->googleCloudRetailV2betaUserEventInput->productDetails = [
        new GoogleCloudRetailV2betaProductDetailInput(),
    ];
    $request->googleCloudRetailV2betaUserEventInput->purchaseTransaction = new GoogleCloudRetailV2betaPurchaseTransaction();
    $request->googleCloudRetailV2betaUserEventInput->purchaseTransaction->cost = 3164.88;
    $request->googleCloudRetailV2betaUserEventInput->purchaseTransaction->currencyCode = 'laboriosam';
    $request->googleCloudRetailV2betaUserEventInput->purchaseTransaction->id = '3f94e29e-973e-4922-a57a-15be3e060807';
    $request->googleCloudRetailV2betaUserEventInput->purchaseTransaction->revenue = 9077.33;
    $request->googleCloudRetailV2betaUserEventInput->purchaseTransaction->tax = 1843.62;
    $request->googleCloudRetailV2betaUserEventInput->referrerUri = 'cum';
    $request->googleCloudRetailV2betaUserEventInput->searchQuery = 'iure';
    $request->googleCloudRetailV2betaUserEventInput->sessionId = 'necessitatibus';
    $request->googleCloudRetailV2betaUserEventInput->uri = 'http://quiet-rabbit.name';
    $request->googleCloudRetailV2betaUserEventInput->userInfo = new GoogleCloudRetailV2betaUserInfo();
    $request->googleCloudRetailV2betaUserEventInput->userInfo->directUserRequest = false;
    $request->googleCloudRetailV2betaUserEventInput->userInfo->ipAddress = 'rem';
    $request->googleCloudRetailV2betaUserEventInput->userInfo->userAgent = 'aliquam';
    $request->googleCloudRetailV2betaUserEventInput->userInfo->userId = 'ad';
    $request->googleCloudRetailV2betaUserEventInput->visitorId = 'repellat';
    $request->accessToken = 'alias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perspiciatis';
    $request->fields = 'nihil';
    $request->key = 'mollitia';
    $request->oauthToken = 'voluptas';
    $request->parent = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'dolores';
    $request->writeAsync = false;

    $requestSecurity = new RetailProjectsLocationsCatalogsUserEventsWriteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsUserEventsWrite($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaUserEvent !== null) {
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
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'nesciunt';
    $request->key = 'quae';
    $request->name = 'Arturo Hagenes';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'debitis';

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
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'esse';
    $request->filter = 'provident';
    $request->key = 'quis';
    $request->name = 'Johanna Medhurst';
    $request->oauthToken = 'quasi';
    $request->pageSize = 657020;
    $request->pageToken = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'possimus';

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
