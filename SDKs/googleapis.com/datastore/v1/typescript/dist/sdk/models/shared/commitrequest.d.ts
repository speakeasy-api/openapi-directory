import { SpeakeasyBase } from "../../../internal/utils";
import { Mutation } from "./mutation";
import { TransactionOptions } from "./transactionoptions";
/**
 * The type of commit to perform. Defaults to `TRANSACTIONAL`.
 */
export declare enum CommitRequestModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Transactional = "TRANSACTIONAL",
    NonTransactional = "NON_TRANSACTIONAL"
}
/**
 * The request for Datastore.Commit.
 */
export declare class CommitRequest extends SpeakeasyBase {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string;
    /**
     * The type of commit to perform. Defaults to `TRANSACTIONAL`.
     */
    mode?: CommitRequestModeEnum;
    /**
     * The mutations to perform. When mode is `TRANSACTIONAL`, mutations affecting a single entity are applied in order. The following sequences of mutations affecting a single entity are not permitted in a single `Commit` request: - `insert` followed by `insert` - `update` followed by `insert` - `upsert` followed by `insert` - `delete` followed by `update` When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single entity.
     */
    mutations?: Mutation[];
    /**
     * Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
     */
    singleUseTransaction?: TransactionOptions;
    /**
     * The identifier of the transaction associated with the commit. A transaction identifier is returned by a call to Datastore.BeginTransaction.
     */
    transaction?: string;
}
