import { SpeakeasyBase } from "../../../internal/utils";
export declare class Payment extends SpeakeasyBase {
    /**
     * Unique identifier of this Payment.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsense#payment.
     */
    kind?: string;
    /**
     * The amount to be paid.
     */
    paymentAmount?: string;
    /**
     * The currency code for the amount to be paid.
     */
    paymentAmountCurrencyCode?: string;
    /**
     * The date this payment was/will be credited to the user, or none if the payment threshold has not been met.
     */
    paymentDate?: string;
}
