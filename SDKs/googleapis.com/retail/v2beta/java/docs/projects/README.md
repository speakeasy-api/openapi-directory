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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAddCatalogAttributeRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaAddCatalogAttributeRequestInput = new GoogleCloudRetailV2betaAddCatalogAttributeRequestInput() {{
                    catalogAttribute = new GoogleCloudRetailV2betaCatalogAttributeInput() {{
                        dynamicFacetableOption = GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum.DYNAMIC_FACETABLE_ENABLED;
                        exactSearchableOption = GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum.EXACT_SEARCHABLE_ENABLED;
                        indexableOption = GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum.INDEXABLE_ENABLED;
                        key = "nisi";
                        recommendationsFilteringOption = GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum.RECOMMENDATIONS_FILTERING_ENABLED;
                        retrievableOption = GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum.RETRIEVABLE_DISABLED;
                        searchableOption = GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum.SEARCHABLE_OPTION_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaAttributesConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes

Removes all specified CatalogAttributes from the AttributesConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest req = new RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaBatchRemoveCatalogAttributesRequest = new GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest() {{
                    attributeKeys = new String[]{{
                        add("quod"),
                        add("esse"),
                        add("totam"),
                        add("porro"),
                    }};
                }};;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes(req, new RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity("totam", "beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaBatchRemoveCatalogAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute

Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRemoveCatalogAttributeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaRemoveCatalogAttributeRequest = new GoogleCloudRetailV2betaRemoveCatalogAttributeRequest() {{
                    key = "modi";
                }};;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "esse";
                key = "ipsum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity("natus", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaAttributesConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute

Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaReplaceCatalogAttributeRequestInput = new GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput() {{
                    catalogAttribute = new GoogleCloudRetailV2betaCatalogAttributeInput() {{
                        dynamicFacetableOption = GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum.DYNAMIC_FACETABLE_ENABLED;
                        exactSearchableOption = GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum.EXACT_SEARCHABLE_ENABLED;
                        indexableOption = GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum.INDEXABLE_DISABLED;
                        key = "saepe";
                        recommendationsFilteringOption = GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum.RECOMMENDATIONS_FILTERING_ENABLED;
                        retrievableOption = GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum.RETRIEVABLE_ENABLED;
                        searchableOption = GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum.SEARCHABLE_ENABLED;
                    }};;
                    updateMask = "iste";
                }};;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "architecto";
                key = "ipsa";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "mollitia";
                uploadProtocol = "laborum";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity("dolores", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaAttributesConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces

We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAddFulfillmentPlacesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaAddFulfillmentPlacesRequest = new GoogleCloudRetailV2betaAddFulfillmentPlacesRequest() {{
                    addTime = "nobis";
                    allowMissing = false;
                    placeIds = new String[]{{
                        add("omnis"),
                        add("nemo"),
                    }};
                    type = "minima";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "culpa";
                key = "doloribus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces(req, new RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity("culpa", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsBranchesProductsAddLocalInventories

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAddLocalInventoriesRequest;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaLocalInventory;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaAddLocalInventoriesRequest = new GoogleCloudRetailV2betaAddLocalInventoriesRequest() {{
                    addMask = "occaecati";
                    addTime = "numquam";
                    allowMissing = false;
                    localInventories = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaLocalInventory[]{{
                        add(new GoogleCloudRetailV2betaLocalInventory() {{
                            attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                put("molestiae", new GoogleCloudRetailV2betaCustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(6235.1),
                                    }};
                                    searchable = false;
                                    text = new String[]{{
                                        add("quis"),
                                    }};
                                }});
                                put("vitae", new GoogleCloudRetailV2betaCustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(6563.3),
                                        add(3172.02),
                                        add(1381.83),
                                    }};
                                    searchable = false;
                                    text = new String[]{{
                                        add("sequi"),
                                        add("tenetur"),
                                        add("ipsam"),
                                        add("id"),
                                    }};
                                }});
                            }};
                            fulfillmentTypes = new String[]{{
                                add("aut"),
                                add("quasi"),
                                add("error"),
                                add("temporibus"),
                            }};
                            placeId = "laborum";
                            priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                cost = 960.98;
                                currencyCode = "reiciendis";
                                originalPrice = 9764.6;
                                price = 8781.94;
                                priceEffectiveTime = "nihil";
                                priceExpireTime = "praesentium";
                                priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                    originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                        exclusiveMaximum = 9767.62;
                                        exclusiveMinimum = 557.14;
                                        maximum = 6048.46;
                                        minimum = 4511.59;
                                    }};
                                    price = new GoogleCloudRetailV2betaInterval() {{
                                        exclusiveMaximum = 7392.64;
                                        exclusiveMinimum = 199.87;
                                        maximum = 391.87;
                                        minimum = 4417.11;
                                    }};
                                }};
                            }};
                        }}),
                        add(new GoogleCloudRetailV2betaLocalInventory() {{
                            attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                put("maiores", new GoogleCloudRetailV2betaCustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(3594.44),
                                    }};
                                    searchable = false;
                                    text = new String[]{{
                                        add("iusto"),
                                        add("dicta"),
                                    }};
                                }});
                                put("harum", new GoogleCloudRetailV2betaCustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(8804.76),
                                        add(4142.63),
                                    }};
                                    searchable = false;
                                    text = new String[]{{
                                        add("quae"),
                                        add("ipsum"),
                                        add("quidem"),
                                        add("molestias"),
                                    }};
                                }});
                            }};
                            fulfillmentTypes = new String[]{{
                                add("pariatur"),
                                add("modi"),
                                add("praesentium"),
                            }};
                            placeId = "rem";
                            priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                cost = 9167.23;
                                currencyCode = "quasi";
                                originalPrice = 9211.58;
                                price = 5759.47;
                                priceEffectiveTime = "veritatis";
                                priceExpireTime = "itaque";
                                priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                    originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                        exclusiveMaximum = 2777.18;
                                        exclusiveMinimum = 3185.69;
                                        maximum = 93.56;
                                        minimum = 6674.11;
                                    }};
                                    price = new GoogleCloudRetailV2betaInterval() {{
                                        exclusiveMaximum = 8423.42;
                                        exclusiveMinimum = 1317.97;
                                        maximum = 6471.74;
                                        minimum = 7163.27;
                                    }};
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "qui";
                key = "aliquid";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsAddLocalInventories(req, new RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity("assumenda", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsBranchesProductsCreate

Creates a Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsCreateRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsCreateResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRating;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsCreateRequest req = new RetailProjectsLocationsCatalogsBranchesProductsCreateRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaProductInput = new GoogleCloudRetailV2betaProductInput() {{
                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                        put("excepturi", new GoogleCloudRetailV2betaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(7037.37),
                                add(7351.94),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("delectus"),
                                add("eum"),
                            }};
                        }});
                        put("non", new GoogleCloudRetailV2betaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(5761.57),
                                add(3960.98),
                                add(5920.42),
                                add(8960.39),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("officia"),
                                add("dolor"),
                                add("debitis"),
                            }};
                        }});
                        put("a", new GoogleCloudRetailV2betaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(4471.25),
                                add(4491.98),
                                add(8464.09),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("rerum"),
                                add("dicta"),
                                add("magnam"),
                                add("cumque"),
                            }};
                        }});
                    }};
                    audience = new GoogleCloudRetailV2betaAudience() {{
                        ageGroups = new String[]{{
                            add("ea"),
                            add("aliquid"),
                            add("laborum"),
                            add("accusamus"),
                        }};
                        genders = new String[]{{
                            add("occaecati"),
                        }};
                    }};;
                    availability = GoogleCloudRetailV2betaProductAvailabilityEnum.IN_STOCK;
                    availableQuantity = 881736;
                    availableTime = "delectus";
                    brands = new String[]{{
                        add("provident"),
                        add("nam"),
                        add("id"),
                    }};
                    categories = new String[]{{
                        add("deleniti"),
                        add("sapiente"),
                        add("amet"),
                    }};
                    collectionMemberIds = new String[]{{
                        add("nisi"),
                        add("vel"),
                        add("natus"),
                    }};
                    colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                        colorFamilies = new String[]{{
                            add("molestiae"),
                            add("perferendis"),
                            add("nihil"),
                        }};
                        colors = new String[]{{
                            add("distinctio"),
                            add("id"),
                        }};
                    }};;
                    conditions = new String[]{{
                        add("labore"),
                        add("suscipit"),
                    }};
                    description = "natus";
                    expireTime = "nobis";
                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                            placeIds = new String[]{{
                                add("aspernatur"),
                                add("architecto"),
                                add("magnam"),
                                add("et"),
                            }};
                            type = "excepturi";
                        }}),
                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                            placeIds = new String[]{{
                                add("provident"),
                                add("quos"),
                            }};
                            type = "sint";
                        }}),
                    }};
                    gtin = "accusantium";
                    id = "afa563e2-516f-4e4c-8b71-1e5b7fd2ed02";
                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                        add(new GoogleCloudRetailV2betaImage() {{
                            height = 615560;
                            uri = "http://cloudy-screwdriver.org";
                            width = 864934;
                        }}),
                        add(new GoogleCloudRetailV2betaImage() {{
                            height = 807319;
                            uri = "http://nimble-caution.info";
                            width = 33222;
                        }}),
                        add(new GoogleCloudRetailV2betaImage() {{
                            height = 69167;
                            uri = "https://rewarding-future.info";
                            width = 420075;
                        }}),
                    }};
                    languageCode = "nam";
                    materials = new String[]{{
                        add("pariatur"),
                    }};
                    name = "Camille Armstrong";
                    patterns = new String[]{{
                        add("cumque"),
                    }};
                    priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                        cost = 3599.78;
                        currencyCode = "hic";
                        originalPrice = 7299.91;
                        price = 7499.99;
                        priceEffectiveTime = "dolores";
                        priceExpireTime = "quis";
                        priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                            originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                exclusiveMaximum = 5210.37;
                                exclusiveMinimum = 4895.49;
                                maximum = 543.38;
                                minimum = 3389.85;
                            }};;
                            price = new GoogleCloudRetailV2betaInterval() {{
                                exclusiveMaximum = 1999.96;
                                exclusiveMinimum = 1794.9;
                                maximum = 185.21;
                                minimum = 1709.86;
                            }};;
                        }};;
                    }};;
                    primaryProductId = "minus";
                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                        add(new GoogleCloudRetailV2betaPromotion() {{
                            promotionId = "dolor";
                        }}),
                        add(new GoogleCloudRetailV2betaPromotion() {{
                            promotionId = "vero";
                        }}),
                    }};
                    publishTime = "nostrum";
                    rating = new GoogleCloudRetailV2betaRating() {{
                        averageRating = 9441.2;
                        ratingCount = 928082;
                        ratingHistogram = new Integer[]{{
                            add(704415),
                            add(596656),
                            add(31838),
                        }};
                    }};;
                    retrievableFields = "porro";
                    sizes = new String[]{{
                        add("blanditiis"),
                    }};
                    tags = new String[]{{
                        add("eaque"),
                        add("occaecati"),
                        add("rerum"),
                    }};
                    title = "Mrs.";
                    ttl = "asperiores";
                    type = GoogleCloudRetailV2betaProductTypeEnum.COLLECTION;
                    uri = "http://peaceful-popularity.name";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "libero";
                key = "delectus";
                oauthToken = "quaerat";
                prettyPrint = false;
                productId = "quos";
                quotaUser = "aliquid";
                uploadType = "dolorem";
                uploadProtocol = "dolorem";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsCreate(req, new RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity("dolor", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaProduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsBranchesProductsImport

Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsImportRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsImportResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaBigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaGcsSource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImportErrorsConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImportProductsRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductInlineSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductInputConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRating;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsImportRequest req = new RetailProjectsLocationsCatalogsBranchesProductsImportRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaImportProductsRequestInput = new GoogleCloudRetailV2betaImportProductsRequestInput() {{
                    errorsConfig = new GoogleCloudRetailV2betaImportErrorsConfig() {{
                        gcsPrefix = "excepturi";
                    }};;
                    inputConfig = new GoogleCloudRetailV2betaProductInputConfigInput() {{
                        bigQuerySource = new GoogleCloudRetailV2betaBigQuerySource() {{
                            dataSchema = "cum";
                            datasetId = "voluptate";
                            gcsStagingDir = "dignissimos";
                            partitionDate = new GoogleTypeDate() {{
                                day = 970237;
                                month = 227414;
                                year = 680545;
                            }};;
                            projectId = "numquam";
                            tableId = "veritatis";
                        }};;
                        gcsSource = new GoogleCloudRetailV2betaGcsSource() {{
                            dataSchema = "ipsa";
                            inputUris = new String[]{{
                                add("iure"),
                            }};
                        }};;
                        productInlineSource = new GoogleCloudRetailV2betaProductInlineSourceInput() {{
                            products = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductInput[]{{
                                add(new GoogleCloudRetailV2betaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                        put("accusamus", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(9764.05),
                                                add(3777.52),
                                                add(6176.58),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("atque"),
                                            }};
                                        }});
                                        put("sit", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(672.49),
                                                add(7438.35),
                                                add(6793.93),
                                                add(4785.96),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("dolorum"),
                                                add("deleniti"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2betaAudience() {{
                                        ageGroups = new String[]{{
                                            add("necessitatibus"),
                                            add("distinctio"),
                                            add("asperiores"),
                                        }};
                                        genders = new String[]{{
                                            add("ipsum"),
                                            add("voluptate"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2betaProductAvailabilityEnum.PREORDER;
                                    availableQuantity = 906418;
                                    availableTime = "eius";
                                    brands = new String[]{{
                                        add("perferendis"),
                                    }};
                                    categories = new String[]{{
                                        add("optio"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("ad"),
                                        add("saepe"),
                                        add("suscipit"),
                                        add("deserunt"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("minima"),
                                            add("repellendus"),
                                            add("totam"),
                                        }};
                                        colors = new String[]{{
                                            add("alias"),
                                            add("at"),
                                            add("quaerat"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("vel"),
                                        add("quod"),
                                    }};
                                    description = "officiis";
                                    expireTime = "qui";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("esse"),
                                                add("harum"),
                                                add("iusto"),
                                                add("ipsum"),
                                            }};
                                            type = "quisquam";
                                        }}),
                                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("amet"),
                                                add("tempore"),
                                                add("accusamus"),
                                                add("numquam"),
                                            }};
                                            type = "enim";
                                        }}),
                                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("sapiente"),
                                            }};
                                            type = "totam";
                                        }}),
                                    }};
                                    gtin = "nihil";
                                    id = "0b326b5a-7342-49cd-b1a8-422bb679d232";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 488056;
                                            uri = "http://grotesque-rat.org";
                                            width = 30452;
                                        }}),
                                    }};
                                    languageCode = "cumque";
                                    materials = new String[]{{
                                        add("nobis"),
                                        add("et"),
                                        add("saepe"),
                                    }};
                                    name = "Carolyn Rohan";
                                    patterns = new String[]{{
                                        add("aperiam"),
                                        add("delectus"),
                                        add("dolorem"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                        cost = 2921.47;
                                        currencyCode = "labore";
                                        originalPrice = 2408.29;
                                        price = 6772.63;
                                        priceEffectiveTime = "architecto";
                                        priceExpireTime = "quae";
                                        priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                                exclusiveMaximum = 164.29;
                                                exclusiveMinimum = 5556.49;
                                                maximum = 9295.3;
                                                minimum = 92.4;
                                            }};
                                            price = new GoogleCloudRetailV2betaInterval() {{
                                                exclusiveMaximum = 6699.17;
                                                exclusiveMinimum = 8330.38;
                                                maximum = 7851.53;
                                                minimum = 9843.3;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "ut";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "cupiditate";
                                        }}),
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "qui";
                                        }}),
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "quae";
                                        }}),
                                    }};
                                    publishTime = "laudantium";
                                    rating = new GoogleCloudRetailV2betaRating() {{
                                        averageRating = 4856.28;
                                        ratingCount = 580447;
                                        ratingHistogram = new Integer[]{{
                                            add(787542),
                                            add(876506),
                                            add(606476),
                                            add(338159),
                                        }};
                                    }};
                                    retrievableFields = "ipsum";
                                    sizes = new String[]{{
                                        add("voluptate"),
                                        add("consectetur"),
                                        add("vero"),
                                        add("tenetur"),
                                    }};
                                    tags = new String[]{{
                                        add("hic"),
                                        add("distinctio"),
                                    }};
                                    title = "Miss";
                                    ttl = "odio";
                                    type = GoogleCloudRetailV2betaProductTypeEnum.VARIANT;
                                    uri = "https://trustworthy-landscape.biz";
                                }}),
                                add(new GoogleCloudRetailV2betaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                        put("illum", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(6178.77),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("aut"),
                                                add("voluptatibus"),
                                                add("exercitationem"),
                                                add("nulla"),
                                            }};
                                        }});
                                        put("fugit", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(9818.3),
                                                add(9850.33),
                                                add(4783.7),
                                                add(7535.7),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("alias"),
                                                add("officia"),
                                            }};
                                        }});
                                        put("tempora", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(4104.92),
                                                add(1369),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("possimus"),
                                                add("magnam"),
                                            }};
                                        }});
                                        put("ratione", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(5113.19),
                                                add(1206.57),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("maiores"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2betaAudience() {{
                                        ageGroups = new String[]{{
                                            add("ex"),
                                        }};
                                        genders = new String[]{{
                                            add("excepturi"),
                                            add("voluptatibus"),
                                            add("nostrum"),
                                            add("sapiente"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2betaProductAvailabilityEnum.PREORDER;
                                    availableQuantity = 906556;
                                    availableTime = "ea";
                                    brands = new String[]{{
                                        add("corporis"),
                                        add("veniam"),
                                        add("aliquid"),
                                        add("inventore"),
                                    }};
                                    categories = new String[]{{
                                        add("ea"),
                                        add("quo"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("recusandae"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("minima"),
                                        }};
                                        colors = new String[]{{
                                            add("a"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("aut"),
                                        add("aut"),
                                        add("deleniti"),
                                    }};
                                    description = "impedit";
                                    expireTime = "aliquam";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("inventore"),
                                                add("non"),
                                                add("et"),
                                                add("dolorum"),
                                            }};
                                            type = "laborum";
                                        }}),
                                    }};
                                    gtin = "placeat";
                                    id = "366c8dd6-b144-4290-b474-778a7bd466d2";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 788546;
                                            uri = "http://awful-pile.net";
                                            width = 206594;
                                        }}),
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 778696;
                                            uri = "https://some-possession.biz";
                                            width = 178367;
                                        }}),
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 373813;
                                            uri = "http://official-admin.biz";
                                            width = 892050;
                                        }}),
                                    }};
                                    languageCode = "ipsam";
                                    materials = new String[]{{
                                        add("sequi"),
                                    }};
                                    name = "Miss Claude Walsh";
                                    patterns = new String[]{{
                                        add("inventore"),
                                        add("nihil"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                        cost = 5188.35;
                                        currencyCode = "accusamus";
                                        originalPrice = 3068.1;
                                        price = 4884.1;
                                        priceEffectiveTime = "occaecati";
                                        priceExpireTime = "commodi";
                                        priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                                exclusiveMaximum = 9594.34;
                                                exclusiveMinimum = 1741.12;
                                                maximum = 6455.7;
                                                minimum = 4752.89;
                                            }};
                                            price = new GoogleCloudRetailV2betaInterval() {{
                                                exclusiveMaximum = 353.62;
                                                exclusiveMinimum = 7836.48;
                                                maximum = 4304.02;
                                                minimum = 5564.29;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "praesentium";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "deleniti";
                                        }}),
                                    }};
                                    publishTime = "fugit";
                                    rating = new GoogleCloudRetailV2betaRating() {{
                                        averageRating = 6813.93;
                                        ratingCount = 649463;
                                        ratingHistogram = new Integer[]{{
                                            add(539224),
                                            add(128860),
                                        }};
                                    }};
                                    retrievableFields = "minima";
                                    sizes = new String[]{{
                                        add("fugit"),
                                        add("sapiente"),
                                    }};
                                    tags = new String[]{{
                                        add("ratione"),
                                    }};
                                    title = "Mr.";
                                    ttl = "saepe";
                                    type = GoogleCloudRetailV2betaProductTypeEnum.VARIANT;
                                    uri = "https://brisk-indicator.org";
                                }}),
                            }};
                        }};;
                    }};;
                    notificationPubsubTopic = "accusamus";
                    reconciliationMode = GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum.RECONCILIATION_MODE_UNSPECIFIED;
                    requestId = "esse";
                    updateMask = "quod";
                }};;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "quasi";
                key = "saepe";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "molestiae";
                uploadProtocol = "rerum";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsImportResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsImport(req, new RetailProjectsLocationsCatalogsBranchesProductsImportSecurity("occaecati", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsBranchesProductsList

Gets a list of Products.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsListRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsListResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsListRequest req = new RetailProjectsLocationsCatalogsBranchesProductsListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "adipisci";
                filter = "cumque";
                key = "consequuntur";
                oauthToken = "consequatur";
                pageSize = 796392L;
                pageToken = "quaerat";
                prettyPrint = false;
                quotaUser = "sapiente";
                readMask = "consectetur";
                uploadType = "esse";
                uploadProtocol = "blanditiis";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsListResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsList(req, new RetailProjectsLocationsCatalogsBranchesProductsListSecurity("provident", "a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaListProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces

We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest("nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaRemoveFulfillmentPlacesRequest = new GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest() {{
                    allowMissing = false;
                    placeIds = new String[]{{
                        add("quasi"),
                        add("a"),
                    }};
                    removeTime = "error";
                    type = "sint";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "quia";
                fields = "eveniet";
                key = "asperiores";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "consequuntur";
                uploadProtocol = "quasi";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces(req, new RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity("similique", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories

Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRemoveLocalInventoriesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaRemoveLocalInventoriesRequest = new GoogleCloudRetailV2betaRemoveLocalInventoriesRequest() {{
                    allowMissing = false;
                    placeIds = new String[]{{
                        add("earum"),
                    }};
                    removeTime = "vel";
                }};;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "illum";
                key = "soluta";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "sapiente";
                uploadProtocol = "dicta";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories(req, new RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity("ullam", "reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsBranchesProductsSetInventory

Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSetInventoryRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest req = new RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaSetInventoryRequestInput = new GoogleCloudRetailV2betaSetInventoryRequestInput() {{
                    allowMissing = false;
                    inventory = new GoogleCloudRetailV2betaProductInput() {{
                        attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                            put("voluptatum", new GoogleCloudRetailV2betaCustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(8453.58),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("deleniti"),
                                    add("itaque"),
                                }};
                            }});
                        }};
                        audience = new GoogleCloudRetailV2betaAudience() {{
                            ageGroups = new String[]{{
                                add("architecto"),
                                add("omnis"),
                                add("tenetur"),
                            }};
                            genders = new String[]{{
                                add("at"),
                            }};
                        }};;
                        availability = GoogleCloudRetailV2betaProductAvailabilityEnum.AVAILABILITY_UNSPECIFIED;
                        availableQuantity = 454162;
                        availableTime = "ipsa";
                        brands = new String[]{{
                            add("veritatis"),
                            add("consectetur"),
                        }};
                        categories = new String[]{{
                            add("iste"),
                        }};
                        collectionMemberIds = new String[]{{
                            add("accusantium"),
                            add("rem"),
                            add("aut"),
                            add("laudantium"),
                        }};
                        colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                            colorFamilies = new String[]{{
                                add("mollitia"),
                                add("ab"),
                            }};
                            colors = new String[]{{
                                add("non"),
                                add("voluptatem"),
                                add("dolor"),
                            }};
                        }};;
                        conditions = new String[]{{
                            add("numquam"),
                            add("impedit"),
                            add("explicabo"),
                        }};
                        description = "voluptas";
                        expireTime = "aut";
                        fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                            add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                placeIds = new String[]{{
                                    add("maiores"),
                                }};
                                type = "natus";
                            }}),
                            add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                placeIds = new String[]{{
                                    add("voluptatibus"),
                                }};
                                type = "voluptas";
                            }}),
                        }};
                        gtin = "asperiores";
                        id = "0642dac7-af51-45cc-813a-a63aae8d6786";
                        images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                            add(new GoogleCloudRetailV2betaImage() {{
                                height = 822560;
                                uri = "https://shabby-harmonize.info";
                                width = 360545;
                            }}),
                            add(new GoogleCloudRetailV2betaImage() {{
                                height = 968904;
                                uri = "https://gullible-trapdoor.info";
                                width = 46007;
                            }}),
                        }};
                        languageCode = "cum";
                        materials = new String[]{{
                            add("in"),
                        }};
                        name = "Lila Schultz";
                        patterns = new String[]{{
                            add("reiciendis"),
                            add("quidem"),
                        }};
                        priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                            cost = 9049.49;
                            currencyCode = "necessitatibus";
                            originalPrice = 2965.56;
                            price = 1210.59;
                            priceEffectiveTime = "asperiores";
                            priceExpireTime = "adipisci";
                            priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                    exclusiveMaximum = 2494.2;
                                    exclusiveMinimum = 2282.63;
                                    maximum = 1059.06;
                                    minimum = 4895.09;
                                }};;
                                price = new GoogleCloudRetailV2betaInterval() {{
                                    exclusiveMaximum = 9509.53;
                                    exclusiveMinimum = 8915.23;
                                    maximum = 2334.2;
                                    minimum = 3581.07;
                                }};;
                            }};;
                        }};;
                        primaryProductId = "harum";
                        promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                            add(new GoogleCloudRetailV2betaPromotion() {{
                                promotionId = "ipsa";
                            }}),
                            add(new GoogleCloudRetailV2betaPromotion() {{
                                promotionId = "voluptates";
                            }}),
                        }};
                        publishTime = "libero";
                        rating = new GoogleCloudRetailV2betaRating() {{
                            averageRating = 1138.16;
                            ratingCount = 881721;
                            ratingHistogram = new Integer[]{{
                                add(272437),
                                add(132815),
                                add(379057),
                            }};
                        }};;
                        retrievableFields = "voluptas";
                        sizes = new String[]{{
                            add("minima"),
                            add("nobis"),
                        }};
                        tags = new String[]{{
                            add("adipisci"),
                            add("minus"),
                            add("dolores"),
                        }};
                        title = "Ms.";
                        ttl = "in";
                        type = GoogleCloudRetailV2betaProductTypeEnum.PRIMARY;
                        uri = "http://unfinished-sport.info";
                    }};;
                    setMask = "adipisci";
                    setTime = "cum";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "nesciunt";
                key = "culpa";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "totam";
                uploadProtocol = "hic";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsSetInventory(req, new RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity("exercitationem", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsCompleteQuery

Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsCompleteQueryRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsCompleteQueryResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsCompleteQuerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsCompleteQueryRequest req = new RetailProjectsLocationsCatalogsCompleteQueryRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                dataset = "asperiores";
                deviceType = "facilis";
                entity = "voluptate";
                fields = "expedita";
                key = "ab";
                languageCodes = new String[]{{
                    add("dolore"),
                    add("laborum"),
                    add("sed"),
                }};
                maxSuggestions = 447516L;
                oauthToken = "commodi";
                prettyPrint = false;
                query = "quidem";
                quotaUser = "explicabo";
                uploadType = "voluptas";
                uploadProtocol = "unde";
                visitorId = "architecto";
            }};            

            RetailProjectsLocationsCatalogsCompleteQueryResponse res = sdk.projects.retailProjectsLocationsCatalogsCompleteQuery(req, new RetailProjectsLocationsCatalogsCompleteQuerySecurity("suscipit", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaCompleteQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsCompletionDataImport

Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsCompletionDataImportRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsCompletionDataImportResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsCompletionDataImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaBigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCompletionDataInputConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImportCompletionDataRequest;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsCompletionDataImportRequest req = new RetailProjectsLocationsCatalogsCompletionDataImportRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaImportCompletionDataRequest = new GoogleCloudRetailV2betaImportCompletionDataRequest() {{
                    inputConfig = new GoogleCloudRetailV2betaCompletionDataInputConfig() {{
                        bigQuerySource = new GoogleCloudRetailV2betaBigQuerySource() {{
                            dataSchema = "reiciendis";
                            datasetId = "perferendis";
                            gcsStagingDir = "corrupti";
                            partitionDate = new GoogleTypeDate() {{
                                day = 979574;
                                month = 274823;
                                year = 148478;
                            }};;
                            projectId = "provident";
                            tableId = "eius";
                        }};;
                    }};;
                    notificationPubsubTopic = "necessitatibus";
                }};;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "quos";
                key = "voluptatibus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "voluptate";
                uploadProtocol = "reiciendis";
            }};            

            RetailProjectsLocationsCatalogsCompletionDataImportResponse res = sdk.projects.retailProjectsLocationsCatalogsCompletionDataImport(req, new RetailProjectsLocationsCatalogsCompletionDataImportSecurity("ex", "sit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsControlsCreate

Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsControlsCreateRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsControlsCreateResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsControlsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCondition;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaConditionQueryTerm;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaConditionTimeRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaControlInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaControlSolutionTypesEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRule;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRuleBoostAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRuleDoNotAssociateAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRuleFilterAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRuleIgnoreAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRuleOnewaySynonymsAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRuleRedirectAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRuleReplacementAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRuleTwowaySynonymsAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsControlsCreateRequest req = new RetailProjectsLocationsCatalogsControlsCreateRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaControlInput = new GoogleCloudRetailV2betaControlInput() {{
                    displayName = "praesentium";
                    facetSpec = new GoogleCloudRetailV2betaSearchRequestFacetSpec() {{
                        enableDynamicPosition = false;
                        excludedFilterKeys = new String[]{{
                            add("quaerat"),
                            add("incidunt"),
                            add("ipsam"),
                        }};
                        facetKey = new GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey() {{
                            caseInsensitive = false;
                            contains = new String[]{{
                                add("rem"),
                                add("sit"),
                                add("nobis"),
                                add("error"),
                            }};
                            intervals = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval[]{{
                                add(new GoogleCloudRetailV2betaInterval() {{
                                    exclusiveMaximum = 3295.43;
                                    exclusiveMinimum = 9241.59;
                                    maximum = 9671.22;
                                    minimum = 8623.19;
                                }}),
                                add(new GoogleCloudRetailV2betaInterval() {{
                                    exclusiveMaximum = 1685.76;
                                    exclusiveMinimum = 486.9;
                                    maximum = 9014.83;
                                    minimum = 2536.42;
                                }}),
                            }};
                            key = "veniam";
                            orderBy = "in";
                            prefixes = new String[]{{
                                add("beatae"),
                                add("laudantium"),
                                add("exercitationem"),
                                add("praesentium"),
                            }};
                            query = "cum";
                            restrictedValues = new String[]{{
                                add("dolorum"),
                                add("voluptatum"),
                            }};
                            returnMinMax = false;
                        }};;
                        limit = 622385;
                    }};;
                    name = "Rudolph Trantow";
                    rule = new GoogleCloudRetailV2betaRule() {{
                        boostAction = new GoogleCloudRetailV2betaRuleBoostAction() {{
                            boost = 3416.98;
                            productsFilter = "officia";
                        }};;
                        condition = new GoogleCloudRetailV2betaCondition() {{
                            activeTimeRange = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaConditionTimeRange[]{{
                                add(new GoogleCloudRetailV2betaConditionTimeRange() {{
                                    endTime = "corrupti";
                                    startTime = "accusamus";
                                }}),
                                add(new GoogleCloudRetailV2betaConditionTimeRange() {{
                                    endTime = "tempora";
                                    startTime = "atque";
                                }}),
                                add(new GoogleCloudRetailV2betaConditionTimeRange() {{
                                    endTime = "fugit";
                                    startTime = "ut";
                                }}),
                            }};
                            queryTerms = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaConditionQueryTerm[]{{
                                add(new GoogleCloudRetailV2betaConditionQueryTerm() {{
                                    fullMatch = false;
                                    value = "voluptatem";
                                }}),
                                add(new GoogleCloudRetailV2betaConditionQueryTerm() {{
                                    fullMatch = false;
                                    value = "culpa";
                                }}),
                                add(new GoogleCloudRetailV2betaConditionQueryTerm() {{
                                    fullMatch = false;
                                    value = "expedita";
                                }}),
                                add(new GoogleCloudRetailV2betaConditionQueryTerm() {{
                                    fullMatch = false;
                                    value = "magnam";
                                }}),
                            }};
                        }};;
                        doNotAssociateAction = new GoogleCloudRetailV2betaRuleDoNotAssociateAction() {{
                            doNotAssociateTerms = new String[]{{
                                add("esse"),
                            }};
                            queryTerms = new String[]{{
                                add("sit"),
                                add("voluptatum"),
                            }};
                            terms = new String[]{{
                                add("repudiandae"),
                                add("corporis"),
                                add("et"),
                            }};
                        }};;
                        filterAction = new GoogleCloudRetailV2betaRuleFilterAction() {{
                            filter = "blanditiis";
                        }};;
                        ignoreAction = new GoogleCloudRetailV2betaRuleIgnoreAction() {{
                            ignoreTerms = new String[]{{
                                add("sed"),
                                add("sit"),
                            }};
                        }};;
                        onewaySynonymsAction = new GoogleCloudRetailV2betaRuleOnewaySynonymsAction() {{
                            onewayTerms = new String[]{{
                                add("nostrum"),
                                add("saepe"),
                            }};
                            queryTerms = new String[]{{
                                add("consequatur"),
                                add("incidunt"),
                                add("reiciendis"),
                            }};
                            synonyms = new String[]{{
                                add("harum"),
                            }};
                        }};;
                        redirectAction = new GoogleCloudRetailV2betaRuleRedirectAction() {{
                            redirectUri = "dicta";
                        }};;
                        replacementAction = new GoogleCloudRetailV2betaRuleReplacementAction() {{
                            queryTerms = new String[]{{
                                add("occaecati"),
                            }};
                            replacementTerm = "labore";
                            term = "quidem";
                        }};;
                        twowaySynonymsAction = new GoogleCloudRetailV2betaRuleTwowaySynonymsAction() {{
                            synonyms = new String[]{{
                                add("laborum"),
                                add("nam"),
                                add("tenetur"),
                            }};
                        }};;
                    }};;
                    searchSolutionUseCase = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum[]{{
                        add(GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum.SEARCH_SOLUTION_USE_CASE_UNSPECIFIED),
                        add(GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum.SEARCH_SOLUTION_USE_CASE_UNSPECIFIED),
                    }};
                    solutionTypes = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaControlSolutionTypesEnum[]{{
                        add(GoogleCloudRetailV2betaControlSolutionTypesEnum.SOLUTION_TYPE_RECOMMENDATION),
                        add(GoogleCloudRetailV2betaControlSolutionTypesEnum.SOLUTION_TYPE_RECOMMENDATION),
                        add(GoogleCloudRetailV2betaControlSolutionTypesEnum.SOLUTION_TYPE_SEARCH),
                    }};
                }};;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "delectus";
                controlId = "voluptates";
                fields = "perferendis";
                key = "est";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "facere";
                uploadProtocol = "fuga";
            }};            

            RetailProjectsLocationsCatalogsControlsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsControlsCreate(req, new RetailProjectsLocationsCatalogsControlsCreateSecurity("praesentium", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaControl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsControlsList

Lists all Controls by their parent Catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsControlsListRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsControlsListResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsControlsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsControlsListRequest req = new RetailProjectsLocationsCatalogsControlsListRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "atque";
                filter = "reprehenderit";
                key = "asperiores";
                oauthToken = "totam";
                pageSize = 383103L;
                pageToken = "quidem";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "et";
                uploadProtocol = "esse";
            }};            

            RetailProjectsLocationsCatalogsControlsListResponse res = sdk.projects.retailProjectsLocationsCatalogsControlsList(req, new RetailProjectsLocationsCatalogsControlsListSecurity("amet", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaListControlsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsGetDefaultBranch

Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsGetDefaultBranchRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsGetDefaultBranchResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsGetDefaultBranchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsGetDefaultBranchRequest req = new RetailProjectsLocationsCatalogsGetDefaultBranchRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "accusamus";
                key = "natus";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "ex";
                uploadProtocol = "maiores";
            }};            

            RetailProjectsLocationsCatalogsGetDefaultBranchResponse res = sdk.projects.retailProjectsLocationsCatalogsGetDefaultBranch(req, new RetailProjectsLocationsCatalogsGetDefaultBranchSecurity("corrupti", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaGetDefaultBranchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsList

Lists all the Catalogs associated with the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsListRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsListResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsListRequest req = new RetailProjectsLocationsCatalogsListRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "atque";
                key = "sunt";
                oauthToken = "recusandae";
                pageSize = 680697L;
                pageToken = "repellendus";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "reiciendis";
                uploadProtocol = "doloremque";
            }};            

            RetailProjectsLocationsCatalogsListResponse res = sdk.projects.retailProjectsLocationsCatalogsList(req, new RetailProjectsLocationsCatalogsListSecurity("repudiandae", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaListCatalogsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsModelsCreate

Creates a new model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsCreateRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsCreateResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaModelFilteringOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaModelInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaModelModelFeaturesConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaModelPeriodicTuningStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaModelTrainingStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsModelsCreateRequest req = new RetailProjectsLocationsCatalogsModelsCreateRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaModelInput = new GoogleCloudRetailV2betaModelInput() {{
                    displayName = "dolores";
                    filteringOption = GoogleCloudRetailV2betaModelFilteringOptionEnum.RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED;
                    modelFeaturesConfig = new GoogleCloudRetailV2betaModelModelFeaturesConfig() {{
                        frequentlyBoughtTogetherConfig = new GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfig() {{
                            contextProductsType = GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum.SINGLE_CONTEXT_PRODUCT;
                        }};;
                    }};;
                    name = "Elsa Maggio";
                    optimizationObjective = "consequuntur";
                    periodicTuningState = GoogleCloudRetailV2betaModelPeriodicTuningStateEnum.ALL_TUNING_DISABLED;
                    trainingState = GoogleCloudRetailV2betaModelTrainingStateEnum.TRAINING;
                    type = "perspiciatis";
                }};;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "eveniet";
                dryRun = false;
                fields = "occaecati";
                key = "consequuntur";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "quis";
                uploadProtocol = "reprehenderit";
            }};            

            RetailProjectsLocationsCatalogsModelsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsCreate(req, new RetailProjectsLocationsCatalogsModelsCreateSecurity("error", "illo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsModelsList

Lists all the models linked to this event store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsListRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsListResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsModelsListRequest req = new RetailProjectsLocationsCatalogsModelsListRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eveniet";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "doloremque";
                key = "iure";
                oauthToken = "ipsa";
                pageSize = 517612L;
                pageToken = "quae";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "eveniet";
                uploadProtocol = "qui";
            }};            

            RetailProjectsLocationsCatalogsModelsListResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsList(req, new RetailProjectsLocationsCatalogsModelsListSecurity("cum", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaListModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsModelsPause

Pauses the training of an existing model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsPauseRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsPauseResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsPauseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsModelsPauseRequest req = new RetailProjectsLocationsCatalogsModelsPauseRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "voluptatum");
                    put("rem", "aliquam");
                    put("ad", "repellat");
                }};
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "perspiciatis";
                fields = "nihil";
                key = "mollitia";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "maiores";
                uploadProtocol = "reiciendis";
            }};            

            RetailProjectsLocationsCatalogsModelsPauseResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsPause(req, new RetailProjectsLocationsCatalogsModelsPauseSecurity("dolores", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsModelsResume

Resumes the training of an existing model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsResumeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsResumeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsResumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsModelsResumeRequest req = new RetailProjectsLocationsCatalogsModelsResumeRequest("minima") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nesciunt", "quae");
                    put("recusandae", "omnis");
                    put("quaerat", "molestiae");
                }};
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "adipisci";
                key = "debitis";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "nemo";
                uploadProtocol = "recusandae";
            }};            

            RetailProjectsLocationsCatalogsModelsResumeResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsResume(req, new RetailProjectsLocationsCatalogsModelsResumeSecurity("esse", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsModelsTune

Tunes an existing model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsTuneRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsTuneResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsModelsTuneSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsModelsTuneRequest req = new RetailProjectsLocationsCatalogsModelsTuneRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("provident", "aspernatur");
                    put("ullam", "quasi");
                    put("animi", "nostrum");
                    put("mollitia", "provident");
                }};
                accessToken = "possimus";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "aliquid";
                key = "accusantium";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "ullam";
                uploadProtocol = "in";
            }};            

            RetailProjectsLocationsCatalogsModelsTuneResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsTune(req, new RetailProjectsLocationsCatalogsModelsTuneSecurity("nam", "earum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsServingConfigsAddControl

Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsAddControlRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsAddControlResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAddControlRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsAddControlRequest req = new RetailProjectsLocationsCatalogsServingConfigsAddControlRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaAddControlRequest = new GoogleCloudRetailV2betaAddControlRequest() {{
                    controlId = "placeat";
                }};;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "officiis";
                key = "sapiente";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "rerum";
                uploadProtocol = "tempora";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsAddControlResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsAddControl(req, new RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity("quis", "inventore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaServingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsServingConfigsCreate

Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsCreateRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsCreateResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaServingConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaServingConfigDiversityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaServingConfigSolutionTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsCreateRequest req = new RetailProjectsLocationsCatalogsServingConfigsCreateRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaServingConfig = new GoogleCloudRetailV2betaServingConfig() {{
                    boostControlIds = new String[]{{
                        add("perferendis"),
                    }};
                    displayName = "velit";
                    diversityLevel = "aspernatur";
                    diversityType = GoogleCloudRetailV2betaServingConfigDiversityTypeEnum.RULE_BASED_DIVERSITY;
                    doNotAssociateControlIds = new String[]{{
                        add("rem"),
                        add("at"),
                    }};
                    dynamicFacetSpec = new GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec() {{
                        mode = GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum.ENABLED;
                    }};;
                    enableCategoryFilterLevel = "eos";
                    facetControlIds = new String[]{{
                        add("eum"),
                        add("dicta"),
                        add("minima"),
                        add("beatae"),
                    }};
                    filterControlIds = new String[]{{
                        add("provident"),
                        add("earum"),
                        add("soluta"),
                    }};
                    ignoreControlIds = new String[]{{
                        add("illum"),
                        add("eaque"),
                        add("earum"),
                        add("perspiciatis"),
                    }};
                    modelId = "maiores";
                    name = "Gene Sauer";
                    onewaySynonymsControlIds = new String[]{{
                        add("cumque"),
                    }};
                    personalizationSpec = new GoogleCloudRetailV2betaSearchRequestPersonalizationSpec() {{
                        mode = GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum.DISABLED;
                    }};;
                    priceRerankingLevel = "ratione";
                    redirectControlIds = new String[]{{
                        add("necessitatibus"),
                        add("nulla"),
                        add("consequatur"),
                    }};
                    replacementControlIds = new String[]{{
                        add("et"),
                    }};
                    solutionTypes = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaServingConfigSolutionTypesEnum[]{{
                        add(GoogleCloudRetailV2betaServingConfigSolutionTypesEnum.SOLUTION_TYPE_RECOMMENDATION),
                        add(GoogleCloudRetailV2betaServingConfigSolutionTypesEnum.SOLUTION_TYPE_RECOMMENDATION),
                    }};
                    twowaySynonymsControlIds = new String[]{{
                        add("adipisci"),
                        add("quasi"),
                    }};
                }};;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "necessitatibus";
                key = "ipsa";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "nihil";
                servingConfigId = "molestiae";
                uploadType = "dicta";
                uploadProtocol = "iusto";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsCreate(req, new RetailProjectsLocationsCatalogsServingConfigsCreateSecurity("esse", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaServingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsServingConfigsDelete

Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsDeleteRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsDeleteResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsDeleteRequest req = new RetailProjectsLocationsCatalogsServingConfigsDeleteRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "doloremque";
                key = "dicta";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "esse";
                uploadProtocol = "ex";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsDeleteResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsDelete(req, new RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity("consectetur", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsServingConfigsList

Lists all ServingConfigs linked to this catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsListRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsListResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsListRequest req = new RetailProjectsLocationsCatalogsServingConfigsListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "expedita";
                key = "aliquid";
                oauthToken = "officia";
                pageSize = 381397L;
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "eum";
                uploadProtocol = "voluptas";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsListResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsList(req, new RetailProjectsLocationsCatalogsServingConfigsListSecurity("iste", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaListServingConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsServingConfigsPatch

Updates a ServingConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsPatchRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsPatchResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaServingConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaServingConfigDiversityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaServingConfigSolutionTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsPatchRequest req = new RetailProjectsLocationsCatalogsServingConfigsPatchRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaServingConfig = new GoogleCloudRetailV2betaServingConfig() {{
                    boostControlIds = new String[]{{
                        add("voluptates"),
                        add("mollitia"),
                        add("laborum"),
                        add("libero"),
                    }};
                    displayName = "ad";
                    diversityLevel = "deleniti";
                    diversityType = GoogleCloudRetailV2betaServingConfigDiversityTypeEnum.DIVERSITY_TYPE_UNSPECIFIED;
                    doNotAssociateControlIds = new String[]{{
                        add("repellendus"),
                    }};
                    dynamicFacetSpec = new GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec() {{
                        mode = GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum.DISABLED;
                    }};;
                    enableCategoryFilterLevel = "quo";
                    facetControlIds = new String[]{{
                        add("ut"),
                        add("ad"),
                    }};
                    filterControlIds = new String[]{{
                        add("voluptatem"),
                        add("molestias"),
                        add("cum"),
                    }};
                    ignoreControlIds = new String[]{{
                        add("beatae"),
                        add("voluptatum"),
                    }};
                    modelId = "omnis";
                    name = "Olivia O'Reilly DVM";
                    onewaySynonymsControlIds = new String[]{{
                        add("architecto"),
                        add("fuga"),
                        add("pariatur"),
                        add("debitis"),
                    }};
                    personalizationSpec = new GoogleCloudRetailV2betaSearchRequestPersonalizationSpec() {{
                        mode = GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum.MODE_UNSPECIFIED;
                    }};;
                    priceRerankingLevel = "alias";
                    redirectControlIds = new String[]{{
                        add("earum"),
                        add("ex"),
                        add("sapiente"),
                    }};
                    replacementControlIds = new String[]{{
                        add("minus"),
                        add("nemo"),
                        add("asperiores"),
                    }};
                    solutionTypes = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaServingConfigSolutionTypesEnum[]{{
                        add(GoogleCloudRetailV2betaServingConfigSolutionTypesEnum.SOLUTION_TYPE_RECOMMENDATION),
                    }};
                    twowaySynonymsControlIds = new String[]{{
                        add("illum"),
                    }};
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "nam";
                key = "ipsam";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "dolor";
                updateMask = "aliquam";
                uploadType = "inventore";
                uploadProtocol = "deleniti";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsPatchResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsPatch(req, new RetailProjectsLocationsCatalogsServingConfigsPatchSecurity("veritatis", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaServingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsServingConfigsPredict

Makes a recommendation prediction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsPredictRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsPredictResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsPredictSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCompletionDetail;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPredictRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductDetailInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaUserEventInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaUserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsPredictRequest req = new RetailProjectsLocationsCatalogsServingConfigsPredictRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaPredictRequestInput = new GoogleCloudRetailV2betaPredictRequestInput() {{
                    filter = "architecto";
                    labels = new java.util.HashMap<String, String>() {{
                        put("modi", "fugit");
                    }};
                    pageSize = 66149;
                    pageToken = "laudantium";
                    params = new java.util.HashMap<String, Object>() {{
                        put("dolor", "fugiat");
                    }};
                    userEvent = new GoogleCloudRetailV2betaUserEventInput() {{
                        attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                            put("consequuntur", new GoogleCloudRetailV2betaCustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(5596.82),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("impedit"),
                                    add("officiis"),
                                    add("esse"),
                                    add("necessitatibus"),
                                }};
                            }});
                            put("sed", new GoogleCloudRetailV2betaCustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(1995.96),
                                    add(7129.27),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("vel"),
                                    add("voluptatum"),
                                }};
                            }});
                        }};
                        attributionToken = "magnam";
                        cartId = "exercitationem";
                        completionDetail = new GoogleCloudRetailV2betaCompletionDetail() {{
                            completionAttributionToken = "ab";
                            selectedPosition = 781480;
                            selectedSuggestion = "autem";
                        }};;
                        entity = "nobis";
                        eventTime = "laboriosam";
                        eventType = "recusandae";
                        experimentIds = new String[]{{
                            add("voluptatem"),
                        }};
                        filter = "exercitationem";
                        offset = 895692;
                        orderBy = "quasi";
                        pageCategories = new String[]{{
                            add("at"),
                            add("vero"),
                        }};
                        pageViewId = "est";
                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductDetailInput[]{{
                            add(new GoogleCloudRetailV2betaProductDetailInput() {{
                                product = new GoogleCloudRetailV2betaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                        put("doloribus", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(7592.83),
                                                add(5796.81),
                                                add(3645.44),
                                                add(4558.98),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("officia"),
                                                add("voluptas"),
                                                add("numquam"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2betaAudience() {{
                                        ageGroups = new String[]{{
                                            add("quos"),
                                            add("eius"),
                                        }};
                                        genders = new String[]{{
                                            add("ducimus"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2betaProductAvailabilityEnum.IN_STOCK;
                                    availableQuantity = 681740;
                                    availableTime = "laudantium";
                                    brands = new String[]{{
                                        add("quasi"),
                                        add("rem"),
                                    }};
                                    categories = new String[]{{
                                        add("dicta"),
                                        add("nisi"),
                                        add("consequuntur"),
                                        add("consectetur"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("cupiditate"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("soluta"),
                                            add("alias"),
                                            add("omnis"),
                                            add("eos"),
                                        }};
                                        colors = new String[]{{
                                            add("iste"),
                                            add("magni"),
                                            add("inventore"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("accusamus"),
                                        add("voluptatibus"),
                                        add("distinctio"),
                                    }};
                                    description = "omnis";
                                    expireTime = "delectus";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("maxime"),
                                                add("magnam"),
                                                add("temporibus"),
                                            }};
                                            type = "quos";
                                        }}),
                                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("itaque"),
                                                add("commodi"),
                                            }};
                                            type = "totam";
                                        }}),
                                    }};
                                    gtin = "earum";
                                    id = "4be05601-3f59-4da7-97a5-9ecfef66ef1c";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 675689;
                                            uri = "http://even-mankind.biz";
                                            width = 773035;
                                        }}),
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 166047;
                                            uri = "https://valuable-ranger.biz";
                                            width = 482892;
                                        }}),
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 453094;
                                            uri = "http://live-cooperation.net";
                                            width = 535468;
                                        }}),
                                    }};
                                    languageCode = "quibusdam";
                                    materials = new String[]{{
                                        add("odit"),
                                        add("voluptatibus"),
                                    }};
                                    name = "Dr. Megan Spinka";
                                    patterns = new String[]{{
                                        add("voluptatibus"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                        cost = 1563.83;
                                        currencyCode = "porro";
                                        originalPrice = 3041.98;
                                        price = 2470.45;
                                        priceEffectiveTime = "illo";
                                        priceExpireTime = "accusantium";
                                        priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                                exclusiveMaximum = 4246.63;
                                                exclusiveMinimum = 4069.22;
                                                maximum = 1076.17;
                                                minimum = 8777.51;
                                            }};
                                            price = new GoogleCloudRetailV2betaInterval() {{
                                                exclusiveMaximum = 5682.18;
                                                exclusiveMinimum = 4319.94;
                                                maximum = 2465.57;
                                                minimum = 2840.86;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "perspiciatis";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "dicta";
                                        }}),
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "impedit";
                                        }}),
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "voluptatibus";
                                        }}),
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "iste";
                                        }}),
                                    }};
                                    publishTime = "itaque";
                                    rating = new GoogleCloudRetailV2betaRating() {{
                                        averageRating = 26.77;
                                        ratingCount = 391797;
                                        ratingHistogram = new Integer[]{{
                                            add(242178),
                                            add(673838),
                                            add(250398),
                                            add(224467),
                                        }};
                                    }};
                                    retrievableFields = "iusto";
                                    sizes = new String[]{{
                                        add("doloremque"),
                                    }};
                                    tags = new String[]{{
                                        add("officia"),
                                    }};
                                    title = "Dr.";
                                    ttl = "ea";
                                    type = GoogleCloudRetailV2betaProductTypeEnum.VARIANT;
                                    uri = "http://rough-sitar.name";
                                }};
                                quantity = 709036;
                            }}),
                            add(new GoogleCloudRetailV2betaProductDetailInput() {{
                                product = new GoogleCloudRetailV2betaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                        put("a", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(3519.36),
                                                add(6001.93),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("animi"),
                                                add("impedit"),
                                                add("ipsam"),
                                                add("corporis"),
                                            }};
                                        }});
                                        put("est", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(4568.85),
                                                add(2885.7),
                                                add(850.66),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("consectetur"),
                                                add("vitae"),
                                                add("inventore"),
                                                add("dolorem"),
                                            }};
                                        }});
                                        put("ad", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(6113.28),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("nemo"),
                                                add("soluta"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2betaAudience() {{
                                        ageGroups = new String[]{{
                                            add("rem"),
                                            add("dolorum"),
                                            add("odio"),
                                        }};
                                        genders = new String[]{{
                                            add("alias"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2betaProductAvailabilityEnum.AVAILABILITY_UNSPECIFIED;
                                    availableQuantity = 425402;
                                    availableTime = "quae";
                                    brands = new String[]{{
                                        add("modi"),
                                    }};
                                    categories = new String[]{{
                                        add("exercitationem"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("et"),
                                        add("ipsum"),
                                        add("unde"),
                                        add("nulla"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("maxime"),
                                            add("quia"),
                                            add("quia"),
                                        }};
                                        colors = new String[]{{
                                            add("omnis"),
                                            add("libero"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("id"),
                                    }};
                                    description = "libero";
                                    expireTime = "fugiat";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("placeat"),
                                                add("sit"),
                                                add("iusto"),
                                            }};
                                            type = "ipsa";
                                        }}),
                                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("inventore"),
                                                add("aperiam"),
                                                add("totam"),
                                                add("dolore"),
                                            }};
                                            type = "eligendi";
                                        }}),
                                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("voluptatem"),
                                                add("autem"),
                                                add("esse"),
                                            }};
                                            type = "dolores";
                                        }}),
                                    }};
                                    gtin = "assumenda";
                                    id = "1ad879ee-b966-45b8-9efb-d02bae0be2d7";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 140316;
                                            uri = "http://growling-overcoat.org";
                                            width = 239337;
                                        }}),
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 923306;
                                            uri = "https://finished-prize.info";
                                            width = 106255;
                                        }}),
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 600213;
                                            uri = "http://whimsical-mystery.com";
                                            width = 253625;
                                        }}),
                                    }};
                                    languageCode = "numquam";
                                    materials = new String[]{{
                                        add("at"),
                                    }};
                                    name = "Cody Rowe";
                                    patterns = new String[]{{
                                        add("expedita"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                        cost = 5326.69;
                                        currencyCode = "cupiditate";
                                        originalPrice = 3262.69;
                                        price = 8095.94;
                                        priceEffectiveTime = "enim";
                                        priceExpireTime = "neque";
                                        priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                                exclusiveMaximum = 4468.77;
                                                exclusiveMinimum = 7963.97;
                                                maximum = 4330.77;
                                                minimum = 2664.08;
                                            }};
                                            price = new GoogleCloudRetailV2betaInterval() {{
                                                exclusiveMaximum = 3573.47;
                                                exclusiveMinimum = 2982.64;
                                                maximum = 9149.71;
                                                minimum = 9781.73;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "tempore";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "libero";
                                        }}),
                                    }};
                                    publishTime = "ratione";
                                    rating = new GoogleCloudRetailV2betaRating() {{
                                        averageRating = 2899.13;
                                        ratingCount = 520875;
                                        ratingHistogram = new Integer[]{{
                                            add(375994),
                                            add(779180),
                                            add(242099),
                                        }};
                                    }};
                                    retrievableFields = "minus";
                                    sizes = new String[]{{
                                        add("nostrum"),
                                        add("est"),
                                        add("impedit"),
                                    }};
                                    tags = new String[]{{
                                        add("tempore"),
                                        add("vero"),
                                        add("odit"),
                                        add("repellat"),
                                    }};
                                    title = "Dr.";
                                    ttl = "nemo";
                                    type = GoogleCloudRetailV2betaProductTypeEnum.PRIMARY;
                                    uri = "http://lighthearted-expense.info";
                                }};
                                quantity = 496915;
                            }}),
                            add(new GoogleCloudRetailV2betaProductDetailInput() {{
                                product = new GoogleCloudRetailV2betaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                        put("dolores", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(850.76),
                                                add(4981.8),
                                                add(4527.29),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("itaque"),
                                                add("similique"),
                                                add("optio"),
                                                add("ex"),
                                            }};
                                        }});
                                        put("quaerat", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(8886.16),
                                                add(8108.39),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("exercitationem"),
                                                add("quam"),
                                                add("dolorem"),
                                            }};
                                        }});
                                        put("modi", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(5755.34),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("sequi"),
                                                add("repudiandae"),
                                                add("cum"),
                                                add("dicta"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2betaAudience() {{
                                        ageGroups = new String[]{{
                                            add("veniam"),
                                            add("animi"),
                                            add("dolores"),
                                            add("nam"),
                                        }};
                                        genders = new String[]{{
                                            add("consequuntur"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2betaProductAvailabilityEnum.BACKORDER;
                                    availableQuantity = 748224;
                                    availableTime = "ipsa";
                                    brands = new String[]{{
                                        add("maiores"),
                                        add("veritatis"),
                                    }};
                                    categories = new String[]{{
                                        add("laboriosam"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("libero"),
                                        add("excepturi"),
                                        add("occaecati"),
                                        add("nemo"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("nostrum"),
                                            add("doloribus"),
                                        }};
                                        colors = new String[]{{
                                            add("sint"),
                                            add("enim"),
                                            add("hic"),
                                            add("animi"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("totam"),
                                        add("molestias"),
                                        add("odio"),
                                    }};
                                    description = "eaque";
                                    expireTime = "saepe";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("iste"),
                                                add("assumenda"),
                                                add("tempore"),
                                            }};
                                            type = "libero";
                                        }}),
                                    }};
                                    gtin = "velit";
                                    id = "0fcb33ea-055b-4197-8d44-e2f52d82d351";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                        add(new GoogleCloudRetailV2betaImage() {{
                                            height = 705710;
                                            uri = "https://humiliating-western.biz";
                                            width = 503748;
                                        }}),
                                    }};
                                    languageCode = "distinctio";
                                    materials = new String[]{{
                                        add("quis"),
                                        add("nisi"),
                                    }};
                                    name = "Roosevelt Schultz";
                                    patterns = new String[]{{
                                        add("voluptatibus"),
                                        add("voluptatibus"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                        cost = 1623.58;
                                        currencyCode = "debitis";
                                        originalPrice = 2908.41;
                                        price = 7009.28;
                                        priceEffectiveTime = "eos";
                                        priceExpireTime = "reprehenderit";
                                        priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                                exclusiveMaximum = 3455.06;
                                                exclusiveMinimum = 2072.96;
                                                maximum = 4800.61;
                                                minimum = 6649.65;
                                            }};
                                            price = new GoogleCloudRetailV2betaInterval() {{
                                                exclusiveMaximum = 5221.76;
                                                exclusiveMinimum = 7538.9;
                                                maximum = 8536.06;
                                                minimum = 6040.78;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "officiis";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "dolor";
                                        }}),
                                        add(new GoogleCloudRetailV2betaPromotion() {{
                                            promotionId = "dicta";
                                        }}),
                                    }};
                                    publishTime = "error";
                                    rating = new GoogleCloudRetailV2betaRating() {{
                                        averageRating = 7847.31;
                                        ratingCount = 111496;
                                        ratingHistogram = new Integer[]{{
                                            add(458970),
                                            add(854115),
                                        }};
                                    }};
                                    retrievableFields = "ad";
                                    sizes = new String[]{{
                                        add("enim"),
                                    }};
                                    tags = new String[]{{
                                        add("iusto"),
                                        add("dignissimos"),
                                        add("libero"),
                                        add("illo"),
                                    }};
                                    title = "Mr.";
                                    ttl = "incidunt";
                                    type = GoogleCloudRetailV2betaProductTypeEnum.COLLECTION;
                                    uri = "https://serene-fang.biz";
                                }};
                                quantity = 970079;
                            }}),
                        }};
                        purchaseTransaction = new GoogleCloudRetailV2betaPurchaseTransaction() {{
                            cost = 9391.61;
                            currencyCode = "reprehenderit";
                            id = "85fc3781-4d4c-498e-8c2b-b89eb75dad63";
                            revenue = 4138.01;
                            tax = 7712.26;
                        }};;
                        referrerUri = "commodi";
                        searchQuery = "aut";
                        sessionId = "voluptatem";
                        uri = "http://baggy-cultivar.org";
                        userInfo = new GoogleCloudRetailV2betaUserInfo() {{
                            directUserRequest = false;
                            ipAddress = "praesentium";
                            userAgent = "quidem";
                            userId = "cum";
                        }};;
                        visitorId = "amet";
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "doloremque";
                key = "earum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "provident";
                uploadProtocol = "dolorum";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsPredictResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsPredict(req, new RetailProjectsLocationsCatalogsServingConfigsPredictSecurity("necessitatibus", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaPredictResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsServingConfigsRemoveControl

Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRemoveControlRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest req = new RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaRemoveControlRequest = new GoogleCloudRetailV2betaRemoveControlRequest() {{
                    controlId = "nemo";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "corrupti";
                key = "aperiam";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "eos";
                uploadProtocol = "totam";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsRemoveControl(req, new RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity("dicta", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaServingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsServingConfigsSearch

Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsSearchRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsSearchResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsServingConfigsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequest;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestBoostSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestSearchModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaUserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsSearchRequest req = new RetailProjectsLocationsCatalogsServingConfigsSearchRequest("velit") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaSearchRequest = new GoogleCloudRetailV2betaSearchRequest() {{
                    boostSpec = new GoogleCloudRetailV2betaSearchRequestBoostSpec() {{
                        conditionBoostSpecs = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec[]{{
                            add(new GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec() {{
                                boost = 9536.76;
                                condition = "dolor";
                            }}),
                        }};
                        skipBoostSpecValidation = false;
                    }};;
                    branch = "occaecati";
                    canonicalFilter = "atque";
                    dynamicFacetSpec = new GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec() {{
                        mode = GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum.MODE_UNSPECIFIED;
                    }};;
                    entity = "at";
                    facetSpecs = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSearchRequestFacetSpec[]{{
                        add(new GoogleCloudRetailV2betaSearchRequestFacetSpec() {{
                            enableDynamicPosition = false;
                            excludedFilterKeys = new String[]{{
                                add("esse"),
                                add("voluptatem"),
                                add("perferendis"),
                                add("rerum"),
                            }};
                            facetKey = new GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey() {{
                                caseInsensitive = false;
                                contains = new String[]{{
                                    add("aperiam"),
                                    add("dignissimos"),
                                }};
                                intervals = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval[]{{
                                    add(new GoogleCloudRetailV2betaInterval() {{
                                        exclusiveMaximum = 2436.78;
                                        exclusiveMinimum = 7841.15;
                                        maximum = 5886.39;
                                        minimum = 2313.82;
                                    }}),
                                    add(new GoogleCloudRetailV2betaInterval() {{
                                        exclusiveMaximum = 7532.4;
                                        exclusiveMinimum = 4901.1;
                                        maximum = 2358.34;
                                        minimum = 7441.01;
                                    }}),
                                    add(new GoogleCloudRetailV2betaInterval() {{
                                        exclusiveMaximum = 6205;
                                        exclusiveMinimum = 8398.07;
                                        maximum = 6396.22;
                                        minimum = 2288.57;
                                    }}),
                                    add(new GoogleCloudRetailV2betaInterval() {{
                                        exclusiveMaximum = 9485.41;
                                        exclusiveMinimum = 1339.49;
                                        maximum = 7782.76;
                                        minimum = 9310.77;
                                    }}),
                                }};
                                key = "illum";
                                orderBy = "laborum";
                                prefixes = new String[]{{
                                    add("vero"),
                                    add("qui"),
                                }};
                                query = "consectetur";
                                restrictedValues = new String[]{{
                                    add("explicabo"),
                                    add("explicabo"),
                                    add("exercitationem"),
                                    add("nihil"),
                                }};
                                returnMinMax = false;
                            }};
                            limit = 252700;
                        }}),
                        add(new GoogleCloudRetailV2betaSearchRequestFacetSpec() {{
                            enableDynamicPosition = false;
                            excludedFilterKeys = new String[]{{
                                add("illo"),
                            }};
                            facetKey = new GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey() {{
                                caseInsensitive = false;
                                contains = new String[]{{
                                    add("deserunt"),
                                    add("delectus"),
                                    add("non"),
                                    add("distinctio"),
                                }};
                                intervals = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval[]{{
                                    add(new GoogleCloudRetailV2betaInterval() {{
                                        exclusiveMaximum = 3499.93;
                                        exclusiveMinimum = 2883;
                                        maximum = 2543.82;
                                        minimum = 9211.93;
                                    }}),
                                    add(new GoogleCloudRetailV2betaInterval() {{
                                        exclusiveMaximum = 2653.03;
                                        exclusiveMinimum = 4502.09;
                                        maximum = 1272.94;
                                        minimum = 8798.57;
                                    }}),
                                }};
                                key = "rem";
                                orderBy = "aperiam";
                                prefixes = new String[]{{
                                    add("deleniti"),
                                }};
                                query = "enim";
                                restrictedValues = new String[]{{
                                    add("similique"),
                                    add("minima"),
                                }};
                                returnMinMax = false;
                            }};
                            limit = 727544;
                        }}),
                    }};
                    filter = "magnam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("modi", "eum");
                    }};
                    offset = 199529;
                    orderBy = "mollitia";
                    pageCategories = new String[]{{
                        add("fugiat"),
                        add("nostrum"),
                    }};
                    pageSize = 475325;
                    pageToken = "veniam";
                    personalizationSpec = new GoogleCloudRetailV2betaSearchRequestPersonalizationSpec() {{
                        mode = GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum.DISABLED;
                    }};;
                    query = "ab";
                    queryExpansionSpec = new GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec() {{
                        condition = GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum.CONDITION_UNSPECIFIED;
                        pinUnexpandedResults = false;
                    }};;
                    searchMode = GoogleCloudRetailV2betaSearchRequestSearchModeEnum.SEARCH_MODE_UNSPECIFIED;
                    spellCorrectionSpec = new GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec() {{
                        mode = GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum.MODE_UNSPECIFIED;
                    }};;
                    userInfo = new GoogleCloudRetailV2betaUserInfo() {{
                        directUserRequest = false;
                        ipAddress = "eveniet";
                        userAgent = "odio";
                        userId = "commodi";
                    }};;
                    variantRollupKeys = new String[]{{
                        add("dolorum"),
                        add("possimus"),
                    }};
                    visitorId = "voluptate";
                }};;
                accessToken = "consectetur";
                alt = AltEnum.JSON;
                callback = "quaerat";
                fields = "itaque";
                key = "minus";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "iusto";
                uploadProtocol = "quas";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsSearchResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsSearch(req, new RetailProjectsLocationsCatalogsServingConfigsSearchSecurity("et", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsSetDefaultBranch

Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsSetDefaultBranchRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsSetDefaultBranchResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsSetDefaultBranchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaSetDefaultBranchRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsSetDefaultBranchRequest req = new RetailProjectsLocationsCatalogsSetDefaultBranchRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaSetDefaultBranchRequest = new GoogleCloudRetailV2betaSetDefaultBranchRequest() {{
                    branchId = "fuga";
                    force = false;
                    note = "alias";
                }};;
                accessToken = "rem";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "laudantium";
                key = "repellendus";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "eaque";
                uploadProtocol = "saepe";
            }};            

            RetailProjectsLocationsCatalogsSetDefaultBranchResponse res = sdk.projects.retailProjectsLocationsCatalogsSetDefaultBranch(req, new RetailProjectsLocationsCatalogsSetDefaultBranchSecurity("delectus", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsUserEventsCollect

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsCollectRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsCollectResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsCollectSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsCollectRequest req = new RetailProjectsLocationsCatalogsUserEventsCollectRequest("nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "alias";
                ets = "eveniet";
                fields = "hic";
                key = "voluptatem";
                oauthToken = "incidunt";
                prebuiltRule = "qui";
                prettyPrint = false;
                quotaUser = "qui";
                rawJson = "necessitatibus";
                uploadType = "harum";
                uploadProtocol = "explicabo";
                uri = "http://hungry-direction.net";
                userEvent = "voluptatibus";
            }};            

            RetailProjectsLocationsCatalogsUserEventsCollectResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsCollect(req, new RetailProjectsLocationsCatalogsUserEventsCollectSecurity("molestias", "officia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleApiHttpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsUserEventsImport

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsImportRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsImportResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaBigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCompletionDetail;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaGcsSource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImportErrorsConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImportUserEventsRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductDetailInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaUserEventInlineSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaUserEventInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaUserEventInputConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaUserInfo;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsImportRequest req = new RetailProjectsLocationsCatalogsUserEventsImportRequest("libero") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaImportUserEventsRequestInput = new GoogleCloudRetailV2betaImportUserEventsRequestInput() {{
                    errorsConfig = new GoogleCloudRetailV2betaImportErrorsConfig() {{
                        gcsPrefix = "sequi";
                    }};;
                    inputConfig = new GoogleCloudRetailV2betaUserEventInputConfigInput() {{
                        bigQuerySource = new GoogleCloudRetailV2betaBigQuerySource() {{
                            dataSchema = "aliquid";
                            datasetId = "ea";
                            gcsStagingDir = "impedit";
                            partitionDate = new GoogleTypeDate() {{
                                day = 498388;
                                month = 140957;
                                year = 243623;
                            }};;
                            projectId = "reiciendis";
                            tableId = "repellat";
                        }};;
                        gcsSource = new GoogleCloudRetailV2betaGcsSource() {{
                            dataSchema = "nulla";
                            inputUris = new String[]{{
                                add("natus"),
                                add("accusamus"),
                                add("doloremque"),
                            }};
                        }};;
                        userEventInlineSource = new GoogleCloudRetailV2betaUserEventInlineSourceInput() {{
                            userEvents = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaUserEventInput[]{{
                                add(new GoogleCloudRetailV2betaUserEventInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                        put("recusandae", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(2516.27),
                                                add(5245.77),
                                                add(1578.84),
                                                add(3542.25),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("dicta"),
                                                add("voluptatibus"),
                                                add("eligendi"),
                                                add("quae"),
                                            }};
                                        }});
                                        put("officiis", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(1002.51),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("optio"),
                                                add("rem"),
                                            }};
                                        }});
                                        put("perferendis", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(9670.55),
                                                add(9555.51),
                                                add(6150.58),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("quos"),
                                            }};
                                        }});
                                    }};
                                    attributionToken = "ullam";
                                    cartId = "dolore";
                                    completionDetail = new GoogleCloudRetailV2betaCompletionDetail() {{
                                        completionAttributionToken = "modi";
                                        selectedPosition = 929292;
                                        selectedSuggestion = "maxime";
                                    }};
                                    entity = "modi";
                                    eventTime = "consequuntur";
                                    eventType = "assumenda";
                                    experimentIds = new String[]{{
                                        add("doloribus"),
                                        add("impedit"),
                                        add("porro"),
                                        add("accusamus"),
                                    }};
                                    filter = "totam";
                                    offset = 969168;
                                    orderBy = "ab";
                                    pageCategories = new String[]{{
                                        add("nihil"),
                                        add("esse"),
                                        add("iure"),
                                    }};
                                    pageViewId = "odio";
                                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductDetailInput[]{{
                                        add(new GoogleCloudRetailV2betaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2betaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                                    put("vel", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(3577.58),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("consequuntur"),
                                                            add("officia"),
                                                        }};
                                                    }});
                                                    put("reprehenderit", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(2628),
                                                            add(563.72),
                                                            add(5220.62),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("accusantium"),
                                                            add("veniam"),
                                                            add("saepe"),
                                                            add("neque"),
                                                        }};
                                                    }});
                                                    put("facere", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(5525.81),
                                                            add(9847.73),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("est"),
                                                            add("delectus"),
                                                            add("velit"),
                                                            add("vitae"),
                                                        }};
                                                    }});
                                                    put("nesciunt", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(748.95),
                                                            add(9979.95),
                                                            add(3632.14),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("possimus"),
                                                            add("unde"),
                                                            add("incidunt"),
                                                            add("explicabo"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2betaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("cupiditate"),
                                                        add("optio"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("quidem"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2betaProductAvailabilityEnum.AVAILABILITY_UNSPECIFIED;
                                                availableQuantity = 412433;
                                                availableTime = "sapiente";
                                                brands = new String[]{{
                                                    add("veniam"),
                                                }};
                                                categories = new String[]{{
                                                    add("officia"),
                                                    add("sint"),
                                                    add("ut"),
                                                    add("numquam"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("adipisci"),
                                                    add("libero"),
                                                    add("in"),
                                                    add("minima"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("minus"),
                                                        add("ab"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("hic"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("quisquam"),
                                                    add("dolor"),
                                                }};
                                                description = "ducimus";
                                                expireTime = "fuga";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("qui"),
                                                        }};
                                                        type = "aliquid";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("incidunt"),
                                                        }};
                                                        type = "adipisci";
                                                    }}),
                                                }};
                                                gtin = "praesentium";
                                                id = "35bbc05a-23a4-45ce-bc5f-de10a0ce2169";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 354821;
                                                        uri = "http://angelic-airplane.com";
                                                        width = 590585;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 765833;
                                                        uri = "http://tender-shoehorn.info";
                                                        width = 923456;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 246772;
                                                        uri = "http://little-glue.com";
                                                        width = 486272;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 616941;
                                                        uri = "https://shady-wine.net";
                                                        width = 697330;
                                                    }}),
                                                }};
                                                languageCode = "itaque";
                                                materials = new String[]{{
                                                    add("unde"),
                                                    add("modi"),
                                                }};
                                                name = "Irvin Rippin";
                                                patterns = new String[]{{
                                                    add("incidunt"),
                                                    add("recusandae"),
                                                    add("quod"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                                    cost = 6646.66;
                                                    currencyCode = "saepe";
                                                    originalPrice = 4230.54;
                                                    price = 7794.09;
                                                    priceEffectiveTime = "nesciunt";
                                                    priceExpireTime = "illum";
                                                    priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                                            exclusiveMaximum = 3674.75;
                                                            exclusiveMinimum = 8487.22;
                                                            maximum = 7068.72;
                                                            minimum = 2476.18;
                                                        }};
                                                        price = new GoogleCloudRetailV2betaInterval() {{
                                                            exclusiveMaximum = 6495.34;
                                                            exclusiveMinimum = 8270.51;
                                                            maximum = 9279.77;
                                                            minimum = 7189.81;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "pariatur";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "facere";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "laborum";
                                                    }}),
                                                }};
                                                publishTime = "eveniet";
                                                rating = new GoogleCloudRetailV2betaRating() {{
                                                    averageRating = 6731.91;
                                                    ratingCount = 276337;
                                                    ratingHistogram = new Integer[]{{
                                                        add(369523),
                                                        add(60),
                                                        add(379894),
                                                        add(647210),
                                                    }};
                                                }};
                                                retrievableFields = "molestias";
                                                sizes = new String[]{{
                                                    add("est"),
                                                    add("occaecati"),
                                                    add("labore"),
                                                }};
                                                tags = new String[]{{
                                                    add("perferendis"),
                                                    add("fugit"),
                                                    add("aliquid"),
                                                    add("magnam"),
                                                }};
                                                title = "Mrs.";
                                                ttl = "eligendi";
                                                type = GoogleCloudRetailV2betaProductTypeEnum.COLLECTION;
                                                uri = "http://unfortunate-oasis.org";
                                            }};
                                            quantity = 621393;
                                        }}),
                                    }};
                                    purchaseTransaction = new GoogleCloudRetailV2betaPurchaseTransaction() {{
                                        cost = 6530;
                                        currencyCode = "magnam";
                                        id = "578adc1a-c600-4dec-801a-c802e2ec09ff";
                                        revenue = 5144.62;
                                        tax = 9822.48;
                                    }};
                                    referrerUri = "alias";
                                    searchQuery = "asperiores";
                                    sessionId = "rem";
                                    uri = "http://hefty-type.org";
                                    userInfo = new GoogleCloudRetailV2betaUserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "velit";
                                        userAgent = "eius";
                                        userId = "esse";
                                    }};
                                    visitorId = "in";
                                }}),
                                add(new GoogleCloudRetailV2betaUserEventInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                        put("quasi", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(8766.49),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("accusantium"),
                                                add("qui"),
                                                add("impedit"),
                                            }};
                                        }});
                                        put("beatae", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(1165.58),
                                                add(1391.33),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("rerum"),
                                                add("alias"),
                                            }};
                                        }});
                                        put("error", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(355.81),
                                                add(6641.97),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("ex"),
                                                add("quas"),
                                            }};
                                        }});
                                        put("veritatis", new GoogleCloudRetailV2betaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(626.88),
                                                add(6317.19),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("quam"),
                                                add("magni"),
                                            }};
                                        }});
                                    }};
                                    attributionToken = "deserunt";
                                    cartId = "delectus";
                                    completionDetail = new GoogleCloudRetailV2betaCompletionDetail() {{
                                        completionAttributionToken = "omnis";
                                        selectedPosition = 151230;
                                        selectedSuggestion = "nesciunt";
                                    }};
                                    entity = "maxime";
                                    eventTime = "quis";
                                    eventType = "cupiditate";
                                    experimentIds = new String[]{{
                                        add("excepturi"),
                                        add("maiores"),
                                    }};
                                    filter = "laudantium";
                                    offset = 243904;
                                    orderBy = "reiciendis";
                                    pageCategories = new String[]{{
                                        add("nemo"),
                                    }};
                                    pageViewId = "ipsa";
                                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductDetailInput[]{{
                                        add(new GoogleCloudRetailV2betaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2betaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                                    put("quas", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(3956.34),
                                                            add(9890.33),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("nobis"),
                                                            add("perspiciatis"),
                                                            add("accusantium"),
                                                            add("dicta"),
                                                        }};
                                                    }});
                                                    put("minus", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9087.34),
                                                            add(7815.82),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("quidem"),
                                                            add("modi"),
                                                            add("voluptates"),
                                                        }};
                                                    }});
                                                    put("fugit", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(1940.58),
                                                            add(7581.94),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("esse"),
                                                            add("blanditiis"),
                                                            add("sint"),
                                                            add("repellat"),
                                                        }};
                                                    }});
                                                    put("a", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9792.87),
                                                            add(9304.29),
                                                            add(8615.91),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("corporis"),
                                                            add("velit"),
                                                            add("officiis"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2betaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("officia"),
                                                        add("saepe"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("repudiandae"),
                                                        add("accusantium"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2betaProductAvailabilityEnum.PREORDER;
                                                availableQuantity = 770128;
                                                availableTime = "quasi";
                                                brands = new String[]{{
                                                    add("eius"),
                                                    add("quisquam"),
                                                    add("eos"),
                                                }};
                                                categories = new String[]{{
                                                    add("natus"),
                                                    add("minus"),
                                                    add("quia"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("reprehenderit"),
                                                    add("quod"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("corrupti"),
                                                        add("amet"),
                                                        add("molestiae"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("laborum"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("perferendis"),
                                                    add("necessitatibus"),
                                                }};
                                                description = "architecto";
                                                expireTime = "molestias";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("maiores"),
                                                        }};
                                                        type = "neque";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("earum"),
                                                        }};
                                                        type = "veniam";
                                                    }}),
                                                }};
                                                gtin = "ipsam";
                                                id = "055756f5-d56d-40bd-8af2-dfe13db4f62c";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 677509;
                                                        uri = "http://vivacious-leveret.name";
                                                        width = 252473;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 97810;
                                                        uri = "https://unequaled-preoccupation.net";
                                                        width = 42615;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 711871;
                                                        uri = "https://automatic-payoff.info";
                                                        width = 570423;
                                                    }}),
                                                }};
                                                languageCode = "magni";
                                                materials = new String[]{{
                                                    add("possimus"),
                                                    add("dolor"),
                                                }};
                                                name = "Aaron Tillman";
                                                patterns = new String[]{{
                                                    add("quo"),
                                                    add("quos"),
                                                    add("asperiores"),
                                                    add("voluptatum"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                                    cost = 6147.7;
                                                    currencyCode = "corporis";
                                                    originalPrice = 371.29;
                                                    price = 758.5;
                                                    priceEffectiveTime = "aut";
                                                    priceExpireTime = "doloribus";
                                                    priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                                            exclusiveMaximum = 3421.04;
                                                            exclusiveMinimum = 8698.48;
                                                            maximum = 8234.72;
                                                            minimum = 2054.99;
                                                        }};
                                                        price = new GoogleCloudRetailV2betaInterval() {{
                                                            exclusiveMaximum = 8661.35;
                                                            exclusiveMinimum = 4248.53;
                                                            maximum = 9608.13;
                                                            minimum = 6525.15;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "quae";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "aperiam";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "non";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "voluptates";
                                                    }}),
                                                }};
                                                publishTime = "ad";
                                                rating = new GoogleCloudRetailV2betaRating() {{
                                                    averageRating = 3050.47;
                                                    ratingCount = 788165;
                                                    ratingHistogram = new Integer[]{{
                                                        add(162450),
                                                        add(982445),
                                                        add(81581),
                                                    }};
                                                }};
                                                retrievableFields = "aliquid";
                                                sizes = new String[]{{
                                                    add("est"),
                                                    add("dolor"),
                                                    add("aliquid"),
                                                }};
                                                tags = new String[]{{
                                                    add("cumque"),
                                                }};
                                                title = "Ms.";
                                                ttl = "voluptatum";
                                                type = GoogleCloudRetailV2betaProductTypeEnum.PRIMARY;
                                                uri = "http://verifiable-dissonance.name";
                                            }};
                                            quantity = 258059;
                                        }}),
                                        add(new GoogleCloudRetailV2betaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2betaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                                    put("voluptatum", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(7031.89),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("tenetur"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2betaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("quidem"),
                                                        add("totam"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("deserunt"),
                                                        add("magni"),
                                                        add("nihil"),
                                                        add("voluptas"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2betaProductAvailabilityEnum.PREORDER;
                                                availableQuantity = 413780;
                                                availableTime = "alias";
                                                brands = new String[]{{
                                                    add("aut"),
                                                    add("dolore"),
                                                    add("maxime"),
                                                }};
                                                categories = new String[]{{
                                                    add("iste"),
                                                    add("ullam"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("placeat"),
                                                    add("voluptas"),
                                                    add("occaecati"),
                                                    add("unde"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("nihil"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("libero"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("quasi"),
                                                    add("cumque"),
                                                }};
                                                description = "dicta";
                                                expireTime = "harum";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("beatae"),
                                                            add("cumque"),
                                                            add("delectus"),
                                                        }};
                                                        type = "labore";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("corrupti"),
                                                            add("rem"),
                                                            add("atque"),
                                                        }};
                                                        type = "officiis";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("pariatur"),
                                                            add("sapiente"),
                                                            add("quo"),
                                                        }};
                                                        type = "incidunt";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("minus"),
                                                            add("porro"),
                                                            add("id"),
                                                            add("excepturi"),
                                                        }};
                                                        type = "occaecati";
                                                    }}),
                                                }};
                                                gtin = "libero";
                                                id = "c7fc0b2d-ce10-4873-a42b-006d678878ba";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 344856;
                                                        uri = "https://busy-plant.biz";
                                                        width = 522390;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 168142;
                                                        uri = "http://narrow-skull.biz";
                                                        width = 286453;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 958068;
                                                        uri = "https://whole-pavement.name";
                                                        width = 763869;
                                                    }}),
                                                }};
                                                languageCode = "natus";
                                                materials = new String[]{{
                                                    add("doloribus"),
                                                    add("quia"),
                                                }};
                                                name = "Angelo Runolfsdottir";
                                                patterns = new String[]{{
                                                    add("nemo"),
                                                    add("illum"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                                    cost = 2012.66;
                                                    currencyCode = "sit";
                                                    originalPrice = 4871.48;
                                                    price = 7943.06;
                                                    priceEffectiveTime = "asperiores";
                                                    priceExpireTime = "recusandae";
                                                    priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                                            exclusiveMaximum = 9121.51;
                                                            exclusiveMinimum = 5062.5;
                                                            maximum = 1183.49;
                                                            minimum = 1441.79;
                                                        }};
                                                        price = new GoogleCloudRetailV2betaInterval() {{
                                                            exclusiveMaximum = 251.9;
                                                            exclusiveMinimum = 3962.34;
                                                            maximum = 8986.38;
                                                            minimum = 1489.75;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "deleniti";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "nesciunt";
                                                    }}),
                                                }};
                                                publishTime = "delectus";
                                                rating = new GoogleCloudRetailV2betaRating() {{
                                                    averageRating = 6736.53;
                                                    ratingCount = 303421;
                                                    ratingHistogram = new Integer[]{{
                                                        add(266680),
                                                        add(122085),
                                                        add(771092),
                                                    }};
                                                }};
                                                retrievableFields = "eius";
                                                sizes = new String[]{{
                                                    add("ipsa"),
                                                    add("at"),
                                                    add("dolorem"),
                                                }};
                                                tags = new String[]{{
                                                    add("aspernatur"),
                                                    add("inventore"),
                                                    add("sequi"),
                                                    add("fugit"),
                                                }};
                                                title = "Miss";
                                                ttl = "hic";
                                                type = GoogleCloudRetailV2betaProductTypeEnum.TYPE_UNSPECIFIED;
                                                uri = "http://buttery-ascent.com";
                                            }};
                                            quantity = 860362;
                                        }}),
                                        add(new GoogleCloudRetailV2betaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2betaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                                    put("illo", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9618.42),
                                                            add(2550.64),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("nobis"),
                                                            add("ex"),
                                                            add("repellat"),
                                                            add("quae"),
                                                        }};
                                                    }});
                                                    put("deleniti", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9442.03),
                                                            add(5698.34),
                                                            add(3966.1),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("beatae"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2betaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("ea"),
                                                        add("animi"),
                                                        add("dolore"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("dignissimos"),
                                                        add("esse"),
                                                        add("animi"),
                                                        add("laudantium"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2betaProductAvailabilityEnum.OUT_OF_STOCK;
                                                availableQuantity = 908539;
                                                availableTime = "earum";
                                                brands = new String[]{{
                                                    add("officiis"),
                                                }};
                                                categories = new String[]{{
                                                    add("rerum"),
                                                    add("itaque"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("ipsam"),
                                                    add("explicabo"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("aliquid"),
                                                        add("quis"),
                                                        add("facilis"),
                                                        add("ipsum"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("quaerat"),
                                                        add("architecto"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("eveniet"),
                                                    add("dolor"),
                                                    add("expedita"),
                                                }};
                                                description = "libero";
                                                expireTime = "iste";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("quos"),
                                                            add("temporibus"),
                                                            add("sint"),
                                                            add("iusto"),
                                                        }};
                                                        type = "enim";
                                                    }}),
                                                }};
                                                gtin = "accusamus";
                                                id = "0e8419d8-f84f-4144-b3e0-7edcc4aa5f3c";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 748973;
                                                        uri = "https://palatable-aide.info";
                                                        width = 642804;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 584640;
                                                        uri = "http://crushing-terrorism.com";
                                                        width = 321473;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 392752;
                                                        uri = "http://critical-limitation.com";
                                                        width = 140439;
                                                    }}),
                                                }};
                                                languageCode = "iusto";
                                                materials = new String[]{{
                                                    add("eos"),
                                                    add("repellendus"),
                                                    add("nesciunt"),
                                                }};
                                                name = "Bobbie Greenfelder MD";
                                                patterns = new String[]{{
                                                    add("quam"),
                                                    add("est"),
                                                    add("aliquam"),
                                                    add("delectus"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                                    cost = 6358.68;
                                                    currencyCode = "voluptatum";
                                                    originalPrice = 4826.28;
                                                    price = 8020.69;
                                                    priceEffectiveTime = "voluptatibus";
                                                    priceExpireTime = "voluptas";
                                                    priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                                            exclusiveMaximum = 2477.67;
                                                            exclusiveMinimum = 3538.19;
                                                            maximum = 6750.58;
                                                            minimum = 3782.68;
                                                        }};
                                                        price = new GoogleCloudRetailV2betaInterval() {{
                                                            exclusiveMaximum = 9873.71;
                                                            exclusiveMinimum = 6578.62;
                                                            maximum = 9259.94;
                                                            minimum = 3594.53;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "non";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "distinctio";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "maiores";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "laboriosam";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "voluptatem";
                                                    }}),
                                                }};
                                                publishTime = "optio";
                                                rating = new GoogleCloudRetailV2betaRating() {{
                                                    averageRating = 1936.23;
                                                    ratingCount = 125707;
                                                    ratingHistogram = new Integer[]{{
                                                        add(973096),
                                                    }};
                                                }};
                                                retrievableFields = "doloremque";
                                                sizes = new String[]{{
                                                    add("amet"),
                                                }};
                                                tags = new String[]{{
                                                    add("in"),
                                                    add("nostrum"),
                                                    add("temporibus"),
                                                }};
                                                title = "Mr.";
                                                ttl = "dolor";
                                                type = GoogleCloudRetailV2betaProductTypeEnum.PRIMARY;
                                                uri = "http://willing-tritone.com";
                                            }};
                                            quantity = 667215;
                                        }}),
                                        add(new GoogleCloudRetailV2betaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2betaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                                    put("quod", new GoogleCloudRetailV2betaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(5509.94),
                                                            add(8199.96),
                                                            add(9804.67),
                                                            add(4857.95),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("sapiente"),
                                                            add("aperiam"),
                                                            add("similique"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2betaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("provident"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("repellendus"),
                                                        add("unde"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2betaProductAvailabilityEnum.AVAILABILITY_UNSPECIFIED;
                                                availableQuantity = 771931;
                                                availableTime = "sequi";
                                                brands = new String[]{{
                                                    add("labore"),
                                                    add("expedita"),
                                                }};
                                                categories = new String[]{{
                                                    add("quisquam"),
                                                    add("sunt"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("nulla"),
                                                    add("maiores"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("mollitia"),
                                                        add("impedit"),
                                                        add("accusamus"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("quas"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("cum"),
                                                    add("dicta"),
                                                    add("impedit"),
                                                }};
                                                description = "tempora";
                                                expireTime = "eveniet";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("impedit"),
                                                        }};
                                                        type = "quas";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("vel"),
                                                            add("eligendi"),
                                                            add("recusandae"),
                                                            add("ex"),
                                                        }};
                                                        type = "beatae";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("maiores"),
                                                        }};
                                                        type = "itaque";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("quidem"),
                                                            add("illo"),
                                                            add("quo"),
                                                            add("dignissimos"),
                                                        }};
                                                        type = "minus";
                                                    }}),
                                                }};
                                                gtin = "distinctio";
                                                id = "db6eec74-378b-4a25-b177-47dc915ad2ca";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 341983;
                                                        uri = "https://terrific-harm.info";
                                                        width = 127499;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 233708;
                                                        uri = "https://slimy-baggie.org";
                                                        width = 350271;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 633643;
                                                        uri = "https://complex-vista.biz";
                                                        width = 640565;
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaImage() {{
                                                        height = 379661;
                                                        uri = "https://loathsome-armrest.com";
                                                        width = 514480;
                                                    }}),
                                                }};
                                                languageCode = "iusto";
                                                materials = new String[]{{
                                                    add("molestiae"),
                                                    add("quis"),
                                                    add("iure"),
                                                }};
                                                name = "Gail Fay";
                                                patterns = new String[]{{
                                                    add("iure"),
                                                    add("quisquam"),
                                                    add("provident"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                                    cost = 5155.95;
                                                    currencyCode = "nam";
                                                    originalPrice = 3661.47;
                                                    price = 3176.32;
                                                    priceEffectiveTime = "ipsam";
                                                    priceExpireTime = "minima";
                                                    priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                                            exclusiveMaximum = 2733.83;
                                                            exclusiveMinimum = 196.91;
                                                            maximum = 5469.63;
                                                            minimum = 408.74;
                                                        }};
                                                        price = new GoogleCloudRetailV2betaInterval() {{
                                                            exclusiveMaximum = 8541.37;
                                                            exclusiveMinimum = 2578.21;
                                                            maximum = 392.02;
                                                            minimum = 7402.45;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "nobis";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "porro";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "impedit";
                                                    }}),
                                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                                        promotionId = "nisi";
                                                    }}),
                                                }};
                                                publishTime = "cumque";
                                                rating = new GoogleCloudRetailV2betaRating() {{
                                                    averageRating = 7437.95;
                                                    ratingCount = 856568;
                                                    ratingHistogram = new Integer[]{{
                                                        add(720319),
                                                        add(315387),
                                                    }};
                                                }};
                                                retrievableFields = "maiores";
                                                sizes = new String[]{{
                                                    add("necessitatibus"),
                                                }};
                                                tags = new String[]{{
                                                    add("cupiditate"),
                                                    add("voluptatem"),
                                                    add("provident"),
                                                    add("adipisci"),
                                                }};
                                                title = "Mr.";
                                                ttl = "magnam";
                                                type = GoogleCloudRetailV2betaProductTypeEnum.COLLECTION;
                                                uri = "https://compassionate-heroine.net";
                                            }};
                                            quantity = 663062;
                                        }}),
                                    }};
                                    purchaseTransaction = new GoogleCloudRetailV2betaPurchaseTransaction() {{
                                        cost = 8210.16;
                                        currencyCode = "fugit";
                                        id = "553819b4-74b0-4ed2-8e56-248fff639a91";
                                        revenue = 569.98;
                                        tax = 6509.14;
                                    }};
                                    referrerUri = "nam";
                                    searchQuery = "assumenda";
                                    sessionId = "quo";
                                    uri = "https://separate-haunt.com";
                                    userInfo = new GoogleCloudRetailV2betaUserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "suscipit";
                                        userAgent = "voluptate";
                                        userId = "nisi";
                                    }};
                                    visitorId = "aliquid";
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "accusamus";
                fields = "ab";
                key = "itaque";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "alias";
                uploadProtocol = "qui";
            }};            

            RetailProjectsLocationsCatalogsUserEventsImportResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsImport(req, new RetailProjectsLocationsCatalogsUserEventsImportSecurity("consequuntur", "vitae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsUserEventsPurge

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsPurgeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsPurgeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsPurgeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPurgeUserEventsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsPurgeRequest req = new RetailProjectsLocationsCatalogsUserEventsPurgeRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaPurgeUserEventsRequest = new GoogleCloudRetailV2betaPurgeUserEventsRequest() {{
                    filter = "amet";
                    force = false;
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "unde";
                key = "similique";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "amet";
                uploadProtocol = "debitis";
            }};            

            RetailProjectsLocationsCatalogsUserEventsPurgeResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsPurge(req, new RetailProjectsLocationsCatalogsUserEventsPurgeSecurity("nobis", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsUserEventsRejoin

Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsRejoinRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsRejoinResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsRejoinSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRejoinUserEventsRequest;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsRejoinRequest req = new RetailProjectsLocationsCatalogsUserEventsRejoinRequest("temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaRejoinUserEventsRequest = new GoogleCloudRetailV2betaRejoinUserEventsRequest() {{
                    userEventRejoinScope = GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScopeEnum.JOINED_EVENTS;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "veniam";
                key = "aliquam";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "earum";
                uploadProtocol = "doloremque";
            }};            

            RetailProjectsLocationsCatalogsUserEventsRejoinResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsRejoin(req, new RetailProjectsLocationsCatalogsUserEventsRejoinSecurity("ipsum", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsUserEventsWrite

Writes a single user event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsWriteRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsWriteResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsUserEventsWriteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCompletionDetail;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductDetailInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaRating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaUserEventInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaUserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsWriteRequest req = new RetailProjectsLocationsCatalogsUserEventsWriteRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2betaUserEventInput = new GoogleCloudRetailV2betaUserEventInput() {{
                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                        put("quam", new GoogleCloudRetailV2betaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(6383.63),
                                add(4064.93),
                                add(1017.7),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("laborum"),
                                add("veritatis"),
                                add("quod"),
                                add("a"),
                            }};
                        }});
                        put("qui", new GoogleCloudRetailV2betaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(4151.25),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("totam"),
                                add("tenetur"),
                                add("voluptate"),
                            }};
                        }});
                        put("quam", new GoogleCloudRetailV2betaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(1102.47),
                                add(9605.23),
                                add(9686.89),
                                add(7989.53),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("inventore"),
                                add("facere"),
                            }};
                        }});
                    }};
                    attributionToken = "maxime";
                    cartId = "fuga";
                    completionDetail = new GoogleCloudRetailV2betaCompletionDetail() {{
                        completionAttributionToken = "ab";
                        selectedPosition = 405789;
                        selectedSuggestion = "consectetur";
                    }};;
                    entity = "maiores";
                    eventTime = "sed";
                    eventType = "animi";
                    experimentIds = new String[]{{
                        add("eligendi"),
                    }};
                    filter = "voluptatum";
                    offset = 21668;
                    orderBy = "laborum";
                    pageCategories = new String[]{{
                        add("nihil"),
                        add("tenetur"),
                        add("sapiente"),
                    }};
                    pageViewId = "velit";
                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaProductDetailInput[]{{
                        add(new GoogleCloudRetailV2betaProductDetailInput() {{
                            product = new GoogleCloudRetailV2betaProductInput() {{
                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCustomAttribute>() {{
                                    put("optio", new GoogleCloudRetailV2betaCustomAttribute() {{
                                        indexable = false;
                                        numbers = new Double[]{{
                                            add(8701.83),
                                            add(9453.2),
                                            add(5620.66),
                                            add(3712.95),
                                        }};
                                        searchable = false;
                                        text = new String[]{{
                                            add("laborum"),
                                            add("perspiciatis"),
                                        }};
                                    }});
                                    put("voluptates", new GoogleCloudRetailV2betaCustomAttribute() {{
                                        indexable = false;
                                        numbers = new Double[]{{
                                            add(951.23),
                                            add(5551.94),
                                        }};
                                        searchable = false;
                                        text = new String[]{{
                                            add("commodi"),
                                            add("porro"),
                                        }};
                                    }});
                                }};
                                audience = new GoogleCloudRetailV2betaAudience() {{
                                    ageGroups = new String[]{{
                                        add("mollitia"),
                                        add("quidem"),
                                    }};
                                    genders = new String[]{{
                                        add("et"),
                                    }};
                                }};
                                availability = GoogleCloudRetailV2betaProductAvailabilityEnum.BACKORDER;
                                availableQuantity = 166542;
                                availableTime = "natus";
                                brands = new String[]{{
                                    add("a"),
                                    add("impedit"),
                                    add("unde"),
                                    add("ut"),
                                }};
                                categories = new String[]{{
                                    add("voluptas"),
                                    add("doloribus"),
                                    add("recusandae"),
                                    add("quisquam"),
                                }};
                                collectionMemberIds = new String[]{{
                                    add("dignissimos"),
                                    add("iste"),
                                    add("provident"),
                                    add("dolor"),
                                }};
                                colorInfo = new GoogleCloudRetailV2betaColorInfo() {{
                                    colorFamilies = new String[]{{
                                        add("aperiam"),
                                        add("eaque"),
                                        add("eum"),
                                    }};
                                    colors = new String[]{{
                                        add("laborum"),
                                        add("autem"),
                                    }};
                                }};
                                conditions = new String[]{{
                                    add("explicabo"),
                                    add("fugiat"),
                                    add("doloremque"),
                                    add("voluptatem"),
                                }};
                                description = "alias";
                                expireTime = "velit";
                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaFulfillmentInfo[]{{
                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("velit"),
                                            add("ratione"),
                                        }};
                                        type = "quas";
                                    }}),
                                    add(new GoogleCloudRetailV2betaFulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("recusandae"),
                                            add("cumque"),
                                            add("doloremque"),
                                            add("totam"),
                                        }};
                                        type = "iure";
                                    }}),
                                }};
                                gtin = "maiores";
                                id = "a21e9152-cb31-4191-a7b8-e3c8db03408d";
                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaImage[]{{
                                    add(new GoogleCloudRetailV2betaImage() {{
                                        height = 843679;
                                        uri = "http://heartfelt-endothelium.org";
                                        width = 945431;
                                    }}),
                                    add(new GoogleCloudRetailV2betaImage() {{
                                        height = 826797;
                                        uri = "http://frozen-floozie.name";
                                        width = 3709;
                                    }}),
                                }};
                                languageCode = "ex";
                                materials = new String[]{{
                                    add("dicta"),
                                    add("quia"),
                                    add("commodi"),
                                    add("neque"),
                                }};
                                name = "Bradley Ledner";
                                patterns = new String[]{{
                                    add("corporis"),
                                }};
                                priceInfo = new GoogleCloudRetailV2betaPriceInfo() {{
                                    cost = 7975.27;
                                    currencyCode = "dolores";
                                    originalPrice = 8080.5;
                                    price = 5700.39;
                                    priceEffectiveTime = "recusandae";
                                    priceExpireTime = "quos";
                                    priceRange = new GoogleCloudRetailV2betaPriceInfoPriceRange() {{
                                        originalPrice = new GoogleCloudRetailV2betaInterval() {{
                                            exclusiveMaximum = 1155.61;
                                            exclusiveMinimum = 9561.3;
                                            maximum = 2172.79;
                                            minimum = 93.58;
                                        }};
                                        price = new GoogleCloudRetailV2betaInterval() {{
                                            exclusiveMaximum = 7428.99;
                                            exclusiveMinimum = 8981.55;
                                            maximum = 1960;
                                            minimum = 9258.47;
                                        }};
                                    }};
                                }};
                                primaryProductId = "labore";
                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2betaPromotion[]{{
                                    add(new GoogleCloudRetailV2betaPromotion() {{
                                        promotionId = "magni";
                                    }}),
                                }};
                                publishTime = "aperiam";
                                rating = new GoogleCloudRetailV2betaRating() {{
                                    averageRating = 1726.96;
                                    ratingCount = 848860;
                                    ratingHistogram = new Integer[]{{
                                        add(168976),
                                        add(109683),
                                    }};
                                }};
                                retrievableFields = "aliquid";
                                sizes = new String[]{{
                                    add("voluptate"),
                                    add("vel"),
                                }};
                                tags = new String[]{{
                                    add("sit"),
                                    add("vel"),
                                }};
                                title = "Mrs.";
                                ttl = "quaerat";
                                type = GoogleCloudRetailV2betaProductTypeEnum.TYPE_UNSPECIFIED;
                                uri = "https://little-architect.net";
                            }};
                            quantity = 590969;
                        }}),
                    }};
                    purchaseTransaction = new GoogleCloudRetailV2betaPurchaseTransaction() {{
                        cost = 8184.22;
                        currencyCode = "sed";
                        id = "1f9ad030-c4ec-4c11-a083-6429068b8502";
                        revenue = 6425.76;
                        tax = 3126.9;
                    }};;
                    referrerUri = "corporis";
                    searchQuery = "accusamus";
                    sessionId = "iusto";
                    uri = "https://jubilant-corduroy.net";
                    userInfo = new GoogleCloudRetailV2betaUserInfo() {{
                        directUserRequest = false;
                        ipAddress = "quisquam";
                        userAgent = "praesentium";
                        userId = "tempora";
                    }};;
                    visitorId = "ipsam";
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "voluptatem";
                key = "est";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "error";
                uploadProtocol = "voluptatibus";
                writeAsync = false;
            }};            

            RetailProjectsLocationsCatalogsUserEventsWriteResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsWrite(req, new RetailProjectsLocationsCatalogsUserEventsWriteSecurity("numquam", "rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaUserEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.RetailProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.RetailProjectsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsOperationsGetRequest req = new RetailProjectsOperationsGetRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "molestiae";
                key = "impedit";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "voluptatum";
                uploadProtocol = "aliquid";
            }};            

            RetailProjectsOperationsGetResponse res = sdk.projects.retailProjectsOperationsGet(req, new RetailProjectsOperationsGetSecurity("nihil", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsOperationsListRequest;
import org.openapis.openapi.models.operations.RetailProjectsOperationsListResponse;
import org.openapis.openapi.models.operations.RetailProjectsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsOperationsListRequest req = new RetailProjectsOperationsListRequest("optio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "aliquid";
                filter = "eum";
                key = "vel";
                oauthToken = "ad";
                pageSize = 552287L;
                pageToken = "illo";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "quibusdam";
                uploadProtocol = "fugiat";
            }};            

            RetailProjectsOperationsListResponse res = sdk.projects.retailProjectsOperationsList(req, new RetailProjectsOperationsListSecurity("impedit", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
