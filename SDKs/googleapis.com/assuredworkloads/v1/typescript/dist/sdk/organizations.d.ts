import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    assuredworkloadsOrganizationsLocationsOperationsList(req: operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest, security: operations.AssuredworkloadsOrganizationsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse>;
    /**
     * Creates Assured Workload.
     */
    assuredworkloadsOrganizationsLocationsWorkloadsCreate(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest, security: operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse>;
    /**
     * Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.
     */
    assuredworkloadsOrganizationsLocationsWorkloadsDelete(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest, security: operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse>;
    /**
     * Lists Assured Workloads under a CRM Node.
     */
    assuredworkloadsOrganizationsLocationsWorkloadsList(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsListRequest, security: operations.AssuredworkloadsOrganizationsLocationsWorkloadsListSecurity, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse>;
    /**
     * Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
     */
    assuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest, security: operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse>;
    /**
     * Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
     */
    assuredworkloadsOrganizationsLocationsWorkloadsPatch(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest, security: operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse>;
    /**
     * Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
     */
    assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest, security: operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse>;
    /**
     * Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
     */
    assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest, security: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse>;
    /**
     * Retrieves Assured Workload Violation based on ID.
     */
    assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest, security: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse>;
    /**
     * Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`
     */
    assuredworkloadsOrganizationsLocationsWorkloadsViolationsList(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest, security: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse>;
}
