import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Translate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLanguages - Retrieve list of supported languages
    **/
    getLanguages(config?: AxiosRequestConfig): Promise<operations.GetLanguagesResponse>;
    /**
     * postDetect - Detect the language of a single text
    **/
    postDetect(req: operations.PostDetectRequest, config?: AxiosRequestConfig): Promise<operations.PostDetectResponse>;
    /**
     * postLanguages - Retrieve list of supported languages
    **/
    postLanguages(config?: AxiosRequestConfig): Promise<operations.PostLanguagesResponse>;
    /**
     * postTranslate - Translate text from a language to another
    **/
    postTranslate(req: operations.PostTranslateRequest, config?: AxiosRequestConfig): Promise<operations.PostTranslateResponse>;
}
