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
    prodTtSasportalPoliciesGet(req: operations.ProdTtSasportalPoliciesGetRequest, security: operations.ProdTtSasportalPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalPoliciesGetResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    prodTtSasportalPoliciesSet(req: operations.ProdTtSasportalPoliciesSetRequest, security: operations.ProdTtSasportalPoliciesSetSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalPoliciesSetResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    prodTtSasportalPoliciesTest(req: operations.ProdTtSasportalPoliciesTestRequest, security: operations.ProdTtSasportalPoliciesTestSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalPoliciesTestResponse>;
}
