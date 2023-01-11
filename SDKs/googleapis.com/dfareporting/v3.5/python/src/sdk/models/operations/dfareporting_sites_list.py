import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import siteslistresponse as shared_siteslistresponse


@dataclasses.dataclass
class DfareportingSitesListPathParams:
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingSitesListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingSitesListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclasses.dataclass
class DfareportingSitesListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    accepts_in_stream_video_placements: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'acceptsInStreamVideoPlacements', 'style': 'form', 'explode': True }})
    accepts_interstitial_placements: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'acceptsInterstitialPlacements', 'style': 'form', 'explode': True }})
    accepts_publisher_paid_placements: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'acceptsPublisherPaidPlacements', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    ad_words_site: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'adWordsSite', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    approved: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'approved', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaignIds', 'style': 'form', 'explode': True }})
    directory_site_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'directorySiteIds', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingSitesListSortFieldEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingSitesListSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subaccountId', 'style': 'form', 'explode': True }})
    unmapped_site: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unmappedSite', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DfareportingSitesListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DfareportingSitesListRequest:
    path_params: DfareportingSitesListPathParams = dataclasses.field()
    query_params: DfareportingSitesListQueryParams = dataclasses.field()
    security: DfareportingSitesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DfareportingSitesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sites_list_response: Optional[shared_siteslistresponse.SitesListResponse] = dataclasses.field(default=None)
    
