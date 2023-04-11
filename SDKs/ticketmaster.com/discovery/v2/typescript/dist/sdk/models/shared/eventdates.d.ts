import { SpeakeasyBase } from "../../../internal/utils";
import { AccessDates } from "./accessdates";
import { EndDates } from "./enddates";
import { EventStatus } from "./eventstatus";
import { StartDates } from "./startdates";
/**
 * Event's Dates
 */
export declare class EventDates extends SpeakeasyBase {
    /**
     * Event's Access Date
     */
    access?: AccessDates;
    /**
     * Event's End Dates
     */
    end?: EndDates;
    /**
     * Flag indicating if date spans of multiple days
     */
    spanMultipleDays?: boolean;
    /**
     * Event's Start Dates
     */
    start?: StartDates;
    /**
     * Event's Status
     */
    status?: EventStatus;
    /**
     * Event's timezone
     */
    timezone?: string;
}
