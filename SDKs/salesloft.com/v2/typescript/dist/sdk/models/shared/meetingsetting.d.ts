import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
import { MeetingUrl } from "./meetingurl";
/**
 * Success
 */
export declare class MeetingSetting extends SpeakeasyBase {
    activeMeetingUrl?: MeetingUrl;
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
     * Datetime of when the MeetingSetting was created
     */
    createdAt?: Date;
    /**
     * Default meeting length in minutes set by the user
     */
    defaultMeetingLength?: number;
    /**
     * Default description of the meeting
     */
    description?: string;
    /**
     * Calendar owner's email address
     */
    emailAddress?: string;
    /**
     * Determines if a user enabled Calendar Sync feature
     */
    enableCalendarSync?: boolean;
    /**
     * Determines if location will be filled via third-party service (Zoom, GoToMeeting, etc.)
     */
    enableDynamicLocation?: boolean;
    /**
     * ID of the MeetingSetting
     */
    id?: number;
    /**
     * Default location of the meeting
     */
    location?: string;
    /**
     * Gets true when any issue with fetching calendar occurs
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
    /**
     * Datetime of when the MeetingSetting was last updated
     */
    updatedAt?: Date;
    user?: EmbeddedResource;
    /**
     * User details
     */
    userDetails?: Record<string, any>;
    /**
     * User slug generated with a full name of the user
     */
    userSlug?: string;
}
