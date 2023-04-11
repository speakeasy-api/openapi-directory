import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`
 */
export declare enum DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum {
    TargetingTypeUnspecified = "TARGETING_TYPE_UNSPECIFIED",
    TargetingTypeChannel = "TARGETING_TYPE_CHANNEL",
    TargetingTypeAppCategory = "TARGETING_TYPE_APP_CATEGORY",
    TargetingTypeApp = "TARGETING_TYPE_APP",
    TargetingTypeUrl = "TARGETING_TYPE_URL",
    TargetingTypeDayAndTime = "TARGETING_TYPE_DAY_AND_TIME",
    TargetingTypeAgeRange = "TARGETING_TYPE_AGE_RANGE",
    TargetingTypeRegionalLocationList = "TARGETING_TYPE_REGIONAL_LOCATION_LIST",
    TargetingTypeProximityLocationList = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST",
    TargetingTypeGender = "TARGETING_TYPE_GENDER",
    TargetingTypeVideoPlayerSize = "TARGETING_TYPE_VIDEO_PLAYER_SIZE",
    TargetingTypeUserRewardedContent = "TARGETING_TYPE_USER_REWARDED_CONTENT",
    TargetingTypeParentalStatus = "TARGETING_TYPE_PARENTAL_STATUS",
    TargetingTypeContentInstreamPosition = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION",
    TargetingTypeContentOutstreamPosition = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION",
    TargetingTypeDeviceType = "TARGETING_TYPE_DEVICE_TYPE",
    TargetingTypeAudienceGroup = "TARGETING_TYPE_AUDIENCE_GROUP",
    TargetingTypeBrowser = "TARGETING_TYPE_BROWSER",
    TargetingTypeHouseholdIncome = "TARGETING_TYPE_HOUSEHOLD_INCOME",
    TargetingTypeOnScreenPosition = "TARGETING_TYPE_ON_SCREEN_POSITION",
    TargetingTypeThirdPartyVerifier = "TARGETING_TYPE_THIRD_PARTY_VERIFIER",
    TargetingTypeDigitalContentLabelExclusion = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION",
    TargetingTypeSensitiveCategoryExclusion = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION",
    TargetingTypeEnvironment = "TARGETING_TYPE_ENVIRONMENT",
    TargetingTypeCarrierAndIsp = "TARGETING_TYPE_CARRIER_AND_ISP",
    TargetingTypeOperatingSystem = "TARGETING_TYPE_OPERATING_SYSTEM",
    TargetingTypeDeviceMakeModel = "TARGETING_TYPE_DEVICE_MAKE_MODEL",
    TargetingTypeKeyword = "TARGETING_TYPE_KEYWORD",
    TargetingTypeNegativeKeywordList = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST",
    TargetingTypeViewability = "TARGETING_TYPE_VIEWABILITY",
    TargetingTypeCategory = "TARGETING_TYPE_CATEGORY",
    TargetingTypeInventorySource = "TARGETING_TYPE_INVENTORY_SOURCE",
    TargetingTypeLanguage = "TARGETING_TYPE_LANGUAGE",
    TargetingTypeAuthorizedSellerStatus = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS",
    TargetingTypeGeoRegion = "TARGETING_TYPE_GEO_REGION",
    TargetingTypeInventorySourceGroup = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP",
    TargetingTypeExchange = "TARGETING_TYPE_EXCHANGE",
    TargetingTypeSubExchange = "TARGETING_TYPE_SUB_EXCHANGE",
    TargetingTypePoi = "TARGETING_TYPE_POI",
    TargetingTypeBusinessChain = "TARGETING_TYPE_BUSINESS_CHAIN",
    TargetingTypeContentDuration = "TARGETING_TYPE_CONTENT_DURATION",
    TargetingTypeContentStreamType = "TARGETING_TYPE_CONTENT_STREAM_TYPE",
    TargetingTypeNativeContentPosition = "TARGETING_TYPE_NATIVE_CONTENT_POSITION",
    TargetingTypeOmid = "TARGETING_TYPE_OMID",
    TargetingTypeAudioContentType = "TARGETING_TYPE_AUDIO_CONTENT_TYPE",
    TargetingTypeContentGenre = "TARGETING_TYPE_CONTENT_GENRE",
    TargetingTypeYoutubeVideo = "TARGETING_TYPE_YOUTUBE_VIDEO",
    TargetingTypeYoutubeChannel = "TARGETING_TYPE_YOUTUBE_CHANNEL",
    TargetingTypeSessionPosition = "TARGETING_TYPE_SESSION_POSITION"
}
export declare class DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Required. The ID of the advertiser the campaign belongs to.
     */
    advertiserId: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Required. An identifier unique to the targeting type in this campaign that identifies the assigned targeting option being requested.
     */
    assignedTargetingOptionId: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Required. The ID of the campaign the assigned targeting option belongs to.
     */
    campaignId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`
     */
    targetingType: DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    assignedTargetingOption?: shared.AssignedTargetingOption;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
