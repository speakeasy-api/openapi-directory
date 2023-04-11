import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResourceOptionsUpdateModel extends SpeakeasyBase {
    bioLink?: string;
    bookingNotification?: number;
    /**
     * 0 = OnSched Availability, 1 = Google Calendar, 2 = Outlook Calendar
     */
    calendarAvailability?: number;
    displayColor?: string;
    effectiveDate?: Date;
    gender?: string;
    googleCalendarId?: string;
    hourly?: number;
    ignoreBusinessHours?: boolean;
    /**
     * 0 = None, 1=Online Bookings 2=All Bookings.
     */
    notificationType?: number;
    outlookCalendarId?: string;
    sortKey?: number;
}
