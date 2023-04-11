import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The concept of a user exists in Vonage APIs, you can associate one with a user in your own application if you choose. A user can have multiple memberships to conversations and can communicate with other users through various different mediums.
 */
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a user
     *
     * @remarks
     * Note: Users must be created with an admin JWT.
     */
    createUser(req: operations.CreateUserRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * Delete a user
     */
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Retrieve a user
     */
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * List users
     *
     * @remarks
     * This endpoint is **DEPRECATED**. Please use [/v0.2/users](/api/conversation.v2#get-users).
     */
    getUsers(config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * List user conversations
     */
    getuserConversations(req: operations.GetuserConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetuserConversationsResponse>;
    /**
     * Update a user
     */
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
}
