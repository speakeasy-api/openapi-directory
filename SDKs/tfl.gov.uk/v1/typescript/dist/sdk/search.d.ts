import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Searches the bus schedules folder on S3 for a given bus number.
     */
    searchBusSchedules(req: operations.SearchBusSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.SearchBusSchedulesResponse>;
    /**
     * Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
     *             of 100. To return subsequent pages, use the paginated overload.
     */
    searchGet(req: operations.SearchGetRequest, config?: AxiosRequestConfig): Promise<operations.SearchGetResponse>;
    /**
     * Gets the available search categories.
     */
    searchMetaCategories(config?: AxiosRequestConfig): Promise<operations.SearchMetaCategoriesResponse>;
    /**
     * Gets the available searchProvider names.
     */
    searchMetaSearchProviders(config?: AxiosRequestConfig): Promise<operations.SearchMetaSearchProvidersResponse>;
    /**
     * Gets the available sorting options.
     */
    searchMetaSorts(config?: AxiosRequestConfig): Promise<operations.SearchMetaSortsResponse>;
}
