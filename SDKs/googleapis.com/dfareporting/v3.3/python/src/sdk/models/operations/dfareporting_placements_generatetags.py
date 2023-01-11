import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import placementsgeneratetagsresponse as shared_placementsgeneratetagsresponse


@dataclasses.dataclass
class DfareportingPlacementsGeneratetagsPathParams:
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingPlacementsGeneratetagsTagFormatsEnum(str, Enum):
    PLACEMENT_TAG_STANDARD = "PLACEMENT_TAG_STANDARD"
    PLACEMENT_TAG_IFRAME_JAVASCRIPT = "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
    PLACEMENT_TAG_IFRAME_ILAYER = "PLACEMENT_TAG_IFRAME_ILAYER"
    PLACEMENT_TAG_INTERNAL_REDIRECT = "PLACEMENT_TAG_INTERNAL_REDIRECT"
    PLACEMENT_TAG_JAVASCRIPT = "PLACEMENT_TAG_JAVASCRIPT"
    PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
    PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
    PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
    PLACEMENT_TAG_CLICK_COMMANDS = "PLACEMENT_TAG_CLICK_COMMANDS"
    PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
    PLACEMENT_TAG_TRACKING = "PLACEMENT_TAG_TRACKING"
    PLACEMENT_TAG_TRACKING_IFRAME = "PLACEMENT_TAG_TRACKING_IFRAME"
    PLACEMENT_TAG_TRACKING_JAVASCRIPT = "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
    PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
    PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
    PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"


@dataclasses.dataclass
class DfareportingPlacementsGeneratetagsQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaignId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    placement_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'placementIds', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    tag_formats: Optional[list[DfareportingPlacementsGeneratetagsTagFormatsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagFormats', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DfareportingPlacementsGeneratetagsSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DfareportingPlacementsGeneratetagsRequest:
    path_params: DfareportingPlacementsGeneratetagsPathParams = dataclasses.field()
    query_params: DfareportingPlacementsGeneratetagsQueryParams = dataclasses.field()
    security: DfareportingPlacementsGeneratetagsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DfareportingPlacementsGeneratetagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    placements_generate_tags_response: Optional[shared_placementsgeneratetagsresponse.PlacementsGenerateTagsResponse] = dataclasses.field(default=None)
    
