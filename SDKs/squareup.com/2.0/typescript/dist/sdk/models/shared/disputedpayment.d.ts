import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The payment the cardholder disputed.
 */
export declare class DisputedPayment extends SpeakeasyBase {
    /**
     * Square-generated unique ID of the payment being disputed.
     */
    paymentId?: string;
}
