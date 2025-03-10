/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AgeRangeTargetingOptionDetails } from "./agerangetargetingoptiondetails";
import { AppCategoryTargetingOptionDetails } from "./appcategorytargetingoptiondetails";
import { AudioContentTypeTargetingOptionDetails } from "./audiocontenttypetargetingoptiondetails";
import { AuthorizedSellerStatusTargetingOptionDetails } from "./authorizedsellerstatustargetingoptiondetails";
import { BrowserTargetingOptionDetails } from "./browsertargetingoptiondetails";
import { BusinessChainTargetingOptionDetails } from "./businesschaintargetingoptiondetails";
import { CarrierAndIspTargetingOptionDetails } from "./carrierandisptargetingoptiondetails";
import { CategoryTargetingOptionDetails } from "./categorytargetingoptiondetails";
import { ContentDurationTargetingOptionDetails } from "./contentdurationtargetingoptiondetails";
import { ContentGenreTargetingOptionDetails } from "./contentgenretargetingoptiondetails";
import { ContentInstreamPositionTargetingOptionDetails } from "./contentinstreampositiontargetingoptiondetails";
import { ContentOutstreamPositionTargetingOptionDetails } from "./contentoutstreampositiontargetingoptiondetails";
import { ContentStreamTypeTargetingOptionDetails } from "./contentstreamtypetargetingoptiondetails";
import { DeviceMakeModelTargetingOptionDetails } from "./devicemakemodeltargetingoptiondetails";
import { DeviceTypeTargetingOptionDetails } from "./devicetypetargetingoptiondetails";
import { DigitalContentLabelTargetingOptionDetails } from "./digitalcontentlabeltargetingoptiondetails";
import { EnvironmentTargetingOptionDetails } from "./environmenttargetingoptiondetails";
import { ExchangeTargetingOptionDetails } from "./exchangetargetingoptiondetails";
import { GenderTargetingOptionDetails } from "./gendertargetingoptiondetails";
import { GeoRegionTargetingOptionDetails } from "./georegiontargetingoptiondetails";
import { HouseholdIncomeTargetingOptionDetails } from "./householdincometargetingoptiondetails";
import { LanguageTargetingOptionDetails } from "./languagetargetingoptiondetails";
import { NativeContentPositionTargetingOptionDetails } from "./nativecontentpositiontargetingoptiondetails";
import { OmidTargetingOptionDetails } from "./omidtargetingoptiondetails";
import { OnScreenPositionTargetingOptionDetails } from "./onscreenpositiontargetingoptiondetails";
import { OperatingSystemTargetingOptionDetails } from "./operatingsystemtargetingoptiondetails";
import { ParentalStatusTargetingOptionDetails } from "./parentalstatustargetingoptiondetails";
import { PoiTargetingOptionDetails } from "./poitargetingoptiondetails";
import { SensitiveCategoryTargetingOptionDetails } from "./sensitivecategorytargetingoptiondetails";
import { SubExchangeTargetingOptionDetails } from "./subexchangetargetingoptiondetails";
import { UserRewardedContentTargetingOptionDetails } from "./userrewardedcontenttargetingoptiondetails";
import { VideoPlayerSizeTargetingOptionDetails } from "./videoplayersizetargetingoptiondetails";
import { ViewabilityTargetingOptionDetails } from "./viewabilitytargetingoptiondetails";
import { Expose, Type } from "class-transformer";

/**
 * Output only. The type of this targeting option.
 */
export enum TargetingOptionTargetingTypeEnum {
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
}

/**
 * Represents a single targeting option, which is a targetable concept in DV360.
 */
