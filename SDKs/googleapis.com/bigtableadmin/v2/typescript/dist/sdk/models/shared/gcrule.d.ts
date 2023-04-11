import { SpeakeasyBase } from "../../../internal/utils";
import { Intersection } from "./intersection";
import { Union } from "./union";
/**
 * Rule for determining which cells to delete during garbage collection.
 */
export declare class GcRule extends SpeakeasyBase {
    /**
     * A GcRule which deletes cells matching all of the given rules.
     */
    intersection?: Intersection;
    /**
     * Delete cells in a column older than the given age. Values must be at least one millisecond, and will be truncated to microsecond granularity.
     */
    maxAge?: string;
    /**
     * Delete all cells in a column except the most recent N.
     */
    maxNumVersions?: number;
    /**
     * A GcRule which deletes cells matching any of the given rules.
     */
    union?: Union;
}
