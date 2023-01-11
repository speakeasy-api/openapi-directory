import { SpeakeasyBase } from "../../../internal/utils";
import { LocalTime } from "./localtime";
/**
 * Event's Start Dates
**/
export declare class StartDates extends SpeakeasyBase {
    dateTBA?: boolean;
    dateTBD?: boolean;
    dateTime?: Date;
    localDate?: Date;
    localTime?: LocalTime;
    noSpecificTime?: boolean;
    timeTBA?: boolean;
}
