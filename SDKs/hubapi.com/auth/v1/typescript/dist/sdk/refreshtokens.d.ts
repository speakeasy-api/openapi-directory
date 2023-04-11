import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RefreshTokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    deleteOauthV1RefreshTokensTokenArchive(req: operations.DeleteOauthV1RefreshTokensTokenArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOauthV1RefreshTokensTokenArchiveResponse>;
    getOauthV1RefreshTokensTokenGet(req: operations.GetOauthV1RefreshTokensTokenGetRequest, config?: AxiosRequestConfig): Promise<operations.GetOauthV1RefreshTokensTokenGetResponse>;
}
