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
     * getQuery - Search results
     *
     * https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements - OpenSearch github repository
    **/
    getQuery(req: operations.GetQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResponse>;
    /**
     * getQueryExtension - Search results
     *
     * https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements - OpenSearch github repository
    **/
    getQueryExtension(req: operations.GetQueryExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryExtensionResponse>;
}
