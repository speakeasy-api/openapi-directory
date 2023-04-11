import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlusCommentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusCommentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusCommentsListSecurity extends SpeakeasyBase {
    option1?: PlusCommentsListSecurityOption1;
    option2?: PlusCommentsListSecurityOption2;
}
/**
 * The order in which to sort the list of comments.
 */
export declare enum PlusCommentsListSortOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class PlusCommentsListRequest extends SpeakeasyBase {
    /**
     * The ID of the activity to get comments for.
     */
    activityId: string;
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
     * The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
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
     * The order in which to sort the list of comments.
     */
    sortOrder?: PlusCommentsListSortOrderEnum;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class PlusCommentsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    commentFeed?: shared.CommentFeed;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
