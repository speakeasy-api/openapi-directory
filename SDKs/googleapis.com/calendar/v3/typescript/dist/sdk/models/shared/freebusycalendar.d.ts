import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
import { ErrorT } from "./error";
/**
 * Free/busy expansions for a single calendar.
**/
export declare class FreeBusyCalendar extends SpeakeasyBase {
    busy?: TimePeriod[];
    errors?: ErrorT[];
}
