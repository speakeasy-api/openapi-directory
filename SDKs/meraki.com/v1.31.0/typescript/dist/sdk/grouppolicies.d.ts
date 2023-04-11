import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GroupPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a group policy
     *
     * @remarks
     * Create a group policy
     */
    createNetworkGroupPolicy(req: operations.CreateNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkGroupPolicyResponse>;
    /**
     * Delete a group policy
     *
     * @remarks
     * Delete a group policy
     */
    deleteNetworkGroupPolicy(req: operations.DeleteNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkGroupPolicyResponse>;
    /**
     * List the group policies in a network
     *
     * @remarks
     * List the group policies in a network
     */
    getNetworkGroupPolicies(req: operations.GetNetworkGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkGroupPoliciesResponse>;
    /**
     * Display a group policy
     *
     * @remarks
     * Display a group policy
     */
    getNetworkGroupPolicy(req: operations.GetNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkGroupPolicyResponse>;
    /**
     * Update a group policy
     *
     * @remarks
     * Update a group policy
     */
    updateNetworkGroupPolicy(req: operations.UpdateNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkGroupPolicyResponse>;
}
