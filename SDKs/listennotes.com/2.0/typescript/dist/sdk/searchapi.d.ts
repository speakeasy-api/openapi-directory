import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints to search podcasts
 */
export declare class SearchAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch related search terms
     *
     * @remarks
     * Suggest related search terms. The results are more comprehensive than from `GET /typeahead`. This endpoint is available only in the PRO/ENTERPRISE plan.
     */
    getRelatedSearches(req: operations.GetRelatedSearchesRequest, config?: AxiosRequestConfig): Promise<operations.GetRelatedSearchesResponse>;
    /**
     * Fetch trending search terms
     *
     * @remarks
     * Fetch up to 10 most recent trending search terms on the Listen Notes platform.
     */
    getTrendingSearches(req: operations.GetTrendingSearchesRequest, config?: AxiosRequestConfig): Promise<operations.GetTrendingSearchesResponse>;
    /**
     * Full-text search
     *
     * @remarks
     * Full-text search on episodes, podcasts, or curated lists of podcasts.
     * Use the `offset` parameter to paginate through search results.
     * The FREE plan allows to see up to 30 search results (or `offset` < 30) per query.
     * The PRO plan allows to see up to 300 search results (or `offset` < 300) per query.
     * The ENTERPRISE plan allows to see up to 10,000 search results (or `offset` < 10000) per query.
     *
     */
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * Spell check on a search term
     *
     * @remarks
     * Suggest a list of words that correct the spelling errors of a search term. This endpoint is available only in the PRO/ENTERPRISE plan.
     */
    spellcheck(req: operations.SpellcheckRequest, config?: AxiosRequestConfig): Promise<operations.SpellcheckResponse>;
    /**
     * Typeahead search
     *
     * @remarks
     * Suggest search terms, podcast genres, and podcasts.
     */
    typeahead(req: operations.TypeaheadRequest, config?: AxiosRequestConfig): Promise<operations.TypeaheadResponse>;
}
