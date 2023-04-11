import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionSslPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
     */
    computeRegionSslPoliciesDelete(req: operations.ComputeRegionSslPoliciesDeleteRequest, security: operations.ComputeRegionSslPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslPoliciesDeleteResponse>;
    /**
     * Lists all of the ordered rules present in a single specified policy.
     */
    computeRegionSslPoliciesGet(req: operations.ComputeRegionSslPoliciesGetRequest, security: operations.ComputeRegionSslPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslPoliciesGetResponse>;
    /**
     * Creates a new policy in the specified project and region using the data included in the request.
     */
    computeRegionSslPoliciesInsert(req: operations.ComputeRegionSslPoliciesInsertRequest, security: operations.ComputeRegionSslPoliciesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslPoliciesInsertResponse>;
    /**
     * Lists all the SSL policies that have been configured for the specified project and region.
     */
    computeRegionSslPoliciesList(req: operations.ComputeRegionSslPoliciesListRequest, security: operations.ComputeRegionSslPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslPoliciesListResponse>;
    /**
     * Lists all features that can be specified in the SSL policy when using custom profile.
     */
    computeRegionSslPoliciesListAvailableFeatures(req: operations.ComputeRegionSslPoliciesListAvailableFeaturesRequest, security: operations.ComputeRegionSslPoliciesListAvailableFeaturesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslPoliciesListAvailableFeaturesResponse>;
    /**
     * Patches the specified SSL policy with the data included in the request.
     */
    computeRegionSslPoliciesPatch(req: operations.ComputeRegionSslPoliciesPatchRequest, security: operations.ComputeRegionSslPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslPoliciesPatchResponse>;
}
