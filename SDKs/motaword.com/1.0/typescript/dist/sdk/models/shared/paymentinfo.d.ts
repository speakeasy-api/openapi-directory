import { SpeakeasyBase } from "../../../internal/utils";
import { BillingAddress } from "./billingaddress";
import { CreditCard } from "./creditcard";
export declare class PaymentInfoCorporate extends SpeakeasyBase {
    allowApiInvoicing?: boolean;
    allowPaymentCode?: boolean;
    autoCharge?: boolean;
    billing?: BillingAddress;
    card?: CreditCard;
    contactEmailAddress?: string;
    paymentCode?: string;
}
/**
 * Returns billing and saved card information for user, and their corporate if present.
 */
export declare class PaymentInfo extends SpeakeasyBase {
    billing?: BillingAddress;
    card?: CreditCard;
    cards?: CreditCard[];
    corporate?: PaymentInfoCorporate;
    sharedCard?: CreditCard;
}
