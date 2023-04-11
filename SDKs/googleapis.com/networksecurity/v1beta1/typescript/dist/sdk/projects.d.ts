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
     * Adds items to an address group.
     */
    networksecurityProjectsLocationsAddressGroupsAddItems(req: operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest, security: operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse>;
    /**
     * Clones items from one address group to another.
     */
    networksecurityProjectsLocationsAddressGroupsCloneItems(req: operations.NetworksecurityProjectsLocationsAddressGroupsCloneItemsRequest, security: operations.NetworksecurityProjectsLocationsAddressGroupsCloneItemsSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAddressGroupsCloneItemsResponse>;
    /**
     * Creates a new address group in a given project and location.
     */
    networksecurityProjectsLocationsAddressGroupsCreate(req: operations.NetworksecurityProjectsLocationsAddressGroupsCreateRequest, security: operations.NetworksecurityProjectsLocationsAddressGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAddressGroupsCreateResponse>;
    /**
     * Lists address groups in a given project and location.
     */
    networksecurityProjectsLocationsAddressGroupsList(req: operations.NetworksecurityProjectsLocationsAddressGroupsListRequest, security: operations.NetworksecurityProjectsLocationsAddressGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAddressGroupsListResponse>;
    /**
     * Lists references of an address group.
     */
    networksecurityProjectsLocationsAddressGroupsListReferences(req: operations.NetworksecurityProjectsLocationsAddressGroupsListReferencesRequest, security: operations.NetworksecurityProjectsLocationsAddressGroupsListReferencesSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAddressGroupsListReferencesResponse>;
    /**
     * Removes items from an address group.
     */
    networksecurityProjectsLocationsAddressGroupsRemoveItems(req: operations.NetworksecurityProjectsLocationsAddressGroupsRemoveItemsRequest, security: operations.NetworksecurityProjectsLocationsAddressGroupsRemoveItemsSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAddressGroupsRemoveItemsResponse>;
    /**
     * Creates a new AuthorizationPolicy in a given project and location.
     */
    networksecurityProjectsLocationsAuthorizationPoliciesCreate(req: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest, security: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse>;
    /**
     * Lists AuthorizationPolicies in a given project and location.
     */
    networksecurityProjectsLocationsAuthorizationPoliciesList(req: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest, security: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse>;
    /**
     * Creates a new ClientTlsPolicy in a given project and location.
     */
    networksecurityProjectsLocationsClientTlsPoliciesCreate(req: operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest, security: operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse>;
    /**
     * Lists ClientTlsPolicies in a given project and location.
     */
    networksecurityProjectsLocationsClientTlsPoliciesList(req: operations.NetworksecurityProjectsLocationsClientTlsPoliciesListRequest, security: operations.NetworksecurityProjectsLocationsClientTlsPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsClientTlsPoliciesListResponse>;
    /**
     * Creates a new GatewaySecurityPolicy in a given project and location.
     */
    networksecurityProjectsLocationsGatewaySecurityPoliciesCreate(req: operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest, security: operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateResponse>;
    /**
     * Lists GatewaySecurityPolicies in a given project and location.
     */
    networksecurityProjectsLocationsGatewaySecurityPoliciesList(req: operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesListRequest, security: operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesListResponse>;
    /**
     * Creates a new GatewaySecurityPolicy in a given project and location.
     */
    networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate(req: operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateRequest, security: operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateResponse>;
    /**
     * Lists GatewaySecurityPolicyRules in a given project and location.
     */
    networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList(req: operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListRequest, security: operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    networksecurityProjectsLocationsList(req: operations.NetworksecurityProjectsLocationsListRequest, security: operations.NetworksecurityProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    networksecurityProjectsLocationsOperationsCancel(req: operations.NetworksecurityProjectsLocationsOperationsCancelRequest, security: operations.NetworksecurityProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    networksecurityProjectsLocationsOperationsList(req: operations.NetworksecurityProjectsLocationsOperationsListRequest, security: operations.NetworksecurityProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new ServerTlsPolicy in a given project and location.
     */
    networksecurityProjectsLocationsServerTlsPoliciesCreate(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse>;
    /**
     * Lists ServerTlsPolicies in a given project and location.
     */
    networksecurityProjectsLocationsServerTlsPoliciesList(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesListRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest, security: operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse>;
    /**
     * Creates a new TlsInspectionPolicy in a given project and location.
     */
    networksecurityProjectsLocationsTlsInspectionPoliciesCreate(req: operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateRequest, security: operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateResponse>;
    /**
     * Lists TlsInspectionPolicies in a given project and location.
     */
    networksecurityProjectsLocationsTlsInspectionPoliciesList(req: operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesListRequest, security: operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesListResponse>;
    /**
     * Creates a new UrlList in a given project and location.
     */
    networksecurityProjectsLocationsUrlListsCreate(req: operations.NetworksecurityProjectsLocationsUrlListsCreateRequest, security: operations.NetworksecurityProjectsLocationsUrlListsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsUrlListsCreateResponse>;
    /**
     * Deletes a single UrlList.
     */
    networksecurityProjectsLocationsUrlListsDelete(req: operations.NetworksecurityProjectsLocationsUrlListsDeleteRequest, security: operations.NetworksecurityProjectsLocationsUrlListsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsUrlListsDeleteResponse>;
    /**
     * Gets details of a single UrlList.
     */
    networksecurityProjectsLocationsUrlListsGet(req: operations.NetworksecurityProjectsLocationsUrlListsGetRequest, security: operations.NetworksecurityProjectsLocationsUrlListsGetSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsUrlListsGetResponse>;
    /**
     * Lists UrlLists in a given project and location.
     */
    networksecurityProjectsLocationsUrlListsList(req: operations.NetworksecurityProjectsLocationsUrlListsListRequest, security: operations.NetworksecurityProjectsLocationsUrlListsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsUrlListsListResponse>;
    /**
     * Updates the parameters of a single UrlList.
     */
    networksecurityProjectsLocationsUrlListsPatch(req: operations.NetworksecurityProjectsLocationsUrlListsPatchRequest, security: operations.NetworksecurityProjectsLocationsUrlListsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsUrlListsPatchResponse>;
}
