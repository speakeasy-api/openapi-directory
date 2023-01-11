import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Corporate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAvailableCorporatePermissions - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
     *
     * Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
    **/
    getAvailableCorporatePermissions(config?: AxiosRequestConfig): Promise<operations.GetAvailableCorporatePermissionsResponse>;
    /**
     * getAvailableCorporatePermissionsById - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
     *
     * Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
    **/
    getAvailableCorporatePermissionsById(req: operations.GetAvailableCorporatePermissionsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableCorporatePermissionsByIdResponse>;
    /**
     * getCorporate - Get details of my corporate account
     *
     * Get details of my corporate account
    **/
    getCorporate(config?: AxiosRequestConfig): Promise<operations.GetCorporateResponse>;
    /**
     * getCorporateById - Get details of this corporate account
     *
     * Get details of this corporate account
    **/
    getCorporateById(req: operations.GetCorporateByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCorporateByIdResponse>;
    /**
     * getCorporateUserGroups - Get a list of user groups for my corporate account
     *
     * Get a list of user groups for my corporate account
    **/
    getCorporateUserGroups(config?: AxiosRequestConfig): Promise<operations.GetCorporateUserGroupsResponse>;
    /**
     * getCorporateUserGroupsById - Get a list of user groups for this corporate account
     *
     * Get a list of user groups for this corporate account
    **/
    getCorporateUserGroupsById(req: operations.GetCorporateUserGroupsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCorporateUserGroupsByIdResponse>;
    /**
     * getCorporateUsers - Get a list of users for my corporate account
     *
     * Get a list of users for my corporate account
    **/
    getCorporateUsers(config?: AxiosRequestConfig): Promise<operations.GetCorporateUsersResponse>;
    /**
     * getCorporateUsersById - Get a list of users for this corporate account
     *
     * Get a list of users for this corporate account
    **/
    getCorporateUsersById(req: operations.GetCorporateUsersByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCorporateUsersByIdResponse>;
    /**
     * saveCorporateUser - Create or update a corporate user
     *
     * Create or update a corporate user
    **/
    saveCorporateUser(req: operations.SaveCorporateUserRequest, config?: AxiosRequestConfig): Promise<operations.SaveCorporateUserResponse>;
    /**
     * saveCorporateUserGroup - Create or update a corporate user group
     *
     * Create or update a corporate user group
    **/
    saveCorporateUserGroup(req: operations.SaveCorporateUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.SaveCorporateUserGroupResponse>;
    /**
     * saveCorporateUserGroupById - Create or update a corporate user group for this corporate account
     *
     * Create or update a corporate user group for this corporate account
    **/
    saveCorporateUserGroupById(req: operations.SaveCorporateUserGroupByIdRequest, config?: AxiosRequestConfig): Promise<operations.SaveCorporateUserGroupByIdResponse>;
}
