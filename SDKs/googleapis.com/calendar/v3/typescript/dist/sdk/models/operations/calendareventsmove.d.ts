import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CalendarEventsMoveSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsMoveSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarEventsMoveSecurity extends SpeakeasyBase {
    option1?: CalendarEventsMoveSecurityOption1;
    option2?: CalendarEventsMoveSecurityOption2;
}
/**
 * Guests who should receive notifications about the change of the event's organizer.
 */
export declare enum CalendarEventsMoveSendUpdatesEnum {
    All = "all",
    ExternalOnly = "externalOnly",
    None = "none"
}
export declare class CalendarEventsMoveRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Calendar identifier of the source calendar where the event currently is on.
     */
    calendarId: string;
    /**
     * Calendar identifier of the target calendar where the event is to be moved to.
     */
    destination: string;
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
     * Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false.
     */
    sendNotifications?: boolean;
    /**
     * Guests who should receive notifications about the change of the event's organizer.
     */
    sendUpdates?: CalendarEventsMoveSendUpdatesEnum;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class CalendarEventsMoveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    event?: shared.Event;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
