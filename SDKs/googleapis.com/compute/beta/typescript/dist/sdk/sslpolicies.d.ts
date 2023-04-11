import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SslPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.
     */
    computeSslPoliciesAggregatedList(req: operations.ComputeSslPoliciesAggregatedListRequest, security: operations.ComputeSslPoliciesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslPoliciesAggregatedListResponse>;
    /**
     * Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
     */
    computeSslPoliciesDelete(req: operations.ComputeSslPoliciesDeleteRequest, security: operations.ComputeSslPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslPoliciesDeleteResponse>;
    /**
     * Lists all of the ordered rules present in a single specified policy.
     */
    computeSslPoliciesGet(req: operations.ComputeSslPoliciesGetRequest, security: operations.ComputeSslPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslPoliciesGetResponse>;
    /**
     * Returns the specified SSL policy resource.
     */
    computeSslPoliciesInsert(req: operations.ComputeSslPoliciesInsertRequest, security: operations.ComputeSslPoliciesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslPoliciesInsertResponse>;
    /**
     * Lists all the SSL policies that have been configured for the specified project.
     */
    computeSslPoliciesList(req: operations.ComputeSslPoliciesListRequest, security: operations.ComputeSslPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslPoliciesListResponse>;
    /**
     * Lists all features that can be specified in the SSL policy when using custom profile.
     */
    computeSslPoliciesListAvailableFeatures(req: operations.ComputeSslPoliciesListAvailableFeaturesRequest, security: operations.ComputeSslPoliciesListAvailableFeaturesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslPoliciesListAvailableFeaturesResponse>;
    /**
     * Patches the specified SSL policy with the data included in the request.
     */
    computeSslPoliciesPatch(req: operations.ComputeSslPoliciesPatchRequest, security: operations.ComputeSslPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslPoliciesPatchResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeSslPoliciesTestIamPermissions(req: operations.ComputeSslPoliciesTestIamPermissionsRequest, security: operations.ComputeSslPoliciesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslPoliciesTestIamPermissionsResponse>;
}
