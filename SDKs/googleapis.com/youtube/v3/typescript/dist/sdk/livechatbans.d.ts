import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LiveChatBans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a chat ban.
     */
    youtubeLiveChatBansDelete(req: operations.YoutubeLiveChatBansDeleteRequest, security: operations.YoutubeLiveChatBansDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatBansDeleteResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubeLiveChatBansInsert(req: operations.YoutubeLiveChatBansInsertRequest, security: operations.YoutubeLiveChatBansInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatBansInsertResponse>;
}
