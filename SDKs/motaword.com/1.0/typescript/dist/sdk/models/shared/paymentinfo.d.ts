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
export declare class PaymentInfo extends SpeakeasyBase {
    billing?: BillingAddress;
    card?: CreditCard;
    corporate?: PaymentInfoCorporate;
    sharedCard?: CreditCard;
}
