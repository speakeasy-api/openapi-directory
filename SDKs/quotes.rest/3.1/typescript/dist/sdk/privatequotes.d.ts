import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create and manage your own Quotes. You need an API key to access this service.
 */
export declare class PrivateQuotes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a quote. The user needs to be the owner of the quote to be able to delete it.
     *
     */
    deleteQuote(req: operations.DeleteQuoteRequest, security: operations.DeleteQuoteSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteResponse>;
    /**
     * Gets a `Quote` with a given `id`.
     */
    getQuote(req: operations.GetQuoteRequest, security: operations.GetQuoteSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteResponse>;
    /**
     * Get the list of quotes in your private collection.
     */
    getQuoteList(req: operations.GetQuoteListRequest, security: operations.GetQuoteListSecurity, config?: AxiosRequestConfig): Promise<operations.GetQuoteListResponse>;
    /**
     * Update a quote
     */
    patchQuote(req: operations.PatchQuoteRequest, security: operations.PatchQuoteSecurity, config?: AxiosRequestConfig): Promise<operations.PatchQuoteResponse>;
    /**
     * Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
     */
    postQuote(req: operations.PostQuoteRequest, security: operations.PostQuoteSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteResponse>;
    /**
     * Add a tag to a given Quote.
     */
    postQuoteTagsAdd(req: operations.PostQuoteTagsAddRequest, security: operations.PostQuoteTagsAddSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteTagsAddResponse>;
    /**
     * Remove a tag from a given quote.
     */
    postQuoteTagsRemove(req: operations.PostQuoteTagsRemoveRequest, security: operations.PostQuoteTagsRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.PostQuoteTagsRemoveResponse>;
    /**
     * Add a new quote to your private collection.
     */
    putQuote(req: operations.PutQuoteRequest, security: operations.PutQuoteSecurity, config?: AxiosRequestConfig): Promise<operations.PutQuoteResponse>;
}
