import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SAMLRoles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a SAML role
     *
     * @remarks
     * Create a SAML role
     */
    createOrganizationSamlRole(req: operations.CreateOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationSamlRoleResponse>;
    /**
     * Return a SAML role
     *
     * @remarks
     * Return a SAML role
     */
    getOrganizationSamlRole(req: operations.GetOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlRoleResponse>;
    /**
     * List the SAML roles for this organization
     *
     * @remarks
     * List the SAML roles for this organization
     */
    getOrganizationSamlRoles(req: operations.GetOrganizationSamlRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlRolesResponse>;
    /**
     * Update a SAML role
     *
     * @remarks
     * Update a SAML role
     */
    updateOrganizationSamlRole(req: operations.UpdateOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSamlRoleResponse>;
}
