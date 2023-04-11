import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SearchResponseChecksStatusEnum {
    Valid = "VALID",
    Invalid = "INVALID"
}
export declare class SearchResponseChecks extends SpeakeasyBase {
    /**
     * The code supplied with this check request
     */
    code?: string;
    /**
     * The date and time this check was received (in the format YYYY-MM-DD HH:MM:SS)
     */
    dateReceived?: string;
    /**
     * The IP address, if available (this field is no longer used).
     */
    ipAddress?: string;
    status?: SearchResponseChecksStatusEnum;
}
export declare enum SearchResponseEventsTypeEnum {
    Tts = "tts",
    Sms = "sms"
}
export declare class SearchResponseEvents extends SpeakeasyBase {
    id?: string;
    type?: SearchResponseEventsTypeEnum;
}
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
 *
 */
export declare enum SearchResponseStatusEnum {
    InProgress = "IN PROGRESS",
    Success = "SUCCESS",
    Failed = "FAILED",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED"
}
/**
 * Success
 */
export declare class SearchResponse extends SpeakeasyBase {
    /**
     * The Vonage account ID the request was for.
     */
    accountId?: string;
    /**
     * The list of checks made for this verification and their outcomes.
     */
    checks?: SearchResponseChecks[];
    /**
     * The currency code.
     */
    currency?: string;
    /**
     * The date and time the verification request was completed. This response parameter is in the following format YYYY-MM-DD HH:MM:SS.
     */
    dateFinalized?: string;
    /**
     * The date and time the verification request was submitted, in the following format YYYY-MM-DD HH:MM:SS.
     */
    dateSubmitted?: string;
    /**
     * This field may not be present, depending on your pricing model. The
     *
     * @remarks
     * value indicates the cost (in EUR) of the calls made and messages sent
     * for the verification process. This value may be updated during and
     * shortly after the request completes because user input events can
     * overlap with message/call events. When this field is present, the total
     * cost of the verification is the sum of this field and the `price` field.
     *
     */
    estimatedPriceMessagesSent?: string;
    /**
     * The events that have taken place to verify this number, and their unique identifiers.
     */
    events?: SearchResponseEvents[];
    /**
     * The time the first verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS.
     */
    firstEventDate?: string;
    /**
     * The time the last verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS.
     */
    lastEventDate?: string;
    /**
     * The phone number this verification request was used for.
     */
    number?: string;
    /**
     * The cost incurred for this verification request.
     */
    price?: string;
    /**
     * The `request_id` that you received in the response to the Verify request and used in the Verify search request.
     */
    requestId?: string;
    /**
     * The `sender_id` you provided in the Verify request.
     */
    senderId?: string;
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
     *
     */
    status?: SearchResponseStatusEnum;
}
