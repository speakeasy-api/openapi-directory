import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomPages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create custom page
     *
     * @remarks
     * Create a new custom page inside of this project
     */
    createCustomPage(req: shared.CustomPage, security: operations.CreateCustomPageSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCustomPageResponse>;
    /**
     * Delete custom page
     *
     * @remarks
     * Delete the custom page with this slug
     */
    deleteCustomPage(req: operations.DeleteCustomPageRequest, security: operations.DeleteCustomPageSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCustomPageResponse>;
    /**
     * Get custom page
     *
     * @remarks
     * Returns the custom page with this slug
     */
    getCustomPage(req: operations.GetCustomPageRequest, security: operations.GetCustomPageSecurity, config?: AxiosRequestConfig): Promise<operations.GetCustomPageResponse>;
    /**
     * Get custom pages
     *
     * @remarks
     * Returns a list of custom pages associated with the project API key
     */
    getCustomPages(req: operations.GetCustomPagesRequest, security: operations.GetCustomPagesSecurity, config?: AxiosRequestConfig): Promise<operations.GetCustomPagesResponse>;
    /**
     * Update custom page
     *
     * @remarks
     * Update a custom page with this slug
     */
    updateCustomPage(req: operations.UpdateCustomPageRequest, security: operations.UpdateCustomPageSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCustomPageResponse>;
}
