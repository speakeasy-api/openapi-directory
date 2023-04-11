import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class I18nLanguages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeI18nLanguagesList(req: operations.YoutubeI18nLanguagesListRequest, security: operations.YoutubeI18nLanguagesListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeI18nLanguagesListResponse>;
}
