import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import placementslistresponse as shared_placementslistresponse


@dataclasses.dataclass
class DfareportingPlacementsListPathParams:
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingPlacementsListCompatibilitiesEnum(str, Enum):
    DISPLAY = "DISPLAY"
    DISPLAY_INTERSTITIAL = "DISPLAY_INTERSTITIAL"
    APP = "APP"
    APP_INTERSTITIAL = "APP_INTERSTITIAL"
    IN_STREAM_VIDEO = "IN_STREAM_VIDEO"
    IN_STREAM_AUDIO = "IN_STREAM_AUDIO"

class DfareportingPlacementsListPaymentSourceEnum(str, Enum):
    PLACEMENT_AGENCY_PAID = "PLACEMENT_AGENCY_PAID"
    PLACEMENT_PUBLISHER_PAID = "PLACEMENT_PUBLISHER_PAID"

class DfareportingPlacementsListPricingTypesEnum(str, Enum):
    PRICING_TYPE_CPM = "PRICING_TYPE_CPM"
    PRICING_TYPE_CPC = "PRICING_TYPE_CPC"
    PRICING_TYPE_CPA = "PRICING_TYPE_CPA"
    PRICING_TYPE_FLAT_RATE_IMPRESSIONS = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    PRICING_TYPE_FLAT_RATE_CLICKS = "PRICING_TYPE_FLAT_RATE_CLICKS"
    PRICING_TYPE_CPM_ACTIVEVIEW = "PRICING_TYPE_CPM_ACTIVEVIEW"

class DfareportingPlacementsListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingPlacementsListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclasses.dataclass
class DfareportingPlacementsListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    advertiser_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advertiserIds', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaignIds', 'style': 'form', 'explode': True }})
    compatibilities: Optional[list[DfareportingPlacementsListCompatibilitiesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'compatibilities', 'style': 'form', 'explode': True }})
    content_category_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contentCategoryIds', 'style': 'form', 'explode': True }})
    directory_site_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'directorySiteIds', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupIds', 'style': 'form', 'explode': True }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxEndDate', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    max_start_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxStartDate', 'style': 'form', 'explode': True }})
    min_end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minEndDate', 'style': 'form', 'explode': True }})
    min_start_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minStartDate', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    payment_source: Optional[DfareportingPlacementsListPaymentSourceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paymentSource', 'style': 'form', 'explode': True }})
    placement_strategy_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'placementStrategyIds', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    pricing_types: Optional[list[DfareportingPlacementsListPricingTypesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pricingTypes', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    site_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'siteIds', 'style': 'form', 'explode': True }})
    size_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sizeIds', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingPlacementsListSortFieldEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingPlacementsListSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DfareportingPlacementsListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DfareportingPlacementsListRequest:
    path_params: DfareportingPlacementsListPathParams = dataclasses.field()
    query_params: DfareportingPlacementsListQueryParams = dataclasses.field()
    security: DfareportingPlacementsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DfareportingPlacementsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    placements_list_response: Optional[shared_placementslistresponse.PlacementsListResponse] = dataclasses.field(default=None)
    
