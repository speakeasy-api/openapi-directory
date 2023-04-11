import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class CalendarEvent extends SpeakeasyBase {
    /**
     * Whether the calendar event is an all-day event.
     */
    allDay?: string;
    /**
     * The attendees of the calendar event.
     */
    attendees?: Record<string, any>;
    /**
     * Raw body content from Microsoft calendar events
     */
    bodyHtml?: string;
    /**
     * Busy/free status of the calendar event
     */
    busy?: boolean;
    /**
     * Calendar ID of the user calendar.
     */
    calendarId?: string;
    /**
     * The canceled date of the calendar event.
     */
    canceledAt?: string;
    /**
     * The conference-related information, such as details of a Google Meet conference.
     */
    conferenceData?: Record<string, any>;
    /**
     * Creation time of the calendar event.
     */
    createdAt?: string;
    /**
     * The creator email of the calendar event.
     */
    creator?: Record<string, any>;
    /**
     * Description of the calendar event
     */
    description?: string;
    /**
     * The (exclusive) end time of the calendar event.
     */
    endTime?: Date;
    /**
     * Extended properties of the calendar event.
     */
    extendedProperties?: Record<string, any>;
    /**
     * An absolute link to this calendar event in the Google Calendar Web UI.
     */
    htmlLink?: string;
    /**
     * Calendar event unique identifier (iCalUID)
     */
    iCalUid?: string;
    /**
     * The calendar event original ID from calendar provider
     */
    id?: string;
    /**
     * Location of the calendar event
     */
    location?: string;
    /**
     * The organizer email of the calendar event.
     */
    organizer?: string;
    /**
     * The provider of the calendar event.
     */
    provider?: string;
    /**
     * Whether the calendar event is a recurring event.
     */
    recurring?: string;
    /**
     * The (inclusive) start time of the calendar event.
     */
    startTime?: Date;
    /**
     * The status of the calendar event. It can be empty for non-google events.
     */
    status?: string;
    /**
     * Tenant ID of the user calendar
     */
    tenantId?: number;
    /**
     * Title of the calendar event
     */
    title?: string;
    /**
     * Last modification time of the calendar event.
     */
    updatedAt?: string;
    /**
     * User GUID of the user calendar.
     */
    userGuid?: string;
}
