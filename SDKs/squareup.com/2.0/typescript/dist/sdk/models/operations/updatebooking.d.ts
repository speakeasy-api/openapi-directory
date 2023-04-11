import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateBookingSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateBookingRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateBookingRequest: shared.UpdateBookingRequest;
    /**
     * The ID of the [Booking](https://developer.squareup.com/reference/square_2021-08-18/objects/Booking) object representing the to-be-updated booking.
     */
    bookingId: string;
}
export declare class UpdateBookingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateBookingResponse?: shared.UpdateBookingResponse;
}
