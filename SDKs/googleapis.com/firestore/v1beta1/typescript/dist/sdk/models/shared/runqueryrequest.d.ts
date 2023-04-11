import { SpeakeasyBase } from "../../../internal/utils";
import { StructuredQuery } from "./structuredquery";
import { TransactionOptions } from "./transactionoptions";
/**
 * The request for Firestore.RunQuery.
 */
export declare class RunQueryRequest extends SpeakeasyBase {
    /**
     * Options for creating a new transaction.
     */
    newTransaction?: TransactionOptions;
    /**
     * Reads documents as they were at the given time. This may not be older than 270 seconds.
     */
    readTime?: string;
    /**
     * A Firestore query.
     */
    structuredQuery?: StructuredQuery;
    /**
     * Run the query within an already active transaction. The value here is the opaque transaction ID to execute the query in.
     */
    transaction?: string;
}
