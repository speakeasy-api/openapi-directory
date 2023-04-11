import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Detections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Detects the language of text within a request.
     */
    languageDetectionsDetect(req: operations.LanguageDetectionsDetectRequest, security: operations.LanguageDetectionsDetectSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionsDetectResponse>;
    /**
     * Detects the language of text within a request.
     */
    languageDetectionsList(req: operations.LanguageDetectionsListRequest, security: operations.LanguageDetectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionsListResponse>;
}
