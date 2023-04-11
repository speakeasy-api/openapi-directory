import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Quotes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /quotes/{quote_id}
     *
     * @remarks
     * ### Get a quote
     *
     * Get the latest details for a specific [quote](https://www.heraldapi.com/docs/quotes) created by a `submission`. While a submission can contain many products, each quote is for a *single* product. A `quote_id` is created for each quote, located in the submission response.
     *
     * > If you're looking to create a new quote with a carrier, you need to [create a submission](../reference/HeraldAPI.v1.yaml/paths/~1submissions/post) before retrieving quote details.
     */
    getQuotesQuoteId(req: operations.GetQuotesQuoteIdRequest, config?: AxiosRequestConfig): Promise<operations.GetQuotesQuoteIdResponse>;
}
