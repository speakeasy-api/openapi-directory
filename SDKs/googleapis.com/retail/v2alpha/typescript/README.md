# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/retail/v2alpha/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/retail/v2alpha/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest,
  RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum,
  GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum,
  GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum,
  GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum,
  GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum,
  GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudRetailV2alphaAddCatalogAttributeRequestInput: {
    catalogAttribute: {
      dynamicFacetableOption: GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum.DynamicFacetableEnabled,
      exactSearchableOption: GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum.ExactSearchableDisabled,
      indexableOption: GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum.IndexableDisabled,
      key: "unde",
      recommendationsFilteringOption: GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum.RecommendationsFilteringEnabled,
      retrievableOption: GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum.RetrievableEnabled,
      searchableOption: GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum.SearchableDisabled,
    },
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  attributesConfig: "deserunt",
  callback: "suscipit",
  fields: "iure",
  key: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.projects.retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req).then((res: RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute` - Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
* `retailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes` - Removes all specified CatalogAttributes from the AttributesConfig.
* `retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute` - Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.
* `retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute` - Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.
* `retailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces` - It is recommended to use the ProductService.AddLocalInventories method instead of ProductService.AddFulfillmentPlaces. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* `retailProjectsLocationsCatalogsBranchesProductsAddLocalInventories` - Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* `retailProjectsLocationsCatalogsBranchesProductsCreate` - Creates a Product.
* `retailProjectsLocationsCatalogsBranchesProductsImport` - Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
* `retailProjectsLocationsCatalogsBranchesProductsList` - Gets a list of Products.
* `retailProjectsLocationsCatalogsBranchesProductsPurge` - Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.
* `retailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces` - It is recommended to use the ProductService.RemoveLocalInventories method instead of ProductService.RemoveFulfillmentPlaces. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* `retailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories` - Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* `retailProjectsLocationsCatalogsBranchesProductsSetInventory` - Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.
* `retailProjectsLocationsCatalogsCompleteQuery` - Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retailProjectsLocationsCatalogsCompletionDataImport` - Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retailProjectsLocationsCatalogsControlsCreate` - Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
* `retailProjectsLocationsCatalogsControlsList` - Lists all Controls by their parent Catalog.
* `retailProjectsLocationsCatalogsGetDefaultBranch` - Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
* `retailProjectsLocationsCatalogsList` - Lists all the Catalogs associated with the project.
* `retailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateMerchantCenterAccountLink` - Creates a MerchantCenterAccountLink. MerchantCenterAccountLink cannot be set to a different oneof field, if so an INVALID_ARGUMENT is returned.
* `retailProjectsLocationsCatalogsMerchantCenterAccountLinksList` - Lists all MerchantCenterAccountLinks under the specified parent Catalog.
* `retailProjectsLocationsCatalogsModelsCreate` - Creates a new model.
* `retailProjectsLocationsCatalogsModelsList` - Lists all the models linked to this event store.
* `retailProjectsLocationsCatalogsModelsPause` - Pauses the training of an existing model.
* `retailProjectsLocationsCatalogsModelsResume` - Resumes the training of an existing model.
* `retailProjectsLocationsCatalogsModelsTune` - Tunes an existing model.
* `retailProjectsLocationsCatalogsServingConfigsAddControl` - Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.
* `retailProjectsLocationsCatalogsServingConfigsCreate` - Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.
* `retailProjectsLocationsCatalogsServingConfigsDelete` - Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
* `retailProjectsLocationsCatalogsServingConfigsList` - Lists all ServingConfigs linked to this catalog.
* `retailProjectsLocationsCatalogsServingConfigsPatch` - Updates a ServingConfig.
* `retailProjectsLocationsCatalogsServingConfigsPredict` - Makes a recommendation prediction.
* `retailProjectsLocationsCatalogsServingConfigsRemoveControl` - Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.
* `retailProjectsLocationsCatalogsServingConfigsSearch` - Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retailProjectsLocationsCatalogsSetDefaultBranch` - Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.
* `retailProjectsLocationsCatalogsUserEventsCollect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* `retailProjectsLocationsCatalogsUserEventsImport` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.
* `retailProjectsLocationsCatalogsUserEventsPurge` - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* `retailProjectsLocationsCatalogsUserEventsRejoin` - Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.
* `retailProjectsLocationsCatalogsUserEventsWrite` - Writes a single user event.
* `retailProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `retailProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

