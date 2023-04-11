import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LiveChatModerators {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a chat moderator.
     */
    youtubeLiveChatModeratorsDelete(req: operations.YoutubeLiveChatModeratorsDeleteRequest, security: operations.YoutubeLiveChatModeratorsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatModeratorsDeleteResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubeLiveChatModeratorsInsert(req: operations.YoutubeLiveChatModeratorsInsertRequest, security: operations.YoutubeLiveChatModeratorsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatModeratorsInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeLiveChatModeratorsList(req: operations.YoutubeLiveChatModeratorsListRequest, security: operations.YoutubeLiveChatModeratorsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveChatModeratorsListResponse>;
}
