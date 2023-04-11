import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingAdvertisersListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingAdvertisersListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingAdvertisersListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Select only advertisers with the specified status.
 */
export declare enum DfareportingAdvertisersListStatusEnum {
    Approved = "APPROVED",
    OnHold = "ON_HOLD"
}
export declare class DfareportingAdvertisersListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Select only advertisers with these advertiser group IDs.
     */
    advertiserGroupIds?: string[];
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
     * Select only advertisers with these floodlight configuration IDs.
     */
    floodlightConfigurationIds?: string[];
    /**
     * Select only advertisers with these IDs.
     */
    ids?: string[];
    /**
     * Select only advertisers which do not belong to any advertiser group.
     */
    includeAdvertisersWithoutGroupsOnly?: boolean;
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
     * Select only advertisers which use another advertiser's floodlight configuration.
     */
    onlyParent?: boolean;
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
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser" .
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingAdvertisersListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingAdvertisersListSortOrderEnum;
    /**
     * Select only advertisers with the specified status.
     */
    status?: DfareportingAdvertisersListStatusEnum;
    /**
     * Select only advertisers with these subaccount IDs.
     */
    subaccountId?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingAdvertisersListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    advertisersListResponse?: shared.AdvertisersListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
