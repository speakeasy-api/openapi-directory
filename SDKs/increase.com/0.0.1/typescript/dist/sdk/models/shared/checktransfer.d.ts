import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
 */
export declare enum CheckTransferCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * A constant representing the object's type. For this resource it will always be `check_transfer_deposit`.
 */
export declare enum CheckTransferCheckTransferDepositTypeEnum {
    CheckTransferDeposit = "check_transfer_deposit"
}
/**
 * After a check transfer is deposited, this will contain supplemental details.
 */
export declare class CheckTransferCheckTransferDeposit extends SpeakeasyBase {
    /**
     * The ID for the File containing the image of the rear of the check.
     */
    backImageFileId: string;
    /**
     * The ID for the File containing the image of the front of the check.
     */
    frontImageFileId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `check_transfer_deposit`.
     */
    type: CheckTransferCheckTransferDepositTypeEnum;
}
/**
 * The return address to be printed on the check.
 */
export declare class CheckTransferReturnAddress extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city: string;
    /**
     * The first line of the address.
     */
    line1: string;
    /**
     * The second line of the address.
     */
    line2: string;
    /**
     * The name of the address.
     */
    name: string;
    /**
     * The US state of the address.
     */
    state: string;
    /**
     * The postal code of the address.
     */
    zip: string;
}
/**
 * The lifecycle status of the transfer.
 */
export declare enum CheckTransferStatusEnum {
    PendingApproval = "pending_approval",
    PendingSubmission = "pending_submission",
    Submitting = "submitting",
    Submitted = "submitted",
    PendingMailing = "pending_mailing",
    Mailed = "mailed",
    Canceled = "canceled",
    Deposited = "deposited",
    Stopped = "stopped",
    Returned = "returned",
    Rejected = "rejected",
    RequiresAttention = "requires_attention"
}
/**
 * A constant representing the object's type. For this resource it will always be `check_transfer_stop_payment_request`.
 */
export declare enum CheckTransferCheckTransferStopPaymentRequestTypeEnum {
    CheckTransferStopPaymentRequest = "check_transfer_stop_payment_request"
}
/**
 * After a stop-payment is requested on the check, this will contain supplemental details.
 */
export declare class CheckTransferCheckTransferStopPaymentRequest extends SpeakeasyBase {
    /**
     * The time the stop-payment was requested.
     */
    requestedAt: Date;
    /**
     * The transaction ID of the corresponding credit transaction.
     */
    transactionId: string;
    /**
     * The ID of the check transfer that was stopped.
     */
    transferId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `check_transfer_stop_payment_request`.
     */
    type: CheckTransferCheckTransferStopPaymentRequestTypeEnum;
}
/**
 * After the transfer is submitted, this will contain supplemental details.
 */
export declare class CheckTransferCheckTransferSubmission extends SpeakeasyBase {
    /**
     * The identitying number of the check.
     */
    checkNumber: string;
}
/**
 * A constant representing the object's type. For this resource it will always be `check_transfer`.
 */
export declare enum CheckTransferTypeEnum {
    CheckTransfer = "check_transfer"
}
/**
 * Check Transfers move funds from your Increase account by mailing a physical check.
 */
export declare class CheckTransfer extends SpeakeasyBase {
    /**
     * The identifier of the Account from which funds will be transferred.
     */
    accountId: string;
    /**
     * The city of the check's destination.
     */
    addressCity: string;
    /**
     * The street address of the check's destination.
     */
    addressLine1: string;
    /**
     * The second line of the address of the check's destination.
     */
    addressLine2: string;
    /**
     * The state of the check's destination.
     */
    addressState: string;
    /**
     * The postal code of the check's destination.
     */
    addressZip: string;
    /**
     * The transfer amount in USD cents.
     */
    amount: number;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.
     */
    createdAt: Date;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
     */
    currency: CheckTransferCurrencyEnum;
    /**
     * After a check transfer is deposited, this will contain supplemental details.
     */
    deposit: CheckTransferCheckTransferDeposit;
    /**
     * The Check transfer's identifier.
     */
    id: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the check was mailed.
     */
    mailedAt: Date;
    /**
     * The descriptor that will be printed on the memo field on the check.
     */
    message: string;
    /**
     * The descriptor that will be printed on the letter included with the check.
     */
    note: string;
    /**
     * The name that will be printed on the check.
     */
    recipientName: string;
    /**
     * The return address to be printed on the check.
     */
    returnAddress: CheckTransferReturnAddress;
    /**
     * The lifecycle status of the transfer.
     */
    status: CheckTransferStatusEnum;
    /**
     * After a stop-payment is requested on the check, this will contain supplemental details.
     */
    stopPaymentRequest: CheckTransferCheckTransferStopPaymentRequest;
    /**
     * After the transfer is submitted, this will contain supplemental details.
     */
    submission: CheckTransferCheckTransferSubmission;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the check was submitted.
     */
    submittedAt: Date;
    /**
     * If the transfer was created from a template, this will be the template's ID.
     */
    templateId: string;
    /**
     * The ID for the transaction caused by the transfer.
     */
    transactionId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `check_transfer`.
     */
    type: CheckTransferTypeEnum;
}
