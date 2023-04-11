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
     * Removes an alias.
     */
    directoryUsersAliasesDelete(req: operations.DirectoryUsersAliasesDeleteRequest, security: operations.DirectoryUsersAliasesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersAliasesDeleteResponse>;
    /**
     * Adds an alias.
     */
    directoryUsersAliasesInsert(req: operations.DirectoryUsersAliasesInsertRequest, security: operations.DirectoryUsersAliasesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersAliasesInsertResponse>;
    /**
     * Lists all aliases for a user.
     */
    directoryUsersAliasesList(req: operations.DirectoryUsersAliasesListRequest, security: operations.DirectoryUsersAliasesListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersAliasesListResponse>;
    /**
     * Watches for changes in users list.
     */
    directoryUsersAliasesWatch(req: operations.DirectoryUsersAliasesWatchRequest, security: operations.DirectoryUsersAliasesWatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersAliasesWatchResponse>;
    /**
     * Deletes a user.
     */
    directoryUsersDelete(req: operations.DirectoryUsersDeleteRequest, security: operations.DirectoryUsersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersDeleteResponse>;
    /**
     * Retrieves a user.
     */
    directoryUsersGet(req: operations.DirectoryUsersGetRequest, security: operations.DirectoryUsersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersGetResponse>;
    /**
     * Creates a user.
     */
    directoryUsersInsert(req: operations.DirectoryUsersInsertRequest, security: operations.DirectoryUsersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersInsertResponse>;
    /**
     * Retrieves a paginated list of either deleted users or all users in a domain.
     */
    directoryUsersList(req: operations.DirectoryUsersListRequest, security: operations.DirectoryUsersListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersListResponse>;
    /**
     * Makes a user a super administrator.
     */
    directoryUsersMakeAdmin(req: operations.DirectoryUsersMakeAdminRequest, security: operations.DirectoryUsersMakeAdminSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersMakeAdminResponse>;
    /**
     * Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
     */
    directoryUsersPatch(req: operations.DirectoryUsersPatchRequest, security: operations.DirectoryUsersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersPatchResponse>;
    /**
     * Removes the user's photo.
     */
    directoryUsersPhotosDelete(req: operations.DirectoryUsersPhotosDeleteRequest, security: operations.DirectoryUsersPhotosDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersPhotosDeleteResponse>;
    /**
     * Retrieves the user's photo.
     */
    directoryUsersPhotosGet(req: operations.DirectoryUsersPhotosGetRequest, security: operations.DirectoryUsersPhotosGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersPhotosGetResponse>;
    /**
     * Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
     */
    directoryUsersPhotosPatch(req: operations.DirectoryUsersPhotosPatchRequest, security: operations.DirectoryUsersPhotosPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersPhotosPatchResponse>;
    /**
     * Adds a photo for the user.
     */
    directoryUsersPhotosUpdate(req: operations.DirectoryUsersPhotosUpdateRequest, security: operations.DirectoryUsersPhotosUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersPhotosUpdateResponse>;
    /**
     * Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
     */
    directoryUsersSignOut(req: operations.DirectoryUsersSignOutRequest, security: operations.DirectoryUsersSignOutSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersSignOutResponse>;
    /**
     * Undeletes a deleted user.
     */
    directoryUsersUndelete(req: operations.DirectoryUsersUndeleteRequest, security: operations.DirectoryUsersUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersUndeleteResponse>;
    /**
     * Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.
     */
    directoryUsersUpdate(req: operations.DirectoryUsersUpdateRequest, security: operations.DirectoryUsersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersUpdateResponse>;
    /**
     * Watches for changes in users list.
     */
    directoryUsersWatch(req: operations.DirectoryUsersWatchRequest, security: operations.DirectoryUsersWatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersWatchResponse>;
}
