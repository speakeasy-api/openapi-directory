import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Conversations group your message history with each contact into one thread
 */
export declare class Conversations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Closes a conversation
     */
    conversationsClose(req: operations.ConversationsCloseRequest, security: operations.ConversationsCloseSecurity, config?: AxiosRequestConfig): Promise<operations.ConversationsCloseResponse>;
    /**
     * Fetch conversation by ID
     */
    conversationsFetch(req: operations.ConversationsFetchRequest, security: operations.ConversationsFetchSecurity, config?: AxiosRequestConfig): Promise<operations.ConversationsFetchResponse>;
    /**
     * Fetch conversations
     */
    conversationsFetchAll(req: operations.ConversationsFetchAllRequest, security: operations.ConversationsFetchAllSecurity, config?: AxiosRequestConfig): Promise<operations.ConversationsFetchAllResponse>;
}
