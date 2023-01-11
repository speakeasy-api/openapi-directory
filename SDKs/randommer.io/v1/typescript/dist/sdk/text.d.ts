import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Text {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiTextLoremIpsum - Generate lorem ipsum
    **/
    getApiTextLoremIpsum(req: operations.GetApiTextLoremIpsumRequest, config?: AxiosRequestConfig): Promise<operations.GetApiTextLoremIpsumResponse>;
    /**
     * getApiTextPassword - Generate password
    **/
    getApiTextPassword(req: operations.GetApiTextPasswordRequest, config?: AxiosRequestConfig): Promise<operations.GetApiTextPasswordResponse>;
    /**
     * postApiTextHumanize - Humanize text
    **/
    postApiTextHumanize(req: operations.PostApiTextHumanizeRequest, config?: AxiosRequestConfig): Promise<operations.PostApiTextHumanizeResponse>;
    /**
     * postApiTextTransform - Transform text
    **/
    postApiTextTransform(req: operations.PostApiTextTransformRequest, config?: AxiosRequestConfig): Promise<operations.PostApiTextTransformResponse>;
}
