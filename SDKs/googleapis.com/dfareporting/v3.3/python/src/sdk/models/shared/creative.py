import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import size as shared_size
from ..shared import creativeclickthroughurl as shared_creativeclickthroughurl
from ..shared import targetwindow as shared_targetwindow
from ..shared import clicktag as shared_clicktag
from ..shared import creativecustomevent as shared_creativecustomevent
from ..shared import creativeassetselection as shared_creativeassetselection
from ..shared import creativeasset as shared_creativeasset
from ..shared import creativefieldassignment as shared_creativefieldassignment
from ..shared import fscommand as shared_fscommand
from ..shared import dimensionvalue as shared_dimensionvalue
from ..shared import lastmodifiedinfo as shared_lastmodifiedinfo
from ..shared import videooffset as shared_videooffset
from ..shared import thirdpartytrackingurl as shared_thirdpartytrackingurl
from ..shared import universaladid as shared_universaladid

class CreativeArtworkTypeEnum(str, Enum):
    ARTWORK_TYPE_FLASH = "ARTWORK_TYPE_FLASH"
    ARTWORK_TYPE_HTML5 = "ARTWORK_TYPE_HTML5"
    ARTWORK_TYPE_MIXED = "ARTWORK_TYPE_MIXED"
    ARTWORK_TYPE_IMAGE = "ARTWORK_TYPE_IMAGE"

class CreativeAuthoringSourceEnum(str, Enum):
    CREATIVE_AUTHORING_SOURCE_DCM = "CREATIVE_AUTHORING_SOURCE_DCM"
    CREATIVE_AUTHORING_SOURCE_DBM = "CREATIVE_AUTHORING_SOURCE_DBM"
    CREATIVE_AUTHORING_SOURCE_STUDIO = "CREATIVE_AUTHORING_SOURCE_STUDIO"
    CREATIVE_AUTHORING_SOURCE_GWD = "CREATIVE_AUTHORING_SOURCE_GWD"

class CreativeAuthoringToolEnum(str, Enum):
    NINJA = "NINJA"
    SWIFFY = "SWIFFY"

