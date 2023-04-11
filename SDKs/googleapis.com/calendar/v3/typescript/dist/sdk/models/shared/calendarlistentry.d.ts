import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarNotification } from "./calendarnotification";
import { ConferenceProperties } from "./conferenceproperties";
import { EventReminder } from "./eventreminder";
/**
 * The notifications that the authenticated user is receiving for this calendar.
 */
export declare class CalendarListEntryNotificationSettings extends SpeakeasyBase {
    /**
     * The list of notifications set for this calendar.
     */
    notifications?: CalendarNotification[];
}
/**
 * Successful response
 */
export declare class CalendarListEntry extends SpeakeasyBase {
    /**
     * The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
     *
     * @remarks
     * - "freeBusyReader" - Provides read access to free/busy information.
     * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
     * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
     * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
     */
    accessRole?: string;
    /**
     * The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.
     */
    backgroundColor?: string;
    /**
     * The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.
     */
    colorId?: string;
    conferenceProperties?: ConferenceProperties;
    /**
     * The default reminders that the authenticated user has for this calendar.
     */
    defaultReminders?: EventReminder[];
    /**
     * Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.
     */
    deleted?: boolean;
    /**
     * Description of the calendar. Optional. Read-only.
     */
    description?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.
     */
    foregroundColor?: string;
    /**
     * Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true.
     */
    hidden?: boolean;
    /**
     * Identifier of the calendar.
     */
    id?: string;
    /**
     * Type of the resource ("calendar#calendarListEntry").
     */
    kind?: string;
    /**
     * Geographic location of the calendar as free-form text. Optional. Read-only.
     */
    location?: string;
    /**
     * The notifications that the authenticated user is receiving for this calendar.
     */
    notificationSettings?: CalendarListEntryNotificationSettings;
    /**
     * Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.
     */
    primary?: boolean;
    /**
     * Whether the calendar content shows up in the calendar UI. Optional. The default is False.
     */
    selected?: boolean;
    /**
     * Title of the calendar. Read-only.
     */
    summary?: string;
    /**
     * The summary that the authenticated user has set for this calendar. Optional.
     */
    summaryOverride?: string;
    /**
     * The time zone of the calendar. Optional. Read-only.
     */
    timeZone?: string;
}
