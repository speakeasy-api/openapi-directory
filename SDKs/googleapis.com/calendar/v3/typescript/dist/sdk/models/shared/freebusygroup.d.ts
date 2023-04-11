import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
export declare class FreeBusyGroup extends SpeakeasyBase {
    /**
     * List of calendars' identifiers within a group.
     */
    calendars?: string[];
    /**
     * Optional error(s) (if computation for the group failed).
     */
    errors?: ErrorT[];
}
