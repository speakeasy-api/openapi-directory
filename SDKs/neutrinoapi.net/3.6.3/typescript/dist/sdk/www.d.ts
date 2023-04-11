import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Www {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Browser Bot
     *
     * @remarks
     * Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website
     */
    browserBot(req: operations.BrowserBotRequestBody, config?: AxiosRequestConfig): Promise<operations.BrowserBotResponse>;
    /**
     * HTML Clean
     *
     * @remarks
     * Clean and sanitize untrusted HTML
     */
    htmlClean(req: operations.HTMLCleanRequestBody, config?: AxiosRequestConfig): Promise<operations.HTMLCleanResponse>;
    /**
     * URL Info
     *
     * @remarks
     * Parse, analyze and retrieve content from the supplied URL
     */
    urlInfo(req: operations.URLInfoRequest, config?: AxiosRequestConfig): Promise<operations.URLInfoResponse>;
}
