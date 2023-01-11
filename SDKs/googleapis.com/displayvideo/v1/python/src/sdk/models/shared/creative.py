import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensions as shared_dimensions
from ..shared import assetassociation as shared_assetassociation
from ..shared import cmtrackingad as shared_cmtrackingad
from ..shared import counterevent as shared_counterevent
from ..shared import exitevent as shared_exitevent
from ..shared import obaicon as shared_obaicon
from ..shared import audiovideooffset as shared_audiovideooffset
from ..shared import reviewstatusinfo as shared_reviewstatusinfo
from ..shared import thirdpartyurl as shared_thirdpartyurl
from ..shared import timerevent as shared_timerevent
from ..shared import transcode as shared_transcode
from ..shared import universaladid as shared_universaladid

class CreativeCreativeAttributesEnum(str, Enum):
    CREATIVE_ATTRIBUTE_UNSPECIFIED = "CREATIVE_ATTRIBUTE_UNSPECIFIED"
    CREATIVE_ATTRIBUTE_VAST = "CREATIVE_ATTRIBUTE_VAST"
    CREATIVE_ATTRIBUTE_VPAID_LINEAR = "CREATIVE_ATTRIBUTE_VPAID_LINEAR"
    CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR = "CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR"

class CreativeCreativeTypeEnum(str, Enum):
    CREATIVE_TYPE_UNSPECIFIED = "CREATIVE_TYPE_UNSPECIFIED"
    CREATIVE_TYPE_STANDARD = "CREATIVE_TYPE_STANDARD"
    CREATIVE_TYPE_EXPANDABLE = "CREATIVE_TYPE_EXPANDABLE"
    CREATIVE_TYPE_VIDEO = "CREATIVE_TYPE_VIDEO"
    CREATIVE_TYPE_NATIVE = "CREATIVE_TYPE_NATIVE"
    CREATIVE_TYPE_TEMPLATED_APP_INSTALL = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL"
    CREATIVE_TYPE_NATIVE_SITE_SQUARE = "CREATIVE_TYPE_NATIVE_SITE_SQUARE"
    CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL"
    CREATIVE_TYPE_LIGHTBOX = "CREATIVE_TYPE_LIGHTBOX"
    CREATIVE_TYPE_NATIVE_APP_INSTALL = "CREATIVE_TYPE_NATIVE_APP_INSTALL"
    CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE"
    CREATIVE_TYPE_AUDIO = "CREATIVE_TYPE_AUDIO"
    CREATIVE_TYPE_PUBLISHER_HOSTED = "CREATIVE_TYPE_PUBLISHER_HOSTED"
    CREATIVE_TYPE_NATIVE_VIDEO = "CREATIVE_TYPE_NATIVE_VIDEO"
    CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"

class CreativeEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"

class CreativeExpandingDirectionEnum(str, Enum):
    EXPANDING_DIRECTION_UNSPECIFIED = "EXPANDING_DIRECTION_UNSPECIFIED"
    EXPANDING_DIRECTION_NONE = "EXPANDING_DIRECTION_NONE"
    EXPANDING_DIRECTION_UP = "EXPANDING_DIRECTION_UP"
    EXPANDING_DIRECTION_DOWN = "EXPANDING_DIRECTION_DOWN"
    EXPANDING_DIRECTION_LEFT = "EXPANDING_DIRECTION_LEFT"
    EXPANDING_DIRECTION_RIGHT = "EXPANDING_DIRECTION_RIGHT"
    EXPANDING_DIRECTION_UP_AND_LEFT = "EXPANDING_DIRECTION_UP_AND_LEFT"
    EXPANDING_DIRECTION_UP_AND_RIGHT = "EXPANDING_DIRECTION_UP_AND_RIGHT"
    EXPANDING_DIRECTION_DOWN_AND_LEFT = "EXPANDING_DIRECTION_DOWN_AND_LEFT"
    EXPANDING_DIRECTION_DOWN_AND_RIGHT = "EXPANDING_DIRECTION_DOWN_AND_RIGHT"
    EXPANDING_DIRECTION_UP_OR_DOWN = "EXPANDING_DIRECTION_UP_OR_DOWN"
    EXPANDING_DIRECTION_LEFT_OR_RIGHT = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
    EXPANDING_DIRECTION_ANY_DIAGONAL = "EXPANDING_DIRECTION_ANY_DIAGONAL"

class CreativeHostingSourceEnum(str, Enum):
    HOSTING_SOURCE_UNSPECIFIED = "HOSTING_SOURCE_UNSPECIFIED"
    HOSTING_SOURCE_CM = "HOSTING_SOURCE_CM"
    HOSTING_SOURCE_THIRD_PARTY = "HOSTING_SOURCE_THIRD_PARTY"
    HOSTING_SOURCE_HOSTED = "HOSTING_SOURCE_HOSTED"
    HOSTING_SOURCE_RICH_MEDIA = "HOSTING_SOURCE_RICH_MEDIA"


