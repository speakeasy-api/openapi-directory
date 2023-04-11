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
     * Creates a new connection profile in a given project and location.
     */
    datamigrationProjectsLocationsConnectionProfilesCreate(req: operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest, security: operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConnectionProfilesCreateResponse>;
    /**
     * Retrieve a list of all connection profiles in a given project and location.
     */
    datamigrationProjectsLocationsConnectionProfilesList(req: operations.DatamigrationProjectsLocationsConnectionProfilesListRequest, security: operations.DatamigrationProjectsLocationsConnectionProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConnectionProfilesListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    datamigrationProjectsLocationsList(req: operations.DatamigrationProjectsLocationsListRequest, security: operations.DatamigrationProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsListResponse>;
    /**
     * Creates a new migration job in a given project and location.
     */
    datamigrationProjectsLocationsMigrationJobsCreate(req: operations.DatamigrationProjectsLocationsMigrationJobsCreateRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsCreateResponse>;
    /**
     * Generate a SSH configuration script to configure the reverse SSH connectivity.
     */
    datamigrationProjectsLocationsMigrationJobsGenerateSshScript(req: operations.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    datamigrationProjectsLocationsMigrationJobsGetIamPolicy(req: operations.DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse>;
    /**
     * Lists migration jobs in a given project and location.
     */
    datamigrationProjectsLocationsMigrationJobsList(req: operations.DatamigrationProjectsLocationsMigrationJobsListRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsListResponse>;
    /**
     * Updates the parameters of a single migration job.
     */
    datamigrationProjectsLocationsMigrationJobsPatch(req: operations.DatamigrationProjectsLocationsMigrationJobsPatchRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsPatchResponse>;
    /**
     * Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
     */
    datamigrationProjectsLocationsMigrationJobsPromote(req: operations.DatamigrationProjectsLocationsMigrationJobsPromoteRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsPromoteSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsPromoteResponse>;
    /**
     * Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
     */
    datamigrationProjectsLocationsMigrationJobsRestart(req: operations.DatamigrationProjectsLocationsMigrationJobsRestartRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsRestartSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsRestartResponse>;
    /**
     * Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
     */
    datamigrationProjectsLocationsMigrationJobsResume(req: operations.DatamigrationProjectsLocationsMigrationJobsResumeRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsResumeSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsResumeResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    datamigrationProjectsLocationsMigrationJobsSetIamPolicy(req: operations.DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse>;
    /**
     * Start an already created migration job.
     */
    datamigrationProjectsLocationsMigrationJobsStart(req: operations.DatamigrationProjectsLocationsMigrationJobsStartRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsStartSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsStartResponse>;
    /**
     * Stops a running migration job.
     */
    datamigrationProjectsLocationsMigrationJobsStop(req: operations.DatamigrationProjectsLocationsMigrationJobsStopRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsStopSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsStopResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    datamigrationProjectsLocationsMigrationJobsTestIamPermissions(req: operations.DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsResponse>;
    /**
     * Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
     */
    datamigrationProjectsLocationsMigrationJobsVerify(req: operations.DatamigrationProjectsLocationsMigrationJobsVerifyRequest, security: operations.DatamigrationProjectsLocationsMigrationJobsVerifySecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsVerifyResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    datamigrationProjectsLocationsOperationsCancel(req: operations.DatamigrationProjectsLocationsOperationsCancelRequest, security: operations.DatamigrationProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    datamigrationProjectsLocationsOperationsDelete(req: operations.DatamigrationProjectsLocationsOperationsDeleteRequest, security: operations.DatamigrationProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    datamigrationProjectsLocationsOperationsGet(req: operations.DatamigrationProjectsLocationsOperationsGetRequest, security: operations.DatamigrationProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    datamigrationProjectsLocationsOperationsList(req: operations.DatamigrationProjectsLocationsOperationsListRequest, security: operations.DatamigrationProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsOperationsListResponse>;
}
