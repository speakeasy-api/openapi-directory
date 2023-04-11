import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuoteRandomSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteRandomRequest extends SpeakeasyBase {
    /**
     * Language of the Quote. The language must be supported in our system.
     */
    language?: string;
    /**
     * No of quotes to return. The max limit depends on the subscription level.
     */
    limit?: number;
}
export declare class GetQuoteRandomResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200  response
     */
    quoteResponse?: shared.QuoteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
