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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2AddCatalogAttributeRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2AddCatalogAttributeRequestInput = new GoogleCloudRetailV2AddCatalogAttributeRequestInput() {{
                    catalogAttribute = new GoogleCloudRetailV2CatalogAttributeInput() {{
                        dynamicFacetableOption = GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum.DYNAMIC_FACETABLE_DISABLED;
                        exactSearchableOption = GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum.EXACT_SEARCHABLE_ENABLED;
                        indexableOption = GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum.INDEXABLE_ENABLED;
                        key = "excepturi";
                        retrievableOption = GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum.RETRIEVABLE_ENABLED;
                        searchableOption = GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum.SEARCHABLE_DISABLED;
                    }};;
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity("quo", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2AttributesConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RemoveCatalogAttributeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2RemoveCatalogAttributeRequest = new GoogleCloudRetailV2RemoveCatalogAttributeRequest() {{
                    key = "maiores";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "esse";
                key = "totam";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "dicta";
                uploadProtocol = "nam";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity("officia", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2AttributesConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2ReplaceCatalogAttributeRequestInput = new GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput() {{
                    catalogAttribute = new GoogleCloudRetailV2CatalogAttributeInput() {{
                        dynamicFacetableOption = GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum.DYNAMIC_FACETABLE_DISABLED;
                        exactSearchableOption = GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum.EXACT_SEARCHABLE_DISABLED;
                        indexableOption = GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum.INDEXABLE_ENABLED;
                        key = "beatae";
                        retrievableOption = GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum.RETRIEVABLE_ENABLED;
                        searchableOption = GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum.SEARCHABLE_ENABLED;
                    }};;
                    updateMask = "modi";
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

            RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity("natus", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2AttributesConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2AddFulfillmentPlacesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2AddFulfillmentPlacesRequest = new GoogleCloudRetailV2AddFulfillmentPlacesRequest() {{
                    addTime = "natus";
                    allowMissing = false;
                    placeIds = new String[]{{
                        add("hic"),
                        add("saepe"),
                    }};
                    type = "fuga";
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "ipsa";
                uploadProtocol = "reiciendis";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces(req, new RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity("est", "mollitia") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2AddLocalInventoriesRequest;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Interval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2LocalInventory;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfoPriceRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2AddLocalInventoriesRequest = new GoogleCloudRetailV2AddLocalInventoriesRequest() {{
                    addMask = "dolorem";
                    addTime = "corporis";
                    allowMissing = false;
                    localInventories = new org.openapis.openapi.models.shared.GoogleCloudRetailV2LocalInventory[]{{
                        add(new GoogleCloudRetailV2LocalInventory() {{
                            attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                put("enim", new GoogleCloudRetailV2CustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(3637.11),
                                        add(3250.47),
                                        add(5701.97),
                                    }};
                                    searchable = false;
                                    text = new String[]{{
                                        add("iure"),
                                    }};
                                }});
                                put("culpa", new GoogleCloudRetailV2CustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(9589.5),
                                        add(1020.44),
                                        add(6527.9),
                                        add(2088.76),
                                    }};
                                    searchable = false;
                                    text = new String[]{{
                                        add("consequuntur"),
                                        add("repellat"),
                                        add("mollitia"),
                                    }};
                                }});
                                put("occaecati", new GoogleCloudRetailV2CustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(4143.69),
                                        add(4663.11),
                                    }};
                                    searchable = false;
                                    text = new String[]{{
                                        add("velit"),
                                        add("error"),
                                    }};
                                }});
                                put("quia", new GoogleCloudRetailV2CustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(1103.75),
                                        add(6747.52),
                                    }};
                                    searchable = false;
                                    text = new String[]{{
                                        add("enim"),
                                        add("odit"),
                                        add("quo"),
                                    }};
                                }});
                            }};
                            fulfillmentTypes = new String[]{{
                                add("tenetur"),
                            }};
                            placeId = "ipsam";
                            priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                cost = 6625.27;
                                currencyCode = "possimus";
                                originalPrice = 135.71;
                                price = 971.01;
                                priceEffectiveTime = "error";
                                priceExpireTime = "temporibus";
                                priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                    originalPrice = new GoogleCloudRetailV2Interval() {{
                                        exclusiveMaximum = 6736.6;
                                        exclusiveMinimum = 960.98;
                                        maximum = 9719.45;
                                        minimum = 9764.6;
                                    }};
                                    price = new GoogleCloudRetailV2Interval() {{
                                        exclusiveMaximum = 8781.94;
                                        exclusiveMinimum = 4686.51;
                                        maximum = 5096.24;
                                        minimum = 9767.62;
                                    }};
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "cum";
                key = "perferendis";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "ut";
                uploadProtocol = "maiores";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsAddLocalInventories(req, new RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity("dicta", "corporis") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Audience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Image;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Interval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Rating;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsCreateRequest req = new RetailProjectsLocationsCatalogsBranchesProductsCreateRequest("dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2ProductInput = new GoogleCloudRetailV2ProductInput() {{
                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                        put("harum", new GoogleCloudRetailV2CustomAttribute() {{
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
                    audience = new GoogleCloudRetailV2Audience() {{
                        ageGroups = new String[]{{
                            add("pariatur"),
                            add("modi"),
                            add("praesentium"),
                        }};
                        genders = new String[]{{
                            add("voluptates"),
                            add("quasi"),
                            add("repudiandae"),
                        }};
                    }};;
                    availability = GoogleCloudRetailV2ProductAvailabilityEnum.OUT_OF_STOCK;
                    availableQuantity = 83112;
                    availableTime = "itaque";
                    brands = new String[]{{
                        add("enim"),
                        add("consequatur"),
                    }};
                    categories = new String[]{{
                        add("quibusdam"),
                        add("explicabo"),
                        add("deserunt"),
                    }};
                    collectionMemberIds = new String[]{{
                        add("quibusdam"),
                        add("labore"),
                        add("modi"),
                    }};
                    colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                        colorFamilies = new String[]{{
                            add("aliquid"),
                        }};
                        colors = new String[]{{
                            add("quos"),
                            add("perferendis"),
                            add("magni"),
                        }};
                    }};;
                    conditions = new String[]{{
                        add("ipsam"),
                        add("alias"),
                        add("fugit"),
                        add("dolorum"),
                    }};
                    description = "excepturi";
                    expireTime = "tempora";
                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                            placeIds = new String[]{{
                                add("labore"),
                                add("delectus"),
                                add("eum"),
                            }};
                            type = "non";
                        }}),
                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                            placeIds = new String[]{{
                                add("sint"),
                                add("aliquid"),
                                add("provident"),
                                add("necessitatibus"),
                            }};
                            type = "sint";
                        }}),
                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                            placeIds = new String[]{{
                                add("dolor"),
                                add("debitis"),
                                add("a"),
                            }};
                            type = "dolorum";
                        }}),
                    }};
                    gtin = "in";
                    id = "7dfb14cd-66ae-4395-afb9-ba88f3a66997";
                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                        add(new GoogleCloudRetailV2Image() {{
                            height = 470132;
                            uri = "http://same-pilgrim.biz";
                            width = 290077;
                        }}),
                    }};
                    languageCode = "suscipit";
                    materials = new String[]{{
                        add("nobis"),
                        add("eum"),
                        add("vero"),
                    }};
                    name = "Ms. Julie Gusikowski";
                    patterns = new String[]{{
                        add("quos"),
                        add("sint"),
                        add("accusantium"),
                    }};
                    priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                        cost = 6532.01;
                        currencyCode = "reiciendis";
                        originalPrice = 6521.03;
                        price = 3209.97;
                        priceEffectiveTime = "eum";
                        priceExpireTime = "dolor";
                        priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                            originalPrice = new GoogleCloudRetailV2Interval() {{
                                exclusiveMaximum = 8965.47;
                                exclusiveMinimum = 1412.64;
                                maximum = 3675.62;
                                minimum = 972.6;
                            }};;
                            price = new GoogleCloudRetailV2Interval() {{
                                exclusiveMaximum = 4358.65;
                                exclusiveMinimum = 9840.43;
                                maximum = 8919.24;
                                minimum = 2603.41;
                            }};;
                        }};;
                    }};;
                    primaryProductId = "maxime";
                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                        add(new GoogleCloudRetailV2Promotion() {{
                            promotionId = "facilis";
                        }}),
                        add(new GoogleCloudRetailV2Promotion() {{
                            promotionId = "in";
                        }}),
                        add(new GoogleCloudRetailV2Promotion() {{
                            promotionId = "architecto";
                        }}),
                    }};
                    publishTime = "architecto";
                    rating = new GoogleCloudRetailV2Rating() {{
                        averageRating = 9194.83;
                        ratingCount = 352312;
                        ratingHistogram = new Integer[]{{
                            add(469249),
                            add(998848),
                            add(841140),
                        }};
                    }};;
                    retrievableFields = "sed";
                    sizes = new String[]{{
                        add("pariatur"),
                        add("accusantium"),
                        add("consequuntur"),
                        add("praesentium"),
                    }};
                    tags = new String[]{{
                        add("magni"),
                        add("sunt"),
                        add("quo"),
                    }};
                    title = "Dr.";
                    ttl = "pariatur";
                    type = GoogleCloudRetailV2ProductTypeEnum.COLLECTION;
                    uri = "http://nimble-caution.info";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quidem";
                key = "ipsam";
                oauthToken = "voluptate";
                prettyPrint = false;
                productId = "autem";
                quotaUser = "nam";
                uploadType = "eaque";
                uploadProtocol = "pariatur";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsCreate(req, new RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity("nemo", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2Product != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Audience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2BigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Image;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ImportErrorsConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ImportProductsRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Interval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductInlineSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductInputConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Rating;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsImportRequest req = new RetailProjectsLocationsCatalogsBranchesProductsImportRequest("perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2ImportProductsRequestInput = new GoogleCloudRetailV2ImportProductsRequestInput() {{
                    errorsConfig = new GoogleCloudRetailV2ImportErrorsConfig() {{
                        gcsPrefix = "amet";
                    }};;
                    inputConfig = new GoogleCloudRetailV2ProductInputConfigInput() {{
                        bigQuerySource = new GoogleCloudRetailV2BigQuerySource() {{
                            dataSchema = "aut";
                            datasetId = "cumque";
                            gcsStagingDir = "corporis";
                            partitionDate = new GoogleTypeDate() {{
                                day = 944124;
                                month = 729991;
                                year = 749999;
                            }};;
                            projectId = "dolores";
                            tableId = "quis";
                        }};;
                        gcsSource = new GoogleCloudRetailV2GcsSource() {{
                            dataSchema = "totam";
                            inputUris = new String[]{{
                                add("eaque"),
                                add("quis"),
                            }};
                        }};;
                        productInlineSource = new GoogleCloudRetailV2ProductInlineSourceInput() {{
                            products = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductInput[]{{
                                add(new GoogleCloudRetailV2ProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                        put("perferendis", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(7936.98),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("dolor"),
                                                add("vero"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2Audience() {{
                                        ageGroups = new String[]{{
                                            add("hic"),
                                            add("recusandae"),
                                        }};
                                        genders = new String[]{{
                                            add("facilis"),
                                            add("perspiciatis"),
                                            add("voluptatem"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2ProductAvailabilityEnum.PREORDER;
                                    availableQuantity = 164694;
                                    availableTime = "blanditiis";
                                    brands = new String[]{{
                                        add("eaque"),
                                        add("occaecati"),
                                        add("rerum"),
                                    }};
                                    categories = new String[]{{
                                        add("asperiores"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("modi"),
                                        add("iste"),
                                        add("dolorum"),
                                        add("deleniti"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("provident"),
                                            add("nobis"),
                                            add("libero"),
                                            add("delectus"),
                                        }};
                                        colors = new String[]{{
                                            add("quos"),
                                            add("aliquid"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("dolorem"),
                                    }};
                                    description = "dolor";
                                    expireTime = "qui";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("excepturi"),
                                                add("cum"),
                                                add("voluptate"),
                                                add("dignissimos"),
                                            }};
                                            type = "reiciendis";
                                        }}),
                                    }};
                                    gtin = "amet";
                                    id = "a4100674-ebf6-4928-8d1b-a77a89ebf737";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 906418;
                                            uri = "http://concrete-alien.biz";
                                            width = 758379;
                                        }}),
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 881586;
                                            uri = "http://untimely-gherkin.name";
                                            width = 588317;
                                        }}),
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 324683;
                                            uri = "https://mature-pansy.com";
                                            width = 872651;
                                        }}),
                                    }};
                                    languageCode = "quaerat";
                                    materials = new String[]{{
                                        add("vel"),
                                        add("quod"),
                                    }};
                                    name = "Clarence Parisian";
                                    patterns = new String[]{{
                                        add("iusto"),
                                        add("ipsum"),
                                        add("quisquam"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                        cost = 9473.71;
                                        currencyCode = "amet";
                                        originalPrice = 7308.56;
                                        price = 8802.98;
                                        priceEffectiveTime = "numquam";
                                        priceExpireTime = "enim";
                                        priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2Interval() {{
                                                exclusiveMaximum = 2133.12;
                                                exclusiveMinimum = 9574.51;
                                                maximum = 5182.01;
                                                minimum = 4717.52;
                                            }};
                                            price = new GoogleCloudRetailV2Interval() {{
                                                exclusiveMaximum = 256.62;
                                                exclusiveMinimum = 7115.84;
                                                maximum = 2074.7;
                                                minimum = 1536.94;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "vel";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                        add(new GoogleCloudRetailV2Promotion() {{
                                            promotionId = "voluptas";
                                        }}),
                                        add(new GoogleCloudRetailV2Promotion() {{
                                            promotionId = "deserunt";
                                        }}),
                                        add(new GoogleCloudRetailV2Promotion() {{
                                            promotionId = "quam";
                                        }}),
                                    }};
                                    publishTime = "ipsum";
                                    rating = new GoogleCloudRetailV2Rating() {{
                                        averageRating = 2776.28;
                                        ratingCount = 186458;
                                        ratingHistogram = new Integer[]{{
                                            add(807581),
                                            add(863856),
                                            add(747080),
                                        }};
                                    }};
                                    retrievableFields = "dicta";
                                    sizes = new String[]{{
                                        add("totam"),
                                        add("incidunt"),
                                        add("aspernatur"),
                                    }};
                                    tags = new String[]{{
                                        add("distinctio"),
                                    }};
                                    title = "Miss";
                                    ttl = "aliquid";
                                    type = GoogleCloudRetailV2ProductTypeEnum.PRIMARY;
                                    uri = "https://teeming-combine.biz";
                                }}),
                            }};
                        }};;
                    }};;
                    notificationPubsubTopic = "fugit";
                    reconciliationMode = GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum.RECONCILIATION_MODE_UNSPECIFIED;
                    requestId = "odio";
                    updateMask = "sunt";
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "hic";
                fields = "voluptatem";
                key = "cumque";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "et";
                uploadProtocol = "saepe";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsImportResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsImport(req, new RetailProjectsLocationsCatalogsBranchesProductsImportSecurity("ipsum", "veritatis") {{
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

            RetailProjectsLocationsCatalogsBranchesProductsListRequest req = new RetailProjectsLocationsCatalogsBranchesProductsListRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "delectus";
                filter = "dolorem";
                key = "dolore";
                oauthToken = "labore";
                pageSize = 240829L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "architecto";
                readMask = "quae";
                uploadType = "aut";
                uploadProtocol = "quas";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsListResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsList(req, new RetailProjectsLocationsCatalogsBranchesProductsListSecurity("itaque", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2ListProductsResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RemoveFulfillmentPlacesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2RemoveFulfillmentPlacesRequest = new GoogleCloudRetailV2RemoveFulfillmentPlacesRequest() {{
                    allowMissing = false;
                    placeIds = new String[]{{
                        add("doloribus"),
                        add("ut"),
                        add("facilis"),
                        add("cupiditate"),
                    }};
                    removeTime = "qui";
                    type = "quae";
                }};;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "voluptatibus";
                key = "quisquam";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "quis";
                uploadProtocol = "ipsum";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces(req, new RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity("delectus", "voluptate") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RemoveLocalInventoriesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest("consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2RemoveLocalInventoriesRequest = new GoogleCloudRetailV2RemoveLocalInventoriesRequest() {{
                    allowMissing = false;
                    placeIds = new String[]{{
                        add("dignissimos"),
                        add("hic"),
                        add("distinctio"),
                        add("quod"),
                    }};
                    removeTime = "odio";
                }};;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "ducimus";
                key = "dolore";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "sequi";
                uploadProtocol = "natus";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories(req, new RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity("impedit", "aut") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Audience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Image;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Interval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Rating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SetInventoryRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest req = new RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2SetInventoryRequestInput = new GoogleCloudRetailV2SetInventoryRequestInput() {{
                    allowMissing = false;
                    inventory = new GoogleCloudRetailV2ProductInput() {{
                        attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                            put("fugit", new GoogleCloudRetailV2CustomAttribute() {{
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
                            put("tempora", new GoogleCloudRetailV2CustomAttribute() {{
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
                            put("ratione", new GoogleCloudRetailV2CustomAttribute() {{
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
                            put("quasi", new GoogleCloudRetailV2CustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(8621.92),
                                    add(5692.11),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("nostrum"),
                                    add("sapiente"),
                                    add("quisquam"),
                                    add("saepe"),
                                }};
                            }});
                        }};
                        audience = new GoogleCloudRetailV2Audience() {{
                            ageGroups = new String[]{{
                                add("impedit"),
                                add("corporis"),
                            }};
                            genders = new String[]{{
                                add("aliquid"),
                                add("inventore"),
                            }};
                        }};;
                        availability = GoogleCloudRetailV2ProductAvailabilityEnum.IN_STOCK;
                        availableQuantity = 407241;
                        availableTime = "quo";
                        brands = new String[]{{
                            add("recusandae"),
                        }};
                        categories = new String[]{{
                            add("minima"),
                        }};
                        collectionMemberIds = new String[]{{
                            add("a"),
                        }};
                        colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                            colorFamilies = new String[]{{
                                add("aut"),
                                add("aut"),
                                add("deleniti"),
                            }};
                            colors = new String[]{{
                                add("aliquam"),
                                add("fugit"),
                                add("accusamus"),
                                add("inventore"),
                            }};
                        }};;
                        conditions = new String[]{{
                            add("et"),
                            add("dolorum"),
                        }};
                        description = "laborum";
                        expireTime = "placeat";
                        fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                            add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                placeIds = new String[]{{
                                    add("autem"),
                                    add("nobis"),
                                }};
                                type = "quas";
                            }}),
                        }};
                        gtin = "assumenda";
                        id = "d6b14429-0747-4477-8a7b-d466d28c10ab";
                        images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                            add(new GoogleCloudRetailV2Image() {{
                                height = 778696;
                                uri = "https://some-possession.biz";
                                width = 178367;
                            }}),
                        }};
                        languageCode = "voluptas";
                        materials = new String[]{{
                            add("cupiditate"),
                        }};
                        name = "Rhonda Toy";
                        patterns = new String[]{{
                            add("quo"),
                        }};
                        priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                            cost = 4598.56;
                            currencyCode = "recusandae";
                            originalPrice = 446.12;
                            price = 7151.79;
                            priceEffectiveTime = "quod";
                            priceExpireTime = "dignissimos";
                            priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                originalPrice = new GoogleCloudRetailV2Interval() {{
                                    exclusiveMaximum = 769.56;
                                    exclusiveMinimum = 4694.98;
                                    maximum = 5188.35;
                                    minimum = 8827.1;
                                }};;
                                price = new GoogleCloudRetailV2Interval() {{
                                    exclusiveMaximum = 3068.1;
                                    exclusiveMinimum = 4884.1;
                                    maximum = 5775.43;
                                    minimum = 4145.67;
                                }};;
                            }};;
                        }};;
                        primaryProductId = "sapiente";
                        promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                            add(new GoogleCloudRetailV2Promotion() {{
                                promotionId = "deserunt";
                            }}),
                        }};
                        publishTime = "molestiae";
                        rating = new GoogleCloudRetailV2Rating() {{
                            averageRating = 353.62;
                            ratingCount = 783648;
                            ratingHistogram = new Integer[]{{
                                add(556429),
                                add(510017),
                            }};
                        }};;
                        retrievableFields = "consequuntur";
                        sizes = new String[]{{
                            add("fugit"),
                            add("fuga"),
                            add("mollitia"),
                        }};
                        tags = new String[]{{
                            add("atque"),
                            add("explicabo"),
                        }};
                        title = "Mrs.";
                        ttl = "nisi";
                        type = GoogleCloudRetailV2ProductTypeEnum.TYPE_UNSPECIFIED;
                        uri = "https://cumbersome-community.com";
                    }};;
                    setMask = "saepe";
                    setTime = "occaecati";
                }};;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "eveniet";
                key = "accusamus";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "quod";
                uploadProtocol = "nam";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsSetInventory(req, new RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity("vero", "aliquid") {{
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

            RetailProjectsLocationsCatalogsCompleteQueryRequest req = new RetailProjectsLocationsCatalogsCompleteQueryRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                dataset = "rerum";
                deviceType = "occaecati";
                entity = "minima";
                fields = "distinctio";
                key = "eligendi";
                languageCodes = new String[]{{
                    add("culpa"),
                }};
                maxSuggestions = 731398L;
                oauthToken = "adipisci";
                prettyPrint = false;
                query = "cumque";
                quotaUser = "consequuntur";
                uploadType = "consequatur";
                uploadProtocol = "minus";
                visitorId = "quaerat";
            }};            

            RetailProjectsLocationsCatalogsCompleteQueryResponse res = sdk.projects.retailProjectsLocationsCatalogsCompleteQuery(req, new RetailProjectsLocationsCatalogsCompleteQuerySecurity("sapiente", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2CompleteQueryResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2BigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CompletionDataInputConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ImportCompletionDataRequest;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsCompletionDataImportRequest req = new RetailProjectsLocationsCatalogsCompletionDataImportRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2ImportCompletionDataRequest = new GoogleCloudRetailV2ImportCompletionDataRequest() {{
                    inputConfig = new GoogleCloudRetailV2CompletionDataInputConfig() {{
                        bigQuerySource = new GoogleCloudRetailV2BigQuerySource() {{
                            dataSchema = "provident";
                            datasetId = "a";
                            gcsStagingDir = "nulla";
                            partitionDate = new GoogleTypeDate() {{
                                day = 557811;
                                month = 457223;
                                year = 97468;
                            }};;
                            projectId = "a";
                            tableId = "error";
                        }};;
                    }};;
                    notificationPubsubTopic = "sint";
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

            RetailProjectsLocationsCatalogsCompletionDataImportResponse res = sdk.projects.retailProjectsLocationsCatalogsCompletionDataImport(req, new RetailProjectsLocationsCatalogsCompletionDataImportSecurity("similique", "culpa") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Condition;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ConditionQueryTerm;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ConditionTimeRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ControlInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ControlSolutionTypesEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Rule;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RuleBoostAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RuleDoNotAssociateAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RuleFilterAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RuleIgnoreAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RuleOnewaySynonymsAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RuleRedirectAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RuleReplacementAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RuleTwowaySynonymsAction;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsControlsCreateRequest req = new RetailProjectsLocationsCatalogsControlsCreateRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2ControlInput = new GoogleCloudRetailV2ControlInput() {{
                    displayName = "quae";
                    name = "Chester King";
                    rule = new GoogleCloudRetailV2Rule() {{
                        boostAction = new GoogleCloudRetailV2RuleBoostAction() {{
                            boost = 8490.39;
                            productsFilter = "soluta";
                        }};;
                        condition = new GoogleCloudRetailV2Condition() {{
                            activeTimeRange = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ConditionTimeRange[]{{
                                add(new GoogleCloudRetailV2ConditionTimeRange() {{
                                    endTime = "aliquam";
                                    startTime = "sapiente";
                                }}),
                            }};
                            queryTerms = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ConditionQueryTerm[]{{
                                add(new GoogleCloudRetailV2ConditionQueryTerm() {{
                                    fullMatch = false;
                                    value = "ullam";
                                }}),
                            }};
                        }};;
                        doNotAssociateAction = new GoogleCloudRetailV2RuleDoNotAssociateAction() {{
                            doNotAssociateTerms = new String[]{{
                                add("ullam"),
                                add("nisi"),
                            }};
                            queryTerms = new String[]{{
                                add("voluptatum"),
                            }};
                            terms = new String[]{{
                                add("quibusdam"),
                            }};
                        }};;
                        filterAction = new GoogleCloudRetailV2RuleFilterAction() {{
                            filter = "ex";
                        }};;
                        ignoreAction = new GoogleCloudRetailV2RuleIgnoreAction() {{
                            ignoreTerms = new String[]{{
                                add("itaque"),
                                add("dolorum"),
                                add("architecto"),
                            }};
                        }};;
                        onewaySynonymsAction = new GoogleCloudRetailV2RuleOnewaySynonymsAction() {{
                            onewayTerms = new String[]{{
                                add("tenetur"),
                                add("quasi"),
                                add("at"),
                            }};
                            queryTerms = new String[]{{
                                add("voluptate"),
                            }};
                            synonyms = new String[]{{
                                add("minima"),
                            }};
                        }};;
                        redirectAction = new GoogleCloudRetailV2RuleRedirectAction() {{
                            redirectUri = "veritatis";
                        }};;
                        replacementAction = new GoogleCloudRetailV2RuleReplacementAction() {{
                            queryTerms = new String[]{{
                                add("adipisci"),
                            }};
                            replacementTerm = "iste";
                            term = "temporibus";
                        }};;
                        twowaySynonymsAction = new GoogleCloudRetailV2RuleTwowaySynonymsAction() {{
                            synonyms = new String[]{{
                                add("rem"),
                            }};
                        }};;
                    }};;
                    searchSolutionUseCase = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum[]{{
                        add(GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum.SEARCH_SOLUTION_USE_CASE_SEARCH),
                    }};
                    solutionTypes = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ControlSolutionTypesEnum[]{{
                        add(GoogleCloudRetailV2ControlSolutionTypesEnum.SOLUTION_TYPE_RECOMMENDATION),
                        add(GoogleCloudRetailV2ControlSolutionTypesEnum.SOLUTION_TYPE_UNSPECIFIED),
                    }};
                }};;
                accessToken = "corrupti";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                controlId = "dolor";
                fields = "occaecati";
                key = "numquam";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "voluptas";
                uploadProtocol = "aut";
            }};            

            RetailProjectsLocationsCatalogsControlsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsControlsCreate(req, new RetailProjectsLocationsCatalogsControlsCreateSecurity("dignissimos", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2Control != null) {
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

            RetailProjectsLocationsCatalogsControlsListRequest req = new RetailProjectsLocationsCatalogsControlsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "asperiores";
                filter = "aperiam";
                key = "ea";
                oauthToken = "quaerat";
                pageSize = 162954L;
                pageToken = "repellendus";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "maxime";
                uploadProtocol = "dignissimos";
            }};            

            RetailProjectsLocationsCatalogsControlsListResponse res = sdk.projects.retailProjectsLocationsCatalogsControlsList(req, new RetailProjectsLocationsCatalogsControlsListSecurity("officia", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2ListControlsResponse != null) {
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

            RetailProjectsLocationsCatalogsGetDefaultBranchRequest req = new RetailProjectsLocationsCatalogsGetDefaultBranchRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "labore";
                key = "ab";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "id";
                uploadProtocol = "suscipit";
            }};            

            RetailProjectsLocationsCatalogsGetDefaultBranchResponse res = sdk.projects.retailProjectsLocationsCatalogsGetDefaultBranch(req, new RetailProjectsLocationsCatalogsGetDefaultBranchSecurity("velit", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2GetDefaultBranchResponse != null) {
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

            RetailProjectsLocationsCatalogsListRequest req = new RetailProjectsLocationsCatalogsListRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "ducimus";
                key = "quos";
                oauthToken = "vel";
                pageSize = 287051L;
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "cum";
                uploadProtocol = "commodi";
            }};            

            RetailProjectsLocationsCatalogsListResponse res = sdk.projects.retailProjectsLocationsCatalogsList(req, new RetailProjectsLocationsCatalogsListSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2ListCatalogsResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ModelFilteringOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ModelInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ModelModelFeaturesConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ModelPeriodicTuningStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ModelTrainingStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsModelsCreateRequest req = new RetailProjectsLocationsCatalogsModelsCreateRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2ModelInput = new GoogleCloudRetailV2ModelInput() {{
                    displayName = "nemo";
                    filteringOption = GoogleCloudRetailV2ModelFilteringOptionEnum.RECOMMENDATIONS_FILTERING_ENABLED;
                    modelFeaturesConfig = new GoogleCloudRetailV2ModelModelFeaturesConfig() {{
                        frequentlyBoughtTogetherConfig = new GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig() {{
                            contextProductsType = GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum.SINGLE_CONTEXT_PRODUCT;
                        }};;
                    }};;
                    name = "Karla Feest";
                    optimizationObjective = "earum";
                    periodicTuningState = GoogleCloudRetailV2ModelPeriodicTuningStateEnum.PERIODIC_TUNING_ENABLED;
                    trainingState = GoogleCloudRetailV2ModelTrainingStateEnum.TRAINING_STATE_UNSPECIFIED;
                    type = "doloribus";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "quidem";
                dryRun = false;
                fields = "saepe";
                key = "necessitatibus";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "asperiores";
                uploadProtocol = "adipisci";
            }};            

            RetailProjectsLocationsCatalogsModelsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsCreate(req, new RetailProjectsLocationsCatalogsModelsCreateSecurity("non", "amet") {{
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

            RetailProjectsLocationsCatalogsModelsListRequest req = new RetailProjectsLocationsCatalogsModelsListRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "corporis";
                key = "harum";
                oauthToken = "laboriosam";
                pageSize = 58356L;
                pageToken = "voluptates";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "vitae";
                uploadProtocol = "accusamus";
            }};            

            RetailProjectsLocationsCatalogsModelsListResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsList(req, new RetailProjectsLocationsCatalogsModelsListSecurity("similique", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2ListModelsResponse != null) {
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

            RetailProjectsLocationsCatalogsModelsPauseRequest req = new RetailProjectsLocationsCatalogsModelsPauseRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("voluptas", "minima");
                    put("nobis", "dolorum");
                }};
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "blanditiis";
                key = "in";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "officiis";
                uploadProtocol = "temporibus";
            }};            

            RetailProjectsLocationsCatalogsModelsPauseResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsPause(req, new RetailProjectsLocationsCatalogsModelsPauseSecurity("ullam", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2Model != null) {
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

            RetailProjectsLocationsCatalogsModelsResumeRequest req = new RetailProjectsLocationsCatalogsModelsResumeRequest("cum") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("hic", "nesciunt");
                    put("culpa", "corrupti");
                    put("pariatur", "totam");
                }};
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "sit";
                key = "rerum";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "explicabo";
                uploadProtocol = "asperiores";
            }};            

            RetailProjectsLocationsCatalogsModelsResumeResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsResume(req, new RetailProjectsLocationsCatalogsModelsResumeSecurity("facilis", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2Model != null) {
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

            RetailProjectsLocationsCatalogsModelsTuneRequest req = new RetailProjectsLocationsCatalogsModelsTuneRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolore", "laborum");
                    put("sed", "in");
                    put("commodi", "quidem");
                }};
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "unde";
                fields = "architecto";
                key = "suscipit";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "illo";
                uploadProtocol = "reiciendis";
            }};            

            RetailProjectsLocationsCatalogsModelsTuneResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsTune(req, new RetailProjectsLocationsCatalogsModelsTuneSecurity("perferendis", "corrupti") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2AddControlRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsAddControlRequest req = new RetailProjectsLocationsCatalogsServingConfigsAddControlRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2AddControlRequest = new GoogleCloudRetailV2AddControlRequest() {{
                    controlId = "sed";
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "ipsum";
                key = "ea";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "voluptatibus";
                uploadProtocol = "tempora";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsAddControlResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsAddControl(req, new RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity("tempora", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2ServingConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestPersonalizationSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ServingConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ServingConfigDiversityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsCreateRequest req = new RetailProjectsLocationsCatalogsServingConfigsCreateRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2ServingConfig = new GoogleCloudRetailV2ServingConfig() {{
                    boostControlIds = new String[]{{
                        add("non"),
                    }};
                    displayName = "officiis";
                    diversityLevel = "praesentium";
                    diversityType = GoogleCloudRetailV2ServingConfigDiversityTypeEnum.DATA_DRIVEN_DIVERSITY;
                    doNotAssociateControlIds = new String[]{{
                        add("incidunt"),
                        add("ipsam"),
                    }};
                    dynamicFacetSpec = new GoogleCloudRetailV2SearchRequestDynamicFacetSpec() {{
                        mode = GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum.ENABLED;
                    }};;
                    enableCategoryFilterLevel = "rem";
                    facetControlIds = new String[]{{
                        add("nobis"),
                    }};
                    filterControlIds = new String[]{{
                        add("veniam"),
                        add("minima"),
                        add("recusandae"),
                    }};
                    ignoreControlIds = new String[]{{
                        add("nulla"),
                        add("magni"),
                        add("aperiam"),
                        add("saepe"),
                    }};
                    modelId = "numquam";
                    name = "Ms. Pearl Towne";
                    onewaySynonymsControlIds = new String[]{{
                        add("cum"),
                        add("laboriosam"),
                        add("dolorum"),
                    }};
                    personalizationSpec = new GoogleCloudRetailV2SearchRequestPersonalizationSpec() {{
                        mode = GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum.AUTO;
                    }};;
                    priceRerankingLevel = "error";
                    redirectControlIds = new String[]{{
                        add("expedita"),
                        add("debitis"),
                        add("neque"),
                        add("dolorum"),
                    }};
                    replacementControlIds = new String[]{{
                        add("officia"),
                        add("dolorum"),
                    }};
                    solutionTypes = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnum[]{{
                        add(GoogleCloudRetailV2ServingConfigSolutionTypesEnum.SOLUTION_TYPE_SEARCH),
                        add(GoogleCloudRetailV2ServingConfigSolutionTypesEnum.SOLUTION_TYPE_UNSPECIFIED),
                        add(GoogleCloudRetailV2ServingConfigSolutionTypesEnum.SOLUTION_TYPE_RECOMMENDATION),
                    }};
                    twowaySynonymsControlIds = new String[]{{
                        add("ut"),
                    }};
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "expedita";
                key = "magnam";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "esse";
                servingConfigId = "ipsam";
                uploadType = "sit";
                uploadProtocol = "voluptatum";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsCreate(req, new RetailProjectsLocationsCatalogsServingConfigsCreateSecurity("quas", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2ServingConfig != null) {
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

            RetailProjectsLocationsCatalogsServingConfigsDeleteRequest req = new RetailProjectsLocationsCatalogsServingConfigsDeleteRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "sit";
                key = "vel";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "error";
                uploadProtocol = "consequatur";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsDeleteResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsDelete(req, new RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity("incidunt", "reiciendis") {{
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

            RetailProjectsLocationsCatalogsServingConfigsListRequest req = new RetailProjectsLocationsCatalogsServingConfigsListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "labore";
                key = "quidem";
                oauthToken = "atque";
                pageSize = 671957L;
                pageToken = "nam";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "laboriosam";
                uploadProtocol = "alias";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsListResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsList(req, new RetailProjectsLocationsCatalogsServingConfigsListSecurity("amet", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2ListServingConfigsResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestPersonalizationSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ServingConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ServingConfigDiversityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsPatchRequest req = new RetailProjectsLocationsCatalogsServingConfigsPatchRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2ServingConfig = new GoogleCloudRetailV2ServingConfig() {{
                    boostControlIds = new String[]{{
                        add("provident"),
                        add("repellendus"),
                        add("delectus"),
                        add("voluptates"),
                    }};
                    displayName = "perferendis";
                    diversityLevel = "est";
                    diversityType = GoogleCloudRetailV2ServingConfigDiversityTypeEnum.DATA_DRIVEN_DIVERSITY;
                    doNotAssociateControlIds = new String[]{{
                        add("facere"),
                        add("fuga"),
                    }};
                    dynamicFacetSpec = new GoogleCloudRetailV2SearchRequestDynamicFacetSpec() {{
                        mode = GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum.DISABLED;
                    }};;
                    enableCategoryFilterLevel = "mollitia";
                    facetControlIds = new String[]{{
                        add("voluptatem"),
                        add("quisquam"),
                    }};
                    filterControlIds = new String[]{{
                        add("quasi"),
                        add("atque"),
                        add("reprehenderit"),
                        add("asperiores"),
                    }};
                    ignoreControlIds = new String[]{{
                        add("suscipit"),
                        add("quidem"),
                        add("maxime"),
                    }};
                    modelId = "et";
                    name = "Grace Shields";
                    onewaySynonymsControlIds = new String[]{{
                        add("officiis"),
                        add("officiis"),
                        add("accusamus"),
                    }};
                    personalizationSpec = new GoogleCloudRetailV2SearchRequestPersonalizationSpec() {{
                        mode = GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum.AUTO;
                    }};;
                    priceRerankingLevel = "minima";
                    redirectControlIds = new String[]{{
                        add("ex"),
                    }};
                    replacementControlIds = new String[]{{
                        add("corrupti"),
                        add("at"),
                        add("error"),
                        add("blanditiis"),
                    }};
                    solutionTypes = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnum[]{{
                        add(GoogleCloudRetailV2ServingConfigSolutionTypesEnum.SOLUTION_TYPE_SEARCH),
                        add(GoogleCloudRetailV2ServingConfigSolutionTypesEnum.SOLUTION_TYPE_RECOMMENDATION),
                    }};
                    twowaySynonymsControlIds = new String[]{{
                        add("sunt"),
                        add("recusandae"),
                        add("dolorum"),
                    }};
                }};;
                accessToken = "repellendus";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "doloremque";
                key = "repudiandae";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "accusantium";
                updateMask = "beatae";
                uploadType = "dolores";
                uploadProtocol = "enim";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsPatchResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsPatch(req, new RetailProjectsLocationsCatalogsServingConfigsPatchSecurity("laboriosam", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2ServingConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Audience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CompletionDetail;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Image;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Interval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PredictRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductDetailInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Rating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2UserEventInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2UserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsPredictRequest req = new RetailProjectsLocationsCatalogsServingConfigsPredictRequest("a") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2PredictRequestInput = new GoogleCloudRetailV2PredictRequestInput() {{
                    filter = "magnam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("consequuntur", "occaecati");
                        put("officiis", "perspiciatis");
                        put("in", "adipisci");
                        put("eveniet", "occaecati");
                    }};
                    pageSize = 160230;
                    pageToken = "fugit";
                    params = new java.util.HashMap<String, Object>() {{
                        put("quis", "reprehenderit");
                        put("error", "illo");
                        put("corporis", "quidem");
                    }};
                    userEvent = new GoogleCloudRetailV2UserEventInput() {{
                        attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                            put("non", new GoogleCloudRetailV2CustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(396.15),
                                    add(4341.56),
                                    add(599.44),
                                    add(5176.12),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("molestiae"),
                                }};
                            }});
                            put("eveniet", new GoogleCloudRetailV2CustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(7398.84),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("necessitatibus"),
                                    add("ratione"),
                                }};
                            }});
                            put("laborum", new GoogleCloudRetailV2CustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(5289.4),
                                    add(5230.06),
                                    add(3044.46),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("repellat"),
                                    add("alias"),
                                }};
                            }});
                            put("corporis", new GoogleCloudRetailV2CustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(4706.49),
                                    add(6490.78),
                                    add(3782.45),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("maiores"),
                                }};
                            }});
                        }};
                        attributionToken = "reiciendis";
                        cartId = "dolores";
                        completionDetail = new GoogleCloudRetailV2CompletionDetail() {{
                            completionAttributionToken = "id";
                            selectedPosition = 327988;
                            selectedSuggestion = "dolore";
                        }};;
                        entity = "dolorum";
                        eventTime = "nesciunt";
                        eventType = "quae";
                        experimentIds = new String[]{{
                            add("omnis"),
                            add("quaerat"),
                            add("molestiae"),
                            add("ex"),
                        }};
                        filter = "ut";
                        offset = 633062;
                        orderBy = "adipisci";
                        pageCategories = new String[]{{
                            add("laudantium"),
                            add("eum"),
                            add("nemo"),
                            add("recusandae"),
                        }};
                        pageViewId = "esse";
                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductDetailInput[]{{
                            add(new GoogleCloudRetailV2ProductDetailInput() {{
                                product = new GoogleCloudRetailV2ProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                        put("eum", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(5927.8),
                                                add(1334.39),
                                                add(3545.06),
                                                add(968.04),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("nostrum"),
                                                add("mollitia"),
                                                add("provident"),
                                            }};
                                        }});
                                        put("possimus", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(4027.67),
                                                add(3972.57),
                                                add(375.65),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("doloribus"),
                                                add("ullam"),
                                                add("in"),
                                                add("nam"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2Audience() {{
                                        ageGroups = new String[]{{
                                            add("officia"),
                                            add("laborum"),
                                            add("placeat"),
                                            add("modi"),
                                        }};
                                        genders = new String[]{{
                                            add("molestias"),
                                            add("officiis"),
                                            add("sapiente"),
                                            add("cumque"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2ProductAvailabilityEnum.AVAILABILITY_UNSPECIFIED;
                                    availableQuantity = 698249;
                                    availableTime = "tempora";
                                    brands = new String[]{{
                                        add("inventore"),
                                        add("fugit"),
                                    }};
                                    categories = new String[]{{
                                        add("quae"),
                                        add("perferendis"),
                                        add("velit"),
                                        add("aspernatur"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("eius"),
                                        add("rem"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("impedit"),
                                            add("eos"),
                                            add("sapiente"),
                                            add("eum"),
                                        }};
                                        colors = new String[]{{
                                            add("minima"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("cupiditate"),
                                    }};
                                    description = "provident";
                                    expireTime = "earum";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("illum"),
                                                add("eaque"),
                                                add("earum"),
                                                add("perspiciatis"),
                                            }};
                                            type = "maiores";
                                        }}),
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("aliquid"),
                                                add("porro"),
                                                add("suscipit"),
                                                add("dolorem"),
                                            }};
                                            type = "fugit";
                                        }}),
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("fuga"),
                                                add("ratione"),
                                                add("animi"),
                                                add("necessitatibus"),
                                            }};
                                            type = "nulla";
                                        }}),
                                    }};
                                    gtin = "consequatur";
                                    id = "11799631-2fde-4047-b177-8ff61d017476";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 399812;
                                            uri = "http://quick-camel.info";
                                            width = 856756;
                                        }}),
                                    }};
                                    languageCode = "expedita";
                                    materials = new String[]{{
                                        add("officia"),
                                        add("suscipit"),
                                    }};
                                    name = "Lisa Kemmer";
                                    patterns = new String[]{{
                                        add("ab"),
                                        add("error"),
                                        add("possimus"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                        cost = 9139.92;
                                        currencyCode = "mollitia";
                                        originalPrice = 6717.94;
                                        price = 7263.43;
                                        priceEffectiveTime = "ad";
                                        priceExpireTime = "deleniti";
                                        priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2Interval() {{
                                                exclusiveMaximum = 3162.2;
                                                exclusiveMinimum = 1104.77;
                                                maximum = 8333.16;
                                                minimum = 4050.36;
                                            }};
                                            price = new GoogleCloudRetailV2Interval() {{
                                                exclusiveMaximum = 7758.03;
                                                exclusiveMinimum = 4053.73;
                                                maximum = 2811.53;
                                                minimum = 3210.43;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "expedita";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                        add(new GoogleCloudRetailV2Promotion() {{
                                            promotionId = "molestias";
                                        }}),
                                    }};
                                    publishTime = "cum";
                                    rating = new GoogleCloudRetailV2Rating() {{
                                        averageRating = 3996.6;
                                        ratingCount = 109784;
                                        ratingHistogram = new Integer[]{{
                                            add(606308),
                                            add(85233),
                                            add(703218),
                                        }};
                                    }};
                                    retrievableFields = "est";
                                    sizes = new String[]{{
                                        add("voluptatem"),
                                        add("sapiente"),
                                        add("officiis"),
                                    }};
                                    tags = new String[]{{
                                        add("fuga"),
                                    }};
                                    title = "Dr.";
                                    ttl = "debitis";
                                    type = GoogleCloudRetailV2ProductTypeEnum.TYPE_UNSPECIFIED;
                                    uri = "http://minor-twig.info";
                                }};
                                quantity = 958308;
                            }}),
                            add(new GoogleCloudRetailV2ProductDetailInput() {{
                                product = new GoogleCloudRetailV2ProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                        put("minus", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(9920.74),
                                                add(1905.67),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("perferendis"),
                                                add("illum"),
                                            }};
                                        }});
                                        put("totam", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(8427.77),
                                                add(7205.28),
                                                add(3732.16),
                                                add(6334.15),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("aliquam"),
                                            }};
                                        }});
                                        put("inventore", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(853.11),
                                                add(2745.75),
                                                add(2213.96),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("architecto"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2Audience() {{
                                        ageGroups = new String[]{{
                                            add("modi"),
                                        }};
                                        genders = new String[]{{
                                            add("ab"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2ProductAvailabilityEnum.OUT_OF_STOCK;
                                    availableQuantity = 65604;
                                    availableTime = "dolor";
                                    brands = new String[]{{
                                        add("ipsam"),
                                        add("consequuntur"),
                                        add("ipsa"),
                                        add("quas"),
                                    }};
                                    categories = new String[]{{
                                        add("impedit"),
                                        add("officiis"),
                                        add("esse"),
                                        add("necessitatibus"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("veniam"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("expedita"),
                                        }};
                                        colors = new String[]{{
                                            add("vel"),
                                            add("voluptatum"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("exercitationem"),
                                        add("ab"),
                                    }};
                                    description = "porro";
                                    expireTime = "autem";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("recusandae"),
                                                add("consequuntur"),
                                            }};
                                            type = "voluptatem";
                                        }}),
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("necessitatibus"),
                                                add("quasi"),
                                            }};
                                            type = "nisi";
                                        }}),
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("vero"),
                                                add("est"),
                                                add("harum"),
                                                add("sequi"),
                                            }};
                                            type = "doloribus";
                                        }}),
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("optio"),
                                                add("occaecati"),
                                                add("nemo"),
                                                add("voluptate"),
                                            }};
                                            type = "blanditiis";
                                        }}),
                                    }};
                                    gtin = "officia";
                                    id = "64584273-a841-48d1-a230-9fb0929921ae";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 719620;
                                            uri = "https://whole-extremist.name";
                                            width = 802692;
                                        }}),
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 300403;
                                            uri = "https://muffled-harpooner.org";
                                            width = 415608;
                                        }}),
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 520761;
                                            uri = "https://fantastic-rat.org";
                                            width = 32901;
                                        }}),
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 371919;
                                            uri = "http://able-bonnet.biz";
                                            width = 978548;
                                        }}),
                                    }};
                                    languageCode = "enim";
                                    materials = new String[]{{
                                        add("nulla"),
                                        add("deserunt"),
                                        add("esse"),
                                    }};
                                    name = "Melinda Orn";
                                    patterns = new String[]{{
                                        add("impedit"),
                                        add("hic"),
                                        add("necessitatibus"),
                                        add("asperiores"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                        cost = 4043.06;
                                        currencyCode = "voluptas";
                                        originalPrice = 8953.46;
                                        price = 9661.48;
                                        priceEffectiveTime = "quae";
                                        priceExpireTime = "minus";
                                        priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2Interval() {{
                                                exclusiveMaximum = 6854.78;
                                                exclusiveMinimum = 6756.89;
                                                maximum = 2310.7;
                                                minimum = 2448.89;
                                            }};
                                            price = new GoogleCloudRetailV2Interval() {{
                                                exclusiveMaximum = 5388.69;
                                                exclusiveMinimum = 2164.57;
                                                maximum = 7730.35;
                                                minimum = 1660.47;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "soluta";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                        add(new GoogleCloudRetailV2Promotion() {{
                                            promotionId = "nam";
                                        }}),
                                        add(new GoogleCloudRetailV2Promotion() {{
                                            promotionId = "dolore";
                                        }}),
                                        add(new GoogleCloudRetailV2Promotion() {{
                                            promotionId = "iusto";
                                        }}),
                                        add(new GoogleCloudRetailV2Promotion() {{
                                            promotionId = "voluptate";
                                        }}),
                                    }};
                                    publishTime = "sequi";
                                    rating = new GoogleCloudRetailV2Rating() {{
                                        averageRating = 4939.58;
                                        ratingCount = 205566;
                                        ratingHistogram = new Integer[]{{
                                            add(535468),
                                            add(844235),
                                            add(437814),
                                            add(139072),
                                        }};
                                    }};
                                    retrievableFields = "voluptatibus";
                                    sizes = new String[]{{
                                        add("magnam"),
                                        add("quibusdam"),
                                    }};
                                    tags = new String[]{{
                                        add("facere"),
                                    }};
                                    title = "Miss";
                                    ttl = "architecto";
                                    type = GoogleCloudRetailV2ProductTypeEnum.COLLECTION;
                                    uri = "http://sour-emergency.biz";
                                }};
                                quantity = 75359;
                            }}),
                            add(new GoogleCloudRetailV2ProductDetailInput() {{
                                product = new GoogleCloudRetailV2ProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                        put("vel", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(1076.17),
                                                add(8777.51),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("eum"),
                                                add("velit"),
                                                add("ut"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2Audience() {{
                                        ageGroups = new String[]{{
                                            add("earum"),
                                            add("dicta"),
                                            add("impedit"),
                                        }};
                                        genders = new String[]{{
                                            add("iste"),
                                            add("itaque"),
                                            add("alias"),
                                            add("nisi"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2ProductAvailabilityEnum.BACKORDER;
                                    availableQuantity = 242178;
                                    availableTime = "laborum";
                                    brands = new String[]{{
                                        add("dolor"),
                                        add("iusto"),
                                    }};
                                    categories = new String[]{{
                                        add("doloremque"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("officia"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("ea"),
                                            add("quidem"),
                                            add("voluptas"),
                                            add("facilis"),
                                        }};
                                        colors = new String[]{{
                                            add("perspiciatis"),
                                            add("expedita"),
                                            add("deleniti"),
                                            add("a"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("ullam"),
                                        add("unde"),
                                    }};
                                    description = "necessitatibus";
                                    expireTime = "animi";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("corporis"),
                                                add("est"),
                                            }};
                                            type = "error";
                                        }}),
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("labore"),
                                                add("veritatis"),
                                            }};
                                            type = "vero";
                                        }}),
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("vitae"),
                                            }};
                                            type = "inventore";
                                        }}),
                                        add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("ad"),
                                            }};
                                            type = "qui";
                                        }}),
                                    }};
                                    gtin = "iste";
                                    id = "65bb8a72-0261-4143-9e13-9dbc2259b1ab";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 637462;
                                            uri = "https://studious-ammunition.info";
                                            width = 57320;
                                        }}),
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 914864;
                                            uri = "http://attentive-liquid.biz";
                                            width = 755106;
                                        }}),
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 715053;
                                            uri = "http://imperfect-index.biz";
                                            width = 824798;
                                        }}),
                                        add(new GoogleCloudRetailV2Image() {{
                                            height = 107210;
                                            uri = "https://submissive-masterpiece.info";
                                            width = 588812;
                                        }}),
                                    }};
                                    languageCode = "accusamus";
                                    materials = new String[]{{
                                        add("tempore"),
                                        add("sint"),
                                        add("ea"),
                                        add("autem"),
                                    }};
                                    name = "Olivia Larkin";
                                    patterns = new String[]{{
                                        add("cum"),
                                        add("at"),
                                        add("alias"),
                                        add("quia"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                        cost = 6941.58;
                                        currencyCode = "fuga";
                                        originalPrice = 9195.08;
                                        price = 340.7;
                                        priceEffectiveTime = "expedita";
                                        priceExpireTime = "officiis";
                                        priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2Interval() {{
                                                exclusiveMaximum = 1770.05;
                                                exclusiveMinimum = 8448.54;
                                                maximum = 4835.18;
                                                minimum = 5101.28;
                                            }};
                                            price = new GoogleCloudRetailV2Interval() {{
                                                exclusiveMaximum = 1403.16;
                                                exclusiveMinimum = 1276.88;
                                                maximum = 3589.95;
                                                minimum = 6214.73;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "earum";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                        add(new GoogleCloudRetailV2Promotion() {{
                                            promotionId = "recusandae";
                                        }}),
                                    }};
                                    publishTime = "similique";
                                    rating = new GoogleCloudRetailV2Rating() {{
                                        averageRating = 2828.37;
                                        ratingCount = 693746;
                                        ratingHistogram = new Integer[]{{
                                            add(106255),
                                            add(600213),
                                        }};
                                    }};
                                    retrievableFields = "molestiae";
                                    sizes = new String[]{{
                                        add("cupiditate"),
                                        add("fugit"),
                                        add("numquam"),
                                        add("numquam"),
                                    }};
                                    tags = new String[]{{
                                        add("at"),
                                    }};
                                    title = "Miss";
                                    ttl = "dignissimos";
                                    type = GoogleCloudRetailV2ProductTypeEnum.COLLECTION;
                                    uri = "https://growling-commission.net";
                                }};
                                quantity = 532669;
                            }}),
                        }};
                        purchaseTransaction = new GoogleCloudRetailV2PurchaseTransaction() {{
                            cost = 5873.75;
                            currencyCode = "minima";
                            id = "c537c645-4efb-40b3-8896-c3ca5acfbe2f";
                            revenue = 8659.46;
                            tax = 3628.88;
                        }};;
                        referrerUri = "reprehenderit";
                        searchQuery = "aperiam";
                        sessionId = "odio";
                        uri = "http://irresponsible-lambkin.name";
                        userInfo = new GoogleCloudRetailV2UserInfo() {{
                            directUserRequest = false;
                            ipAddress = "dolores";
                            userAgent = "error";
                            userId = "veritatis";
                        }};;
                        visitorId = "ducimus";
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "itaque";
                fields = "similique";
                key = "optio";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "commodi";
                uploadProtocol = "officiis";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsPredictResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsPredict(req, new RetailProjectsLocationsCatalogsServingConfigsPredictSecurity("placeat", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2PredictResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RemoveControlRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest req = new RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2RemoveControlRequest = new GoogleCloudRetailV2RemoveControlRequest() {{
                    controlId = "dolorem";
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "vero";
                key = "sequi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "dicta";
                uploadProtocol = "earum";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsRemoveControl(req, new RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity("veniam", "animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2ServingConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Interval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequest;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestBoostSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestFacetSpecFacetKey;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestPersonalizationSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestQueryExpansionSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestSearchModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestSpellCorrectionSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2UserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsSearchRequest req = new RetailProjectsLocationsCatalogsServingConfigsSearchRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2SearchRequest = new GoogleCloudRetailV2SearchRequest() {{
                    boostSpec = new GoogleCloudRetailV2SearchRequestBoostSpec() {{
                        conditionBoostSpecs = new org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec[]{{
                            add(new GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec() {{
                                boost = 1644.88;
                                condition = "necessitatibus";
                            }}),
                        }};
                        skipBoostSpecValidation = false;
                    }};;
                    branch = "nobis";
                    canonicalFilter = "ipsa";
                    dynamicFacetSpec = new GoogleCloudRetailV2SearchRequestDynamicFacetSpec() {{
                        mode = GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum.DISABLED;
                    }};;
                    entity = "maiores";
                    facetSpecs = new org.openapis.openapi.models.shared.GoogleCloudRetailV2SearchRequestFacetSpec[]{{
                        add(new GoogleCloudRetailV2SearchRequestFacetSpec() {{
                            enableDynamicPosition = false;
                            excludedFilterKeys = new String[]{{
                                add("laboriosam"),
                            }};
                            facetKey = new GoogleCloudRetailV2SearchRequestFacetSpecFacetKey() {{
                                caseInsensitive = false;
                                contains = new String[]{{
                                    add("libero"),
                                    add("excepturi"),
                                    add("occaecati"),
                                    add("nemo"),
                                }};
                                intervals = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Interval[]{{
                                    add(new GoogleCloudRetailV2Interval() {{
                                        exclusiveMaximum = 3423.42;
                                        exclusiveMinimum = 9887.49;
                                        maximum = 7573.64;
                                        minimum = 5740.32;
                                    }}),
                                    add(new GoogleCloudRetailV2Interval() {{
                                        exclusiveMaximum = 3145.73;
                                        exclusiveMinimum = 9449.5;
                                        maximum = 6573.19;
                                        minimum = 5597.74;
                                    }}),
                                }};
                                key = "totam";
                                orderBy = "molestias";
                                prefixes = new String[]{{
                                    add("eaque"),
                                    add("saepe"),
                                }};
                                query = "architecto";
                                restrictedValues = new String[]{{
                                    add("iste"),
                                    add("assumenda"),
                                    add("tempore"),
                                }};
                                returnMinMax = false;
                            }};
                            limit = 725574;
                        }}),
                    }};
                    filter = "velit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("delectus", "impedit");
                    }};
                    offset = 741238;
                    orderBy = "ipsum";
                    pageCategories = new String[]{{
                        add("saepe"),
                    }};
                    pageSize = 644420;
                    pageToken = "doloremque";
                    personalizationSpec = new GoogleCloudRetailV2SearchRequestPersonalizationSpec() {{
                        mode = GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum.AUTO;
                    }};;
                    query = "veniam";
                    queryExpansionSpec = new GoogleCloudRetailV2SearchRequestQueryExpansionSpec() {{
                        condition = GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum.AUTO;
                        pinUnexpandedResults = false;
                    }};;
                    searchMode = GoogleCloudRetailV2SearchRequestSearchModeEnum.SEARCH_MODE_UNSPECIFIED;
                    spellCorrectionSpec = new GoogleCloudRetailV2SearchRequestSpellCorrectionSpec() {{
                        mode = GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum.SUGGESTION_ONLY;
                    }};;
                    userInfo = new GoogleCloudRetailV2UserInfo() {{
                        directUserRequest = false;
                        ipAddress = "molestiae";
                        userAgent = "eligendi";
                        userId = "possimus";
                    }};;
                    variantRollupKeys = new String[]{{
                        add("magnam"),
                        add("itaque"),
                    }};
                    visitorId = "sed";
                }};;
                accessToken = "asperiores";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "facere";
                key = "laudantium";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "amet";
                uploadProtocol = "exercitationem";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsSearchResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsSearch(req, new RetailProjectsLocationsCatalogsServingConfigsSearchSecurity("ab", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2SearchResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2SetDefaultBranchRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsSetDefaultBranchRequest req = new RetailProjectsLocationsCatalogsSetDefaultBranchRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2SetDefaultBranchRequest = new GoogleCloudRetailV2SetDefaultBranchRequest() {{
                    branchId = "nisi";
                    force = false;
                    note = "voluptatibus";
                }};;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "nisi";
                key = "quis";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "minus";
                uploadProtocol = "facere";
            }};            

            RetailProjectsLocationsCatalogsSetDefaultBranchResponse res = sdk.projects.retailProjectsLocationsCatalogsSetDefaultBranch(req, new RetailProjectsLocationsCatalogsSetDefaultBranchSecurity("facilis", "ipsum") {{
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

            RetailProjectsLocationsCatalogsUserEventsCollectRequest req = new RetailProjectsLocationsCatalogsUserEventsCollectRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "debitis";
                ets = "labore";
                fields = "rerum";
                key = "eos";
                oauthToken = "reprehenderit";
                prebuiltRule = "nostrum";
                prettyPrint = false;
                quotaUser = "neque";
                rawJson = "iusto";
                uploadType = "est";
                uploadProtocol = "rem";
                uri = "https://thorny-oats.org";
                userEvent = "ducimus";
            }};            

            RetailProjectsLocationsCatalogsUserEventsCollectResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsCollect(req, new RetailProjectsLocationsCatalogsUserEventsCollectSecurity("dolor", "dicta") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Audience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2BigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CompletionDetail;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Image;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ImportErrorsConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ImportUserEventsRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Interval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductDetailInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Rating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2UserEventInlineSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2UserEventInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2UserEventInputConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2UserInfo;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsImportRequest req = new RetailProjectsLocationsCatalogsUserEventsImportRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2ImportUserEventsRequestInput = new GoogleCloudRetailV2ImportUserEventsRequestInput() {{
                    errorsConfig = new GoogleCloudRetailV2ImportErrorsConfig() {{
                        gcsPrefix = "vitae";
                    }};;
                    inputConfig = new GoogleCloudRetailV2UserEventInputConfigInput() {{
                        bigQuerySource = new GoogleCloudRetailV2BigQuerySource() {{
                            dataSchema = "dignissimos";
                            datasetId = "esse";
                            gcsStagingDir = "fugiat";
                            partitionDate = new GoogleTypeDate() {{
                                day = 322333;
                                month = 134818;
                                year = 316501;
                            }};;
                            projectId = "delectus";
                            tableId = "iusto";
                        }};;
                        gcsSource = new GoogleCloudRetailV2GcsSource() {{
                            dataSchema = "dignissimos";
                            inputUris = new String[]{{
                                add("illo"),
                                add("ab"),
                                add("incidunt"),
                            }};
                        }};;
                        userEventInlineSource = new GoogleCloudRetailV2UserEventInlineSourceInput() {{
                            userEvents = new org.openapis.openapi.models.shared.GoogleCloudRetailV2UserEventInput[]{{
                                add(new GoogleCloudRetailV2UserEventInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                        put("tempore", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(1764.99),
                                                add(9700.79),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("reprehenderit"),
                                                add("praesentium"),
                                                add("nemo"),
                                                add("repellat"),
                                            }};
                                        }});
                                        put("quisquam", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(4671.19),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("illo"),
                                                add("labore"),
                                                add("assumenda"),
                                            }};
                                        }});
                                        put("aliquam", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(5910.65),
                                                add(5149.93),
                                                add(9217.19),
                                                add(96.83),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("aspernatur"),
                                                add("nam"),
                                                add("expedita"),
                                                add("quas"),
                                            }};
                                        }});
                                        put("provident", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(7000.45),
                                                add(4923.61),
                                                add(3609.34),
                                                add(8738.33),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("repellendus"),
                                                add("iure"),
                                                add("dolorem"),
                                            }};
                                        }});
                                    }};
                                    attributionToken = "commodi";
                                    cartId = "impedit";
                                    completionDetail = new GoogleCloudRetailV2CompletionDetail() {{
                                        completionAttributionToken = "commodi";
                                        selectedPosition = 12171;
                                        selectedSuggestion = "voluptatem";
                                    }};
                                    entity = "ad";
                                    eventTime = "quae";
                                    eventType = "amet";
                                    experimentIds = new String[]{{
                                        add("praesentium"),
                                        add("quidem"),
                                        add("cum"),
                                        add("amet"),
                                    }};
                                    filter = "quasi";
                                    offset = 118126;
                                    orderBy = "laudantium";
                                    pageCategories = new String[]{{
                                        add("earum"),
                                    }};
                                    pageViewId = "iusto";
                                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductDetailInput[]{{
                                        add(new GoogleCloudRetailV2ProductDetailInput() {{
                                            product = new GoogleCloudRetailV2ProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                                    put("dolorum", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(5928.8),
                                                            add(9202.72),
                                                            add(100.63),
                                                            add(3662.44),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("itaque"),
                                                            add("facilis"),
                                                        }};
                                                    }});
                                                    put("corrupti", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(5740.92),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("eos"),
                                                            add("totam"),
                                                            add("dicta"),
                                                            add("voluptatem"),
                                                        }};
                                                    }});
                                                    put("velit", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(1242.89),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("dolor"),
                                                            add("occaecati"),
                                                            add("atque"),
                                                            add("beatae"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2Audience() {{
                                                    ageGroups = new String[]{{
                                                        add("labore"),
                                                        add("minus"),
                                                        add("esse"),
                                                        add("voluptatem"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("rerum"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2ProductAvailabilityEnum.OUT_OF_STOCK;
                                                availableQuantity = 46791;
                                                availableTime = "dignissimos";
                                                brands = new String[]{{
                                                    add("velit"),
                                                    add("porro"),
                                                    add("provident"),
                                                    add("consectetur"),
                                                }};
                                                categories = new String[]{{
                                                    add("dignissimos"),
                                                    add("consectetur"),
                                                    add("soluta"),
                                                    add("natus"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("officia"),
                                                    add("amet"),
                                                    add("tenetur"),
                                                    add("aspernatur"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("itaque"),
                                                        add("illum"),
                                                        add("laborum"),
                                                        add("dignissimos"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("qui"),
                                                        add("consectetur"),
                                                        add("repellat"),
                                                        add("explicabo"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("exercitationem"),
                                                }};
                                                description = "nihil";
                                                expireTime = "non";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("hic"),
                                                        }};
                                                        type = "deserunt";
                                                    }}),
                                                }};
                                                gtin = "delectus";
                                                id = "4b7544e4-72e8-4028-97a5-b40463a7d575";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 66207;
                                                        uri = "http://adolescent-affinity.org";
                                                        width = 483753;
                                                    }}),
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 413758;
                                                        uri = "http://ragged-solicitation.info";
                                                        width = 232772;
                                                    }}),
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 200637;
                                                        uri = "http://vicious-settler.com";
                                                        width = 715143;
                                                    }}),
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 481375;
                                                        uri = "https://brilliant-ptarmigan.biz";
                                                        width = 418637;
                                                    }}),
                                                }};
                                                languageCode = "fuga";
                                                materials = new String[]{{
                                                    add("rem"),
                                                }};
                                                name = "Brandy Langosh Jr.";
                                                patterns = new String[]{{
                                                    add("saepe"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                                    cost = 9655.17;
                                                    currencyCode = "mollitia";
                                                    originalPrice = 8590.03;
                                                    price = 6409.07;
                                                    priceEffectiveTime = "sed";
                                                    priceExpireTime = "voluptatem";
                                                    priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 6.64;
                                                            exclusiveMinimum = 9100.73;
                                                            maximum = 9416.68;
                                                            minimum = 279.82;
                                                        }};
                                                        price = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 2783.25;
                                                            exclusiveMinimum = 1854.48;
                                                            maximum = 1858.97;
                                                            minimum = 8959.12;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "harum";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "beatae";
                                                    }}),
                                                }};
                                                publishTime = "aliquid";
                                                rating = new GoogleCloudRetailV2Rating() {{
                                                    averageRating = 2646.49;
                                                    ratingCount = 760049;
                                                    ratingHistogram = new Integer[]{{
                                                        add(562948),
                                                        add(639463),
                                                        add(730478),
                                                        add(520678),
                                                    }};
                                                }};
                                                retrievableFields = "sequi";
                                                sizes = new String[]{{
                                                    add("ea"),
                                                    add("impedit"),
                                                }};
                                                tags = new String[]{{
                                                    add("odit"),
                                                    add("velit"),
                                                }};
                                                title = "Dr.";
                                                ttl = "repellat";
                                                type = GoogleCloudRetailV2ProductTypeEnum.COLLECTION;
                                                uri = "https://perky-tadpole.com";
                                            }};
                                            quantity = 392967;
                                        }}),
                                    }};
                                    purchaseTransaction = new GoogleCloudRetailV2PurchaseTransaction() {{
                                        cost = 7008.56;
                                        currencyCode = "recusandae";
                                        id = "e4825c1f-c0e1-415c-80bf-f918544ec42d";
                                        revenue = 8768.4;
                                        tax = 9851.09;
                                    }};
                                    referrerUri = "impedit";
                                    searchQuery = "porro";
                                    sessionId = "accusamus";
                                    uri = "https://wide-eyed-bargain.name";
                                    userInfo = new GoogleCloudRetailV2UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "nihil";
                                        userAgent = "esse";
                                        userId = "iure";
                                    }};
                                    visitorId = "odio";
                                }}),
                                add(new GoogleCloudRetailV2UserEventInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                        put("debitis", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(2086.83),
                                                add(3577.58),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("consequuntur"),
                                                add("officia"),
                                            }};
                                        }});
                                    }};
                                    attributionToken = "reprehenderit";
                                    cartId = "distinctio";
                                    completionDetail = new GoogleCloudRetailV2CompletionDetail() {{
                                        completionAttributionToken = "eius";
                                        selectedPosition = 56372;
                                        selectedSuggestion = "rem";
                                    }};
                                    entity = "maiores";
                                    eventTime = "accusantium";
                                    eventType = "veniam";
                                    experimentIds = new String[]{{
                                        add("neque"),
                                        add("facere"),
                                        add("aliquam"),
                                        add("quos"),
                                    }};
                                    filter = "doloribus";
                                    offset = 851809;
                                    orderBy = "est";
                                    pageCategories = new String[]{{
                                        add("velit"),
                                        add("vitae"),
                                        add("nesciunt"),
                                        add("similique"),
                                    }};
                                    pageViewId = "illo";
                                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductDetailInput[]{{
                                        add(new GoogleCloudRetailV2ProductDetailInput() {{
                                            product = new GoogleCloudRetailV2ProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                                    put("doloribus", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(6033.23),
                                                            add(2754.25),
                                                            add(1280.21),
                                                            add(3684.91),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("optio"),
                                                            add("alias"),
                                                            add("quidem"),
                                                        }};
                                                    }});
                                                    put("nesciunt", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9561.24),
                                                            add(1643.19),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("debitis"),
                                                            add("officia"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2Audience() {{
                                                    ageGroups = new String[]{{
                                                        add("ut"),
                                                        add("numquam"),
                                                        add("tenetur"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("libero"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2ProductAvailabilityEnum.OUT_OF_STOCK;
                                                availableQuantity = 329651;
                                                availableTime = "ex";
                                                brands = new String[]{{
                                                    add("ab"),
                                                    add("beatae"),
                                                    add("hic"),
                                                    add("nisi"),
                                                }};
                                                categories = new String[]{{
                                                    add("dolor"),
                                                    add("ducimus"),
                                                    add("fuga"),
                                                    add("minima"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("qui"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("magni"),
                                                        add("incidunt"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("praesentium"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("exercitationem"),
                                                }};
                                                description = "expedita";
                                                expireTime = "facilis";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("nemo"),
                                                        }};
                                                        type = "culpa";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("amet"),
                                                        }};
                                                        type = "deserunt";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("veniam"),
                                                            add("quod"),
                                                        }};
                                                        type = "itaque";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("quisquam"),
                                                            add("enim"),
                                                            add("doloribus"),
                                                            add("assumenda"),
                                                        }};
                                                        type = "officiis";
                                                    }}),
                                                }};
                                                gtin = "architecto";
                                                id = "0a0ce216-9e51-4001-9c6d-c5e34762799b";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 703966;
                                                        uri = "https://villainous-gobbler.name";
                                                        width = 263767;
                                                    }}),
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 595198;
                                                        uri = "https://several-cashew.net";
                                                        width = 720266;
                                                    }}),
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 279172;
                                                        uri = "https://stained-pita.org";
                                                        width = 423054;
                                                    }}),
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 779409;
                                                        uri = "http://thin-frequency.org";
                                                        width = 706872;
                                                    }}),
                                                }};
                                                languageCode = "non";
                                                materials = new String[]{{
                                                    add("assumenda"),
                                                    add("recusandae"),
                                                    add("distinctio"),
                                                }};
                                                name = "Leon Schumm";
                                                patterns = new String[]{{
                                                    add("incidunt"),
                                                    add("maxime"),
                                                    add("ipsam"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                                    cost = 0.6;
                                                    currencyCode = "suscipit";
                                                    originalPrice = 6472.1;
                                                    price = 5604.51;
                                                    priceEffectiveTime = "laborum";
                                                    priceExpireTime = "est";
                                                    priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 5774.13;
                                                            exclusiveMinimum = 2867.16;
                                                            maximum = 7773.78;
                                                            minimum = 194.62;
                                                        }};
                                                        price = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 1435.28;
                                                            exclusiveMinimum = 3992.22;
                                                            maximum = 3013.09;
                                                            minimum = 3085.28;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "eligendi";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "nostrum";
                                                    }}),
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "officiis";
                                                    }}),
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "unde";
                                                    }}),
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "nulla";
                                                    }}),
                                                }};
                                                publishTime = "error";
                                                rating = new GoogleCloudRetailV2Rating() {{
                                                    averageRating = 6530;
                                                    ratingCount = 298613;
                                                    ratingHistogram = new Integer[]{{
                                                        add(460909),
                                                        add(548849),
                                                    }};
                                                }};
                                                retrievableFields = "fuga";
                                                sizes = new String[]{{
                                                    add("impedit"),
                                                    add("quasi"),
                                                    add("deserunt"),
                                                    add("quod"),
                                                }};
                                                tags = new String[]{{
                                                    add("doloremque"),
                                                    add("voluptatem"),
                                                }};
                                                title = "Dr.";
                                                ttl = "necessitatibus";
                                                type = GoogleCloudRetailV2ProductTypeEnum.COLLECTION;
                                                uri = "http://austere-bracket.name";
                                            }};
                                            quantity = 783274;
                                        }}),
                                        add(new GoogleCloudRetailV2ProductDetailInput() {{
                                            product = new GoogleCloudRetailV2ProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                                    put("quae", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(8857.97),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("necessitatibus"),
                                                        }};
                                                    }});
                                                    put("impedit", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(5676.93),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("maiores"),
                                                            add("laudantium"),
                                                            add("maiores"),
                                                            add("alias"),
                                                        }};
                                                    }});
                                                    put("asperiores", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(1186.15),
                                                            add(3805.95),
                                                            add(9382.57),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("velit"),
                                                            add("eius"),
                                                            add("esse"),
                                                            add("in"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2Audience() {{
                                                    ageGroups = new String[]{{
                                                        add("quasi"),
                                                        add("neque"),
                                                        add("vero"),
                                                        add("excepturi"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("qui"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2ProductAvailabilityEnum.PREORDER;
                                                availableQuantity = 104736;
                                                availableTime = "incidunt";
                                                brands = new String[]{{
                                                    add("odit"),
                                                }};
                                                categories = new String[]{{
                                                    add("rerum"),
                                                    add("alias"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("vel"),
                                                    add("accusantium"),
                                                    add("id"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("ex"),
                                                        add("quas"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("ullam"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("similique"),
                                                }};
                                                description = "incidunt";
                                                expireTime = "quam";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("delectus"),
                                                            add("omnis"),
                                                            add("sed"),
                                                        }};
                                                        type = "nesciunt";
                                                    }}),
                                                }};
                                                gtin = "maxime";
                                                id = "5949f83f-350c-4f87-affb-901c6ecbb4e2";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 194058;
                                                        uri = "https://yearly-information.name";
                                                        width = 573610;
                                                    }}),
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 996541;
                                                        uri = "https://prudent-whirlpool.org";
                                                        width = 861591;
                                                    }}),
                                                }};
                                                languageCode = "deserunt";
                                                materials = new String[]{{
                                                    add("velit"),
                                                    add("officiis"),
                                                }};
                                                name = "Brandi Turner";
                                                patterns = new String[]{{
                                                    add("officia"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                                    cost = 7701.28;
                                                    currencyCode = "quasi";
                                                    originalPrice = 5021.06;
                                                    price = 2609.11;
                                                    priceEffectiveTime = "quisquam";
                                                    priceExpireTime = "eos";
                                                    priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 7480.23;
                                                            exclusiveMinimum = 6200.54;
                                                            maximum = 7935.68;
                                                            minimum = 1543.89;
                                                        }};
                                                        price = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 3006.51;
                                                            exclusiveMinimum = 4408.47;
                                                            maximum = 8007.99;
                                                            minimum = 5524.4;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "corrupti";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "molestiae";
                                                    }}),
                                                }};
                                                publishTime = "amet";
                                                rating = new GoogleCloudRetailV2Rating() {{
                                                    averageRating = 6751.26;
                                                    ratingCount = 266946;
                                                    ratingHistogram = new Integer[]{{
                                                        add(897058),
                                                    }};
                                                }};
                                                retrievableFields = "architecto";
                                                sizes = new String[]{{
                                                    add("dolore"),
                                                    add("sunt"),
                                                    add("maiores"),
                                                }};
                                                tags = new String[]{{
                                                    add("odit"),
                                                }};
                                                title = "Dr.";
                                                ttl = "veniam";
                                                type = GoogleCloudRetailV2ProductTypeEnum.PRIMARY;
                                                uri = "http://green-factor.info";
                                            }};
                                            quantity = 320326;
                                        }}),
                                        add(new GoogleCloudRetailV2ProductDetailInput() {{
                                            product = new GoogleCloudRetailV2ProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                                    put("tenetur", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(8451.54),
                                                            add(3664.8),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("pariatur"),
                                                            add("sit"),
                                                        }};
                                                    }});
                                                    put("quidem", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(177.68),
                                                            add(6605.36),
                                                            add(9581.46),
                                                            add(1523.64),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("repellat"),
                                                            add("repudiandae"),
                                                            add("architecto"),
                                                            add("adipisci"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2Audience() {{
                                                    ageGroups = new String[]{{
                                                        add("harum"),
                                                        add("dolore"),
                                                        add("voluptatibus"),
                                                        add("iure"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("minus"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2ProductAvailabilityEnum.PREORDER;
                                                availableQuantity = 677509;
                                                availableTime = "velit";
                                                brands = new String[]{{
                                                    add("praesentium"),
                                                    add("error"),
                                                    add("non"),
                                                    add("quasi"),
                                                }};
                                                categories = new String[]{{
                                                    add("accusamus"),
                                                    add("harum"),
                                                    add("cumque"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("expedita"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("eaque"),
                                                        add("deserunt"),
                                                        add("aliquid"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("magni"),
                                                        add("tempora"),
                                                        add("possimus"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("rerum"),
                                                }};
                                                description = "sed";
                                                expireTime = "accusamus";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("minus"),
                                                            add("quo"),
                                                            add("quos"),
                                                            add("asperiores"),
                                                        }};
                                                        type = "voluptatum";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("corporis"),
                                                            add("accusantium"),
                                                            add("illo"),
                                                        }};
                                                        type = "aut";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("nostrum"),
                                                            add("at"),
                                                            add("possimus"),
                                                            add("neque"),
                                                        }};
                                                        type = "pariatur";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("sapiente"),
                                                            add("mollitia"),
                                                        }};
                                                        type = "quae";
                                                    }}),
                                                }};
                                                gtin = "quos";
                                                id = "04e54c82-f168-4a36-bc88-73e484380b1f";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 694088;
                                                        uri = "https://soupy-penalty.biz";
                                                        width = 471207;
                                                    }}),
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 374062;
                                                        uri = "https://immediate-aardvark.net";
                                                        width = 14780;
                                                    }}),
                                                }};
                                                languageCode = "dolore";
                                                materials = new String[]{{
                                                    add("aliquam"),
                                                    add("iste"),
                                                    add("ullam"),
                                                    add("eligendi"),
                                                }};
                                                name = "Shane Mayert IV";
                                                patterns = new String[]{{
                                                    add("libero"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                                    cost = 3712.87;
                                                    currencyCode = "quasi";
                                                    originalPrice = 7665.91;
                                                    price = 1174.91;
                                                    priceEffectiveTime = "harum";
                                                    priceExpireTime = "facere";
                                                    priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 7079.83;
                                                            exclusiveMinimum = 1053.72;
                                                            maximum = 7672.1;
                                                            minimum = 9645.11;
                                                        }};
                                                        price = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 2871.52;
                                                            exclusiveMinimum = 7126.4;
                                                            maximum = 5482.56;
                                                            minimum = 5239.95;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "atque";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "cum";
                                                    }}),
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "pariatur";
                                                    }}),
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "sapiente";
                                                    }}),
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "quo";
                                                    }}),
                                                }};
                                                publishTime = "incidunt";
                                                rating = new GoogleCloudRetailV2Rating() {{
                                                    averageRating = 7972.93;
                                                    ratingCount = 793282;
                                                    ratingHistogram = new Integer[]{{
                                                        add(659971),
                                                        add(569706),
                                                        add(580238),
                                                        add(726851),
                                                    }};
                                                }};
                                                retrievableFields = "quo";
                                                sizes = new String[]{{
                                                    add("hic"),
                                                    add("maxime"),
                                                }};
                                                tags = new String[]{{
                                                    add("soluta"),
                                                }};
                                                title = "Mr.";
                                                ttl = "pariatur";
                                                type = GoogleCloudRetailV2ProductTypeEnum.COLLECTION;
                                                uri = "https://boring-afoul.name";
                                            }};
                                            quantity = 480421;
                                        }}),
                                        add(new GoogleCloudRetailV2ProductDetailInput() {{
                                            product = new GoogleCloudRetailV2ProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                                    put("voluptates", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(1699.35),
                                                            add(7018.41),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("voluptatem"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2Audience() {{
                                                    ageGroups = new String[]{{
                                                        add("at"),
                                                        add("eum"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("voluptatum"),
                                                        add("blanditiis"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2ProductAvailabilityEnum.OUT_OF_STOCK;
                                                availableQuantity = 540048;
                                                availableTime = "rerum";
                                                brands = new String[]{{
                                                    add("atque"),
                                                    add("nostrum"),
                                                    add("atque"),
                                                }};
                                                categories = new String[]{{
                                                    add("est"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("rem"),
                                                    add("magni"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("quas"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("enim"),
                                                        add("labore"),
                                                        add("sapiente"),
                                                        add("saepe"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("officia"),
                                                    add("natus"),
                                                    add("cumque"),
                                                    add("natus"),
                                                }};
                                                description = "quaerat";
                                                expireTime = "doloribus";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("mollitia"),
                                                            add("cumque"),
                                                            add("quis"),
                                                            add("enim"),
                                                        }};
                                                        type = "eum";
                                                    }}),
                                                }};
                                                gtin = "nemo";
                                                id = "d307cfee-8120-46e2-813f-a4a41c480d3f";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 80284;
                                                        uri = "http://cool-precedent.org";
                                                        width = 49499;
                                                    }}),
                                                }};
                                                languageCode = "dolorem";
                                                materials = new String[]{{
                                                    add("aperiam"),
                                                }};
                                                name = "Mrs. Christie Halvorson";
                                                patterns = new String[]{{
                                                    add("optio"),
                                                    add("nobis"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                                    cost = 4044.22;
                                                    currencyCode = "repellat";
                                                    originalPrice = 651.18;
                                                    price = 5339.78;
                                                    priceEffectiveTime = "expedita";
                                                    priceExpireTime = "hic";
                                                    priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 5698.34;
                                                            exclusiveMinimum = 3966.1;
                                                            maximum = 1513.85;
                                                            minimum = 1066.82;
                                                        }};
                                                        price = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 6273.41;
                                                            exclusiveMinimum = 4087.74;
                                                            maximum = 6573.01;
                                                            minimum = 2961.28;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "tenetur";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "esse";
                                                    }}),
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "animi";
                                                    }}),
                                                }};
                                                publishTime = "laudantium";
                                                rating = new GoogleCloudRetailV2Rating() {{
                                                    averageRating = 4610.5;
                                                    ratingCount = 908539;
                                                    ratingHistogram = new Integer[]{{
                                                        add(246402),
                                                        add(884765),
                                                        add(263346),
                                                        add(701978),
                                                    }};
                                                }};
                                                retrievableFields = "itaque";
                                                sizes = new String[]{{
                                                    add("ipsam"),
                                                    add("explicabo"),
                                                }};
                                                tags = new String[]{{
                                                    add("aliquid"),
                                                    add("quis"),
                                                    add("facilis"),
                                                    add("ipsum"),
                                                }};
                                                title = "Mrs.";
                                                ttl = "quaerat";
                                                type = GoogleCloudRetailV2ProductTypeEnum.TYPE_UNSPECIFIED;
                                                uri = "https://unusual-crepe.net";
                                            }};
                                            quantity = 730003;
                                        }}),
                                    }};
                                    purchaseTransaction = new GoogleCloudRetailV2PurchaseTransaction() {{
                                        cost = 6152.77;
                                        currencyCode = "illo";
                                        id = "c8d975e0-e841-49d8-b84f-144f3e07edcc";
                                        revenue = 3028.78;
                                        tax = 6778.95;
                                    }};
                                    referrerUri = "deserunt";
                                    searchQuery = "ad";
                                    sessionId = "reiciendis";
                                    uri = "http://specific-plow.net";
                                    userInfo = new GoogleCloudRetailV2UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "quibusdam";
                                        userAgent = "omnis";
                                        userId = "aut";
                                    }};
                                    visitorId = "ipsam";
                                }}),
                                add(new GoogleCloudRetailV2UserEventInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                        put("cupiditate", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(1572.81),
                                                add(8980.88),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("ad"),
                                            }};
                                        }});
                                        put("nisi", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(1541.3),
                                                add(5147.67),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("odit"),
                                            }};
                                        }});
                                        put("iusto", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(1769.35),
                                                add(8304.77),
                                                add(1998.79),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("sint"),
                                            }};
                                        }});
                                    }};
                                    attributionToken = "dolore";
                                    cartId = "esse";
                                    completionDetail = new GoogleCloudRetailV2CompletionDetail() {{
                                        completionAttributionToken = "accusantium";
                                        selectedPosition = 718119;
                                        selectedSuggestion = "sapiente";
                                    }};
                                    entity = "quam";
                                    eventTime = "est";
                                    eventType = "aliquam";
                                    experimentIds = new String[]{{
                                        add("culpa"),
                                        add("voluptatum"),
                                        add("iusto"),
                                        add("quod"),
                                    }};
                                    filter = "voluptatibus";
                                    offset = 374414;
                                    orderBy = "non";
                                    pageCategories = new String[]{{
                                        add("laborum"),
                                        add("voluptas"),
                                    }};
                                    pageViewId = "doloribus";
                                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductDetailInput[]{{
                                        add(new GoogleCloudRetailV2ProductDetailInput() {{
                                            product = new GoogleCloudRetailV2ProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                                    put("corporis", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9003.68),
                                                            add(7194.69),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("laboriosam"),
                                                            add("voluptatem"),
                                                            add("optio"),
                                                            add("sequi"),
                                                        }};
                                                    }});
                                                    put("sunt", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9730.96),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("sed"),
                                                        }};
                                                    }});
                                                    put("amet", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(4467.93),
                                                            add(3455.14),
                                                            add(8369.91),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("dolor"),
                                                        }};
                                                    }});
                                                    put("nisi", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9713.6),
                                                            add(9296.19),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("est"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2Audience() {{
                                                    ageGroups = new String[]{{
                                                        add("quod"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("quos"),
                                                        add("possimus"),
                                                        add("maiores"),
                                                        add("odio"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2ProductAvailabilityEnum.OUT_OF_STOCK;
                                                availableQuantity = 960933;
                                                availableTime = "aperiam";
                                                brands = new String[]{{
                                                    add("nesciunt"),
                                                    add("provident"),
                                                    add("ex"),
                                                }};
                                                categories = new String[]{{
                                                    add("unde"),
                                                    add("alias"),
                                                    add("impedit"),
                                                    add("sequi"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("labore"),
                                                    add("expedita"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("quisquam"),
                                                        add("sunt"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("nulla"),
                                                        add("maiores"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("mollitia"),
                                                    add("impedit"),
                                                    add("accusamus"),
                                                }};
                                                description = "et";
                                                expireTime = "quas";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("dicta"),
                                                            add("impedit"),
                                                            add("tempora"),
                                                        }};
                                                        type = "eveniet";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("sed"),
                                                            add("impedit"),
                                                            add("quas"),
                                                            add("impedit"),
                                                        }};
                                                        type = "vel";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("recusandae"),
                                                            add("ex"),
                                                            add("beatae"),
                                                            add("veritatis"),
                                                        }};
                                                        type = "maiores";
                                                    }}),
                                                }};
                                                gtin = "itaque";
                                                id = "eb1c7cbd-b6ee-4c74-b78b-a25317747dc9";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 348665;
                                                        uri = "https://thick-chapel.net";
                                                        width = 681115;
                                                    }}),
                                                }};
                                                languageCode = "repellat";
                                                materials = new String[]{{
                                                    add("illum"),
                                                    add("quibusdam"),
                                                }};
                                                name = "Tamara Champlin";
                                                patterns = new String[]{{
                                                    add("ipsa"),
                                                    add("maiores"),
                                                    add("exercitationem"),
                                                    add("culpa"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                                    cost = 9197.38;
                                                    currencyCode = "aspernatur";
                                                    originalPrice = 9607.67;
                                                    price = 2043.73;
                                                    priceEffectiveTime = "officia";
                                                    priceExpireTime = "suscipit";
                                                    priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 6886.49;
                                                            exclusiveMinimum = 4965.78;
                                                            maximum = 424.54;
                                                            minimum = 201.41;
                                                        }};
                                                        price = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 5144.8;
                                                            exclusiveMinimum = 4817.04;
                                                            maximum = 5468.68;
                                                            minimum = 4748.85;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "quis";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "ab";
                                                    }}),
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "quaerat";
                                                    }}),
                                                }};
                                                publishTime = "amet";
                                                rating = new GoogleCloudRetailV2Rating() {{
                                                    averageRating = 9569.42;
                                                    ratingCount = 357984;
                                                    ratingHistogram = new Integer[]{{
                                                        add(435142),
                                                        add(787629),
                                                        add(590927),
                                                    }};
                                                }};
                                                retrievableFields = "laudantium";
                                                sizes = new String[]{{
                                                    add("nemo"),
                                                    add("enim"),
                                                    add("ipsam"),
                                                }};
                                                tags = new String[]{{
                                                    add("tempora"),
                                                    add("perferendis"),
                                                }};
                                                title = "Ms.";
                                                ttl = "doloremque";
                                                type = GoogleCloudRetailV2ProductTypeEnum.COLLECTION;
                                                uri = "http://anxious-reprocessing.net";
                                            }};
                                            quantity = 628314;
                                        }}),
                                        add(new GoogleCloudRetailV2ProductDetailInput() {{
                                            product = new GoogleCloudRetailV2ProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                                    put("impedit", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(7689.2),
                                                            add(7437.95),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("laboriosam"),
                                                            add("nam"),
                                                            add("enim"),
                                                            add("maiores"),
                                                        }};
                                                    }});
                                                    put("consectetur", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(8037.92),
                                                            add(5867.17),
                                                            add(290.8),
                                                            add(5881.58),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("accusantium"),
                                                        }};
                                                    }});
                                                    put("magnam", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(6076.31),
                                                            add(1315.76),
                                                            add(4258.17),
                                                            add(7403.47),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("possimus"),
                                                            add("fugit"),
                                                            add("ipsam"),
                                                        }};
                                                    }});
                                                    put("nostrum", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(5293.1),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("error"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2Audience() {{
                                                    ageGroups = new String[]{{
                                                        add("tempora"),
                                                        add("voluptate"),
                                                        add("eius"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("aperiam"),
                                                        add("voluptates"),
                                                        add("possimus"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2ProductAvailabilityEnum.AVAILABILITY_UNSPECIFIED;
                                                availableQuantity = 27946;
                                                availableTime = "repudiandae";
                                                brands = new String[]{{
                                                    add("ea"),
                                                    add("eos"),
                                                }};
                                                categories = new String[]{{
                                                    add("blanditiis"),
                                                    add("hic"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("asperiores"),
                                                    add("autem"),
                                                    add("nesciunt"),
                                                    add("cupiditate"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("provident"),
                                                        add("beatae"),
                                                        add("ipsa"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("nam"),
                                                        add("assumenda"),
                                                        add("quo"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("tempore"),
                                                    add("commodi"),
                                                    add("fugit"),
                                                }};
                                                description = "suscipit";
                                                expireTime = "voluptate";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("provident"),
                                                            add("laboriosam"),
                                                        }};
                                                        type = "accusamus";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("itaque"),
                                                        }};
                                                        type = "quisquam";
                                                    }}),
                                                }};
                                                gtin = "eaque";
                                                id = "0221b335-d89a-4cb3-acfd-a8d0c549ef03";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 43715;
                                                        uri = "http://ornery-injury.name";
                                                        width = 638363;
                                                    }}),
                                                }};
                                                languageCode = "ex";
                                                materials = new String[]{{
                                                    add("a"),
                                                }};
                                                name = "Peter Schmitt";
                                                patterns = new String[]{{
                                                    add("commodi"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                                    cost = 5389.44;
                                                    currencyCode = "totam";
                                                    originalPrice = 9456.37;
                                                    price = 4518.07;
                                                    priceEffectiveTime = "quam";
                                                    priceExpireTime = "quod";
                                                    priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 1102.47;
                                                            exclusiveMinimum = 9605.23;
                                                            maximum = 9686.89;
                                                            minimum = 7989.53;
                                                        }};
                                                        price = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 4515.89;
                                                            exclusiveMinimum = 779.92;
                                                            maximum = 8156.11;
                                                            minimum = 8049.36;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "fuga";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "ex";
                                                    }}),
                                                }};
                                                publishTime = "consectetur";
                                                rating = new GoogleCloudRetailV2Rating() {{
                                                    averageRating = 9824.09;
                                                    ratingCount = 153097;
                                                    ratingHistogram = new Integer[]{{
                                                        add(197519),
                                                        add(757471),
                                                        add(528315),
                                                    }};
                                                }};
                                                retrievableFields = "perferendis";
                                                sizes = new String[]{{
                                                    add("omnis"),
                                                    add("nihil"),
                                                    add("tenetur"),
                                                }};
                                                tags = new String[]{{
                                                    add("velit"),
                                                    add("adipisci"),
                                                    add("non"),
                                                    add("optio"),
                                                }};
                                                title = "Dr.";
                                                ttl = "at";
                                                type = GoogleCloudRetailV2ProductTypeEnum.COLLECTION;
                                                uri = "https://harmful-incubation.net";
                                            }};
                                            quantity = 596185;
                                        }}),
                                        add(new GoogleCloudRetailV2ProductDetailInput() {{
                                            product = new GoogleCloudRetailV2ProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                                    put("eum", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(5551.94),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("commodi"),
                                                            add("porro"),
                                                        }};
                                                    }});
                                                    put("aliquid", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(6953.47),
                                                            add(1265.12),
                                                            add(928.51),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("magni"),
                                                            add("natus"),
                                                            add("illum"),
                                                            add("a"),
                                                        }};
                                                    }});
                                                    put("impedit", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(2814.54),
                                                            add(8145.85),
                                                            add(3772.69),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("recusandae"),
                                                            add("quisquam"),
                                                            add("facere"),
                                                            add("dignissimos"),
                                                        }};
                                                    }});
                                                    put("iste", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(2214.9),
                                                            add(5732.47),
                                                            add(442.52),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("eum"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2Audience() {{
                                                    ageGroups = new String[]{{
                                                        add("laborum"),
                                                        add("autem"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("explicabo"),
                                                        add("fugiat"),
                                                        add("doloremque"),
                                                        add("voluptatem"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2ProductAvailabilityEnum.AVAILABILITY_UNSPECIFIED;
                                                availableQuantity = 244157;
                                                availableTime = "ullam";
                                                brands = new String[]{{
                                                    add("velit"),
                                                    add("ratione"),
                                                }};
                                                categories = new String[]{{
                                                    add("maxime"),
                                                    add("recusandae"),
                                                    add("cumque"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("totam"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("maiores"),
                                                        add("est"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("veritatis"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("iste"),
                                                    add("dicta"),
                                                    add("ipsam"),
                                                    add("consequuntur"),
                                                }};
                                                description = "cumque";
                                                expireTime = "quidem";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("sunt"),
                                                        }};
                                                        type = "molestias";
                                                    }}),
                                                }};
                                                gtin = "beatae";
                                                id = "67b8e3c8-db03-4408-96d3-64ffd455906d";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 154840;
                                                        uri = "http://dreary-stack.biz";
                                                        width = 523109;
                                                    }}),
                                                }};
                                                languageCode = "officiis";
                                                materials = new String[]{{
                                                    add("neque"),
                                                    add("corporis"),
                                                    add("quod"),
                                                }};
                                                name = "Nichole Marks";
                                                patterns = new String[]{{
                                                    add("sapiente"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                                    cost = 2172.79;
                                                    currencyCode = "consequatur";
                                                    originalPrice = 7428.99;
                                                    price = 8981.55;
                                                    priceEffectiveTime = "sequi";
                                                    priceExpireTime = "recusandae";
                                                    priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 2863.29;
                                                            exclusiveMinimum = 2406.24;
                                                            maximum = 1667.41;
                                                            minimum = 456.77;
                                                        }};
                                                        price = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 1726.96;
                                                            exclusiveMinimum = 8488.6;
                                                            maximum = 4815.53;
                                                            minimum = 1689.76;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "beatae";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "ad";
                                                    }}),
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "voluptate";
                                                    }}),
                                                }};
                                                publishTime = "vel";
                                                rating = new GoogleCloudRetailV2Rating() {{
                                                    averageRating = 3249.99;
                                                    ratingCount = 24548;
                                                    ratingHistogram = new Integer[]{{
                                                        add(388333),
                                                        add(311247),
                                                    }};
                                                }};
                                                retrievableFields = "quasi";
                                                sizes = new String[]{{
                                                    add("dignissimos"),
                                                    add("doloremque"),
                                                    add("assumenda"),
                                                }};
                                                tags = new String[]{{
                                                    add("facere"),
                                                    add("sed"),
                                                    add("inventore"),
                                                }};
                                                title = "Dr.";
                                                ttl = "unde";
                                                type = GoogleCloudRetailV2ProductTypeEnum.VARIANT;
                                                uri = "https://aching-dame.com";
                                            }};
                                            quantity = 761927;
                                        }}),
                                    }};
                                    purchaseTransaction = new GoogleCloudRetailV2PurchaseTransaction() {{
                                        cost = 2697.31;
                                        currencyCode = "debitis";
                                        id = "cc11a083-6429-4068-b850-2a55e7f73bc8";
                                        revenue = 2733.49;
                                        tax = 3700.52;
                                    }};
                                    referrerUri = "officiis";
                                    searchQuery = "sequi";
                                    sessionId = "magni";
                                    uri = "http://quaint-croup.com";
                                    userInfo = new GoogleCloudRetailV2UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "error";
                                        userAgent = "voluptatibus";
                                        userId = "numquam";
                                    }};
                                    visitorId = "rerum";
                                }}),
                                add(new GoogleCloudRetailV2UserEventInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                        put("quibusdam", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(5666.69),
                                                add(2565.67),
                                                add(4768.01),
                                                add(7738.33),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("animi"),
                                                add("voluptatum"),
                                                add("aliquid"),
                                            }};
                                        }});
                                        put("nihil", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(7594.51),
                                                add(2796.73),
                                                add(1782.01),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("dolores"),
                                                add("aliquid"),
                                            }};
                                        }});
                                        put("eum", new GoogleCloudRetailV2CustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(3207.48),
                                                add(5522.87),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("suscipit"),
                                            }};
                                        }});
                                    }};
                                    attributionToken = "quibusdam";
                                    cartId = "fugiat";
                                    completionDetail = new GoogleCloudRetailV2CompletionDetail() {{
                                        completionAttributionToken = "impedit";
                                        selectedPosition = 632939;
                                        selectedSuggestion = "atque";
                                    }};
                                    entity = "voluptates";
                                    eventTime = "maiores";
                                    eventType = "nemo";
                                    experimentIds = new String[]{{
                                        add("doloribus"),
                                    }};
                                    filter = "cumque";
                                    offset = 711310;
                                    orderBy = "modi";
                                    pageCategories = new String[]{{
                                        add("ipsam"),
                                        add("occaecati"),
                                        add("ipsum"),
                                        add("accusamus"),
                                    }};
                                    pageViewId = "quisquam";
                                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductDetailInput[]{{
                                        add(new GoogleCloudRetailV2ProductDetailInput() {{
                                            product = new GoogleCloudRetailV2ProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                                    put("quo", new GoogleCloudRetailV2CustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(6520.92),
                                                            add(6615.78),
                                                            add(8409.92),
                                                            add(590.23),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("placeat"),
                                                            add("quam"),
                                                            add("similique"),
                                                            add("delectus"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2Audience() {{
                                                    ageGroups = new String[]{{
                                                        add("facere"),
                                                        add("nobis"),
                                                        add("at"),
                                                        add("molestias"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("temporibus"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2ProductAvailabilityEnum.BACKORDER;
                                                availableQuantity = 278050;
                                                availableTime = "numquam";
                                                brands = new String[]{{
                                                    add("similique"),
                                                    add("dolore"),
                                                    add("esse"),
                                                }};
                                                categories = new String[]{{
                                                    add("iste"),
                                                    add("amet"),
                                                    add("occaecati"),
                                                    add("aut"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("minima"),
                                                    add("quos"),
                                                    add("blanditiis"),
                                                    add("quas"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("provident"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("ipsum"),
                                                        add("vero"),
                                                        add("fuga"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("maiores"),
                                                    add("error"),
                                                    add("recusandae"),
                                                }};
                                                description = "a";
                                                expireTime = "consectetur";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("assumenda"),
                                                            add("repellendus"),
                                                            add("omnis"),
                                                            add("delectus"),
                                                        }};
                                                        type = "odio";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("aut"),
                                                            add("quam"),
                                                            add("omnis"),
                                                            add("similique"),
                                                        }};
                                                        type = "asperiores";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("facere"),
                                                            add("neque"),
                                                        }};
                                                        type = "quis";
                                                    }}),
                                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("sed"),
                                                            add("non"),
                                                        }};
                                                        type = "porro";
                                                    }}),
                                                }};
                                                gtin = "fugiat";
                                                id = "b0f4d281-187d-4568-84ed-ed85a9065e62";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 697729;
                                                        uri = "https://wild-site.biz";
                                                        width = 9777;
                                                    }}),
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 201966;
                                                        uri = "http://required-gas.net";
                                                        width = 512017;
                                                    }}),
                                                    add(new GoogleCloudRetailV2Image() {{
                                                        height = 490549;
                                                        uri = "https://parallel-certification.biz";
                                                        width = 696291;
                                                    }}),
                                                }};
                                                languageCode = "molestiae";
                                                materials = new String[]{{
                                                    add("vitae"),
                                                    add("dolor"),
                                                    add("ad"),
                                                    add("atque"),
                                                }};
                                                name = "Nettie Kilback";
                                                patterns = new String[]{{
                                                    add("eos"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                                    cost = 7733.55;
                                                    currencyCode = "ex";
                                                    originalPrice = 5078.74;
                                                    price = 6155.97;
                                                    priceEffectiveTime = "vitae";
                                                    priceExpireTime = "tenetur";
                                                    priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 5151.53;
                                                            exclusiveMinimum = 1331.48;
                                                            maximum = 7552.4;
                                                            minimum = 9178.77;
                                                        }};
                                                        price = new GoogleCloudRetailV2Interval() {{
                                                            exclusiveMaximum = 1171.42;
                                                            exclusiveMinimum = 810.53;
                                                            maximum = 3562.56;
                                                            minimum = 4807.41;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "inventore";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "sed";
                                                    }}),
                                                    add(new GoogleCloudRetailV2Promotion() {{
                                                        promotionId = "dolorem";
                                                    }}),
                                                }};
                                                publishTime = "eaque";
                                                rating = new GoogleCloudRetailV2Rating() {{
                                                    averageRating = 3474.6;
                                                    ratingCount = 226143;
                                                    ratingHistogram = new Integer[]{{
                                                        add(454232),
                                                        add(865212),
                                                    }};
                                                }};
                                                retrievableFields = "minus";
                                                sizes = new String[]{{
                                                    add("fuga"),
                                                    add("totam"),
                                                    add("cupiditate"),
                                                    add("at"),
                                                }};
                                                tags = new String[]{{
                                                    add("omnis"),
                                                    add("quam"),
                                                    add("exercitationem"),
                                                    add("voluptates"),
                                                }};
                                                title = "Mr.";
                                                ttl = "quis";
                                                type = GoogleCloudRetailV2ProductTypeEnum.PRIMARY;
                                                uri = "http://meaty-granola.com";
                                            }};
                                            quantity = 596820;
                                        }}),
                                    }};
                                    purchaseTransaction = new GoogleCloudRetailV2PurchaseTransaction() {{
                                        cost = 1458.41;
                                        currencyCode = "itaque";
                                        id = "9c3ddc5f-111d-4ea1-826d-541a4d190feb";
                                        revenue = 1568.43;
                                        tax = 1127.51;
                                    }};
                                    referrerUri = "odio";
                                    searchQuery = "quas";
                                    sessionId = "ipsa";
                                    uri = "https://studious-shower.net";
                                    userInfo = new GoogleCloudRetailV2UserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "sit";
                                        userAgent = "possimus";
                                        userId = "distinctio";
                                    }};
                                    visitorId = "distinctio";
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "magnam";
                key = "laudantium";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "doloremque";
                uploadProtocol = "corrupti";
            }};            

            RetailProjectsLocationsCatalogsUserEventsImportResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsImport(req, new RetailProjectsLocationsCatalogsUserEventsImportSecurity("reiciendis", "facilis") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PurgeUserEventsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsPurgeRequest req = new RetailProjectsLocationsCatalogsUserEventsPurgeRequest("aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2PurgeUserEventsRequest = new GoogleCloudRetailV2PurgeUserEventsRequest() {{
                    filter = "amet";
                    force = false;
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "officiis";
                fields = "eum";
                key = "rerum";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "ad";
                uploadProtocol = "blanditiis";
            }};            

            RetailProjectsLocationsCatalogsUserEventsPurgeResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsPurge(req, new RetailProjectsLocationsCatalogsUserEventsPurgeSecurity("porro", "labore") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RejoinUserEventsRequest;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsRejoinRequest req = new RetailProjectsLocationsCatalogsUserEventsRejoinRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2RejoinUserEventsRequest = new GoogleCloudRetailV2RejoinUserEventsRequest() {{
                    userEventRejoinScope = GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum.UNJOINED_EVENTS;
                }};;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "cupiditate";
                key = "occaecati";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "consectetur";
                uploadProtocol = "modi";
            }};            

            RetailProjectsLocationsCatalogsUserEventsRejoinResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsRejoin(req, new RetailProjectsLocationsCatalogsUserEventsRejoinSecurity("aspernatur", "explicabo") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Audience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CompletionDetail;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Image;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Interval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductDetailInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2PurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2Rating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2UserEventInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2UserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsWriteRequest req = new RetailProjectsLocationsCatalogsUserEventsWriteRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2UserEventInput = new GoogleCloudRetailV2UserEventInput() {{
                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                        put("sint", new GoogleCloudRetailV2CustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(1861.3),
                                add(374.77),
                                add(92.48),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("recusandae"),
                                add("voluptate"),
                                add("deleniti"),
                                add("est"),
                            }};
                        }});
                        put("et", new GoogleCloudRetailV2CustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(8429.21),
                                add(5529.84),
                                add(9832.03),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("in"),
                                add("culpa"),
                                add("doloremque"),
                            }};
                        }});
                        put("fuga", new GoogleCloudRetailV2CustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(1039.01),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("eligendi"),
                                add("officiis"),
                            }};
                        }});
                        put("dignissimos", new GoogleCloudRetailV2CustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(1887.82),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("quaerat"),
                                add("aut"),
                                add("natus"),
                                add("esse"),
                            }};
                        }});
                    }};
                    attributionToken = "delectus";
                    cartId = "deserunt";
                    completionDetail = new GoogleCloudRetailV2CompletionDetail() {{
                        completionAttributionToken = "ratione";
                        selectedPosition = 60379;
                        selectedSuggestion = "debitis";
                    }};;
                    entity = "iste";
                    eventTime = "deserunt";
                    eventType = "hic";
                    experimentIds = new String[]{{
                        add("consequuntur"),
                        add("ipsam"),
                    }};
                    filter = "libero";
                    offset = 153942;
                    orderBy = "omnis";
                    pageCategories = new String[]{{
                        add("qui"),
                    }};
                    pageViewId = "explicabo";
                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2ProductDetailInput[]{{
                        add(new GoogleCloudRetailV2ProductDetailInput() {{
                            product = new GoogleCloudRetailV2ProductInput() {{
                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2CustomAttribute>() {{
                                    put("consequatur", new GoogleCloudRetailV2CustomAttribute() {{
                                        indexable = false;
                                        numbers = new Double[]{{
                                            add(5320.92),
                                            add(2451.16),
                                            add(9427.8),
                                            add(3564.85),
                                        }};
                                        searchable = false;
                                        text = new String[]{{
                                            add("itaque"),
                                            add("distinctio"),
                                            add("iusto"),
                                        }};
                                    }});
                                }};
                                audience = new GoogleCloudRetailV2Audience() {{
                                    ageGroups = new String[]{{
                                        add("provident"),
                                        add("occaecati"),
                                    }};
                                    genders = new String[]{{
                                        add("sunt"),
                                        add("odit"),
                                        add("vero"),
                                        add("deleniti"),
                                    }};
                                }};
                                availability = GoogleCloudRetailV2ProductAvailabilityEnum.PREORDER;
                                availableQuantity = 98805;
                                availableTime = "repellat";
                                brands = new String[]{{
                                    add("magnam"),
                                    add("perspiciatis"),
                                    add("amet"),
                                }};
                                categories = new String[]{{
                                    add("sunt"),
                                    add("nemo"),
                                    add("delectus"),
                                }};
                                collectionMemberIds = new String[]{{
                                    add("porro"),
                                    add("quaerat"),
                                    add("magni"),
                                    add("cumque"),
                                }};
                                colorInfo = new GoogleCloudRetailV2ColorInfo() {{
                                    colorFamilies = new String[]{{
                                        add("in"),
                                        add("commodi"),
                                        add("maxime"),
                                    }};
                                    colors = new String[]{{
                                        add("minus"),
                                    }};
                                }};
                                conditions = new String[]{{
                                    add("possimus"),
                                }};
                                description = "delectus";
                                expireTime = "harum";
                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2FulfillmentInfo[]{{
                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("hic"),
                                            add("quo"),
                                            add("illo"),
                                            add("nobis"),
                                        }};
                                        type = "esse";
                                    }}),
                                    add(new GoogleCloudRetailV2FulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("explicabo"),
                                            add("sequi"),
                                        }};
                                        type = "alias";
                                    }}),
                                }};
                                gtin = "reiciendis";
                                id = "841fb1bd-23fd-4b14-9b6b-e5a685998e22";
                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Image[]{{
                                    add(new GoogleCloudRetailV2Image() {{
                                        height = 875200;
                                        uri = "http://altruistic-spokeswoman.name";
                                        width = 62907;
                                    }}),
                                    add(new GoogleCloudRetailV2Image() {{
                                        height = 414439;
                                        uri = "https://spotless-charge.net";
                                        width = 155473;
                                    }}),
                                    add(new GoogleCloudRetailV2Image() {{
                                        height = 480108;
                                        uri = "http://practical-chart.name";
                                        width = 573994;
                                    }}),
                                }};
                                languageCode = "placeat";
                                materials = new String[]{{
                                    add("molestiae"),
                                    add("itaque"),
                                }};
                                name = "Maurice Friesen";
                                patterns = new String[]{{
                                    add("aliquam"),
                                }};
                                priceInfo = new GoogleCloudRetailV2PriceInfo() {{
                                    cost = 2199.4;
                                    currencyCode = "occaecati";
                                    originalPrice = 8426.78;
                                    price = 1696.78;
                                    priceEffectiveTime = "consequuntur";
                                    priceExpireTime = "consequuntur";
                                    priceRange = new GoogleCloudRetailV2PriceInfoPriceRange() {{
                                        originalPrice = new GoogleCloudRetailV2Interval() {{
                                            exclusiveMaximum = 2602.52;
                                            exclusiveMinimum = 4170.3;
                                            maximum = 3712.17;
                                            minimum = 4268.19;
                                        }};
                                        price = new GoogleCloudRetailV2Interval() {{
                                            exclusiveMaximum = 5841.99;
                                            exclusiveMinimum = 2681.09;
                                            maximum = 3923.11;
                                            minimum = 1315.96;
                                        }};
                                    }};
                                }};
                                primaryProductId = "modi";
                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2Promotion[]{{
                                    add(new GoogleCloudRetailV2Promotion() {{
                                        promotionId = "odio";
                                    }}),
                                }};
                                publishTime = "sit";
                                rating = new GoogleCloudRetailV2Rating() {{
                                    averageRating = 5318.59;
                                    ratingCount = 271550;
                                    ratingHistogram = new Integer[]{{
                                        add(461853),
                                        add(675955),
                                        add(726244),
                                        add(192173),
                                    }};
                                }};
                                retrievableFields = "molestiae";
                                sizes = new String[]{{
                                    add("saepe"),
                                    add("maiores"),
                                    add("accusantium"),
                                    add("sed"),
                                }};
                                tags = new String[]{{
                                    add("consequuntur"),
                                }};
                                title = "Mrs.";
                                ttl = "vitae";
                                type = GoogleCloudRetailV2ProductTypeEnum.VARIANT;
                                uri = "http://thorough-product.info";
                            }};
                            quantity = 332777;
                        }}),
                    }};
                    purchaseTransaction = new GoogleCloudRetailV2PurchaseTransaction() {{
                        cost = 2679.88;
                        currencyCode = "quasi";
                        id = "0adc669a-f90a-426c-bcdc-981f068981d6";
                        revenue = 7304.37;
                        tax = 7225;
                    }};;
                    referrerUri = "amet";
                    searchQuery = "adipisci";
                    sessionId = "minus";
                    uri = "https://pleasant-prelude.biz";
                    userInfo = new GoogleCloudRetailV2UserInfo() {{
                        directUserRequest = false;
                        ipAddress = "labore";
                        userAgent = "laudantium";
                        userId = "cumque";
                    }};;
                    visitorId = "adipisci";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "magnam";
                key = "aperiam";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "necessitatibus";
                uploadProtocol = "numquam";
                writeAsync = false;
            }};            

            RetailProjectsLocationsCatalogsUserEventsWriteResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsWrite(req, new RetailProjectsLocationsCatalogsUserEventsWriteSecurity("doloribus", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2UserEvent != null) {
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

            RetailProjectsOperationsGetRequest req = new RetailProjectsOperationsGetRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "nobis";
                key = "nihil";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "vitae";
                uploadProtocol = "ullam";
            }};            

            RetailProjectsOperationsGetResponse res = sdk.projects.retailProjectsOperationsGet(req, new RetailProjectsOperationsGetSecurity("nisi", "consequuntur") {{
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

            RetailProjectsOperationsListRequest req = new RetailProjectsOperationsListRequest("voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "est";
                fields = "perferendis";
                filter = "quibusdam";
                key = "impedit";
                oauthToken = "ducimus";
                pageSize = 392569L;
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "fugit";
                uploadProtocol = "dolore";
            }};            

            RetailProjectsOperationsListResponse res = sdk.projects.retailProjectsOperationsList(req, new RetailProjectsOperationsListSecurity("maxime", "maxime") {{
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
