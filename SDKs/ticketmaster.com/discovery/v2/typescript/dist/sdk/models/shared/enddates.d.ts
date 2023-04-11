import { SpeakeasyBase } from "../../../internal/utils";
import { LocalTime } from "./localtime";
/**
 * Event's End Dates
 */
export declare class EndDates extends SpeakeasyBase {
    /**
     * Boolean flag to indicate whether or not the end date is approximated
     */
    approximate?: boolean;
    /**
     * The event end date time
     */
    dateTime?: Date;
    /**
     * The event end date in local date
     */
    localDate?: Date;
    localTime?: LocalTime;
    /**
     * Boolean flag to indicate whether or not the event end time has no specific time
     */
    noSpecificTime?: boolean;
}
