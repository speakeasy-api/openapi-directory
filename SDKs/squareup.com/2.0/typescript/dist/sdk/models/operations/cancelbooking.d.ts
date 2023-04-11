import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelBookingSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CancelBookingRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    cancelBookingRequest: shared.CancelBookingRequest;
    /**
     * The ID of the [Booking](https://developer.squareup.com/reference/square_2021-08-18/objects/Booking) object representing the to-be-cancelled booking.
     */
    bookingId: string;
}
export declare class CancelBookingResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelBookingResponse?: shared.CancelBookingResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
