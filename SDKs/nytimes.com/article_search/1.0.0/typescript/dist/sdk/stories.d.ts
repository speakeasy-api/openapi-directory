import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Article Search
     *
     * @remarks
     * Article Search requests use the following URI structure:
     *
     */
    getArticlesearchJson(req: operations.GetArticlesearchJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetArticlesearchJsonResponse>;
}