@dataclass_json
@dataclasses.dataclass
class Creative:
    r"""Creative
    A single Creative.
    """
    
    additional_dimensions: Optional[list[shared_dimensions.Dimensions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalDimensions') }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    appended_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appendedTag') }})
    assets: Optional[list[shared_assetassociation.AssetAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    cm_placement_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmPlacementId') }})
    cm_tracking_ad: Optional[shared_cmtrackingad.CmTrackingAd] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmTrackingAd') }})
    companion_creative_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionCreativeIds') }})
    counter_events: Optional[list[shared_counterevent.CounterEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counterEvents') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creative_attributes: Optional[list[CreativeCreativeAttributesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeAttributes') }})
    creative_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeId') }})
    creative_type: Optional[CreativeCreativeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeType') }})
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dynamic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamic') }})
    entity_status: Optional[CreativeEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    exit_events: Optional[list[shared_exitevent.ExitEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitEvents') }})
    expand_on_hover: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandOnHover') }})
    expanding_direction: Optional[CreativeExpandingDirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandingDirection') }})
    hosting_source: Optional[CreativeHostingSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostingSource') }})
    html5_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html5Video') }})
    ias_campaign_monitoring: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iasCampaignMonitoring') }})
    integration_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationCode') }})
    js_tracker_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsTrackerUrl') }})
    line_item_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemIds') }})
    media_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaDuration') }})
    mp3_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mp3Audio') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    oba_icon: Optional[shared_obaicon.ObaIcon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaIcon') }})
    ogg_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oggAudio') }})
    progress_offset: Optional[shared_audiovideooffset.AudioVideoOffset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressOffset') }})
    require_html5: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireHtml5') }})
    require_mraid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireMraid') }})
    require_ping_for_attribution: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirePingForAttribution') }})
    review_status: Optional[shared_reviewstatusinfo.ReviewStatusInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewStatus') }})
    skip_offset: Optional[shared_audiovideooffset.AudioVideoOffset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipOffset') }})
    skippable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippable') }})
    third_party_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyTag') }})
    third_party_urls: Optional[list[shared_thirdpartyurl.ThirdPartyURL]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyUrls') }})
    timer_events: Optional[list[shared_timerevent.TimerEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerEvents') }})
    tracker_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackerUrls') }})
    transcodes: Optional[list[shared_transcode.Transcode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcodes') }})
    universal_ad_id: Optional[shared_universaladid.UniversalAdID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalAdId') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vast_tag_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vastTagUrl') }})
    vpaid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpaid') }})
    

@dataclass_json
@dataclasses.dataclass
class CreativeInput:
    r"""CreativeInput
    A single Creative.
    """
    
    additional_dimensions: Optional[list[shared_dimensions.Dimensions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalDimensions') }})
    appended_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appendedTag') }})
    assets: Optional[list[shared_assetassociation.AssetAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    cm_tracking_ad: Optional[shared_cmtrackingad.CmTrackingAd] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmTrackingAd') }})
    companion_creative_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionCreativeIds') }})
    counter_events: Optional[list[shared_counterevent.CounterEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counterEvents') }})
    creative_type: Optional[CreativeCreativeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeType') }})
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[CreativeEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    exit_events: Optional[list[shared_exitevent.ExitEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitEvents') }})
    expand_on_hover: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandOnHover') }})
    expanding_direction: Optional[CreativeExpandingDirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandingDirection') }})
    hosting_source: Optional[CreativeHostingSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostingSource') }})
    ias_campaign_monitoring: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iasCampaignMonitoring') }})
    integration_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationCode') }})
    js_tracker_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsTrackerUrl') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    oba_icon: Optional[shared_obaicon.ObaIcon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaIcon') }})
    progress_offset: Optional[shared_audiovideooffset.AudioVideoOffset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressOffset') }})
    require_html5: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireHtml5') }})
    require_mraid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireMraid') }})
    require_ping_for_attribution: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirePingForAttribution') }})
    review_status: Optional[shared_reviewstatusinfo.ReviewStatusInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewStatus') }})
    skip_offset: Optional[shared_audiovideooffset.AudioVideoOffset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipOffset') }})
    skippable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippable') }})
    third_party_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyTag') }})
    third_party_urls: Optional[list[shared_thirdpartyurl.ThirdPartyURL]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyUrls') }})
    timer_events: Optional[list[shared_timerevent.TimerEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerEvents') }})
    tracker_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackerUrls') }})
    universal_ad_id: Optional[shared_universaladid.UniversalAdID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalAdId') }})
    vast_tag_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vastTagUrl') }})
    
