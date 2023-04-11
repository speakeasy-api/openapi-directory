import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Quote {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a specific quote of project
     *
     * @remarks
     * Get a specific quote of project
     */
    getQuote(req: operations.GetQuoteRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteResponse>;
    /**
     * List the quotes
     *
     * @remarks
     * List the quotes
     */
    getQuoteList(req: operations.GetQuoteListRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteListResponse>;
    /**
     * List the quote states
     *
     * @remarks
     * List the quote states
     */
    getQuoteStateList(req: operations.GetQuoteStateListRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteStateListResponse>;
    /**
     * List the quotes of workgroup level
     *
     * @remarks
     * List the quotes of workgroup level
     */
    getV1WorkgroupsWorkgroupIdQuotes(req: operations.GetV1WorkgroupsWorkgroupIdQuotesRequest, config?: AxiosRequestConfig): Promise<operations.GetV1WorkgroupsWorkgroupIdQuotesResponse>;
    /**
     * Accept / Reject a Quote
     *
     * @remarks
     * Accept / Reject a Quote
     */
    putQuoteJson(req: operations.PutQuoteJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutQuoteJsonResponse>;
    /**
     * Accept / Reject a Quote
     *
     * @remarks
     * Accept / Reject a Quote
     */
    putQuoteRaw(req: operations.PutQuoteRawRequest, config?: AxiosRequestConfig): Promise<operations.PutQuoteRawResponse>;
}
