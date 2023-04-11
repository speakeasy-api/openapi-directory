import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If your account requires approvals for transfers and the transfer was approved, this will contain details of the approval.
 */
export declare class AccountTransferTransferApproval extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was approved.
     */
    approvedAt: Date;
}
/**
 * If your account requires approvals for transfers and the transfer was not approved, this will contain details of the cancellation.
 */
export declare class AccountTransferTransferCancellation extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Transfer was canceled.
     */
    canceledAt: Date;
}
/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
 */
export declare enum AccountTransferCurrencyEnum {
    Cad = "CAD",
    Chf = "CHF",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Usd = "USD"
}
/**
 * The transfer's network.
 */
export declare enum AccountTransferNetworkEnum {
    Account = "account"
}
/**
 * The lifecycle status of the transfer.
 */
export declare enum AccountTransferStatusEnum {
    PendingSubmission = "pending_submission",
    PendingApproval = "pending_approval",
    Canceled = "canceled",
    RequiresAttention = "requires_attention",
    FlaggedByOperator = "flagged_by_operator",
    Complete = "complete"
}
/**
 * A constant representing the object's type. For this resource it will always be `account_transfer`.
 */
export declare enum AccountTransferTypeEnum {
    AccountTransfer = "account_transfer"
}
/**
 * Account transfers move funds between your own accounts at Increase.
 */
export declare class AccountTransfer extends SpeakeasyBase {
    /**
     * The Account to which the transfer belongs.
     */
    accountId: string;
    /**
     * The transfer amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     */
    amount: number;
    /**
     * If your account requires approvals for transfers and the transfer was approved, this will contain details of the approval.
     */
    approval: AccountTransferTransferApproval;
    /**
     * If your account requires approvals for transfers and the transfer was not approved, this will contain details of the cancellation.
     */
    cancellation: AccountTransferTransferCancellation;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.
     */
    createdAt: Date;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.
     */
    currency: AccountTransferCurrencyEnum;
    /**
     * The description that will show on the transactions.
     */
    description: string;
    /**
     * The destination account's identifier.
     */
    destinationAccountId: string;
    /**
     * The ID for the transaction receiving the transfer.
     */
    destinationTransactionId: string;
    /**
     * The account transfer's identifier.
     */
    id: string;
    /**
     * The transfer's network.
     */
    network: AccountTransferNetworkEnum;
    /**
     * The lifecycle status of the transfer.
     */
    status: AccountTransferStatusEnum;
    /**
     * If the transfer was created from a template, this will be the template's ID.
     */
    templateId: string;
    /**
     * The ID for the transaction funding the transfer.
     */
    transactionId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `account_transfer`.
     */
    type: AccountTransferTypeEnum;
}
