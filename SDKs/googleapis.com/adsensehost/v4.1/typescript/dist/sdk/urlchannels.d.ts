import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Urlchannels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a URL channel from the host AdSense account.
     */
    adsensehostUrlchannelsDelete(req: operations.AdsensehostUrlchannelsDeleteRequest, security: operations.AdsensehostUrlchannelsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostUrlchannelsDeleteResponse>;
    /**
     * Add a new URL channel to the host AdSense account.
     */
    adsensehostUrlchannelsInsert(req: operations.AdsensehostUrlchannelsInsertRequest, security: operations.AdsensehostUrlchannelsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostUrlchannelsInsertResponse>;
    /**
     * List all host URL channels in the host AdSense account.
     */
    adsensehostUrlchannelsList(req: operations.AdsensehostUrlchannelsListRequest, security: operations.AdsensehostUrlchannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostUrlchannelsListResponse>;
}
