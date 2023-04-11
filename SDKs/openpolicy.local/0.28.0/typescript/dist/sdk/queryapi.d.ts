import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Posting queries to OPA
 */
export declare class QueryAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Execute an ad-hoc query (simple)
     *
     * @remarks
     * This API endpoint returns bindings for the variables in the query.
     *
     * For more complex JSON queries, use `POST /v1/query` instead.
     */
    getQuery(req: operations.GetQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResponse>;
    /**
     * Execute an ad-hoc query (complex)
     *
     * @remarks
     * This API endpoint returns bindings for the variables in the query.
     *
     * For simpler JSON queries, you may use `GET /v1/query` instead.
     */
    postQuery(req: operations.PostQueryRequest, config?: AxiosRequestConfig): Promise<operations.PostQueryResponse>;
    /**
     * Execute a simple query
     *
     * @remarks
     * This API queries the document at * /data/system/main* by default (however, you can [configure OPA](https://www.openpolicyagent.org/docs/latest/configuration/) to use a different path to serve these queries). That document defines the response.
     * For example, use the following in `PUT /v1/policies/{path}`) to define a rule that will produce a value for the * /data/system/main* document:
     *
     *   ```yaml
     *   package system
     *   main = msg {
     *     msg := sprintf("hello, %v", input.user)
     *   }
     *   ```
     *
     * The server will return a *not found* (404) response if * /data/system/main* is undefined.
     */
    postSimpleQuery(req: operations.PostSimpleQueryRequest, config?: AxiosRequestConfig): Promise<operations.PostSimpleQueryResponse>;
}
