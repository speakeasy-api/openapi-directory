import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles.
     */
    displayvideoUsersBulkEditAssignedUserRoles(req: operations.DisplayvideoUsersBulkEditAssignedUserRolesRequest, security: operations.DisplayvideoUsersBulkEditAssignedUserRolesSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersBulkEditAssignedUserRolesResponse>;
    /**
     * Creates a new user. Returns the newly created user if successful.
     */
    displayvideoUsersCreate(req: operations.DisplayvideoUsersCreateRequest, security: operations.DisplayvideoUsersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersCreateResponse>;
    /**
     * Deletes a user.
     */
    displayvideoUsersDelete(req: operations.DisplayvideoUsersDeleteRequest, security: operations.DisplayvideoUsersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersDeleteResponse>;
    /**
     * Gets a user.
     */
    displayvideoUsersGet(req: operations.DisplayvideoUsersGetRequest, security: operations.DisplayvideoUsersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersGetResponse>;
    /**
     * Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other.
     */
    displayvideoUsersList(req: operations.DisplayvideoUsersListRequest, security: operations.DisplayvideoUsersListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersListResponse>;
    /**
     * Updates an existing user. Returns the updated user if successful.
     */
    displayvideoUsersPatch(req: operations.DisplayvideoUsersPatchRequest, security: operations.DisplayvideoUsersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersPatchResponse>;
}
