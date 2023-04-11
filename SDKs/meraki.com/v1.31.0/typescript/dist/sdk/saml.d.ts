import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Saml {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a SAML IdP for your organization.
     *
     * @remarks
     * Create a SAML IdP for your organization.
     */
    createOrganizationSamlIdp(req: operations.CreateOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationSamlIdpResponse>;
    /**
     * Remove a SAML IdP in your organization.
     *
     * @remarks
     * Remove a SAML IdP in your organization.
     */
    deleteOrganizationSamlIdp(req: operations.DeleteOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationSamlIdpResponse>;
    /**
     * Returns the SAML SSO enabled settings for an organization.
     *
     * @remarks
     * Returns the SAML SSO enabled settings for an organization.
     */
    getOrganizationSaml(req: operations.GetOrganizationSamlRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlResponse>;
    /**
     * Get a SAML IdP from your organization.
     *
     * @remarks
     * Get a SAML IdP from your organization.
     */
    getOrganizationSamlIdp(req: operations.GetOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlIdpResponse>;
    /**
     * List the SAML IdPs in your organization.
     *
     * @remarks
     * List the SAML IdPs in your organization.
     */
    getOrganizationSamlIdps(req: operations.GetOrganizationSamlIdpsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlIdpsResponse>;
    /**
     * Updates the SAML SSO enabled settings for an organization.
     *
     * @remarks
     * Updates the SAML SSO enabled settings for an organization.
     */
    updateOrganizationSaml(req: operations.UpdateOrganizationSamlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSamlResponse>;
    /**
     * Update a SAML IdP in your organization
     *
     * @remarks
     * Update a SAML IdP in your organization
     */
    updateOrganizationSamlIdp(req: operations.UpdateOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSamlIdpResponse>;
}
