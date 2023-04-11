import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type for this transaction
 */
export declare enum TransactionTypeEnum {
    Payment = "payment",
    Refund = "refund"
}
/**
 * A transaction for an app initiated by a user
 */
export declare class Transaction extends SpeakeasyBase {
    /**
     * The total amount paid in cents
     */
    amount: number;
    /**
     * The id of the app involved with this transaction
     */
    appId: string;
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: Record<string, any>;
    /**
     * The date (in millis) of when this transaction occurred
     */
    date: number;
    /**
     * The total amount paid to the developer in cents
     */
    developerAmount?: number;
    /**
     * The id of the developer involved with this transaction
     */
    developerId: string;
    /**
     * The total amount paid to payment processing fees in cents
     */
    feeAmount?: number;
    /**
     * The total amount paid to the marketplace owner in cents
     */
    marketplaceAmount?: number;
    /**
     * The id for the ownership associated with this transaction
     */
    ownershipId: string;
    /**
     * The id for this transaction
     */
    transactionId: string;
    /**
     * The type for this transaction
     */
    type: TransactionTypeEnum;
    /**
     * The id of the user making the transaction
     */
    userId: string;
}
