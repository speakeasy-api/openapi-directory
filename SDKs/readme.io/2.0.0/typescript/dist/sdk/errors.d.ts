import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Errors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getErrors - Get errors
     *
     * Returns with all of the error page types for this project
    **/
    getErrors(req: operations.GetErrorsRequest, config?: AxiosRequestConfig): Promise<operations.GetErrorsResponse>;
}
