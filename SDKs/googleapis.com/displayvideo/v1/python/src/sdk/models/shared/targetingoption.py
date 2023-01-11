import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agerangetargetingoptiondetails as shared_agerangetargetingoptiondetails
from ..shared import appcategorytargetingoptiondetails as shared_appcategorytargetingoptiondetails
from ..shared import audiocontenttypetargetingoptiondetails as shared_audiocontenttypetargetingoptiondetails
from ..shared import authorizedsellerstatustargetingoptiondetails as shared_authorizedsellerstatustargetingoptiondetails
from ..shared import browsertargetingoptiondetails as shared_browsertargetingoptiondetails
from ..shared import businesschaintargetingoptiondetails as shared_businesschaintargetingoptiondetails
from ..shared import carrierandisptargetingoptiondetails as shared_carrierandisptargetingoptiondetails
from ..shared import categorytargetingoptiondetails as shared_categorytargetingoptiondetails
from ..shared import contentdurationtargetingoptiondetails as shared_contentdurationtargetingoptiondetails
from ..shared import contentgenretargetingoptiondetails as shared_contentgenretargetingoptiondetails
from ..shared import contentinstreampositiontargetingoptiondetails as shared_contentinstreampositiontargetingoptiondetails
from ..shared import contentoutstreampositiontargetingoptiondetails as shared_contentoutstreampositiontargetingoptiondetails
from ..shared import contentstreamtypetargetingoptiondetails as shared_contentstreamtypetargetingoptiondetails
from ..shared import devicemakemodeltargetingoptiondetails as shared_devicemakemodeltargetingoptiondetails
from ..shared import devicetypetargetingoptiondetails as shared_devicetypetargetingoptiondetails
from ..shared import digitalcontentlabeltargetingoptiondetails as shared_digitalcontentlabeltargetingoptiondetails
from ..shared import environmenttargetingoptiondetails as shared_environmenttargetingoptiondetails
from ..shared import exchangetargetingoptiondetails as shared_exchangetargetingoptiondetails
from ..shared import gendertargetingoptiondetails as shared_gendertargetingoptiondetails
from ..shared import georegiontargetingoptiondetails as shared_georegiontargetingoptiondetails
from ..shared import householdincometargetingoptiondetails as shared_householdincometargetingoptiondetails
from ..shared import languagetargetingoptiondetails as shared_languagetargetingoptiondetails
from ..shared import nativecontentpositiontargetingoptiondetails as shared_nativecontentpositiontargetingoptiondetails
from ..shared import omidtargetingoptiondetails as shared_omidtargetingoptiondetails
from ..shared import onscreenpositiontargetingoptiondetails as shared_onscreenpositiontargetingoptiondetails
from ..shared import operatingsystemtargetingoptiondetails as shared_operatingsystemtargetingoptiondetails
from ..shared import parentalstatustargetingoptiondetails as shared_parentalstatustargetingoptiondetails
from ..shared import poitargetingoptiondetails as shared_poitargetingoptiondetails
from ..shared import sensitivecategorytargetingoptiondetails as shared_sensitivecategorytargetingoptiondetails
from ..shared import subexchangetargetingoptiondetails as shared_subexchangetargetingoptiondetails
from ..shared import userrewardedcontenttargetingoptiondetails as shared_userrewardedcontenttargetingoptiondetails
from ..shared import videoplayersizetargetingoptiondetails as shared_videoplayersizetargetingoptiondetails
from ..shared import viewabilitytargetingoptiondetails as shared_viewabilitytargetingoptiondetails

