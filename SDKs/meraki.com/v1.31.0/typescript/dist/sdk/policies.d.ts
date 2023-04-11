import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Policies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add an Adaptive Policy
     *
     * @remarks
     * Add an Adaptive Policy
     */
    createOrganizationAdaptivePolicyPolicy(req: operations.CreateOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Delete an Adaptive Policy
     *
     * @remarks
     * Delete an Adaptive Policy
     */
    deleteOrganizationAdaptivePolicyPolicy(req: operations.DeleteOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Get policies for all clients with policies
     *
     * @remarks
     * Get policies for all clients with policies
     */
    getNetworkPoliciesByClient(req: operations.GetNetworkPoliciesByClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPoliciesByClientResponse>;
    /**
     * List adaptive policies in an organization
     *
     * @remarks
     * List adaptive policies in an organization
     */
    getOrganizationAdaptivePolicyPolicies(req: operations.GetOrganizationAdaptivePolicyPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyPoliciesResponse>;
    /**
     * Return an adaptive policy
     *
     * @remarks
     * Return an adaptive policy
     */
    getOrganizationAdaptivePolicyPolicy(req: operations.GetOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Update an Adaptive Policy
     *
     * @remarks
     * Update an Adaptive Policy
     */
    updateOrganizationAdaptivePolicyPolicy(req: operations.UpdateOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicyPolicyResponse>;
}
