import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A conversation is a shared core component that Vonage APIs rely on. Conversations happen over multiple mediums and and can have associated Users through Memberships.
 */
export declare class Conversation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a conversation
     */
    createConversation(req: operations.CreateConversationRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateConversationResponse>;
    /**
     * Delete a conversation
     */
    deleteConversation(req: operations.DeleteConversationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConversationResponse>;
    /**
     * List conversations
     *
     * @remarks
     * This endpoint is **DEPRECATED**. Please use [/v0.2/conversations](/api/conversation.v2#get-conversations).
     *
     * List all conversations associated with your application. This endpoint required an admin JWT. To find all conversations for the currently logged in user, see [GET /users/:id/conversations](#getuserConversations)
     */
    listConversations(req: operations.ListConversationsRequest, config?: AxiosRequestConfig): Promise<operations.ListConversationsResponse>;
    /**
     * Record a conversation
     */
    recordConversation(req: operations.RecordConversationRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.RecordConversationResponse>;
    /**
     * Update a conversation
     */
    replaceConversation(req: operations.ReplaceConversationRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceConversationResponse>;
    /**
     * Retrieve a conversation
     */
    retrieveConversation(req: operations.RetrieveConversationRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveConversationResponse>;
}
