import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccessPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an access policy for a switch network
     *
     * @remarks
     * Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.
     */
    createNetworkSwitchAccessPolicy(req: operations.CreateNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchAccessPolicyResponse>;
    /**
     * Delete an access policy for a switch network
     *
     * @remarks
     * Delete an access policy for a switch network
     */
    deleteNetworkSwitchAccessPolicy(req: operations.DeleteNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchAccessPolicyResponse>;
    /**
     * List the access policies for a switch network
     *
     * @remarks
     * List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method
     */
    getNetworkSwitchAccessPolicies(req: operations.GetNetworkSwitchAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessPoliciesResponse>;
    /**
     * Return a specific access policy for a switch network
     *
     * @remarks
     * Return a specific access policy for a switch network
     */
    getNetworkSwitchAccessPolicy(req: operations.GetNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessPolicyResponse>;
    /**
     * Update an access policy for a switch network
     *
     * @remarks
     * Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.
     */
    updateNetworkSwitchAccessPolicy(req: operations.UpdateNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAccessPolicyResponse>;
}
