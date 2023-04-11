import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
import { KindExpression } from "./kindexpression";
import { Projection } from "./projection";
import { PropertyOrder } from "./propertyorder";
import { PropertyReference } from "./propertyreference";
/**
 * A query for entities.
 */
export declare class Query extends SpeakeasyBase {
    /**
     * The properties to make distinct. The query results will contain the first result for each distinct combination of values for the given properties (if empty, all results are returned). Requires: * If `order` is specified, the set of distinct on properties must appear before the non-distinct on properties in `order`.
     */
    distinctOn?: PropertyReference[];
    /**
     * An ending point for the query results. Query cursors are returned in query result batches and [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
     */
    endCursor?: string;
    /**
     * A holder for any type of filter.
     */
    filter?: Filter;
    /**
     * The kinds to query (if empty, returns entities of all kinds). Currently at most 1 kind may be specified.
     */
    kind?: KindExpression[];
    /**
     * The maximum number of results to return. Applies after all other constraints. Optional. Unspecified is interpreted as no limit. Must be >= 0 if specified.
     */
    limit?: number;
    /**
     * The number of results to skip. Applies before limit, but after all other constraints. Optional. Must be >= 0 if specified.
     */
    offset?: number;
    /**
     * The order to apply to the query results (if empty, order is unspecified).
     */
    order?: PropertyOrder[];
    /**
     * The projection to return. Defaults to returning all properties.
     */
    projection?: Projection[];
    /**
     * A starting point for the query results. Query cursors are returned in query result batches and [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
     */
    startCursor?: string;
}
