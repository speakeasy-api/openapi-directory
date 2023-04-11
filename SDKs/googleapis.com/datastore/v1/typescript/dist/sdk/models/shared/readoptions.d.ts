import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
/**
 * The non-transactional read consistency to use.
 */
export declare enum ReadOptionsReadConsistencyEnum {
    ReadConsistencyUnspecified = "READ_CONSISTENCY_UNSPECIFIED",
    Strong = "STRONG",
    Eventual = "EVENTUAL"
}
/**
 * The options shared by read requests.
 */
export declare class ReadOptions extends SpeakeasyBase {
    /**
     * Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
     */
    newTransaction?: TransactionOptions;
    /**
     * The non-transactional read consistency to use.
     */
    readConsistency?: ReadOptionsReadConsistencyEnum;
    /**
     * Reads entities as they were at the given time. This may not be older than 270 seconds. This value is only supported for Cloud Firestore in Datastore mode.
     */
    readTime?: string;
    /**
     * The identifier of the transaction in which to read. A transaction identifier is returned by a call to Datastore.BeginTransaction.
     */
    transaction?: string;
}
