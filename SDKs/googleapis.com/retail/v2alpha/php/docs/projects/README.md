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
* [retailProjectsLocationsCatalogsBranchesProductsPurge](#retailprojectslocationscatalogsbranchesproductspurge) - Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.
* [retailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces](#retailprojectslocationscatalogsbranchesproductsremovefulfillmentplaces) - We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [retailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories](#retailprojectslocationscatalogsbranchesproductsremovelocalinventories) - Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [retailProjectsLocationsCatalogsBranchesProductsSetInventory](#retailprojectslocationscatalogsbranchesproductssetinventory) - Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.
* [retailProjectsLocationsCatalogsCompleteQuery](#retailprojectslocationscatalogscompletequery) - Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* [retailProjectsLocationsCatalogsCompletionDataImport](#retailprojectslocationscatalogscompletiondataimport) - Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* [retailProjectsLocationsCatalogsControlsCreate](#retailprojectslocationscatalogscontrolscreate) - Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
* [retailProjectsLocationsCatalogsControlsList](#retailprojectslocationscatalogscontrolslist) - Lists all Controls by their parent Catalog.
* [retailProjectsLocationsCatalogsGetDefaultBranch](#retailprojectslocationscatalogsgetdefaultbranch) - Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
* [retailProjectsLocationsCatalogsList](#retailprojectslocationscatalogslist) - Lists all the Catalogs associated with the project.
* [retailProjectsLocationsCatalogsMerchantCenterAccountLinksCreate](#retailprojectslocationscatalogsmerchantcenteraccountlinkscreate) - Creates a MerchantCenterAccountLink.
* [retailProjectsLocationsCatalogsMerchantCenterAccountLinksList](#retailprojectslocationscatalogsmerchantcenteraccountlinkslist) - Lists all MerchantCenterAccountLinks under the specified parent Catalog.
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput = new GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput();
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute = new GoogleCloudRetailV2alphaCatalogAttributeInput();
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->dynamicFacetableOption = GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum::DYNAMIC_FACETABLE_DISABLED;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->exactSearchableOption = GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum::EXACT_SEARCHABLE_ENABLED;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->facetIntervals = [
        new GoogleCloudRetailV2alphaInterval(),
        new GoogleCloudRetailV2alphaInterval(),
    ];
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->ignoredFacetValues = [
        new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues(),
        new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues(),
        new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues(),
    ];
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->indexableOption = GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum::INDEXABLE_ENABLED;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->key = 'recusandae';
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->recommendationsFilteringOption = GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum::RECOMMENDATIONS_FILTERING_ENABLED;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->retrievableOption = GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum::RETRIEVABLE_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->searchableOption = GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum::SEARCHABLE_ENABLED;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->attributesConfig = 'perferendis';
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaAttributesConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest = new GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest();
    $request->googleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest->attributeKeys = [
        'quod',
        'quod',
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->attributesConfig = 'porro';
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->key = 'nam';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaRemoveCatalogAttributeRequest = new GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest();
    $request->googleCloudRetailV2alphaRemoveCatalogAttributeRequest->key = 'optio';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->attributesConfig = 'commodi';
    $request->callback = 'molestiae';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaAttributesConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput = new GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput();
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->catalogAttribute = new GoogleCloudRetailV2alphaCatalogAttributeInput();
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->catalogAttribute->dynamicFacetableOption = GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum::DYNAMIC_FACETABLE_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->catalogAttribute->exactSearchableOption = GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum::EXACT_SEARCHABLE_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->catalogAttribute->facetIntervals = [
        new GoogleCloudRetailV2alphaInterval(),
        new GoogleCloudRetailV2alphaInterval(),
    ];
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->catalogAttribute->ignoredFacetValues = [
        new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues(),
        new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues(),
        new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues(),
    ];
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->catalogAttribute->indexableOption = GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum::INDEXABLE_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->catalogAttribute->key = 'iste';
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->catalogAttribute->recommendationsFilteringOption = GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum::RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->catalogAttribute->retrievableOption = GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum::RETRIEVABLE_ENABLED;
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->catalogAttribute->searchableOption = GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum::SEARCHABLE_ENABLED;
    $request->googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput->updateMask = 'hic';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->attributesConfig = 'in';
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaAttributesConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaAddFulfillmentPlacesRequest = new GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest();
    $request->googleCloudRetailV2alphaAddFulfillmentPlacesRequest->addTime = 'est';
    $request->googleCloudRetailV2alphaAddFulfillmentPlacesRequest->allowMissing = false;
    $request->googleCloudRetailV2alphaAddFulfillmentPlacesRequest->placeIds = [
        'laborum',
        'dolores',
        'dolorem',
    ];
    $request->googleCloudRetailV2alphaAddFulfillmentPlacesRequest->type = 'corporis';
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->product = 'excepturi';
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAddLocalInventoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaLocalInventory;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaAddLocalInventoriesRequest = new GoogleCloudRetailV2alphaAddLocalInventoriesRequest();
    $request->googleCloudRetailV2alphaAddLocalInventoriesRequest->addMask = 'sapiente';
    $request->googleCloudRetailV2alphaAddLocalInventoriesRequest->addTime = 'architecto';
    $request->googleCloudRetailV2alphaAddLocalInventoriesRequest->allowMissing = false;
    $request->googleCloudRetailV2alphaAddLocalInventoriesRequest->localInventories = [
        new GoogleCloudRetailV2alphaLocalInventory(),
        new GoogleCloudRetailV2alphaLocalInventory(),
        new GoogleCloudRetailV2alphaLocalInventory(),
    ];
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->product = 'numquam';
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaProductInput = new GoogleCloudRetailV2alphaProductInput();
    $request->googleCloudRetailV2alphaProductInput->attributes = [
        'quia' => new GoogleCloudRetailV2alphaCustomAttribute(),
        'quis' => new GoogleCloudRetailV2alphaCustomAttribute(),
        'vitae' => new GoogleCloudRetailV2alphaCustomAttribute(),
    ];
    $request->googleCloudRetailV2alphaProductInput->audience = new GoogleCloudRetailV2alphaAudience();
    $request->googleCloudRetailV2alphaProductInput->audience->ageGroups = [
        'animi',
        'enim',
        'odit',
    ];
    $request->googleCloudRetailV2alphaProductInput->audience->genders = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->googleCloudRetailV2alphaProductInput->availability = GoogleCloudRetailV2alphaProductAvailabilityEnum::BACKORDER;
    $request->googleCloudRetailV2alphaProductInput->availableQuantity = 13571;
    $request->googleCloudRetailV2alphaProductInput->availableTime = 'quasi';
    $request->googleCloudRetailV2alphaProductInput->brands = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->googleCloudRetailV2alphaProductInput->categories = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->googleCloudRetailV2alphaProductInput->collectionMemberIds = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->googleCloudRetailV2alphaProductInput->colorInfo = new GoogleCloudRetailV2alphaColorInfo();
    $request->googleCloudRetailV2alphaProductInput->colorInfo->colorFamilies = [
        'doloremque',
    ];
    $request->googleCloudRetailV2alphaProductInput->colorInfo->colors = [
        'ut',
        'maiores',
    ];
    $request->googleCloudRetailV2alphaProductInput->conditions = [
        'corporis',
    ];
    $request->googleCloudRetailV2alphaProductInput->description = 'dolore';
    $request->googleCloudRetailV2alphaProductInput->expireTime = 'iusto';
    $request->googleCloudRetailV2alphaProductInput->fulfillmentInfo = [
        new GoogleCloudRetailV2alphaFulfillmentInfo(),
    ];
    $request->googleCloudRetailV2alphaProductInput->gtin = 'harum';
    $request->googleCloudRetailV2alphaProductInput->id = '5e6e13b9-9d48-48e1-a91e-450ad2abd442';
    $request->googleCloudRetailV2alphaProductInput->images = [
        new GoogleCloudRetailV2alphaImage(),
        new GoogleCloudRetailV2alphaImage(),
    ];
    $request->googleCloudRetailV2alphaProductInput->languageCode = 'cupiditate';
    $request->googleCloudRetailV2alphaProductInput->materials = [
        'perferendis',
        'magni',
        'assumenda',
    ];
    $request->googleCloudRetailV2alphaProductInput->name = 'Linda Corkery';
    $request->googleCloudRetailV2alphaProductInput->patterns = [
        'facilis',
        'tempore',
    ];
    $request->googleCloudRetailV2alphaProductInput->priceInfo = new GoogleCloudRetailV2alphaPriceInfo();
    $request->googleCloudRetailV2alphaProductInput->priceInfo->cost = 2884.76;
    $request->googleCloudRetailV2alphaProductInput->priceInfo->currencyCode = 'delectus';
    $request->googleCloudRetailV2alphaProductInput->priceInfo->originalPrice = 4332.88;
    $request->googleCloudRetailV2alphaProductInput->priceInfo->price = 2487.53;
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceEffectiveTime = 'eligendi';
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceExpireTime = 'sint';
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange();
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange->originalPrice = new GoogleCloudRetailV2alphaInterval();
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange->originalPrice->exclusiveMaximum = 3960.98;
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange->originalPrice->exclusiveMinimum = 5920.42;
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange->originalPrice->maximum = 8960.39;
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange->originalPrice->minimum = 5722.52;
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange->price = new GoogleCloudRetailV2alphaInterval();
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange->price->exclusiveMaximum = 6389.21;
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange->price->exclusiveMinimum = 2230.81;
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange->price->maximum = 8915.55;
    $request->googleCloudRetailV2alphaProductInput->priceInfo->priceRange->price->minimum = 9527.49;
    $request->googleCloudRetailV2alphaProductInput->primaryProductId = 'dolorum';
    $request->googleCloudRetailV2alphaProductInput->promotions = [
        new GoogleCloudRetailV2alphaPromotion(),
        new GoogleCloudRetailV2alphaPromotion(),
    ];
    $request->googleCloudRetailV2alphaProductInput->publishTime = 'in';
    $request->googleCloudRetailV2alphaProductInput->rating = new GoogleCloudRetailV2alphaRating();
    $request->googleCloudRetailV2alphaProductInput->rating->averageRating = 8464.09;
    $request->googleCloudRetailV2alphaProductInput->rating->ratingCount = 978571;
    $request->googleCloudRetailV2alphaProductInput->rating->ratingHistogram = [
        116202,
        297437,
        767024,
    ];
    $request->googleCloudRetailV2alphaProductInput->retrievableFields = 'facere';
    $request->googleCloudRetailV2alphaProductInput->sizes = [
        'aliquid',
        'laborum',
    ];
    $request->googleCloudRetailV2alphaProductInput->tags = [
        'non',
        'occaecati',
        'enim',
        'accusamus',
    ];
    $request->googleCloudRetailV2alphaProductInput->title = 'Dr.';
    $request->googleCloudRetailV2alphaProductInput->ttl = 'quidem';
    $request->googleCloudRetailV2alphaProductInput->type = GoogleCloudRetailV2alphaProductTypeEnum::VARIANT;
    $request->googleCloudRetailV2alphaProductInput->uri = 'https://pungent-latter.name';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->key = 'vel';
    $request->oauthToken = 'natus';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->productId = 'molestiae';
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsCreate($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaProduct !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImportProductsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImportErrorsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductInputConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaBigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductInlineSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaImportProductsRequestInput = new GoogleCloudRetailV2alphaImportProductsRequestInput();
    $request->googleCloudRetailV2alphaImportProductsRequestInput->errorsConfig = new GoogleCloudRetailV2alphaImportErrorsConfig();
    $request->googleCloudRetailV2alphaImportProductsRequestInput->errorsConfig->gcsPrefix = 'id';
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig = new GoogleCloudRetailV2alphaProductInputConfigInput();
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->bigQuerySource = new GoogleCloudRetailV2alphaBigQuerySource();
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->bigQuerySource->dataSchema = 'labore';
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->bigQuerySource->datasetId = 'labore';
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->bigQuerySource->gcsStagingDir = 'suscipit';
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate->day = 618016;
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate->month = 749170;
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->bigQuerySource->partitionDate->year = 428769;
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->bigQuerySource->projectId = 'vero';
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->bigQuerySource->tableId = 'aspernatur';
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->gcsSource = new GoogleCloudRetailV2alphaGcsSource();
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->gcsSource->dataSchema = 'architecto';
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->gcsSource->inputUris = [
        'et',
        'excepturi',
    ];
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->productInlineSource = new GoogleCloudRetailV2alphaProductInlineSourceInput();
    $request->googleCloudRetailV2alphaImportProductsRequestInput->inputConfig->productInlineSource->products = [
        new GoogleCloudRetailV2alphaProductInput(),
        new GoogleCloudRetailV2alphaProductInput(),
    ];
    $request->googleCloudRetailV2alphaImportProductsRequestInput->notificationPubsubTopic = 'provident';
    $request->googleCloudRetailV2alphaImportProductsRequestInput->reconciliationMode = GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum::INCREMENTAL;
    $request->googleCloudRetailV2alphaImportProductsRequestInput->requestId = 'sint';
    $request->googleCloudRetailV2alphaImportProductsRequestInput->skipDefaultBranchProtection = false;
    $request->googleCloudRetailV2alphaImportProductsRequestInput->updateMask = 'accusantium';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'ad';
    $request->key = 'eum';
    $request->oauthToken = 'dolor';
    $request->parent = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'quasi';

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
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'maxime';
    $request->filter = 'deleniti';
    $request->key = 'facilis';
    $request->oauthToken = 'in';
    $request->pageSize = 100226;
    $request->pageToken = 'architecto';
    $request->parent = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->readMask = 'expedita';
    $request->requireTotalSize = false;
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaListProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsBranchesProductsPurge

Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsPurgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPurgeProductsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsPurgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsPurgeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaPurgeProductsRequest = new GoogleCloudRetailV2alphaPurgeProductsRequest();
    $request->googleCloudRetailV2alphaPurgeProductsRequest->filter = 'sed';
    $request->googleCloudRetailV2alphaPurgeProductsRequest->force = false;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'consequuntur';
    $request->key = 'praesentium';
    $request->oauthToken = 'natus';
    $request->parent = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new RetailProjectsLocationsCatalogsBranchesProductsPurgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsBranchesProductsPurge($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaRemoveFulfillmentPlacesRequest = new GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest();
    $request->googleCloudRetailV2alphaRemoveFulfillmentPlacesRequest->allowMissing = false;
    $request->googleCloudRetailV2alphaRemoveFulfillmentPlacesRequest->placeIds = [
        'ea',
        'excepturi',
        'odit',
        'ea',
    ];
    $request->googleCloudRetailV2alphaRemoveFulfillmentPlacesRequest->removeTime = 'accusantium';
    $request->googleCloudRetailV2alphaRemoveFulfillmentPlacesRequest->type = 'ab';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'voluptate';
    $request->key = 'autem';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->product = 'eaque';
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaRemoveLocalInventoriesRequest = new GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest();
    $request->googleCloudRetailV2alphaRemoveLocalInventoriesRequest->allowMissing = false;
    $request->googleCloudRetailV2alphaRemoveLocalInventoriesRequest->placeIds = [
        'amet',
        'aut',
        'cumque',
        'corporis',
    ];
    $request->googleCloudRetailV2alphaRemoveLocalInventoriesRequest->removeTime = 'hic';
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'quis';
    $request->key = 'totam';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->product = 'eaque';
    $request->quotaUser = 'quis';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'eos';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSetInventoryRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput = new GoogleCloudRetailV2alphaSetInventoryRequestInput();
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->allowMissing = false;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory = new GoogleCloudRetailV2alphaProductInput();
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->attributes = [
        'minus' => new GoogleCloudRetailV2alphaCustomAttribute(),
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->audience = new GoogleCloudRetailV2alphaAudience();
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->audience->ageGroups = [
        'dolor',
        'vero',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->audience->genders = [
        'hic',
        'recusandae',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->availability = GoogleCloudRetailV2alphaProductAvailabilityEnum::PREORDER;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->availableQuantity = 704415;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->availableTime = 'perspiciatis';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->brands = [
        'porro',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->categories = [
        'blanditiis',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->collectionMemberIds = [
        'eaque',
        'occaecati',
        'rerum',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->colorInfo = new GoogleCloudRetailV2alphaColorInfo();
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->colorInfo->colorFamilies = [
        'asperiores',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->colorInfo->colors = [
        'modi',
        'iste',
        'dolorum',
        'deleniti',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->conditions = [
        'provident',
        'nobis',
        'libero',
        'delectus',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->description = 'quaerat';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->expireTime = 'quos';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->fulfillmentInfo = [
        new GoogleCloudRetailV2alphaFulfillmentInfo(),
        new GoogleCloudRetailV2alphaFulfillmentInfo(),
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->gtin = 'dolorem';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->id = '3323f9b7-7f3a-4410-8674-ebf69280d1ba';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->images = [
        new GoogleCloudRetailV2alphaImage(),
        new GoogleCloudRetailV2alphaImage(),
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->languageCode = 'voluptate';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->materials = [
        'deleniti',
        'omnis',
        'necessitatibus',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->name = 'Emmett Kovacek';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->patterns = [
        'saepe',
        'eius',
        'aspernatur',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo = new GoogleCloudRetailV2alphaPriceInfo();
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->cost = 206.51;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->currencyCode = 'amet';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->originalPrice = 7583.79;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->price = 8815.86;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceEffectiveTime = 'ad';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceExpireTime = 'saepe';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange();
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice = new GoogleCloudRetailV2alphaInterval();
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->exclusiveMaximum = 3834.64;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->exclusiveMinimum = 6457.85;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->maximum = 5883.17;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange->originalPrice->minimum = 3246.83;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange->price = new GoogleCloudRetailV2alphaInterval();
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange->price->exclusiveMaximum = 8310.49;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange->price->exclusiveMinimum = 5197.11;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange->price->maximum = 6289.82;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->priceInfo->priceRange->price->minimum = 0.55;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->primaryProductId = 'at';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->promotions = [
        new GoogleCloudRetailV2alphaPromotion(),
        new GoogleCloudRetailV2alphaPromotion(),
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->publishTime = 'tempora';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->rating = new GoogleCloudRetailV2alphaRating();
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->rating->averageRating = 4254.51;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->rating->ratingCount = 798047;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->rating->ratingHistogram = [
        185636,
        679880,
        952792,
        456130,
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->retrievableFields = 'harum';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->sizes = [
        'ipsum',
        'quisquam',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->tags = [
        'amet',
        'tempore',
        'accusamus',
        'numquam',
    ];
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->title = 'Mrs.';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->ttl = 'dolorem';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->type = GoogleCloudRetailV2alphaProductTypeEnum::COLLECTION;
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->inventory->uri = 'https://knowing-amenity.net';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->setMask = 'neque';
    $request->googleCloudRetailV2alphaSetInventoryRequestInput->setTime = 'sed';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'deserunt';
    $request->key = 'quam';
    $request->name = 'Amber Dibbert';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'laborum';

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
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->catalog = 'distinctio';
    $request->dataset = 'facilis';
    $request->deviceType = 'aliquid';
    $request->enableAttributeSuggestions = false;
    $request->entity = 'quam';
    $request->fields = 'molestias';
    $request->key = 'temporibus';
    $request->languageCodes = [
        'neque',
    ];
    $request->maxSuggestions = 144847;
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->query = 'odio';
    $request->quotaUser = 'sunt';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'nam';
    $request->visitorId = 'hic';

    $requestSecurity = new RetailProjectsLocationsCatalogsCompleteQuerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsCompleteQuery($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaCompleteQueryResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImportCompletionDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCompletionDataInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaBigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsCompletionDataImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsCompletionDataImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaImportCompletionDataRequest = new GoogleCloudRetailV2alphaImportCompletionDataRequest();
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig = new GoogleCloudRetailV2alphaCompletionDataInputConfig();
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig->bigQuerySource = new GoogleCloudRetailV2alphaBigQuerySource();
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig->bigQuerySource->dataSchema = 'cumque';
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig->bigQuerySource->datasetId = 'soluta';
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig->bigQuerySource->gcsStagingDir = 'nobis';
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate->day = 92596;
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate->month = 903720;
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig->bigQuerySource->partitionDate->year = 217450;
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig->bigQuerySource->projectId = 'veritatis';
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->inputConfig->bigQuerySource->tableId = 'nobis';
    $request->googleCloudRetailV2alphaImportCompletionDataRequest->notificationPubsubTopic = 'quos';
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'delectus';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolore';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'architecto';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaControlInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRuleBoostAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaConditionTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaConditionQueryTerm;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRuleDoNotAssociateAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRuleFilterAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRuleIgnoreAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRuleOnewaySynonymsAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRuleRedirectAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRuleReplacementAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRuleTwowaySynonymsAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaControlSolutionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsControlsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsControlsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaControlInput = new GoogleCloudRetailV2alphaControlInput();
    $request->googleCloudRetailV2alphaControlInput->displayName = 'aut';
    $request->googleCloudRetailV2alphaControlInput->facetSpec = new GoogleCloudRetailV2alphaSearchRequestFacetSpec();
    $request->googleCloudRetailV2alphaControlInput->facetSpec->enableDynamicPosition = false;
    $request->googleCloudRetailV2alphaControlInput->facetSpec->excludedFilterKeys = [
        'itaque',
        'consequatur',
        'est',
    ];
    $request->googleCloudRetailV2alphaControlInput->facetSpec->facetKey = new GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey();
    $request->googleCloudRetailV2alphaControlInput->facetSpec->facetKey->caseInsensitive = false;
    $request->googleCloudRetailV2alphaControlInput->facetSpec->facetKey->contains = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->googleCloudRetailV2alphaControlInput->facetSpec->facetKey->intervals = [
        new GoogleCloudRetailV2alphaInterval(),
        new GoogleCloudRetailV2alphaInterval(),
        new GoogleCloudRetailV2alphaInterval(),
    ];
    $request->googleCloudRetailV2alphaControlInput->facetSpec->facetKey->key = 'qui';
    $request->googleCloudRetailV2alphaControlInput->facetSpec->facetKey->orderBy = 'quae';
    $request->googleCloudRetailV2alphaControlInput->facetSpec->facetKey->prefixes = [
        'odio',
        'occaecati',
        'voluptatibus',
    ];
    $request->googleCloudRetailV2alphaControlInput->facetSpec->facetKey->query = 'quisquam';
    $request->googleCloudRetailV2alphaControlInput->facetSpec->facetKey->restrictedValues = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->googleCloudRetailV2alphaControlInput->facetSpec->facetKey->returnMinMax = false;
    $request->googleCloudRetailV2alphaControlInput->facetSpec->limit = 455169;
    $request->googleCloudRetailV2alphaControlInput->name = 'Meghan Wiegand';
    $request->googleCloudRetailV2alphaControlInput->rule = new GoogleCloudRetailV2alphaRule();
    $request->googleCloudRetailV2alphaControlInput->rule->boostAction = new GoogleCloudRetailV2alphaRuleBoostAction();
    $request->googleCloudRetailV2alphaControlInput->rule->boostAction->boost = 7155.61;
    $request->googleCloudRetailV2alphaControlInput->rule->boostAction->productsFilter = 'quod';
    $request->googleCloudRetailV2alphaControlInput->rule->condition = new GoogleCloudRetailV2alphaCondition();
    $request->googleCloudRetailV2alphaControlInput->rule->condition->activeTimeRange = [
        new GoogleCloudRetailV2alphaConditionTimeRange(),
        new GoogleCloudRetailV2alphaConditionTimeRange(),
    ];
    $request->googleCloudRetailV2alphaControlInput->rule->condition->queryTerms = [
        new GoogleCloudRetailV2alphaConditionQueryTerm(),
        new GoogleCloudRetailV2alphaConditionQueryTerm(),
        new GoogleCloudRetailV2alphaConditionQueryTerm(),
    ];
    $request->googleCloudRetailV2alphaControlInput->rule->doNotAssociateAction = new GoogleCloudRetailV2alphaRuleDoNotAssociateAction();
    $request->googleCloudRetailV2alphaControlInput->rule->doNotAssociateAction->doNotAssociateTerms = [
        'vero',
        'ducimus',
        'dolore',
    ];
    $request->googleCloudRetailV2alphaControlInput->rule->doNotAssociateAction->queryTerms = [
        'illum',
        'sequi',
        'natus',
        'impedit',
    ];
    $request->googleCloudRetailV2alphaControlInput->rule->doNotAssociateAction->terms = [
        'voluptatibus',
    ];
    $request->googleCloudRetailV2alphaControlInput->rule->filterAction = new GoogleCloudRetailV2alphaRuleFilterAction();
    $request->googleCloudRetailV2alphaControlInput->rule->filterAction->filter = 'exercitationem';
    $request->googleCloudRetailV2alphaControlInput->rule->ignoreAction = new GoogleCloudRetailV2alphaRuleIgnoreAction();
    $request->googleCloudRetailV2alphaControlInput->rule->ignoreAction->ignoreTerms = [
        'fugit',
        'porro',
        'maiores',
        'doloribus',
    ];
    $request->googleCloudRetailV2alphaControlInput->rule->onewaySynonymsAction = new GoogleCloudRetailV2alphaRuleOnewaySynonymsAction();
    $request->googleCloudRetailV2alphaControlInput->rule->onewaySynonymsAction->onewayTerms = [
        'eligendi',
        'ducimus',
    ];
    $request->googleCloudRetailV2alphaControlInput->rule->onewaySynonymsAction->queryTerms = [
        'officia',
    ];
    $request->googleCloudRetailV2alphaControlInput->rule->onewaySynonymsAction->synonyms = [
        'ipsam',
        'ea',
    ];
    $request->googleCloudRetailV2alphaControlInput->rule->redirectAction = new GoogleCloudRetailV2alphaRuleRedirectAction();
    $request->googleCloudRetailV2alphaControlInput->rule->redirectAction->redirectUri = 'aspernatur';
    $request->googleCloudRetailV2alphaControlInput->rule->replacementAction = new GoogleCloudRetailV2alphaRuleReplacementAction();
    $request->googleCloudRetailV2alphaControlInput->rule->replacementAction->queryTerms = [
        'possimus',
        'magnam',
    ];
    $request->googleCloudRetailV2alphaControlInput->rule->replacementAction->replacementTerm = 'ratione';
    $request->googleCloudRetailV2alphaControlInput->rule->replacementAction->term = 'ex';
    $request->googleCloudRetailV2alphaControlInput->rule->twowaySynonymsAction = new GoogleCloudRetailV2alphaRuleTwowaySynonymsAction();
    $request->googleCloudRetailV2alphaControlInput->rule->twowaySynonymsAction->synonyms = [
        'dicta',
        'dolor',
        'maiores',
    ];
    $request->googleCloudRetailV2alphaControlInput->searchSolutionUseCase = [
        GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum::SEARCH_SOLUTION_USE_CASE_SEARCH,
    ];
    $request->googleCloudRetailV2alphaControlInput->solutionTypes = [
        GoogleCloudRetailV2alphaControlSolutionTypesEnum::SOLUTION_TYPE_RECOMMENDATION,
        GoogleCloudRetailV2alphaControlSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
        GoogleCloudRetailV2alphaControlSolutionTypesEnum::SOLUTION_TYPE_RECOMMENDATION,
        GoogleCloudRetailV2alphaControlSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
    ];
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->controlId = 'impedit';
    $request->fields = 'corporis';
    $request->key = 'veniam';
    $request->oauthToken = 'aliquid';
    $request->parent = 'inventore';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new RetailProjectsLocationsCatalogsControlsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsControlsCreate($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaControl !== null) {
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
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minima';
    $request->fields = 'eaque';
    $request->filter = 'a';
    $request->key = 'libero';
    $request->oauthToken = 'aut';
    $request->pageSize = 11427;
    $request->pageToken = 'deleniti';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquam';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new RetailProjectsLocationsCatalogsControlsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsControlsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaListControlsResponse !== null) {
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
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->catalog = 'laborum';
    $request->fields = 'placeat';
    $request->key = 'velit';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new RetailProjectsLocationsCatalogsGetDefaultBranchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsGetDefaultBranch($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaGetDefaultBranchResponse !== null) {
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

    $requestSecurity = new RetailProjectsLocationsCatalogsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaListCatalogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsMerchantCenterAccountLinksCreate

Creates a MerchantCenterAccountLink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaMerchantCenterAccountLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaMerchantCenterAccountLinkInput = new GoogleCloudRetailV2alphaMerchantCenterAccountLinkInput();
    $request->googleCloudRetailV2alphaMerchantCenterAccountLinkInput->branchId = 'esse';
    $request->googleCloudRetailV2alphaMerchantCenterAccountLinkInput->feedFilters = [
        new GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter(),
        new GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter(),
    ];
    $request->googleCloudRetailV2alphaMerchantCenterAccountLinkInput->feedLabel = 'rem';
    $request->googleCloudRetailV2alphaMerchantCenterAccountLinkInput->languageCode = 'fuga';
    $request->googleCloudRetailV2alphaMerchantCenterAccountLinkInput->merchantCenterAccountId = 'reprehenderit';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->fields = 'eum';
    $request->key = 'suscipit';
    $request->oauthToken = 'assumenda';
    $request->parent = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsMerchantCenterAccountLinksCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retailProjectsLocationsCatalogsMerchantCenterAccountLinksList

Lists all MerchantCenterAccountLinks under the specified parent Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'quo';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsMerchantCenterAccountLinksList($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaListMerchantCenterAccountLinksResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelFilteringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelModelFeaturesConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelPageOptimizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaModelTrainingStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsModelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsModelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaModelInput = new GoogleCloudRetailV2alphaModelInput();
    $request->googleCloudRetailV2alphaModelInput->displayName = 'cupiditate';
    $request->googleCloudRetailV2alphaModelInput->filteringOption = GoogleCloudRetailV2alphaModelFilteringOptionEnum::RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED;
    $request->googleCloudRetailV2alphaModelInput->modelFeaturesConfig = new GoogleCloudRetailV2alphaModelModelFeaturesConfig();
    $request->googleCloudRetailV2alphaModelInput->modelFeaturesConfig->frequentlyBoughtTogetherConfig = new GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfig();
    $request->googleCloudRetailV2alphaModelInput->modelFeaturesConfig->frequentlyBoughtTogetherConfig->contextProductsType = GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum::CONTEXT_PRODUCTS_TYPE_UNSPECIFIED;
    $request->googleCloudRetailV2alphaModelInput->name = 'Roberto Collier';
    $request->googleCloudRetailV2alphaModelInput->optimizationObjective = 'esse';
    $request->googleCloudRetailV2alphaModelInput->pageOptimizationConfig = new GoogleCloudRetailV2alphaModelPageOptimizationConfig();
    $request->googleCloudRetailV2alphaModelInput->pageOptimizationConfig->pageOptimizationEventType = 'recusandae';
    $request->googleCloudRetailV2alphaModelInput->pageOptimizationConfig->panels = [
        new GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel(),
    ];
    $request->googleCloudRetailV2alphaModelInput->pageOptimizationConfig->restriction = GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum::UNIQUE_MODEL_RESTRICTION;
    $request->googleCloudRetailV2alphaModelInput->periodicTuningState = GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum::PERIODIC_TUNING_ENABLED;
    $request->googleCloudRetailV2alphaModelInput->trainingState = GoogleCloudRetailV2alphaModelTrainingStateEnum::PAUSED;
    $request->googleCloudRetailV2alphaModelInput->type = 'inventore';
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->dryRun = false;
    $request->fields = 'aliquam';
    $request->key = 'odio';
    $request->oauthToken = 'occaecati';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'deserunt';

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
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'quas';
    $request->key = 'praesentium';
    $request->oauthToken = 'consequuntur';
    $request->pageSize = 536178;
    $request->pageToken = 'fugit';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaListModelsResponse !== null) {
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
        'nisi' => 'fugit',
        'sapiente' => 'consequuntur',
    ];
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'occaecati';
    $request->key = 'atque';
    $request->name = 'Tamara Vandervort IV';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsPause($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaModel !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'vel' => 'harum',
        'molestiae' => 'rerum',
        'occaecati' => 'minima',
        'distinctio' => 'eligendi',
    ];
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'adipisci';
    $request->key = 'cumque';
    $request->name = 'Elizabeth Schinner';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new RetailProjectsLocationsCatalogsModelsResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsModelsResume($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaModel !== null) {
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
        'quas' => 'esse',
        'quasi' => 'a',
        'error' => 'sint',
        'pariatur' => 'possimus',
    ];
    $request->accessToken = 'quia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->fields = 'facere';
    $request->key = 'veritatis';
    $request->name = 'Ann Murphy';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'vel';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAddControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsAddControlRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaAddControlRequest = new GoogleCloudRetailV2alphaAddControlRequest();
    $request->googleCloudRetailV2alphaAddControlRequest->controlId = 'eius';
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'accusantium';
    $request->key = 'aliquam';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->servingConfig = 'ullam';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsAddControl($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaServingConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaServingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaServingConfig = new GoogleCloudRetailV2alphaServingConfig();
    $request->googleCloudRetailV2alphaServingConfig->boostControlIds = [
        'voluptatum',
    ];
    $request->googleCloudRetailV2alphaServingConfig->displayName = 'qui';
    $request->googleCloudRetailV2alphaServingConfig->diversityLevel = 'quibusdam';
    $request->googleCloudRetailV2alphaServingConfig->diversityType = GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum::RULE_BASED_DIVERSITY;
    $request->googleCloudRetailV2alphaServingConfig->doNotAssociateControlIds = [
        'itaque',
        'dolorum',
        'architecto',
    ];
    $request->googleCloudRetailV2alphaServingConfig->dynamicFacetSpec = new GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec();
    $request->googleCloudRetailV2alphaServingConfig->dynamicFacetSpec->mode = GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum::DISABLED;
    $request->googleCloudRetailV2alphaServingConfig->enableCategoryFilterLevel = 'tenetur';
    $request->googleCloudRetailV2alphaServingConfig->facetControlIds = [
        'at',
    ];
    $request->googleCloudRetailV2alphaServingConfig->filterControlIds = [
        'voluptate',
    ];
    $request->googleCloudRetailV2alphaServingConfig->ignoreControlIds = [
        'minima',
    ];
    $request->googleCloudRetailV2alphaServingConfig->modelId = 'veritatis';
    $request->googleCloudRetailV2alphaServingConfig->name = 'Sherry Morar IV';
    $request->googleCloudRetailV2alphaServingConfig->onewaySynonymsControlIds = [
        'laudantium',
    ];
    $request->googleCloudRetailV2alphaServingConfig->personalizationSpec = new GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec();
    $request->googleCloudRetailV2alphaServingConfig->personalizationSpec->mode = GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum::AUTO;
    $request->googleCloudRetailV2alphaServingConfig->priceRerankingLevel = 'mollitia';
    $request->googleCloudRetailV2alphaServingConfig->redirectControlIds = [
        'corrupti',
    ];
    $request->googleCloudRetailV2alphaServingConfig->replacementControlIds = [
        'voluptatem',
        'dolor',
    ];
    $request->googleCloudRetailV2alphaServingConfig->solutionTypes = [
        GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum::SOLUTION_TYPE_UNSPECIFIED,
        GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
        GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum::SOLUTION_TYPE_UNSPECIFIED,
    ];
    $request->googleCloudRetailV2alphaServingConfig->twowaySynonymsControlIds = [
        'aut',
        'dignissimos',
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'velit';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'voluptas';
    $request->parent = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->servingConfigId = 'ea';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaServingConfig !== null) {
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
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'officia';
    $request->force = false;
    $request->key = 'asperiores';
    $request->name = 'Anna Hahn';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'fuga';

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
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'est';
    $request->key = 'recusandae';
    $request->oauthToken = 'totam';
    $request->pageSize = 853940;
    $request->pageToken = 'vel';
    $request->parent = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsList($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaListServingConfigsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaServingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaServingConfig = new GoogleCloudRetailV2alphaServingConfig();
    $request->googleCloudRetailV2alphaServingConfig->boostControlIds = [
        'cum',
        'commodi',
        'in',
    ];
    $request->googleCloudRetailV2alphaServingConfig->displayName = 'corporis';
    $request->googleCloudRetailV2alphaServingConfig->diversityLevel = 'reiciendis';
    $request->googleCloudRetailV2alphaServingConfig->diversityType = GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum::DATA_DRIVEN_DIVERSITY;
    $request->googleCloudRetailV2alphaServingConfig->doNotAssociateControlIds = [
        'recusandae',
        'aliquid',
    ];
    $request->googleCloudRetailV2alphaServingConfig->dynamicFacetSpec = new GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec();
    $request->googleCloudRetailV2alphaServingConfig->dynamicFacetSpec->mode = GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum::MODE_UNSPECIFIED;
    $request->googleCloudRetailV2alphaServingConfig->enableCategoryFilterLevel = 'cum';
    $request->googleCloudRetailV2alphaServingConfig->facetControlIds = [
        'in',
    ];
    $request->googleCloudRetailV2alphaServingConfig->filterControlIds = [
        'earum',
        'facere',
    ];
    $request->googleCloudRetailV2alphaServingConfig->ignoreControlIds = [
        'doloribus',
        'suscipit',
    ];
    $request->googleCloudRetailV2alphaServingConfig->modelId = 'reiciendis';
    $request->googleCloudRetailV2alphaServingConfig->name = 'Bert Treutel DVM';
    $request->googleCloudRetailV2alphaServingConfig->onewaySynonymsControlIds = [
        'non',
    ];
    $request->googleCloudRetailV2alphaServingConfig->personalizationSpec = new GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec();
    $request->googleCloudRetailV2alphaServingConfig->personalizationSpec->mode = GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum::MODE_UNSPECIFIED;
    $request->googleCloudRetailV2alphaServingConfig->priceRerankingLevel = 'beatae';
    $request->googleCloudRetailV2alphaServingConfig->redirectControlIds = [
        'a',
        'debitis',
    ];
    $request->googleCloudRetailV2alphaServingConfig->replacementControlIds = [
        'corporis',
    ];
    $request->googleCloudRetailV2alphaServingConfig->solutionTypes = [
        GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum::SOLUTION_TYPE_RECOMMENDATION,
        GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum::SOLUTION_TYPE_UNSPECIFIED,
        GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum::SOLUTION_TYPE_SEARCH,
    ];
    $request->googleCloudRetailV2alphaServingConfig->twowaySynonymsControlIds = [
        'vitae',
        'accusamus',
        'similique',
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->fields = 'voluptas';
    $request->key = 'voluptas';
    $request->name = 'Gayle Parisian';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->updateMask = 'in';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsPatch($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaServingConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPredictRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaUserEventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCompletionDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductDetailInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsPredictSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsPredictRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaPredictRequestInput = new GoogleCloudRetailV2alphaPredictRequestInput();
    $request->googleCloudRetailV2alphaPredictRequestInput->filter = 'temporibus';
    $request->googleCloudRetailV2alphaPredictRequestInput->labels = [
        'adipisci' => 'cum',
        'blanditiis' => 'quas',
    ];
    $request->googleCloudRetailV2alphaPredictRequestInput->pageSize = 942584;
    $request->googleCloudRetailV2alphaPredictRequestInput->pageToken = 'nesciunt';
    $request->googleCloudRetailV2alphaPredictRequestInput->params = [
        'corrupti' => 'pariatur',
        'totam' => 'hic',
        'exercitationem' => 'nobis',
    ];
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent = new GoogleCloudRetailV2alphaUserEventInput();
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->attributes = [
        'rerum' => new GoogleCloudRetailV2alphaCustomAttribute(),
    ];
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->attributionToken = 'sed';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->cartId = 'reiciendis';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->completionDetail = new GoogleCloudRetailV2alphaCompletionDetail();
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->completionDetail->completionAttributionToken = 'explicabo';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->completionDetail->selectedPosition = 994401;
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->completionDetail->selectedSuggestion = 'facilis';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->entity = 'voluptate';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->eventTime = 'expedita';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->eventType = 'ab';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->experimentIds = [
        'dolore',
        'laborum',
        'sed',
    ];
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->filter = 'in';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->offset = 417486;
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->orderBy = 'quidem';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->pageCategories = [
        'voluptas',
    ];
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->pageViewId = 'unde';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->productDetails = [
        new GoogleCloudRetailV2alphaProductDetailInput(),
    ];
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->purchaseTransaction = new GoogleCloudRetailV2alphaPurchaseTransaction();
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->purchaseTransaction->cost = 3828.08;
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->purchaseTransaction->currencyCode = 'sapiente';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->purchaseTransaction->id = 'e1f08f42-94e3-4698-b447-f603e8b445e8';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->purchaseTransaction->revenue = 265.22;
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->purchaseTransaction->tax = 7505.95;
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->referrerUri = 'error';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->searchQuery = 'veniam';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->sessionId = 'minima';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->uri = 'https://whopping-stumbling.biz';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->userInfo = new GoogleCloudRetailV2alphaUserInfo();
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->userInfo->directUserRequest = false;
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->userInfo->ipAddress = 'aperiam';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->userInfo->userAgent = 'saepe';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->userInfo->userId = 'numquam';
    $request->googleCloudRetailV2alphaPredictRequestInput->userEvent->visitorId = 'veniam';
    $request->googleCloudRetailV2alphaPredictRequestInput->validateOnly = false;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->fields = 'laudantium';
    $request->key = 'exercitationem';
    $request->oauthToken = 'praesentium';
    $request->placement = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsPredictSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsPredict($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaPredictResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRemoveControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaRemoveControlRequest = new GoogleCloudRetailV2alphaRemoveControlRequest();
    $request->googleCloudRetailV2alphaRemoveControlRequest->controlId = 'hic';
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'dolorum';
    $request->key = 'nostrum';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->servingConfig = 'corrupti';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsRemoveControl($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaServingConfig !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestBoostSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestFacetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestSearchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsServingConfigsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsServingConfigsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaSearchRequest = new GoogleCloudRetailV2alphaSearchRequest();
    $request->googleCloudRetailV2alphaSearchRequest->boostSpec = new GoogleCloudRetailV2alphaSearchRequestBoostSpec();
    $request->googleCloudRetailV2alphaSearchRequest->boostSpec->conditionBoostSpecs = [
        new GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec(),
    ];
    $request->googleCloudRetailV2alphaSearchRequest->boostSpec->skipBoostSpecValidation = false;
    $request->googleCloudRetailV2alphaSearchRequest->branch = 'ut';
    $request->googleCloudRetailV2alphaSearchRequest->canonicalFilter = 'fugiat';
    $request->googleCloudRetailV2alphaSearchRequest->dynamicFacetSpec = new GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec();
    $request->googleCloudRetailV2alphaSearchRequest->dynamicFacetSpec->mode = GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum::MODE_UNSPECIFIED;
    $request->googleCloudRetailV2alphaSearchRequest->entity = 'culpa';
    $request->googleCloudRetailV2alphaSearchRequest->facetSpecs = [
        new GoogleCloudRetailV2alphaSearchRequestFacetSpec(),
        new GoogleCloudRetailV2alphaSearchRequestFacetSpec(),
        new GoogleCloudRetailV2alphaSearchRequestFacetSpec(),
    ];
    $request->googleCloudRetailV2alphaSearchRequest->filter = 'magnam';
    $request->googleCloudRetailV2alphaSearchRequest->labels = [
        'esse' => 'ipsam',
    ];
    $request->googleCloudRetailV2alphaSearchRequest->offset = 24527;
    $request->googleCloudRetailV2alphaSearchRequest->orderBy = 'voluptatum';
    $request->googleCloudRetailV2alphaSearchRequest->pageCategories = [
        'repudiandae',
        'corporis',
        'et',
    ];
    $request->googleCloudRetailV2alphaSearchRequest->pageSize = 502710;
    $request->googleCloudRetailV2alphaSearchRequest->pageToken = 'ex';
    $request->googleCloudRetailV2alphaSearchRequest->personalizationSpec = new GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec();
    $request->googleCloudRetailV2alphaSearchRequest->personalizationSpec->mode = GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum::MODE_UNSPECIFIED;
    $request->googleCloudRetailV2alphaSearchRequest->query = 'sit';
    $request->googleCloudRetailV2alphaSearchRequest->queryExpansionSpec = new GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec();
    $request->googleCloudRetailV2alphaSearchRequest->queryExpansionSpec->condition = GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum::DISABLED;
    $request->googleCloudRetailV2alphaSearchRequest->queryExpansionSpec->pinUnexpandedResults = false;
    $request->googleCloudRetailV2alphaSearchRequest->relevanceThreshold = GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum::HIGH;
    $request->googleCloudRetailV2alphaSearchRequest->searchMode = GoogleCloudRetailV2alphaSearchRequestSearchModeEnum::FACETED_SEARCH_ONLY;
    $request->googleCloudRetailV2alphaSearchRequest->spellCorrectionSpec = new GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec();
    $request->googleCloudRetailV2alphaSearchRequest->spellCorrectionSpec->mode = GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum::SUGGESTION_ONLY;
    $request->googleCloudRetailV2alphaSearchRequest->userInfo = new GoogleCloudRetailV2alphaUserInfo();
    $request->googleCloudRetailV2alphaSearchRequest->userInfo->directUserRequest = false;
    $request->googleCloudRetailV2alphaSearchRequest->userInfo->ipAddress = 'consequatur';
    $request->googleCloudRetailV2alphaSearchRequest->userInfo->userAgent = 'incidunt';
    $request->googleCloudRetailV2alphaSearchRequest->userInfo->userId = 'reiciendis';
    $request->googleCloudRetailV2alphaSearchRequest->variantRollupKeys = [
        'harum',
    ];
    $request->googleCloudRetailV2alphaSearchRequest->visitorId = 'dicta';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'quidem';
    $request->key = 'atque';
    $request->oauthToken = 'laborum';
    $request->placement = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new RetailProjectsLocationsCatalogsServingConfigsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsServingConfigsSearch($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaSearchResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaSetDefaultBranchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsSetDefaultBranchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsSetDefaultBranchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaSetDefaultBranchRequest = new GoogleCloudRetailV2alphaSetDefaultBranchRequest();
    $request->googleCloudRetailV2alphaSetDefaultBranchRequest->branchId = 'deserunt';
    $request->googleCloudRetailV2alphaSetDefaultBranchRequest->force = false;
    $request->googleCloudRetailV2alphaSetDefaultBranchRequest->note = 'voluptate';
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->catalog = 'repellendus';
    $request->fields = 'delectus';
    $request->key = 'voluptates';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'reprehenderit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'mollitia';
    $request->ets = 'veniam';
    $request->fields = 'voluptatem';
    $request->key = 'quisquam';
    $request->oauthToken = 'repudiandae';
    $request->parent = 'quasi';
    $request->prebuiltRule = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->rawJson = 'asperiores';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'suscipit';
    $request->uri = 'https://strange-blush.info';
    $request->userEvent = 'amet';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImportUserEventsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImportErrorsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaUserEventInputConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaBigQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaUserEventInlineSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaUserEventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCompletionDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductDetailInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput = new GoogleCloudRetailV2alphaImportUserEventsRequestInput();
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->errorsConfig = new GoogleCloudRetailV2alphaImportErrorsConfig();
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->errorsConfig->gcsPrefix = 'ea';
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig = new GoogleCloudRetailV2alphaUserEventInputConfigInput();
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->bigQuerySource = new GoogleCloudRetailV2alphaBigQuerySource();
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->bigQuerySource->dataSchema = 'atque';
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->bigQuerySource->datasetId = 'error';
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->bigQuerySource->gcsStagingDir = 'officiis';
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate = new GoogleTypeDate();
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate->day = 886961;
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate->month = 880107;
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->bigQuerySource->partitionDate->year = 618826;
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->bigQuerySource->projectId = 'minima';
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->bigQuerySource->tableId = 'aspernatur';
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->gcsSource = new GoogleCloudRetailV2alphaGcsSource();
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->gcsSource->dataSchema = 'ex';
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->gcsSource->inputUris = [
        'corrupti',
        'at',
        'error',
        'blanditiis',
    ];
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->userEventInlineSource = new GoogleCloudRetailV2alphaUserEventInlineSourceInput();
    $request->googleCloudRetailV2alphaImportUserEventsRequestInput->inputConfig->userEventInlineSource->userEvents = [
        new GoogleCloudRetailV2alphaUserEventInput(),
        new GoogleCloudRetailV2alphaUserEventInput(),
    ];
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->fields = 'sunt';
    $request->key = 'recusandae';
    $request->oauthToken = 'dolorum';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'doloremque';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPurgeUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsPurgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsPurgeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaPurgeUserEventsRequest = new GoogleCloudRetailV2alphaPurgeUserEventsRequest();
    $request->googleCloudRetailV2alphaPurgeUserEventsRequest->filter = 'dicta';
    $request->googleCloudRetailV2alphaPurgeUserEventsRequest->force = false;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->fields = 'enim';
    $request->key = 'laboriosam';
    $request->oauthToken = 'velit';
    $request->parent = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'saepe';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRejoinUserEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsRejoinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsRejoinRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaRejoinUserEventsRequest = new GoogleCloudRetailV2alphaRejoinUserEventsRequest();
    $request->googleCloudRetailV2alphaRejoinUserEventsRequest->userEventRejoinScope = GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnum::JOINED_EVENTS;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'adipisci';
    $request->key = 'eveniet';
    $request->oauthToken = 'occaecati';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'quis';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaUserEventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCompletionDetail;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductDetailInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAudience;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaColorInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaFulfillmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPriceInfoPriceRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPromotion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaRating;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaPurchaseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsUserEventsWriteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsUserEventsWriteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRetailV2alphaUserEventInput = new GoogleCloudRetailV2alphaUserEventInput();
    $request->googleCloudRetailV2alphaUserEventInput->attributes = [
        'illo' => new GoogleCloudRetailV2alphaCustomAttribute(),
        'corporis' => new GoogleCloudRetailV2alphaCustomAttribute(),
        'quidem' => new GoogleCloudRetailV2alphaCustomAttribute(),
    ];
    $request->googleCloudRetailV2alphaUserEventInput->attributionToken = 'eveniet';
    $request->googleCloudRetailV2alphaUserEventInput->cartId = 'non';
    $request->googleCloudRetailV2alphaUserEventInput->completionDetail = new GoogleCloudRetailV2alphaCompletionDetail();
    $request->googleCloudRetailV2alphaUserEventInput->completionDetail->completionAttributionToken = 'vero';
    $request->googleCloudRetailV2alphaUserEventInput->completionDetail->selectedPosition = 39615;
    $request->googleCloudRetailV2alphaUserEventInput->completionDetail->selectedSuggestion = 'iure';
    $request->googleCloudRetailV2alphaUserEventInput->entity = 'ipsa';
    $request->googleCloudRetailV2alphaUserEventInput->eventTime = 'totam';
    $request->googleCloudRetailV2alphaUserEventInput->eventType = 'quae';
    $request->googleCloudRetailV2alphaUserEventInput->experimentIds = [
        'eveniet',
        'qui',
    ];
    $request->googleCloudRetailV2alphaUserEventInput->filter = 'cum';
    $request->googleCloudRetailV2alphaUserEventInput->offset = 434761;
    $request->googleCloudRetailV2alphaUserEventInput->orderBy = 'necessitatibus';
    $request->googleCloudRetailV2alphaUserEventInput->pageCategories = [
        'laborum',
    ];
    $request->googleCloudRetailV2alphaUserEventInput->pageViewId = 'distinctio';
    $request->googleCloudRetailV2alphaUserEventInput->productDetails = [
        new GoogleCloudRetailV2alphaProductDetailInput(),
        new GoogleCloudRetailV2alphaProductDetailInput(),
        new GoogleCloudRetailV2alphaProductDetailInput(),
    ];
    $request->googleCloudRetailV2alphaUserEventInput->purchaseTransaction = new GoogleCloudRetailV2alphaPurchaseTransaction();
    $request->googleCloudRetailV2alphaUserEventInput->purchaseTransaction->cost = 5230.06;
    $request->googleCloudRetailV2alphaUserEventInput->purchaseTransaction->currencyCode = 'aliquam';
    $request->googleCloudRetailV2alphaUserEventInput->purchaseTransaction->id = '5f0597a6-0ff2-4a54-a31e-94764a3e865e';
    $request->googleCloudRetailV2alphaUserEventInput->purchaseTransaction->revenue = 4565.2;
    $request->googleCloudRetailV2alphaUserEventInput->purchaseTransaction->tax = 5920.81;
    $request->googleCloudRetailV2alphaUserEventInput->referrerUri = 'quis';
    $request->googleCloudRetailV2alphaUserEventInput->searchQuery = 'eum';
    $request->googleCloudRetailV2alphaUserEventInput->sessionId = 'reiciendis';
    $request->googleCloudRetailV2alphaUserEventInput->uri = 'https://complete-flu.com';
    $request->googleCloudRetailV2alphaUserEventInput->userInfo = new GoogleCloudRetailV2alphaUserInfo();
    $request->googleCloudRetailV2alphaUserEventInput->userInfo->directUserRequest = false;
    $request->googleCloudRetailV2alphaUserEventInput->userInfo->ipAddress = 'animi';
    $request->googleCloudRetailV2alphaUserEventInput->userInfo->userAgent = 'nostrum';
    $request->googleCloudRetailV2alphaUserEventInput->userInfo->userId = 'mollitia';
    $request->googleCloudRetailV2alphaUserEventInput->visitorId = 'provident';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ex';
    $request->fields = 'aliquid';
    $request->key = 'accusantium';
    $request->oauthToken = 'repellat';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'nam';
    $request->writeAsync = false;

    $requestSecurity = new RetailProjectsLocationsCatalogsUserEventsWriteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsUserEventsWrite($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaUserEvent !== null) {
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
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'modi';
    $request->key = 'voluptatibus';
    $request->name = 'Stewart Will MD';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'fugit';

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
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'velit';
    $request->fields = 'aspernatur';
    $request->filter = 'eum';
    $request->key = 'eius';
    $request->name = 'Wilfred Rutherford';
    $request->oauthToken = 'eum';
    $request->pageSize = 117320;
    $request->pageToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'provident';

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
