import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccessTokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getOauthV1AccessTokensTokenGet(req: operations.GetOauthV1AccessTokensTokenGetRequest, config?: AxiosRequestConfig): Promise<operations.GetOauthV1AccessTokensTokenGetResponse>;
}
