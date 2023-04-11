import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Access random quote service. Use this to get random quotes , quotes filtered by authors or tags etc. You need an API key to access this service.
 */
export declare class Quote {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove the disLike for the given Quote as a user of the API Key.
     */
    deleteQuoteDislike(req: operations.DeleteQuoteDislikeRequest, security: operations.DeleteQuoteDislikeSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteDislikeResponse>;
    /**
     * Remove the Like for the given Quote as a user of the API Key.
     */
    deleteQuoteLike(req: operations.DeleteQuoteLikeRequest, security: operations.DeleteQuoteLikeSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteLikeResponse>;
    /**
     * Gets a `Quote` with a given `id`.
     */
    getQuote(req: operations.GetQuoteRequest, security: operations.GetQuoteSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteResponse>;
    /**
     * Gets a list of popular author names in the system.
     *
     */
    getQuoteAuthorsPopular(req: operations.GetQuoteAuthorsPopularRequest, security: operations.GetQuoteAuthorsPopularSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteAuthorsPopularResponse>;
    /**
     * Gets a list of author names in the system.
     *
     */
    getQuoteAuthorsSearch(req: operations.GetQuoteAuthorsSearchRequest, security: operations.GetQuoteAuthorsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteAuthorsSearchResponse>;
    /**
     * Gets a list of popular `Quote` Categories.
     *
     */
    getQuoteCategoriesPopular(req: operations.GetQuoteCategoriesPopularRequest, security: operations.GetQuoteCategoriesPopularSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteCategoriesPopularResponse>;
    /**
     * Gets a list of `Quote` Categories matching the query string.
     *
     */
    getQuoteCategoriesSearch(req: operations.GetQuoteCategoriesSearchRequest, security: operations.GetQuoteCategoriesSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteCategoriesSearchResponse>;
    /**
     * Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
     */
    getQuoteRandom(req: operations.GetQuoteRandomRequest, security: operations.GetQuoteRandomSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteRandomResponse>;
    /**
     * Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote.
     */
    getQuoteSearch(req: operations.GetQuoteSearchRequest, security: operations.GetQuoteSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteSearchResponse>;
    /**
     * Dislike the given Quote as a user of the API Key. Same as `put` but a convenient alias for those clients that don't support `put` cleanly.
     */
    postQuoteDislike(req: operations.PostQuoteDislikeRequest, security: operations.PostQuoteDislikeSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteDislikeResponse>;
    /**
     * Like the given Quote as a user of the API Key. Same as `PUT` but a convenient alias for those clients that don't support `PUT` cleanly.
     */
    postQuoteLike(req: operations.PostQuoteLikeRequest, security: operations.PostQuoteLikeSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteLikeResponse>;
    /**
     * Dislike the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.
     */
    putQuoteDislike(req: operations.PutQuoteDislikeRequest, security: operations.PutQuoteDislikeSecurity, config?: AxiosRequestConfig): Promise<operations.PutQuoteDislikeResponse>;
    /**
     * Like the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.
     */
    putQuoteLike(req: operations.PutQuoteLikeRequest, security: operations.PutQuoteLikeSecurity, config?: AxiosRequestConfig): Promise<operations.PutQuoteLikeResponse>;
}
