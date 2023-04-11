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
}
