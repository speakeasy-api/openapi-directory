import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelBookingRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the booking you would like to update.
     */
    bookingId: string;
}
export declare class CancelBookingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the cancelled booking. This includes the `cancellation.fee` object with details on the fee for this cancellation (most frequently this means either a zero fee, so the booking is fully refundable, or the full amount of the stay is due as a fee, meaning the booking was non-refundable).
     */
    booking?: shared.Booking;
    /**
     * Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.
     */
    genericError?: shared.GenericError;
    /**
     * Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.
     */
    validationError?: shared.ValidationError;
}
