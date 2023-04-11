import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Code | Description
 *
 * @remarks
 * -- | --
 * IN PROGRESS | The search is still in progress.
 * SUCCESS | Your user entered a correct verification code.
 * FAILED | Your user entered an incorrect code more than three times.
 * EXPIRED | Your user did not enter a code before the `pin_expiry` time elapsed.
 * CANCELLED | The verification process was cancelled by a Verify control request.
 * 101 | You supplied an invalid `request_id`, or the data is not available. Note that for recently-completed requests, there can be a delay of up to 1 minute before the results are available in search.
 *
 */
export declare enum SearchErrorResponseStatusEnum {
    InProgress = "IN PROGRESS",
    Failed = "FAILED",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED",
    OneHundredAndOne = "101"
}
/**
 * Error
 */
export declare class SearchErrorResponse extends SpeakeasyBase {
    /**
     * If `status` is not `SUCCESS`, this message explains the issue encountered.
     */
    errorText?: string;
    /**
     * The `request_id` that you received in the response to the Verify request and used in the Verify search request. May be empty in an error situation.
     */
    requestId?: string;
    /**
     * Code | Description
     *
     * @remarks
     * -- | --
     * IN PROGRESS | The search is still in progress.
     * SUCCESS | Your user entered a correct verification code.
     * FAILED | Your user entered an incorrect code more than three times.
     * EXPIRED | Your user did not enter a code before the `pin_expiry` time elapsed.
     * CANCELLED | The verification process was cancelled by a Verify control request.
     * 101 | You supplied an invalid `request_id`, or the data is not available. Note that for recently-completed requests, there can be a delay of up to 1 minute before the results are available in search.
     *
     */
    status?: SearchErrorResponseStatusEnum;
}
