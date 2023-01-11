import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agerangeassignedtargetingoptiondetails as shared_agerangeassignedtargetingoptiondetails
from ..shared import appcategoryassignedtargetingoptiondetails as shared_appcategoryassignedtargetingoptiondetails
from ..shared import appassignedtargetingoptiondetails as shared_appassignedtargetingoptiondetails
from ..shared import audiencegroupassignedtargetingoptiondetails as shared_audiencegroupassignedtargetingoptiondetails
from ..shared import audiocontenttypeassignedtargetingoptiondetails as shared_audiocontenttypeassignedtargetingoptiondetails
from ..shared import authorizedsellerstatusassignedtargetingoptiondetails as shared_authorizedsellerstatusassignedtargetingoptiondetails
from ..shared import browserassignedtargetingoptiondetails as shared_browserassignedtargetingoptiondetails
from ..shared import businesschainassignedtargetingoptiondetails as shared_businesschainassignedtargetingoptiondetails
from ..shared import carrierandispassignedtargetingoptiondetails as shared_carrierandispassignedtargetingoptiondetails
from ..shared import categoryassignedtargetingoptiondetails as shared_categoryassignedtargetingoptiondetails
from ..shared import channelassignedtargetingoptiondetails as shared_channelassignedtargetingoptiondetails
from ..shared import contentdurationassignedtargetingoptiondetails as shared_contentdurationassignedtargetingoptiondetails
from ..shared import contentgenreassignedtargetingoptiondetails as shared_contentgenreassignedtargetingoptiondetails
from ..shared import contentinstreampositionassignedtargetingoptiondetails as shared_contentinstreampositionassignedtargetingoptiondetails
from ..shared import contentoutstreampositionassignedtargetingoptiondetails as shared_contentoutstreampositionassignedtargetingoptiondetails
from ..shared import contentstreamtypeassignedtargetingoptiondetails as shared_contentstreamtypeassignedtargetingoptiondetails
from ..shared import dayandtimeassignedtargetingoptiondetails as shared_dayandtimeassignedtargetingoptiondetails
from ..shared import devicemakemodelassignedtargetingoptiondetails as shared_devicemakemodelassignedtargetingoptiondetails
from ..shared import devicetypeassignedtargetingoptiondetails as shared_devicetypeassignedtargetingoptiondetails
from ..shared import digitalcontentlabelassignedtargetingoptiondetails as shared_digitalcontentlabelassignedtargetingoptiondetails
from ..shared import environmentassignedtargetingoptiondetails as shared_environmentassignedtargetingoptiondetails
from ..shared import exchangeassignedtargetingoptiondetails as shared_exchangeassignedtargetingoptiondetails
from ..shared import genderassignedtargetingoptiondetails as shared_genderassignedtargetingoptiondetails
from ..shared import georegionassignedtargetingoptiondetails as shared_georegionassignedtargetingoptiondetails
from ..shared import householdincomeassignedtargetingoptiondetails as shared_householdincomeassignedtargetingoptiondetails
from ..shared import inventorysourceassignedtargetingoptiondetails as shared_inventorysourceassignedtargetingoptiondetails
from ..shared import inventorysourcegroupassignedtargetingoptiondetails as shared_inventorysourcegroupassignedtargetingoptiondetails
from ..shared import keywordassignedtargetingoptiondetails as shared_keywordassignedtargetingoptiondetails
from ..shared import languageassignedtargetingoptiondetails as shared_languageassignedtargetingoptiondetails
from ..shared import nativecontentpositionassignedtargetingoptiondetails as shared_nativecontentpositionassignedtargetingoptiondetails
from ..shared import negativekeywordlistassignedtargetingoptiondetails as shared_negativekeywordlistassignedtargetingoptiondetails
from ..shared import omidassignedtargetingoptiondetails as shared_omidassignedtargetingoptiondetails
from ..shared import onscreenpositionassignedtargetingoptiondetails as shared_onscreenpositionassignedtargetingoptiondetails
from ..shared import operatingsystemassignedtargetingoptiondetails as shared_operatingsystemassignedtargetingoptiondetails
from ..shared import parentalstatusassignedtargetingoptiondetails as shared_parentalstatusassignedtargetingoptiondetails
from ..shared import poiassignedtargetingoptiondetails as shared_poiassignedtargetingoptiondetails
from ..shared import proximitylocationlistassignedtargetingoptiondetails as shared_proximitylocationlistassignedtargetingoptiondetails
from ..shared import regionallocationlistassignedtargetingoptiondetails as shared_regionallocationlistassignedtargetingoptiondetails
from ..shared import sensitivecategoryassignedtargetingoptiondetails as shared_sensitivecategoryassignedtargetingoptiondetails
from ..shared import subexchangeassignedtargetingoptiondetails as shared_subexchangeassignedtargetingoptiondetails
from ..shared import thirdpartyverifierassignedtargetingoptiondetails as shared_thirdpartyverifierassignedtargetingoptiondetails
from ..shared import urlassignedtargetingoptiondetails as shared_urlassignedtargetingoptiondetails
from ..shared import userrewardedcontentassignedtargetingoptiondetails as shared_userrewardedcontentassignedtargetingoptiondetails
from ..shared import videoplayersizeassignedtargetingoptiondetails as shared_videoplayersizeassignedtargetingoptiondetails
from ..shared import viewabilityassignedtargetingoptiondetails as shared_viewabilityassignedtargetingoptiondetails
from ..shared import appcategoryassignedtargetingoptiondetails as shared_appcategoryassignedtargetingoptiondetails
from ..shared import appassignedtargetingoptiondetails as shared_appassignedtargetingoptiondetails
from ..shared import authorizedsellerstatusassignedtargetingoptiondetails as shared_authorizedsellerstatusassignedtargetingoptiondetails
from ..shared import browserassignedtargetingoptiondetails as shared_browserassignedtargetingoptiondetails
from ..shared import businesschainassignedtargetingoptiondetails as shared_businesschainassignedtargetingoptiondetails
from ..shared import carrierandispassignedtargetingoptiondetails as shared_carrierandispassignedtargetingoptiondetails
from ..shared import categoryassignedtargetingoptiondetails as shared_categoryassignedtargetingoptiondetails
from ..shared import contentdurationassignedtargetingoptiondetails as shared_contentdurationassignedtargetingoptiondetails
from ..shared import contentgenreassignedtargetingoptiondetails as shared_contentgenreassignedtargetingoptiondetails
from ..shared import contentinstreampositionassignedtargetingoptiondetails as shared_contentinstreampositionassignedtargetingoptiondetails
from ..shared import contentoutstreampositionassignedtargetingoptiondetails as shared_contentoutstreampositionassignedtargetingoptiondetails
from ..shared import contentstreamtypeassignedtargetingoptiondetails as shared_contentstreamtypeassignedtargetingoptiondetails
from ..shared import devicemakemodelassignedtargetingoptiondetails as shared_devicemakemodelassignedtargetingoptiondetails
from ..shared import digitalcontentlabelassignedtargetingoptiondetails as shared_digitalcontentlabelassignedtargetingoptiondetails
from ..shared import georegionassignedtargetingoptiondetails as shared_georegionassignedtargetingoptiondetails
from ..shared import languageassignedtargetingoptiondetails as shared_languageassignedtargetingoptiondetails
from ..shared import onscreenpositionassignedtargetingoptiondetails as shared_onscreenpositionassignedtargetingoptiondetails
from ..shared import operatingsystemassignedtargetingoptiondetails as shared_operatingsystemassignedtargetingoptiondetails
from ..shared import poiassignedtargetingoptiondetails as shared_poiassignedtargetingoptiondetails
from ..shared import sensitivecategoryassignedtargetingoptiondetails as shared_sensitivecategoryassignedtargetingoptiondetails
from ..shared import userrewardedcontentassignedtargetingoptiondetails as shared_userrewardedcontentassignedtargetingoptiondetails

