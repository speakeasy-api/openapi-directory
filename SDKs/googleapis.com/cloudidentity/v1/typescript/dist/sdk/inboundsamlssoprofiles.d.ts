import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InboundSamlSsoProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates an InboundSamlSsoProfile for a customer.
     */
    cloudidentityInboundSamlSsoProfilesCreate(req: operations.CloudidentityInboundSamlSsoProfilesCreateRequest, security: operations.CloudidentityInboundSamlSsoProfilesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSamlSsoProfilesCreateResponse>;
    /**
     * Adds an IdpCredential. Up to 2 credentials are allowed.
     */
    cloudidentityInboundSamlSsoProfilesIdpCredentialsAdd(req: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest, security: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse>;
    /**
     * Returns a list of IdpCredentials in an InboundSamlSsoProfile.
     */
    cloudidentityInboundSamlSsoProfilesIdpCredentialsList(req: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest, security: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse>;
    /**
     * Lists InboundSamlSsoProfiles for a customer.
     */
    cloudidentityInboundSamlSsoProfilesList(req: operations.CloudidentityInboundSamlSsoProfilesListRequest, security: operations.CloudidentityInboundSamlSsoProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSamlSsoProfilesListResponse>;
}
