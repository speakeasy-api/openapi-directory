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
     * /policies/{policy_id}
     *
     * @remarks
     * ### Get a policy
     * Get the latest details for a specific policy.
     */
    getPoliciesPolicyId(req: operations.GetPoliciesPolicyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPoliciesPolicyIdResponse>;
    /**
     * /policies
     *
     * @remarks
     * ### Bind a policy
     * Take a quote and bind it.
     */
    postPolicies(req: operations.PostPoliciesRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPoliciesResponse>;
}
