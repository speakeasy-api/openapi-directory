import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarHoursViewModel } from "./calendarhoursviewmodel";
/**
 * Success
 */
export declare class ScheduleViewModel extends SpeakeasyBase {
    availability?: CalendarHoursViewModel;
    bookingsPerSlot?: number;
    deletedStatus?: boolean;
    deletedTime?: Date;
    id?: string;
    interval?: number;
    locationId?: string;
    name?: string;
    object?: string;
    primary?: boolean;
    resourceGroupId?: string;
    type?: string;
}