class CreativeBackupImageFeaturesEnum(str, Enum):
    CSS_FONT_FACE = "CSS_FONT_FACE"
    CSS_BACKGROUND_SIZE = "CSS_BACKGROUND_SIZE"
    CSS_BORDER_IMAGE = "CSS_BORDER_IMAGE"
    CSS_BORDER_RADIUS = "CSS_BORDER_RADIUS"
    CSS_BOX_SHADOW = "CSS_BOX_SHADOW"
    CSS_FLEX_BOX = "CSS_FLEX_BOX"
    CSS_HSLA = "CSS_HSLA"
    CSS_MULTIPLE_BGS = "CSS_MULTIPLE_BGS"
    CSS_OPACITY = "CSS_OPACITY"
    CSS_RGBA = "CSS_RGBA"
    CSS_TEXT_SHADOW = "CSS_TEXT_SHADOW"
    CSS_ANIMATIONS = "CSS_ANIMATIONS"
    CSS_COLUMNS = "CSS_COLUMNS"
    CSS_GENERATED_CONTENT = "CSS_GENERATED_CONTENT"
    CSS_GRADIENTS = "CSS_GRADIENTS"
    CSS_REFLECTIONS = "CSS_REFLECTIONS"
    CSS_TRANSFORMS = "CSS_TRANSFORMS"
    CSS_TRANSFORMS3_D = "CSS_TRANSFORMS3D"
    CSS_TRANSITIONS = "CSS_TRANSITIONS"
    APPLICATION_CACHE = "APPLICATION_CACHE"
    CANVAS = "CANVAS"
    CANVAS_TEXT = "CANVAS_TEXT"
    DRAG_AND_DROP = "DRAG_AND_DROP"
    HASH_CHANGE = "HASH_CHANGE"
    HISTORY = "HISTORY"
    AUDIO = "AUDIO"
    VIDEO = "VIDEO"
    INDEXED_DB = "INDEXED_DB"
    INPUT_ATTR_AUTOCOMPLETE = "INPUT_ATTR_AUTOCOMPLETE"
    INPUT_ATTR_AUTOFOCUS = "INPUT_ATTR_AUTOFOCUS"
    INPUT_ATTR_LIST = "INPUT_ATTR_LIST"
    INPUT_ATTR_PLACEHOLDER = "INPUT_ATTR_PLACEHOLDER"
    INPUT_ATTR_MAX = "INPUT_ATTR_MAX"
    INPUT_ATTR_MIN = "INPUT_ATTR_MIN"
    INPUT_ATTR_MULTIPLE = "INPUT_ATTR_MULTIPLE"
    INPUT_ATTR_PATTERN = "INPUT_ATTR_PATTERN"
    INPUT_ATTR_REQUIRED = "INPUT_ATTR_REQUIRED"
    INPUT_ATTR_STEP = "INPUT_ATTR_STEP"
    INPUT_TYPE_SEARCH = "INPUT_TYPE_SEARCH"
    INPUT_TYPE_TEL = "INPUT_TYPE_TEL"
    INPUT_TYPE_URL = "INPUT_TYPE_URL"
    INPUT_TYPE_EMAIL = "INPUT_TYPE_EMAIL"
    INPUT_TYPE_DATETIME = "INPUT_TYPE_DATETIME"
    INPUT_TYPE_DATE = "INPUT_TYPE_DATE"
    INPUT_TYPE_MONTH = "INPUT_TYPE_MONTH"
    INPUT_TYPE_WEEK = "INPUT_TYPE_WEEK"
    INPUT_TYPE_TIME = "INPUT_TYPE_TIME"
    INPUT_TYPE_DATETIME_LOCAL = "INPUT_TYPE_DATETIME_LOCAL"
    INPUT_TYPE_NUMBER = "INPUT_TYPE_NUMBER"
    INPUT_TYPE_RANGE = "INPUT_TYPE_RANGE"
    INPUT_TYPE_COLOR = "INPUT_TYPE_COLOR"
    LOCAL_STORAGE = "LOCAL_STORAGE"
    POST_MESSAGE = "POST_MESSAGE"
    SESSION_STORAGE = "SESSION_STORAGE"
    WEB_SOCKETS = "WEB_SOCKETS"
    WEB_SQL_DATABASE = "WEB_SQL_DATABASE"
    WEB_WORKERS = "WEB_WORKERS"
    GEO_LOCATION = "GEO_LOCATION"
    INLINE_SVG = "INLINE_SVG"
    SMIL = "SMIL"
    SVG_HREF = "SVG_HREF"
    SVG_CLIP_PATHS = "SVG_CLIP_PATHS"
    TOUCH = "TOUCH"
    WEBGL = "WEBGL"
    SVG_FILTERS = "SVG_FILTERS"
    SVG_FE_IMAGE = "SVG_FE_IMAGE"

class CreativeCompatibilityEnum(str, Enum):
    DISPLAY = "DISPLAY"
    DISPLAY_INTERSTITIAL = "DISPLAY_INTERSTITIAL"
    APP = "APP"
    APP_INTERSTITIAL = "APP_INTERSTITIAL"
    IN_STREAM_VIDEO = "IN_STREAM_VIDEO"
    IN_STREAM_AUDIO = "IN_STREAM_AUDIO"

class CreativeTypeEnum(str, Enum):
    IMAGE = "IMAGE"
    DISPLAY_REDIRECT = "DISPLAY_REDIRECT"
    CUSTOM_DISPLAY = "CUSTOM_DISPLAY"
    INTERNAL_REDIRECT = "INTERNAL_REDIRECT"
    CUSTOM_DISPLAY_INTERSTITIAL = "CUSTOM_DISPLAY_INTERSTITIAL"
    INTERSTITIAL_INTERNAL_REDIRECT = "INTERSTITIAL_INTERNAL_REDIRECT"
    TRACKING_TEXT = "TRACKING_TEXT"
    RICH_MEDIA_DISPLAY_BANNER = "RICH_MEDIA_DISPLAY_BANNER"
    RICH_MEDIA_INPAGE_FLOATING = "RICH_MEDIA_INPAGE_FLOATING"
    RICH_MEDIA_IM_EXPAND = "RICH_MEDIA_IM_EXPAND"
    RICH_MEDIA_DISPLAY_EXPANDING = "RICH_MEDIA_DISPLAY_EXPANDING"
    RICH_MEDIA_DISPLAY_INTERSTITIAL = "RICH_MEDIA_DISPLAY_INTERSTITIAL"
    RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL"
    RICH_MEDIA_MOBILE_IN_APP = "RICH_MEDIA_MOBILE_IN_APP"
    FLASH_INPAGE = "FLASH_INPAGE"
    INSTREAM_VIDEO = "INSTREAM_VIDEO"
    VPAID_LINEAR_VIDEO = "VPAID_LINEAR_VIDEO"
    VPAID_NON_LINEAR_VIDEO = "VPAID_NON_LINEAR_VIDEO"
    INSTREAM_VIDEO_REDIRECT = "INSTREAM_VIDEO_REDIRECT"
    RICH_MEDIA_PEEL_DOWN = "RICH_MEDIA_PEEL_DOWN"
    HTML5_BANNER = "HTML5_BANNER"
    DISPLAY = "DISPLAY"
    DISPLAY_IMAGE_GALLERY = "DISPLAY_IMAGE_GALLERY"
    BRAND_SAFE_DEFAULT_INSTREAM_VIDEO = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO"
    INSTREAM_AUDIO = "INSTREAM_AUDIO"


