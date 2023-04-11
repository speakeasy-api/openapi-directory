import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingPlacementGroupsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum DfareportingPlacementGroupsListActiveStatusEnum {
    PlacementStatusUnknown = "PLACEMENT_STATUS_UNKNOWN",
    PlacementStatusActive = "PLACEMENT_STATUS_ACTIVE",
    PlacementStatusInactive = "PLACEMENT_STATUS_INACTIVE",
    PlacementStatusArchived = "PLACEMENT_STATUS_ARCHIVED",
    PlacementStatusPermanentlyArchived = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
}
/**
 * Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
 */
export declare enum DfareportingPlacementGroupsListPlacementGroupTypeEnum {
    PlacementPackage = "PLACEMENT_PACKAGE",
    PlacementRoadblock = "PLACEMENT_ROADBLOCK"
}
export declare enum DfareportingPlacementGroupsListPricingTypesEnum {
    PricingTypeCpm = "PRICING_TYPE_CPM",
    PricingTypeCpc = "PRICING_TYPE_CPC",
    PricingTypeCpa = "PRICING_TYPE_CPA",
    PricingTypeFlatRateImpressions = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PricingTypeFlatRateClicks = "PRICING_TYPE_FLAT_RATE_CLICKS",
    PricingTypeCpmActiveview = "PRICING_TYPE_CPM_ACTIVEVIEW"
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingPlacementGroupsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingPlacementGroupsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingPlacementGroupsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Select only placements with these active statuses.
     */
    activeStatus?: DfareportingPlacementGroupsListActiveStatusEnum[];
    /**
     * Select only placement groups that belong to these advertisers.
     */
    advertiserIds?: string[];
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Select only placement groups that belong to these campaigns.
     */
    campaignIds?: string[];
    /**
     * Select only placement groups that are associated with these content categories.
     */
    contentCategoryIds?: string[];
    /**
     * Select only placement groups that are associated with these directory sites.
     */
    directorySiteIds?: string[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Select only placement groups with these IDs.
     */
    ids?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
     */
    maxEndDate?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
     */
    maxStartDate?: string;
    /**
     * Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
     */
    minEndDate?: string;
    /**
     * Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
     */
    minStartDate?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
     */
    placementGroupType?: DfareportingPlacementGroupsListPlacementGroupTypeEnum;
    /**
     * Select only placement groups that are associated with these placement strategies.
     */
    placementStrategyIds?: string[];
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Select only placement groups with these pricing types.
     */
    pricingTypes?: DfareportingPlacementGroupsListPricingTypesEnum[];
    /**
     * User profile ID associated with this request.
     */
    profileId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
     */
    searchString?: string;
    /**
     * Select only placement groups that are associated with these sites.
     */
    siteIds?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingPlacementGroupsListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingPlacementGroupsListSortOrderEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingPlacementGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    placementGroupsListResponse?: shared.PlacementGroupsListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
