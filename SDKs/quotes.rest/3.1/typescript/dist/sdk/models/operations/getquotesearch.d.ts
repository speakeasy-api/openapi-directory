import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuoteSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteSearchRequest extends SpeakeasyBase {
    /**
     * Quote Author
     */
    author?: string;
    /**
     * Quote Category
     */
    category?: string;
    /**
     * Language of the Quote. The language must be supported in our system.
     */
    language?: string;
    /**
     * No of quotes to return. The max limit depends on the subscription level.
     */
    limit?: number;
    /**
     * Quote maximum Length
     */
    maxlength?: number;
    /**
     * Quote minimum Length
     */
    minlength?: number;
    /**
     * Should search private collection? Default searches public collection.
     */
    private?: boolean;
    /**
     * keyword to search for in the quote
     */
    query?: string;
    /**
     * Should search only SFW (Safe For Work) quotes?
     */
    sfw?: boolean;
}
export declare class GetQuoteSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200  response
     */
    quoteResponse?: shared.QuoteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
