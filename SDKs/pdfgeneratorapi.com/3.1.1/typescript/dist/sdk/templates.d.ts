import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Templates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Copy template
     *
     * @remarks
     * Creates a copy of a template to the workspace specified in authentication parameters.
     */
    copyTemplate(req: operations.CopyTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CopyTemplateResponse>;
    /**
     * Create template
     *
     * @remarks
     * Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.
     */
    createTemplate(req: shared.TemplateDefinitionNew, config?: AxiosRequestConfig): Promise<operations.CreateTemplateResponse>;
    /**
     * Delete template
     *
     * @remarks
     * Deletes the template from workspace
     */
    deleteTemplate(req: operations.DeleteTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTemplateResponse>;
    /**
     * Open editor
     *
     * @remarks
     * Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.
     *
     */
    getEditorUrl(req: operations.GetEditorUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorUrlResponse>;
    /**
     * Get template
     *
     * @remarks
     * Returns template configuration
     */
    getTemplate(req: operations.GetTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateResponse>;
    /**
     * Get templates
     *
     * @remarks
     * Returns a list of templates available for the authenticated workspace
     */
    getTemplates(config?: AxiosRequestConfig): Promise<operations.GetTemplatesResponse>;
    /**
     * Update template
     *
     * @remarks
     * Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.
     */
    updateTemplate(req: operations.UpdateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTemplateResponse>;
}
