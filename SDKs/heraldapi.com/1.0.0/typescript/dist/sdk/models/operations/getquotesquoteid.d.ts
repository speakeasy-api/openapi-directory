import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuotesQuoteIdRequest extends SpeakeasyBase {
    /**
     * `id` for a specific quote
     */
    quoteId: string;
}
/**
 * OK
 */
export declare class GetQuotesQuoteId200ApplicationJSON extends SpeakeasyBase {
    /**
     * A quote declares an institution's willingness to sell an insurance policy to a customer. Active quotes contain details about a policy the customer can purchase and related prices.
     *
     * @remarks
     *
     * Read more about [quotes](https://www.heraldapi.com/docs/quotes).
     */
    quote?: shared.QuoteV1;
}
export declare class GetQuotesQuoteIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getQuotesQuoteId200ApplicationJSONObject?: GetQuotesQuoteId200ApplicationJSON;
}
