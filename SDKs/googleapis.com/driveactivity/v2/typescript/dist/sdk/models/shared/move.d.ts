import { SpeakeasyBase } from "../../../internal/utils";
import { TargetReference } from "./targetreference";
/**
 * An object was moved.
 */
export declare class Move extends SpeakeasyBase {
    /**
     * The added parent object(s).
     */
    addedParents?: TargetReference[];
    /**
     * The removed parent object(s).
     */
    removedParents?: TargetReference[];
}
