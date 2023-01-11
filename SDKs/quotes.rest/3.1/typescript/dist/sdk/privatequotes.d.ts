import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PrivateQuotes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteQuote - Delete a quote. The user needs to be the owner of the quote to be able to delete it.
     *
    **/
    deleteQuote(req: operations.DeleteQuoteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQuoteResponse>;
    /**
     * getQuote - Gets a `Quote` with a given `id`.
    **/
    getQuote(req: operations.GetQuoteRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteResponse>;
    /**
     * getQuoteList - Get the list of quotes in your private collection.
    **/
    getQuoteList(req: operations.GetQuoteListRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteListResponse>;
    /**
     * patchQuote - Update a quote
    **/
    patchQuote(req: operations.PatchQuoteRequest, config?: AxiosRequestConfig): Promise<operations.PatchQuoteResponse>;
    /**
     * postQuote - Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
    **/
    postQuote(req: operations.PostQuoteRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteResponse>;
    /**
     * postQuoteTagsAdd - Add a tag to a given Quote.
    **/
    postQuoteTagsAdd(req: operations.PostQuoteTagsAddRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteTagsAddResponse>;
    /**
     * postQuoteTagsRemove - Remove a tag from a given quote.
    **/
    postQuoteTagsRemove(req: operations.PostQuoteTagsRemoveRequest, config?: AxiosRequestConfig): Promise<operations.PostQuoteTagsRemoveResponse>;
    /**
     * putQuote - Add a new quote to your private collection.
    **/
    putQuote(req: operations.PutQuoteRequest, config?: AxiosRequestConfig): Promise<operations.PutQuoteResponse>;
}
