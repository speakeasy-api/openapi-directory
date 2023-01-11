import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomPages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createCustomPage - Create custom page
     *
     * Create a new custom page inside of this project
    **/
    createCustomPage(req: operations.CreateCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomPageResponse>;
    /**
     * deleteCustomPage - Delete custom page
     *
     * Delete the custom page with this slug
    **/
    deleteCustomPage(req: operations.DeleteCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomPageResponse>;
    /**
     * getCustomPage - Get custom page
     *
     * Returns the custom page with this slug
    **/
    getCustomPage(req: operations.GetCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomPageResponse>;
    /**
     * getCustomPages - Get custom pages
     *
     * Returns a list of custom pages associated with the project API key
    **/
    getCustomPages(req: operations.GetCustomPagesRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomPagesResponse>;
    /**
     * updateCustomPage - Update custom page
     *
     * Update a custom page with this slug
    **/
    updateCustomPage(req: operations.UpdateCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomPageResponse>;
}
