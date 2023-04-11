import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage conversations and messages with other users. <br /><br /> It's important to note that messages are always sent by email to the users.   So it's possible to create a fully functional app using the trash nothing API without using any of the conversations or messages API endpoints.  These API endpoints are useful for developers who want to build a complete messaging interface into their app.
 *
 * @remarks
 *
 */
export declare class Messages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Archive all conversations
     */
    archiveAllConversations(req: operations.ArchiveAllConversationsRequestBody, config?: AxiosRequestConfig): Promise<operations.ArchiveAllConversationsResponse>;
    /**
     * Archive conversation
     */
    archiveConversation(req: operations.ArchiveConversationRequest, config?: AxiosRequestConfig): Promise<operations.ArchiveConversationResponse>;
    /**
     * Block conversation
     */
    blockConversation(req: operations.BlockConversationRequest, config?: AxiosRequestConfig): Promise<operations.BlockConversationResponse>;
    /**
     * Delete conversation
     */
    deleteConversation(req: operations.DeleteConversationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConversationResponse>;
    /**
     * List conversation messages
     */
    getConversationMessages(req: operations.GetConversationMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationMessagesResponse>;
    /**
     * List conversations
     */
    getConversations(req: operations.GetConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationsResponse>;
    /**
     * Mark all conversations as read
     */
    markAllConversationsRead(req: operations.MarkAllConversationsReadRequestBody, config?: AxiosRequestConfig): Promise<operations.MarkAllConversationsReadResponse>;
    /**
     * Mark conversation as read
     */
    markConversationRead(req: operations.MarkConversationReadRequest, config?: AxiosRequestConfig): Promise<operations.MarkConversationReadResponse>;
    /**
     * Reply to conversation
     */
    replyToConversation(req: operations.ReplyToConversationRequest, config?: AxiosRequestConfig): Promise<operations.ReplyToConversationResponse>;
    /**
     * Report conversation
     */
    reportConversation(req: operations.ReportConversationRequest, config?: AxiosRequestConfig): Promise<operations.ReportConversationResponse>;
    /**
     * Search conversations
     *
     * @remarks
     * Searches all conversations except blocked conversations.
     */
    searchConversations(req: operations.SearchConversationsRequest, config?: AxiosRequestConfig): Promise<operations.SearchConversationsResponse>;
    /**
     * Unarchive conversation
     */
    unarchiveConversation(req: operations.UnarchiveConversationRequest, config?: AxiosRequestConfig): Promise<operations.UnarchiveConversationResponse>;
    /**
     * Unblock conversation
     */
    unblockConversation(req: operations.UnblockConversationRequest, config?: AxiosRequestConfig): Promise<operations.UnblockConversationResponse>;
}