class TargetingOptionTargetingTypeEnum(str, Enum):
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
class TargetingOption:
    r"""TargetingOption
    Represents a single targeting option, which is a targetable concept in DV360.
    """
    
    age_range_details: Optional[shared_agerangetargetingoptiondetails.AgeRangeTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRangeDetails') }})
    app_category_details: Optional[shared_appcategorytargetingoptiondetails.AppCategoryTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appCategoryDetails') }})
    audio_content_type_details: Optional[shared_audiocontenttypetargetingoptiondetails.AudioContentTypeTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContentTypeDetails') }})
    authorized_seller_status_details: Optional[shared_authorizedsellerstatustargetingoptiondetails.AuthorizedSellerStatusTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedSellerStatusDetails') }})
    browser_details: Optional[shared_browsertargetingoptiondetails.BrowserTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserDetails') }})
    business_chain_details: Optional[shared_businesschaintargetingoptiondetails.BusinessChainTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessChainDetails') }})
    carrier_and_isp_details: Optional[shared_carrierandisptargetingoptiondetails.CarrierAndIspTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAndIspDetails') }})
    category_details: Optional[shared_categorytargetingoptiondetails.CategoryTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryDetails') }})
    content_duration_details: Optional[shared_contentdurationtargetingoptiondetails.ContentDurationTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDurationDetails') }})
    content_genre_details: Optional[shared_contentgenretargetingoptiondetails.ContentGenreTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentGenreDetails') }})
    content_instream_position_details: Optional[shared_contentinstreampositiontargetingoptiondetails.ContentInstreamPositionTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentInstreamPositionDetails') }})
    content_outstream_position_details: Optional[shared_contentoutstreampositiontargetingoptiondetails.ContentOutstreamPositionTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOutstreamPositionDetails') }})
    content_stream_type_details: Optional[shared_contentstreamtypetargetingoptiondetails.ContentStreamTypeTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentStreamTypeDetails') }})
    device_make_model_details: Optional[shared_devicemakemodeltargetingoptiondetails.DeviceMakeModelTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMakeModelDetails') }})
    device_type_details: Optional[shared_devicetypetargetingoptiondetails.DeviceTypeTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTypeDetails') }})
    digital_content_label_details: Optional[shared_digitalcontentlabeltargetingoptiondetails.DigitalContentLabelTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digitalContentLabelDetails') }})
    environment_details: Optional[shared_environmenttargetingoptiondetails.EnvironmentTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentDetails') }})
    exchange_details: Optional[shared_exchangetargetingoptiondetails.ExchangeTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeDetails') }})
    gender_details: Optional[shared_gendertargetingoptiondetails.GenderTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genderDetails') }})
    geo_region_details: Optional[shared_georegiontargetingoptiondetails.GeoRegionTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionDetails') }})
    household_income_details: Optional[shared_householdincometargetingoptiondetails.HouseholdIncomeTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('householdIncomeDetails') }})
    language_details: Optional[shared_languagetargetingoptiondetails.LanguageTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageDetails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    native_content_position_details: Optional[shared_nativecontentpositiontargetingoptiondetails.NativeContentPositionTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeContentPositionDetails') }})
    omid_details: Optional[shared_omidtargetingoptiondetails.OmidTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omidDetails') }})
    on_screen_position_details: Optional[shared_onscreenpositiontargetingoptiondetails.OnScreenPositionTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onScreenPositionDetails') }})
    operating_system_details: Optional[shared_operatingsystemtargetingoptiondetails.OperatingSystemTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemDetails') }})
    parental_status_details: Optional[shared_parentalstatustargetingoptiondetails.ParentalStatusTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentalStatusDetails') }})
    poi_details: Optional[shared_poitargetingoptiondetails.PoiTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiDetails') }})
    sensitive_category_details: Optional[shared_sensitivecategorytargetingoptiondetails.SensitiveCategoryTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveCategoryDetails') }})
    sub_exchange_details: Optional[shared_subexchangetargetingoptiondetails.SubExchangeTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subExchangeDetails') }})
    targeting_option_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    targeting_type: Optional[TargetingOptionTargetingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingType') }})
    user_rewarded_content_details: Optional[shared_userrewardedcontenttargetingoptiondetails.UserRewardedContentTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRewardedContentDetails') }})
    video_player_size_details: Optional[shared_videoplayersizetargetingoptiondetails.VideoPlayerSizeTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPlayerSizeDetails') }})
    viewability_details: Optional[shared_viewabilitytargetingoptiondetails.ViewabilityTargetingOptionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewabilityDetails') }})
    
