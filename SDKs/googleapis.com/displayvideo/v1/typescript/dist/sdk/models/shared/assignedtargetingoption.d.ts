import { SpeakeasyBase } from "../../../internal/utils";
import { AgeRangeAssignedTargetingOptionDetails } from "./agerangeassignedtargetingoptiondetails";
import { AppAssignedTargetingOptionDetails, AppAssignedTargetingOptionDetailsInput } from "./appassignedtargetingoptiondetails";
import { AppCategoryAssignedTargetingOptionDetails, AppCategoryAssignedTargetingOptionDetailsInput } from "./appcategoryassignedtargetingoptiondetails";
import { AudienceGroupAssignedTargetingOptionDetails } from "./audiencegroupassignedtargetingoptiondetails";
import { AudioContentTypeAssignedTargetingOptionDetails } from "./audiocontenttypeassignedtargetingoptiondetails";
import { AuthorizedSellerStatusAssignedTargetingOptionDetails, AuthorizedSellerStatusAssignedTargetingOptionDetailsInput } from "./authorizedsellerstatusassignedtargetingoptiondetails";
import { BrowserAssignedTargetingOptionDetails, BrowserAssignedTargetingOptionDetailsInput } from "./browserassignedtargetingoptiondetails";
import { BusinessChainAssignedTargetingOptionDetails, BusinessChainAssignedTargetingOptionDetailsInput } from "./businesschainassignedtargetingoptiondetails";
import { CarrierAndIspAssignedTargetingOptionDetails, CarrierAndIspAssignedTargetingOptionDetailsInput } from "./carrierandispassignedtargetingoptiondetails";
import { CategoryAssignedTargetingOptionDetails, CategoryAssignedTargetingOptionDetailsInput } from "./categoryassignedtargetingoptiondetails";
import { ChannelAssignedTargetingOptionDetails } from "./channelassignedtargetingoptiondetails";
import { ContentDurationAssignedTargetingOptionDetails, ContentDurationAssignedTargetingOptionDetailsInput } from "./contentdurationassignedtargetingoptiondetails";
import { ContentGenreAssignedTargetingOptionDetails, ContentGenreAssignedTargetingOptionDetailsInput } from "./contentgenreassignedtargetingoptiondetails";
import { ContentInstreamPositionAssignedTargetingOptionDetails, ContentInstreamPositionAssignedTargetingOptionDetailsInput } from "./contentinstreampositionassignedtargetingoptiondetails";
import { ContentOutstreamPositionAssignedTargetingOptionDetails, ContentOutstreamPositionAssignedTargetingOptionDetailsInput } from "./contentoutstreampositionassignedtargetingoptiondetails";
import { ContentStreamTypeAssignedTargetingOptionDetails, ContentStreamTypeAssignedTargetingOptionDetailsInput } from "./contentstreamtypeassignedtargetingoptiondetails";
import { DayAndTimeAssignedTargetingOptionDetails } from "./dayandtimeassignedtargetingoptiondetails";
import { DeviceMakeModelAssignedTargetingOptionDetails, DeviceMakeModelAssignedTargetingOptionDetailsInput } from "./devicemakemodelassignedtargetingoptiondetails";
import { DeviceTypeAssignedTargetingOptionDetails } from "./devicetypeassignedtargetingoptiondetails";
import { DigitalContentLabelAssignedTargetingOptionDetails, DigitalContentLabelAssignedTargetingOptionDetailsInput } from "./digitalcontentlabelassignedtargetingoptiondetails";
import { EnvironmentAssignedTargetingOptionDetails } from "./environmentassignedtargetingoptiondetails";
import { ExchangeAssignedTargetingOptionDetails } from "./exchangeassignedtargetingoptiondetails";
import { GenderAssignedTargetingOptionDetails } from "./genderassignedtargetingoptiondetails";
import { GeoRegionAssignedTargetingOptionDetails, GeoRegionAssignedTargetingOptionDetailsInput } from "./georegionassignedtargetingoptiondetails";
import { HouseholdIncomeAssignedTargetingOptionDetails } from "./householdincomeassignedtargetingoptiondetails";
import { InventorySourceAssignedTargetingOptionDetails } from "./inventorysourceassignedtargetingoptiondetails";
import { InventorySourceGroupAssignedTargetingOptionDetails } from "./inventorysourcegroupassignedtargetingoptiondetails";
import { KeywordAssignedTargetingOptionDetails } from "./keywordassignedtargetingoptiondetails";
import { LanguageAssignedTargetingOptionDetails, LanguageAssignedTargetingOptionDetailsInput } from "./languageassignedtargetingoptiondetails";
import { NativeContentPositionAssignedTargetingOptionDetails } from "./nativecontentpositionassignedtargetingoptiondetails";
import { NegativeKeywordListAssignedTargetingOptionDetails } from "./negativekeywordlistassignedtargetingoptiondetails";
import { OmidAssignedTargetingOptionDetails } from "./omidassignedtargetingoptiondetails";
import { OnScreenPositionAssignedTargetingOptionDetails, OnScreenPositionAssignedTargetingOptionDetailsInput } from "./onscreenpositionassignedtargetingoptiondetails";
import { OperatingSystemAssignedTargetingOptionDetails, OperatingSystemAssignedTargetingOptionDetailsInput } from "./operatingsystemassignedtargetingoptiondetails";
import { ParentalStatusAssignedTargetingOptionDetails } from "./parentalstatusassignedtargetingoptiondetails";
import { PoiAssignedTargetingOptionDetails, PoiAssignedTargetingOptionDetailsInput } from "./poiassignedtargetingoptiondetails";
import { ProximityLocationListAssignedTargetingOptionDetails } from "./proximitylocationlistassignedtargetingoptiondetails";
import { RegionalLocationListAssignedTargetingOptionDetails } from "./regionallocationlistassignedtargetingoptiondetails";
import { SensitiveCategoryAssignedTargetingOptionDetails, SensitiveCategoryAssignedTargetingOptionDetailsInput } from "./sensitivecategoryassignedtargetingoptiondetails";
import { SubExchangeAssignedTargetingOptionDetails } from "./subexchangeassignedtargetingoptiondetails";
import { ThirdPartyVerifierAssignedTargetingOptionDetails } from "./thirdpartyverifierassignedtargetingoptiondetails";
import { UrlAssignedTargetingOptionDetails } from "./urlassignedtargetingoptiondetails";
import { UserRewardedContentAssignedTargetingOptionDetails, UserRewardedContentAssignedTargetingOptionDetailsInput } from "./userrewardedcontentassignedtargetingoptiondetails";
import { VideoPlayerSizeAssignedTargetingOptionDetails } from "./videoplayersizeassignedtargetingoptiondetails";
import { ViewabilityAssignedTargetingOptionDetails } from "./viewabilityassignedtargetingoptiondetails";
/**
 * Output only. The inheritance status of the assigned targeting option.
 */
