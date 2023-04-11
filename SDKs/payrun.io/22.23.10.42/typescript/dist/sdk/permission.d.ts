import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Permission {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the permission object
     *
     * @remarks
     * Deletes the permission object from the application
     */
    deletePermission(req: operations.DeletePermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionResponse>;
    /**
     * Delete Permission tag
     *
     * @remarks
     * Deletes a tag from the Permission
     */
    deletePermissionTag(req: operations.DeletePermissionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionTagResponse>;
    /**
     * Get all Permission tags
     *
     * @remarks
     * Get all tags from all Permissions
     */
    getAllPermissionTags(req: operations.GetAllPermissionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPermissionTagsResponse>;
    /**
     * Get links to tagged Permissions
     *
     * @remarks
     * Gets the Permissions with the specified tag
     */
    getAllPermissionsWithTag(req: operations.GetAllPermissionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPermissionsWithTagResponse>;
    /**
     * Gets the permission object
     *
     * @remarks
     * Gets the permission object for application
     */
    getPermission(req: operations.GetPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionResponse>;
    /**
     * Gets all permission objects
     *
     * @remarks
     * Gets all permission objects for application
     */
    getPermissions(req: operations.GetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionsResponse>;
    /**
     * Get Permission tag
     *
     * @remarks
     * Gets a tag from the Permission
     */
    getTagFromPermission(req: operations.GetTagFromPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromPermissionResponse>;
    /**
     * Get tags from Permission
     *
     * @remarks
     * Gets all tags from the Permission
     */
    getTagsFromPermission(req: operations.GetTagsFromPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromPermissionResponse>;
    /**
     * Gets the user permissions
     *
     * @remarks
     * Gets the user permission instances
     */
    getUserPermissions(req: operations.GetUserPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPermissionsResponse>;
    /**
     * Patch permission object
     *
     * @remarks
     * Patch the permission object at the specified resource location
     */
    patchPermission(req: operations.PatchPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPermissionResponse>;
    /**
     * Post permisson object
     *
     * @remarks
     * Post the new permission object into the application
     */
    postPermission(req: operations.PostPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PostPermissionResponse>;
    /**
     * Puts permisson object
     *
     * @remarks
     * Puts the permission object into the specified resource location
     */
    putPermission(req: operations.PutPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PutPermissionResponse>;
    /**
     * Insert Permission tag
     *
     * @remarks
     * Inserts a tag on the Permission
     */
    putPermissionTag(req: operations.PutPermissionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutPermissionTagResponse>;
}
