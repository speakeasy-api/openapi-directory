import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CancelBookingQuoteServerList: readonly ["https://api.sandbox.viator.com/partner"];
export declare class CancelBookingQuoteRequest extends SpeakeasyBase {
    /**
     * Unique numeric identifier of the booking for which to retrieve a cancellation quote
     */
    bookingReference: string;
}
export declare class CancelBookingQuoteResponse extends SpeakeasyBase {
    /**
     * Unauthorized
     */
    fourHundredAndOneUNAUTHORIZED?: shared.FourHundredAndOneUNAUTHORIZED;
    /**
     * Not Acceptable
     */
    fourHundredAndSixNOTACCEPTABLE?: shared.FourHundredAndSixNOTACCEPTABLE;
    /**
     * Internal Server Error
     */
    fiveHundredINTERNALSERVERERROR?: shared.FiveHundredINTERNALSERVERERROR;
    /**
     * Service Unavailable
     */
    fiveHundredAndThreeSERVICEUNAVAILABLE?: shared.FiveHundredAndThreeSERVICEUNAVAILABLE;
    /**
     * Success
     */
    cancelBookingQuoteResponse?: shared.CancelBookingQuoteResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
