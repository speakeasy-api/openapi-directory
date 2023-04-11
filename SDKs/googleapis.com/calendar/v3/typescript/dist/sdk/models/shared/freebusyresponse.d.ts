import { SpeakeasyBase } from "../../../internal/utils";
import { FreeBusyCalendar } from "./freebusycalendar";
import { FreeBusyGroup } from "./freebusygroup";
/**
 * Successful response
 */
export declare class FreeBusyResponse extends SpeakeasyBase {
    /**
     * List of free/busy information for calendars.
     */
    calendars?: Record<string, FreeBusyCalendar>;
    /**
     * Expansion of groups.
     */
    groups?: Record<string, FreeBusyGroup>;
    /**
     * Type of the resource ("calendar#freeBusy").
     */
    kind?: string;
    /**
     * The end of the interval.
     */
    timeMax?: Date;
    /**
     * The start of the interval.
     */
    timeMin?: Date;
}
