import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the user object
     *
     * @remarks
     * Deletes the user object from the application
     */
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Delete user tag
     *
     * @remarks
     * Deletes a tag from the user
     */
    deleteUserTag(req: operations.DeleteUserTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagResponse>;
    /**
     * Get all user tags
     *
     * @remarks
     * Get all tags from all users
     */
    getAllUserTags(req: operations.GetAllUserTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUserTagsResponse>;
    /**
     * Get links to tagged users
     *
     * @remarks
     * Gets the users with the specified tag
     */
    getAllUsersWithTag(req: operations.GetAllUsersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUsersWithTagResponse>;
    /**
     * Get user tag
     *
     * @remarks
     * Gets a tag from the user
     */
    getTagFromUser(req: operations.GetTagFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromUserResponse>;
    /**
     * Get tags from user
     *
     * @remarks
     * Gets all tags from the user
     */
    getTagsFromUser(req: operations.GetTagsFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromUserResponse>;
    /**
     * Gets the user object
     *
     * @remarks
     * Gets the user object for application
     */
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * Gets the user permissions
     *
     * @remarks
     * Gets the user permission instances
     */
    getUserPermissions(req: operations.GetUserPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPermissionsResponse>;
    /**
     * Gets all user objects
     *
     * @remarks
     * Gets all user objects for application
     */
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * Patch user object
     *
     * @remarks
     * Patch the user object at the specified resource location
     */
    patchUser(req: operations.PatchUserRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserResponse>;
    /**
     * Post user object
     *
     * @remarks
     * Post the new user object into the application
     */
    postUser(req: operations.PostUserRequest, config?: AxiosRequestConfig): Promise<operations.PostUserResponse>;
    /**
     * Puts user object
     *
     * @remarks
     * Puts the user object into the specified resource location
     */
    putUser(req: operations.PutUserRequest, config?: AxiosRequestConfig): Promise<operations.PutUserResponse>;
    /**
     * Insert user tag
     *
     * @remarks
     * Inserts a tag on the user
     */
    putUserTag(req: operations.PutUserTagRequest, config?: AxiosRequestConfig): Promise<operations.PutUserTagResponse>;
}
