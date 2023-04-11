import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CalendarEventsWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsWatchSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsWatchSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsWatchSecurity extends SpeakeasyBase {
    option1?: CalendarEventsWatchSecurityOption1;
    option2?: CalendarEventsWatchSecurityOption2;
    option3?: CalendarEventsWatchSecurityOption3;
    option4?: CalendarEventsWatchSecurityOption4;
}
/**
 * The order of the events returned in the result. Optional. The default is an unspecified, stable order.
 */
export declare enum CalendarEventsWatchOrderByEnum {
    StartTime = "startTime",
    Updated = "updated"
}
export declare class CalendarEventsWatchRequest extends SpeakeasyBase {
    channel?: shared.Channel;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
     */
    alwaysIncludeEmail?: boolean;
    /**
     * Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     */
    calendarId: string;
    /**
     * Event types to return. Optional. The default is ["default", "outOfOffice", "focusTime"]. This is used by the Working Location developer preview and only the default value is allowed for non-opted-in users.
     */
    eventTypes?: string[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.
     */
    iCalUID?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     */
    maxAttendees?: number;
    /**
     * Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The order of the events returned in the result. Optional. The default is an unspecified, stable order.
     */
    orderBy?: CalendarEventsWatchOrderByEnum;
    /**
     * Token specifying which result page to return. Optional.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
     */
    privateExtendedProperty?: string[];
    /**
     * Free text search terms to find events that match these terms in the following fields: summary, description, location, attendee's displayName, attendee's email. Optional.
     */
    q?: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
     */
    sharedExtendedProperty?: string[];
    /**
     * Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
     */
    showDeleted?: boolean;
    /**
     * Whether to include hidden invitations in the result. Optional. The default is False.
     */
    showHiddenInvitations?: boolean;
    /**
     * Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
     */
    singleEvents?: boolean;
    /**
     * Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
     *
     * @remarks
     * There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
     *
     * These are:
     * - iCalUID
     * - orderBy
     * - privateExtendedProperty
     * - q
     * - sharedExtendedProperty
     * - timeMin
     * - timeMax
     * - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
     * Learn more about incremental synchronization.
     * Optional. The default is to return all entries.
     */
    syncToken?: string;
    /**
     * Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
     */
    timeMax?: string;
    /**
     * Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
     */
    timeMin?: string;
    /**
     * Time zone used in the response. Optional. The default is the time zone of the calendar.
     */
    timeZone?: string;
    /**
     * Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
     */
    updatedMin?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class CalendarEventsWatchResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
