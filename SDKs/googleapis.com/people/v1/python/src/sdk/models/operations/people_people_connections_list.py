import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listconnectionsresponse as shared_listconnectionsresponse


@dataclasses.dataclass
class PeoplePeopleConnectionsListPathParams:
    resource_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'resourceName', 'style': 'simple', 'explode': False }})
    
class PeoplePeopleConnectionsListSortOrderEnum(str, Enum):
    LAST_MODIFIED_ASCENDING = "LAST_MODIFIED_ASCENDING"
    LAST_MODIFIED_DESCENDING = "LAST_MODIFIED_DESCENDING"
    FIRST_NAME_ASCENDING = "FIRST_NAME_ASCENDING"
    LAST_NAME_ASCENDING = "LAST_NAME_ASCENDING"

class PeoplePeopleConnectionsListSourcesEnum(str, Enum):
    READ_SOURCE_TYPE_UNSPECIFIED = "READ_SOURCE_TYPE_UNSPECIFIED"
    READ_SOURCE_TYPE_PROFILE = "READ_SOURCE_TYPE_PROFILE"
    READ_SOURCE_TYPE_CONTACT = "READ_SOURCE_TYPE_CONTACT"
    READ_SOURCE_TYPE_DOMAIN_CONTACT = "READ_SOURCE_TYPE_DOMAIN_CONTACT"


@dataclasses.dataclass
class PeoplePeopleConnectionsListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    person_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'personFields', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    request_mask_include_field: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'requestMask.includeField', 'style': 'form', 'explode': True }})
    request_sync_token: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'requestSyncToken', 'style': 'form', 'explode': True }})
    sort_order: Optional[PeoplePeopleConnectionsListSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    sources: Optional[list[PeoplePeopleConnectionsListSourcesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sources', 'style': 'form', 'explode': True }})
    sync_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'syncToken', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PeoplePeopleConnectionsListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PeoplePeopleConnectionsListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PeoplePeopleConnectionsListSecurity:
    option1: Optional[PeoplePeopleConnectionsListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PeoplePeopleConnectionsListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class PeoplePeopleConnectionsListRequest:
    path_params: PeoplePeopleConnectionsListPathParams = dataclasses.field()
    query_params: PeoplePeopleConnectionsListQueryParams = dataclasses.field()
    security: PeoplePeopleConnectionsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PeoplePeopleConnectionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_connections_response: Optional[shared_listconnectionsresponse.ListConnectionsResponse] = dataclasses.field(default=None)
    
