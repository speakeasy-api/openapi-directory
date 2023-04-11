import { SpeakeasyBase } from "../../../internal/utils";
import { LocalTime } from "./localtime";
/**
 * Event's Start Dates
 */
export declare class StartDates extends SpeakeasyBase {
    /**
     * Boolean flag to indicate whether or not the start date is TBA
     */
    dateTBA?: boolean;
    /**
     * Boolean flag to indicate whether or not the start date is TBD
     */
    dateTBD?: boolean;
    /**
     * The event start datetime
     */
    dateTime?: Date;
    /**
     * The event start date in local date
     */
    localDate?: Date;
    localTime?: LocalTime;
    /**
     * Boolean flag to indicate whether or not the event has no specific time
     */
    noSpecificTime?: boolean;
    /**
     * Boolean flag to indicate whether or not the start time is TBA
     */
    timeTBA?: boolean;
}
