import { SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { Query } from "./query";
/**
 * Datastore query for running an aggregation over a Query.
 */
export declare class AggregationQuery extends SpeakeasyBase {
    /**
     * Optional. Series of aggregations to apply over the results of the `nested_query`. Requires: * A minimum of one and maximum of five aggregations per query.
     */
    aggregations?: Aggregation[];
    /**
     * A query for entities.
     */
    nestedQuery?: Query;
}
