import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2MeetingsSettingsIdJsonRequestBody extends SpeakeasyBase {
    /**
     * Allow other team members to schedule on you behalf.
     */
    allowBookingOnBehalf?: boolean;
    /**
     * Allow team members to insert available time outside your working hours.
     */
    allowBookingOvertime?: boolean;
    /**
     * Allow team members to double book events on your calendar.
     */
    allowEventOverlap?: boolean;
    /**
     * The number of days out the user allows a prospect to schedule a meeting
     */
    availabilityLimit?: number;
    /**
     * If Availability Limits have been turned on
     */
    availabilityLimitEnabled?: boolean;
    /**
     * Default buffer duration in minutes set by a user
     */
    bufferTimeDuration?: number;
    /**
     * Calendar type
     */
    calendarType?: string;
    /**
     * Default meeting length in minutes set by the user
     */
    defaultMeetingLength?: number;
    /**
     * Default description of the meeting
     */
    description?: string;
    /**
     * Determines if a user enabled Calendar Sync feature
     */
    enableCalendarSync?: boolean;
    /**
     * Determines if location will be filled via third-party service (Zoom, GoToMeeting, etc.)
     */
    enableDynamicLocation?: boolean;
    /**
     * Default location of the meeting
     */
    location?: string;
    /**
     * Determines if the user lost calendar connection
     */
    primaryCalendarConnectionFailed?: boolean;
    /**
     * ID of the primary calendar
     */
    primaryCalendarId?: string;
    /**
     * Display name of the primary calendar
     */
    primaryCalendarName?: string;
    /**
     * Determines if meetings are scheduled with a 15 minute buffer between them
     */
    scheduleBufferEnabled?: boolean;
    /**
     * The number of hours in advance a user requires someone to a book a meeting with them
     */
    scheduleDelay?: number;
    /**
     * Allow team members to see the details of events on your calendar.
     */
    shareEventDetail?: boolean;
    /**
     * Time zone for current calendar
     */
    timeZone?: string;
    /**
     * Times available set by a user that can be used to book meetings
     */
    timesAvailable?: Record<string, any>;
    /**
     * Default title of the meeting
     */
    title?: string;
}
export declare class PutV2MeetingsSettingsIdJsonRequest extends SpeakeasyBase {
    requestBody?: PutV2MeetingsSettingsIdJsonRequestBody;
    /**
     * MeetingSetting ID
     */
    id: string;
}
export declare class PutV2MeetingsSettingsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
