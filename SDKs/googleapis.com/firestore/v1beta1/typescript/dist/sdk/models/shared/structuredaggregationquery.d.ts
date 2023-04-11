import { SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { StructuredQuery } from "./structuredquery";
/**
 * Firestore query for running an aggregation over a StructuredQuery.
 */
export declare class StructuredAggregationQuery extends SpeakeasyBase {
    /**
     * Optional. Series of aggregations to apply over the results of the `structured_query`. Requires: * A minimum of one and maximum of five aggregations per query.
     */
    aggregations?: Aggregation[];
    /**
     * A Firestore query.
     */
    structuredQuery?: StructuredQuery;
}
