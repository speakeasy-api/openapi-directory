import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CalendarEventsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsDeleteSecurity extends SpeakeasyBase {
    option1?: CalendarEventsDeleteSecurityOption1;
    option2?: CalendarEventsDeleteSecurityOption2;
}
/**
 * Guests who should receive notifications about the deletion of the event.
 */
export declare enum CalendarEventsDeleteSendUpdatesEnum {
    All = "all",
    ExternalOnly = "externalOnly",
    None = "none"
}
export declare class CalendarEventsDeleteRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
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
     * Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
     */
    sendNotifications?: boolean;
    /**
     * Guests who should receive notifications about the deletion of the event.
     */
    sendUpdates?: CalendarEventsDeleteSendUpdatesEnum;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class CalendarEventsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
