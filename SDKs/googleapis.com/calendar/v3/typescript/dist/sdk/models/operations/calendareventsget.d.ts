import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CalendarEventsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsGetSecurity extends SpeakeasyBase {
    option1?: CalendarEventsGetSecurityOption1;
    option2?: CalendarEventsGetSecurityOption2;
    option3?: CalendarEventsGetSecurityOption3;
    option4?: CalendarEventsGetSecurityOption4;
}
export declare class CalendarEventsGetRequest extends SpeakeasyBase {
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
     * Event identifier.
     */
    eventId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     */
    maxAttendees?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Time zone used in the response. Optional. The default is the time zone of the calendar.
     */
    timeZone?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class CalendarEventsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    event?: shared.Event;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
