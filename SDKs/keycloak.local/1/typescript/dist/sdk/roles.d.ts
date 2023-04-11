import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Roles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a role by name
     */
    deleteRealmClientsIdRolesRoleName(req: operations.DeleteRealmClientsIdRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdRolesRoleNameResponse>;
    /**
     * Remove roles from the role’s composite
     */
    deleteRealmClientsIdRolesRoleNameComposites(req: operations.DeleteRealmClientsIdRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdRolesRoleNameCompositesResponse>;
    /**
     * Delete a role by name
     */
    deleteRealmRolesRoleName(req: operations.DeleteRealmRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmRolesRoleNameResponse>;
    /**
     * Remove roles from the role’s composite
     */
    deleteRealmRolesRoleNameComposites(req: operations.DeleteRealmRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmRolesRoleNameCompositesResponse>;
    /**
     * Get all roles for the realm or client
     */
    getRealmClientsIdRoles(req: operations.GetRealmClientsIdRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesResponse>;
    /**
     * Get a role by name
     */
    getRealmClientsIdRolesRoleName(req: operations.GetRealmClientsIdRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameResponse>;
    /**
     * Get composites of the role
     */
    getRealmClientsIdRolesRoleNameComposites(req: operations.GetRealmClientsIdRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesResponse>;
    /**
     * An app-level roles for the specified app for the role’s composite
     */
    getRealmClientsIdRolesRoleNameCompositesClientsClient(req: operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientResponse>;
    /**
     * Get realm-level roles of the role’s composite
     */
    getRealmClientsIdRolesRoleNameCompositesRealm(req: operations.GetRealmClientsIdRolesRoleNameCompositesRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesRealmResponse>;
    /**
     * Return List of Groups that have the specified role name
     */
    getRealmClientsIdRolesRoleNameGroups(req: operations.GetRealmClientsIdRolesRoleNameGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameGroupsResponse>;
    /**
     * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
     */
    getRealmClientsIdRolesRoleNameManagementPermissions(req: operations.GetRealmClientsIdRolesRoleNameManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameManagementPermissionsResponse>;
    /**
     * Return List of Users that have the specified role name
     */
    getRealmClientsIdRolesRoleNameUsers(req: operations.GetRealmClientsIdRolesRoleNameUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameUsersResponse>;
    /**
     * Get all roles for the realm or client
     */
    getRealmRoles(req: operations.GetRealmRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesResponse>;
    /**
     * Get a role by name
     */
    getRealmRolesRoleName(req: operations.GetRealmRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameResponse>;
    /**
     * Get composites of the role
     */
    getRealmRolesRoleNameComposites(req: operations.GetRealmRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameCompositesResponse>;
    /**
     * An app-level roles for the specified app for the role’s composite
     */
    getRealmRolesRoleNameCompositesClientsClient(req: operations.GetRealmRolesRoleNameCompositesClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameCompositesClientsClientResponse>;
    /**
     * Get realm-level roles of the role’s composite
     */
    getRealmRolesRoleNameCompositesRealm(req: operations.GetRealmRolesRoleNameCompositesRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameCompositesRealmResponse>;
    /**
     * Return List of Groups that have the specified role name
     */
    getRealmRolesRoleNameGroups(req: operations.GetRealmRolesRoleNameGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameGroupsResponse>;
    /**
     * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
     */
    getRealmRolesRoleNameManagementPermissions(req: operations.GetRealmRolesRoleNameManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameManagementPermissionsResponse>;
    /**
     * Return List of Users that have the specified role name
     */
    getRealmRolesRoleNameUsers(req: operations.GetRealmRolesRoleNameUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameUsersResponse>;
    /**
     * Create a new role for the realm or client
     */
    postRealmClientsIdRoles(req: operations.PostRealmClientsIdRolesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdRolesResponse>;
    /**
     * Add a composite to the role
     */
    postRealmClientsIdRolesRoleNameComposites(req: operations.PostRealmClientsIdRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdRolesRoleNameCompositesResponse>;
    /**
     * Create a new role for the realm or client
     */
    postRealmRoles(req: operations.PostRealmRolesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmRolesResponse>;
    /**
     * Add a composite to the role
     */
    postRealmRolesRoleNameComposites(req: operations.PostRealmRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmRolesRoleNameCompositesResponse>;
    /**
     * Update a role by name
     */
    putRealmClientsIdRolesRoleName(req: operations.PutRealmClientsIdRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdRolesRoleNameResponse>;
    /**
     * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
     */
    putRealmClientsIdRolesRoleNameManagementPermissions(req: operations.PutRealmClientsIdRolesRoleNameManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdRolesRoleNameManagementPermissionsResponse>;
    /**
     * Update a role by name
     */
    putRealmRolesRoleName(req: operations.PutRealmRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmRolesRoleNameResponse>;
    /**
     * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
     */
    putRealmRolesRoleNameManagementPermissions(req: operations.PutRealmRolesRoleNameManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmRolesRoleNameManagementPermissionsResponse>;
}
