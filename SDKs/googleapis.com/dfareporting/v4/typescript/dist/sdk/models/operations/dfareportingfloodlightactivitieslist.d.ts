import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingFloodlightActivitiesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Select only floodlight activities with the specified floodlight activity group type.
 */
export declare enum DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum {
    Counter = "COUNTER",
    Sale = "SALE"
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingFloodlightActivitiesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingFloodlightActivitiesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingFloodlightActivitiesListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     */
    advertiserId?: string;
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
     * Select only floodlight activities with the specified floodlight activity group IDs.
     */
    floodlightActivityGroupIds?: string[];
    /**
     * Select only floodlight activities with the specified floodlight activity group name.
     */
    floodlightActivityGroupName?: string;
    /**
     * Select only floodlight activities with the specified floodlight activity group tag string.
     */
    floodlightActivityGroupTagString?: string;
    /**
     * Select only floodlight activities with the specified floodlight activity group type.
     */
    floodlightActivityGroupType?: DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum;
    /**
     * Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     */
    floodlightConfigurationId?: string;
    /**
     * Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     */
    ids?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * User profile ID associated with this request.
     */
    profileId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingFloodlightActivitiesListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingFloodlightActivitiesListSortOrderEnum;
    /**
     * Select only floodlight activities with the specified tag string.
     */
    tagString?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingFloodlightActivitiesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    floodlightActivitiesListResponse?: shared.FloodlightActivitiesListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
