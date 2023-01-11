import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import creativeslistresponse as shared_creativeslistresponse


@dataclasses.dataclass
class DfareportingCreativesListPathParams:
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingCreativesListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingCreativesListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

class DfareportingCreativesListTypesEnum(str, Enum):
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


@dataclasses.dataclass
class DfareportingCreativesListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'active', 'style': 'form', 'explode': True }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advertiserId', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaignId', 'style': 'form', 'explode': True }})
    companion_creative_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'companionCreativeIds', 'style': 'form', 'explode': True }})
    creative_field_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'creativeFieldIds', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    rendering_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'renderingIds', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    size_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sizeIds', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingCreativesListSortFieldEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingCreativesListSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    studio_creative_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'studioCreativeId', 'style': 'form', 'explode': True }})
    types: Optional[list[DfareportingCreativesListTypesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DfareportingCreativesListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DfareportingCreativesListRequest:
    path_params: DfareportingCreativesListPathParams = dataclasses.field()
    query_params: DfareportingCreativesListQueryParams = dataclasses.field()
    security: DfareportingCreativesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DfareportingCreativesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    creatives_list_response: Optional[shared_creativeslistresponse.CreativesListResponse] = dataclasses.field(default=None)
    
