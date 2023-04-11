import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Languages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list of supported languages for translation.
     */
    languageLanguagesList(req: operations.LanguageLanguagesListRequest, security: operations.LanguageLanguagesListSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageLanguagesListResponse>;
}
