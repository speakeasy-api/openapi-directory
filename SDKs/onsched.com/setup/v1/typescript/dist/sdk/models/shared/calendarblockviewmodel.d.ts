import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatViewModel } from "./repeatviewmodel";
/**
 * Success
 */
export declare class CalendarBlockViewModel extends SpeakeasyBase {
    calendarId?: string;
    deletedStatus?: boolean;
    deletedTime?: string;
    endDate?: string;
    endTime?: number;
    id?: string;
    locationId?: string;
    object?: string;
    reason?: string;
    repeat?: RepeatViewModel;
    repeats?: boolean;
    startDate?: string;
    startTime?: number;
}
