import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CalendarEventsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsUpdateSecurity extends SpeakeasyBase {
    option1?: CalendarEventsUpdateSecurityOption1;
    option2?: CalendarEventsUpdateSecurityOption2;
}
/**
 * Guests who should receive notifications about the event update (for example, title changes, etc.).
 */
export declare enum CalendarEventsUpdateSendUpdatesEnum {
    All = "all",
    ExternalOnly = "externalOnly",
    None = "none"
}
export declare class CalendarEventsUpdateRequest extends SpeakeasyBase {
    event?: shared.Event;
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
     * Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
     */
    conferenceDataVersion?: number;
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
     * Deprecated. Please use sendUpdates instead.
     *
     * @remarks
     *
     * Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
     */
    sendNotifications?: boolean;
    /**
     * Guests who should receive notifications about the event update (for example, title changes, etc.).
     */
    sendUpdates?: CalendarEventsUpdateSendUpdatesEnum;
    /**
     * Whether API client performing operation supports event attachments. Optional. The default is False.
     */
    supportsAttachments?: boolean;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class CalendarEventsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    event?: shared.Event;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
