import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Query operations, such as performing a standard search
 */
export declare class QueryService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Query
     */
    query(req: operations.QueryRequest, security: operations.QuerySecurity, config?: AxiosRequestConfig): Promise<operations.QueryResponse>;
    /**
     * Stream Query
     */
    streamQuery(req: operations.StreamQueryRequest, security: operations.StreamQuerySecurity, config?: AxiosRequestConfig): Promise<operations.StreamQueryResponse>;
}
