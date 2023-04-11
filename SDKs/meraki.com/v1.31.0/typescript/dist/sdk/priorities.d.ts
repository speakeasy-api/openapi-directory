import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Priorities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the branding policy IDs of an organization in priority order
     *
     * @remarks
     * Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
     */
    getOrganizationBrandingPoliciesPriorities(req: operations.GetOrganizationBrandingPoliciesPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationBrandingPoliciesPrioritiesResponse>;
    /**
     * Update the priority ordering of an organization's branding policies.
     *
     * @remarks
     * Update the priority ordering of an organization's branding policies.
     */
    updateOrganizationBrandingPoliciesPriorities(req: operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse>;
}
