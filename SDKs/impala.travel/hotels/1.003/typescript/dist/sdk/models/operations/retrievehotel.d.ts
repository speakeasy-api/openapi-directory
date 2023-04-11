import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveHotelRequest extends SpeakeasyBase {
    /**
     * The departure day of the desired stay range in ISO 8601 format (`YYYY-MM-DD`).
     */
    end?: string;
    /**
     * The unique identifier of this hotel on the Impala platform.
     */
    hotelId: string;
    /**
     * The arrival day of the desired stay range in ISO 8601 format (`YYYY-MM-DD`).
     */
    start?: string;
}
export declare class RetrieveHotelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.
     */
    genericError?: shared.GenericError;
    /**
     * Returns the requested hotel.
     */
    hotelFullDetail?: shared.HotelFullDetail;
    /**
     * Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.
     */
    validationError?: shared.ValidationError;
}
