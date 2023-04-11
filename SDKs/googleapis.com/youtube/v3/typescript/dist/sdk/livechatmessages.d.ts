import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LiveChatMessages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a chat message.
     */
    youtubeLiveChatMessagesDelete(req: operations.YoutubeLiveChatMessagesDeleteRequest, security: operations.YoutubeLiveChatMessagesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatMessagesDeleteResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubeLiveChatMessagesInsert(req: operations.YoutubeLiveChatMessagesInsertRequest, security: operations.YoutubeLiveChatMessagesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatMessagesInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeLiveChatMessagesList(req: operations.YoutubeLiveChatMessagesListRequest, security: operations.YoutubeLiveChatMessagesListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatMessagesListResponse>;
}
