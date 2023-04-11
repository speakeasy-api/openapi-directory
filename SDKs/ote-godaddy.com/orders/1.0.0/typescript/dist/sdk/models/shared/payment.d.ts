import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The category of payment method used at the time of purchase.
 *
 * @remarks
 * Most common values are listed in the enum.
 */
export declare enum PaymentCategoryEnum {
    CreditCard = "CREDIT_CARD",
    Paypal = "PAYPAL",
    Ach = "ACH",
    GiftCard = "GIFT_CARD",
    InStoreCredit = "IN_STORE_CREDIT",
    Prepaid = "PREPAID"
}
/**
 * The subcategory of payment method used at the time of purchase.
 *
 * @remarks
 *  This field is only set for certain payment categories, such as ACH and CREDIT_CARD.
 * Most common values are listed in the enum.
 */
export declare enum PaymentSubcategoryEnum {
    CheckingPersonal = "CHECKING_PERSONAL",
    CheckingBusiness = "CHECKING_BUSINESS",
    Visa = "VISA",
    MasterCard = "MASTER_CARD",
    Amex = "AMEX",
    Jcb = "JCB",
    Unionpay = "UNIONPAY"
}
export declare class Payment extends SpeakeasyBase {
    /**
     * Amount paid by the current payment
     */
    amount: number;
    /**
     * The category of payment method used at the time of purchase.
     *
     * @remarks
     * Most common values are listed in the enum.
     */
    category: PaymentCategoryEnum;
    /**
     * Unique identifier of the payment profile used by current payment
     */
    paymentProfileId: string;
    /**
     * The subcategory of payment method used at the time of purchase.
     *
     * @remarks
     *  This field is only set for certain payment categories, such as ACH and CREDIT_CARD.
     * Most common values are listed in the enum.
     */
    subcategory?: PaymentSubcategoryEnum;
}
