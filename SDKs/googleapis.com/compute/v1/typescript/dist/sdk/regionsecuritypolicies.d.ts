import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionSecurityPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified policy.
     */
    computeRegionSecurityPoliciesDelete(req: operations.ComputeRegionSecurityPoliciesDeleteRequest, security: operations.ComputeRegionSecurityPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSecurityPoliciesDeleteResponse>;
    /**
     * List all of the ordered rules present in a single specified policy.
     */
    computeRegionSecurityPoliciesGet(req: operations.ComputeRegionSecurityPoliciesGetRequest, security: operations.ComputeRegionSecurityPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSecurityPoliciesGetResponse>;
    /**
     * Creates a new policy in the specified project using the data included in the request.
     */
    computeRegionSecurityPoliciesInsert(req: operations.ComputeRegionSecurityPoliciesInsertRequest, security: operations.ComputeRegionSecurityPoliciesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSecurityPoliciesInsertResponse>;
    /**
     * List all the policies that have been configured for the specified project and region.
     */
    computeRegionSecurityPoliciesList(req: operations.ComputeRegionSecurityPoliciesListRequest, security: operations.ComputeRegionSecurityPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSecurityPoliciesListResponse>;
    /**
     * Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
     */
    computeRegionSecurityPoliciesPatch(req: operations.ComputeRegionSecurityPoliciesPatchRequest, security: operations.ComputeRegionSecurityPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSecurityPoliciesPatchResponse>;
}
