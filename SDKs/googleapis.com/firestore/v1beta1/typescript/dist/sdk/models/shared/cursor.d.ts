import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * A position in a query result set.
 */
export declare class Cursor extends SpeakeasyBase {
    /**
     * If the position is just before or just after the given values, relative to the sort order defined by the query.
     */
    before?: boolean;
    /**
     * The values that represent a position, in the order they appear in the order by clause of a query. Can contain fewer values than specified in the order by clause.
     */
    values?: Value[];
}
