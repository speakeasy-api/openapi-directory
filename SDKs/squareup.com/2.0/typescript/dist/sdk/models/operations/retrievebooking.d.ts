import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveBookingSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveBookingRequest extends SpeakeasyBase {
    /**
     * The ID of the [Booking](https://developer.squareup.com/reference/square_2021-08-18/objects/Booking) object representing the to-be-retrieved booking.
     */
    bookingId: string;
}
export declare class RetrieveBookingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveBookingResponse?: shared.RetrieveBookingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
