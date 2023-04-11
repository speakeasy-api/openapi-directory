import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns all the custom columns associated with the customer in full detail.
     */
    searchads360CustomersCustomColumnsList(req: operations.Searchads360CustomersCustomColumnsListRequest, security: operations.Searchads360CustomersCustomColumnsListSecurity, config?: AxiosRequestConfig): Promise<operations.Searchads360CustomersCustomColumnsListResponse>;
    /**
     * Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
     */
    searchads360CustomersSearchAds360Search(req: operations.Searchads360CustomersSearchAds360SearchRequest, security: operations.Searchads360CustomersSearchAds360SearchSecurity, config?: AxiosRequestConfig): Promise<operations.Searchads360CustomersSearchAds360SearchResponse>;
    /**
     * Returns all rows that match the search stream query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
     */
    searchads360CustomersSearchAds360SearchStream(req: operations.Searchads360CustomersSearchAds360SearchStreamRequest, security: operations.Searchads360CustomersSearchAds360SearchStreamSecurity, config?: AxiosRequestConfig): Promise<operations.Searchads360CustomersSearchAds360SearchStreamResponse>;
}
