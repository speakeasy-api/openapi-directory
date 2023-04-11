import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Translations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Translates input text, returning translated text.
     */
    languageTranslationsList(req: operations.LanguageTranslationsListRequest, security: operations.LanguageTranslationsListSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageTranslationsListResponse>;
    /**
     * Translates input text, returning translated text.
     */
    languageTranslationsTranslate(req: operations.LanguageTranslationsTranslateRequest, security: operations.LanguageTranslationsTranslateSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageTranslationsTranslateResponse>;
}
