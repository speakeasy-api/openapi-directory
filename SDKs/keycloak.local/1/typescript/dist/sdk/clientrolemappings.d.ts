import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ClientRoleMappings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete client-level roles from user role mapping
     */
    deleteRealmGroupsIdRoleMappingsClientsClient(req: operations.DeleteRealmGroupsIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmGroupsIdRoleMappingsClientsClientResponse>;
    /**
     * Delete client-level roles from user role mapping
     */
    deleteRealmUsersIdRoleMappingsClientsClient(req: operations.DeleteRealmUsersIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdRoleMappingsClientsClientResponse>;
    /**
     * Get client-level role mappings for the user, and the app
     */
    getRealmGroupsIdRoleMappingsClientsClient(req: operations.GetRealmGroupsIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientResponse>;
    /**
     * Get available client-level roles that can be mapped to the user
     */
    getRealmGroupsIdRoleMappingsClientsClientAvailable(req: operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableResponse>;
    /**
     * Get effective client-level role mappings   This recurses any composite roles
     */
    getRealmGroupsIdRoleMappingsClientsClientComposite(req: operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeResponse>;
    /**
     * Get client-level role mappings for the user, and the app
     */
    getRealmUsersIdRoleMappingsClientsClient(req: operations.GetRealmUsersIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientResponse>;
    /**
     * Get available client-level roles that can be mapped to the user
     */
    getRealmUsersIdRoleMappingsClientsClientAvailable(req: operations.GetRealmUsersIdRoleMappingsClientsClientAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientAvailableResponse>;
    /**
     * Get effective client-level role mappings   This recurses any composite roles
     */
    getRealmUsersIdRoleMappingsClientsClientComposite(req: operations.GetRealmUsersIdRoleMappingsClientsClientCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientCompositeResponse>;
    /**
     * Add client-level roles to the user role mapping
     */
    postRealmGroupsIdRoleMappingsClientsClient(req: operations.PostRealmGroupsIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmGroupsIdRoleMappingsClientsClientResponse>;
    /**
     * Add client-level roles to the user role mapping
     */
    postRealmUsersIdRoleMappingsClientsClient(req: operations.PostRealmUsersIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdRoleMappingsClientsClientResponse>;
}
