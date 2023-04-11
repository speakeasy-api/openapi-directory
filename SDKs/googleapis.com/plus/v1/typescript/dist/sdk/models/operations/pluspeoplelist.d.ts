import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlusPeopleListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusPeopleListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PlusPeopleListSecurity extends SpeakeasyBase {
    option1?: PlusPeopleListSecurityOption1;
    option2?: PlusPeopleListSecurityOption2;
}
/**
 * The collection of people to list.
 */
export declare enum PlusPeopleListCollectionEnum {
    Connected = "connected",
    Visible = "visible"
}
/**
 * The order to return people in.
 */
export declare enum PlusPeopleListOrderByEnum {
    Alphabetical = "alphabetical",
    Best = "best"
}
export declare class PlusPeopleListRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The collection of people to list.
     */
    collection: PlusPeopleListCollectionEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The order to return people in.
     */
    orderBy?: PlusPeopleListOrderByEnum;
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
     * Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
     */
    userId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class PlusPeopleListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    peopleFeed?: shared.PeopleFeed;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
