import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Subnetworks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of subnetworks.
     */
    computeSubnetworksAggregatedList(req: operations.ComputeSubnetworksAggregatedListRequest, security: operations.ComputeSubnetworksAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksAggregatedListResponse>;
    /**
     * Deletes the specified subnetwork.
     */
    computeSubnetworksDelete(req: operations.ComputeSubnetworksDeleteRequest, security: operations.ComputeSubnetworksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksDeleteResponse>;
    /**
     * Expands the IP CIDR range of the subnetwork to a specified value.
     */
    computeSubnetworksExpandIpCidrRange(req: operations.ComputeSubnetworksExpandIpCidrRangeRequest, security: operations.ComputeSubnetworksExpandIpCidrRangeSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksExpandIpCidrRangeResponse>;
    /**
     * Returns the specified subnetwork.
     */
    computeSubnetworksGet(req: operations.ComputeSubnetworksGetRequest, security: operations.ComputeSubnetworksGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeSubnetworksGetIamPolicy(req: operations.ComputeSubnetworksGetIamPolicyRequest, security: operations.ComputeSubnetworksGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksGetIamPolicyResponse>;
    /**
     * Creates a subnetwork in the specified project using the data included in the request.
     */
    computeSubnetworksInsert(req: operations.ComputeSubnetworksInsertRequest, security: operations.ComputeSubnetworksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksInsertResponse>;
    /**
     * Retrieves a list of subnetworks available to the specified project.
     */
    computeSubnetworksList(req: operations.ComputeSubnetworksListRequest, security: operations.ComputeSubnetworksListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksListResponse>;
    /**
     * Retrieves an aggregated list of all usable subnetworks in the project.
     */
    computeSubnetworksListUsable(req: operations.ComputeSubnetworksListUsableRequest, security: operations.ComputeSubnetworksListUsableSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksListUsableResponse>;
    /**
     * Patches the specified subnetwork with the data included in the request. Only certain fields can be updated with a patch request as indicated in the field descriptions. You must specify the current fingerprint of the subnetwork resource being patched.
     */
    computeSubnetworksPatch(req: operations.ComputeSubnetworksPatchRequest, security: operations.ComputeSubnetworksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeSubnetworksSetIamPolicy(req: operations.ComputeSubnetworksSetIamPolicyRequest, security: operations.ComputeSubnetworksSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksSetIamPolicyResponse>;
    /**
     * Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.
     */
    computeSubnetworksSetPrivateIpGoogleAccess(req: operations.ComputeSubnetworksSetPrivateIpGoogleAccessRequest, security: operations.ComputeSubnetworksSetPrivateIpGoogleAccessSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksSetPrivateIpGoogleAccessResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeSubnetworksTestIamPermissions(req: operations.ComputeSubnetworksTestIamPermissionsRequest, security: operations.ComputeSubnetworksTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSubnetworksTestIamPermissionsResponse>;
}
