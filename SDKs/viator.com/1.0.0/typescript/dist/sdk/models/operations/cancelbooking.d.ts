import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CancelBookingServerList: readonly ["https://api.sandbox.viator.com/partner"];
export declare class CancelBookingRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    cancellationRequest?: shared.CancellationRequest;
    /**
     * The ID of the booking
     */
    bookingReference: string;
}
export declare enum CancelBooking404ApplicationJSONCodeEnum {
    NotFound = "NOT_FOUND"
}
/**
 * The specified booking was not found; or, it was not created with this API key
 */
export declare enum CancelBooking404ApplicationJSONMessageEnum {
    BookingNotFound = "Booking not found"
}
/**
 * Not found
 */
export declare class CancelBooking404ApplicationJSON extends SpeakeasyBase {
    code?: CancelBooking404ApplicationJSONCodeEnum;
    /**
     * The specified booking was not found; or, it was not created with this API key
     */
    message?: CancelBooking404ApplicationJSONMessageEnum;
    /**
     * Timestamp of the request
     */
    timestamp?: string;
    /**
     * Tracking identifier for this error response (useful when seeking support)
     */
    trackingId?: string;
}
export declare enum CancelBooking400ApplicationJSONCodeEnum {
    BadRequest = "BAD_REQUEST"
}
export declare enum CancelBooking400ApplicationJSONMessageEnum {
    MissingCancellationReason = "Missing cancellation reason"
}
/**
 * Bad request
 */
export declare class CancelBooking400ApplicationJSON extends SpeakeasyBase {
    code?: CancelBooking400ApplicationJSONCodeEnum;
    message?: CancelBooking400ApplicationJSONMessageEnum;
    /**
     * Timestamp of the request
     */
    timestamp?: string;
    /**
     * Tracking identifier for this error response (useful when seeking support)
     */
    trackingId?: string;
}
export declare class CancelBookingResponse extends SpeakeasyBase {
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
    cancelBookingResponse?: shared.CancelBookingResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cancelBooking400ApplicationJSONObject?: CancelBooking400ApplicationJSON;
    /**
     * Not found
     */
    cancelBooking404ApplicationJSONObject?: CancelBooking404ApplicationJSON;
}
