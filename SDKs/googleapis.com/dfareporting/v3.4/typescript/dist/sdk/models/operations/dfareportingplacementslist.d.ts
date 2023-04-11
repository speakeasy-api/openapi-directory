import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingPlacementsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum DfareportingPlacementsListCompatibilitiesEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
/**
 * Select only placements with this payment source.
 */
export declare enum DfareportingPlacementsListPaymentSourceEnum {
    PlacementAgencyPaid = "PLACEMENT_AGENCY_PAID",
    PlacementPublisherPaid = "PLACEMENT_PUBLISHER_PAID"
}
export declare enum DfareportingPlacementsListPricingTypesEnum {
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
export declare enum DfareportingPlacementsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingPlacementsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingPlacementsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Select only placements that belong to these advertisers.
     */
    advertiserIds?: string[];
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Select only archived placements. Don't set this field to select both archived and non-archived placements.
     */
    archived?: boolean;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Select only placements that belong to these campaigns.
     */
    campaignIds?: string[];
    /**
     * Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
     */
    compatibilities?: DfareportingPlacementsListCompatibilitiesEnum[];
    /**
     * Select only placements that are associated with these content categories.
     */
    contentCategoryIds?: string[];
    /**
     * Select only placements that are associated with these directory sites.
     */
    directorySiteIds?: string[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Select only placements that belong to these placement groups.
     */
    groupIds?: string[];
    /**
     * Select only placements with these IDs.
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
     * Select only placements with this payment source.
     */
    paymentSource?: DfareportingPlacementsListPaymentSourceEnum;
    /**
     * Select only placements that are associated with these placement strategies.
     */
    placementStrategyIds?: string[];
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Select only placements with these pricing types.
     */
    pricingTypes?: DfareportingPlacementsListPricingTypesEnum[];
    /**
     * User profile ID associated with this request.
     */
    profileId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement" .
     */
    searchString?: string;
    /**
     * Select only placements that are associated with these sites.
     */
    siteIds?: string[];
    /**
     * Select only placements that are associated with these sizes.
     */
    sizeIds?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingPlacementsListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingPlacementsListSortOrderEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingPlacementsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    placementsListResponse?: shared.PlacementsListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
