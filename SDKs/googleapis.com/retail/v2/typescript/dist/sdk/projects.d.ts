import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
     */
    retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest, security: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse>;
    /**
     * Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.
     */
    retailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute(req: operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest, security: operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse>;
    /**
     * Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.
     */
    retailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute(req: operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest, security: operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse>;
    /**
     * It is recommended to use the ProductService.AddLocalInventories method instead of ProductService.AddFulfillmentPlaces. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
     */
    retailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces(req: operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest, security: operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse>;
    /**
     * Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
     */
    retailProjectsLocationsCatalogsBranchesProductsAddLocalInventories(req: operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest, security: operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse>;
    /**
     * Creates a Product.
     */
    retailProjectsLocationsCatalogsBranchesProductsCreate(req: operations.RetailProjectsLocationsCatalogsBranchesProductsCreateRequest, security: operations.RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsBranchesProductsCreateResponse>;
    /**
     * Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
     */
    retailProjectsLocationsCatalogsBranchesProductsImport(req: operations.RetailProjectsLocationsCatalogsBranchesProductsImportRequest, security: operations.RetailProjectsLocationsCatalogsBranchesProductsImportSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsBranchesProductsImportResponse>;
    /**
     * Gets a list of Products.
     */
    retailProjectsLocationsCatalogsBranchesProductsList(req: operations.RetailProjectsLocationsCatalogsBranchesProductsListRequest, security: operations.RetailProjectsLocationsCatalogsBranchesProductsListSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsBranchesProductsListResponse>;
    /**
     * It is recommended to use the ProductService.RemoveLocalInventories method instead of ProductService.RemoveFulfillmentPlaces. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
     */
    retailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces(req: operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest, security: operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse>;
    /**
     * Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
     */
    retailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories(req: operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest, security: operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse>;
    /**
     * Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.
     */
    retailProjectsLocationsCatalogsBranchesProductsSetInventory(req: operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest, security: operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse>;
    /**
     * Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
     */
    retailProjectsLocationsCatalogsCompleteQuery(req: operations.RetailProjectsLocationsCatalogsCompleteQueryRequest, security: operations.RetailProjectsLocationsCatalogsCompleteQuerySecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsCompleteQueryResponse>;
    /**
     * Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
     */
    retailProjectsLocationsCatalogsCompletionDataImport(req: operations.RetailProjectsLocationsCatalogsCompletionDataImportRequest, security: operations.RetailProjectsLocationsCatalogsCompletionDataImportSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsCompletionDataImportResponse>;
    /**
     * Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
     */
    retailProjectsLocationsCatalogsControlsCreate(req: operations.RetailProjectsLocationsCatalogsControlsCreateRequest, security: operations.RetailProjectsLocationsCatalogsControlsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsControlsCreateResponse>;
    /**
     * Lists all Controls by their parent Catalog.
     */
    retailProjectsLocationsCatalogsControlsList(req: operations.RetailProjectsLocationsCatalogsControlsListRequest, security: operations.RetailProjectsLocationsCatalogsControlsListSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsControlsListResponse>;
    /**
     * Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
     */
    retailProjectsLocationsCatalogsGetDefaultBranch(req: operations.RetailProjectsLocationsCatalogsGetDefaultBranchRequest, security: operations.RetailProjectsLocationsCatalogsGetDefaultBranchSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsGetDefaultBranchResponse>;
    /**
     * Lists all the Catalogs associated with the project.
     */
    retailProjectsLocationsCatalogsList(req: operations.RetailProjectsLocationsCatalogsListRequest, security: operations.RetailProjectsLocationsCatalogsListSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsListResponse>;
    /**
     * Creates a new model.
     */
    retailProjectsLocationsCatalogsModelsCreate(req: operations.RetailProjectsLocationsCatalogsModelsCreateRequest, security: operations.RetailProjectsLocationsCatalogsModelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsModelsCreateResponse>;
    /**
     * Lists all the models linked to this event store.
     */
    retailProjectsLocationsCatalogsModelsList(req: operations.RetailProjectsLocationsCatalogsModelsListRequest, security: operations.RetailProjectsLocationsCatalogsModelsListSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsModelsListResponse>;
    /**
     * Pauses the training of an existing model.
     */
    retailProjectsLocationsCatalogsModelsPause(req: operations.RetailProjectsLocationsCatalogsModelsPauseRequest, security: operations.RetailProjectsLocationsCatalogsModelsPauseSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsModelsPauseResponse>;
    /**
     * Resumes the training of an existing model.
     */
    retailProjectsLocationsCatalogsModelsResume(req: operations.RetailProjectsLocationsCatalogsModelsResumeRequest, security: operations.RetailProjectsLocationsCatalogsModelsResumeSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsModelsResumeResponse>;
    /**
     * Tunes an existing model.
     */
    retailProjectsLocationsCatalogsModelsTune(req: operations.RetailProjectsLocationsCatalogsModelsTuneRequest, security: operations.RetailProjectsLocationsCatalogsModelsTuneSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsModelsTuneResponse>;
    /**
     * Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.
     */
    retailProjectsLocationsCatalogsServingConfigsAddControl(req: operations.RetailProjectsLocationsCatalogsServingConfigsAddControlRequest, security: operations.RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsServingConfigsAddControlResponse>;
    /**
     * Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.
     */
    retailProjectsLocationsCatalogsServingConfigsCreate(req: operations.RetailProjectsLocationsCatalogsServingConfigsCreateRequest, security: operations.RetailProjectsLocationsCatalogsServingConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsServingConfigsCreateResponse>;
    /**
     * Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
     */
    retailProjectsLocationsCatalogsServingConfigsDelete(req: operations.RetailProjectsLocationsCatalogsServingConfigsDeleteRequest, security: operations.RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsServingConfigsDeleteResponse>;
    /**
     * Lists all ServingConfigs linked to this catalog.
     */
    retailProjectsLocationsCatalogsServingConfigsList(req: operations.RetailProjectsLocationsCatalogsServingConfigsListRequest, security: operations.RetailProjectsLocationsCatalogsServingConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsServingConfigsListResponse>;
    /**
     * Updates a ServingConfig.
     */
    retailProjectsLocationsCatalogsServingConfigsPatch(req: operations.RetailProjectsLocationsCatalogsServingConfigsPatchRequest, security: operations.RetailProjectsLocationsCatalogsServingConfigsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsServingConfigsPatchResponse>;
    /**
     * Makes a recommendation prediction.
     */
    retailProjectsLocationsCatalogsServingConfigsPredict(req: operations.RetailProjectsLocationsCatalogsServingConfigsPredictRequest, security: operations.RetailProjectsLocationsCatalogsServingConfigsPredictSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsServingConfigsPredictResponse>;
    /**
     * Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.
     */
    retailProjectsLocationsCatalogsServingConfigsRemoveControl(req: operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest, security: operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse>;
    /**
     * Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
     */
    retailProjectsLocationsCatalogsServingConfigsSearch(req: operations.RetailProjectsLocationsCatalogsServingConfigsSearchRequest, security: operations.RetailProjectsLocationsCatalogsServingConfigsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsServingConfigsSearchResponse>;
    /**
     * Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/* /locations/* /catalogs/* /branches/1` is set as default, setting SearchRequest.branch to `projects/* /locations/* /catalogs/* /branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/* /locations/* /catalogs/* /branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/* /locations/* /catalogs/* /branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.
     */
    retailProjectsLocationsCatalogsSetDefaultBranch(req: operations.RetailProjectsLocationsCatalogsSetDefaultBranchRequest, security: operations.RetailProjectsLocationsCatalogsSetDefaultBranchSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsSetDefaultBranchResponse>;
    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     */
    retailProjectsLocationsCatalogsUserEventsCollect(req: operations.RetailProjectsLocationsCatalogsUserEventsCollectRequest, security: operations.RetailProjectsLocationsCatalogsUserEventsCollectSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsUserEventsCollectResponse>;
    /**
     * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.
     */
    retailProjectsLocationsCatalogsUserEventsImport(req: operations.RetailProjectsLocationsCatalogsUserEventsImportRequest, security: operations.RetailProjectsLocationsCatalogsUserEventsImportSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsUserEventsImportResponse>;
    /**
     * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
     */
    retailProjectsLocationsCatalogsUserEventsPurge(req: operations.RetailProjectsLocationsCatalogsUserEventsPurgeRequest, security: operations.RetailProjectsLocationsCatalogsUserEventsPurgeSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsUserEventsPurgeResponse>;
    /**
     * Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.
     */
    retailProjectsLocationsCatalogsUserEventsRejoin(req: operations.RetailProjectsLocationsCatalogsUserEventsRejoinRequest, security: operations.RetailProjectsLocationsCatalogsUserEventsRejoinSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsUserEventsRejoinResponse>;
    /**
     * Writes a single user event.
     */
    retailProjectsLocationsCatalogsUserEventsWrite(req: operations.RetailProjectsLocationsCatalogsUserEventsWriteRequest, security: operations.RetailProjectsLocationsCatalogsUserEventsWriteSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsLocationsCatalogsUserEventsWriteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    retailProjectsOperationsGet(req: operations.RetailProjectsOperationsGetRequest, security: operations.RetailProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    retailProjectsOperationsList(req: operations.RetailProjectsOperationsListRequest, security: operations.RetailProjectsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.RetailProjectsOperationsListResponse>;
}