export class TargetingOption extends SpeakeasyBase {
  /**
   * Represents a targetable age range. This will be populated in the age_range_details field when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ageRangeDetails" })
  @Type(() => AgeRangeTargetingOptionDetails)
  ageRangeDetails?: AgeRangeTargetingOptionDetails;

  /**
   * Represents a targetable collection of apps. A collection lets you target dynamic groups of related apps that are maintained by the platform, for example `All Apps/Google Play/Games`. This will be populated in the app_category_details field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "appCategoryDetails" })
  @Type(() => AppCategoryTargetingOptionDetails)
  appCategoryDetails?: AppCategoryTargetingOptionDetails;

  /**
   * Represents a targetable audio content type. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "audioContentTypeDetails" })
  @Type(() => AudioContentTypeTargetingOptionDetails)
  audioContentTypeDetails?: AudioContentTypeTargetingOptionDetails;

  /**
   * Represents a targetable authorized seller status. This will be populated in the authorized_seller_status_details field when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "authorizedSellerStatusDetails" })
  @Type(() => AuthorizedSellerStatusTargetingOptionDetails)
  authorizedSellerStatusDetails?: AuthorizedSellerStatusTargetingOptionDetails;

  /**
   * Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "browserDetails" })
  @Type(() => BrowserTargetingOptionDetails)
  browserDetails?: BrowserTargetingOptionDetails;

  /**
   * Represents a targetable business chain within a geo region. This will be populated in the business_chain_details field when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "businessChainDetails" })
  @Type(() => BusinessChainTargetingOptionDetails)
  businessChainDetails?: BusinessChainTargetingOptionDetails;

  /**
   * Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "carrierAndIspDetails" })
  @Type(() => CarrierAndIspTargetingOptionDetails)
  carrierAndIspDetails?: CarrierAndIspTargetingOptionDetails;

  /**
   * Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "categoryDetails" })
  @Type(() => CategoryTargetingOptionDetails)
  categoryDetails?: CategoryTargetingOptionDetails;

  /**
   * Represents a targetable content duration. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentDurationDetails" })
  @Type(() => ContentDurationTargetingOptionDetails)
  contentDurationDetails?: ContentDurationTargetingOptionDetails;

  /**
   * Represents a targetable content genre. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentGenreDetails" })
  @Type(() => ContentGenreTargetingOptionDetails)
  contentGenreDetails?: ContentGenreTargetingOptionDetails;

  /**
   * Represents a targetable content instream position, which could be used by video and audio ads. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentInstreamPositionDetails" })
  @Type(() => ContentInstreamPositionTargetingOptionDetails)
  contentInstreamPositionDetails?: ContentInstreamPositionTargetingOptionDetails;

  /**
   * Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentOutstreamPositionDetails" })
  @Type(() => ContentOutstreamPositionTargetingOptionDetails)
  contentOutstreamPositionDetails?: ContentOutstreamPositionTargetingOptionDetails;

  /**
   * Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentStreamTypeDetails" })
  @Type(() => ContentStreamTypeTargetingOptionDetails)
  contentStreamTypeDetails?: ContentStreamTypeTargetingOptionDetails;

  /**
   * Represents a targetable device make and model. This will be populated in the device_make_model_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deviceMakeModelDetails" })
  @Type(() => DeviceMakeModelTargetingOptionDetails)
  deviceMakeModelDetails?: DeviceMakeModelTargetingOptionDetails;

  /**
   * Represents a targetable device type. This will be populated in the device_type_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deviceTypeDetails" })
  @Type(() => DeviceTypeTargetingOptionDetails)
  deviceTypeDetails?: DeviceTypeTargetingOptionDetails;

  /**
   * Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "digitalContentLabelDetails" })
  @Type(() => DigitalContentLabelTargetingOptionDetails)
  digitalContentLabelDetails?: DigitalContentLabelTargetingOptionDetails;

  /**
   * Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "environmentDetails" })
  @Type(() => EnvironmentTargetingOptionDetails)
  environmentDetails?: EnvironmentTargetingOptionDetails;

  /**
   * Represents a targetable exchange. This will be populated in the exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "exchangeDetails" })
  @Type(() => ExchangeTargetingOptionDetails)
  exchangeDetails?: ExchangeTargetingOptionDetails;

  /**
   * Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "genderDetails" })
  @Type(() => GenderTargetingOptionDetails)
  genderDetails?: GenderTargetingOptionDetails;

  /**
   * Represents a targetable geographic region. This will be populated in the geo_region_details field when targeting_type is `TARGETING_TYPE_GEO_REGION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "geoRegionDetails" })
  @Type(() => GeoRegionTargetingOptionDetails)
  geoRegionDetails?: GeoRegionTargetingOptionDetails;

  /**
   * Represents a targetable household income. This will be populated in the household_income_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "householdIncomeDetails" })
  @Type(() => HouseholdIncomeTargetingOptionDetails)
  householdIncomeDetails?: HouseholdIncomeTargetingOptionDetails;

  /**
   * Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "languageDetails" })
  @Type(() => LanguageTargetingOptionDetails)
  languageDetails?: LanguageTargetingOptionDetails;

  /**
   * Output only. The resource name for this targeting option.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Represents a targetable native content position. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nativeContentPositionDetails" })
  @Type(() => NativeContentPositionTargetingOptionDetails)
  nativeContentPositionDetails?: NativeContentPositionTargetingOptionDetails;

  /**
   * Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "omidDetails" })
  @Type(() => OmidTargetingOptionDetails)
  omidDetails?: OmidTargetingOptionDetails;

  /**
   * Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "onScreenPositionDetails" })
  @Type(() => OnScreenPositionTargetingOptionDetails)
  onScreenPositionDetails?: OnScreenPositionTargetingOptionDetails;

  /**
   * Represents a targetable operating system. This will be populated in the operating_system_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "operatingSystemDetails" })
  @Type(() => OperatingSystemTargetingOptionDetails)
  operatingSystemDetails?: OperatingSystemTargetingOptionDetails;

  /**
   * Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parentalStatusDetails" })
  @Type(() => ParentalStatusTargetingOptionDetails)
  parentalStatusDetails?: ParentalStatusTargetingOptionDetails;

  /**
   * Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "poiDetails" })
  @Type(() => PoiTargetingOptionDetails)
  poiDetails?: PoiTargetingOptionDetails;

  /**
   * Represents a targetable sensitive category. This will be populated in the sensitive_category_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sensitiveCategoryDetails" })
  @Type(() => SensitiveCategoryTargetingOptionDetails)
  sensitiveCategoryDetails?: SensitiveCategoryTargetingOptionDetails;

  /**
   * Represents a targetable sub-exchange. This will be populated in the sub_exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subExchangeDetails" })
  @Type(() => SubExchangeTargetingOptionDetails)
  subExchangeDetails?: SubExchangeTargetingOptionDetails;

  /**
   * Output only. A unique identifier for this targeting option. The tuple {`targeting_type`, `targeting_option_id`} will be unique.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "targetingOptionId" })
  targetingOptionId?: string;

  /**
   * Output only. The type of this targeting option.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "targetingType" })
  targetingType?: TargetingOptionTargetingTypeEnum;

  /**
   * Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "userRewardedContentDetails" })
  @Type(() => UserRewardedContentTargetingOptionDetails)
  userRewardedContentDetails?: UserRewardedContentTargetingOptionDetails;

  /**
   * Represents a targetable video player size. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "videoPlayerSizeDetails" })
  @Type(() => VideoPlayerSizeTargetingOptionDetails)
  videoPlayerSizeDetails?: VideoPlayerSizeTargetingOptionDetails;

  /**
   * Represents a targetable viewability. This will be populated in the viewability_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "viewabilityDetails" })
  @Type(() => ViewabilityTargetingOptionDetails)
  viewabilityDetails?: ViewabilityTargetingOptionDetails;
}
