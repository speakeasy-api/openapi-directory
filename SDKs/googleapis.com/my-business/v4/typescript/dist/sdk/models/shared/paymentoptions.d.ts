import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cash exception.
 */
export declare enum PaymentOptionsCashExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Cheque exception.
 */
export declare enum PaymentOptionsChequeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Credit card exception.
 */
export declare enum PaymentOptionsCreditCardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Debit card exception.
 */
export declare enum PaymentOptionsDebitCardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Mobile nfc exception.
 */
export declare enum PaymentOptionsMobileNfcExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Forms of payment accepted at the property.
 */
export declare class PaymentOptions extends SpeakeasyBase {
    /**
     * Cash. The hotel accepts payment by paper/coin currency.
     */
    cash?: boolean;
    /**
     * Cash exception.
     */
    cashException?: PaymentOptionsCashExceptionEnum;
    /**
     * Cheque. The hotel accepts a printed document issued by the guest's bank in the guest's name as a form of payment.
     */
    cheque?: boolean;
    /**
     * Cheque exception.
     */
    chequeException?: PaymentOptionsChequeExceptionEnum;
    /**
     * Credit card. The hotel accepts payment by a card issued by a bank or credit card company. Also known as charge card, debit card, bank card, or charge plate.
     */
    creditCard?: boolean;
    /**
     * Credit card exception.
     */
    creditCardException?: PaymentOptionsCreditCardExceptionEnum;
    /**
     * Debit card. The hotel accepts a bank-issued card that immediately deducts the charged funds from the guest's bank account upon processing.
     */
    debitCard?: boolean;
    /**
     * Debit card exception.
     */
    debitCardException?: PaymentOptionsDebitCardExceptionEnum;
    /**
     * Mobile nfc. The hotel has the compatible computer hardware terminal that reads and charges a payment app on the guest's smartphone without requiring the two devices to make physical contact. Also known as Apple Pay, Google Pay, Samsung Pay.
     */
    mobileNfc?: boolean;
    /**
     * Mobile nfc exception.
     */
    mobileNfcException?: PaymentOptionsMobileNfcExceptionEnum;
}
