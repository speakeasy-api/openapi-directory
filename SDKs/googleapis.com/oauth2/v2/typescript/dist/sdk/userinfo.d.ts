import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Userinfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    oauth2UserinfoGet(req: operations.Oauth2UserinfoGetRequest, security: operations.Oauth2UserinfoGetSecurity, config?: AxiosRequestConfig): Promise<operations.Oauth2UserinfoGetResponse>;
    oauth2UserinfoV2MeGet(req: operations.Oauth2UserinfoV2MeGetRequest, security: operations.Oauth2UserinfoV2MeGetSecurity, config?: AxiosRequestConfig): Promise<operations.Oauth2UserinfoV2MeGetResponse>;
}
