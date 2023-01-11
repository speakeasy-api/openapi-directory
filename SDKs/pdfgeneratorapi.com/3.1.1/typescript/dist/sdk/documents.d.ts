import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Documents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mergeTemplate - Generate document
     *
     * Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
    **/
    mergeTemplate(req: operations.MergeTemplateRequest, config?: AxiosRequestConfig): Promise<operations.MergeTemplateResponse>;
    /**
     * mergeTemplates - Generate document (multiple templates)
     *
     * Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
    **/
    mergeTemplates(req: operations.MergeTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.MergeTemplatesResponse>;
}
