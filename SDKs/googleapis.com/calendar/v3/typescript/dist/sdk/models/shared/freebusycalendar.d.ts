import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TimePeriod } from "./timeperiod";
export declare class FreeBusyCalendar extends SpeakeasyBase {
    /**
     * List of time ranges during which this calendar should be regarded as busy.
     */
    busy?: TimePeriod[];
    /**
     * Optional error(s) (if computation for the calendar failed).
     */
    errors?: ErrorT[];
}