class AssignedTargetingOptionInheritanceEnum(str, Enum):
    INHERITANCE_UNSPECIFIED = "INHERITANCE_UNSPECIFIED"
    NOT_INHERITED = "NOT_INHERITED"
    INHERITED_FROM_PARTNER = "INHERITED_FROM_PARTNER"
    INHERITED_FROM_ADVERTISER = "INHERITED_FROM_ADVERTISER"

class AssignedTargetingOptionTargetingTypeEnum(str, Enum):
    TARGETING_TYPE_UNSPECIFIED = "TARGETING_TYPE_UNSPECIFIED"
    TARGETING_TYPE_CHANNEL = "TARGETING_TYPE_CHANNEL"
    TARGETING_TYPE_APP_CATEGORY = "TARGETING_TYPE_APP_CATEGORY"
    TARGETING_TYPE_APP = "TARGETING_TYPE_APP"
    TARGETING_TYPE_URL = "TARGETING_TYPE_URL"
    TARGETING_TYPE_DAY_AND_TIME = "TARGETING_TYPE_DAY_AND_TIME"
    TARGETING_TYPE_AGE_RANGE = "TARGETING_TYPE_AGE_RANGE"
    TARGETING_TYPE_REGIONAL_LOCATION_LIST = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
    TARGETING_TYPE_PROXIMITY_LOCATION_LIST = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
    TARGETING_TYPE_GENDER = "TARGETING_TYPE_GENDER"
    TARGETING_TYPE_VIDEO_PLAYER_SIZE = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
    TARGETING_TYPE_USER_REWARDED_CONTENT = "TARGETING_TYPE_USER_REWARDED_CONTENT"
    TARGETING_TYPE_PARENTAL_STATUS = "TARGETING_TYPE_PARENTAL_STATUS"
    TARGETING_TYPE_CONTENT_INSTREAM_POSITION = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
    TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
    TARGETING_TYPE_DEVICE_TYPE = "TARGETING_TYPE_DEVICE_TYPE"
    TARGETING_TYPE_AUDIENCE_GROUP = "TARGETING_TYPE_AUDIENCE_GROUP"
    TARGETING_TYPE_BROWSER = "TARGETING_TYPE_BROWSER"
    TARGETING_TYPE_HOUSEHOLD_INCOME = "TARGETING_TYPE_HOUSEHOLD_INCOME"
    TARGETING_TYPE_ON_SCREEN_POSITION = "TARGETING_TYPE_ON_SCREEN_POSITION"
    TARGETING_TYPE_THIRD_PARTY_VERIFIER = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
    TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
    TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
    TARGETING_TYPE_ENVIRONMENT = "TARGETING_TYPE_ENVIRONMENT"
    TARGETING_TYPE_CARRIER_AND_ISP = "TARGETING_TYPE_CARRIER_AND_ISP"
    TARGETING_TYPE_OPERATING_SYSTEM = "TARGETING_TYPE_OPERATING_SYSTEM"
    TARGETING_TYPE_DEVICE_MAKE_MODEL = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
    TARGETING_TYPE_KEYWORD = "TARGETING_TYPE_KEYWORD"
    TARGETING_TYPE_NEGATIVE_KEYWORD_LIST = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
    TARGETING_TYPE_VIEWABILITY = "TARGETING_TYPE_VIEWABILITY"
    TARGETING_TYPE_CATEGORY = "TARGETING_TYPE_CATEGORY"
    TARGETING_TYPE_INVENTORY_SOURCE = "TARGETING_TYPE_INVENTORY_SOURCE"
    TARGETING_TYPE_LANGUAGE = "TARGETING_TYPE_LANGUAGE"
    TARGETING_TYPE_AUTHORIZED_SELLER_STATUS = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
    TARGETING_TYPE_GEO_REGION = "TARGETING_TYPE_GEO_REGION"
    TARGETING_TYPE_INVENTORY_SOURCE_GROUP = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
    TARGETING_TYPE_EXCHANGE = "TARGETING_TYPE_EXCHANGE"
    TARGETING_TYPE_SUB_EXCHANGE = "TARGETING_TYPE_SUB_EXCHANGE"
    TARGETING_TYPE_POI = "TARGETING_TYPE_POI"
    TARGETING_TYPE_BUSINESS_CHAIN = "TARGETING_TYPE_BUSINESS_CHAIN"
    TARGETING_TYPE_CONTENT_DURATION = "TARGETING_TYPE_CONTENT_DURATION"
    TARGETING_TYPE_CONTENT_STREAM_TYPE = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
    TARGETING_TYPE_NATIVE_CONTENT_POSITION = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
    TARGETING_TYPE_OMID = "TARGETING_TYPE_OMID"
    TARGETING_TYPE_AUDIO_CONTENT_TYPE = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
    TARGETING_TYPE_CONTENT_GENRE = "TARGETING_TYPE_CONTENT_GENRE"


