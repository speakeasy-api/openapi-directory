import { SpeakeasyBase } from "../../../internal/utils";
import { GcRule } from "./gcrule";
/**
 * A GcRule which deletes cells matching any of the given rules.
 */
export declare class Union extends SpeakeasyBase {
    /**
     * Delete cells which would be deleted by any element of `rules`.
     */
    rules?: GcRule[];
}
