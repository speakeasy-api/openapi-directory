import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserRolePermissionGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one user role permission group by ID.
     */
    dfareportingUserRolePermissionGroupsGet(req: operations.DfareportingUserRolePermissionGroupsGetRequest, security: operations.DfareportingUserRolePermissionGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolePermissionGroupsGetResponse>;
    /**
     * Gets a list of all supported user role permission groups.
     */
    dfareportingUserRolePermissionGroupsList(req: operations.DfareportingUserRolePermissionGroupsListRequest, security: operations.DfareportingUserRolePermissionGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolePermissionGroupsListResponse>;
}
