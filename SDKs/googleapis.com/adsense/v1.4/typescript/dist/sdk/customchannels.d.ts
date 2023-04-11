import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customchannels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all ad units in the specified custom channel.
     */
    adsenseCustomchannelsAdunitsList(req: operations.AdsenseCustomchannelsAdunitsListRequest, security: operations.AdsenseCustomchannelsAdunitsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseCustomchannelsAdunitsListResponse>;
    /**
     * Get the specified custom channel from the specified ad client.
     */
    adsenseCustomchannelsGet(req: operations.AdsenseCustomchannelsGetRequest, security: operations.AdsenseCustomchannelsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseCustomchannelsGetResponse>;
    /**
     * List all custom channels in the specified ad client for this AdSense account.
     */
    adsenseCustomchannelsList(req: operations.AdsenseCustomchannelsListRequest, security: operations.AdsenseCustomchannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseCustomchannelsListResponse>;
}
