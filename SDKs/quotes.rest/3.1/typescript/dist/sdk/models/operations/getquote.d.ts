import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuoteSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteRequest extends SpeakeasyBase {
    /**
     * Quote ID
     */
    id?: string;
}
export declare class GetQuoteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200  response
     */
    quoteResponse?: shared.QuoteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
