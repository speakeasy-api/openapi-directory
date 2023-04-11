import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EffectiveIamPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets effective IAM policies for a batch of resources.
     */
    cloudassetEffectiveIamPoliciesBatchGet(req: operations.CloudassetEffectiveIamPoliciesBatchGetRequest, security: operations.CloudassetEffectiveIamPoliciesBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetEffectiveIamPoliciesBatchGetResponse>;
}
