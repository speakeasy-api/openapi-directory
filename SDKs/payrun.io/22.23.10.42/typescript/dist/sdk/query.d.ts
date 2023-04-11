import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Query {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the query result
     *
     * @remarks
     * Get the results for the specified query
     */
    getQueryResponse(req: operations.GetQueryResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResponseResponse>;
}
