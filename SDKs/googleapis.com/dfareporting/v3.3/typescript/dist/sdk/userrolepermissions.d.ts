import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserRolePermissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one user role permission by ID.
     */
    dfareportingUserRolePermissionsGet(req: operations.DfareportingUserRolePermissionsGetRequest, security: operations.DfareportingUserRolePermissionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolePermissionsGetResponse>;
    /**
     * Gets a list of user role permissions, possibly filtered.
     */
    dfareportingUserRolePermissionsList(req: operations.DfareportingUserRolePermissionsListRequest, security: operations.DfareportingUserRolePermissionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolePermissionsListResponse>;
}
