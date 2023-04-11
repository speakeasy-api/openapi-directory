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
     * Aggregates the requested fields based on provided function.
     */
    migrationcenterProjectsLocationsAssetsAggregateValues(req: operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest, security: operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsAssetsAggregateValuesResponse>;
    /**
     * Deletes list of Assets.
     */
    migrationcenterProjectsLocationsAssetsBatchDelete(req: operations.MigrationcenterProjectsLocationsAssetsBatchDeleteRequest, security: operations.MigrationcenterProjectsLocationsAssetsBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsAssetsBatchDeleteResponse>;
    /**
     * Updates the parameters of a list of assets.
     */
    migrationcenterProjectsLocationsAssetsBatchUpdate(req: operations.MigrationcenterProjectsLocationsAssetsBatchUpdateRequest, security: operations.MigrationcenterProjectsLocationsAssetsBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsAssetsBatchUpdateResponse>;
    /**
     * Lists all the assets in a given project and location.
     */
    migrationcenterProjectsLocationsAssetsList(req: operations.MigrationcenterProjectsLocationsAssetsListRequest, security: operations.MigrationcenterProjectsLocationsAssetsListSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsAssetsListResponse>;
    /**
     * Reports a set of frames.
     */
    migrationcenterProjectsLocationsAssetsReportAssetFrames(req: operations.MigrationcenterProjectsLocationsAssetsReportAssetFramesRequest, security: operations.MigrationcenterProjectsLocationsAssetsReportAssetFramesSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsAssetsReportAssetFramesResponse>;
    /**
     * Adds assets to a group.
     */
    migrationcenterProjectsLocationsGroupsAddAssets(req: operations.MigrationcenterProjectsLocationsGroupsAddAssetsRequest, security: operations.MigrationcenterProjectsLocationsGroupsAddAssetsSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsGroupsAddAssetsResponse>;
    /**
     * Creates a new group in a given project and location.
     */
    migrationcenterProjectsLocationsGroupsCreate(req: operations.MigrationcenterProjectsLocationsGroupsCreateRequest, security: operations.MigrationcenterProjectsLocationsGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsGroupsCreateResponse>;
    /**
     * Lists all groups in a given project and location.
     */
    migrationcenterProjectsLocationsGroupsList(req: operations.MigrationcenterProjectsLocationsGroupsListRequest, security: operations.MigrationcenterProjectsLocationsGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsGroupsListResponse>;
    /**
     * Removes assets from a group.
     */
    migrationcenterProjectsLocationsGroupsRemoveAssets(req: operations.MigrationcenterProjectsLocationsGroupsRemoveAssetsRequest, security: operations.MigrationcenterProjectsLocationsGroupsRemoveAssetsSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsGroupsRemoveAssetsResponse>;
    /**
     * Creates an import job.
     */
    migrationcenterProjectsLocationsImportJobsCreate(req: operations.MigrationcenterProjectsLocationsImportJobsCreateRequest, security: operations.MigrationcenterProjectsLocationsImportJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsImportJobsCreateResponse>;
    /**
     * Creates an import data file.
     */
    migrationcenterProjectsLocationsImportJobsImportDataFilesCreate(req: operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateRequest, security: operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateResponse>;
    /**
     * List import data files.
     */
    migrationcenterProjectsLocationsImportJobsImportDataFilesList(req: operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesListRequest, security: operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesListSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesListResponse>;
    /**
     * Lists all import jobs.
     */
    migrationcenterProjectsLocationsImportJobsList(req: operations.MigrationcenterProjectsLocationsImportJobsListRequest, security: operations.MigrationcenterProjectsLocationsImportJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsImportJobsListResponse>;
    /**
     * Runs an import job.
     */
    migrationcenterProjectsLocationsImportJobsRun(req: operations.MigrationcenterProjectsLocationsImportJobsRunRequest, security: operations.MigrationcenterProjectsLocationsImportJobsRunSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsImportJobsRunResponse>;
    /**
     * Validates an import job.
     */
    migrationcenterProjectsLocationsImportJobsValidate(req: operations.MigrationcenterProjectsLocationsImportJobsValidateRequest, security: operations.MigrationcenterProjectsLocationsImportJobsValidateSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsImportJobsValidateResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    migrationcenterProjectsLocationsList(req: operations.MigrationcenterProjectsLocationsListRequest, security: operations.MigrationcenterProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    migrationcenterProjectsLocationsOperationsCancel(req: operations.MigrationcenterProjectsLocationsOperationsCancelRequest, security: operations.MigrationcenterProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    migrationcenterProjectsLocationsOperationsList(req: operations.MigrationcenterProjectsLocationsOperationsListRequest, security: operations.MigrationcenterProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new preference set in a given project and location.
     */
    migrationcenterProjectsLocationsPreferenceSetsCreate(req: operations.MigrationcenterProjectsLocationsPreferenceSetsCreateRequest, security: operations.MigrationcenterProjectsLocationsPreferenceSetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsPreferenceSetsCreateResponse>;
    /**
     * Lists all the preference sets in a given project and location.
     */
    migrationcenterProjectsLocationsPreferenceSetsList(req: operations.MigrationcenterProjectsLocationsPreferenceSetsListRequest, security: operations.MigrationcenterProjectsLocationsPreferenceSetsListSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsPreferenceSetsListResponse>;
    /**
     * Creates a new source in a given project and location.
     */
    migrationcenterProjectsLocationsSourcesCreate(req: operations.MigrationcenterProjectsLocationsSourcesCreateRequest, security: operations.MigrationcenterProjectsLocationsSourcesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsSourcesCreateResponse>;
    /**
     * Deletes a source.
     */
    migrationcenterProjectsLocationsSourcesDelete(req: operations.MigrationcenterProjectsLocationsSourcesDeleteRequest, security: operations.MigrationcenterProjectsLocationsSourcesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsSourcesDeleteResponse>;
    /**
     * Gets the details of a source.
     */
    migrationcenterProjectsLocationsSourcesGet(req: operations.MigrationcenterProjectsLocationsSourcesGetRequest, security: operations.MigrationcenterProjectsLocationsSourcesGetSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsSourcesGetResponse>;
    /**
     * Lists all the sources in a given project and location.
     */
    migrationcenterProjectsLocationsSourcesList(req: operations.MigrationcenterProjectsLocationsSourcesListRequest, security: operations.MigrationcenterProjectsLocationsSourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsSourcesListResponse>;
    /**
     * Updates the parameters of a source.
     */
    migrationcenterProjectsLocationsSourcesPatch(req: operations.MigrationcenterProjectsLocationsSourcesPatchRequest, security: operations.MigrationcenterProjectsLocationsSourcesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.MigrationcenterProjectsLocationsSourcesPatchResponse>;
}
