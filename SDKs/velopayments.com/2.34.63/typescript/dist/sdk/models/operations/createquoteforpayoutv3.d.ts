import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateQuoteForPayoutV3Request extends SpeakeasyBase {
    /**
     * Id of the payout
     */
    payoutId: string;
}
export declare class CreateQuoteForPayoutV3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Quote for payout
     */
    quoteResponseV3?: shared.QuoteResponseV3;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The resource was not found or is no longer available
     *
     * @remarks
     *
     */
    inlineResponse404?: shared.InlineResponse404;
    /**
     * The request contained data that would result in a duplicate value
     *
     * @remarks
     *
     */
    inlineResponse409?: shared.InlineResponse409;
}
