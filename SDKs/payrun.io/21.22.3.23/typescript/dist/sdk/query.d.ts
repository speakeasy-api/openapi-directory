import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Query {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getQueryResponse - Get the query result
     *
     * Get the results for the specified query
    **/
    getQueryResponse(req: operations.GetQueryResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResponseResponse>;
}
