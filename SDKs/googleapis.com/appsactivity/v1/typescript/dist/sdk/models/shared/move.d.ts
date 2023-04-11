import { SpeakeasyBase } from "../../../internal/utils";
import { Parent } from "./parent";
/**
 * Contains information about changes in an object's parents as a result of a move type event.
 */
export declare class Move extends SpeakeasyBase {
    /**
     * The added parent(s).
     */
    addedParents?: Parent[];
    /**
     * The removed parent(s).
     */
    removedParents?: Parent[];
}
