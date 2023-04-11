import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BloggerPostsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BloggerPostsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BloggerPostsListSecurity extends SpeakeasyBase {
    option1?: BloggerPostsListSecurityOption1;
    option2?: BloggerPostsListSecurityOption2;
}
export declare enum BloggerPostsListOrderByEnum {
    OrderByUnspecified = "ORDER_BY_UNSPECIFIED",
    Published = "PUBLISHED",
    Updated = "UPDATED"
}
/**
 * Sort direction applied to post list.
 */
export declare enum BloggerPostsListSortOptionEnum {
    SortOptionUnspecified = "SORT_OPTION_UNSPECIFIED",
    Descending = "DESCENDING",
    Ascending = "ASCENDING"
}
export declare enum BloggerPostsListStatusEnum {
    Live = "LIVE",
    Draft = "DRAFT",
    Scheduled = "SCHEDULED",
    SoftTrashed = "SOFT_TRASHED"
}
export declare enum BloggerPostsListViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerPostsListRequest extends SpeakeasyBase {
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
    blogId: string;
    /**
     * JSONP
     */
    callback?: string;
    endDate?: string;
    fetchBodies?: boolean;
    fetchImages?: boolean;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    labels?: string;
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    orderBy?: BloggerPostsListOrderByEnum;
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Sort direction applied to post list.
     */
    sortOption?: BloggerPostsListSortOptionEnum;
    startDate?: string;
    status?: BloggerPostsListStatusEnum[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    view?: BloggerPostsListViewEnum;
}
export declare class BloggerPostsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    postList?: shared.PostList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
