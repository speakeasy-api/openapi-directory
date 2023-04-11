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
     * Creates a catalog item.
     */
    recommendationengineProjectsLocationsCatalogsCatalogItemsCreate(req: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest, security: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse>;
    /**
     * Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
     */
    recommendationengineProjectsLocationsCatalogsCatalogItemsImport(req: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest, security: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse>;
    /**
     * Gets a list of catalog items.
     */
    recommendationengineProjectsLocationsCatalogsCatalogItemsList(req: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest, security: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse>;
    /**
     * Updates a catalog item. Partial updating is supported. Non-existing items will be created.
     */
    recommendationengineProjectsLocationsCatalogsCatalogItemsPatch(req: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest, security: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse>;
    /**
     * Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
     */
    recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest, security: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse>;
    /**
     * Register an API key for use with predict method.
     */
    recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest, security: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse>;
    /**
     * Unregister an apiKey from using for predict method.
     */
    recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteRequest, security: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteResponse>;
    /**
     * List the registered apiKeys for use with predict method.
     */
    recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListRequest, security: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse>;
    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
     */
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest, security: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse>;
    /**
     * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     */
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest, security: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse>;
    /**
     * Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
     */
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest, security: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse>;
    /**
     * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
     */
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest, security: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse>;
    /**
     * Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
     */
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest, security: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse>;
    /**
     * Writes a single user event.
     */
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest, security: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse>;
    /**
     * Lists all the catalog configurations associated with the project.
     */
    recommendationengineProjectsLocationsCatalogsList(req: operations.RecommendationengineProjectsLocationsCatalogsListRequest, security: operations.RecommendationengineProjectsLocationsCatalogsListSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsListResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    recommendationengineProjectsLocationsCatalogsOperationsGet(req: operations.RecommendationengineProjectsLocationsCatalogsOperationsGetRequest, security: operations.RecommendationengineProjectsLocationsCatalogsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    recommendationengineProjectsLocationsCatalogsOperationsList(req: operations.RecommendationengineProjectsLocationsCatalogsOperationsListRequest, security: operations.RecommendationengineProjectsLocationsCatalogsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsOperationsListResponse>;
}
