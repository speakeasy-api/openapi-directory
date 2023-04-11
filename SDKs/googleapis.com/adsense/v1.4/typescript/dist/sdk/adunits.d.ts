import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Adunits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all custom channels which the specified ad unit belongs to.
     */
    adsenseAdunitsCustomchannelsList(req: operations.AdsenseAdunitsCustomchannelsListRequest, security: operations.AdsenseAdunitsCustomchannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAdunitsCustomchannelsListResponse>;
    /**
     * Gets the specified ad unit in the specified ad client.
     */
    adsenseAdunitsGet(req: operations.AdsenseAdunitsGetRequest, security: operations.AdsenseAdunitsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAdunitsGetResponse>;
    /**
     * Get ad code for the specified ad unit.
     */
    adsenseAdunitsGetAdCode(req: operations.AdsenseAdunitsGetAdCodeRequest, security: operations.AdsenseAdunitsGetAdCodeSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAdunitsGetAdCodeResponse>;
    /**
     * List all ad units in the specified ad client for this AdSense account.
     */
    adsenseAdunitsList(req: operations.AdsenseAdunitsListRequest, security: operations.AdsenseAdunitsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAdunitsListResponse>;
}
