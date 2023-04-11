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
     * Create an OS Config guest policy.
     */
    osconfigProjectsGuestPoliciesCreate(req: operations.OsconfigProjectsGuestPoliciesCreateRequest, security: operations.OsconfigProjectsGuestPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsGuestPoliciesCreateResponse>;
    /**
     * Get a page of OS Config guest policies.
     */
    osconfigProjectsGuestPoliciesList(req: operations.OsconfigProjectsGuestPoliciesListRequest, security: operations.OsconfigProjectsGuestPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsGuestPoliciesListResponse>;
    /**
     * Create an OS Config patch deployment.
     */
    osconfigProjectsPatchDeploymentsCreate(req: operations.OsconfigProjectsPatchDeploymentsCreateRequest, security: operations.OsconfigProjectsPatchDeploymentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsCreateResponse>;
    /**
     * Delete an OS Config patch deployment.
     */
    osconfigProjectsPatchDeploymentsDelete(req: operations.OsconfigProjectsPatchDeploymentsDeleteRequest, security: operations.OsconfigProjectsPatchDeploymentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsDeleteResponse>;
    /**
     * Get a page of OS Config patch deployments.
     */
    osconfigProjectsPatchDeploymentsList(req: operations.OsconfigProjectsPatchDeploymentsListRequest, security: operations.OsconfigProjectsPatchDeploymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsListResponse>;
    /**
     * Update an OS Config patch deployment.
     */
    osconfigProjectsPatchDeploymentsPatch(req: operations.OsconfigProjectsPatchDeploymentsPatchRequest, security: operations.OsconfigProjectsPatchDeploymentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsPatchResponse>;
    /**
     * Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
     */
    osconfigProjectsPatchDeploymentsPause(req: operations.OsconfigProjectsPatchDeploymentsPauseRequest, security: operations.OsconfigProjectsPatchDeploymentsPauseSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsPauseResponse>;
    /**
     * Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
     */
    osconfigProjectsPatchDeploymentsResume(req: operations.OsconfigProjectsPatchDeploymentsResumeRequest, security: operations.OsconfigProjectsPatchDeploymentsResumeSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsResumeResponse>;
    /**
     * Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
     */
    osconfigProjectsPatchJobsCancel(req: operations.OsconfigProjectsPatchJobsCancelRequest, security: operations.OsconfigProjectsPatchJobsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchJobsCancelResponse>;
    /**
     * Patch VM instances by creating and running a patch job.
     */
    osconfigProjectsPatchJobsExecute(req: operations.OsconfigProjectsPatchJobsExecuteRequest, security: operations.OsconfigProjectsPatchJobsExecuteSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchJobsExecuteResponse>;
    /**
     * Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
     */
    osconfigProjectsPatchJobsGet(req: operations.OsconfigProjectsPatchJobsGetRequest, security: operations.OsconfigProjectsPatchJobsGetSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchJobsGetResponse>;
    /**
     * Get a list of instance details for a given patch job.
     */
    osconfigProjectsPatchJobsInstanceDetailsList(req: operations.OsconfigProjectsPatchJobsInstanceDetailsListRequest, security: operations.OsconfigProjectsPatchJobsInstanceDetailsListSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchJobsInstanceDetailsListResponse>;
    /**
     * Get a list of patch jobs.
     */
    osconfigProjectsPatchJobsList(req: operations.OsconfigProjectsPatchJobsListRequest, security: operations.OsconfigProjectsPatchJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchJobsListResponse>;
    /**
     * Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.
     */
    osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy(req: operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest, security: operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse>;
}
