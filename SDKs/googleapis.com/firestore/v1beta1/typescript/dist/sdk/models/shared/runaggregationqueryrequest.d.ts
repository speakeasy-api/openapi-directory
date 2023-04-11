import { SpeakeasyBase } from "../../../internal/utils";
import { StructuredAggregationQuery } from "./structuredaggregationquery";
import { TransactionOptions } from "./transactionoptions";
/**
 * The request for Firestore.RunAggregationQuery.
 */
export declare class RunAggregationQueryRequest extends SpeakeasyBase {
    /**
     * Options for creating a new transaction.
     */
    newTransaction?: TransactionOptions;
    /**
     * Executes the query at the given timestamp. Requires: * Cannot be more than 270 seconds in the past.
     */
    readTime?: string;
    /**
     * Firestore query for running an aggregation over a StructuredQuery.
     */
    structuredAggregationQuery?: StructuredAggregationQuery;
    /**
     * Run the aggregation within an already active transaction. The value here is the opaque transaction ID to execute the query in.
     */
    transaction?: string;
}
