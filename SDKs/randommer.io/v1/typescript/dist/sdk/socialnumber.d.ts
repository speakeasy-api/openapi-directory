import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SocialNumber {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiSocialNumber - Generate a social security number
    **/
    getApiSocialNumber(req: operations.GetApiSocialNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetApiSocialNumberResponse>;
    /**
     * postApiSocialNumber - Validate VAT/identity numbers
    **/
    postApiSocialNumber(req: operations.PostApiSocialNumberRequest, config?: AxiosRequestConfig): Promise<operations.PostApiSocialNumberResponse>;
}