export declare enum AssignedTargetingOptionInheritanceEnum {
    InheritanceUnspecified = "INHERITANCE_UNSPECIFIED",
    NotInherited = "NOT_INHERITED",
    InheritedFromPartner = "INHERITED_FROM_PARTNER",
    InheritedFromAdvertiser = "INHERITED_FROM_ADVERTISER"
}
/**
 * Output only. Identifies the type of this assigned targeting option.
 */
export declare enum AssignedTargetingOptionTargetingTypeEnum {
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
/**
 * A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
 */
export declare class AssignedTargetingOption extends SpeakeasyBase {
    /**
     * Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
     */
    ageRangeDetails?: AgeRangeAssignedTargetingOptionDetails;
    /**
     * Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
     */
    appCategoryDetails?: AppCategoryAssignedTargetingOptionDetails;
    /**
     * Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
     */
    appDetails?: AppAssignedTargetingOptionDetails;
    /**
     * Output only. The unique ID of the assigned targeting option. The ID is only unique within a given resource and targeting type. It may be reused in other contexts.
     */
    assignedTargetingOptionId?: string;
    /**
     * Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.
     */
    audienceGroupDetails?: AudienceGroupAssignedTargetingOptionDetails;
    /**
     * Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect.
     */
    audioContentTypeDetails?: AudioContentTypeAssignedTargetingOptionDetails;
    /**
     * Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
     */
    authorizedSellerStatusDetails?: AuthorizedSellerStatusAssignedTargetingOptionDetails;
    /**
     * Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.
     */
    browserDetails?: BrowserAssignedTargetingOptionDetails;
    /**
     * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
     */
    businessChainDetails?: BusinessChainAssignedTargetingOptionDetails;
    /**
     * Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
     */
    carrierAndIspDetails?: CarrierAndIspAssignedTargetingOptionDetails;
    /**
     * Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.
     */
    categoryDetails?: CategoryAssignedTargetingOptionDetails;
    /**
     * Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`.
     */
    channelDetails?: ChannelAssignedTargetingOptionDetails;
    /**
     * Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect.
     */
    contentDurationDetails?: ContentDurationAssignedTargetingOptionDetails;
    /**
     * Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect.
     */
    contentGenreDetails?: ContentGenreAssignedTargetingOptionDetails;
    /**
     * Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
     */
    contentInstreamPositionDetails?: ContentInstreamPositionAssignedTargetingOptionDetails;
    /**
     * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
     */
    contentOutstreamPositionDetails?: ContentOutstreamPositionAssignedTargetingOptionDetails;
    /**
     * Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.
     */
    contentStreamTypeDetails?: ContentStreamTypeAssignedTargetingOptionDetails;
    /**
     * Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.
     */
    dayAndTimeDetails?: DayAndTimeAssignedTargetingOptionDetails;
    /**
     * Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
     */
    deviceMakeModelDetails?: DeviceMakeModelAssignedTargetingOptionDetails;
    /**
     * Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
     */
    deviceTypeDetails?: DeviceTypeAssignedTargetingOptionDetails;
    /**
     * Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
     */
    digitalContentLabelExclusionDetails?: DigitalContentLabelAssignedTargetingOptionDetails;
    /**
     * Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
     */
    environmentDetails?: EnvironmentAssignedTargetingOptionDetails;
    /**
     * Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.
     */
    exchangeDetails?: ExchangeAssignedTargetingOptionDetails;
    /**
     * Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
     */
    genderDetails?: GenderAssignedTargetingOptionDetails;
    /**
     * Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.
     */
    geoRegionDetails?: GeoRegionAssignedTargetingOptionDetails;
    /**
     * Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.
     */
    householdIncomeDetails?: HouseholdIncomeAssignedTargetingOptionDetails;
    /**
     * Output only. The inheritance status of the assigned targeting option.
     */
    inheritance?: AssignedTargetingOptionInheritanceEnum;
    /**
     * Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`.
     */
    inventorySourceDetails?: InventorySourceAssignedTargetingOptionDetails;
    /**
     * Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.
     */
    inventorySourceGroupDetails?: InventorySourceGroupAssignedTargetingOptionDetails;
    /**
     * Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.
     */
    keywordDetails?: KeywordAssignedTargetingOptionDetails;
    /**
     * Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
     */
    languageDetails?: LanguageAssignedTargetingOptionDetails;
    /**
     * Output only. The resource name for this assigned targeting option.
     */
    name?: string;
    /**
     * Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect.
     */
    nativeContentPositionDetails?: NativeContentPositionAssignedTargetingOptionDetails;
    /**
     * Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`.
     */
    negativeKeywordListDetails?: NegativeKeywordListAssignedTargetingOptionDetails;
    /**
     * Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.
     */
    omidDetails?: OmidAssignedTargetingOptionDetails;
    /**
     * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
     */
    onScreenPositionDetails?: OnScreenPositionAssignedTargetingOptionDetails;
    /**
     * Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
     */
    operatingSystemDetails?: OperatingSystemAssignedTargetingOptionDetails;
    /**
     * Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
     */
    parentalStatusDetails?: ParentalStatusAssignedTargetingOptionDetails;
    /**
     * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
     */
    poiDetails?: PoiAssignedTargetingOptionDetails;
    /**
     * Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
     */
    proximityLocationListDetails?: ProximityLocationListAssignedTargetingOptionDetails;
    /**
     * Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`.
     */
    regionalLocationListDetails?: RegionalLocationListAssignedTargetingOptionDetails;
    /**
     * Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
     */
    sensitiveCategoryExclusionDetails?: SensitiveCategoryAssignedTargetingOptionDetails;
    /**
     * Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.
     */
    subExchangeDetails?: SubExchangeAssignedTargetingOptionDetails;
    /**
     * Output only. Identifies the type of this assigned targeting option.
     */
    targetingType?: AssignedTargetingOptionTargetingTypeEnum;
    /**
     * Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.
     */
    thirdPartyVerifierDetails?: ThirdPartyVerifierAssignedTargetingOptionDetails;
    /**
     * Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.
     */
    urlDetails?: UrlAssignedTargetingOptionDetails;
    /**
     * User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
     */
    userRewardedContentDetails?: UserRewardedContentAssignedTargetingOptionDetails;
    /**
     * Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect.
     */
    videoPlayerSizeDetails?: VideoPlayerSizeAssignedTargetingOptionDetails;
    /**
     * Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.
     */
    viewabilityDetails?: ViewabilityAssignedTargetingOptionDetails;
}
/**
 * A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
 */
export declare class AssignedTargetingOptionInput extends SpeakeasyBase {
    /**
     * Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
     */
    ageRangeDetails?: AgeRangeAssignedTargetingOptionDetails;
    /**
     * Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
     */
    appCategoryDetails?: AppCategoryAssignedTargetingOptionDetailsInput;
    /**
     * Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
     */
    appDetails?: AppAssignedTargetingOptionDetailsInput;
    /**
     * Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.
     */
    audienceGroupDetails?: AudienceGroupAssignedTargetingOptionDetails;
    /**
     * Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect.
     */
    audioContentTypeDetails?: AudioContentTypeAssignedTargetingOptionDetails;
    /**
     * Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
     */
    authorizedSellerStatusDetails?: AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
    /**
     * Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.
     */
    browserDetails?: BrowserAssignedTargetingOptionDetailsInput;
    /**
     * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
     */
    businessChainDetails?: BusinessChainAssignedTargetingOptionDetailsInput;
    /**
     * Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
     */
    carrierAndIspDetails?: CarrierAndIspAssignedTargetingOptionDetailsInput;
    /**
     * Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.
     */
    categoryDetails?: CategoryAssignedTargetingOptionDetailsInput;
    /**
     * Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`.
     */
    channelDetails?: ChannelAssignedTargetingOptionDetails;
    /**
     * Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect.
     */
    contentDurationDetails?: ContentDurationAssignedTargetingOptionDetailsInput;
    /**
     * Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect.
     */
    contentGenreDetails?: ContentGenreAssignedTargetingOptionDetailsInput;
    /**
     * Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
     */
    contentInstreamPositionDetails?: ContentInstreamPositionAssignedTargetingOptionDetailsInput;
    /**
     * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
     */
    contentOutstreamPositionDetails?: ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
    /**
     * Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.
     */
    contentStreamTypeDetails?: ContentStreamTypeAssignedTargetingOptionDetailsInput;
    /**
     * Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.
     */
    dayAndTimeDetails?: DayAndTimeAssignedTargetingOptionDetails;
    /**
     * Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
     */
    deviceMakeModelDetails?: DeviceMakeModelAssignedTargetingOptionDetailsInput;
    /**
     * Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
     */
    deviceTypeDetails?: DeviceTypeAssignedTargetingOptionDetails;
    /**
     * Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
     */
    digitalContentLabelExclusionDetails?: DigitalContentLabelAssignedTargetingOptionDetailsInput;
    /**
     * Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
     */
    environmentDetails?: EnvironmentAssignedTargetingOptionDetails;
    /**
     * Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.
     */
    exchangeDetails?: ExchangeAssignedTargetingOptionDetails;
    /**
     * Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
     */
    genderDetails?: GenderAssignedTargetingOptionDetails;
    /**
     * Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.
     */
    geoRegionDetails?: GeoRegionAssignedTargetingOptionDetailsInput;
    /**
     * Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.
     */
    householdIncomeDetails?: HouseholdIncomeAssignedTargetingOptionDetails;
    /**
     * Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`.
     */
    inventorySourceDetails?: InventorySourceAssignedTargetingOptionDetails;
    /**
     * Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.
     */
    inventorySourceGroupDetails?: InventorySourceGroupAssignedTargetingOptionDetails;
    /**
     * Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.
     */
    keywordDetails?: KeywordAssignedTargetingOptionDetails;
    /**
     * Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
     */
    languageDetails?: LanguageAssignedTargetingOptionDetailsInput;
    /**
     * Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect.
     */
    nativeContentPositionDetails?: NativeContentPositionAssignedTargetingOptionDetails;
    /**
     * Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`.
     */
    negativeKeywordListDetails?: NegativeKeywordListAssignedTargetingOptionDetails;
    /**
     * Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.
     */
    omidDetails?: OmidAssignedTargetingOptionDetails;
    /**
     * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
     */
    onScreenPositionDetails?: OnScreenPositionAssignedTargetingOptionDetailsInput;
    /**
     * Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
     */
    operatingSystemDetails?: OperatingSystemAssignedTargetingOptionDetailsInput;
    /**
     * Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
     */
    parentalStatusDetails?: ParentalStatusAssignedTargetingOptionDetails;
    /**
     * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
     */
    poiDetails?: PoiAssignedTargetingOptionDetailsInput;
    /**
     * Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
     */
    proximityLocationListDetails?: ProximityLocationListAssignedTargetingOptionDetails;
    /**
     * Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`.
     */
    regionalLocationListDetails?: RegionalLocationListAssignedTargetingOptionDetails;
    /**
     * Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
     */
    sensitiveCategoryExclusionDetails?: SensitiveCategoryAssignedTargetingOptionDetailsInput;
    /**
     * Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.
     */
    subExchangeDetails?: SubExchangeAssignedTargetingOptionDetails;
    /**
     * Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.
     */
    thirdPartyVerifierDetails?: ThirdPartyVerifierAssignedTargetingOptionDetails;
    /**
     * Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.
     */
    urlDetails?: UrlAssignedTargetingOptionDetails;
    /**
     * User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
     */
    userRewardedContentDetails?: UserRewardedContentAssignedTargetingOptionDetailsInput;
    /**
     * Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect.
     */
    videoPlayerSizeDetails?: VideoPlayerSizeAssignedTargetingOptionDetails;
    /**
     * Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.
     */
    viewabilityDetails?: ViewabilityAssignedTargetingOptionDetails;
}
