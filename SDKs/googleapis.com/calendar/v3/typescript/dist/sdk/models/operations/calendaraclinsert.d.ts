import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CalendarAclInsertSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarAclInsertRequest extends SpeakeasyBase {
    aclRule?: shared.AclRule;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     */
    calendarId: string;
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
     * Whether to send notifications about the calendar sharing change. Optional. The default is True.
     */
    sendNotifications?: boolean;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class CalendarAclInsertResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    aclRule?: shared.AclRule;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
