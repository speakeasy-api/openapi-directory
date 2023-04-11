import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingAdsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
 */
export declare enum DfareportingAdsListCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingAdsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingAdsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DfareportingAdsListTypeEnum {
    AdServingStandardAd = "AD_SERVING_STANDARD_AD",
    AdServingDefaultAd = "AD_SERVING_DEFAULT_AD",
    AdServingClickTracker = "AD_SERVING_CLICK_TRACKER",
    AdServingTracking = "AD_SERVING_TRACKING",
    AdServingBrandSafeAd = "AD_SERVING_BRAND_SAFE_AD"
}
export declare class DfareportingAdsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Select only active ads.
     */
    active?: boolean;
    /**
     * Select only ads with this advertiser ID.
     */
    advertiserId?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Select only archived ads.
     */
    archived?: boolean;
    /**
     * Select only ads with these audience segment IDs.
     */
    audienceSegmentIds?: string[];
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Select only ads with these campaign IDs.
     */
    campaignIds?: string[];
    /**
     * Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
     */
    compatibility?: DfareportingAdsListCompatibilityEnum;
    /**
     * Select only ads with these creative IDs assigned.
     */
    creativeIds?: string[];
    /**
     * Select only ads with these creative optimization configuration IDs.
     */
    creativeOptimizationConfigurationIds?: string[];
    /**
     * Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
     */
    dynamicClickTracker?: boolean;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Select only ads with these IDs.
     */
    ids?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Select only ads with these landing page IDs.
     */
    landingPageIds?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Select only ads with this event tag override ID.
     */
    overriddenEventTagId?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Select only ads with these placement IDs assigned.
     */
    placementIds?: string[];
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
     * Select only ads whose list targeting expression use these remarketing list IDs.
     */
    remarketingListIds?: string[];
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
     */
    searchString?: string;
    /**
     * Select only ads with these size IDs.
     */
    sizeIds?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingAdsListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingAdsListSortOrderEnum;
    /**
     * Select only ads that are SSL-compliant.
     */
    sslCompliant?: boolean;
    /**
     * Select only ads that require SSL.
     */
    sslRequired?: boolean;
    /**
     * Select only ads with these types.
     */
    type?: DfareportingAdsListTypeEnum[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingAdsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    adsListResponse?: shared.AdsListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
