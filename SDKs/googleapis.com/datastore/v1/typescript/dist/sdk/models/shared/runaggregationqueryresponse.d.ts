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
    /**
     * The identifier of the transaction that was started as part of this RunAggregationQuery request. Set only when ReadOptions.new_transaction was set in RunAggregationQueryRequest.read_options.
     */
    transaction?: string;
}