@dataclass_json
@dataclasses.dataclass
class Creative:
    r"""Creative
    Contains properties of a Creative.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    ad_parameters: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adParameters') }})
    ad_tag_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adTagKeys') }})
    additional_sizes: Optional[list[shared_size.Size]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalSizes') }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    allow_script_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowScriptAccess') }})
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    artwork_type: Optional[CreativeArtworkTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artworkType') }})
    authoring_source: Optional[CreativeAuthoringSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authoringSource') }})
    authoring_tool: Optional[CreativeAuthoringToolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authoringTool') }})
    auto_advance_images: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoAdvanceImages') }})
    background_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    backup_image_click_through_url: Optional[shared_creativeclickthroughurl.CreativeClickThroughURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupImageClickThroughUrl') }})
    backup_image_features: Optional[list[CreativeBackupImageFeaturesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupImageFeatures') }})
    backup_image_reporting_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupImageReportingLabel') }})
    backup_image_target_window: Optional[shared_targetwindow.TargetWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupImageTargetWindow') }})
    click_tags: Optional[list[shared_clicktag.ClickTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickTags') }})
    commercial_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commercialId') }})
    companion_creatives: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionCreatives') }})
    compatibility: Optional[list[CreativeCompatibilityEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility') }})
    convert_flash_to_html5: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertFlashToHtml5') }})
    counter_custom_events: Optional[list[shared_creativecustomevent.CreativeCustomEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counterCustomEvents') }})
    creative_asset_selection: Optional[shared_creativeassetselection.CreativeAssetSelection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeAssetSelection') }})
    creative_assets: Optional[list[shared_creativeasset.CreativeAsset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeAssets') }})
    creative_field_assignments: Optional[list[shared_creativefieldassignment.CreativeFieldAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeFieldAssignments') }})
    custom_key_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customKeyValues') }})
    dynamic_asset_selection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicAssetSelection') }})
    exit_custom_events: Optional[list[shared_creativecustomevent.CreativeCustomEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCustomEvents') }})
    fs_command: Optional[shared_fscommand.FsCommand] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fsCommand') }})
    html_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlCode') }})
    html_code_locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlCodeLocked') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_info: Optional[shared_lastmodifiedinfo.LastModifiedInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedInfo') }})
    latest_trafficked_creative_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestTraffickedCreativeId') }})
    media_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaDescription') }})
    media_duration: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaDuration') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    override_css: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideCss') }})
    progress_offset: Optional[shared_videooffset.VideoOffset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressOffset') }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUrl') }})
    rendering_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderingId') }})
    rendering_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderingIdDimensionValue') }})
    required_flash_plugin_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredFlashPluginVersion') }})
    required_flash_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredFlashVersion') }})
    size: Optional[shared_size.Size] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    skip_offset: Optional[shared_videooffset.VideoOffset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipOffset') }})
    skippable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippable') }})
    ssl_compliant: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCompliant') }})
    ssl_override: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslOverride') }})
    studio_advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioAdvertiserId') }})
    studio_creative_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioCreativeId') }})
    studio_trafficked_creative_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioTraffickedCreativeId') }})
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    third_party_backup_image_impressions_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyBackupImageImpressionsUrl') }})
    third_party_rich_media_impressions_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyRichMediaImpressionsUrl') }})
    third_party_urls: Optional[list[shared_thirdpartytrackingurl.ThirdPartyTrackingURL]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyUrls') }})
    timer_custom_events: Optional[list[shared_creativecustomevent.CreativeCustomEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerCustomEvents') }})
    total_file_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFileSize') }})
    type: Optional[CreativeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    universal_ad_id: Optional[shared_universaladid.UniversalAdID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalAdId') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
