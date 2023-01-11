import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import adslistresponse as shared_adslistresponse


@dataclasses.dataclass
class DfareportingAdsListPathParams:
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingAdsListCompatibilityEnum(str, Enum):
    DISPLAY = "DISPLAY"
    DISPLAY_INTERSTITIAL = "DISPLAY_INTERSTITIAL"
    APP = "APP"
    APP_INTERSTITIAL = "APP_INTERSTITIAL"
    IN_STREAM_VIDEO = "IN_STREAM_VIDEO"
    IN_STREAM_AUDIO = "IN_STREAM_AUDIO"

class DfareportingAdsListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingAdsListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

class DfareportingAdsListTypeEnum(str, Enum):
    AD_SERVING_STANDARD_AD = "AD_SERVING_STANDARD_AD"
    AD_SERVING_DEFAULT_AD = "AD_SERVING_DEFAULT_AD"
    AD_SERVING_CLICK_TRACKER = "AD_SERVING_CLICK_TRACKER"
    AD_SERVING_TRACKING = "AD_SERVING_TRACKING"
    AD_SERVING_BRAND_SAFE_AD = "AD_SERVING_BRAND_SAFE_AD"


@dataclasses.dataclass
class DfareportingAdsListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'active', 'style': 'form', 'explode': True }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advertiserId', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    audience_segment_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'audienceSegmentIds', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaignIds', 'style': 'form', 'explode': True }})
    compatibility: Optional[DfareportingAdsListCompatibilityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'compatibility', 'style': 'form', 'explode': True }})
    creative_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'creativeIds', 'style': 'form', 'explode': True }})
    creative_optimization_configuration_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'creativeOptimizationConfigurationIds', 'style': 'form', 'explode': True }})
    dynamic_click_tracker: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dynamicClickTracker', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    landing_page_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'landingPageIds', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    overridden_event_tag_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'overriddenEventTagId', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    placement_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'placementIds', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    remarketing_list_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'remarketingListIds', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    size_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sizeIds', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingAdsListSortFieldEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingAdsListSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    ssl_compliant: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sslCompliant', 'style': 'form', 'explode': True }})
    ssl_required: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sslRequired', 'style': 'form', 'explode': True }})
    type: Optional[list[DfareportingAdsListTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DfareportingAdsListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DfareportingAdsListRequest:
    path_params: DfareportingAdsListPathParams = dataclasses.field()
    query_params: DfareportingAdsListQueryParams = dataclasses.field()
    security: DfareportingAdsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DfareportingAdsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ads_list_response: Optional[shared_adslistresponse.AdsListResponse] = dataclasses.field(default=None)
    
