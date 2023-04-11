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
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    sasportalPoliciesGet(req: operations.SasportalPoliciesGetRequest, security: operations.SasportalPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalPoliciesGetResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    sasportalPoliciesSet(req: operations.SasportalPoliciesSetRequest, security: operations.SasportalPoliciesSetSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalPoliciesSetResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    sasportalPoliciesTest(req: operations.SasportalPoliciesTestRequest, security: operations.SasportalPoliciesTestSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalPoliciesTestResponse>;
}
