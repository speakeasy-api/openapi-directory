import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Quote {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteQuoteDislike - Remove the disLike for the given Quote as a user of the API Key.
    **/
    deleteQuoteDislike(req: operations.DeleteQuoteDislikeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteDislikeResponse>;
    /**
     * deleteQuoteLike - Remove the Like for the given Quote as a user of the API Key.
    **/
    deleteQuoteLike(req: operations.DeleteQuoteLikeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteLikeResponse>;
    /**
     * getQuote - Gets a `Quote` with a given `id`.
    **/
    getQuote(req: operations.GetQuoteRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteResponse>;
    /**
     * getQuoteAuthorsPopular - Gets a list of popular author names in the system.
     *
    **/
    getQuoteAuthorsPopular(req: operations.GetQuoteAuthorsPopularRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteAuthorsPopularResponse>;
    /**
     * getQuoteAuthorsSearch - Gets a list of author names in the system.
     *
    **/
    getQuoteAuthorsSearch(req: operations.GetQuoteAuthorsSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteAuthorsSearchResponse>;
    /**
     * getQuoteCategoriesPopular - Gets a list of popular `Quote` Categories.
     *
    **/
    getQuoteCategoriesPopular(req: operations.GetQuoteCategoriesPopularRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteCategoriesPopularResponse>;
    /**
     * getQuoteCategoriesSearch - Gets a list of `Quote` Categories matching the query string.
     *
    **/
    getQuoteCategoriesSearch(req: operations.GetQuoteCategoriesSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteCategoriesSearchResponse>;
    /**
     * getQuoteRandom - Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
    **/
    getQuoteRandom(req: operations.GetQuoteRandomRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteRandomResponse>;
    /**
     * getQuoteSearch - Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote.
    **/
    getQuoteSearch(req: operations.GetQuoteSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteSearchResponse>;
    /**
     * postQuoteDislike - Dislike the given Quote as a user of the API Key. Same as `put` but a convenient alias for those clients that don't support `put` cleanly.
    **/
    postQuoteDislike(req: operations.PostQuoteDislikeRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteDislikeResponse>;
    /**
     * postQuoteLike - Like the given Quote as a user of the API Key. Same as `PUT` but a convenient alias for those clients that don't support `PUT` cleanly.
    **/
    postQuoteLike(req: operations.PostQuoteLikeRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteLikeResponse>;
    /**
     * putQuoteDislike - Dislike the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.
    **/
    putQuoteDislike(req: operations.PutQuoteDislikeRequest, config?: AxiosRequestConfig): Promise<operations.PutQuoteDislikeResponse>;
    /**
     * putQuoteLike - Like the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.
    **/
    putQuoteLike(req: operations.PutQuoteLikeRequest, config?: AxiosRequestConfig): Promise<operations.PutQuoteLikeResponse>;
}
