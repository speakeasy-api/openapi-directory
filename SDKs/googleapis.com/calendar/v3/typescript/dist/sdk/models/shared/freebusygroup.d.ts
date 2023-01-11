import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * List of calendars that are members of this group.
**/
export declare class FreeBusyGroup extends SpeakeasyBase {
    calendars?: string[];
    errors?: ErrorT[];
}
