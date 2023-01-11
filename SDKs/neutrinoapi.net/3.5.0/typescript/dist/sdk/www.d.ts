import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Www {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * browserBot - Browser Bot
     *
     * Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website
    **/
    browserBot(req: operations.BrowserBotRequest, config?: AxiosRequestConfig): Promise<operations.BrowserBotResponse>;
    /**
     * htmlClean - HTML Clean
     *
     * Clean and sanitize untrusted HTML
    **/
    htmlClean(req: operations.HtmlCleanRequest, config?: AxiosRequestConfig): Promise<operations.HtmlCleanResponse>;
    /**
     * urlInfo - URL Info
     *
     * Parse, analyze and retrieve content from the supplied URL
    **/
    urlInfo(req: operations.UrlInfoRequest, config?: AxiosRequestConfig): Promise<operations.UrlInfoResponse>;
}
