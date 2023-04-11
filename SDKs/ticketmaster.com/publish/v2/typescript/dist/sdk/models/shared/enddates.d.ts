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
    localTime?: LocalTime;
}
