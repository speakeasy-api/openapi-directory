import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRatePlanForHotelForRatePlanIdRequest extends SpeakeasyBase {
    /**
     * Start date of the considered time window for the returned rate plan.
     */
    end?: string;
    /**
     * The uuid of hotel for which rate plans are being fetched.
     */
    hotelId: string;
    /**
     * Offset from the first rate plan in the result (for pagination).
     */
    offset?: number;
    /**
     * The id of requested rateplan
     */
    ratePlanId: number;
    /**
     * The uuid of room for which rate plans are being fetched.
     */
    roomTypeId?: string;
    /**
     * Number of rate plans returned on a given page (pagination).
     */
    size?: number;
    /**
     * Start date of the considered time window for the returned rate plan.
     */
    start?: string;
    /**
     * Returns rate plans changed after the supplied date.
     */
    updatedAt?: Record<string, any>;
}
export declare class ListRatePlanForHotelForRatePlanIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Not Found
     */
    genericError?: shared.GenericError;
    ratePlan?: shared.RatePlan;
    /**
     * Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.
     */
    validationError?: shared.ValidationError;
}
