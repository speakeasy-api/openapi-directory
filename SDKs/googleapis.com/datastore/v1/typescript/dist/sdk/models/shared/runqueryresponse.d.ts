import { SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";
import { QueryResultBatch } from "./queryresultbatch";
/**
 * The response for Datastore.RunQuery.
 */
export declare class RunQueryResponse extends SpeakeasyBase {
    /**
     * A batch of results produced by a query.
     */
    batch?: QueryResultBatch;
    /**
     * A query for entities.
     */
    query?: Query;
    /**
     * The identifier of the transaction that was started as part of this RunQuery request. Set only when ReadOptions.new_transaction was set in RunQueryRequest.read_options.
     */
    transaction?: string;
}
