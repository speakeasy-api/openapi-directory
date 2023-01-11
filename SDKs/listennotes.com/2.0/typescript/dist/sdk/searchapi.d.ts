import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SearchApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * search - Full-text search
     *
     * Full-text search on episodes, podcasts, or curated lists of podcasts.
     * Use the `offset` parameter to paginate through search results.
     * The FREE plan allows to see up to 30 search results (or `offset` < 30) per query.
     * The PRO plan allows to see up to 300 search results (or `offset` < 300) per query.
     * The ENTERPRISE plan allows to see up to 10,000 search results (or `offset` < 10000) per query.
     *
    **/
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * typeahead - Typeahead search
     *
     * Suggest search terms, podcast genres, and podcasts.
    **/
    typeahead(req: operations.TypeaheadRequest, config?: AxiosRequestConfig): Promise<operations.TypeaheadResponse>;
}
