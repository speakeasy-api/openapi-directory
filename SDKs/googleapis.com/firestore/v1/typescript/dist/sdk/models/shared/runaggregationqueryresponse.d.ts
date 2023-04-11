import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationResult } from "./aggregationresult";
/**
 * The response for Firestore.RunAggregationQuery.
 */
export declare class RunAggregationQueryResponse extends SpeakeasyBase {
    /**
     * The time at which the aggregate result was computed. This is always monotonically increasing; in this case, the previous AggregationResult in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `result` will be sent, and this represents the time at which the query was run.
     */
    readTime?: string;
    /**
     * The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result.
     */
    result?: AggregationResult;
    /**
     * The transaction that was started as part of this request. Only present on the first response when the request requested to start a new transaction.
     */
    transaction?: string;
}
