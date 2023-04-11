import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationQuery } from "./aggregationquery";
import { AggregationResultBatch } from "./aggregationresultbatch";
/**
 * The response for Datastore.RunAggregationQuery.
 */
export declare class RunAggregationQueryResponse extends SpeakeasyBase {
    /**
     * A batch of aggregation results produced by an aggregation query.
     */
    batch?: AggregationResultBatch;
    /**
     * Datastore query for running an aggregation over a Query.
     */
    query?: AggregationQuery;
}
