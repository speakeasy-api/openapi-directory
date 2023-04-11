import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CalendarCalendarListWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarCalendarListWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CalendarCalendarListWatchSecurity extends SpeakeasyBase {
    option1?: CalendarCalendarListWatchSecurityOption1;
    option2?: CalendarCalendarListWatchSecurityOption2;
}
/**
 * The minimum access role for the user in the returned entries. Optional. The default is no restriction.
 */
export declare enum CalendarCalendarListWatchMinAccessRoleEnum {
    FreeBusyReader = "freeBusyReader",
    Owner = "owner",
    Reader = "reader",
    Writer = "writer"
}
export declare class CalendarCalendarListWatchRequest extends SpeakeasyBase {
    channel?: shared.Channel;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     */
    maxResults?: number;
    /**
     * The minimum access role for the user in the returned entries. Optional. The default is no restriction.
     */
    minAccessRole?: CalendarCalendarListWatchMinAccessRoleEnum;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Token specifying which result page to return. Optional.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Whether to include deleted calendar list entries in the result. Optional. The default is False.
     */
    showDeleted?: boolean;
    /**
     * Whether to show hidden entries. Optional. The default is False.
     */
    showHidden?: boolean;
    /**
     * Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
     *
     * @remarks
     * To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
     * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
     * Learn more about incremental synchronization.
     * Optional. The default is to return all entries.
     */
    syncToken?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class CalendarCalendarListWatchResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
