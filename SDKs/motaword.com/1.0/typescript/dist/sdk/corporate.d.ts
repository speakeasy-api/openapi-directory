import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Corporate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * View available permissions
     *
     * @remarks
     * View a list of available permissions for your corporate account. They are used when assigning permissions to your corporate users.
     */
    getAvailableCorporatePermissions(config?: AxiosRequestConfig): Promise<operations.GetAvailableCorporatePermissionsResponse>;
    /**
     * Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
     *
     * @remarks
     * Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
     */
    getAvailableCorporatePermissionsById(req: operations.GetAvailableCorporatePermissionsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableCorporatePermissionsByIdResponse>;
    /**
     * View your corporate account
     *
     * @remarks
     * View the details of the corporate account that your user account belongs to.
     */
    getCorporate(config?: AxiosRequestConfig): Promise<operations.GetCorporateResponse>;
    /**
     * Get details of this corporate account
     *
     * @remarks
     * Get details of this corporate account
     */
    getCorporateById(req: operations.GetCorporateByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCorporateByIdResponse>;
    /**
     * View user groups
     *
     * @remarks
     * View a list of user groups under my corporate account. User groups are a part of our RBAC implementation and can be used to configure complex permission scenarios.
     */
    getCorporateUserGroups(config?: AxiosRequestConfig): Promise<operations.GetCorporateUserGroupsResponse>;
    /**
     * Get a list of user groups for this corporate account
     *
     * @remarks
     * Get a list of user groups for this corporate account
     */
    getCorporateUserGroupsById(req: operations.GetCorporateUserGroupsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCorporateUserGroupsByIdResponse>;
    /**
     * View users
     *
     * @remarks
     * View a list of users under your corporate account. This endpoint will only return information if your user account is permitted to view corporate account users, configured by your administrator.
     */
    getCorporateUsers(config?: AxiosRequestConfig): Promise<operations.GetCorporateUsersResponse>;
    /**
     * Get a list of users for this corporate account
     *
     * @remarks
     * Get a list of users for this corporate account
     */
    getCorporateUsersById(req: operations.GetCorporateUsersByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCorporateUsersByIdResponse>;
    /**
     * Get a list of corporate accounts
     *
     * @remarks
     * Get a list of corporate accounts
     */
    getCorporatesList(config?: AxiosRequestConfig): Promise<operations.GetCorporatesListResponse>;
    /**
     * Create or update a user
     *
     * @remarks
     * Create or update a user under your corporate account. This endpoint requires permissions for corporate user management, configured by your administrator.
     */
    saveCorporateUser(req: shared.UserUpdateContent, config?: AxiosRequestConfig): Promise<operations.SaveCorporateUserResponse>;
    /**
     * Create or update a corporate user group
     *
     * @remarks
     * Create or update a corporate user group
     */
    saveCorporateUserGroup(req: shared.UserGroup, config?: AxiosRequestConfig): Promise<operations.SaveCorporateUserGroupResponse>;
    /**
     * Create or update a corporate user group for this corporate account
     *
     * @remarks
     * Create or update a corporate user group for this corporate account
     */
    saveCorporateUserGroupById(req: operations.SaveCorporateUserGroupByIdRequest, config?: AxiosRequestConfig): Promise<operations.SaveCorporateUserGroupByIdResponse>;
}
