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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaAddCatalogAttributeRequestInput = new GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput() {{
                    catalogAttribute = new GoogleCloudRetailV2alphaCatalogAttributeInput() {{
                        dynamicFacetableOption = GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum.DYNAMIC_FACETABLE_ENABLED;
                        exactSearchableOption = GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum.EXACT_SEARCHABLE_ENABLED;
                        facetIntervals = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval[]{{
                            add(new GoogleCloudRetailV2alphaInterval() {{
                                exclusiveMaximum = 5373.73;
                                exclusiveMinimum = 9446.69;
                                maximum = 7586.16;
                                minimum = 5218.48;
                            }}),
                        }};
                        ignoredFacetValues = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues[]{{
                            add(new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues() {{
                                endTime = "commodi";
                                startTime = "molestiae";
                                values = new String[]{{
                                    add("qui"),
                                    add("impedit"),
                                }};
                            }}),
                        }};
                        indexableOption = GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum.INDEXABLE_DISABLED;
                        key = "esse";
                        recommendationsFilteringOption = GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum.RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED;
                        retrievableOption = GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum.RETRIEVABLE_ENABLED;
                        searchableOption = GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum.SEARCHABLE_OPTION_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                key = "iste";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity("saepe", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaAttributesConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest req = new RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest = new GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest() {{
                    attributeKeys = new String[]{{
                        add("iure"),
                        add("saepe"),
                        add("quidem"),
                    }};
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "est";
                key = "mollitia";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes(req, new RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity("explicabo", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaRemoveCatalogAttributeRequest = new GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest() {{
                    key = "nemo";
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "iure";
                key = "culpa";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "architecto";
                uploadProtocol = "mollitia";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity("dolorem", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaAttributesConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaReplaceCatalogAttributeRequestInput = new GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput() {{
                    catalogAttribute = new GoogleCloudRetailV2alphaCatalogAttributeInput() {{
                        dynamicFacetableOption = GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum.DYNAMIC_FACETABLE_ENABLED;
                        exactSearchableOption = GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum.EXACT_SEARCHABLE_ENABLED;
                        facetIntervals = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval[]{{
                            add(new GoogleCloudRetailV2alphaInterval() {{
                                exclusiveMaximum = 4143.69;
                                exclusiveMinimum = 4663.11;
                                maximum = 4746.97;
                                minimum = 2444.25;
                            }}),
                            add(new GoogleCloudRetailV2alphaInterval() {{
                                exclusiveMaximum = 6235.1;
                                exclusiveMinimum = 1589.69;
                                maximum = 3380.07;
                                minimum = 1103.75;
                            }}),
                        }};
                        ignoredFacetValues = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues[]{{
                            add(new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues() {{
                                endTime = "animi";
                                startTime = "enim";
                                values = new String[]{{
                                    add("quo"),
                                }};
                            }}),
                            add(new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues() {{
                                endTime = "sequi";
                                startTime = "tenetur";
                                values = new String[]{{
                                    add("id"),
                                    add("possimus"),
                                }};
                            }}),
                            add(new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues() {{
                                endTime = "aut";
                                startTime = "quasi";
                                values = new String[]{{
                                    add("temporibus"),
                                    add("laborum"),
                                    add("quasi"),
                                }};
                            }}),
                        }};
                        indexableOption = GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum.INDEXABLE_DISABLED;
                        key = "voluptatibus";
                        recommendationsFilteringOption = GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum.RECOMMENDATIONS_FILTERING_ENABLED;
                        retrievableOption = GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum.RETRIEVABLE_ENABLED;
                        searchableOption = GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum.SEARCHABLE_ENABLED;
                    }};;
                    updateMask = "voluptatibus";
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

            RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity("dicta", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaAttributesConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest("dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaAddFulfillmentPlacesRequest = new GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest() {{
                    addTime = "dicta";
                    allowMissing = false;
                    placeIds = new String[]{{
                        add("enim"),
                        add("accusamus"),
                        add("commodi"),
                    }};
                    type = "repudiandae";
                }};;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "praesentium";
                uploadProtocol = "rem";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces(req, new RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity("voluptates", "quasi") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAddLocalInventoriesRequest;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaLocalInventory;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaAddLocalInventoriesRequest = new GoogleCloudRetailV2alphaAddLocalInventoriesRequest() {{
                    addMask = "veritatis";
                    addTime = "itaque";
                    allowMissing = false;
                    localInventories = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaLocalInventory[]{{
                        add(new GoogleCloudRetailV2alphaLocalInventory() {{
                            attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                put("consequatur", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(8423.42),
                                        add(1317.97),
                                        add(6471.74),
                                    }};
                                    searchable = false;
                                    text = new String[]{{
                                        add("quibusdam"),
                                        add("labore"),
                                        add("modi"),
                                    }};
                                }});
                                put("qui", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(5865.13),
                                        add(5528.22),
                                    }};
                                    searchable = false;
                                    text = new String[]{{
                                        add("magni"),
                                    }};
                                }});
                            }};
                            fulfillmentTypes = new String[]{{
                                add("ipsam"),
                                add("alias"),
                                add("fugit"),
                                add("dolorum"),
                            }};
                            placeId = "excepturi";
                            priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                cost = 2700.08;
                                currencyCode = "facilis";
                                originalPrice = 7351.94;
                                price = 2884.76;
                                priceEffectiveTime = "delectus";
                                priceExpireTime = "eum";
                                priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                    originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                        exclusiveMaximum = 2487.53;
                                        exclusiveMinimum = 7561.07;
                                        maximum = 5761.57;
                                        minimum = 3960.98;
                                    }};
                                    price = new GoogleCloudRetailV2alphaInterval() {{
                                        exclusiveMaximum = 5920.42;
                                        exclusiveMinimum = 8960.39;
                                        maximum = 5722.52;
                                        minimum = 6389.21;
                                    }};
                                }};
                            }};
                        }}),
                        add(new GoogleCloudRetailV2alphaLocalInventory() {{
                            attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                put("debitis", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                    indexable = false;
                                    numbers = new Double[]{{
                                        add(6800.56),
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
                            fulfillmentTypes = new String[]{{
                                add("ea"),
                                add("aliquid"),
                                add("laborum"),
                                add("accusamus"),
                            }};
                            placeId = "non";
                            priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                cost = 5812.73;
                                currencyCode = "enim";
                                originalPrice = 8817.36;
                                price = 9654.17;
                                priceEffectiveTime = "quidem";
                                priceExpireTime = "provident";
                                priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                    originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                        exclusiveMaximum = 7252.55;
                                        exclusiveMinimum = 6596.69;
                                        maximum = 5013.24;
                                        minimum = 5332.06;
                                    }};
                                    price = new GoogleCloudRetailV2alphaInterval() {{
                                        exclusiveMaximum = 9560.84;
                                        exclusiveMinimum = 2305.33;
                                        maximum = 6439.9;
                                        minimum = 3948.69;
                                    }};
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "molestiae";
                key = "perferendis";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "distinctio";
                uploadProtocol = "id";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsAddLocalInventories(req, new RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity("labore", "labore") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRating;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsCreateRequest req = new RetailProjectsLocationsCatalogsBranchesProductsCreateRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaProductInput = new GoogleCloudRetailV2alphaProductInput() {{
                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                        put("eum", new GoogleCloudRetailV2alphaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(1354.74),
                                add(1028.63),
                                add(2982.82),
                                add(923.73),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("ullam"),
                                add("provident"),
                                add("quos"),
                            }};
                        }});
                        put("sint", new GoogleCloudRetailV2alphaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(6532.01),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("mollitia"),
                                add("ad"),
                                add("eum"),
                                add("dolor"),
                            }};
                        }});
                        put("necessitatibus", new GoogleCloudRetailV2alphaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(3675.62),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("iure"),
                            }};
                        }});
                    }};
                    audience = new GoogleCloudRetailV2alphaAudience() {{
                        ageGroups = new String[]{{
                            add("debitis"),
                            add("eius"),
                            add("maxime"),
                            add("deleniti"),
                        }};
                        genders = new String[]{{
                            add("in"),
                            add("architecto"),
                            add("architecto"),
                        }};
                    }};;
                    availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.BACKORDER;
                    availableQuantity = 352312;
                    availableTime = "expedita";
                    brands = new String[]{{
                        add("repellat"),
                        add("quibusdam"),
                    }};
                    categories = new String[]{{
                        add("saepe"),
                    }};
                    collectionMemberIds = new String[]{{
                        add("accusantium"),
                        add("consequuntur"),
                        add("praesentium"),
                        add("natus"),
                    }};
                    colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                        colorFamilies = new String[]{{
                            add("sunt"),
                        }};
                        colors = new String[]{{
                            add("illum"),
                            add("pariatur"),
                            add("maxime"),
                            add("ea"),
                        }};
                    }};;
                    conditions = new String[]{{
                        add("odit"),
                        add("ea"),
                        add("accusantium"),
                    }};
                    description = "ab";
                    expireTime = "maiores";
                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                            placeIds = new String[]{{
                                add("voluptate"),
                                add("autem"),
                            }};
                            type = "nam";
                        }}),
                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                            placeIds = new String[]{{
                                add("pariatur"),
                            }};
                            type = "nemo";
                        }}),
                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                            placeIds = new String[]{{
                                add("perferendis"),
                                add("fugiat"),
                                add("amet"),
                                add("aut"),
                            }};
                            type = "cumque";
                        }}),
                    }};
                    gtin = "corporis";
                    id = "fbb25870-5320-42c7-bd5f-e9b90c28909b";
                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                        add(new GoogleCloudRetailV2alphaImage() {{
                            height = 992397;
                            uri = "https://fantastic-option.net";
                            width = 535633;
                        }}),
                    }};
                    languageCode = "pariatur";
                    materials = new String[]{{
                        add("nobis"),
                        add("libero"),
                        add("delectus"),
                    }};
                    name = "Billie Jacobi";
                    patterns = new String[]{{
                        add("qui"),
                    }};
                    priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                        cost = 2187.49;
                        currencyCode = "hic";
                        originalPrice = 5695.74;
                        price = 7395.51;
                        priceEffectiveTime = "voluptate";
                        priceExpireTime = "dignissimos";
                        priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                            originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                exclusiveMaximum = 9702.37;
                                exclusiveMinimum = 2274.14;
                                maximum = 6805.45;
                                minimum = 2543.56;
                            }};;
                            price = new GoogleCloudRetailV2alphaInterval() {{
                                exclusiveMaximum = 852.95;
                                exclusiveMinimum = 580.29;
                                maximum = 564.18;
                                minimum = 4344.17;
                            }};;
                        }};;
                    }};;
                    primaryProductId = "odio";
                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                        add(new GoogleCloudRetailV2alphaPromotion() {{
                            promotionId = "accusamus";
                        }}),
                        add(new GoogleCloudRetailV2alphaPromotion() {{
                            promotionId = "quidem";
                        }}),
                    }};
                    publishTime = "voluptatibus";
                    rating = new GoogleCloudRetailV2alphaRating() {{
                        averageRating = 3777.52;
                        ratingCount = 617658;
                        ratingHistogram = new Integer[]{{
                            add(542499),
                        }};
                    }};;
                    retrievableFields = "sit";
                    sizes = new String[]{{
                        add("ab"),
                        add("soluta"),
                        add("dolorum"),
                        add("iusto"),
                    }};
                    tags = new String[]{{
                        add("dolorum"),
                        add("deleniti"),
                    }};
                    title = "Miss";
                    ttl = "necessitatibus";
                    type = GoogleCloudRetailV2alphaProductTypeEnum.VARIANT;
                    uri = "https://knobby-crack.info";
                }};;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "amet";
                prettyPrint = false;
                productId = "optio";
                quotaUser = "accusamus";
                uploadType = "ad";
                uploadProtocol = "saepe";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsCreate(req, new RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity("suscipit", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaProduct != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaBigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaGcsSource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImportErrorsConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImportProductsRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductInlineSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductInputConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRating;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsImportRequest req = new RetailProjectsLocationsCatalogsBranchesProductsImportRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaImportProductsRequestInput = new GoogleCloudRetailV2alphaImportProductsRequestInput() {{
                    errorsConfig = new GoogleCloudRetailV2alphaImportErrorsConfig() {{
                        gcsPrefix = "repellendus";
                    }};;
                    inputConfig = new GoogleCloudRetailV2alphaProductInputConfigInput() {{
                        bigQuerySource = new GoogleCloudRetailV2alphaBigQuerySource() {{
                            dataSchema = "totam";
                            datasetId = "similique";
                            gcsStagingDir = "alias";
                            partitionDate = new GoogleTypeDate() {{
                                day = 872651;
                                month = 311860;
                                year = 273542;
                            }};;
                            projectId = "vel";
                            tableId = "quod";
                        }};;
                        gcsSource = new GoogleCloudRetailV2alphaGcsSource() {{
                            dataSchema = "officiis";
                            inputUris = new String[]{{
                                add("dolorum"),
                            }};
                        }};;
                        productInlineSource = new GoogleCloudRetailV2alphaProductInlineSourceInput() {{
                            products = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductInput[]{{
                                add(new GoogleCloudRetailV2alphaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                        put("harum", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(2155.07),
                                                add(7887.4),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("amet"),
                                                add("tempore"),
                                                add("accusamus"),
                                                add("numquam"),
                                            }};
                                        }});
                                        put("enim", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(9574.51),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("nihil"),
                                                add("sit"),
                                                add("expedita"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2alphaAudience() {{
                                        ageGroups = new String[]{{
                                            add("sed"),
                                        }};
                                        genders = new String[]{{
                                            add("libero"),
                                            add("voluptas"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.PREORDER;
                                    availableQuantity = 463575;
                                    availableTime = "ipsum";
                                    brands = new String[]{{
                                        add("qui"),
                                        add("cupiditate"),
                                    }};
                                    categories = new String[]{{
                                        add("pariatur"),
                                        add("soluta"),
                                        add("dicta"),
                                        add("laborum"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("incidunt"),
                                        add("aspernatur"),
                                        add("dolores"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("facilis"),
                                            add("aliquid"),
                                            add("quam"),
                                        }};
                                        colors = new String[]{{
                                            add("temporibus"),
                                            add("qui"),
                                            add("neque"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("magni"),
                                    }};
                                    description = "odio";
                                    expireTime = "sunt";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("hic"),
                                                add("voluptatem"),
                                                add("cumque"),
                                            }};
                                            type = "soluta";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("et"),
                                                add("saepe"),
                                                add("ipsum"),
                                            }};
                                            type = "veritatis";
                                        }}),
                                    }};
                                    gtin = "nobis";
                                    id = "8b90f344-3a11-408e-8adc-f4b921879fce";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 338159;
                                            uri = "http://wet-incident.biz";
                                            width = 878870;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 949319;
                                            uri = "http://warm-race.net";
                                            width = 486160;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 630448;
                                            uri = "https://trustworthy-landscape.biz";
                                            width = 844550;
                                        }}),
                                    }};
                                    languageCode = "illum";
                                    materials = new String[]{{
                                        add("natus"),
                                    }};
                                    name = "Richard Wiza";
                                    patterns = new String[]{{
                                        add("porro"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                        cost = 9818.3;
                                        currencyCode = "doloribus";
                                        originalPrice = 4783.7;
                                        price = 7535.7;
                                        priceEffectiveTime = "ducimus";
                                        priceExpireTime = "alias";
                                        priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 6394.73;
                                                exclusiveMinimum = 2694.79;
                                                maximum = 3685.84;
                                                minimum = 4104.92;
                                            }};
                                            price = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 1369;
                                                exclusiveMinimum = 4282.24;
                                                maximum = 8221.18;
                                                minimum = 2978.42;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "ratione";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "laudantium";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "dicta";
                                        }}),
                                    }};
                                    publishTime = "dolor";
                                    rating = new GoogleCloudRetailV2alphaRating() {{
                                        averageRating = 9807;
                                        ratingCount = 97844;
                                        ratingHistogram = new Integer[]{{
                                            add(862192),
                                            add(569211),
                                        }};
                                    }};
                                    retrievableFields = "voluptatibus";
                                    sizes = new String[]{{
                                        add("sapiente"),
                                        add("quisquam"),
                                    }};
                                    tags = new String[]{{
                                        add("ea"),
                                        add("impedit"),
                                        add("corporis"),
                                        add("veniam"),
                                    }};
                                    title = "Mrs.";
                                    ttl = "inventore";
                                    type = GoogleCloudRetailV2alphaProductTypeEnum.PRIMARY;
                                    uri = "http://solid-curriculum.org";
                                }}),
                                add(new GoogleCloudRetailV2alphaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                        put("minima", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(9528.71),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("aut"),
                                                add("aut"),
                                                add("deleniti"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2alphaAudience() {{
                                        ageGroups = new String[]{{
                                            add("aliquam"),
                                            add("fugit"),
                                            add("accusamus"),
                                            add("inventore"),
                                        }};
                                        genders = new String[]{{
                                            add("et"),
                                            add("dolorum"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.PREORDER;
                                    availableQuantity = 810424;
                                    availableTime = "velit";
                                    brands = new String[]{{
                                        add("autem"),
                                        add("nobis"),
                                    }};
                                    categories = new String[]{{
                                        add("assumenda"),
                                        add("nulla"),
                                        add("voluptas"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("quasi"),
                                        add("tempora"),
                                        add("numquam"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("provident"),
                                        }};
                                        colors = new String[]{{
                                            add("molestiae"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("odio"),
                                        add("eius"),
                                    }};
                                    description = "esse";
                                    expireTime = "esse";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("reprehenderit"),
                                                add("quidem"),
                                                add("fugiat"),
                                            }};
                                            type = "ut";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("suscipit"),
                                                add("assumenda"),
                                            }};
                                            type = "eos";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("quisquam"),
                                                add("veritatis"),
                                                add("ipsa"),
                                            }};
                                            type = "id";
                                        }}),
                                    }};
                                    gtin = "quidem";
                                    id = "3cdca425-1904-4e52-bc7e-0bc7178e4796";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 174112;
                                            uri = "https://lanky-apparel.net";
                                            width = 430402;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 556429;
                                            uri = "https://cumbersome-mama.com";
                                            width = 681393;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 649463;
                                            uri = "http://mixed-capon.biz";
                                            width = 392676;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 147014;
                                            uri = "https://cumbersome-community.com";
                                            width = 903984;
                                        }}),
                                    }};
                                    languageCode = "occaecati";
                                    materials = new String[]{{
                                        add("et"),
                                        add("esse"),
                                        add("eveniet"),
                                    }};
                                    name = "Patrick Koch";
                                    patterns = new String[]{{
                                        add("aliquid"),
                                        add("quasi"),
                                        add("saepe"),
                                        add("vel"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                        cost = 6900.25;
                                        currencyCode = "molestiae";
                                        originalPrice = 6996.22;
                                        price = 5801.97;
                                        priceEffectiveTime = "minima";
                                        priceExpireTime = "distinctio";
                                        priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 7567.79;
                                                exclusiveMinimum = 270.69;
                                                maximum = 6360.61;
                                                minimum = 7313.98;
                                            }};
                                            price = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 2400.2;
                                                exclusiveMinimum = 7669.64;
                                                maximum = 1605.38;
                                                minimum = 97.66;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "minus";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "sapiente";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "consectetur";
                                        }}),
                                    }};
                                    publishTime = "esse";
                                    rating = new GoogleCloudRetailV2alphaRating() {{
                                        averageRating = 5034.27;
                                        ratingCount = 590984;
                                        ratingHistogram = new Integer[]{{
                                            add(857723),
                                            add(557811),
                                            add(457223),
                                            add(97468),
                                        }};
                                    }};
                                    retrievableFields = "a";
                                    sizes = new String[]{{
                                        add("sint"),
                                        add("pariatur"),
                                        add("possimus"),
                                    }};
                                    tags = new String[]{{
                                        add("eveniet"),
                                    }};
                                    title = "Dr.";
                                    ttl = "facere";
                                    type = GoogleCloudRetailV2alphaProductTypeEnum.TYPE_UNSPECIFIED;
                                    uri = "http://brown-panpipe.name";
                                }}),
                                add(new GoogleCloudRetailV2alphaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                        put("tenetur", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(9367.47),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("in"),
                                                add("eius"),
                                            }};
                                        }});
                                        put("libero", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(7422.38),
                                                add(333.04),
                                                add(3069.86),
                                                add(9589.83),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("ullam"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2alphaAudience() {{
                                        ageGroups = new String[]{{
                                            add("ullam"),
                                            add("nisi"),
                                        }};
                                        genders = new String[]{{
                                            add("voluptatum"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.AVAILABILITY_UNSPECIFIED;
                                    availableQuantity = 845358;
                                    availableTime = "ex";
                                    brands = new String[]{{
                                        add("itaque"),
                                        add("dolorum"),
                                        add("architecto"),
                                    }};
                                    categories = new String[]{{
                                        add("tenetur"),
                                        add("quasi"),
                                        add("at"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("voluptate"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("minima"),
                                        }};
                                        colors = new String[]{{
                                            add("consectetur"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("iste"),
                                    }};
                                    description = "temporibus";
                                    expireTime = "accusantium";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("laudantium"),
                                            }};
                                            type = "eum";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("ab"),
                                                add("corrupti"),
                                                add("non"),
                                            }};
                                            type = "voluptatem";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("occaecati"),
                                            }};
                                            type = "numquam";
                                        }}),
                                    }};
                                    gtin = "impedit";
                                    id = "26071f93-f5f0-4642-9ac7-af515cc413aa";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 246063;
                                            uri = "https://quaint-trek.name";
                                            width = 853940;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 424089;
                                            uri = "http://mysterious-highway.biz";
                                            width = 822560;
                                        }}),
                                    }};
                                    languageCode = "facilis";
                                    materials = new String[]{{
                                        add("commodi"),
                                        add("in"),
                                        add("corporis"),
                                    }};
                                    name = "Mack Hettinger";
                                    patterns = new String[]{{
                                        add("cum"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                        cost = 2326.27;
                                        currencyCode = "in";
                                        originalPrice = 3485.19;
                                        price = 9372.85;
                                        priceEffectiveTime = "facere";
                                        priceExpireTime = "numquam";
                                        priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 9854.92;
                                                exclusiveMinimum = 3817.6;
                                                maximum = 9689.72;
                                                minimum = 6971.42;
                                            }};
                                            price = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 9049.49;
                                                exclusiveMinimum = 8970.71;
                                                maximum = 2965.56;
                                                minimum = 1210.59;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "asperiores";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "non";
                                        }}),
                                    }};
                                    publishTime = "amet";
                                    rating = new GoogleCloudRetailV2alphaRating() {{
                                        averageRating = 1059.06;
                                        ratingCount = 489509;
                                        ratingHistogram = new Integer[]{{
                                            add(891523),
                                            add(233420),
                                            add(358107),
                                            add(689768),
                                        }};
                                    }};
                                    retrievableFields = "laboriosam";
                                    sizes = new String[]{{
                                        add("voluptates"),
                                    }};
                                    tags = new String[]{{
                                        add("vitae"),
                                        add("accusamus"),
                                        add("similique"),
                                    }};
                                    title = "Mrs.";
                                    ttl = "aspernatur";
                                    type = GoogleCloudRetailV2alphaProductTypeEnum.PRIMARY;
                                    uri = "http://hasty-exocrine.net";
                                }}),
                                add(new GoogleCloudRetailV2alphaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                        put("adipisci", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(1718.53),
                                                add(5039.34),
                                                add(4492.92),
                                                add(2962.42),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("officiis"),
                                                add("temporibus"),
                                            }};
                                        }});
                                        put("ullam", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(7383.91),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("quas"),
                                                add("hic"),
                                                add("nesciunt"),
                                            }};
                                        }});
                                        put("culpa", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(8672.9),
                                                add(5196.43),
                                                add(9402.1),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("nobis"),
                                                add("sit"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2alphaAudience() {{
                                        ageGroups = new String[]{{
                                            add("sed"),
                                            add("reiciendis"),
                                            add("explicabo"),
                                        }};
                                        genders = new String[]{{
                                            add("facilis"),
                                            add("voluptate"),
                                            add("expedita"),
                                            add("ab"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.PREORDER;
                                    availableQuantity = 292794;
                                    availableTime = "laborum";
                                    brands = new String[]{{
                                        add("in"),
                                    }};
                                    categories = new String[]{{
                                        add("quidem"),
                                        add("explicabo"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("unde"),
                                        add("architecto"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("sapiente"),
                                            add("debitis"),
                                        }};
                                        colors = new String[]{{
                                            add("reiciendis"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("corrupti"),
                                    }};
                                    description = "maiores";
                                    expireTime = "incidunt";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("eius"),
                                                add("necessitatibus"),
                                                add("ipsum"),
                                            }};
                                            type = "ea";
                                        }}),
                                    }};
                                    gtin = "occaecati";
                                    id = "8f447f60-3e8b-4445-a80c-a55efd20e457";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 104627;
                                            uri = "https://gray-libido.net";
                                            width = 386827;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 680515;
                                            uri = "https://phony-use.net";
                                            width = 892863;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 204923;
                                            uri = "https://good-natured-pate.net";
                                            width = 548361;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 879235;
                                            uri = "http://monthly-chapter.biz";
                                            width = 856303;
                                        }}),
                                    }};
                                    languageCode = "voluptatem";
                                    materials = new String[]{{
                                        add("expedita"),
                                        add("magnam"),
                                        add("consequatur"),
                                    }};
                                    name = "Brittany Bailey";
                                    patterns = new String[]{{
                                        add("corporis"),
                                        add("et"),
                                        add("blanditiis"),
                                        add("ex"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                        cost = 1536.27;
                                        currencyCode = "sit";
                                        originalPrice = 4255.08;
                                        price = 3426.11;
                                        priceEffectiveTime = "saepe";
                                        priceExpireTime = "error";
                                        priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 85.11;
                                                exclusiveMinimum = 2790.68;
                                                maximum = 9688.65;
                                                minimum = 2097.5;
                                            }};
                                            price = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 6908.94;
                                                exclusiveMinimum = 1157.03;
                                                maximum = 994.16;
                                                minimum = 5771.4;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "labore";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "atque";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "laborum";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "nam";
                                        }}),
                                    }};
                                    publishTime = "tenetur";
                                    rating = new GoogleCloudRetailV2alphaRating() {{
                                        averageRating = 3888.67;
                                        ratingCount = 2703;
                                        ratingHistogram = new Integer[]{{
                                            add(647197),
                                        }};
                                    }};
                                    retrievableFields = "voluptate";
                                    sizes = new String[]{{
                                        add("reiciendis"),
                                        add("provident"),
                                        add("repellendus"),
                                    }};
                                    tags = new String[]{{
                                        add("voluptates"),
                                        add("perferendis"),
                                        add("est"),
                                        add("quidem"),
                                    }};
                                    title = "Ms.";
                                    ttl = "facere";
                                    type = GoogleCloudRetailV2alphaProductTypeEnum.VARIANT;
                                    uri = "https://pricey-fang.com";
                                }}),
                            }};
                        }};;
                    }};;
                    notificationPubsubTopic = "quisquam";
                    reconciliationMode = GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum.FULL;
                    requestId = "quasi";
                    skipDefaultBranchProtection = false;
                    updateMask = "atque";
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "suscipit";
                key = "quidem";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "esse";
                uploadProtocol = "amet";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsImportResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsImport(req, new RetailProjectsLocationsCatalogsBranchesProductsImportSecurity("assumenda", "ea") {{
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

            RetailProjectsLocationsCatalogsBranchesProductsListRequest req = new RetailProjectsLocationsCatalogsBranchesProductsListRequest("atque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "natus";
                filter = "minima";
                key = "aspernatur";
                oauthToken = "ex";
                pageSize = 980581L;
                pageToken = "corrupti";
                prettyPrint = false;
                quotaUser = "at";
                readMask = "error";
                requireTotalSize = false;
                uploadType = "blanditiis";
                uploadProtocol = "suscipit";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsListResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsList(req, new RetailProjectsLocationsCatalogsBranchesProductsListSecurity("repudiandae", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaListProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsBranchesProductsPurge

Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsPurgeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsPurgeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsBranchesProductsPurgeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPurgeProductsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsPurgeRequest req = new RetailProjectsLocationsCatalogsBranchesProductsPurgeRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaPurgeProductsRequest = new GoogleCloudRetailV2alphaPurgeProductsRequest() {{
                    filter = "recusandae";
                    force = false;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "reiciendis";
                key = "doloremque";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "accusantium";
                uploadProtocol = "beatae";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsPurgeResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsPurge(req, new RetailProjectsLocationsCatalogsBranchesProductsPurgeSecurity("dolores", "enim") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaRemoveFulfillmentPlacesRequest = new GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest() {{
                    allowMissing = false;
                    placeIds = new String[]{{
                        add("molestias"),
                        add("magnam"),
                        add("saepe"),
                        add("consequuntur"),
                    }};
                    removeTime = "occaecati";
                    type = "officiis";
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "eveniet";
                key = "occaecati";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "id";
                uploadProtocol = "quis";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces(req, new RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity("reprehenderit", "error") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest req = new RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest("illo") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaRemoveLocalInventoriesRequest = new GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest() {{
                    allowMissing = false;
                    placeIds = new String[]{{
                        add("eveniet"),
                        add("non"),
                        add("vero"),
                    }};
                    removeTime = "doloremque";
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "totam";
                fields = "quae";
                key = "molestiae";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "cum";
                uploadProtocol = "iure";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories(req, new RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity("necessitatibus", "ratione") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSetInventoryRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest req = new RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaSetInventoryRequestInput = new GoogleCloudRetailV2alphaSetInventoryRequestInput() {{
                    allowMissing = false;
                    inventory = new GoogleCloudRetailV2alphaProductInput() {{
                        attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                            put("rem", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(3205.65),
                                    add(9979.63),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("corporis"),
                                }};
                            }});
                            put("perspiciatis", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(6490.78),
                                    add(3782.45),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("maiores"),
                                }};
                            }});
                            put("reiciendis", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(6638.66),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("dolore"),
                                    add("dolorum"),
                                }};
                            }});
                        }};
                        audience = new GoogleCloudRetailV2alphaAudience() {{
                            ageGroups = new String[]{{
                                add("quae"),
                            }};
                            genders = new String[]{{
                                add("omnis"),
                                add("quaerat"),
                                add("molestiae"),
                                add("ex"),
                            }};
                        }};;
                        availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.IN_STOCK;
                        availableQuantity = 633062;
                        availableTime = "adipisci";
                        brands = new String[]{{
                            add("laudantium"),
                            add("eum"),
                            add("nemo"),
                            add("recusandae"),
                        }};
                        categories = new String[]{{
                            add("provident"),
                            add("quis"),
                        }};
                        collectionMemberIds = new String[]{{
                            add("reiciendis"),
                            add("provident"),
                        }};
                        colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                            colorFamilies = new String[]{{
                                add("ullam"),
                            }};
                            colors = new String[]{{
                                add("animi"),
                            }};
                        }};;
                        conditions = new String[]{{
                            add("mollitia"),
                            add("provident"),
                        }};
                        description = "possimus";
                        expireTime = "animi";
                        fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                            add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                placeIds = new String[]{{
                                    add("accusantium"),
                                    add("repellat"),
                                }};
                                type = "doloribus";
                            }}),
                            add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                placeIds = new String[]{{
                                    add("in"),
                                    add("nam"),
                                }};
                                type = "earum";
                            }}),
                        }};
                        gtin = "officia";
                        id = "ad4f9efc-1b45-412c-9032-648dc2f61519";
                        images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                            add(new GoogleCloudRetailV2alphaImage() {{
                                height = 936469;
                                uri = "https://warlike-station.com";
                                width = 935833;
                            }}),
                            add(new GoogleCloudRetailV2alphaImage() {{
                                height = 596211;
                                uri = "https://unique-great-grandmother.net";
                                width = 380335;
                            }}),
                            add(new GoogleCloudRetailV2alphaImage() {{
                                height = 211534;
                                uri = "http://slushy-praise.biz";
                                width = 656762;
                            }}),
                        }};
                        languageCode = "necessitatibus";
                        materials = new String[]{{
                            add("consequatur"),
                            add("quasi"),
                            add("et"),
                            add("ducimus"),
                        }};
                        name = "Tracy Homenick Sr.";
                        patterns = new String[]{{
                            add("nulla"),
                            add("necessitatibus"),
                            add("ipsa"),
                            add("tempora"),
                        }};
                        priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                            cost = 4706.21;
                            currencyCode = "molestiae";
                            originalPrice = 1158.34;
                            price = 4797.54;
                            priceEffectiveTime = "esse";
                            priceExpireTime = "praesentium";
                            priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                    exclusiveMaximum = 9799.63;
                                    exclusiveMinimum = 9672.6;
                                    maximum = 4237.06;
                                    minimum = 999.58;
                                }};;
                                price = new GoogleCloudRetailV2alphaInterval() {{
                                    exclusiveMaximum = 8571.25;
                                    exclusiveMinimum = 396.5;
                                    maximum = 1173.15;
                                    minimum = 4837.06;
                                }};;
                            }};;
                        }};;
                        primaryProductId = "tempora";
                        promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                            add(new GoogleCloudRetailV2alphaPromotion() {{
                                promotionId = "ex";
                            }}),
                            add(new GoogleCloudRetailV2alphaPromotion() {{
                                promotionId = "consectetur";
                            }}),
                        }};
                        publishTime = "aliquid";
                        rating = new GoogleCloudRetailV2alphaRating() {{
                            averageRating = 588.7;
                            ratingCount = 671384;
                            ratingHistogram = new Integer[]{{
                                add(344718),
                            }};
                        }};;
                        retrievableFields = "fugiat";
                        sizes = new String[]{{
                            add("aliquid"),
                            add("officia"),
                            add("suscipit"),
                        }};
                        tags = new String[]{{
                            add("perferendis"),
                            add("eum"),
                        }};
                        title = "Mrs.";
                        ttl = "iste";
                        type = GoogleCloudRetailV2alphaProductTypeEnum.VARIANT;
                        uri = "http://pitiful-sofa.org";
                    }};;
                    setMask = "mollitia";
                    setTime = "laborum";
                }};;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "enim";
                key = "vitae";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "quo";
                uploadProtocol = "ex";
            }};            

            RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse res = sdk.projects.retailProjectsLocationsCatalogsBranchesProductsSetInventory(req, new RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity("ut", "ad") {{
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

            RetailProjectsLocationsCatalogsCompleteQueryRequest req = new RetailProjectsLocationsCatalogsCompleteQueryRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                dataset = "beatae";
                deviceType = "voluptatum";
                enableAttributeSuggestions = false;
                entity = "omnis";
                fields = "veritatis";
                key = "rerum";
                languageCodes = new String[]{{
                    add("culpa"),
                    add("voluptatem"),
                    add("sapiente"),
                }};
                maxSuggestions = 889288L;
                oauthToken = "architecto";
                prettyPrint = false;
                query = "fuga";
                quotaUser = "pariatur";
                uploadType = "debitis";
                uploadProtocol = "voluptatem";
                visitorId = "alias";
            }};            

            RetailProjectsLocationsCatalogsCompleteQueryResponse res = sdk.projects.retailProjectsLocationsCatalogsCompleteQuery(req, new RetailProjectsLocationsCatalogsCompleteQuerySecurity("deleniti", "earum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaCompleteQueryResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaBigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCompletionDataInputConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImportCompletionDataRequest;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsCompletionDataImportRequest req = new RetailProjectsLocationsCatalogsCompletionDataImportRequest("ex") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaImportCompletionDataRequest = new GoogleCloudRetailV2alphaImportCompletionDataRequest() {{
                    inputConfig = new GoogleCloudRetailV2alphaCompletionDataInputConfig() {{
                        bigQuerySource = new GoogleCloudRetailV2alphaBigQuerySource() {{
                            dataSchema = "rem";
                            datasetId = "minus";
                            gcsStagingDir = "nemo";
                            partitionDate = new GoogleTypeDate() {{
                                day = 992074;
                                month = 190567;
                                year = 355225;
                            }};;
                            projectId = "perferendis";
                            tableId = "illum";
                        }};;
                    }};;
                    notificationPubsubTopic = "totam";
                }};;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "ipsam";
                key = "culpa";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "inventore";
                uploadProtocol = "deleniti";
            }};            

            RetailProjectsLocationsCatalogsCompletionDataImportResponse res = sdk.projects.retailProjectsLocationsCatalogsCompletionDataImport(req, new RetailProjectsLocationsCatalogsCompletionDataImportSecurity("veritatis", "tempora") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCondition;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaConditionQueryTerm;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaConditionTimeRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaControlInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaControlSolutionTypesEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRule;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRuleBoostAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRuleDoNotAssociateAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRuleFilterAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRuleIgnoreAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRuleOnewaySynonymsAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRuleRedirectAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRuleReplacementAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRuleTwowaySynonymsAction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsControlsCreateRequest req = new RetailProjectsLocationsCatalogsControlsCreateRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaControlInput = new GoogleCloudRetailV2alphaControlInput() {{
                    displayName = "architecto";
                    facetSpec = new GoogleCloudRetailV2alphaSearchRequestFacetSpec() {{
                        enableDynamicPosition = false;
                        excludedFilterKeys = new String[]{{
                            add("modi"),
                        }};
                        facetKey = new GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey() {{
                            caseInsensitive = false;
                            contains = new String[]{{
                                add("ab"),
                            }};
                            intervals = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval[]{{
                                add(new GoogleCloudRetailV2alphaInterval() {{
                                    exclusiveMaximum = 656.04;
                                    exclusiveMinimum = 2226.58;
                                    maximum = 8562.77;
                                    minimum = 3694.9;
                                }}),
                                add(new GoogleCloudRetailV2alphaInterval() {{
                                    exclusiveMaximum = 1621.2;
                                    exclusiveMinimum = 551.07;
                                    maximum = 5596.82;
                                    minimum = 9111.98;
                                }}),
                                add(new GoogleCloudRetailV2alphaInterval() {{
                                    exclusiveMaximum = 7734.56;
                                    exclusiveMinimum = 8849.52;
                                    maximum = 4564.1;
                                    minimum = 8972.77;
                                }}),
                            }};
                            key = "sed";
                            orderBy = "veniam";
                            prefixes = new String[]{{
                                add("expedita"),
                            }};
                            query = "eum";
                            restrictedValues = new String[]{{
                                add("voluptatum"),
                                add("magnam"),
                            }};
                            returnMinMax = false;
                        }};;
                        limit = 349440;
                    }};;
                    name = "Johnnie Jones";
                    rule = new GoogleCloudRetailV2alphaRule() {{
                        boostAction = new GoogleCloudRetailV2alphaRuleBoostAction() {{
                            boost = 9272.12;
                            productsFilter = "consequuntur";
                        }};;
                        condition = new GoogleCloudRetailV2alphaCondition() {{
                            activeTimeRange = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaConditionTimeRange[]{{
                                add(new GoogleCloudRetailV2alphaConditionTimeRange() {{
                                    endTime = "exercitationem";
                                    startTime = "necessitatibus";
                                }}),
                            }};
                            queryTerms = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaConditionQueryTerm[]{{
                                add(new GoogleCloudRetailV2alphaConditionQueryTerm() {{
                                    fullMatch = false;
                                    value = "nisi";
                                }}),
                            }};
                        }};;
                        doNotAssociateAction = new GoogleCloudRetailV2alphaRuleDoNotAssociateAction() {{
                            doNotAssociateTerms = new String[]{{
                                add("vero"),
                                add("est"),
                                add("harum"),
                                add("sequi"),
                            }};
                            queryTerms = new String[]{{
                                add("repudiandae"),
                                add("optio"),
                                add("occaecati"),
                                add("nemo"),
                            }};
                            terms = new String[]{{
                                add("blanditiis"),
                                add("officia"),
                            }};
                        }};;
                        filterAction = new GoogleCloudRetailV2alphaRuleFilterAction() {{
                            filter = "voluptas";
                        }};;
                        ignoreAction = new GoogleCloudRetailV2alphaRuleIgnoreAction() {{
                            ignoreTerms = new String[]{{
                                add("nemo"),
                                add("quos"),
                            }};
                        }};;
                        onewaySynonymsAction = new GoogleCloudRetailV2alphaRuleOnewaySynonymsAction() {{
                            onewayTerms = new String[]{{
                                add("aspernatur"),
                                add("ducimus"),
                            }};
                            queryTerms = new String[]{{
                                add("fuga"),
                            }};
                            synonyms = new String[]{{
                                add("incidunt"),
                                add("quasi"),
                                add("rem"),
                            }};
                        }};;
                        redirectAction = new GoogleCloudRetailV2alphaRuleRedirectAction() {{
                            redirectUri = "fugiat";
                        }};;
                        replacementAction = new GoogleCloudRetailV2alphaRuleReplacementAction() {{
                            queryTerms = new String[]{{
                                add("nisi"),
                            }};
                            replacementTerm = "consequuntur";
                            term = "consectetur";
                        }};;
                        twowaySynonymsAction = new GoogleCloudRetailV2alphaRuleTwowaySynonymsAction() {{
                            synonyms = new String[]{{
                                add("cupiditate"),
                            }};
                        }};;
                    }};;
                    searchSolutionUseCase = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum[]{{
                        add(GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum.SEARCH_SOLUTION_USE_CASE_BROWSE),
                        add(GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum.SEARCH_SOLUTION_USE_CASE_UNSPECIFIED),
                        add(GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum.SEARCH_SOLUTION_USE_CASE_SEARCH),
                        add(GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum.SEARCH_SOLUTION_USE_CASE_UNSPECIFIED),
                    }};
                    solutionTypes = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaControlSolutionTypesEnum[]{{
                        add(GoogleCloudRetailV2alphaControlSolutionTypesEnum.SOLUTION_TYPE_RECOMMENDATION),
                        add(GoogleCloudRetailV2alphaControlSolutionTypesEnum.SOLUTION_TYPE_UNSPECIFIED),
                        add(GoogleCloudRetailV2alphaControlSolutionTypesEnum.SOLUTION_TYPE_UNSPECIFIED),
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                controlId = "distinctio";
                fields = "omnis";
                key = "delectus";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "maxime";
                uploadProtocol = "magnam";
            }};            

            RetailProjectsLocationsCatalogsControlsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsControlsCreate(req, new RetailProjectsLocationsCatalogsControlsCreateSecurity("temporibus", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaControl != null) {
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

            RetailProjectsLocationsCatalogsControlsListRequest req = new RetailProjectsLocationsCatalogsControlsListRequest("commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "modi";
                filter = "nam";
                key = "vero";
                oauthToken = "voluptatem";
                pageSize = 371919L;
                pageToken = "vel";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "quasi";
                uploadProtocol = "non";
            }};            

            RetailProjectsLocationsCatalogsControlsListResponse res = sdk.projects.retailProjectsLocationsCatalogsControlsList(req, new RetailProjectsLocationsCatalogsControlsListSecurity("maiores", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaListControlsResponse != null) {
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

            RetailProjectsLocationsCatalogsGetDefaultBranchRequest req = new RetailProjectsLocationsCatalogsGetDefaultBranchRequest("sint") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "reprehenderit";
                key = "est";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "accusamus";
                uploadProtocol = "impedit";
            }};            

            RetailProjectsLocationsCatalogsGetDefaultBranchResponse res = sdk.projects.retailProjectsLocationsCatalogsGetDefaultBranch(req, new RetailProjectsLocationsCatalogsGetDefaultBranchSecurity("hic", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaGetDefaultBranchResponse != null) {
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

            RetailProjectsLocationsCatalogsListRequest req = new RetailProjectsLocationsCatalogsListRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "quae";
                key = "minus";
                oauthToken = "fuga";
                pageSize = 675689L;
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "atque";
                uploadProtocol = "ipsum";
            }};            

            RetailProjectsLocationsCatalogsListResponse res = sdk.projects.retailProjectsLocationsCatalogsList(req, new RetailProjectsLocationsCatalogsListSecurity("impedit", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaListCatalogsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retailProjectsLocationsCatalogsMerchantCenterAccountLinksCreate

Creates a MerchantCenterAccountLink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaMerchantCenterAccountLinkInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateRequest req = new RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaMerchantCenterAccountLinkInput = new GoogleCloudRetailV2alphaMerchantCenterAccountLinkInput() {{
                    branchId = "nam";
                    feedFilters = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter[]{{
                        add(new GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter() {{
                            primaryFeedId = "iusto";
                            primaryFeedName = "voluptate";
                        }}),
                        add(new GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter() {{
                            primaryFeedId = "sequi";
                            primaryFeedName = "dignissimos";
                        }}),
                    }};
                    feedLabel = "neque";
                    languageCode = "quo";
                    merchantCenterAccountId = "deleniti";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "voluptatibus";
                key = "vel";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "inventore";
                uploadProtocol = "facere";
            }};            

            RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsMerchantCenterAccountLinksCreate(req, new RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateSecurity("libero", "architecto") {{
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

## retailProjectsLocationsCatalogsMerchantCenterAccountLinksList

Lists all MerchantCenterAccountLinks under the specified parent Catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListRequest req = new RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "illo";
                key = "accusantium";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "beatae";
                uploadProtocol = "vero";
            }};            

            RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListResponse res = sdk.projects.retailProjectsLocationsCatalogsMerchantCenterAccountLinksList(req, new RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListSecurity("excepturi", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaListMerchantCenterAccountLinksResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelFilteringOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelModelFeaturesConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelPageOptimizationConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelTrainingStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsModelsCreateRequest req = new RetailProjectsLocationsCatalogsModelsCreateRequest("velit") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaModelInput = new GoogleCloudRetailV2alphaModelInput() {{
                    displayName = "perspiciatis";
                    filteringOption = GoogleCloudRetailV2alphaModelFilteringOptionEnum.RECOMMENDATIONS_FILTERING_ENABLED;
                    modelFeaturesConfig = new GoogleCloudRetailV2alphaModelModelFeaturesConfig() {{
                        frequentlyBoughtTogetherConfig = new GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfig() {{
                            contextProductsType = GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnum.CONTEXT_PRODUCTS_TYPE_UNSPECIFIED;
                        }};;
                    }};;
                    name = "Courtney Monahan III";
                    optimizationObjective = "itaque";
                    pageOptimizationConfig = new GoogleCloudRetailV2alphaModelPageOptimizationConfig() {{
                        pageOptimizationEventType = "velit";
                        panels = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel[]{{
                            add(new GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel() {{
                                candidates = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate[]{{
                                    add(new GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate() {{
                                        servingConfigId = "dolor";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate() {{
                                        servingConfigId = "iusto";
                                    }}),
                                }};
                                defaultCandidate = new GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate() {{
                                    servingConfigId = "sit";
                                }};
                                displayName = "doloremque";
                            }}),
                            add(new GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel() {{
                                candidates = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate[]{{
                                    add(new GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate() {{
                                        servingConfigId = "officia";
                                    }}),
                                }};
                                defaultCandidate = new GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate() {{
                                    servingConfigId = "recusandae";
                                }};
                                displayName = "ea";
                            }}),
                            add(new GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel() {{
                                candidates = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate[]{{
                                    add(new GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate() {{
                                        servingConfigId = "voluptas";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate() {{
                                        servingConfigId = "facilis";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate() {{
                                        servingConfigId = "placeat";
                                    }}),
                                }};
                                defaultCandidate = new GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate() {{
                                    servingConfigId = "perspiciatis";
                                }};
                                displayName = "expedita";
                            }}),
                        }};
                        restriction = GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum.UNIQUE_SERVING_CONFIG_RESTRICTION;
                    }};;
                    periodicTuningState = GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum.PERIODIC_TUNING_ENABLED;
                    trainingState = GoogleCloudRetailV2alphaModelTrainingStateEnum.PAUSED;
                    type = "ullam";
                }};;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "animi";
                dryRun = false;
                fields = "impedit";
                key = "ipsam";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "error";
                uploadProtocol = "esse";
            }};            

            RetailProjectsLocationsCatalogsModelsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsCreate(req, new RetailProjectsLocationsCatalogsModelsCreateSecurity("labore", "veritatis") {{
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

            RetailProjectsLocationsCatalogsModelsListRequest req = new RetailProjectsLocationsCatalogsModelsListRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "ad";
                key = "qui";
                oauthToken = "iste";
                pageSize = 403026L;
                pageToken = "nemo";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "libero";
                uploadProtocol = "rem";
            }};            

            RetailProjectsLocationsCatalogsModelsListResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsList(req, new RetailProjectsLocationsCatalogsModelsListSecurity("dolorum", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaListModelsResponse != null) {
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

            RetailProjectsLocationsCatalogsModelsPauseRequest req = new RetailProjectsLocationsCatalogsModelsPauseRequest("fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("vel", "quae");
                }};
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "exercitationem";
                key = "itaque";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "unde";
                uploadProtocol = "nulla";
            }};            

            RetailProjectsLocationsCatalogsModelsPauseResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsPause(req, new RetailProjectsLocationsCatalogsModelsPauseSecurity("distinctio", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaModel != null) {
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

            RetailProjectsLocationsCatalogsModelsResumeRequest req = new RetailProjectsLocationsCatalogsModelsResumeRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("omnis", "libero");
                    put("dicta", "id");
                }};
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "quos";
                key = "placeat";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "ipsa";
                uploadProtocol = "voluptates";
            }};            

            RetailProjectsLocationsCatalogsModelsResumeResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsResume(req, new RetailProjectsLocationsCatalogsModelsResumeSecurity("inventore", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaModel != null) {
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

            RetailProjectsLocationsCatalogsModelsTuneRequest req = new RetailProjectsLocationsCatalogsModelsTuneRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "voluptatem");
                    put("autem", "esse");
                    put("dolores", "assumenda");
                    put("beatae", "est");
                }};
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "provident";
                key = "accusamus";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "sint";
                uploadProtocol = "ea";
            }};            

            RetailProjectsLocationsCatalogsModelsTuneResponse res = sdk.projects.retailProjectsLocationsCatalogsModelsTune(req, new RetailProjectsLocationsCatalogsModelsTuneSecurity("autem", "ipsam") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAddControlRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsAddControlRequest req = new RetailProjectsLocationsCatalogsServingConfigsAddControlRequest("rerum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaAddControlRequest = new GoogleCloudRetailV2alphaAddControlRequest() {{
                    controlId = "corporis";
                }};;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "at";
                key = "alias";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "fuga";
                uploadProtocol = "repudiandae";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsAddControlResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsAddControl(req, new RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity("accusantium", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaServingConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaServingConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsCreateRequest req = new RetailProjectsLocationsCatalogsServingConfigsCreateRequest("officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaServingConfig = new GoogleCloudRetailV2alphaServingConfig() {{
                    boostControlIds = new String[]{{
                        add("odio"),
                        add("praesentium"),
                        add("odit"),
                        add("explicabo"),
                    }};
                    displayName = "corporis";
                    diversityLevel = "error";
                    diversityType = GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum.DATA_DRIVEN_DIVERSITY;
                    doNotAssociateControlIds = new String[]{{
                        add("recusandae"),
                    }};
                    dynamicFacetSpec = new GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec() {{
                        mode = GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum.DISABLED;
                    }};;
                    enableCategoryFilterLevel = "ut";
                    facetControlIds = new String[]{{
                        add("quis"),
                        add("beatae"),
                        add("unde"),
                    }};
                    filterControlIds = new String[]{{
                        add("delectus"),
                        add("cupiditate"),
                    }};
                    ignoreControlIds = new String[]{{
                        add("numquam"),
                    }};
                    modelId = "numquam";
                    name = "Cristina Nienow";
                    onewaySynonymsControlIds = new String[]{{
                        add("corporis"),
                        add("qui"),
                        add("expedita"),
                        add("voluptatum"),
                    }};
                    personalizationSpec = new GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec() {{
                        mode = GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum.AUTO;
                    }};;
                    priceRerankingLevel = "minima";
                    redirectControlIds = new String[]{{
                        add("enim"),
                        add("neque"),
                        add("in"),
                        add("minus"),
                    }};
                    replacementControlIds = new String[]{{
                        add("modi"),
                        add("corporis"),
                    }};
                    solutionTypes = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum[]{{
                        add(GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum.SOLUTION_TYPE_SEARCH),
                        add(GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum.SOLUTION_TYPE_SEARCH),
                    }};
                    twowaySynonymsControlIds = new String[]{{
                        add("aperiam"),
                        add("libero"),
                        add("ratione"),
                    }};
                }};;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "voluptas";
                key = "quo";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "minus";
                servingConfigId = "fuga";
                uploadType = "nostrum";
                uploadProtocol = "est";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsCreateResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsCreate(req, new RetailProjectsLocationsCatalogsServingConfigsCreateSecurity("impedit", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaServingConfig != null) {
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

            RetailProjectsLocationsCatalogsServingConfigsDeleteRequest req = new RetailProjectsLocationsCatalogsServingConfigsDeleteRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "nemo";
                force = false;
                key = "reprehenderit";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "minima";
                uploadProtocol = "in";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsDeleteResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsDelete(req, new RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity("ducimus", "excepturi") {{
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

            RetailProjectsLocationsCatalogsServingConfigsListRequest req = new RetailProjectsLocationsCatalogsServingConfigsListRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "pariatur";
                key = "itaque";
                oauthToken = "similique";
                pageSize = 763165L;
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "commodi";
                uploadProtocol = "officiis";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsListResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsList(req, new RetailProjectsLocationsCatalogsServingConfigsListSecurity("placeat", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaListServingConfigsResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaServingConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsPatchRequest req = new RetailProjectsLocationsCatalogsServingConfigsPatchRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaServingConfig = new GoogleCloudRetailV2alphaServingConfig() {{
                    boostControlIds = new String[]{{
                        add("modi"),
                    }};
                    displayName = "ipsa";
                    diversityLevel = "sint";
                    diversityType = GoogleCloudRetailV2alphaServingConfigDiversityTypeEnum.DATA_DRIVEN_DIVERSITY;
                    doNotAssociateControlIds = new String[]{{
                        add("repudiandae"),
                    }};
                    dynamicFacetSpec = new GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec() {{
                        mode = GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum.ENABLED;
                    }};;
                    enableCategoryFilterLevel = "dicta";
                    facetControlIds = new String[]{{
                        add("veniam"),
                        add("animi"),
                        add("dolores"),
                        add("nam"),
                    }};
                    filterControlIds = new String[]{{
                        add("consequuntur"),
                    }};
                    ignoreControlIds = new String[]{{
                        add("nobis"),
                        add("ipsa"),
                        add("ducimus"),
                        add("maiores"),
                    }};
                    modelId = "veritatis";
                    name = "Kristen Stracke";
                    onewaySynonymsControlIds = new String[]{{
                        add("nemo"),
                        add("aliquam"),
                        add("nostrum"),
                    }};
                    personalizationSpec = new GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec() {{
                        mode = GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum.DISABLED;
                    }};;
                    priceRerankingLevel = "eligendi";
                    redirectControlIds = new String[]{{
                        add("enim"),
                        add("hic"),
                        add("animi"),
                    }};
                    replacementControlIds = new String[]{{
                        add("totam"),
                        add("molestias"),
                        add("odio"),
                    }};
                    solutionTypes = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum[]{{
                        add(GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum.SOLUTION_TYPE_SEARCH),
                    }};
                    twowaySynonymsControlIds = new String[]{{
                        add("quos"),
                    }};
                }};;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "libero";
                key = "velit";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "delectus";
                updateMask = "impedit";
                uploadType = "cum";
                uploadProtocol = "ipsum";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsPatchResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsPatch(req, new RetailProjectsLocationsCatalogsServingConfigsPatchSecurity("adipisci", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaServingConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCompletionDetail;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPredictRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductDetailInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaUserEventInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaUserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsPredictRequest req = new RetailProjectsLocationsCatalogsServingConfigsPredictRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaPredictRequestInput = new GoogleCloudRetailV2alphaPredictRequestInput() {{
                    filter = "quis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("libero", "architecto");
                        put("cupiditate", "molestiae");
                    }};
                    pageSize = 756654;
                    pageToken = "possimus";
                    params = new java.util.HashMap<String, Object>() {{
                        put("magnam", "itaque");
                        put("sed", "asperiores");
                    }};
                    userEvent = new GoogleCloudRetailV2alphaUserEventInput() {{
                        attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                            put("consequuntur", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(5129.05),
                                    add(1403.84),
                                    add(8634.77),
                                    add(2273.62),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("ab"),
                                    add("velit"),
                                }};
                            }});
                            put("facilis", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                indexable = false;
                                numbers = new Double[]{{
                                    add(3952.33),
                                    add(9775.18),
                                    add(3108.4),
                                }};
                                searchable = false;
                                text = new String[]{{
                                    add("distinctio"),
                                    add("nisi"),
                                    add("quis"),
                                }};
                            }});
                        }};
                        attributionToken = "nisi";
                        cartId = "libero";
                        completionDetail = new GoogleCloudRetailV2alphaCompletionDetail() {{
                            completionAttributionToken = "minus";
                            selectedPosition = 815200;
                            selectedSuggestion = "facilis";
                        }};;
                        entity = "ipsum";
                        eventTime = "ad";
                        eventType = "voluptatibus";
                        experimentIds = new String[]{{
                            add("consequuntur"),
                            add("debitis"),
                            add("labore"),
                            add("rerum"),
                        }};
                        filter = "eos";
                        offset = 440777;
                        orderBy = "nostrum";
                        pageCategories = new String[]{{
                            add("iusto"),
                        }};
                        pageViewId = "est";
                        productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductDetailInput[]{{
                            add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                product = new GoogleCloudRetailV2alphaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                        put("fugiat", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(8894.48),
                                                add(4956.17),
                                                add(2201.04),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("error"),
                                            }};
                                        }});
                                        put("porro", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(4915.91),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("fugiat"),
                                                add("ad"),
                                            }};
                                        }});
                                        put("aspernatur", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(9650.9),
                                                add(4825.84),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("libero"),
                                                add("illo"),
                                            }};
                                        }});
                                        put("ab", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(8791.74),
                                                add(9025.81),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("veniam"),
                                                add("eos"),
                                                add("reiciendis"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2alphaAudience() {{
                                        ageGroups = new String[]{{
                                            add("reprehenderit"),
                                            add("praesentium"),
                                            add("nemo"),
                                            add("repellat"),
                                        }};
                                        genders = new String[]{{
                                            add("sequi"),
                                            add("nihil"),
                                            add("deleniti"),
                                            add("illo"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.IN_STOCK;
                                    availableQuantity = 828841;
                                    availableTime = "aliquam";
                                    brands = new String[]{{
                                        add("provident"),
                                        add("laudantium"),
                                        add("repudiandae"),
                                        add("consequatur"),
                                    }};
                                    categories = new String[]{{
                                        add("aspernatur"),
                                        add("nam"),
                                        add("expedita"),
                                        add("quas"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("repudiandae"),
                                        add("rerum"),
                                        add("dignissimos"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("vero"),
                                            add("similique"),
                                        }};
                                        colors = new String[]{{
                                            add("iure"),
                                            add("dolorem"),
                                            add("commodi"),
                                            add("impedit"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("aut"),
                                        add("voluptatem"),
                                    }};
                                    description = "ad";
                                    expireTime = "quae";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("praesentium"),
                                                add("quidem"),
                                                add("cum"),
                                                add("amet"),
                                            }};
                                            type = "quasi";
                                        }}),
                                    }};
                                    gtin = "dicta";
                                    id = "80f739ae-9e05-47eb-809e-2810331f3981";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 287544;
                                            uri = "https://jovial-anterior.com";
                                            width = 698558;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 411615;
                                            uri = "http://limp-zen.biz";
                                            width = 784115;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 588639;
                                            uri = "http://silly-kind.biz";
                                            width = 744101;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 620500;
                                            uri = "https://posh-cuckoo.org";
                                            width = 133949;
                                        }}),
                                    }};
                                    languageCode = "quo";
                                    materials = new String[]{{
                                        add("illum"),
                                        add("laborum"),
                                        add("dignissimos"),
                                        add("vero"),
                                    }};
                                    name = "Mr. Edith Zieme";
                                    patterns = new String[]{{
                                        add("non"),
                                        add("ab"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                        cost = 727.54;
                                        currencyCode = "hic";
                                        originalPrice = 6444.79;
                                        price = 9649.25;
                                        priceEffectiveTime = "non";
                                        priceExpireTime = "distinctio";
                                        priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 4502.24;
                                                exclusiveMinimum = 3499.93;
                                                maximum = 2883;
                                                minimum = 2543.82;
                                            }};
                                            price = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 9211.93;
                                                exclusiveMinimum = 2653.03;
                                                maximum = 4502.09;
                                                minimum = 1272.94;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "accusamus";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "aperiam";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "odit";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "deleniti";
                                        }}),
                                    }};
                                    publishTime = "enim";
                                    rating = new GoogleCloudRetailV2alphaRating() {{
                                        averageRating = 4527.3;
                                        ratingCount = 626707;
                                        ratingHistogram = new Integer[]{{
                                            add(727544),
                                            add(300189),
                                        }};
                                    }};
                                    retrievableFields = "sit";
                                    sizes = new String[]{{
                                        add("eum"),
                                        add("nesciunt"),
                                    }};
                                    tags = new String[]{{
                                        add("dignissimos"),
                                        add("fugiat"),
                                        add("nostrum"),
                                    }};
                                    title = "Ms.";
                                    ttl = "veniam";
                                    type = GoogleCloudRetailV2alphaProductTypeEnum.COLLECTION;
                                    uri = "http://famous-aftermath.com";
                                }};
                                quantity = 911657;
                            }}),
                            add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                product = new GoogleCloudRetailV2alphaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                        put("commodi", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(6770.45),
                                                add(8237.18),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("consectetur"),
                                                add("nesciunt"),
                                            }};
                                        }});
                                        put("quaerat", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(7912.28),
                                                add(1226.62),
                                                add(7151.43),
                                                add(4813.75),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("et"),
                                                add("facilis"),
                                                add("amet"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2alphaAudience() {{
                                        ageGroups = new String[]{{
                                            add("fuga"),
                                            add("alias"),
                                        }};
                                        genders = new String[]{{
                                            add("aut"),
                                            add("quos"),
                                            add("laudantium"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.BACKORDER;
                                    availableQuantity = 83291;
                                    availableTime = "quae";
                                    brands = new String[]{{
                                        add("saepe"),
                                    }};
                                    categories = new String[]{{
                                        add("mollitia"),
                                        add("nulla"),
                                        add("officia"),
                                        add("sed"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("alias"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("hic"),
                                            add("voluptatem"),
                                            add("incidunt"),
                                            add("qui"),
                                        }};
                                        colors = new String[]{{
                                            add("necessitatibus"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("explicabo"),
                                        add("beatae"),
                                        add("aliquid"),
                                    }};
                                    description = "modi";
                                    expireTime = "optio";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("officia"),
                                                add("libero"),
                                                add("totam"),
                                            }};
                                            type = "sequi";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("ea"),
                                                add("impedit"),
                                            }};
                                            type = "ducimus";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("velit"),
                                            }};
                                            type = "reiciendis";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("nulla"),
                                                add("laborum"),
                                                add("natus"),
                                                add("accusamus"),
                                            }};
                                            type = "doloremque";
                                        }}),
                                    }};
                                    gtin = "nisi";
                                    id = "bee4825c-1fc0-4e11-9c80-bff918544ec4";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 828147;
                                            uri = "https://worst-scene.net";
                                            width = 883819;
                                        }}),
                                    }};
                                    languageCode = "totam";
                                    materials = new String[]{{
                                        add("ab"),
                                        add("sint"),
                                        add("nihil"),
                                        add("esse"),
                                    }};
                                    name = "Lydia Douglas";
                                    patterns = new String[]{{
                                        add("corporis"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                        cost = 3753.5;
                                        currencyCode = "consequuntur";
                                        originalPrice = 6411.33;
                                        price = 4413.74;
                                        priceEffectiveTime = "distinctio";
                                        priceExpireTime = "eius";
                                        priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 563.72;
                                                exclusiveMinimum = 5220.62;
                                                maximum = 9781.54;
                                                minimum = 351.6;
                                            }};
                                            price = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 3314.52;
                                                exclusiveMinimum = 9062.32;
                                                maximum = 2060.63;
                                                minimum = 8163.65;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "aliquam";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "doloribus";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "fugiat";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "est";
                                        }}),
                                    }};
                                    publishTime = "delectus";
                                    rating = new GoogleCloudRetailV2alphaRating() {{
                                        averageRating = 2452.78;
                                        ratingCount = 110522;
                                        ratingHistogram = new Integer[]{{
                                            add(630832),
                                        }};
                                    }};
                                    retrievableFields = "illo";
                                    sizes = new String[]{{
                                        add("nemo"),
                                        add("doloribus"),
                                        add("possimus"),
                                        add("unde"),
                                    }};
                                    tags = new String[]{{
                                        add("explicabo"),
                                        add("ipsam"),
                                    }};
                                    title = "Ms.";
                                    ttl = "optio";
                                    type = GoogleCloudRetailV2alphaProductTypeEnum.TYPE_UNSPECIFIED;
                                    uri = "https://discrete-hanger.org";
                                }};
                                quantity = 164319;
                            }}),
                            add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                product = new GoogleCloudRetailV2alphaProductInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                        put("debitis", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(5750.62),
                                                add(2808.59),
                                                add(2567.68),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("adipisci"),
                                                add("libero"),
                                                add("in"),
                                                add("minima"),
                                            }};
                                        }});
                                        put("ex", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(688.8),
                                                add(1081.65),
                                                add(9431.43),
                                                add(3923.19),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("dolor"),
                                                add("ducimus"),
                                                add("fuga"),
                                                add("minima"),
                                            }};
                                        }});
                                    }};
                                    audience = new GoogleCloudRetailV2alphaAudience() {{
                                        ageGroups = new String[]{{
                                            add("qui"),
                                        }};
                                        genders = new String[]{{
                                            add("magni"),
                                            add("incidunt"),
                                        }};
                                    }};
                                    availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.IN_STOCK;
                                    availableQuantity = 506343;
                                    availableTime = "dolor";
                                    brands = new String[]{{
                                        add("expedita"),
                                        add("facilis"),
                                    }};
                                    categories = new String[]{{
                                        add("sit"),
                                        add("nemo"),
                                        add("culpa"),
                                        add("consequuntur"),
                                    }};
                                    collectionMemberIds = new String[]{{
                                        add("deserunt"),
                                    }};
                                    colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                        colorFamilies = new String[]{{
                                            add("veniam"),
                                            add("quod"),
                                        }};
                                        colors = new String[]{{
                                            add("a"),
                                            add("quisquam"),
                                            add("enim"),
                                            add("doloribus"),
                                        }};
                                    }};
                                    conditions = new String[]{{
                                        add("officiis"),
                                        add("architecto"),
                                        add("alias"),
                                        add("culpa"),
                                    }};
                                    description = "ipsa";
                                    expireTime = "nobis";
                                    fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("dicta"),
                                            }};
                                            type = "vel";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("debitis"),
                                                add("ullam"),
                                                add("architecto"),
                                            }};
                                            type = "accusantium";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("veritatis"),
                                            }};
                                            type = "provident";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                            placeIds = new String[]{{
                                                add("iure"),
                                                add("quibusdam"),
                                                add("quod"),
                                                add("nemo"),
                                            }};
                                            type = "recusandae";
                                        }}),
                                    }};
                                    gtin = "velit";
                                    id = "4762799b-fbbe-4694-9fb2-bb4ecae6c3d5";
                                    images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 706872;
                                            uri = "http://prickly-soprano.org";
                                            width = 718981;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 866861;
                                            uri = "http://stylish-poker.org";
                                            width = 673191;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 276337;
                                            uri = "https://happy-go-lucky-atm.info";
                                            width = 647210;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaImage() {{
                                            height = 560451;
                                            uri = "https://quarterly-mortality.biz";
                                            width = 777378;
                                        }}),
                                    }};
                                    languageCode = "perferendis";
                                    materials = new String[]{{
                                        add("aliquid"),
                                    }};
                                    name = "Gail Roob";
                                    patterns = new String[]{{
                                        add("unde"),
                                        add("nulla"),
                                        add("error"),
                                        add("mollitia"),
                                    }};
                                    priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                        cost = 2986.13;
                                        currencyCode = "nostrum";
                                        originalPrice = 4609.09;
                                        price = 5488.49;
                                        priceEffectiveTime = "fuga";
                                        priceExpireTime = "facere";
                                        priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                            originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 7736.59;
                                                exclusiveMinimum = 986.1;
                                                maximum = 6472.18;
                                                minimum = 8010.75;
                                            }};
                                            price = new GoogleCloudRetailV2alphaInterval() {{
                                                exclusiveMaximum = 3857.39;
                                                exclusiveMinimum = 411.79;
                                                maximum = 315.74;
                                                minimum = 8164.21;
                                            }};
                                        }};
                                    }};
                                    primaryProductId = "necessitatibus";
                                    promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "consequatur";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "eaque";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "architecto";
                                        }}),
                                        add(new GoogleCloudRetailV2alphaPromotion() {{
                                            promotionId = "similique";
                                        }}),
                                    }};
                                    publishTime = "porro";
                                    rating = new GoogleCloudRetailV2alphaRating() {{
                                        averageRating = 5024.53;
                                        ratingCount = 60892;
                                        ratingHistogram = new Integer[]{{
                                            add(885797),
                                        }};
                                    }};
                                    retrievableFields = "sed";
                                    sizes = new String[]{{
                                        add("impedit"),
                                        add("ipsa"),
                                        add("excepturi"),
                                        add("a"),
                                    }};
                                    tags = new String[]{{
                                        add("laudantium"),
                                        add("maiores"),
                                        add("alias"),
                                        add("asperiores"),
                                    }};
                                    title = "Ms.";
                                    ttl = "dicta";
                                    type = GoogleCloudRetailV2alphaProductTypeEnum.PRIMARY;
                                    uri = "https://worst-decongestant.biz";
                                }};
                                quantity = 458212;
                            }}),
                        }};
                        purchaseTransaction = new GoogleCloudRetailV2alphaPurchaseTransaction() {{
                            cost = 4465.47;
                            currencyCode = "eligendi";
                            id = "13e902c1-4125-4b09-a0a6-68151a472af9";
                            revenue = 1512.3;
                            tax = 2009.5;
                        }};;
                        referrerUri = "maxime";
                        searchQuery = "quis";
                        sessionId = "cupiditate";
                        uri = "http://nimble-whole.name";
                        userInfo = new GoogleCloudRetailV2alphaUserInfo() {{
                            directUserRequest = false;
                            ipAddress = "velit";
                            userAgent = "reiciendis";
                            userId = "amet";
                        }};;
                        visitorId = "nemo";
                    }};;
                    validateOnly = false;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "quas";
                key = "molestiae";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "a";
                uploadProtocol = "nobis";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsPredictResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsPredict(req, new RetailProjectsLocationsCatalogsServingConfigsPredictSecurity("perspiciatis", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaPredictResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRemoveControlRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest req = new RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaRemoveControlRequest = new GoogleCloudRetailV2alphaRemoveControlRequest() {{
                    controlId = "commodi";
                }};;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "quidem";
                key = "modi";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "eius";
                uploadProtocol = "sequi";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsRemoveControl(req, new RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity("eligendi", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaServingConfig != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequest;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestBoostSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestFacetSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestSearchModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaUserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsServingConfigsSearchRequest req = new RetailProjectsLocationsCatalogsServingConfigsSearchRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaSearchRequest = new GoogleCloudRetailV2alphaSearchRequest() {{
                    boostSpec = new GoogleCloudRetailV2alphaSearchRequestBoostSpec() {{
                        conditionBoostSpecs = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec[]{{
                            add(new GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec() {{
                                boost = 9965.41;
                                condition = "a";
                            }}),
                            add(new GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec() {{
                                boost = 6586.04;
                                condition = "maiores";
                            }}),
                            add(new GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec() {{
                                boost = 9304.29;
                                condition = "nulla";
                            }}),
                        }};
                        skipBoostSpecValidation = false;
                    }};;
                    branch = "deserunt";
                    canonicalFilter = "corporis";
                    dynamicFacetSpec = new GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec() {{
                        mode = GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum.MODE_UNSPECIFIED;
                    }};;
                    entity = "officiis";
                    facetSpecs = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSearchRequestFacetSpec[]{{
                        add(new GoogleCloudRetailV2alphaSearchRequestFacetSpec() {{
                            enableDynamicPosition = false;
                            excludedFilterKeys = new String[]{{
                                add("saepe"),
                                add("eum"),
                                add("repudiandae"),
                            }};
                            facetKey = new GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey() {{
                                caseInsensitive = false;
                                contains = new String[]{{
                                    add("officia"),
                                }};
                                intervals = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval[]{{
                                    add(new GoogleCloudRetailV2alphaInterval() {{
                                        exclusiveMaximum = 978.96;
                                        exclusiveMinimum = 5021.06;
                                        maximum = 2609.11;
                                        minimum = 7861.89;
                                    }}),
                                    add(new GoogleCloudRetailV2alphaInterval() {{
                                        exclusiveMaximum = 1779.29;
                                        exclusiveMinimum = 7480.23;
                                        maximum = 6200.54;
                                        minimum = 7935.68;
                                    }}),
                                    add(new GoogleCloudRetailV2alphaInterval() {{
                                        exclusiveMaximum = 1543.89;
                                        exclusiveMinimum = 3006.51;
                                        maximum = 4408.47;
                                        minimum = 8007.99;
                                    }}),
                                    add(new GoogleCloudRetailV2alphaInterval() {{
                                        exclusiveMaximum = 5524.4;
                                        exclusiveMinimum = 5488.46;
                                        maximum = 2278.7;
                                        minimum = 4733.26;
                                    }}),
                                }};
                                key = "amet";
                                orderBy = "laborum";
                                prefixes = new String[]{{
                                    add("perferendis"),
                                    add("necessitatibus"),
                                }};
                                query = "architecto";
                                restrictedValues = new String[]{{
                                    add("dolore"),
                                    add("sunt"),
                                    add("maiores"),
                                }};
                                returnMinMax = false;
                            }};
                            limit = 205011;
                        }}),
                        add(new GoogleCloudRetailV2alphaSearchRequestFacetSpec() {{
                            enableDynamicPosition = false;
                            excludedFilterKeys = new String[]{{
                                add("earum"),
                            }};
                            facetKey = new GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey() {{
                                caseInsensitive = false;
                                contains = new String[]{{
                                    add("ipsam"),
                                    add("eaque"),
                                }};
                                intervals = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval[]{{
                                    add(new GoogleCloudRetailV2alphaInterval() {{
                                        exclusiveMaximum = 3312.69;
                                        exclusiveMinimum = 4699.94;
                                        maximum = 3203.26;
                                        minimum = 3941.61;
                                    }}),
                                    add(new GoogleCloudRetailV2alphaInterval() {{
                                        exclusiveMaximum = 9468.08;
                                        exclusiveMinimum = 3382.81;
                                        maximum = 8451.54;
                                        minimum = 3664.8;
                                    }}),
                                }};
                                key = "suscipit";
                                orderBy = "pariatur";
                                prefixes = new String[]{{
                                    add("quidem"),
                                }};
                                query = "repellendus";
                                restrictedValues = new String[]{{
                                    add("id"),
                                }};
                                returnMinMax = false;
                            }};
                            limit = 958146;
                        }}),
                    }};
                    filter = "sed";
                    labels = new java.util.HashMap<String, String>() {{
                        put("repellat", "repudiandae");
                        put("architecto", "adipisci");
                        put("pariatur", "harum");
                        put("dolore", "voluptatibus");
                    }};
                    offset = 435353;
                    orderBy = "explicabo";
                    pageCategories = new String[]{{
                        add("soluta"),
                        add("dolorum"),
                        add("velit"),
                        add("earum"),
                    }};
                    pageSize = 510020;
                    pageToken = "error";
                    personalizationSpec = new GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec() {{
                        mode = GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum.MODE_UNSPECIFIED;
                    }};;
                    query = "quasi";
                    queryExpansionSpec = new GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec() {{
                        condition = GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum.DISABLED;
                        pinUnexpandedResults = false;
                    }};;
                    relevanceThreshold = GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum.LOWEST;
                    searchMode = GoogleCloudRetailV2alphaSearchRequestSearchModeEnum.FACETED_SEARCH_ONLY;
                    spellCorrectionSpec = new GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec() {{
                        mode = GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum.AUTO;
                    }};;
                    userInfo = new GoogleCloudRetailV2alphaUserInfo() {{
                        directUserRequest = false;
                        ipAddress = "doloremque";
                        userAgent = "expedita";
                        userId = "corrupti";
                    }};;
                    variantRollupKeys = new String[]{{
                        add("deserunt"),
                    }};
                    visitorId = "aliquid";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "possimus";
                key = "dolor";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "accusamus";
                uploadProtocol = "optio";
            }};            

            RetailProjectsLocationsCatalogsServingConfigsSearchResponse res = sdk.projects.retailProjectsLocationsCatalogsServingConfigsSearch(req, new RetailProjectsLocationsCatalogsServingConfigsSearchSecurity("delectus", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaSearchResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaSetDefaultBranchRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsSetDefaultBranchRequest req = new RetailProjectsLocationsCatalogsSetDefaultBranchRequest("quo") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaSetDefaultBranchRequest = new GoogleCloudRetailV2alphaSetDefaultBranchRequest() {{
                    branchId = "asperiores";
                    force = false;
                    note = "voluptatum";
                }};;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "illo";
                key = "aut";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "at";
                uploadProtocol = "possimus";
            }};            

            RetailProjectsLocationsCatalogsSetDefaultBranchResponse res = sdk.projects.retailProjectsLocationsCatalogsSetDefaultBranch(req, new RetailProjectsLocationsCatalogsSetDefaultBranchSecurity("neque", "pariatur") {{
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

            RetailProjectsLocationsCatalogsUserEventsCollectRequest req = new RetailProjectsLocationsCatalogsUserEventsCollectRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "quos";
                ets = "aperiam";
                fields = "non";
                key = "voluptates";
                oauthToken = "ad";
                prebuiltRule = "aliquam";
                prettyPrint = false;
                quotaUser = "quisquam";
                rawJson = "quas";
                uploadType = "consequuntur";
                uploadProtocol = "maiores";
                uri = "http://icy-lightning.name";
                userEvent = "dolor";
            }};            

            RetailProjectsLocationsCatalogsUserEventsCollectResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsCollect(req, new RetailProjectsLocationsCatalogsUserEventsCollectSecurity("aliquid", "consectetur") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaBigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCompletionDetail;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaGcsSource;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImportErrorsConfig;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImportUserEventsRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductDetailInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaUserEventInlineSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaUserEventInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaUserEventInputConfigInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaUserInfo;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsImportRequest req = new RetailProjectsLocationsCatalogsUserEventsImportRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaImportUserEventsRequestInput = new GoogleCloudRetailV2alphaImportUserEventsRequestInput() {{
                    errorsConfig = new GoogleCloudRetailV2alphaImportErrorsConfig() {{
                        gcsPrefix = "voluptatum";
                    }};;
                    inputConfig = new GoogleCloudRetailV2alphaUserEventInputConfigInput() {{
                        bigQuerySource = new GoogleCloudRetailV2alphaBigQuerySource() {{
                            dataSchema = "ducimus";
                            datasetId = "adipisci";
                            gcsStagingDir = "recusandae";
                            partitionDate = new GoogleTypeDate() {{
                                day = 271306;
                                month = 503449;
                                year = 258059;
                            }};;
                            projectId = "sequi";
                            tableId = "voluptatum";
                        }};;
                        gcsSource = new GoogleCloudRetailV2alphaGcsSource() {{
                            dataSchema = "sit";
                            inputUris = new String[]{{
                                add("veritatis"),
                                add("tenetur"),
                                add("autem"),
                            }};
                        }};;
                        userEventInlineSource = new GoogleCloudRetailV2alphaUserEventInlineSourceInput() {{
                            userEvents = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaUserEventInput[]{{
                                add(new GoogleCloudRetailV2alphaUserEventInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                        put("porro", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(1689.26),
                                                add(4712.07),
                                                add(3740.62),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("commodi"),
                                                add("alias"),
                                                add("fuga"),
                                            }};
                                        }});
                                        put("aut", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(8027.34),
                                                add(3032.92),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("ullam"),
                                                add("eligendi"),
                                                add("placeat"),
                                            }};
                                        }});
                                        put("voluptas", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(6009.34),
                                                add(752.77),
                                                add(4691.7),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("libero"),
                                            }};
                                        }});
                                    }};
                                    attributionToken = "ipsam";
                                    cartId = "quasi";
                                    completionDetail = new GoogleCloudRetailV2alphaCompletionDetail() {{
                                        completionAttributionToken = "cumque";
                                        selectedPosition = 117491;
                                        selectedSuggestion = "harum";
                                    }};
                                    entity = "facere";
                                    eventTime = "facilis";
                                    eventType = "beatae";
                                    experimentIds = new String[]{{
                                        add("delectus"),
                                        add("labore"),
                                        add("expedita"),
                                        add("corrupti"),
                                    }};
                                    filter = "rem";
                                    offset = 543353;
                                    orderBy = "officiis";
                                    pageCategories = new String[]{{
                                        add("pariatur"),
                                        add("sapiente"),
                                        add("quo"),
                                    }};
                                    pageViewId = "incidunt";
                                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductDetailInput[]{{
                                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                                    put("porro", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(5697.06),
                                                            add(5802.38),
                                                            add(7268.51),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("esse"),
                                                            add("hic"),
                                                            add("maxime"),
                                                            add("accusantium"),
                                                        }};
                                                    }});
                                                    put("soluta", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(8662.92),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("recusandae"),
                                                            add("veritatis"),
                                                            add("aut"),
                                                            add("laudantium"),
                                                        }};
                                                    }});
                                                    put("iusto", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9171.52),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("magni"),
                                                            add("rerum"),
                                                        }};
                                                    }});
                                                    put("doloremque", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(4301.46),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("eum"),
                                                            add("reprehenderit"),
                                                            add("voluptatum"),
                                                            add("blanditiis"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("atque"),
                                                        add("rerum"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("atque"),
                                                        add("nostrum"),
                                                        add("atque"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.AVAILABILITY_UNSPECIFIED;
                                                availableQuantity = 667213;
                                                availableTime = "enim";
                                                brands = new String[]{{
                                                    add("magni"),
                                                    add("quae"),
                                                    add("quas"),
                                                }};
                                                categories = new String[]{{
                                                    add("enim"),
                                                    add("labore"),
                                                    add("sapiente"),
                                                    add("saepe"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("officia"),
                                                    add("natus"),
                                                    add("cumque"),
                                                    add("natus"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("doloribus"),
                                                        add("quia"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("mollitia"),
                                                        add("cumque"),
                                                        add("quis"),
                                                        add("enim"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("nemo"),
                                                    add("illum"),
                                                }};
                                                description = "nesciunt";
                                                expireTime = "sit";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("asperiores"),
                                                            add("recusandae"),
                                                            add("voluptates"),
                                                            add("praesentium"),
                                                        }};
                                                        type = "dicta";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("sit"),
                                                        }};
                                                        type = "aliquid";
                                                    }}),
                                                }};
                                                gtin = "necessitatibus";
                                                id = "2813fa4a-41c4-480d-bf21-32af03102d51";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 961842;
                                                        uri = "http://sleepy-rib.info";
                                                        width = 998023;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 65118;
                                                        uri = "https://runny-urge.name";
                                                        width = 396610;
                                                    }}),
                                                }};
                                                languageCode = "sed";
                                                materials = new String[]{{
                                                    add("similique"),
                                                }};
                                                name = "Lynda Gulgowski";
                                                patterns = new String[]{{
                                                    add("animi"),
                                                    add("laudantium"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                                    cost = 4610.5;
                                                    currencyCode = "eveniet";
                                                    originalPrice = 9351.61;
                                                    price = 2464.02;
                                                    priceEffectiveTime = "officiis";
                                                    priceExpireTime = "eius";
                                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 7019.78;
                                                            exclusiveMinimum = 9301.11;
                                                            maximum = 4896.85;
                                                            minimum = 3734.49;
                                                        }};
                                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 1316.87;
                                                            exclusiveMinimum = 7716.32;
                                                            maximum = 3970.14;
                                                            minimum = 3398.43;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "facilis";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "ut";
                                                    }}),
                                                }};
                                                publishTime = "quaerat";
                                                rating = new GoogleCloudRetailV2alphaRating() {{
                                                    averageRating = 1039.88;
                                                    ratingCount = 506966;
                                                    ratingHistogram = new Integer[]{{
                                                        add(221781),
                                                        add(709051),
                                                        add(730003),
                                                        add(615277),
                                                    }};
                                                }};
                                                retrievableFields = "illo";
                                                sizes = new String[]{{
                                                    add("quos"),
                                                    add("temporibus"),
                                                    add("sint"),
                                                    add("iusto"),
                                                }};
                                                tags = new String[]{{
                                                    add("accusamus"),
                                                    add("aperiam"),
                                                }};
                                                title = "Dr.";
                                                ttl = "laudantium";
                                                type = GoogleCloudRetailV2alphaProductTypeEnum.PRIMARY;
                                                uri = "http://palatable-statin.name";
                                            }};
                                            quantity = 949370;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                                    put("modi", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(1013.74),
                                                            add(3051.89),
                                                            add(2867.26),
                                                            add(9834.34),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("saepe"),
                                                        }};
                                                    }});
                                                    put("consequatur", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(8913.02),
                                                            add(8174.54),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("cumque"),
                                                            add("aliquam"),
                                                            add("dolorum"),
                                                            add("deserunt"),
                                                        }};
                                                    }});
                                                    put("ad", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(1964.51),
                                                            add(7855.55),
                                                            add(6715.28),
                                                            add(7489.73),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("omnis"),
                                                            add("aut"),
                                                            add("ipsam"),
                                                            add("officia"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("reprehenderit"),
                                                        add("quia"),
                                                        add("necessitatibus"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("ad"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.IN_STOCK;
                                                availableQuantity = 474185;
                                                availableTime = "quia";
                                                brands = new String[]{{
                                                    add("sed"),
                                                    add("odit"),
                                                    add("iusto"),
                                                }};
                                                categories = new String[]{{
                                                    add("eos"),
                                                    add("repellendus"),
                                                    add("nesciunt"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("sint"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("esse"),
                                                        add("accusantium"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("sapiente"),
                                                        add("quam"),
                                                        add("est"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("delectus"),
                                                    add("culpa"),
                                                }};
                                                description = "voluptatum";
                                                expireTime = "iusto";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("voluptas"),
                                                            add("non"),
                                                            add("ullam"),
                                                            add("laborum"),
                                                        }};
                                                        type = "voluptas";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("animi"),
                                                            add("recusandae"),
                                                            add("corporis"),
                                                            add("non"),
                                                        }};
                                                        type = "necessitatibus";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("maiores"),
                                                            add("laboriosam"),
                                                            add("voluptatem"),
                                                        }};
                                                        type = "optio";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("sunt"),
                                                        }};
                                                        type = "vitae";
                                                    }}),
                                                }};
                                                gtin = "voluptatibus";
                                                id = "023b75d2-367f-4e1a-8cc8-df79f0a396d9";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 771931;
                                                        uri = "http://immaterial-dud.net";
                                                        width = 446737;
                                                    }}),
                                                }};
                                                languageCode = "quisquam";
                                                materials = new String[]{{
                                                    add("enim"),
                                                }};
                                                name = "Emilio Rau";
                                                patterns = new String[]{{
                                                    add("et"),
                                                    add("quas"),
                                                    add("blanditiis"),
                                                    add("cum"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                                    cost = 1197.25;
                                                    currencyCode = "impedit";
                                                    originalPrice = 2740.4;
                                                    price = 9082.49;
                                                    priceEffectiveTime = "repudiandae";
                                                    priceExpireTime = "sed";
                                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 7726.28;
                                                            exclusiveMinimum = 5582.83;
                                                            maximum = 7720.57;
                                                            minimum = 4283.78;
                                                        }};
                                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 7530.87;
                                                            exclusiveMinimum = 9231.59;
                                                            maximum = 4046.43;
                                                            minimum = 1050.94;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "veritatis";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "itaque";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "vero";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "quidem";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "illo";
                                                    }}),
                                                }};
                                                publishTime = "quo";
                                                rating = new GoogleCloudRetailV2alphaRating() {{
                                                    averageRating = 4909.66;
                                                    ratingCount = 791615;
                                                    ratingHistogram = new Integer[]{{
                                                        add(823341),
                                                        add(738152),
                                                        add(382342),
                                                    }};
                                                }};
                                                retrievableFields = "saepe";
                                                sizes = new String[]{{
                                                    add("quod"),
                                                    add("nihil"),
                                                    add("quaerat"),
                                                    add("ipsum"),
                                                }};
                                                tags = new String[]{{
                                                    add("laudantium"),
                                                    add("rerum"),
                                                }};
                                                title = "Miss";
                                                ttl = "odit";
                                                type = GoogleCloudRetailV2alphaProductTypeEnum.PRIMARY;
                                                uri = "http://carefree-jogging.info";
                                            }};
                                            quantity = 298246;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                                    put("nulla", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(5862.77),
                                                            add(724.22),
                                                            add(3486.65),
                                                            add(6704.3),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("fugit"),
                                                            add("maxime"),
                                                            add("dolorum"),
                                                            add("repellat"),
                                                        }};
                                                    }});
                                                    put("nostrum", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(8450.86),
                                                            add(4144.56),
                                                            add(4563.71),
                                                            add(1274.99),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("temporibus"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("ipsa"),
                                                        add("maiores"),
                                                        add("exercitationem"),
                                                        add("culpa"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("aspernatur"),
                                                        add("sapiente"),
                                                        add("neque"),
                                                        add("officia"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.IN_STOCK;
                                                availableQuantity = 688649;
                                                availableTime = "ducimus";
                                                brands = new String[]{{
                                                    add("perferendis"),
                                                }};
                                                categories = new String[]{{
                                                    add("iusto"),
                                                    add("corrupti"),
                                                    add("molestiae"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("iure"),
                                                    add("ab"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("amet"),
                                                        add("sapiente"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("est"),
                                                        add("iure"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("provident"),
                                                    add("laudantium"),
                                                    add("nam"),
                                                    add("nemo"),
                                                }};
                                                description = "enim";
                                                expireTime = "ipsam";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("perferendis"),
                                                            add("corrupti"),
                                                        }};
                                                        type = "doloremque";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("numquam"),
                                                            add("doloremque"),
                                                            add("cum"),
                                                            add("nobis"),
                                                        }};
                                                        type = "similique";
                                                    }}),
                                                }};
                                                gtin = "porro";
                                                id = "c6cbd6b5-f3ec-4909-b04f-926bad255381";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 748606;
                                                        uri = "http://jaunty-diffuse.net";
                                                        width = 46384;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 915408;
                                                        uri = "https://costly-anatomy.org";
                                                        width = 360635;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 411626;
                                                        uri = "http://frail-laundry.org";
                                                        width = 980649;
                                                    }}),
                                                }};
                                                languageCode = "asperiores";
                                                materials = new String[]{{
                                                    add("nesciunt"),
                                                    add("cupiditate"),
                                                }};
                                                name = "Miss Eduardo Breitenberg";
                                                patterns = new String[]{{
                                                    add("quo"),
                                                    add("fuga"),
                                                    add("tempore"),
                                                    add("commodi"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                                    cost = 1467.42;
                                                    currencyCode = "suscipit";
                                                    originalPrice = 4538.8;
                                                    price = 3931.22;
                                                    priceEffectiveTime = "aliquid";
                                                    priceExpireTime = "provident";
                                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 3857.6;
                                                            exclusiveMinimum = 8815.68;
                                                            maximum = 682.92;
                                                            minimum = 9290.67;
                                                        }};
                                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 7903.05;
                                                            exclusiveMinimum = 535.29;
                                                            maximum = 49.29;
                                                            minimum = 1816.22;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "consequuntur";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "quidem";
                                                    }}),
                                                }};
                                                publishTime = "sequi";
                                                rating = new GoogleCloudRetailV2alphaRating() {{
                                                    averageRating = 2274.31;
                                                    ratingCount = 346608;
                                                    ratingHistogram = new Integer[]{{
                                                        add(506532),
                                                        add(601626),
                                                        add(629461),
                                                        add(753261),
                                                    }};
                                                }};
                                                retrievableFields = "tempore";
                                                sizes = new String[]{{
                                                    add("debitis"),
                                                }};
                                                tags = new String[]{{
                                                    add("asperiores"),
                                                    add("temporibus"),
                                                    add("id"),
                                                    add("atque"),
                                                }};
                                                title = "Dr.";
                                                ttl = "sit";
                                                type = GoogleCloudRetailV2alphaProductTypeEnum.COLLECTION;
                                                uri = "http://free-nestmate.org";
                                            }};
                                            quantity = 938094;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                                    put("ipsum", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(437.15),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("perspiciatis"),
                                                            add("quam"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("officia"),
                                                        add("ex"),
                                                        add("architecto"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("laborum"),
                                                        add("veritatis"),
                                                        add("quod"),
                                                        add("a"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.AVAILABILITY_UNSPECIFIED;
                                                availableQuantity = 34989;
                                                availableTime = "commodi";
                                                brands = new String[]{{
                                                    add("totam"),
                                                    add("tenetur"),
                                                    add("voluptate"),
                                                }};
                                                categories = new String[]{{
                                                    add("quod"),
                                                    add("vitae"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("reiciendis"),
                                                    add("quod"),
                                                    add("voluptate"),
                                                    add("inventore"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("maxime"),
                                                        add("fuga"),
                                                        add("ab"),
                                                        add("ex"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("maiores"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("animi"),
                                                }};
                                                description = "sequi";
                                                expireTime = "eligendi";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("laborum"),
                                                        }};
                                                        type = "omnis";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("tenetur"),
                                                            add("sapiente"),
                                                        }};
                                                        type = "velit";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("non"),
                                                        }};
                                                        type = "optio";
                                                    }}),
                                                }};
                                                gtin = "illum";
                                                id = "df857a9e-6187-46c6-ab21-d29dfc94d6fe";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 818078;
                                                        uri = "http://peaceful-nectar.biz";
                                                        width = 573247;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 44252;
                                                        uri = "http://inexperienced-girl.net";
                                                        width = 422276;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 828481;
                                                        uri = "http://thorough-arm-rest.com";
                                                        width = 4747;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 244157;
                                                        uri = "http://glum-debris.biz";
                                                        width = 555386;
                                                    }}),
                                                }};
                                                languageCode = "maxime";
                                                materials = new String[]{{
                                                    add("cumque"),
                                                    add("doloremque"),
                                                    add("totam"),
                                                    add("iure"),
                                                }};
                                                name = "Dr. Carlton Considine";
                                                patterns = new String[]{{
                                                    add("ipsam"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                                    cost = 1631.81;
                                                    currencyCode = "cumque";
                                                    originalPrice = 6962.19;
                                                    price = 2476.15;
                                                    priceEffectiveTime = "beatae";
                                                    priceExpireTime = "sunt";
                                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 5658.45;
                                                            exclusiveMinimum = 1070.42;
                                                            maximum = 4202.33;
                                                            minimum = 4947.65;
                                                        }};
                                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 7284.74;
                                                            exclusiveMinimum = 5620.65;
                                                            maximum = 9006.76;
                                                            minimum = 2187.83;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "impedit";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "illum";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "distinctio";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "voluptatem";
                                                    }}),
                                                }};
                                                publishTime = "non";
                                                rating = new GoogleCloudRetailV2alphaRating() {{
                                                    averageRating = 3101.95;
                                                    ratingCount = 10164;
                                                    ratingHistogram = new Integer[]{{
                                                        add(831067),
                                                        add(415953),
                                                        add(843679),
                                                    }};
                                                }};
                                                retrievableFields = "consectetur";
                                                sizes = new String[]{{
                                                    add("quaerat"),
                                                    add("earum"),
                                                }};
                                                tags = new String[]{{
                                                    add("assumenda"),
                                                    add("dolore"),
                                                    add("enim"),
                                                    add("ullam"),
                                                }};
                                                title = "Ms.";
                                                ttl = "alias";
                                                type = GoogleCloudRetailV2alphaProductTypeEnum.PRIMARY;
                                                uri = "https://chubby-chief.info";
                                            }};
                                            quantity = 204144;
                                        }}),
                                    }};
                                    purchaseTransaction = new GoogleCloudRetailV2alphaPurchaseTransaction() {{
                                        cost = 8436.59;
                                        currencyCode = "numquam";
                                        id = "8e935c2c-9e81-4f30-be3e-43202d721657";
                                        revenue = 4265.94;
                                        tax = 3249.99;
                                    }};
                                    referrerUri = "sit";
                                    searchQuery = "vel";
                                    sessionId = "laboriosam";
                                    uri = "http://brown-lottery.info";
                                    userInfo = new GoogleCloudRetailV2alphaUserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "doloremque";
                                        userAgent = "assumenda";
                                        userId = "provident";
                                    }};
                                    visitorId = "facere";
                                }}),
                                add(new GoogleCloudRetailV2alphaUserEventInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                        put("inventore", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
                                                add(6012.28),
                                                add(6456.09),
                                                add(8345.87),
                                                add(79.19),
                                            }};
                                            searchable = false;
                                            text = new String[]{{
                                                add("doloremque"),
                                            }};
                                        }});
                                    }};
                                    attributionToken = "optio";
                                    cartId = "tempora";
                                    completionDetail = new GoogleCloudRetailV2alphaCompletionDetail() {{
                                        completionAttributionToken = "debitis";
                                        selectedPosition = 763937;
                                        selectedSuggestion = "maxime";
                                    }};
                                    entity = "et";
                                    eventTime = "beatae";
                                    eventType = "id";
                                    experimentIds = new String[]{{
                                        add("quos"),
                                    }};
                                    filter = "ratione";
                                    offset = 436532;
                                    orderBy = "tempora";
                                    pageCategories = new String[]{{
                                        add("natus"),
                                    }};
                                    pageViewId = "voluptatem";
                                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductDetailInput[]{{
                                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                                    put("facilis", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(3530.75),
                                                            add(149),
                                                            add(1544.25),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("quaerat"),
                                                            add("corporis"),
                                                            add("accusamus"),
                                                        }};
                                                    }});
                                                    put("iusto", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(4590.86),
                                                            add(2075.12),
                                                            add(6975.91),
                                                            add(7884.69),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("tempora"),
                                                            add("ipsam"),
                                                            add("officiis"),
                                                        }};
                                                    }});
                                                    put("sequi", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(298.81),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("amet"),
                                                            add("veritatis"),
                                                            add("error"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("numquam"),
                                                        add("rerum"),
                                                        add("dolorum"),
                                                        add("quibusdam"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("excepturi"),
                                                        add("numquam"),
                                                        add("molestiae"),
                                                        add("impedit"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.PREORDER;
                                                availableQuantity = 656159;
                                                availableTime = "voluptatum";
                                                brands = new String[]{{
                                                    add("nihil"),
                                                    add("facilis"),
                                                }};
                                                categories = new String[]{{
                                                    add("incidunt"),
                                                    add("eos"),
                                                    add("magnam"),
                                                    add("dolores"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("eum"),
                                                    add("vel"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("quos"),
                                                        add("illo"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("quibusdam"),
                                                        add("fugiat"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("culpa"),
                                                    add("atque"),
                                                    add("voluptates"),
                                                    add("maiores"),
                                                }};
                                                description = "nemo";
                                                expireTime = "illo";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("expedita"),
                                                            add("modi"),
                                                            add("cumque"),
                                                            add("ipsam"),
                                                        }};
                                                        type = "occaecati";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("accusamus"),
                                                        }};
                                                        type = "quisquam";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("fugit"),
                                                        }};
                                                        type = "quo";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("mollitia"),
                                                            add("id"),
                                                            add("quibusdam"),
                                                            add("ipsa"),
                                                        }};
                                                        type = "accusamus";
                                                    }}),
                                                }};
                                                gtin = "placeat";
                                                id = "7afedbd8-0df4-448a-87f9-390c58880983";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 683490;
                                                        uri = "https://worried-overweight.org";
                                                        width = 955962;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 234964;
                                                        uri = "https://woeful-soliloquy.net";
                                                        width = 607742;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 966652;
                                                        uri = "http://wiry-affiliate.info";
                                                        width = 606262;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 626676;
                                                        uri = "https://fancy-snake.biz";
                                                        width = 340604;
                                                    }}),
                                                }};
                                                languageCode = "in";
                                                materials = new String[]{{
                                                    add("non"),
                                                }};
                                                name = "Dr. Nicolas Roberts";
                                                patterns = new String[]{{
                                                    add("eos"),
                                                    add("quas"),
                                                    add("quasi"),
                                                    add("architecto"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                                    cost = 5097.99;
                                                    currencyCode = "iusto";
                                                    originalPrice = 8548;
                                                    price = 3136.95;
                                                    priceEffectiveTime = "iure";
                                                    priceExpireTime = "laudantium";
                                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 2653.03;
                                                            exclusiveMinimum = 3017.01;
                                                            maximum = 8821.57;
                                                            minimum = 8618.23;
                                                        }};
                                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 9211.27;
                                                            exclusiveMinimum = 8443.27;
                                                            maximum = 5057.99;
                                                            minimum = 3154.65;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "animi";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "quae";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "eum";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "nostrum";
                                                    }}),
                                                }};
                                                publishTime = "eveniet";
                                                rating = new GoogleCloudRetailV2alphaRating() {{
                                                    averageRating = 3896.3;
                                                    ratingCount = 187361;
                                                    ratingHistogram = new Integer[]{{
                                                        add(697729),
                                                        add(848649),
                                                        add(970376),
                                                    }};
                                                }};
                                                retrievableFields = "placeat";
                                                sizes = new String[]{{
                                                    add("consequatur"),
                                                }};
                                                tags = new String[]{{
                                                    add("quia"),
                                                }};
                                                title = "Miss";
                                                ttl = "voluptas";
                                                type = GoogleCloudRetailV2alphaProductTypeEnum.COLLECTION;
                                                uri = "https://limping-octave.name";
                                            }};
                                            quantity = 144397;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                                    put("quidem", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(8907.8),
                                                            add(1120.71),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("ad"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("ut"),
                                                        add("asperiores"),
                                                        add("reprehenderit"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("itaque"),
                                                        add("et"),
                                                        add("eos"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.PREORDER;
                                                availableQuantity = 401388;
                                                availableTime = "praesentium";
                                                brands = new String[]{{
                                                    add("vitae"),
                                                    add("tenetur"),
                                                    add("laudantium"),
                                                }};
                                                categories = new String[]{{
                                                    add("eligendi"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("dicta"),
                                                    add("inventore"),
                                                    add("ullam"),
                                                    add("iusto"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("voluptate"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("dolorem"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("exercitationem"),
                                                }};
                                                description = "amet";
                                                expireTime = "voluptate";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("minus"),
                                                            add("a"),
                                                            add("fuga"),
                                                            add("totam"),
                                                        }};
                                                        type = "cupiditate";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("doloribus"),
                                                            add("omnis"),
                                                            add("quam"),
                                                            add("exercitationem"),
                                                        }};
                                                        type = "voluptates";
                                                    }}),
                                                }};
                                                gtin = "sequi";
                                                id = "56686092-e9c3-4ddc-9f11-1dea1026d541";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 309852;
                                                        uri = "https://charming-octavo.com";
                                                        width = 957489;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 887600;
                                                        uri = "https://crushing-bug.info";
                                                        width = 558410;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 55407;
                                                        uri = "https://studious-shower.net";
                                                        width = 26321;
                                                    }}),
                                                }};
                                                languageCode = "possimus";
                                                materials = new String[]{{
                                                    add("distinctio"),
                                                    add("assumenda"),
                                                    add("illum"),
                                                }};
                                                name = "Clifford Langworth";
                                                patterns = new String[]{{
                                                    add("corrupti"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                                    cost = 9714.81;
                                                    currencyCode = "facilis";
                                                    originalPrice = 3060.23;
                                                    price = 9229.15;
                                                    priceEffectiveTime = "amet";
                                                    priceExpireTime = "natus";
                                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 682.53;
                                                            exclusiveMinimum = 8878.35;
                                                            maximum = 4298.23;
                                                            minimum = 7012.57;
                                                        }};
                                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 8086.08;
                                                            exclusiveMinimum = 683.36;
                                                            maximum = 3195.92;
                                                            minimum = 5008.28;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "porro";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "impedit";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "ut";
                                                    }}),
                                                }};
                                                publishTime = "earum";
                                                rating = new GoogleCloudRetailV2alphaRating() {{
                                                    averageRating = 3559.27;
                                                    ratingCount = 256813;
                                                    ratingHistogram = new Integer[]{{
                                                        add(585046),
                                                        add(578610),
                                                    }};
                                                }};
                                                retrievableFields = "itaque";
                                                sizes = new String[]{{
                                                    add("consectetur"),
                                                    add("modi"),
                                                    add("aspernatur"),
                                                }};
                                                tags = new String[]{{
                                                    add("suscipit"),
                                                }};
                                                title = "Mr.";
                                                ttl = "eveniet";
                                                type = GoogleCloudRetailV2alphaProductTypeEnum.VARIANT;
                                                uri = "https://dental-appreciation.com";
                                            }};
                                            quantity = 773262;
                                        }}),
                                    }};
                                    purchaseTransaction = new GoogleCloudRetailV2alphaPurchaseTransaction() {{
                                        cost = 9277.54;
                                        currencyCode = "voluptate";
                                        id = "8a1bd8fb-7a0a-4116-8e72-3d4097fa30e9";
                                        revenue = 6467.76;
                                        tax = 9444.05;
                                    }};
                                    referrerUri = "ducimus";
                                    searchQuery = "consequuntur";
                                    sessionId = "ipsam";
                                    uri = "https://critical-official.com";
                                    userInfo = new GoogleCloudRetailV2alphaUserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "qui";
                                        userAgent = "explicabo";
                                        userId = "consequatur";
                                    }};
                                    visitorId = "amet";
                                }}),
                                add(new GoogleCloudRetailV2alphaUserEventInput() {{
                                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                        put("fugiat", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                            indexable = false;
                                            numbers = new Double[]{{
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
                                    attributionToken = "dignissimos";
                                    cartId = "provident";
                                    completionDetail = new GoogleCloudRetailV2alphaCompletionDetail() {{
                                        completionAttributionToken = "occaecati";
                                        selectedPosition = 828735;
                                        selectedSuggestion = "sunt";
                                    }};
                                    entity = "odit";
                                    eventTime = "vero";
                                    eventType = "deleniti";
                                    experimentIds = new String[]{{
                                        add("quasi"),
                                        add("repellat"),
                                        add("atque"),
                                        add("magnam"),
                                    }};
                                    filter = "perspiciatis";
                                    offset = 227017;
                                    orderBy = "corrupti";
                                    pageCategories = new String[]{{
                                        add("nemo"),
                                    }};
                                    pageViewId = "delectus";
                                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductDetailInput[]{{
                                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                                    put("quaerat", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(7639.28),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("in"),
                                                            add("commodi"),
                                                            add("maxime"),
                                                        }};
                                                    }});
                                                    put("sed", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(1620.73),
                                                            add(8209),
                                                            add(9634.7),
                                                            add(6908.71),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("eligendi"),
                                                            add("hic"),
                                                        }};
                                                    }});
                                                    put("quo", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(7513.47),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("nisi"),
                                                            add("explicabo"),
                                                        }};
                                                    }});
                                                    put("sequi", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9701.31),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("numquam"),
                                                            add("vitae"),
                                                            add("maiores"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("architecto"),
                                                        add("rerum"),
                                                        add("assumenda"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("dolorem"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.BACKORDER;
                                                availableQuantity = 830948;
                                                availableTime = "nam";
                                                brands = new String[]{{
                                                    add("magnam"),
                                                }};
                                                categories = new String[]{{
                                                    add("expedita"),
                                                    add("autem"),
                                                    add("tempore"),
                                                    add("recusandae"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("officia"),
                                                    add("voluptas"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("corporis"),
                                                        add("excepturi"),
                                                        add("natus"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("necessitatibus"),
                                                        add("aspernatur"),
                                                        add("dolores"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("vero"),
                                                    add("eos"),
                                                    add("voluptatem"),
                                                }};
                                                description = "temporibus";
                                                expireTime = "id";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("a"),
                                                            add("minus"),
                                                        }};
                                                        type = "sed";
                                                    }}),
                                                }};
                                                gtin = "nam";
                                                id = "271a289c-57e8-454e-9043-9d2224656946";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 268173;
                                                        uri = "http://likable-ambition.name";
                                                        width = 271550;
                                                    }}),
                                                }};
                                                languageCode = "delectus";
                                                materials = new String[]{{
                                                    add("dolorum"),
                                                    add("libero"),
                                                }};
                                                name = "Nellie Ruecker";
                                                patterns = new String[]{{
                                                    add("sed"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                                    cost = 1806.6;
                                                    currencyCode = "consequuntur";
                                                    originalPrice = 3385.14;
                                                    price = 1146.81;
                                                    priceEffectiveTime = "occaecati";
                                                    priceExpireTime = "labore";
                                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 8527.37;
                                                            exclusiveMinimum = 6959.74;
                                                            maximum = 3502.02;
                                                            minimum = 3327.77;
                                                        }};
                                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 2679.88;
                                                            exclusiveMinimum = 954.56;
                                                            maximum = 618.89;
                                                            minimum = 6299.02;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "possimus";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "suscipit";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "ex";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "sint";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "est";
                                                    }}),
                                                }};
                                                publishTime = "doloribus";
                                                rating = new GoogleCloudRetailV2alphaRating() {{
                                                    averageRating = 5890.31;
                                                    ratingCount = 1594;
                                                    ratingHistogram = new Integer[]{{
                                                        add(145450),
                                                        add(421882),
                                                        add(779111),
                                                    }};
                                                }};
                                                retrievableFields = "molestiae";
                                                sizes = new String[]{{
                                                    add("facere"),
                                                    add("impedit"),
                                                    add("cupiditate"),
                                                    add("deleniti"),
                                                }};
                                                tags = new String[]{{
                                                    add("maiores"),
                                                }};
                                                title = "Mr.";
                                                ttl = "aliquid";
                                                type = GoogleCloudRetailV2alphaProductTypeEnum.VARIANT;
                                                uri = "https://moral-bandanna.net";
                                            }};
                                            quantity = 409857;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                                    put("nam", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(2387.39),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("hic"),
                                                            add("similique"),
                                                            add("fuga"),
                                                            add("consectetur"),
                                                        }};
                                                    }});
                                                    put("labore", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(7689.99),
                                                            add(2400.27),
                                                            add(831.64),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("voluptatibus"),
                                                            add("magnam"),
                                                            add("aperiam"),
                                                        }};
                                                    }});
                                                    put("ducimus", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(8981.97),
                                                            add(2528.54),
                                                            add(9873.62),
                                                            add(7578.24),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("alias"),
                                                            add("impedit"),
                                                            add("numquam"),
                                                            add("aspernatur"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("nihil"),
                                                        add("voluptatum"),
                                                        add("reiciendis"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("ullam"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.IN_STOCK;
                                                availableQuantity = 159496;
                                                availableTime = "voluptas";
                                                brands = new String[]{{
                                                    add("excepturi"),
                                                }};
                                                categories = new String[]{{
                                                    add("est"),
                                                    add("perferendis"),
                                                    add("quibusdam"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("ducimus"),
                                                    add("nisi"),
                                                    add("nisi"),
                                                    add("dolor"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("dolore"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("maxime"),
                                                        add("expedita"),
                                                        add("accusantium"),
                                                        add("ea"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("totam"),
                                                    add("optio"),
                                                    add("est"),
                                                    add("inventore"),
                                                }};
                                                description = "consequuntur";
                                                expireTime = "repellendus";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("enim"),
                                                        }};
                                                        type = "aspernatur";
                                                    }}),
                                                }};
                                                gtin = "perspiciatis";
                                                id = "270b8d57-22dd-4895-b8bc-f24db9596933";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 184738;
                                                        uri = "https://lasting-earplug.info";
                                                        width = 245990;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 240836;
                                                        uri = "https://oblong-dialect.org";
                                                        width = 473386;
                                                    }}),
                                                }};
                                                languageCode = "quas";
                                                materials = new String[]{{
                                                    add("saepe"),
                                                    add("amet"),
                                                    add("distinctio"),
                                                    add("vel"),
                                                }};
                                                name = "Jackie Douglas";
                                                patterns = new String[]{{
                                                    add("ullam"),
                                                    add("dolorum"),
                                                    add("soluta"),
                                                    add("cum"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                                    cost = 4498.8;
                                                    currencyCode = "delectus";
                                                    originalPrice = 4121.81;
                                                    price = 4144.38;
                                                    priceEffectiveTime = "fugit";
                                                    priceExpireTime = "ullam";
                                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 3545.54;
                                                            exclusiveMinimum = 438.62;
                                                            maximum = 6678.04;
                                                            minimum = 1842.04;
                                                        }};
                                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 5087.73;
                                                            exclusiveMinimum = 2371.89;
                                                            maximum = 5191.32;
                                                            minimum = 1835.04;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "deserunt";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "incidunt";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "deleniti";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "dolor";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "est";
                                                    }}),
                                                }};
                                                publishTime = "reiciendis";
                                                rating = new GoogleCloudRetailV2alphaRating() {{
                                                    averageRating = 8204.62;
                                                    ratingCount = 137831;
                                                    ratingHistogram = new Integer[]{{
                                                        add(80998),
                                                    }};
                                                }};
                                                retrievableFields = "minima";
                                                sizes = new String[]{{
                                                    add("facilis"),
                                                    add("deserunt"),
                                                    add("nisi"),
                                                }};
                                                tags = new String[]{{
                                                    add("voluptatem"),
                                                    add("illo"),
                                                }};
                                                title = "Ms.";
                                                ttl = "incidunt";
                                                type = GoogleCloudRetailV2alphaProductTypeEnum.COLLECTION;
                                                uri = "http://ill-informed-workbench.biz";
                                            }};
                                            quantity = 695408;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                                    put("eum", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(9197.3),
                                                            add(3659.98),
                                                            add(5654.46),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("expedita"),
                                                        }};
                                                    }});
                                                    put("quisquam", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(7080.75),
                                                            add(8264.78),
                                                            add(9219.16),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("ipsum"),
                                                            add("commodi"),
                                                            add("vitae"),
                                                            add("fugit"),
                                                        }};
                                                    }});
                                                    put("nam", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(2033.96),
                                                            add(7977.12),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("alias"),
                                                        }};
                                                    }});
                                                    put("ad", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(8168.25),
                                                            add(6625.15),
                                                            add(5395.37),
                                                            add(3106.48),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("dignissimos"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("modi"),
                                                        add("fuga"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("deleniti"),
                                                        add("officia"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.OUT_OF_STOCK;
                                                availableQuantity = 674077;
                                                availableTime = "dolor";
                                                brands = new String[]{{
                                                    add("illum"),
                                                    add("sit"),
                                                }};
                                                categories = new String[]{{
                                                    add("voluptas"),
                                                    add("expedita"),
                                                    add("voluptas"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("ea"),
                                                    add("vel"),
                                                    add("delectus"),
                                                    add("accusamus"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("consequatur"),
                                                        add("sed"),
                                                        add("accusantium"),
                                                        add("voluptates"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("maiores"),
                                                        add("quaerat"),
                                                        add("numquam"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("cum"),
                                                }};
                                                description = "incidunt";
                                                expireTime = "dolores";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("libero"),
                                                            add("omnis"),
                                                        }};
                                                        type = "excepturi";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("quisquam"),
                                                        }};
                                                        type = "corrupti";
                                                    }}),
                                                }};
                                                gtin = "repellendus";
                                                id = "bda6a61e-fa21-4982-98fd-0a9eba47f7d3";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 953861;
                                                        uri = "http://frightened-mob.info";
                                                        width = 294650;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 29789;
                                                        uri = "https://homely-parchment.com";
                                                        width = 538877;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 191425;
                                                        uri = "http://spiteful-manufacturer.info";
                                                        width = 631904;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 837739;
                                                        uri = "https://fuzzy-mutt.info";
                                                        width = 967401;
                                                    }}),
                                                }};
                                                languageCode = "repellendus";
                                                materials = new String[]{{
                                                    add("ab"),
                                                    add("mollitia"),
                                                    add("possimus"),
                                                    add("praesentium"),
                                                }};
                                                name = "Claudia O'Keefe";
                                                patterns = new String[]{{
                                                    add("quisquam"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                                    cost = 1138.08;
                                                    currencyCode = "cumque";
                                                    originalPrice = 1020.71;
                                                    price = 5754.04;
                                                    priceEffectiveTime = "eligendi";
                                                    priceExpireTime = "occaecati";
                                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 3396.51;
                                                            exclusiveMinimum = 7343.61;
                                                            maximum = 6379.69;
                                                            minimum = 6105.63;
                                                        }};
                                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 6037.83;
                                                            exclusiveMinimum = 5589.92;
                                                            maximum = 3858.28;
                                                            minimum = 4976.95;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "voluptatum";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "deserunt";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "dolor";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "hic";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "iure";
                                                    }}),
                                                }};
                                                publishTime = "sint";
                                                rating = new GoogleCloudRetailV2alphaRating() {{
                                                    averageRating = 4187.87;
                                                    ratingCount = 614368;
                                                    ratingHistogram = new Integer[]{{
                                                        add(67855),
                                                        add(683783),
                                                        add(952216),
                                                    }};
                                                }};
                                                retrievableFields = "dolor";
                                                sizes = new String[]{{
                                                    add("molestias"),
                                                    add("quod"),
                                                    add("repudiandae"),
                                                }};
                                                tags = new String[]{{
                                                    add("consectetur"),
                                                }};
                                                title = "Ms.";
                                                ttl = "vitae";
                                                type = GoogleCloudRetailV2alphaProductTypeEnum.PRIMARY;
                                                uri = "http://fantastic-melody.net";
                                            }};
                                            quantity = 452481;
                                        }}),
                                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                                    put("reprehenderit", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(6541.99),
                                                            add(105.85),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("delectus"),
                                                            add("qui"),
                                                            add("delectus"),
                                                            add("exercitationem"),
                                                        }};
                                                    }});
                                                    put("ipsum", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(413.46),
                                                            add(1533.7),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("debitis"),
                                                            add("a"),
                                                            add("itaque"),
                                                        }};
                                                    }});
                                                    put("eveniet", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                                        indexable = false;
                                                        numbers = new Double[]{{
                                                            add(5846.63),
                                                            add(2372.08),
                                                            add(3035.49),
                                                            add(717.51),
                                                        }};
                                                        searchable = false;
                                                        text = new String[]{{
                                                            add("sed"),
                                                            add("necessitatibus"),
                                                        }};
                                                    }});
                                                }};
                                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                                    ageGroups = new String[]{{
                                                        add("dignissimos"),
                                                        add("itaque"),
                                                        add("explicabo"),
                                                        add("ullam"),
                                                    }};
                                                    genders = new String[]{{
                                                        add("delectus"),
                                                    }};
                                                }};
                                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.IN_STOCK;
                                                availableQuantity = 796952;
                                                availableTime = "sunt";
                                                brands = new String[]{{
                                                    add("quam"),
                                                    add("illum"),
                                                }};
                                                categories = new String[]{{
                                                    add("officia"),
                                                    add("est"),
                                                    add("in"),
                                                    add("illo"),
                                                }};
                                                collectionMemberIds = new String[]{{
                                                    add("consequatur"),
                                                    add("delectus"),
                                                }};
                                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                                    colorFamilies = new String[]{{
                                                        add("dolore"),
                                                        add("nemo"),
                                                    }};
                                                    colors = new String[]{{
                                                        add("quo"),
                                                        add("maxime"),
                                                        add("delectus"),
                                                    }};
                                                }};
                                                conditions = new String[]{{
                                                    add("laboriosam"),
                                                    add("quam"),
                                                }};
                                                description = "fuga";
                                                expireTime = "officia";
                                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("soluta"),
                                                            add("tempore"),
                                                            add("culpa"),
                                                        }};
                                                        type = "fugiat";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("atque"),
                                                        }};
                                                        type = "ad";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("voluptates"),
                                                            add("ut"),
                                                            add("nesciunt"),
                                                            add("ab"),
                                                        }};
                                                        type = "quibusdam";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                                        placeIds = new String[]{{
                                                            add("quidem"),
                                                            add("delectus"),
                                                        }};
                                                        type = "nemo";
                                                    }}),
                                                }};
                                                gtin = "cumque";
                                                id = "838fbb8c-20cb-467f-84b4-25e99e6234c9";
                                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 454334;
                                                        uri = "https://intrepid-oleo.net";
                                                        width = 950337;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 923879;
                                                        uri = "https://leading-independent.net";
                                                        width = 321654;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 801059;
                                                        uri = "http://massive-surfboard.biz";
                                                        width = 722889;
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaImage() {{
                                                        height = 638085;
                                                        uri = "https://oddball-bedroom.org";
                                                        width = 314724;
                                                    }}),
                                                }};
                                                languageCode = "eaque";
                                                materials = new String[]{{
                                                    add("eveniet"),
                                                    add("delectus"),
                                                }};
                                                name = "Eduardo Armstrong";
                                                patterns = new String[]{{
                                                    add("nam"),
                                                    add("numquam"),
                                                }};
                                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                                    cost = 4884.33;
                                                    currencyCode = "nostrum";
                                                    originalPrice = 9801.6;
                                                    price = 839.97;
                                                    priceEffectiveTime = "autem";
                                                    priceExpireTime = "earum";
                                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 3266.35;
                                                            exclusiveMinimum = 4051.61;
                                                            maximum = 8216.72;
                                                            minimum = 2005.01;
                                                        }};
                                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                                            exclusiveMaximum = 5479.07;
                                                            exclusiveMinimum = 3438.14;
                                                            maximum = 6823.27;
                                                            minimum = 1957.89;
                                                        }};
                                                    }};
                                                }};
                                                primaryProductId = "maxime";
                                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "laborum";
                                                    }}),
                                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                                        promotionId = "eligendi";
                                                    }}),
                                                }};
                                                publishTime = "autem";
                                                rating = new GoogleCloudRetailV2alphaRating() {{
                                                    averageRating = 2380.22;
                                                    ratingCount = 124796;
                                                    ratingHistogram = new Integer[]{{
                                                        add(580248),
                                                        add(593366),
                                                        add(897434),
                                                    }};
                                                }};
                                                retrievableFields = "fugit";
                                                sizes = new String[]{{
                                                    add("optio"),
                                                    add("eveniet"),
                                                }};
                                                tags = new String[]{{
                                                    add("blanditiis"),
                                                    add("a"),
                                                    add("natus"),
                                                    add("sapiente"),
                                                }};
                                                title = "Dr.";
                                                ttl = "facilis";
                                                type = GoogleCloudRetailV2alphaProductTypeEnum.VARIANT;
                                                uri = "http://bright-appropriation.org";
                                            }};
                                            quantity = 390230;
                                        }}),
                                    }};
                                    purchaseTransaction = new GoogleCloudRetailV2alphaPurchaseTransaction() {{
                                        cost = 2458.49;
                                        currencyCode = "tempore";
                                        id = "bf817837-b01a-4fdd-b886-24189eb44873";
                                        revenue = 9580.6;
                                        tax = 3371.49;
                                    }};
                                    referrerUri = "accusantium";
                                    searchQuery = "ratione";
                                    sessionId = "consectetur";
                                    uri = "https://buzzing-modernist.net";
                                    userInfo = new GoogleCloudRetailV2alphaUserInfo() {{
                                        directUserRequest = false;
                                        ipAddress = "tempore";
                                        userAgent = "asperiores";
                                        userId = "quasi";
                                    }};
                                    visitorId = "consequuntur";
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "labore";
                key = "veritatis";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "itaque";
                uploadProtocol = "error";
            }};            

            RetailProjectsLocationsCatalogsUserEventsImportResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsImport(req, new RetailProjectsLocationsCatalogsUserEventsImportSecurity("expedita", "error") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPurgeUserEventsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsPurgeRequest req = new RetailProjectsLocationsCatalogsUserEventsPurgeRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaPurgeUserEventsRequest = new GoogleCloudRetailV2alphaPurgeUserEventsRequest() {{
                    filter = "voluptate";
                    force = false;
                }};;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "odit";
                key = "eius";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "dolorum";
                uploadProtocol = "alias";
            }};            

            RetailProjectsLocationsCatalogsUserEventsPurgeResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsPurge(req, new RetailProjectsLocationsCatalogsUserEventsPurgeSecurity("itaque", "ab") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRejoinUserEventsRequest;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsRejoinRequest req = new RetailProjectsLocationsCatalogsUserEventsRejoinRequest("sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaRejoinUserEventsRequest = new GoogleCloudRetailV2alphaRejoinUserEventsRequest() {{
                    userEventRejoinScope = GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnum.UNJOINED_EVENTS;
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "esse";
                key = "vero";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "omnis";
                uploadProtocol = "recusandae";
            }};            

            RetailProjectsLocationsCatalogsUserEventsRejoinResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsRejoin(req, new RetailProjectsLocationsCatalogsUserEventsRejoinSecurity("architecto", "voluptatibus") {{
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
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAudience;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaColorInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCompletionDetail;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfo;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPriceInfoPriceRange;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductAvailabilityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductDetailInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPurchaseTransaction;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaRating;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaUserEventInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaUserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsUserEventsWriteRequest req = new RetailProjectsLocationsCatalogsUserEventsWriteRequest("autem") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRetailV2alphaUserEventInput = new GoogleCloudRetailV2alphaUserEventInput() {{
                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                        put("amet", new GoogleCloudRetailV2alphaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(2916.66),
                                add(7625.81),
                                add(7763.34),
                                add(9222.07),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("libero"),
                                add("suscipit"),
                            }};
                        }});
                        put("illum", new GoogleCloudRetailV2alphaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(4010.83),
                                add(5751.11),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("repellat"),
                                add("sapiente"),
                            }};
                        }});
                        put("consectetur", new GoogleCloudRetailV2alphaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(3534.24),
                                add(4713.15),
                                add(2628.91),
                                add(4895.97),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("perferendis"),
                                add("architecto"),
                            }};
                        }});
                        put("amet", new GoogleCloudRetailV2alphaCustomAttribute() {{
                            indexable = false;
                            numbers = new Double[]{{
                                add(4713.02),
                                add(8878.65),
                            }};
                            searchable = false;
                            text = new String[]{{
                                add("magnam"),
                                add("maiores"),
                            }};
                        }});
                    }};
                    attributionToken = "ipsam";
                    cartId = "dicta";
                    completionDetail = new GoogleCloudRetailV2alphaCompletionDetail() {{
                        completionAttributionToken = "hic";
                        selectedPosition = 505558;
                        selectedSuggestion = "libero";
                    }};;
                    entity = "consequatur";
                    eventTime = "totam";
                    eventType = "tempora";
                    experimentIds = new String[]{{
                        add("dolor"),
                        add("sunt"),
                        add("omnis"),
                        add("quam"),
                    }};
                    filter = "officiis";
                    offset = 118236;
                    orderBy = "excepturi";
                    pageCategories = new String[]{{
                        add("deserunt"),
                    }};
                    pageViewId = "odit";
                    productDetails = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaProductDetailInput[]{{
                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                    put("quaerat", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                        indexable = false;
                                        numbers = new Double[]{{
                                            add(4990.05),
                                            add(9473.09),
                                        }};
                                        searchable = false;
                                        text = new String[]{{
                                            add("modi"),
                                            add("corrupti"),
                                            add("nihil"),
                                        }};
                                    }});
                                    put("eius", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                        indexable = false;
                                        numbers = new Double[]{{
                                            add(1459.73),
                                            add(8156.18),
                                            add(3683.72),
                                            add(7503.43),
                                        }};
                                        searchable = false;
                                        text = new String[]{{
                                            add("labore"),
                                            add("perspiciatis"),
                                            add("ducimus"),
                                            add("qui"),
                                        }};
                                    }});
                                }};
                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                    ageGroups = new String[]{{
                                        add("consectetur"),
                                    }};
                                    genders = new String[]{{
                                        add("saepe"),
                                    }};
                                }};
                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.OUT_OF_STOCK;
                                availableQuantity = 396188;
                                availableTime = "cum";
                                brands = new String[]{{
                                    add("rem"),
                                    add("voluptatibus"),
                                    add("officiis"),
                                    add("corporis"),
                                }};
                                categories = new String[]{{
                                    add("aut"),
                                    add("voluptatem"),
                                    add("libero"),
                                    add("excepturi"),
                                }};
                                collectionMemberIds = new String[]{{
                                    add("omnis"),
                                    add("officiis"),
                                }};
                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                    colorFamilies = new String[]{{
                                        add("magni"),
                                        add("sit"),
                                        add("velit"),
                                        add("voluptatum"),
                                    }};
                                    colors = new String[]{{
                                        add("neque"),
                                        add("aspernatur"),
                                    }};
                                }};
                                conditions = new String[]{{
                                    add("corporis"),
                                }};
                                description = "cupiditate";
                                expireTime = "aut";
                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("quo"),
                                            add("architecto"),
                                            add("voluptatem"),
                                            add("perspiciatis"),
                                        }};
                                        type = "ea";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("aperiam"),
                                            add("voluptatem"),
                                        }};
                                        type = "non";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("sequi"),
                                        }};
                                        type = "rerum";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("debitis"),
                                        }};
                                        type = "quis";
                                    }}),
                                }};
                                gtin = "eaque";
                                id = "44f65fe7-2dc4-4077-90cc-3f408efc15ce";
                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                    add(new GoogleCloudRetailV2alphaImage() {{
                                        height = 296257;
                                        uri = "https://illiterate-tax.com";
                                        width = 883426;
                                    }}),
                                    add(new GoogleCloudRetailV2alphaImage() {{
                                        height = 656939;
                                        uri = "https://ambitious-wholesaler.info";
                                        width = 332429;
                                    }}),
                                    add(new GoogleCloudRetailV2alphaImage() {{
                                        height = 683192;
                                        uri = "https://sugary-vampire.com";
                                        width = 648182;
                                    }}),
                                }};
                                languageCode = "eligendi";
                                materials = new String[]{{
                                    add("distinctio"),
                                    add("corporis"),
                                    add("quas"),
                                }};
                                name = "Miss Kent Mitchell";
                                patterns = new String[]{{
                                    add("suscipit"),
                                }};
                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                    cost = 8145.93;
                                    currencyCode = "pariatur";
                                    originalPrice = 7233.82;
                                    price = 3130.99;
                                    priceEffectiveTime = "corrupti";
                                    priceExpireTime = "sint";
                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                            exclusiveMaximum = 2597.16;
                                            exclusiveMinimum = 4265.71;
                                            maximum = 976.74;
                                            minimum = 8762.62;
                                        }};
                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                            exclusiveMaximum = 4848.33;
                                            exclusiveMinimum = 2539.16;
                                            maximum = 1446.21;
                                            minimum = 788.02;
                                        }};
                                    }};
                                }};
                                primaryProductId = "optio";
                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                        promotionId = "recusandae";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                        promotionId = "commodi";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                        promotionId = "possimus";
                                    }}),
                                }};
                                publishTime = "provident";
                                rating = new GoogleCloudRetailV2alphaRating() {{
                                    averageRating = 3304.59;
                                    ratingCount = 26389;
                                    ratingHistogram = new Integer[]{{
                                        add(952110),
                                    }};
                                }};
                                retrievableFields = "consequatur";
                                sizes = new String[]{{
                                    add("id"),
                                    add("error"),
                                    add("ratione"),
                                    add("perferendis"),
                                }};
                                tags = new String[]{{
                                    add("voluptas"),
                                    add("sint"),
                                    add("maiores"),
                                }};
                                title = "Ms.";
                                ttl = "fuga";
                                type = GoogleCloudRetailV2alphaProductTypeEnum.COLLECTION;
                                uri = "http://wordy-ingredient.com";
                            }};
                            quantity = 966738;
                        }}),
                        add(new GoogleCloudRetailV2alphaProductDetailInput() {{
                            product = new GoogleCloudRetailV2alphaProductInput() {{
                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCustomAttribute>() {{
                                    put("deleniti", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                        indexable = false;
                                        numbers = new Double[]{{
                                            add(246.14),
                                            add(279.55),
                                        }};
                                        searchable = false;
                                        text = new String[]{{
                                            add("voluptatem"),
                                            add("tempora"),
                                            add("occaecati"),
                                        }};
                                    }});
                                    put("quasi", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                        indexable = false;
                                        numbers = new Double[]{{
                                            add(4029.08),
                                        }};
                                        searchable = false;
                                        text = new String[]{{
                                            add("quas"),
                                        }};
                                    }});
                                    put("dolores", new GoogleCloudRetailV2alphaCustomAttribute() {{
                                        indexable = false;
                                        numbers = new Double[]{{
                                            add(4598.65),
                                        }};
                                        searchable = false;
                                        text = new String[]{{
                                            add("blanditiis"),
                                            add("laudantium"),
                                            add("voluptates"),
                                        }};
                                    }});
                                }};
                                audience = new GoogleCloudRetailV2alphaAudience() {{
                                    ageGroups = new String[]{{
                                        add("autem"),
                                        add("vel"),
                                        add("beatae"),
                                        add("quos"),
                                    }};
                                    genders = new String[]{{
                                        add("soluta"),
                                    }};
                                }};
                                availability = GoogleCloudRetailV2alphaProductAvailabilityEnum.BACKORDER;
                                availableQuantity = 897146;
                                availableTime = "perspiciatis";
                                brands = new String[]{{
                                    add("ullam"),
                                    add("unde"),
                                }};
                                categories = new String[]{{
                                    add("quidem"),
                                    add("magnam"),
                                    add("doloremque"),
                                    add("accusamus"),
                                }};
                                collectionMemberIds = new String[]{{
                                    add("sunt"),
                                    add("voluptas"),
                                    add("earum"),
                                    add("est"),
                                }};
                                colorInfo = new GoogleCloudRetailV2alphaColorInfo() {{
                                    colorFamilies = new String[]{{
                                        add("nihil"),
                                        add("nostrum"),
                                        add("rerum"),
                                        add("perferendis"),
                                    }};
                                    colors = new String[]{{
                                        add("ullam"),
                                        add("ratione"),
                                        add("eos"),
                                    }};
                                }};
                                conditions = new String[]{{
                                    add("modi"),
                                    add("illum"),
                                    add("error"),
                                }};
                                description = "consectetur";
                                expireTime = "reprehenderit";
                                fulfillmentInfo = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaFulfillmentInfo[]{{
                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("culpa"),
                                            add("culpa"),
                                            add("a"),
                                        }};
                                        type = "magnam";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("ad"),
                                            add("quia"),
                                        }};
                                        type = "quod";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("voluptatum"),
                                            add("numquam"),
                                        }};
                                        type = "explicabo";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaFulfillmentInfo() {{
                                        placeIds = new String[]{{
                                            add("cupiditate"),
                                            add("tempore"),
                                            add("odit"),
                                            add("est"),
                                        }};
                                        type = "at";
                                    }}),
                                }};
                                gtin = "ipsum";
                                id = "2dafe81a-88f4-4444-973f-ecd47353f63c";
                                images = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaImage[]{{
                                    add(new GoogleCloudRetailV2alphaImage() {{
                                        height = 152302;
                                        uri = "http://periodic-compromise.info";
                                        width = 604027;
                                    }}),
                                    add(new GoogleCloudRetailV2alphaImage() {{
                                        height = 646321;
                                        uri = "https://idle-mouton.net";
                                        width = 869602;
                                    }}),
                                    add(new GoogleCloudRetailV2alphaImage() {{
                                        height = 321007;
                                        uri = "https://scared-safe.org";
                                        width = 465092;
                                    }}),
                                }};
                                languageCode = "occaecati";
                                materials = new String[]{{
                                    add("culpa"),
                                    add("dicta"),
                                    add("rem"),
                                    add("fuga"),
                                }};
                                name = "Christy Cummings";
                                patterns = new String[]{{
                                    add("omnis"),
                                    add("quis"),
                                    add("quos"),
                                    add("natus"),
                                }};
                                priceInfo = new GoogleCloudRetailV2alphaPriceInfo() {{
                                    cost = 3064.27;
                                    currencyCode = "vero";
                                    originalPrice = 3944.91;
                                    price = 5066.89;
                                    priceEffectiveTime = "eum";
                                    priceExpireTime = "vitae";
                                    priceRange = new GoogleCloudRetailV2alphaPriceInfoPriceRange() {{
                                        originalPrice = new GoogleCloudRetailV2alphaInterval() {{
                                            exclusiveMaximum = 6574.85;
                                            exclusiveMinimum = 8187.39;
                                            maximum = 7258.94;
                                            minimum = 3532.14;
                                        }};
                                        price = new GoogleCloudRetailV2alphaInterval() {{
                                            exclusiveMaximum = 3129.53;
                                            exclusiveMinimum = 9830.67;
                                            maximum = 6147.37;
                                            minimum = 8838.26;
                                        }};
                                    }};
                                }};
                                primaryProductId = "ipsam";
                                promotions = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaPromotion[]{{
                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                        promotionId = "odio";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                        promotionId = "ullam";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                        promotionId = "inventore";
                                    }}),
                                    add(new GoogleCloudRetailV2alphaPromotion() {{
                                        promotionId = "eligendi";
                                    }}),
                                }};
                                publishTime = "occaecati";
                                rating = new GoogleCloudRetailV2alphaRating() {{
                                    averageRating = 9863.3;
                                    ratingCount = 896443;
                                    ratingHistogram = new Integer[]{{
                                        add(953406),
                                        add(470732),
                                        add(334635),
                                    }};
                                }};
                                retrievableFields = "aut";
                                sizes = new String[]{{
                                    add("rerum"),
                                }};
                                tags = new String[]{{
                                    add("nulla"),
                                    add("quod"),
                                    add("non"),
                                    add("dolore"),
                                }};
                                title = "Mrs.";
                                ttl = "alias";
                                type = GoogleCloudRetailV2alphaProductTypeEnum.VARIANT;
                                uri = "http://bitter-vet.com";
                            }};
                            quantity = 474267;
                        }}),
                    }};
                    purchaseTransaction = new GoogleCloudRetailV2alphaPurchaseTransaction() {{
                        cost = 4211.11;
                        currencyCode = "dolore";
                        id = "456379f3-fb27-4e21-b862-657b36fc6b9f";
                        revenue = 3392.21;
                        tax = 5341.56;
                    }};;
                    referrerUri = "iusto";
                    searchQuery = "quod";
                    sessionId = "saepe";
                    uri = "http://darling-final.net";
                    userInfo = new GoogleCloudRetailV2alphaUserInfo() {{
                        directUserRequest = false;
                        ipAddress = "aliquid";
                        userAgent = "quam";
                        userId = "ea";
                    }};;
                    visitorId = "numquam";
                }};;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "velit";
                key = "quasi";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "veniam";
                uploadProtocol = "quae";
                writeAsync = false;
            }};            

            RetailProjectsLocationsCatalogsUserEventsWriteResponse res = sdk.projects.retailProjectsLocationsCatalogsUserEventsWrite(req, new RetailProjectsLocationsCatalogsUserEventsWriteSecurity("dolore", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaUserEvent != null) {
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

            RetailProjectsOperationsGetRequest req = new RetailProjectsOperationsGetRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "porro";
                key = "cumque";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "fugit";
                uploadProtocol = "amet";
            }};            

            RetailProjectsOperationsGetResponse res = sdk.projects.retailProjectsOperationsGet(req, new RetailProjectsOperationsGetSecurity("culpa", "facilis") {{
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

            RetailProjectsOperationsListRequest req = new RetailProjectsOperationsListRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "impedit";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "earum";
                filter = "fuga";
                key = "est";
                oauthToken = "distinctio";
                pageSize = 854646L;
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "praesentium";
                uploadProtocol = "officiis";
            }};            

            RetailProjectsOperationsListResponse res = sdk.projects.retailProjectsOperationsList(req, new RetailProjectsOperationsListSecurity("esse", "vitae") {{
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
