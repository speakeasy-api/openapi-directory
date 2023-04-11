import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConfigTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove a configuration template
     *
     * @remarks
     * Remove a configuration template
     */
    deleteOrganizationConfigTemplate(req: operations.DeleteOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationConfigTemplateResponse>;
    /**
     * List the configuration templates for this organization
     *
     * @remarks
     * List the configuration templates for this organization
     */
    getOrganizationConfigTemplates(req: operations.GetOrganizationConfigTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplatesResponse>;
}
