import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Results {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * resultsRead - Get the result from image processing
     *
     * This GET-Method returns the URL where the result can downloaded from.
    **/
    resultsRead(req: operations.ResultsReadRequest, config?: AxiosRequestConfig): Promise<operations.ResultsReadResponse>;
}
