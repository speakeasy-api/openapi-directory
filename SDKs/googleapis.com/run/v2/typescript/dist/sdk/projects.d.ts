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
     * Creates a Job.
     */
    runProjectsLocationsJobsCreate(req: operations.RunProjectsLocationsJobsCreateRequest, security: operations.RunProjectsLocationsJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsJobsCreateResponse>;
    /**
     * Lists Executions from a Job.
     */
    runProjectsLocationsJobsExecutionsList(req: operations.RunProjectsLocationsJobsExecutionsListRequest, security: operations.RunProjectsLocationsJobsExecutionsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsJobsExecutionsListResponse>;
    /**
     * Lists Tasks from an Execution of a Job.
     */
    runProjectsLocationsJobsExecutionsTasksList(req: operations.RunProjectsLocationsJobsExecutionsTasksListRequest, security: operations.RunProjectsLocationsJobsExecutionsTasksListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsJobsExecutionsTasksListResponse>;
    /**
     * Lists Jobs.
     */
    runProjectsLocationsJobsList(req: operations.RunProjectsLocationsJobsListRequest, security: operations.RunProjectsLocationsJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsJobsListResponse>;
    /**
     * Triggers creation of a new Execution of this Job.
     */
    runProjectsLocationsJobsRun(req: operations.RunProjectsLocationsJobsRunRequest, security: operations.RunProjectsLocationsJobsRunSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsJobsRunResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    runProjectsLocationsOperationsList(req: operations.RunProjectsLocationsOperationsListRequest, security: operations.RunProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsOperationsListResponse>;
    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     */
    runProjectsLocationsOperationsWait(req: operations.RunProjectsLocationsOperationsWaitRequest, security: operations.RunProjectsLocationsOperationsWaitSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsOperationsWaitResponse>;
    /**
     * Creates a new Service in a given project and location.
     */
    runProjectsLocationsServicesCreate(req: operations.RunProjectsLocationsServicesCreateRequest, security: operations.RunProjectsLocationsServicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesCreateResponse>;
    /**
     * Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
     */
    runProjectsLocationsServicesGetIamPolicy(req: operations.RunProjectsLocationsServicesGetIamPolicyRequest, security: operations.RunProjectsLocationsServicesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesGetIamPolicyResponse>;
    /**
     * Lists Services.
     */
    runProjectsLocationsServicesList(req: operations.RunProjectsLocationsServicesListRequest, security: operations.RunProjectsLocationsServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesListResponse>;
    /**
     * Updates a Service.
     */
    runProjectsLocationsServicesPatch(req: operations.RunProjectsLocationsServicesPatchRequest, security: operations.RunProjectsLocationsServicesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesPatchResponse>;
    /**
     * Deletes a Revision.
     */
    runProjectsLocationsServicesRevisionsDelete(req: operations.RunProjectsLocationsServicesRevisionsDeleteRequest, security: operations.RunProjectsLocationsServicesRevisionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesRevisionsDeleteResponse>;
    /**
     * Gets information about a Revision.
     */
    runProjectsLocationsServicesRevisionsGet(req: operations.RunProjectsLocationsServicesRevisionsGetRequest, security: operations.RunProjectsLocationsServicesRevisionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesRevisionsGetResponse>;
    /**
     * Lists Revisions from a given Service, or from a given location.
     */
    runProjectsLocationsServicesRevisionsList(req: operations.RunProjectsLocationsServicesRevisionsListRequest, security: operations.RunProjectsLocationsServicesRevisionsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesRevisionsListResponse>;
    /**
     * Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
     */
    runProjectsLocationsServicesSetIamPolicy(req: operations.RunProjectsLocationsServicesSetIamPolicyRequest, security: operations.RunProjectsLocationsServicesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     */
    runProjectsLocationsServicesTestIamPermissions(req: operations.RunProjectsLocationsServicesTestIamPermissionsRequest, security: operations.RunProjectsLocationsServicesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesTestIamPermissionsResponse>;
}
