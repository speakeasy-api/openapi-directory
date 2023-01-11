import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Translations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDocumentTranslations - Get a list of strings and its translations in the document.
    **/
    getDocumentTranslations(req: operations.GetDocumentTranslationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentTranslationsResponse>;
    /**
     * getDocumentTranslationsForLanguage - Get a list of strings and its translations in the document for this target language of the project.
    **/
    getDocumentTranslationsForLanguage(req: operations.GetDocumentTranslationsForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentTranslationsForLanguageResponse>;
    /**
     * getProjectTranslations - Deprecated. Use /projects/{projectId}/strings instead.
    **/
    getProjectTranslations(req: operations.GetProjectTranslationsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectTranslationsResponse>;
    /**
     * getProjectTranslationsForLanguage - Deprecated. use /projects/{projectId}/strings/{language} instead.
    **/
    getProjectTranslationsForLanguage(req: operations.GetProjectTranslationsForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectTranslationsForLanguageResponse>;
}
