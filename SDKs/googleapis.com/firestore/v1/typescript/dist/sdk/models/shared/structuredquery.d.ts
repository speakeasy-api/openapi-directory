import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionSelector } from "./collectionselector";
import { Cursor } from "./cursor";
import { Filter } from "./filter";
import { Order } from "./order";
import { Projection } from "./projection";
/**
 * A Firestore query.
 */
export declare class StructuredQuery extends SpeakeasyBase {
    /**
     * A position in a query result set.
     */
    endAt?: Cursor;
    /**
     * The collections to query.
     */
    from?: CollectionSelector[];
    /**
     * The maximum number of results to return. Applies after all other constraints. Requires: * The value must be greater than or equal to zero if specified.
     */
    limit?: number;
    /**
     * The number of documents to skip before returning the first result. This applies after the constraints specified by the `WHERE`, `START AT`, & `END AT` but before the `LIMIT` clause. Requires: * The value must be greater than or equal to zero if specified.
     */
    offset?: number;
    /**
     * The order to apply to the query results. Firestore allows callers to provide a full ordering, a partial ordering, or no ordering at all. In all cases, Firestore guarantees a stable ordering through the following rules: * The `order_by` is required to reference all fields used with an inequality filter. * All fields that are required to be in the `order_by` but are not already present are appended in lexicographical ordering of the field name. * If an order on `__name__` is not specified, it is appended by default. Fields are appended with the same sort direction as the last order specified, or 'ASCENDING' if no order was specified. For example: * `ORDER BY a` becomes `ORDER BY a ASC, __name__ ASC` * `ORDER BY a DESC` becomes `ORDER BY a DESC, __name__ DESC` * `WHERE a > 1` becomes `WHERE a > 1 ORDER BY a ASC, __name__ ASC` * `WHERE __name__ > ... AND a > 1` becomes `WHERE __name__ > ... AND a > 1 ORDER BY a ASC, __name__ ASC`
     */
    orderBy?: Order[];
    /**
     * The projection of document's fields to return.
     */
    select?: Projection;
    /**
     * A position in a query result set.
     */
    startAt?: Cursor;
    /**
     * A filter.
     */
    where?: Filter;
}
