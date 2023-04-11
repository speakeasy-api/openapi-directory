import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingSitesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingSitesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingSitesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingSitesListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * This search filter is no longer supported and will have no effect on the results returned.
     */
    acceptsInStreamVideoPlacements?: boolean;
    /**
     * This search filter is no longer supported and will have no effect on the results returned.
     */
    acceptsInterstitialPlacements?: boolean;
    /**
     * Select only sites that accept publisher paid placements.
     */
    acceptsPublisherPaidPlacements?: boolean;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Select only AdWords sites.
     */
    adWordsSite?: boolean;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Select only approved sites.
     */
    approved?: boolean;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Select only sites with these campaign IDs.
     */
    campaignIds?: string[];
    /**
     * Select only sites with these directory site IDs.
     */
    directorySiteIds?: string[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Select only sites with these IDs.
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
     * Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingSitesListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingSitesListSortOrderEnum;
    /**
     * Select only sites with this subaccount ID.
     */
    subaccountId?: string;
    /**
     * Select only sites that have not been mapped to a directory site.
     */
    unmappedSite?: boolean;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingSitesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    sitesListResponse?: shared.SitesListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
