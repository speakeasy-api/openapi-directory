import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Channels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeChannelsList(req: operations.YoutubeChannelsListRequest, security: operations.YoutubeChannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelsListResponse>;
    /**
     * Updates an existing resource.
     */
    youtubeChannelsUpdate(req: operations.YoutubeChannelsUpdateRequest, security: operations.YoutubeChannelsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelsUpdateResponse>;
}
