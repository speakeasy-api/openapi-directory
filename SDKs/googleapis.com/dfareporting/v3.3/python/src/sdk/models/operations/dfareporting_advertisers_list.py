import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import advertiserslistresponse as shared_advertiserslistresponse


@dataclasses.dataclass
class DfareportingAdvertisersListPathParams:
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingAdvertisersListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingAdvertisersListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

class DfareportingAdvertisersListStatusEnum(str, Enum):
    APPROVED = "APPROVED"
    ON_HOLD = "ON_HOLD"


@dataclasses.dataclass
class DfareportingAdvertisersListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    advertiser_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'advertiserGroupIds', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    floodlight_configuration_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'floodlightConfigurationIds', 'style': 'form', 'explode': True }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    include_advertisers_without_groups_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeAdvertisersWithoutGroupsOnly', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    only_parent: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onlyParent', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingAdvertisersListSortFieldEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingAdvertisersListSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    status: Optional[DfareportingAdvertisersListStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subaccountId', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DfareportingAdvertisersListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DfareportingAdvertisersListRequest:
    path_params: DfareportingAdvertisersListPathParams = dataclasses.field()
    query_params: DfareportingAdvertisersListQueryParams = dataclasses.field()
    security: DfareportingAdvertisersListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DfareportingAdvertisersListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    advertisers_list_response: Optional[shared_advertiserslistresponse.AdvertisersListResponse] = dataclasses.field(default=None)
    
