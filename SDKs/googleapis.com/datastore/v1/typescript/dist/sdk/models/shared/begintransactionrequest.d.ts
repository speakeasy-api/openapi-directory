import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
/**
 * The request for Datastore.BeginTransaction.
 */
export declare class BeginTransactionRequest extends SpeakeasyBase {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string;
    /**
     * Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
     */
    transactionOptions?: TransactionOptions;
}
