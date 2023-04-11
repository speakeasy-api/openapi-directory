import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Personalizedstream {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a stream of personalized book clusters
     */
    booksPersonalizedstreamGet(req: operations.BooksPersonalizedstreamGetRequest, security: operations.BooksPersonalizedstreamGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksPersonalizedstreamGetResponse>;
}
