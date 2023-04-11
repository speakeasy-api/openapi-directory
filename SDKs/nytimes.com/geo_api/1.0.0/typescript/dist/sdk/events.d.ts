import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Geographic API
     *
     * @remarks
     * Geographic API
     */
    getQueryJson(req: operations.GetQueryJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryJsonResponse>;
}
