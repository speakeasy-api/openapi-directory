import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result.
 */
export declare class AggregationResult extends SpeakeasyBase {
    /**
     * The result of the aggregation functions, ex: `COUNT(*) AS total_docs`. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query.
     */
    aggregateFields?: Record<string, Value>;
}
