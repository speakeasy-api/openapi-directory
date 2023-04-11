import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Define reusable message or web templates
 */
export declare class Templates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create template
     */
    templatesCreate(req: operations.TemplatesCreateRequest, security: operations.TemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TemplatesCreateResponse>;
    /**
     * Fetch template by ID
     */
    templatesFetch(req: operations.TemplatesFetchRequest, security: operations.TemplatesFetchSecurity, config?: AxiosRequestConfig): Promise<operations.TemplatesFetchResponse>;
    /**
     * Fetch templates
     */
    templatesFetchAll(req: operations.TemplatesFetchAllRequest, security: operations.TemplatesFetchAllSecurity, config?: AxiosRequestConfig): Promise<operations.TemplatesFetchAllResponse>;
    /**
     * Deletes a template
     */
    templatesRemove(req: operations.TemplatesRemoveRequest, security: operations.TemplatesRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.TemplatesRemoveResponse>;
    /**
     * Updates a template
     */
    templatesUpdate(req: operations.TemplatesUpdateRequest, security: operations.TemplatesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TemplatesUpdateResponse>;
}
