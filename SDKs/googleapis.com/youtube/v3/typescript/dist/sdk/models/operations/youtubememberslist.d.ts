import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class YoutubeMembersListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Parameter that specifies which channel members to return.
 */
export declare enum YoutubeMembersListModeEnum {
    ListMembersModeUnknown = "listMembersModeUnknown",
    Updates = "updates",
    AllCurrent = "all_current"
}
export declare class YoutubeMembersListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.
     */
    filterByMemberChannelId?: string;
    /**
     * Filter members in the results set to the ones that have access to a level.
     */
    hasAccessToLevel?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Parameter that specifies which channel members to return.
     */
    mode?: YoutubeMembersListModeEnum;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.
     */
    part: string[];
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class YoutubeMembersListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    memberListResponse?: shared.MemberListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
