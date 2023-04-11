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
     * Filters an organization's assets and groups them by their specified properties.
     */
    securitycenterOrganizationsAssetsGroup(req: operations.SecuritycenterOrganizationsAssetsGroupRequest, security: operations.SecuritycenterOrganizationsAssetsGroupSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsAssetsGroupResponse>;
    /**
     * Lists an organization's assets.
     */
    securitycenterOrganizationsAssetsList(req: operations.SecuritycenterOrganizationsAssetsListRequest, security: operations.SecuritycenterOrganizationsAssetsListSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsAssetsListResponse>;
    /**
     * Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
     */
    securitycenterOrganizationsAssetsRunDiscovery(req: operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest, security: operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsAssetsRunDiscoveryResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    securitycenterOrganizationsOperationsCancel(req: operations.SecuritycenterOrganizationsOperationsCancelRequest, security: operations.SecuritycenterOrganizationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    securitycenterOrganizationsOperationsDelete(req: operations.SecuritycenterOrganizationsOperationsDeleteRequest, security: operations.SecuritycenterOrganizationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsOperationsDeleteResponse>;
    /**
     * Creates a source.
     */
    securitycenterOrganizationsSourcesCreate(req: operations.SecuritycenterOrganizationsSourcesCreateRequest, security: operations.SecuritycenterOrganizationsSourcesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesCreateResponse>;
    /**
     * Creates a finding. The corresponding source must exist for finding creation to succeed.
     */
    securitycenterOrganizationsSourcesFindingsCreate(req: operations.SecuritycenterOrganizationsSourcesFindingsCreateRequest, security: operations.SecuritycenterOrganizationsSourcesFindingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsCreateResponse>;
    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
     */
    securitycenterOrganizationsSourcesFindingsGroup(req: operations.SecuritycenterOrganizationsSourcesFindingsGroupRequest, security: operations.SecuritycenterOrganizationsSourcesFindingsGroupSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsGroupResponse>;
    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
     */
    securitycenterOrganizationsSourcesFindingsList(req: operations.SecuritycenterOrganizationsSourcesFindingsListRequest, security: operations.SecuritycenterOrganizationsSourcesFindingsListSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsListResponse>;
    /**
     * Updates the state of a finding.
     */
    securitycenterOrganizationsSourcesFindingsSetState(req: operations.SecuritycenterOrganizationsSourcesFindingsSetStateRequest, security: operations.SecuritycenterOrganizationsSourcesFindingsSetStateSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsSetStateResponse>;
    /**
     * Updates security marks.
     */
    securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks(req: operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest, security: operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse>;
    /**
     * Gets a source.
     */
    securitycenterOrganizationsSourcesGet(req: operations.SecuritycenterOrganizationsSourcesGetRequest, security: operations.SecuritycenterOrganizationsSourcesGetSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesGetResponse>;
    /**
     * Gets the access control policy on the specified Source.
     */
    securitycenterOrganizationsSourcesGetIamPolicy(req: operations.SecuritycenterOrganizationsSourcesGetIamPolicyRequest, security: operations.SecuritycenterOrganizationsSourcesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesGetIamPolicyResponse>;
    /**
     * Lists all sources belonging to an organization.
     */
    securitycenterOrganizationsSourcesList(req: operations.SecuritycenterOrganizationsSourcesListRequest, security: operations.SecuritycenterOrganizationsSourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesListResponse>;
    /**
     * Sets the access control policy on the specified Source.
     */
    securitycenterOrganizationsSourcesSetIamPolicy(req: operations.SecuritycenterOrganizationsSourcesSetIamPolicyRequest, security: operations.SecuritycenterOrganizationsSourcesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesSetIamPolicyResponse>;
    /**
     * Returns the permissions that a caller has on the specified source.
     */
    securitycenterOrganizationsSourcesTestIamPermissions(req: operations.SecuritycenterOrganizationsSourcesTestIamPermissionsRequest, security: operations.SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesTestIamPermissionsResponse>;
}
