import { SpeakeasyBase } from "../../../internal/utils";
import { Debuggee } from "./debuggee";
/**
 * Response for listing debuggees.
 */
export declare class ListDebuggeesResponse extends SpeakeasyBase {
    /**
     * List of debuggees accessible to the calling user. The fields `debuggee.id` and `description` are guaranteed to be set. The `description` field is a human readable field provided by agents and can be displayed to users.
     */
    debuggees?: Debuggee[];
}
