import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List organizations in a workspace
     */
    getWorkspaceSlugOrganizations(req: operations.GetWorkspaceSlugOrganizationsRequest, security: operations.GetWorkspaceSlugOrganizationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugOrganizationsResponse>;
    /**
     * Get an organization
     */
    getWorkspaceSlugOrganizationsOrganizationId(req: operations.GetWorkspaceSlugOrganizationsOrganizationIdRequest, security: operations.GetWorkspaceSlugOrganizationsOrganizationIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceSlugOrganizationsOrganizationIdResponse>;
    /**
     * Update an organization
     */
    putWorkspaceSlugOrganizationsOrganizationId(req: operations.PutWorkspaceSlugOrganizationsOrganizationIdRequest, security: operations.PutWorkspaceSlugOrganizationsOrganizationIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceSlugOrganizationsOrganizationIdResponse>;
}
