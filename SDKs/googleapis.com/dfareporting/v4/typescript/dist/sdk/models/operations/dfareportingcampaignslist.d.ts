import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingCampaignsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingCampaignsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingCampaignsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingCampaignsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Select only campaigns whose advertisers belong to these advertiser groups.
     */
    advertiserGroupIds?: string[];
    /**
     * Select only campaigns that belong to these advertisers.
     */
    advertiserIds?: string[];
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
     */
    archived?: boolean;
    /**
     * Select only campaigns that have at least one optimization activity.
     */
    atLeastOneOptimizationActivity?: boolean;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Exclude campaigns with these IDs.
     */
    excludedIds?: string[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Select only campaigns with these IDs.
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
     * Select only campaigns that have overridden this event tag ID.
     */
    overriddenEventTagId?: string;
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
     * Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingCampaignsListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingCampaignsListSortOrderEnum;
    /**
     * Select only campaigns that belong to this subaccount.
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
export declare class DfareportingCampaignsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    campaignsListResponse?: shared.CampaignsListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
