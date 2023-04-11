import { SpeakeasyBase } from "../../../internal/utils";
export declare class TestOrderPaymentMethod extends SpeakeasyBase {
    /**
     * The card expiration month (January = 1, February = 2 etc.).
     */
    expirationMonth?: number;
    /**
     * The card expiration year (4-digit, e.g. 2015).
     */
    expirationYear?: number;
    /**
     * The last four digits of the card number.
     */
    lastFourDigits?: string;
    /**
     * The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`"
     */
    predefinedBillingAddress?: string;
    /**
     * The type of instrument. Note that real orders might have different values than the four values accepted by `createTestOrder`. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`MASTERCARD`" - "`VISA`"
     */
    type?: string;
}
