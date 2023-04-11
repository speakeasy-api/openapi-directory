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
     * Creates a Document.
     */
    discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest, security: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse>;
    /**
     * Deletes a Document.
     */
    discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete(req: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest, security: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse>;
    /**
     * Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
     */
    discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport(req: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest, security: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse>;
    /**
     * Gets a list of Documents.
     */
    discoveryengineProjectsLocationsDataStoresBranchesDocumentsList(req: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListRequest, security: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse>;
    /**
     * Updates a Document.
     */
    discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch(req: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest, security: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse>;
    /**
     * Makes a recommendation, which requires a contextual user event.
     */
    discoveryengineProjectsLocationsDataStoresServingConfigsRecommend(req: operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest, security: operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse>;
    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     */
    discoveryengineProjectsLocationsDataStoresUserEventsCollect(req: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest, security: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse>;
    /**
     * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     */
    discoveryengineProjectsLocationsDataStoresUserEventsImport(req: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest, security: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse>;
    /**
     * Writes a single user event.
     */
    discoveryengineProjectsLocationsDataStoresUserEventsWrite(req: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest, security: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    discoveryengineProjectsOperationsGet(req: operations.DiscoveryengineProjectsOperationsGetRequest, security: operations.DiscoveryengineProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    discoveryengineProjectsOperationsList(req: operations.DiscoveryengineProjectsOperationsListRequest, security: operations.DiscoveryengineProjectsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsOperationsListResponse>;
}
