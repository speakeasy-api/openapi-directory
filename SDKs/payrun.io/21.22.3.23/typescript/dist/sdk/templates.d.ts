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
     * getTemplateModel - Get the object template
     *
     * Returns a template instance of the specified data type
    **/
    getTemplateModel(req: operations.GetTemplateModelRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateModelResponse>;
    /**
     * getTemplates - Get a list of all available data object tempaltes
     *
     * Returns a collection of links to all the available data object templates
    **/
    getTemplates(req: operations.GetTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplatesResponse>;
}
