import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingCreativesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingCreativesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingCreativesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DfareportingCreativesListTypesEnum {
    Image = "IMAGE",
    DisplayRedirect = "DISPLAY_REDIRECT",
    CustomDisplay = "CUSTOM_DISPLAY",
    InternalRedirect = "INTERNAL_REDIRECT",
    CustomDisplayInterstitial = "CUSTOM_DISPLAY_INTERSTITIAL",
    InterstitialInternalRedirect = "INTERSTITIAL_INTERNAL_REDIRECT",
    TrackingText = "TRACKING_TEXT",
    RichMediaDisplayBanner = "RICH_MEDIA_DISPLAY_BANNER",
    RichMediaInpageFloating = "RICH_MEDIA_INPAGE_FLOATING",
    RichMediaImExpand = "RICH_MEDIA_IM_EXPAND",
    RichMediaDisplayExpanding = "RICH_MEDIA_DISPLAY_EXPANDING",
    RichMediaDisplayInterstitial = "RICH_MEDIA_DISPLAY_INTERSTITIAL",
    RichMediaDisplayMultiFloatingInterstitial = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL",
    RichMediaMobileInApp = "RICH_MEDIA_MOBILE_IN_APP",
    FlashInpage = "FLASH_INPAGE",
    InstreamVideo = "INSTREAM_VIDEO",
    VpaidLinearVideo = "VPAID_LINEAR_VIDEO",
    VpaidNonLinearVideo = "VPAID_NON_LINEAR_VIDEO",
    InstreamVideoRedirect = "INSTREAM_VIDEO_REDIRECT",
    RichMediaPeelDown = "RICH_MEDIA_PEEL_DOWN",
    Html5Banner = "HTML5_BANNER",
    Display = "DISPLAY",
    DisplayImageGallery = "DISPLAY_IMAGE_GALLERY",
    BrandSafeDefaultInstreamVideo = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO",
    InstreamAudio = "INSTREAM_AUDIO"
}
export declare class DfareportingCreativesListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Select only active creatives. Leave blank to select active and inactive creatives.
     */
    active?: boolean;
    /**
     * Select only creatives with this advertiser ID.
     */
    advertiserId?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Select only archived creatives. Leave blank to select archived and unarchived creatives.
     */
    archived?: boolean;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Select only creatives with this campaign ID.
     */
    campaignId?: string;
    /**
     * Select only in-stream video creatives with these companion IDs.
     */
    companionCreativeIds?: string[];
    /**
     * Select only creatives with these creative field IDs.
     */
    creativeFieldIds?: string[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Select only creatives with these IDs.
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
     * Select only creatives with these rendering IDs.
     */
    renderingIds?: string[];
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
     */
    searchString?: string;
    /**
     * Select only creatives with these size IDs.
     */
    sizeIds?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingCreativesListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingCreativesListSortOrderEnum;
    /**
     * Select only creatives corresponding to this Studio creative ID.
     */
    studioCreativeId?: string;
    /**
     * Select only creatives with these creative types.
     */
    types?: DfareportingCreativesListTypesEnum[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingCreativesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    creativesListResponse?: shared.CreativesListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
