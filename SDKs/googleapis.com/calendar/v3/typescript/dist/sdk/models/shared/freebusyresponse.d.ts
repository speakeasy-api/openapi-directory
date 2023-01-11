import { SpeakeasyBase } from "../../../internal/utils";
import { FreeBusyCalendar } from "./freebusycalendar";
import { FreeBusyGroup } from "./freebusygroup";
export declare class FreeBusyResponse extends SpeakeasyBase {
    calendars?: Record<string, FreeBusyCalendar>;
    groups?: Record<string, FreeBusyGroup>;
    kind?: string;
    timeMax?: Date;
    timeMin?: Date;
}
