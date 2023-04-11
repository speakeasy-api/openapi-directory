import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { TransactionAccount } from "./transactionaccount";
/**
 * The status of the transaction. Pending transactions are temporary and may be superseded later by their posted counterparts, which are permanent.
 */
export declare enum TransactionStatusEnum {
    Pending = "pending",
    Posted = "posted"
}
/**
 * Whether the transaction is a debit or a credit
 */
export declare enum TransactionTypeEnum {
    Debit = "debit",
    Credit = "credit"
}
/**
 * Success
 */
export declare class Transaction extends SpeakeasyBase {
    amount?: number;
    /**
     * The amount of the transaction in the user's base currency.
     */
    amountInBaseCurrency?: number;
    category?: Category;
    chequeNumber?: string;
    /**
     * The closing balance of the account at the transaction.
     */
    closingBalance?: number;
    /**
     * When the transaction was created.
     */
    createdAt?: string;
    /**
     * The date the transaction took place.
     */
    date?: string;
    /**
     * The unique identifier of the transaction.
     */
    id?: number;
    /**
     * Whether the transaction is a transfer.
     */
    isTransfer?: boolean;
    labels?: string[];
    memo?: string;
    /**
     * Whether the transaction needs to be reviewed.
     */
    needsReview?: boolean;
    note?: string;
    /**
     * The payee the transaction was created with.
     */
    originalPayee?: string;
    /**
     * The payee/merchant of the transaction.
     */
    payee?: string;
    /**
     * The status of the transaction. Pending transactions are temporary and may be superseded later by their posted counterparts, which are permanent.
     */
    status?: TransactionStatusEnum;
    transactionAccount?: TransactionAccount;
    /**
     * Whether the transaction is a debit or a credit
     */
    type?: TransactionTypeEnum;
    /**
     * When the transaction was last updated.
     */
    updatedAt?: string;
    /**
     * Where the transaction came from.
     */
    uploadSource?: string;
}
