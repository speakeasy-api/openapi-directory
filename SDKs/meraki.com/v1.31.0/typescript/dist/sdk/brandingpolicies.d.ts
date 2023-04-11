import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BrandingPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a new branding policy to an organization
     *
     * @remarks
     * Add a new branding policy to an organization
     */
    createOrganizationBrandingPolicy(req: operations.CreateOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationBrandingPolicyResponse>;
    /**
     * Delete a branding policy
     *
     * @remarks
     * Delete a branding policy
     */
    deleteOrganizationBrandingPolicy(req: operations.DeleteOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationBrandingPolicyResponse>;
    /**
     * List the branding policies of an organization
     *
     * @remarks
     * List the branding policies of an organization
     */
    getOrganizationBrandingPolicies(req: operations.GetOrganizationBrandingPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationBrandingPoliciesResponse>;
    /**
     * Return the branding policy IDs of an organization in priority order
     *
     * @remarks
     * Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
     */
    getOrganizationBrandingPoliciesPriorities(req: operations.GetOrganizationBrandingPoliciesPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationBrandingPoliciesPrioritiesResponse>;
    /**
     * Return a branding policy
     *
     * @remarks
     * Return a branding policy
     */
    getOrganizationBrandingPolicy(req: operations.GetOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationBrandingPolicyResponse>;
    /**
     * Update the priority ordering of an organization's branding policies.
     *
     * @remarks
     * Update the priority ordering of an organization's branding policies.
     */
    updateOrganizationBrandingPoliciesPriorities(req: operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse>;
    /**
     * Update a branding policy
     *
     * @remarks
     * Update a branding policy
     */
    updateOrganizationBrandingPolicy(req: operations.UpdateOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationBrandingPolicyResponse>;
}
