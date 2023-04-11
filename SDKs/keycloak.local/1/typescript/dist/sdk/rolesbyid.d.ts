import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RolesByID {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the role
     */
    deleteRealmRolesByIdRoleId(req: operations.DeleteRealmRolesByIdRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmRolesByIdRoleIdResponse>;
    /**
     * Remove a set of roles from the role’s composite
     */
    deleteRealmRolesByIdRoleIdComposites(req: operations.DeleteRealmRolesByIdRoleIdCompositesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmRolesByIdRoleIdCompositesResponse>;
    /**
     * Get a specific role’s representation
     */
    getRealmRolesByIdRoleId(req: operations.GetRealmRolesByIdRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesByIdRoleIdResponse>;
    /**
     * Get role’s children   Returns a set of role’s children provided the role is a composite.
     */
    getRealmRolesByIdRoleIdComposites(req: operations.GetRealmRolesByIdRoleIdCompositesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesByIdRoleIdCompositesResponse>;
    /**
     * Get client-level roles for the client that are in the role’s composite
     */
    getRealmRolesByIdRoleIdCompositesClientsClient(req: operations.GetRealmRolesByIdRoleIdCompositesClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesByIdRoleIdCompositesClientsClientResponse>;
    /**
     * Get realm-level roles that are in the role’s composite
     */
    getRealmRolesByIdRoleIdCompositesRealm(req: operations.GetRealmRolesByIdRoleIdCompositesRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesByIdRoleIdCompositesRealmResponse>;
    /**
     * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
     */
    getRealmRolesByIdRoleIdManagementPermissions(req: operations.GetRealmRolesByIdRoleIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesByIdRoleIdManagementPermissionsResponse>;
    /**
     * Make the role a composite role by associating some child roles
     */
    postRealmRolesByIdRoleIdComposites(req: operations.PostRealmRolesByIdRoleIdCompositesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmRolesByIdRoleIdCompositesResponse>;
    /**
     * Update the role
     */
    putRealmRolesByIdRoleId(req: operations.PutRealmRolesByIdRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmRolesByIdRoleIdResponse>;
    /**
     * Return object stating whether role Authoirzation permissions have been initialized or not and a reference
     */
    putRealmRolesByIdRoleIdManagementPermissions(req: operations.PutRealmRolesByIdRoleIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmRolesByIdRoleIdManagementPermissionsResponse>;
}
