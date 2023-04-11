import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Deployments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancels and removes the preview currently associated with the deployment.
     */
    deploymentmanagerDeploymentsCancelPreview(req: operations.DeploymentmanagerDeploymentsCancelPreviewRequest, security: operations.DeploymentmanagerDeploymentsCancelPreviewSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsCancelPreviewResponse>;
    /**
     * Deletes a deployment and all of the resources in the deployment.
     */
    deploymentmanagerDeploymentsDelete(req: operations.DeploymentmanagerDeploymentsDeleteRequest, security: operations.DeploymentmanagerDeploymentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsDeleteResponse>;
    /**
     * Gets information about a specific deployment.
     */
    deploymentmanagerDeploymentsGet(req: operations.DeploymentmanagerDeploymentsGetRequest, security: operations.DeploymentmanagerDeploymentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    deploymentmanagerDeploymentsGetIamPolicy(req: operations.DeploymentmanagerDeploymentsGetIamPolicyRequest, security: operations.DeploymentmanagerDeploymentsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsGetIamPolicyResponse>;
    /**
     * Creates a deployment and all of the resources described by the deployment manifest.
     */
    deploymentmanagerDeploymentsInsert(req: operations.DeploymentmanagerDeploymentsInsertRequest, security: operations.DeploymentmanagerDeploymentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsInsertResponse>;
    /**
     * Lists all deployments for a given project.
     */
    deploymentmanagerDeploymentsList(req: operations.DeploymentmanagerDeploymentsListRequest, security: operations.DeploymentmanagerDeploymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsListResponse>;
    /**
     * Patches a deployment and all of the resources described by the deployment manifest.
     */
    deploymentmanagerDeploymentsPatch(req: operations.DeploymentmanagerDeploymentsPatchRequest, security: operations.DeploymentmanagerDeploymentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    deploymentmanagerDeploymentsSetIamPolicy(req: operations.DeploymentmanagerDeploymentsSetIamPolicyRequest, security: operations.DeploymentmanagerDeploymentsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsSetIamPolicyResponse>;
    /**
     * Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
     */
    deploymentmanagerDeploymentsStop(req: operations.DeploymentmanagerDeploymentsStopRequest, security: operations.DeploymentmanagerDeploymentsStopSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsStopResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    deploymentmanagerDeploymentsTestIamPermissions(req: operations.DeploymentmanagerDeploymentsTestIamPermissionsRequest, security: operations.DeploymentmanagerDeploymentsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsTestIamPermissionsResponse>;
    /**
     * Updates a deployment and all of the resources described by the deployment manifest.
     */
    deploymentmanagerDeploymentsUpdate(req: operations.DeploymentmanagerDeploymentsUpdateRequest, security: operations.DeploymentmanagerDeploymentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsUpdateResponse>;
}
