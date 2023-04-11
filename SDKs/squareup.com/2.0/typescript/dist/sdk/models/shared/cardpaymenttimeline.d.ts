import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The timeline for card payments.
 */
export declare class CardPaymentTimeline extends SpeakeasyBase {
    /**
     * The timestamp when the payment was authorized, in RFC 3339 format.
     */
    authorizedAt?: string;
    /**
     * The timestamp when the payment was captured, in RFC 3339 format.
     */
    capturedAt?: string;
    /**
     * The timestamp when the payment was voided, in RFC 3339 format.
     */
    voidedAt?: string;
}
