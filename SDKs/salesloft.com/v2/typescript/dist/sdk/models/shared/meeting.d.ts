import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedAttendeeResource } from "./embeddedattendeeresource";
import { EmbeddedResource } from "./embeddedresource";
import { EventMeetingSetting } from "./eventmeetingsetting";
/**
 * Success
 */
export declare class Meeting extends SpeakeasyBase {
    /**
     * ID of the account the recipient associated to
     */
    accountId?: string;
    /**
     * Whether the meeting is an all-day meeting
     */
    allDay?: boolean;
    /**
     * The attendees of the meeting. Each attendee includes the following fields: status, email, name, organizer
     */
    attendees?: EmbeddedAttendeeResource[];
    bookedByMeetingsSettings?: EventMeetingSetting;
    bookedByUser?: EmbeddedResource;
    cadence?: EmbeddedResource;
    /**
     * Calendar ID of the meeting owner
     */
    calendarId?: string;
    /**
     * Calendar type of the meeting owner. Possible values are: gmail, azure, nylas, linkedin_azure, cerebro, external
     */
    calendarType?: string;
    /**
     * Datetime of when the meeting was canceled
     */
    canceledAt?: Date;
    /**
     * Datetime of when the meeting was created
     */
    createdAt?: Date;
    /**
     * List of crm custom fields which will be logged to SFDC
     */
    crmCustomFields?: Record<string, any>;
    /**
     * List of crm references associated with the meeting
     */
    crmReferences?: Record<string, any>;
    /**
     * Description of the meeting
     */
    description?: string;
    /**
     * End time of the meeting
     */
    endTime?: Date;
    /**
     * ID of the meeting created by target calendar
     */
    eventId?: string;
    /**
     * Source of the meeting. Possible values are: 'external' - The event was synced to Salesloft platform via Calendar Sync, 'internal' - The event was created via Salesloft platform
     */
    eventSource?: string;
    /**
     * The list of attendees emails of the meeting
     */
    guests?: string[];
    /**
     * UID of the meeting provided by target calendar provider
     */
    iCalUid?: string;
    /**
     * ID of the meeting
     */
    id?: number;
    /**
     * Location of the meeting
     */
    location?: string;
    /**
     * Meeting type
     */
    meetingType?: string;
    /**
     * Whether the meeting is a No Show meeting
     */
    noShow?: boolean;
    ownedByMeetingsSettings?: EventMeetingSetting;
    person?: EmbeddedResource;
    /**
     * Email of the meeting invite recipient
     */
    recipientEmail?: string;
    /**
     * Name of the meeting invite recipient
     */
    recipientName?: string;
    /**
     * Start time of the meeting
     */
    startTime?: Date;
    /**
     * Status of the meeting. Possible values are: pending, booked, failed, retry
     */
    status?: string;
    step?: EmbeddedResource;
    /**
     * Strict attribution means that we 100% sure which cadence generate the meeting
     */
    strictAttribution?: boolean;
    /**
     * ID of the created task
     */
    taskId?: string;
    /**
     * Title of the meeting
     */
    title?: string;
    /**
     * Datetime of when the meeting was last updated
     */
    updatedAt?: Date;
}
