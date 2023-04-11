import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserRoles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing user role.
     */
    dfareportingUserRolesDelete(req: operations.DfareportingUserRolesDeleteRequest, security: operations.DfareportingUserRolesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesDeleteResponse>;
    /**
     * Gets one user role by ID.
     */
    dfareportingUserRolesGet(req: operations.DfareportingUserRolesGetRequest, security: operations.DfareportingUserRolesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesGetResponse>;
    /**
     * Inserts a new user role.
     */
    dfareportingUserRolesInsert(req: operations.DfareportingUserRolesInsertRequest, security: operations.DfareportingUserRolesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesInsertResponse>;
    /**
     * Retrieves a list of user roles, possibly filtered. This method supports paging.
     */
    dfareportingUserRolesList(req: operations.DfareportingUserRolesListRequest, security: operations.DfareportingUserRolesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesListResponse>;
    /**
     * Updates an existing user role. This method supports patch semantics.
     */
    dfareportingUserRolesPatch(req: operations.DfareportingUserRolesPatchRequest, security: operations.DfareportingUserRolesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesPatchResponse>;
    /**
     * Updates an existing user role.
     */
    dfareportingUserRolesUpdate(req: operations.DfareportingUserRolesUpdateRequest, security: operations.DfareportingUserRolesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingUserRolesUpdateResponse>;
}
