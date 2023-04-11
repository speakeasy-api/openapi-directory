import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SearchAds360Fields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     */
    searchads360SearchAds360FieldsGet(req: operations.Searchads360SearchAds360FieldsGetRequest, security: operations.Searchads360SearchAds360FieldsGetSecurity, config?: AxiosRequestConfig): Promise<operations.Searchads360SearchAds360FieldsGetResponse>;
    /**
     * Returns all fields that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
     */
    searchads360SearchAds360FieldsSearch(req: operations.Searchads360SearchAds360FieldsSearchRequest, security: operations.Searchads360SearchAds360FieldsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.Searchads360SearchAds360FieldsSearchResponse>;
}
