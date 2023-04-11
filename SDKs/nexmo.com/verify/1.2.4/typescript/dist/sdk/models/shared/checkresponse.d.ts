import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class CheckResponse extends SpeakeasyBase {
    /**
     * The currency code.
     */
    currency?: string;
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
     * The ID of the verification event, such as an SMS or TTS call.
     */
    eventId?: string;
    /**
     * The cost incurred for this request.
     */
    price?: string;
    /**
     * The `request_id` that you received in the response to the Verify request and used in the Verify check request.
     */
    requestId?: string;
    /**
     * A value of `0` indicates that your user entered the correct code. If it is non-zero, check the `error_text`.
     */
    status?: string;
}
