import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlusActivitiesSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusActivitiesSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusActivitiesSearchSecurity extends SpeakeasyBase {
    option1?: PlusActivitiesSearchSecurityOption1;
    option2?: PlusActivitiesSearchSecurityOption2;
}
/**
 * Specifies how to order search results.
 */
export declare enum PlusActivitiesSearchOrderByEnum {
    Best = "best",
    Recent = "recent"
}
export declare class PlusActivitiesSearchRequest extends SpeakeasyBase {
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
     * Specify the preferred language to search with. See search language codes for available values.
     */
    language?: string;
    /**
     * The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Specifies how to order search results.
     */
    orderBy?: PlusActivitiesSearchOrderByEnum;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Full-text search query string.
     */
    query: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class PlusActivitiesSearchResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    activityFeed?: shared.ActivityFeed;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
