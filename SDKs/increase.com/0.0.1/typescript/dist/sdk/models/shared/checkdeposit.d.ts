import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the deposit.
 */
export declare enum CheckDepositCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum CheckDepositCheckDepositAcceptanceCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * If your deposit is successfully parsed and accepted by Increase, this will contain details of the parsed check.
 */
export declare class CheckDepositCheckDepositAcceptance extends SpeakeasyBase {
    /**
     * The account number printed on the check.
     */
    accountNumber: string;
    /**
     * The amount to be deposited in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * An additional line of metadata printed on the check. This typically includes the check number for business checks.
     */
    auxiliaryOnUs: string;
    /**
     * The ID of the Check Deposit that was accepted.
     */
    checkDepositId: string;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: CheckDepositCheckDepositAcceptanceCurrencyEnum;
    /**
     * The routing number printed on the check.
     */
    routingNumber: string;
    /**
     * The check serial number, if present, for consumer checks. For business checks, the serial number is usually in the `auxiliary_on_us` field.
     */
    serialNumber: string;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
 */
export declare enum CheckDepositCheckDepositRejectionCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * Why the check deposit was rejected.
 */
export declare enum CheckDepositCheckDepositRejectionReasonEnum {
    IncompleteImage = "incomplete_image",
    Duplicate = "duplicate",
    PoorImageQuality = "poor_image_quality",
    IncorrectAmount = "incorrect_amount",
    IncorrectRecipient = "incorrect_recipient",
    NotEligibleForMobileDeposit = "not_eligible_for_mobile_deposit",
    Unknown = "unknown"
}
/**
 * If your deposit is rejected by Increase, this will contain details as to why it was rejected.
 */
export declare class CheckDepositCheckDepositRejection extends SpeakeasyBase {
    /**
     * The rejected amount in the minor unit of check's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
     */
    currency: CheckDepositCheckDepositRejectionCurrencyEnum;
    /**
     * Why the check deposit was rejected.
     */
    reason: CheckDepositCheckDepositRejectionReasonEnum;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the check deposit was rejected.
     */
    rejectedAt: Date;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
 */
export declare enum CheckDepositCheckDepositReturnCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
export declare enum CheckDepositCheckDepositReturnReturnReasonEnum {
    AchConversionNotSupported = "ach_conversion_not_supported",
    ClosedAccount = "closed_account",
    DuplicateSubmission = "duplicate_submission",
    InsufficientFunds = "insufficient_funds",
    NoAccount = "no_account",
    NotAuthorized = "not_authorized",
    StaleDated = "stale_dated",
    StopPayment = "stop_payment",
    UnknownReason = "unknown_reason",
    UnmatchedDetails = "unmatched_details",
    UnreadableImage = "unreadable_image"
}
/**
 * If your deposit is returned, this will contain details as to why it was returned.
 */
export declare class CheckDepositCheckDepositReturn extends SpeakeasyBase {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The identifier of the Check Deposit that was returned.
     */
    checkDepositId: string;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     */
    currency: CheckDepositCheckDepositReturnCurrencyEnum;
    returnReason: CheckDepositCheckDepositReturnReturnReasonEnum;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the check deposit was returned.
     */
    returnedAt: Date;
    /**
     * The identifier of the transaction that reversed the original check deposit transaction.
     */
    transactionId: string;
}
/**
 * The status of the Check Deposit.
 */
export declare enum CheckDepositStatusEnum {
    Pending = "pending",
    Submitted = "submitted",
    Rejected = "rejected",
    Returned = "returned"
}
/**
 * A constant representing the object's type. For this resource it will always be `check_deposit`.
 */
export declare enum CheckDepositTypeEnum {
    CheckDeposit = "check_deposit"
}
/**
 * Check Deposits allow you to deposit images of paper checks into your account.
 */
export declare class CheckDeposit extends SpeakeasyBase {
    /**
     * The Account the check was deposited into.
     */
    accountId: string;
    /**
     * The deposited amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * The ID for the File containing the image of the back of the check.
     */
    backImageFileId: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.
     */
    createdAt: Date;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the deposit.
     */
    currency: CheckDepositCurrencyEnum;
    /**
     * If your deposit is successfully parsed and accepted by Increase, this will contain details of the parsed check.
     */
    depositAcceptance: CheckDepositCheckDepositAcceptance;
    /**
     * If your deposit is rejected by Increase, this will contain details as to why it was rejected.
     */
    depositRejection: CheckDepositCheckDepositRejection;
    /**
     * If your deposit is returned, this will contain details as to why it was returned.
     */
    depositReturn: CheckDepositCheckDepositReturn;
    /**
     * The ID for the File containing the image of the front of the check.
     */
    frontImageFileId: string;
    /**
     * The deposit's identifier.
     */
    id: string;
    /**
     * The status of the Check Deposit.
     */
    status: CheckDepositStatusEnum;
    /**
     * The ID for the Transaction created by the deposit.
     */
    transactionId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `check_deposit`.
     */
    type: CheckDepositTypeEnum;
}
