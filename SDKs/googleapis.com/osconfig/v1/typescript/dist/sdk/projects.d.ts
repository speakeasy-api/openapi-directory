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
     * List inventory data for all VM instances in the specified zone.
     */
    osconfigProjectsLocationsInstancesInventoriesList(req: operations.OsconfigProjectsLocationsInstancesInventoriesListRequest, security: operations.OsconfigProjectsLocationsInstancesInventoriesListSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsInstancesInventoriesListResponse>;
    /**
     * List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
     */
    osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList(req: operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest, security: operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse>;
    /**
     * List vulnerability reports for all VM instances in the specified zone.
     */
    osconfigProjectsLocationsInstancesVulnerabilityReportsList(req: operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest, security: operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse>;
    /**
     * Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
     */
    osconfigProjectsLocationsOsPolicyAssignmentsCreate(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest, security: operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse>;
    /**
     * List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
     */
    osconfigProjectsLocationsOsPolicyAssignmentsList(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRequest, security: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse>;
    /**
     * List the OS policy assignment revisions for a given OS policy assignment.
     */
    osconfigProjectsLocationsOsPolicyAssignmentsListRevisions(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest, security: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse>;
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
}
