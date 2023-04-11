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
     * Retrieves a list of all connection profiles in a given project and location.
     */
    datamigrationProjectsLocationsConnectionProfilesList(req: operations.DatamigrationProjectsLocationsConnectionProfilesListRequest, security: operations.DatamigrationProjectsLocationsConnectionProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConnectionProfilesListResponse>;
    /**
     * Applies draft tree onto a specific destination database.
     */
    datamigrationProjectsLocationsConversionWorkspacesApply(req: operations.DatamigrationProjectsLocationsConversionWorkspacesApplyRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesApplySecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesApplyResponse>;
    /**
     * Marks all the data in the conversion workspace as committed.
     */
    datamigrationProjectsLocationsConversionWorkspacesCommit(req: operations.DatamigrationProjectsLocationsConversionWorkspacesCommitRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesCommitSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesCommitResponse>;
    /**
     * Creates a draft tree schema for the destination database.
     */
    datamigrationProjectsLocationsConversionWorkspacesConvert(req: operations.DatamigrationProjectsLocationsConversionWorkspacesConvertRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesConvertSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesConvertResponse>;
    /**
     * Creates a new conversion workspace in a given project and location.
     */
    datamigrationProjectsLocationsConversionWorkspacesCreate(req: operations.DatamigrationProjectsLocationsConversionWorkspacesCreateRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesCreateResponse>;
    /**
     * Retrieves a list of committed revisions of a specific conversion workspace.
     */
    datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions(req: operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsResponse>;
    /**
     * Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
     */
    datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities(req: operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesResponse>;
    /**
     * Lists conversion workspaces in a given project and location.
     */
    datamigrationProjectsLocationsConversionWorkspacesList(req: operations.DatamigrationProjectsLocationsConversionWorkspacesListRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesListResponse>;
    /**
     * Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
     */
    datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport(req: operations.DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportResponse>;
    /**
     * Rolls back a conversion workspace to the last committed snapshot.
     */
    datamigrationProjectsLocationsConversionWorkspacesRollback(req: operations.DatamigrationProjectsLocationsConversionWorkspacesRollbackRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesRollbackSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesRollbackResponse>;
    /**
     * Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
     */
    datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs(req: operations.DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsResponse>;
    /**
     * Imports a snapshot of the source database into the conversion workspace.
     */
    datamigrationProjectsLocationsConversionWorkspacesSeed(req: operations.DatamigrationProjectsLocationsConversionWorkspacesSeedRequest, security: operations.DatamigrationProjectsLocationsConversionWorkspacesSeedSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConversionWorkspacesSeedResponse>;
    /**
     * Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
     */
    datamigrationProjectsLocationsFetchStaticIps(req: operations.DatamigrationProjectsLocationsFetchStaticIpsRequest, security: operations.DatamigrationProjectsLocationsFetchStaticIpsSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsFetchStaticIpsResponse>;
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    datamigrationProjectsLocationsOperationsList(req: operations.DatamigrationProjectsLocationsOperationsListRequest, security: operations.DatamigrationProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new private connection in a given project and location.
     */
    datamigrationProjectsLocationsPrivateConnectionsCreate(req: operations.DatamigrationProjectsLocationsPrivateConnectionsCreateRequest, security: operations.DatamigrationProjectsLocationsPrivateConnectionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsPrivateConnectionsCreateResponse>;
    /**
     * Deletes a single Database Migration Service private connection.
     */
    datamigrationProjectsLocationsPrivateConnectionsDelete(req: operations.DatamigrationProjectsLocationsPrivateConnectionsDeleteRequest, security: operations.DatamigrationProjectsLocationsPrivateConnectionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsPrivateConnectionsDeleteResponse>;
    /**
     * Gets details of a single private connection.
     */
    datamigrationProjectsLocationsPrivateConnectionsGet(req: operations.DatamigrationProjectsLocationsPrivateConnectionsGetRequest, security: operations.DatamigrationProjectsLocationsPrivateConnectionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsPrivateConnectionsGetResponse>;
    /**
     * Retrieves a list of private connections in a given project and location.
     */
    datamigrationProjectsLocationsPrivateConnectionsList(req: operations.DatamigrationProjectsLocationsPrivateConnectionsListRequest, security: operations.DatamigrationProjectsLocationsPrivateConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsPrivateConnectionsListResponse>;
}
