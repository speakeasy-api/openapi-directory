import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adtechnologyproviders as shared_adtechnologyproviders
from ..shared import correction as shared_correction
from ..shared import htmlcontent as shared_htmlcontent
from ..shared import nativecontent as shared_nativecontent
from ..shared import servingrestriction as shared_servingrestriction
from ..shared import videocontent as shared_videocontent

class CreativeAttributesEnum(str, Enum):
    ATTRIBUTE_UNSPECIFIED = "ATTRIBUTE_UNSPECIFIED"
    IMAGE_RICH_MEDIA = "IMAGE_RICH_MEDIA"
    ADOBE_FLASH_FLV = "ADOBE_FLASH_FLV"
    IS_TAGGED = "IS_TAGGED"
    IS_COOKIE_TARGETED = "IS_COOKIE_TARGETED"
    IS_USER_INTEREST_TARGETED = "IS_USER_INTEREST_TARGETED"
    EXPANDING_DIRECTION_NONE = "EXPANDING_DIRECTION_NONE"
    EXPANDING_DIRECTION_UP = "EXPANDING_DIRECTION_UP"
    EXPANDING_DIRECTION_DOWN = "EXPANDING_DIRECTION_DOWN"
    EXPANDING_DIRECTION_LEFT = "EXPANDING_DIRECTION_LEFT"
    EXPANDING_DIRECTION_RIGHT = "EXPANDING_DIRECTION_RIGHT"
    EXPANDING_DIRECTION_UP_LEFT = "EXPANDING_DIRECTION_UP_LEFT"
    EXPANDING_DIRECTION_UP_RIGHT = "EXPANDING_DIRECTION_UP_RIGHT"
    EXPANDING_DIRECTION_DOWN_LEFT = "EXPANDING_DIRECTION_DOWN_LEFT"
    EXPANDING_DIRECTION_DOWN_RIGHT = "EXPANDING_DIRECTION_DOWN_RIGHT"
    CREATIVE_TYPE_HTML = "CREATIVE_TYPE_HTML"
    CREATIVE_TYPE_VAST_VIDEO = "CREATIVE_TYPE_VAST_VIDEO"
    EXPANDING_DIRECTION_UP_OR_DOWN = "EXPANDING_DIRECTION_UP_OR_DOWN"
    EXPANDING_DIRECTION_LEFT_OR_RIGHT = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
    EXPANDING_DIRECTION_ANY_DIAGONAL = "EXPANDING_DIRECTION_ANY_DIAGONAL"
    EXPANDING_ACTION_ROLLOVER_TO_EXPAND = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND"
    INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH"
    RICH_MEDIA_CAPABILITY_TYPE_MRAID = "RICH_MEDIA_CAPABILITY_TYPE_MRAID"
    RICH_MEDIA_CAPABILITY_TYPE_FLASH = "RICH_MEDIA_CAPABILITY_TYPE_FLASH"
    RICH_MEDIA_CAPABILITY_TYPE_HTML5 = "RICH_MEDIA_CAPABILITY_TYPE_HTML5"
    SKIPPABLE_INSTREAM_VIDEO = "SKIPPABLE_INSTREAM_VIDEO"
    RICH_MEDIA_CAPABILITY_TYPE_SSL = "RICH_MEDIA_CAPABILITY_TYPE_SSL"
    RICH_MEDIA_CAPABILITY_TYPE_NON_SSL = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL"
    RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL"
    NON_SKIPPABLE_INSTREAM_VIDEO = "NON_SKIPPABLE_INSTREAM_VIDEO"
    NATIVE_ELIGIBILITY_ELIGIBLE = "NATIVE_ELIGIBILITY_ELIGIBLE"
    NON_VPAID = "NON_VPAID"
    NATIVE_ELIGIBILITY_NOT_ELIGIBLE = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE"
    ANY_INTERSTITIAL = "ANY_INTERSTITIAL"
    NON_INTERSTITIAL = "NON_INTERSTITIAL"
    IN_BANNER_VIDEO = "IN_BANNER_VIDEO"
    RENDERING_SIZELESS_ADX = "RENDERING_SIZELESS_ADX"
    OMSDK_1_0 = "OMSDK_1_0"

class CreativeDealsStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    NOT_CHECKED = "NOT_CHECKED"
    CONDITIONALLY_APPROVED = "CONDITIONALLY_APPROVED"
    APPROVED = "APPROVED"
    DISAPPROVED = "DISAPPROVED"
    PENDING_REVIEW = "PENDING_REVIEW"
    STATUS_TYPE_UNSPECIFIED = "STATUS_TYPE_UNSPECIFIED"

class CreativeOpenAuctionStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    NOT_CHECKED = "NOT_CHECKED"
    CONDITIONALLY_APPROVED = "CONDITIONALLY_APPROVED"
    APPROVED = "APPROVED"
    DISAPPROVED = "DISAPPROVED"
    PENDING_REVIEW = "PENDING_REVIEW"
    STATUS_TYPE_UNSPECIFIED = "STATUS_TYPE_UNSPECIFIED"

class CreativeRestrictedCategoriesEnum(str, Enum):
    NO_RESTRICTED_CATEGORIES = "NO_RESTRICTED_CATEGORIES"
    ALCOHOL = "ALCOHOL"


@dataclass_json
@dataclasses.dataclass
class Creative:
    r"""Creative
    A creative and its classification data.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    ad_choices_destination_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adChoicesDestinationUrl') }})
    ad_technology_providers: Optional[shared_adtechnologyproviders.AdTechnologyProviders] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adTechnologyProviders') }})
    advertiser_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserName') }})
    agency_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agencyId') }})
    api_update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiUpdateTime') }})
    attributes: Optional[list[CreativeAttributesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    click_through_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrls') }})
    corrections: Optional[list[shared_correction.Correction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corrections') }})
    creative_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeId') }})
    deals_status: Optional[CreativeDealsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealsStatus') }})
    declared_click_through_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('declaredClickThroughUrls') }})
    detected_advertiser_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedAdvertiserIds') }})
    detected_domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedDomains') }})
    detected_languages: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    detected_product_categories: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedProductCategories') }})
    detected_sensitive_categories: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedSensitiveCategories') }})
    html: Optional[shared_htmlcontent.HTMLContent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    impression_tracking_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionTrackingUrls') }})
    native: Optional[shared_nativecontent.NativeContent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('native') }})
    open_auction_status: Optional[CreativeOpenAuctionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openAuctionStatus') }})
    restricted_categories: Optional[list[CreativeRestrictedCategoriesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedCategories') }})
    serving_restrictions: Optional[list[shared_servingrestriction.ServingRestriction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingRestrictions') }})
    vendor_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendorIds') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    video: Optional[shared_videocontent.VideoContent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    
