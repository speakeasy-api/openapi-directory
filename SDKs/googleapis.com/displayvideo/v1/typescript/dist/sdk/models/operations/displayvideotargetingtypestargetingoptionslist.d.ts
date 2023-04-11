import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisplayvideoTargetingTypesTargetingOptionsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Required. The type of targeting option to be listed. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID`
 */
export declare enum DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum {
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
export declare class DisplayvideoTargetingTypesTargetingOptionsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Required. The Advertiser this request is being made in the context of.
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
     * Allows filtering by targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * The operator must be "=" (equal sign). * Supported fields: - `carrierAndIspDetails.type` - `geoRegionDetails.geoRegionType` - `targetingOptionId` Examples: * All `GEO REGION` targeting options that belong to sub type `GEO_REGION_TYPE_COUNTRY` or `GEO_REGION_TYPE_STATE`: `geoRegionDetails.geoRegionType="GEO_REGION_TYPE_COUNTRY" OR geoRegionDetails.geoRegionType="GEO_REGION_TYPE_STATE"` * All `CARRIER AND ISP` targeting options that belong to sub type `CARRIER_AND_ISP_TYPE_CARRIER`: `carrierAndIspDetails.type="CARRIER_AND_ISP_TYPE_CARRIER"`. The length of this field should be no more than 500 characters.
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
     * Field by which to sort the list. Acceptable values are: * `targetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingOptionId desc`.
     */
    orderBy?: string;
    /**
     * Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListTargetingOptions` method. If not specified, the first page of results will be returned.
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
     * Required. The type of targeting option to be listed. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID`
     */
    targetingType: DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DisplayvideoTargetingTypesTargetingOptionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listTargetingOptionsResponse?: shared.ListTargetingOptionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
