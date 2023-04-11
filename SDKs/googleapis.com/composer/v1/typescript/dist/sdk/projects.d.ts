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
     * Create a new environment.
     */
    composerProjectsLocationsEnvironmentsCreate(req: operations.ComposerProjectsLocationsEnvironmentsCreateRequest, security: operations.ComposerProjectsLocationsEnvironmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsCreateResponse>;
    /**
     * List environments.
     */
    composerProjectsLocationsEnvironmentsList(req: operations.ComposerProjectsLocationsEnvironmentsListRequest, security: operations.ComposerProjectsLocationsEnvironmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsListResponse>;
    /**
     * Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
     */
    composerProjectsLocationsEnvironmentsLoadSnapshot(req: operations.ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest, security: operations.ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse>;
    /**
     * Update an environment.
     */
    composerProjectsLocationsEnvironmentsPatch(req: operations.ComposerProjectsLocationsEnvironmentsPatchRequest, security: operations.ComposerProjectsLocationsEnvironmentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsPatchResponse>;
    /**
     * Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
     */
    composerProjectsLocationsEnvironmentsSaveSnapshot(req: operations.ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest, security: operations.ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse>;
    /**
     * List ImageVersions for provided location.
     */
    composerProjectsLocationsImageVersionsList(req: operations.ComposerProjectsLocationsImageVersionsListRequest, security: operations.ComposerProjectsLocationsImageVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsImageVersionsListResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    composerProjectsLocationsOperationsDelete(req: operations.ComposerProjectsLocationsOperationsDeleteRequest, security: operations.ComposerProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    composerProjectsLocationsOperationsGet(req: operations.ComposerProjectsLocationsOperationsGetRequest, security: operations.ComposerProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    composerProjectsLocationsOperationsList(req: operations.ComposerProjectsLocationsOperationsListRequest, security: operations.ComposerProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsListResponse>;
}
