import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SuperChatEvents {
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
    youtubeSuperChatEventsList(req: operations.YoutubeSuperChatEventsListRequest, security: operations.YoutubeSuperChatEventsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeSuperChatEventsListResponse>;
}
