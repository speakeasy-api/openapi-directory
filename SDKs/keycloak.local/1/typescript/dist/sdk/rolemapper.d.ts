import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RoleMapper {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete realm-level role mappings
     */
    deleteRealmGroupsIdRoleMappingsRealm(req: operations.DeleteRealmGroupsIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmGroupsIdRoleMappingsRealmResponse>;
    /**
     * Delete realm-level role mappings
     */
    deleteRealmUsersIdRoleMappingsRealm(req: operations.DeleteRealmUsersIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdRoleMappingsRealmResponse>;
    /**
     * Get role mappings
     */
    getRealmGroupsIdRoleMappings(req: operations.GetRealmGroupsIdRoleMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsResponse>;
    /**
     * Get realm-level role mappings
     */
    getRealmGroupsIdRoleMappingsRealm(req: operations.GetRealmGroupsIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsRealmResponse>;
    /**
     * Get realm-level roles that can be mapped
     */
    getRealmGroupsIdRoleMappingsRealmAvailable(req: operations.GetRealmGroupsIdRoleMappingsRealmAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsRealmAvailableResponse>;
    /**
     * Get effective realm-level role mappings   This will recurse all composite roles to get the result.
     */
    getRealmGroupsIdRoleMappingsRealmComposite(req: operations.GetRealmGroupsIdRoleMappingsRealmCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsRealmCompositeResponse>;
    /**
     * Get role mappings
     */
    getRealmUsersIdRoleMappings(req: operations.GetRealmUsersIdRoleMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsResponse>;
    /**
     * Get realm-level role mappings
     */
    getRealmUsersIdRoleMappingsRealm(req: operations.GetRealmUsersIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsRealmResponse>;
    /**
     * Get realm-level roles that can be mapped
     */
    getRealmUsersIdRoleMappingsRealmAvailable(req: operations.GetRealmUsersIdRoleMappingsRealmAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsRealmAvailableResponse>;
    /**
     * Get effective realm-level role mappings   This will recurse all composite roles to get the result.
     */
    getRealmUsersIdRoleMappingsRealmComposite(req: operations.GetRealmUsersIdRoleMappingsRealmCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsRealmCompositeResponse>;
    /**
     * Add realm-level role mappings to the user
     */
    postRealmGroupsIdRoleMappingsRealm(req: operations.PostRealmGroupsIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmGroupsIdRoleMappingsRealmResponse>;
    /**
     * Add realm-level role mappings to the user
     */
    postRealmUsersIdRoleMappingsRealm(req: operations.PostRealmUsersIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdRoleMappingsRealmResponse>;
}
