import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Translate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve list of supported languages
     */
    getLanguages(config?: AxiosRequestConfig): Promise<operations.GetLanguagesResponse>;
    /**
     * Detect the language of a single text
     */
    postDetect(req: string, config?: AxiosRequestConfig): Promise<operations.PostDetectResponse>;
    /**
     * Translate text from a language to another
     */
    postTranslate(req: string, config?: AxiosRequestConfig): Promise<operations.PostTranslateResponse>;
    /**
     * Translate file from a language to another
     */
    postTranslateFile(req: string, config?: AxiosRequestConfig): Promise<operations.PostTranslateFileResponse>;
}
