import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAddress } from "./orderaddress";
export declare class OrderPaymentMethod extends SpeakeasyBase {
    billingAddress?: OrderAddress;
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
     * The billing phone number.
     */
    phoneNumber?: string;
    /**
     * The type of instrument. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`JCB`" - "`MASTERCARD`" - "`UNIONPAY`" - "`VISA`" - "``"
     */
    type?: string;
}
