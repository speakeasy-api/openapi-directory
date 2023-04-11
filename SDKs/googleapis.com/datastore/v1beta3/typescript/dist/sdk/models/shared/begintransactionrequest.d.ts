import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
/**
 * The request for Datastore.BeginTransaction.
 */
export declare class BeginTransactionRequest extends SpeakeasyBase {
    /**
     * Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
     */
    transactionOptions?: TransactionOptions;
}
