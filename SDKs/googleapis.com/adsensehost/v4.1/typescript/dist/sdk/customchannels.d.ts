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
     * Delete a specific custom channel from the host AdSense account.
     */
    adsensehostCustomchannelsDelete(req: operations.AdsensehostCustomchannelsDeleteRequest, security: operations.AdsensehostCustomchannelsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsDeleteResponse>;
    /**
     * Get a specific custom channel from the host AdSense account.
     */
    adsensehostCustomchannelsGet(req: operations.AdsensehostCustomchannelsGetRequest, security: operations.AdsensehostCustomchannelsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsGetResponse>;
    /**
     * Add a new custom channel to the host AdSense account.
     */
    adsensehostCustomchannelsInsert(req: operations.AdsensehostCustomchannelsInsertRequest, security: operations.AdsensehostCustomchannelsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsInsertResponse>;
    /**
     * List all host custom channels in this AdSense account.
     */
    adsensehostCustomchannelsList(req: operations.AdsensehostCustomchannelsListRequest, security: operations.AdsensehostCustomchannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsListResponse>;
    /**
     * Update a custom channel in the host AdSense account. This method supports patch semantics.
     */
    adsensehostCustomchannelsPatch(req: operations.AdsensehostCustomchannelsPatchRequest, security: operations.AdsensehostCustomchannelsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsPatchResponse>;
    /**
     * Update a custom channel in the host AdSense account.
     */
    adsensehostCustomchannelsUpdate(req: operations.AdsensehostCustomchannelsUpdateRequest, security: operations.AdsensehostCustomchannelsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsUpdateResponse>;
}
