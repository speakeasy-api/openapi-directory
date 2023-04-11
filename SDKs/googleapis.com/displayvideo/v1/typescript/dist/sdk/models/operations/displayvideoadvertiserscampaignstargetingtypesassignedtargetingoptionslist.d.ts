import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`
 */
export declare enum DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum {
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
    TargetingTypeContentGenre = "TARGETING_TYPE_CONTENT_GENRE"
}
export declare class DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest extends SpeakeasyBase {
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
     * JSONP
     */
    callback?: string;
    /**
     * Required. The ID of the campaign to list assigned targeting options for.
     */
    campaignId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `assignedTargetingOptionId` - `inheritance` Examples: * AssignedTargetingOptions with ID 1 or 2 `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * AssignedTargetingOptions with inheritance status of NOT_INHERITED or INHERITED_FROM_PARTNER `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     */
    orderBy?: string;
    /**
     * Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`
     */
    targetingType: DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listCampaignAssignedTargetingOptionsResponse?: shared.ListCampaignAssignedTargetingOptionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
