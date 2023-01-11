import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PermissionAddAndRemovePermissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePermissionAppsAppId - Removes permission that allows the app to access this user's data
    **/
    deletePermissionAppsAppId(req: operations.DeletePermissionAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionAppsAppIdResponse>;
    /**
     * getPermissionAppsAppId - Returns permission that allows the app to access this user's data
    **/
    getPermissionAppsAppId(req: operations.GetPermissionAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionAppsAppIdResponse>;
    /**
     * postPermissionAppsAppId - Adds permission to allow the app to access this user's data
    **/
    postPermissionAppsAppId(req: operations.PostPermissionAppsAppIdRequest, config?: AxiosRequestConfig): Promise<operations.PostPermissionAppsAppIdResponse>;
}