@dataclass_json
@dataclasses.dataclass
class AssignedTargetingOption:
    r"""AssignedTargetingOption
    A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
    """
    
    age_range_details: Optional[shared_agerangeassignedtargetingoptiondetails.AgeRangeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRangeDetails') }})
    app_category_details: Optional[shared_appcategoryassignedtargetingoptiondetails.AppCategoryAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appCategoryDetails') }})
    app_details: Optional[shared_appassignedtargetingoptiondetails.AppAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDetails') }})
    assigned_targeting_option_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedTargetingOptionId') }})
    audience_group_details: Optional[shared_audiencegroupassignedtargetingoptiondetails.AudienceGroupAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceGroupDetails') }})
    audio_content_type_details: Optional[shared_audiocontenttypeassignedtargetingoptiondetails.AudioContentTypeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContentTypeDetails') }})
    authorized_seller_status_details: Optional[shared_authorizedsellerstatusassignedtargetingoptiondetails.AuthorizedSellerStatusAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedSellerStatusDetails') }})
    browser_details: Optional[shared_browserassignedtargetingoptiondetails.BrowserAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserDetails') }})
    business_chain_details: Optional[shared_businesschainassignedtargetingoptiondetails.BusinessChainAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessChainDetails') }})
    carrier_and_isp_details: Optional[shared_carrierandispassignedtargetingoptiondetails.CarrierAndIspAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAndIspDetails') }})
    category_details: Optional[shared_categoryassignedtargetingoptiondetails.CategoryAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryDetails') }})
    channel_details: Optional[shared_channelassignedtargetingoptiondetails.ChannelAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelDetails') }})
    content_duration_details: Optional[shared_contentdurationassignedtargetingoptiondetails.ContentDurationAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDurationDetails') }})
    content_genre_details: Optional[shared_contentgenreassignedtargetingoptiondetails.ContentGenreAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentGenreDetails') }})
    content_instream_position_details: Optional[shared_contentinstreampositionassignedtargetingoptiondetails.ContentInstreamPositionAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentInstreamPositionDetails') }})
    content_outstream_position_details: Optional[shared_contentoutstreampositionassignedtargetingoptiondetails.ContentOutstreamPositionAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOutstreamPositionDetails') }})
    content_stream_type_details: Optional[shared_contentstreamtypeassignedtargetingoptiondetails.ContentStreamTypeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentStreamTypeDetails') }})
    day_and_time_details: Optional[shared_dayandtimeassignedtargetingoptiondetails.DayAndTimeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayAndTimeDetails') }})
    device_make_model_details: Optional[shared_devicemakemodelassignedtargetingoptiondetails.DeviceMakeModelAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMakeModelDetails') }})
    device_type_details: Optional[shared_devicetypeassignedtargetingoptiondetails.DeviceTypeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTypeDetails') }})
    digital_content_label_exclusion_details: Optional[shared_digitalcontentlabelassignedtargetingoptiondetails.DigitalContentLabelAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digitalContentLabelExclusionDetails') }})
    environment_details: Optional[shared_environmentassignedtargetingoptiondetails.EnvironmentAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentDetails') }})
    exchange_details: Optional[shared_exchangeassignedtargetingoptiondetails.ExchangeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeDetails') }})
    gender_details: Optional[shared_genderassignedtargetingoptiondetails.GenderAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genderDetails') }})
    geo_region_details: Optional[shared_georegionassignedtargetingoptiondetails.GeoRegionAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionDetails') }})
    household_income_details: Optional[shared_householdincomeassignedtargetingoptiondetails.HouseholdIncomeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('householdIncomeDetails') }})
    inheritance: Optional[AssignedTargetingOptionInheritanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritance') }})
    inventory_source_details: Optional[shared_inventorysourceassignedtargetingoptiondetails.InventorySourceAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceDetails') }})
    inventory_source_group_details: Optional[shared_inventorysourcegroupassignedtargetingoptiondetails.InventorySourceGroupAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceGroupDetails') }})
    keyword_details: Optional[shared_keywordassignedtargetingoptiondetails.KeywordAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordDetails') }})
    language_details: Optional[shared_languageassignedtargetingoptiondetails.LanguageAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageDetails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    native_content_position_details: Optional[shared_nativecontentpositionassignedtargetingoptiondetails.NativeContentPositionAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeContentPositionDetails') }})
    negative_keyword_list_details: Optional[shared_negativekeywordlistassignedtargetingoptiondetails.NegativeKeywordListAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywordListDetails') }})
    omid_details: Optional[shared_omidassignedtargetingoptiondetails.OmidAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omidDetails') }})
    on_screen_position_details: Optional[shared_onscreenpositionassignedtargetingoptiondetails.OnScreenPositionAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onScreenPositionDetails') }})
    operating_system_details: Optional[shared_operatingsystemassignedtargetingoptiondetails.OperatingSystemAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemDetails') }})
    parental_status_details: Optional[shared_parentalstatusassignedtargetingoptiondetails.ParentalStatusAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentalStatusDetails') }})
    poi_details: Optional[shared_poiassignedtargetingoptiondetails.PoiAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiDetails') }})
    proximity_location_list_details: Optional[shared_proximitylocationlistassignedtargetingoptiondetails.ProximityLocationListAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityLocationListDetails') }})
    regional_location_list_details: Optional[shared_regionallocationlistassignedtargetingoptiondetails.RegionalLocationListAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalLocationListDetails') }})
    sensitive_category_exclusion_details: Optional[shared_sensitivecategoryassignedtargetingoptiondetails.SensitiveCategoryAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveCategoryExclusionDetails') }})
    sub_exchange_details: Optional[shared_subexchangeassignedtargetingoptiondetails.SubExchangeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subExchangeDetails') }})
    targeting_type: Optional[AssignedTargetingOptionTargetingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingType') }})
    third_party_verifier_details: Optional[shared_thirdpartyverifierassignedtargetingoptiondetails.ThirdPartyVerifierAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyVerifierDetails') }})
    url_details: Optional[shared_urlassignedtargetingoptiondetails.URLAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlDetails') }})
    user_rewarded_content_details: Optional[shared_userrewardedcontentassignedtargetingoptiondetails.UserRewardedContentAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRewardedContentDetails') }})
    video_player_size_details: Optional[shared_videoplayersizeassignedtargetingoptiondetails.VideoPlayerSizeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPlayerSizeDetails') }})
    viewability_details: Optional[shared_viewabilityassignedtargetingoptiondetails.ViewabilityAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewabilityDetails') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignedTargetingOptionInput:
    r"""AssignedTargetingOptionInput
    A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
    """
    
    age_range_details: Optional[shared_agerangeassignedtargetingoptiondetails.AgeRangeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRangeDetails') }})
    app_category_details: Optional[shared_appcategoryassignedtargetingoptiondetails.AppCategoryAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appCategoryDetails') }})
    app_details: Optional[shared_appassignedtargetingoptiondetails.AppAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDetails') }})
    audience_group_details: Optional[shared_audiencegroupassignedtargetingoptiondetails.AudienceGroupAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceGroupDetails') }})
    audio_content_type_details: Optional[shared_audiocontenttypeassignedtargetingoptiondetails.AudioContentTypeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContentTypeDetails') }})
    authorized_seller_status_details: Optional[shared_authorizedsellerstatusassignedtargetingoptiondetails.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedSellerStatusDetails') }})
    browser_details: Optional[shared_browserassignedtargetingoptiondetails.BrowserAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserDetails') }})
    business_chain_details: Optional[shared_businesschainassignedtargetingoptiondetails.BusinessChainAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessChainDetails') }})
    carrier_and_isp_details: Optional[shared_carrierandispassignedtargetingoptiondetails.CarrierAndIspAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAndIspDetails') }})
    category_details: Optional[shared_categoryassignedtargetingoptiondetails.CategoryAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryDetails') }})
    channel_details: Optional[shared_channelassignedtargetingoptiondetails.ChannelAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelDetails') }})
    content_duration_details: Optional[shared_contentdurationassignedtargetingoptiondetails.ContentDurationAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDurationDetails') }})
    content_genre_details: Optional[shared_contentgenreassignedtargetingoptiondetails.ContentGenreAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentGenreDetails') }})
    content_instream_position_details: Optional[shared_contentinstreampositionassignedtargetingoptiondetails.ContentInstreamPositionAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentInstreamPositionDetails') }})
    content_outstream_position_details: Optional[shared_contentoutstreampositionassignedtargetingoptiondetails.ContentOutstreamPositionAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOutstreamPositionDetails') }})
    content_stream_type_details: Optional[shared_contentstreamtypeassignedtargetingoptiondetails.ContentStreamTypeAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentStreamTypeDetails') }})
    day_and_time_details: Optional[shared_dayandtimeassignedtargetingoptiondetails.DayAndTimeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayAndTimeDetails') }})
    device_make_model_details: Optional[shared_devicemakemodelassignedtargetingoptiondetails.DeviceMakeModelAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMakeModelDetails') }})
    device_type_details: Optional[shared_devicetypeassignedtargetingoptiondetails.DeviceTypeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTypeDetails') }})
    digital_content_label_exclusion_details: Optional[shared_digitalcontentlabelassignedtargetingoptiondetails.DigitalContentLabelAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digitalContentLabelExclusionDetails') }})
    environment_details: Optional[shared_environmentassignedtargetingoptiondetails.EnvironmentAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentDetails') }})
    exchange_details: Optional[shared_exchangeassignedtargetingoptiondetails.ExchangeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeDetails') }})
    gender_details: Optional[shared_genderassignedtargetingoptiondetails.GenderAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genderDetails') }})
    geo_region_details: Optional[shared_georegionassignedtargetingoptiondetails.GeoRegionAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionDetails') }})
    household_income_details: Optional[shared_householdincomeassignedtargetingoptiondetails.HouseholdIncomeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('householdIncomeDetails') }})
    inventory_source_details: Optional[shared_inventorysourceassignedtargetingoptiondetails.InventorySourceAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceDetails') }})
    inventory_source_group_details: Optional[shared_inventorysourcegroupassignedtargetingoptiondetails.InventorySourceGroupAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceGroupDetails') }})
    keyword_details: Optional[shared_keywordassignedtargetingoptiondetails.KeywordAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordDetails') }})
    language_details: Optional[shared_languageassignedtargetingoptiondetails.LanguageAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageDetails') }})
    native_content_position_details: Optional[shared_nativecontentpositionassignedtargetingoptiondetails.NativeContentPositionAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeContentPositionDetails') }})
    negative_keyword_list_details: Optional[shared_negativekeywordlistassignedtargetingoptiondetails.NegativeKeywordListAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywordListDetails') }})
    omid_details: Optional[shared_omidassignedtargetingoptiondetails.OmidAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omidDetails') }})
    on_screen_position_details: Optional[shared_onscreenpositionassignedtargetingoptiondetails.OnScreenPositionAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onScreenPositionDetails') }})
    operating_system_details: Optional[shared_operatingsystemassignedtargetingoptiondetails.OperatingSystemAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemDetails') }})
    parental_status_details: Optional[shared_parentalstatusassignedtargetingoptiondetails.ParentalStatusAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentalStatusDetails') }})
    poi_details: Optional[shared_poiassignedtargetingoptiondetails.PoiAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiDetails') }})
    proximity_location_list_details: Optional[shared_proximitylocationlistassignedtargetingoptiondetails.ProximityLocationListAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityLocationListDetails') }})
    regional_location_list_details: Optional[shared_regionallocationlistassignedtargetingoptiondetails.RegionalLocationListAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalLocationListDetails') }})
    sensitive_category_exclusion_details: Optional[shared_sensitivecategoryassignedtargetingoptiondetails.SensitiveCategoryAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveCategoryExclusionDetails') }})
    sub_exchange_details: Optional[shared_subexchangeassignedtargetingoptiondetails.SubExchangeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subExchangeDetails') }})
    third_party_verifier_details: Optional[shared_thirdpartyverifierassignedtargetingoptiondetails.ThirdPartyVerifierAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyVerifierDetails') }})
    url_details: Optional[shared_urlassignedtargetingoptiondetails.URLAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlDetails') }})
    user_rewarded_content_details: Optional[shared_userrewardedcontentassignedtargetingoptiondetails.UserRewardedContentAssignedTargetingOptionDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRewardedContentDetails') }})
    video_player_size_details: Optional[shared_videoplayersizeassignedtargetingoptiondetails.VideoPlayerSizeAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPlayerSizeDetails') }})
    viewability_details: Optional[shared_viewabilityassignedtargetingoptiondetails.ViewabilityAssignedTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewabilityDetails') }})
    
