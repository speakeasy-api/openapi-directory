import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationResult } from "./aggregationresult";
/**
 * The state of the query after the current batch. Only COUNT(*) aggregations are supported in the initial launch. Therefore, expected result type is limited to `NO_MORE_RESULTS`.
 */
export declare enum AggregationResultBatchMoreResultsEnum {
    MoreResultsTypeUnspecified = "MORE_RESULTS_TYPE_UNSPECIFIED",
    NotFinished = "NOT_FINISHED",
    MoreResultsAfterLimit = "MORE_RESULTS_AFTER_LIMIT",
    MoreResultsAfterCursor = "MORE_RESULTS_AFTER_CURSOR",
    NoMoreResults = "NO_MORE_RESULTS"
}
/**
 * A batch of aggregation results produced by an aggregation query.
 */
export declare class AggregationResultBatch extends SpeakeasyBase {
    /**
     * The aggregation results for this batch.
     */
    aggregationResults?: AggregationResult[];
    /**
     * The state of the query after the current batch. Only COUNT(*) aggregations are supported in the initial launch. Therefore, expected result type is limited to `NO_MORE_RESULTS`.
     */
    moreResults?: AggregationResultBatchMoreResultsEnum;
    /**
     * Read timestamp this batch was returned from. In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches.
     */
    readTime?: string;
}
