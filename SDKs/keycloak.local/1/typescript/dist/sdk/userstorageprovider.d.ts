import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserStorageProvider {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
     */
    getIdName(req: operations.GetIdNameRequest, config?: AxiosRequestConfig): Promise<operations.GetIdNameResponse>;
    /**
     * Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
     */
    getRealmUserStorageIdName(req: operations.GetRealmUserStorageIdNameRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUserStorageIdNameResponse>;
    /**
     * Remove imported users
     */
    postRealmUserStorageIdRemoveImportedUsers(req: operations.PostRealmUserStorageIdRemoveImportedUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUserStorageIdRemoveImportedUsersResponse>;
    /**
     * Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
     */
    postRealmUserStorageIdSync(req: operations.PostRealmUserStorageIdSyncRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUserStorageIdSyncResponse>;
    /**
     * Unlink imported users from a storage provider
     */
    postRealmUserStorageIdUnlinkUsers(req: operations.PostRealmUserStorageIdUnlinkUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUserStorageIdUnlinkUsersResponse>;
    /**
     * Trigger sync of mapper data related to ldap mapper (roles, groups, … )   direction is "fedToKeycloak" or "keycloakToFed"
     */
    postRealmUserStorageParentIdMappersIdSync(req: operations.PostRealmUserStorageParentIdMappersIdSyncRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUserStorageParentIdMappersIdSyncResponse>;
}
