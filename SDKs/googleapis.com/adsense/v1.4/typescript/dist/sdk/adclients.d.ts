import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Adclients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all ad clients in this AdSense account.
     */
    adsenseAdclientsList(req: operations.AdsenseAdclientsListRequest, security: operations.AdsenseAdclientsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAdclientsListResponse>;
}
