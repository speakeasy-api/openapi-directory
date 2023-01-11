import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUser - Deletes the user object
     *
     * Deletes the user object from the application
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * deleteUserTag - Delete user tag
     *
     * Deletes a tag from the user
    **/
    deleteUserTag(req: operations.DeleteUserTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagResponse>;
    /**
     * getAllUserTags - Get all user tags
     *
     * Get all tags from all users
    **/
    getAllUserTags(req: operations.GetAllUserTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUserTagsResponse>;
    /**
     * getAllUsersWithTag - Get links to tagged users
     *
     * Gets the users with the specified tag
    **/
    getAllUsersWithTag(req: operations.GetAllUsersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllUsersWithTagResponse>;
    /**
     * getTagFromUser - Get user tag
     *
     * Gets a tag from the user
    **/
    getTagFromUser(req: operations.GetTagFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromUserResponse>;
    /**
     * getTagsFromUser - Get tags from user
     *
     * Gets all tags from the user
    **/
    getTagsFromUser(req: operations.GetTagsFromUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromUserResponse>;
    /**
     * getUser - Gets the user object
     *
     * Gets the user object for application
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUsers - Gets all user objects
     *
     * Gets all user objects for application
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * patchUser - Patch user object
     *
     * Patch the user object at the specified resource location
    **/
    patchUser(req: operations.PatchUserRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserResponse>;
    /**
     * postUser - Post user object
     *
     * Post the new user object into the application
    **/
    postUser(req: operations.PostUserRequest, config?: AxiosRequestConfig): Promise<operations.PostUserResponse>;
    /**
     * putUser - Puts user object
     *
     * Puts the user object into the specified resource location
    **/
    putUser(req: operations.PutUserRequest, config?: AxiosRequestConfig): Promise<operations.PutUserResponse>;
    /**
     * putUserTag - Insert user tag
     *
     * Inserts a tag on the user
    **/
    putUserTag(req: operations.PutUserTagRequest, config?: AxiosRequestConfig): Promise<operations.PutUserTagResponse>;
}
