import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateBookingContactRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the booking you would like to update.
     */
    bookingId: string;
    updateBookingContactRequest?: shared.UpdateBookingContactRequest;
}
export declare class UpdateBookingContactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * We've submitted the change to the hotel and are returning the booking details in the response body.
     */
    booking?: shared.Booking;
    /**
     * Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.
     */
    genericError?: shared.GenericError;
    /**
     * Your request was invalid or wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.
     */
    validationError?: shared.ValidationError;
}
