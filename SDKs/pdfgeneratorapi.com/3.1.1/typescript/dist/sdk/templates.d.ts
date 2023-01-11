import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Templates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * copyTemplate - Copy template
     *
     * Creates a copy of a template to the workspace specified in authentication parameters.
    **/
    copyTemplate(req: operations.CopyTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CopyTemplateResponse>;
    /**
     * createTemplate - Create template
     *
     * Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.
    **/
    createTemplate(req: operations.CreateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateTemplateResponse>;
    /**
     * deleteTemplate - Delete template
     *
     * Deletes the template from workspace
    **/
    deleteTemplate(req: operations.DeleteTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTemplateResponse>;
    /**
     * getEditorUrl - Open editor
     *
     * Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.
     *
    **/
    getEditorUrl(req: operations.GetEditorUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorUrlResponse>;
    /**
     * getTemplate - Get template
     *
     * Returns template configuration
    **/
    getTemplate(req: operations.GetTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateResponse>;
    /**
     * getTemplates - Get templates
     *
     * Returns a list of templates available for the authenticated workspace
    **/
    getTemplates(config?: AxiosRequestConfig): Promise<operations.GetTemplatesResponse>;
    /**
     * updateTemplate - Update template
     *
     * Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.
    **/
    updateTemplate(req: operations.UpdateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTemplateResponse>;
}
