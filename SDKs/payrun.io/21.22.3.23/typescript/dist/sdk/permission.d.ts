import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Permission {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePermission - Deletes the permission object
     *
     * Deletes the permission object from the application
    **/
    deletePermission(req: operations.DeletePermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionResponse>;
    /**
     * getPermission - Gets the permission object
     *
     * Gets the permission object for application
    **/
    getPermission(req: operations.GetPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionResponse>;
    /**
     * getPermissions - Gets all permission objects
     *
     * Gets all permission objects for application
    **/
    getPermissions(req: operations.GetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionsResponse>;
    /**
     * patchPermission - Patch permission object
     *
     * Patch the permission object at the specified resource location
    **/
    patchPermission(req: operations.PatchPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPermissionResponse>;
    /**
     * postPermission - Post permisson object
     *
     * Post the new permission object into the application
    **/
    postPermission(req: operations.PostPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PostPermissionResponse>;
    /**
     * putPermission - Puts permisson object
     *
     * Puts the permission object into the specified resource location
    **/
    putPermission(req: operations.PutPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PutPermissionResponse>;
}
