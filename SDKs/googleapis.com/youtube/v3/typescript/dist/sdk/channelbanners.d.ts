import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelBanners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts a new resource into this collection.
     */
    youtubeChannelBannersInsert(req: operations.YoutubeChannelBannersInsertRequest, security: operations.YoutubeChannelBannersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelBannersInsertResponse>;
}
