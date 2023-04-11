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
     * Create a DataAttributeBinding resource.
     */
    dataplexProjectsLocationsDataAttributeBindingsCreate(req: operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest, security: operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataAttributeBindingsCreateResponse>;
    /**
     * Lists DataAttributeBinding resources in a project and location.
     */
    dataplexProjectsLocationsDataAttributeBindingsList(req: operations.DataplexProjectsLocationsDataAttributeBindingsListRequest, security: operations.DataplexProjectsLocationsDataAttributeBindingsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataAttributeBindingsListResponse>;
    /**
     * Creates a DataScan resource.
     */
    dataplexProjectsLocationsDataScansCreate(req: operations.DataplexProjectsLocationsDataScansCreateRequest, security: operations.DataplexProjectsLocationsDataScansCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataScansCreateResponse>;
    /**
     * Lists DataScans.
     */
    dataplexProjectsLocationsDataScansList(req: operations.DataplexProjectsLocationsDataScansListRequest, security: operations.DataplexProjectsLocationsDataScansListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataScansListResponse>;
    /**
     * Create a DataAttribute resource.
     */
    dataplexProjectsLocationsDataTaxonomiesAttributesCreate(req: operations.DataplexProjectsLocationsDataTaxonomiesAttributesCreateRequest, security: operations.DataplexProjectsLocationsDataTaxonomiesAttributesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataTaxonomiesAttributesCreateResponse>;
    /**
     * Lists Data Attribute resources in a DataTaxonomy.
     */
    dataplexProjectsLocationsDataTaxonomiesAttributesList(req: operations.DataplexProjectsLocationsDataTaxonomiesAttributesListRequest, security: operations.DataplexProjectsLocationsDataTaxonomiesAttributesListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataTaxonomiesAttributesListResponse>;
    /**
     * Create a DataTaxonomy resource.
     */
    dataplexProjectsLocationsDataTaxonomiesCreate(req: operations.DataplexProjectsLocationsDataTaxonomiesCreateRequest, security: operations.DataplexProjectsLocationsDataTaxonomiesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataTaxonomiesCreateResponse>;
    /**
     * Lists DataTaxonomy resources in a project and location.
     */
    dataplexProjectsLocationsDataTaxonomiesList(req: operations.DataplexProjectsLocationsDataTaxonomiesListRequest, security: operations.DataplexProjectsLocationsDataTaxonomiesListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataTaxonomiesListResponse>;
    /**
     * Create a content.
     */
    dataplexProjectsLocationsLakesContentCreate(req: operations.DataplexProjectsLocationsLakesContentCreateRequest, security: operations.DataplexProjectsLocationsLakesContentCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesContentCreateResponse>;
    /**
     * List content.
     */
    dataplexProjectsLocationsLakesContentList(req: operations.DataplexProjectsLocationsLakesContentListRequest, security: operations.DataplexProjectsLocationsLakesContentListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesContentListResponse>;
    /**
     * Create a content.
     */
    dataplexProjectsLocationsLakesContentitemsCreate(req: operations.DataplexProjectsLocationsLakesContentitemsCreateRequest, security: operations.DataplexProjectsLocationsLakesContentitemsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesContentitemsCreateResponse>;
    /**
     * List content.
     */
    dataplexProjectsLocationsLakesContentitemsList(req: operations.DataplexProjectsLocationsLakesContentitemsListRequest, security: operations.DataplexProjectsLocationsLakesContentitemsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesContentitemsListResponse>;
    /**
     * Creates a lake resource.
     */
    dataplexProjectsLocationsLakesCreate(req: operations.DataplexProjectsLocationsLakesCreateRequest, security: operations.DataplexProjectsLocationsLakesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesCreateResponse>;
    /**
     * Create an environment resource.
     */
    dataplexProjectsLocationsLakesEnvironmentsCreate(req: operations.DataplexProjectsLocationsLakesEnvironmentsCreateRequest, security: operations.DataplexProjectsLocationsLakesEnvironmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesEnvironmentsCreateResponse>;
    /**
     * Lists environments under the given lake.
     */
    dataplexProjectsLocationsLakesEnvironmentsList(req: operations.DataplexProjectsLocationsLakesEnvironmentsListRequest, security: operations.DataplexProjectsLocationsLakesEnvironmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesEnvironmentsListResponse>;
    /**
     * Lists session resources in an environment.
     */
    dataplexProjectsLocationsLakesEnvironmentsSessionsList(req: operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest, security: operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse>;
    /**
     * Lists lake resources in a project and location.
     */
    dataplexProjectsLocationsLakesList(req: operations.DataplexProjectsLocationsLakesListRequest, security: operations.DataplexProjectsLocationsLakesListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesListResponse>;
    /**
     * Creates a task resource within a lake.
     */
    dataplexProjectsLocationsLakesTasksCreate(req: operations.DataplexProjectsLocationsLakesTasksCreateRequest, security: operations.DataplexProjectsLocationsLakesTasksCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesTasksCreateResponse>;
    /**
     * Lists Jobs under the given task.
     */
    dataplexProjectsLocationsLakesTasksJobsList(req: operations.DataplexProjectsLocationsLakesTasksJobsListRequest, security: operations.DataplexProjectsLocationsLakesTasksJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesTasksJobsListResponse>;
    /**
     * Lists tasks under the given lake.
     */
    dataplexProjectsLocationsLakesTasksList(req: operations.DataplexProjectsLocationsLakesTasksListRequest, security: operations.DataplexProjectsLocationsLakesTasksListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesTasksListResponse>;
    /**
     * Run an on demand execution of a Task.
     */
    dataplexProjectsLocationsLakesTasksRun(req: operations.DataplexProjectsLocationsLakesTasksRunRequest, security: operations.DataplexProjectsLocationsLakesTasksRunSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesTasksRunResponse>;
    /**
     * Lists action resources in an asset.
     */
    dataplexProjectsLocationsLakesZonesAssetsActionsList(req: operations.DataplexProjectsLocationsLakesZonesAssetsActionsListRequest, security: operations.DataplexProjectsLocationsLakesZonesAssetsActionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsActionsListResponse>;
    /**
     * Creates an asset resource.
     */
    dataplexProjectsLocationsLakesZonesAssetsCreate(req: operations.DataplexProjectsLocationsLakesZonesAssetsCreateRequest, security: operations.DataplexProjectsLocationsLakesZonesAssetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsCreateResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy(req: operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyRequest, security: operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyResponse>;
    /**
     * Lists asset resources in a zone.
     */
    dataplexProjectsLocationsLakesZonesAssetsList(req: operations.DataplexProjectsLocationsLakesZonesAssetsListRequest, security: operations.DataplexProjectsLocationsLakesZonesAssetsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsListResponse>;
    /**
     * Updates an asset resource.
     */
    dataplexProjectsLocationsLakesZonesAssetsPatch(req: operations.DataplexProjectsLocationsLakesZonesAssetsPatchRequest, security: operations.DataplexProjectsLocationsLakesZonesAssetsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     */
    dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy(req: operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest, security: operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions(req: operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsRequest, security: operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsResponse>;
    /**
     * Creates a zone resource within a lake.
     */
    dataplexProjectsLocationsLakesZonesCreate(req: operations.DataplexProjectsLocationsLakesZonesCreateRequest, security: operations.DataplexProjectsLocationsLakesZonesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesCreateResponse>;
    /**
     * Create a metadata entity.
     */
    dataplexProjectsLocationsLakesZonesEntitiesCreate(req: operations.DataplexProjectsLocationsLakesZonesEntitiesCreateRequest, security: operations.DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesEntitiesCreateResponse>;
    /**
     * List metadata entities in a zone.
     */
    dataplexProjectsLocationsLakesZonesEntitiesList(req: operations.DataplexProjectsLocationsLakesZonesEntitiesListRequest, security: operations.DataplexProjectsLocationsLakesZonesEntitiesListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesEntitiesListResponse>;
    /**
     * Create a metadata partition.
     */
    dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate(req: operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest, security: operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateResponse>;
    /**
     * List metadata partitions of an entity.
     */
    dataplexProjectsLocationsLakesZonesEntitiesPartitionsList(req: operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListRequest, security: operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListResponse>;
    /**
     * Update a metadata entity. Only supports full resource update.
     */
    dataplexProjectsLocationsLakesZonesEntitiesUpdate(req: operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest, security: operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse>;
    /**
     * Lists zone resources in a lake.
     */
    dataplexProjectsLocationsLakesZonesList(req: operations.DataplexProjectsLocationsLakesZonesListRequest, security: operations.DataplexProjectsLocationsLakesZonesListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    dataplexProjectsLocationsList(req: operations.DataplexProjectsLocationsListRequest, security: operations.DataplexProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     */
    dataplexProjectsLocationsOperationsCancel(req: operations.DataplexProjectsLocationsOperationsCancelRequest, security: operations.DataplexProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
     */
    dataplexProjectsLocationsOperationsDelete(req: operations.DataplexProjectsLocationsOperationsDeleteRequest, security: operations.DataplexProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    dataplexProjectsLocationsOperationsGet(req: operations.DataplexProjectsLocationsOperationsGetRequest, security: operations.DataplexProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     */
    dataplexProjectsLocationsOperationsList(req: operations.DataplexProjectsLocationsOperationsListRequest, security: operations.DataplexProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsOperationsListResponse>;
}
