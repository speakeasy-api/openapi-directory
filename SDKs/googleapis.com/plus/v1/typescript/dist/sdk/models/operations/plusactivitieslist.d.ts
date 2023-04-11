import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlusActivitiesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusActivitiesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusActivitiesListSecurity extends SpeakeasyBase {
    option1?: PlusActivitiesListSecurityOption1;
    option2?: PlusActivitiesListSecurityOption2;
}
/**
 * The collection of activities to list.
 */
export declare enum PlusActivitiesListCollectionEnum {
    Public = "public"
}
export declare class PlusActivitiesListRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The collection of activities to list.
     */
    collection: PlusActivitiesListCollectionEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
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
     * The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
     */
    userId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class PlusActivitiesListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    activityFeed?: shared.ActivityFeed;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
