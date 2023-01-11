import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import managedzoneoperationslistresponse as shared_managedzoneoperationslistresponse
from ..operations import _xgafv_enum as operations__xgafv_enum
from ..operations import alt_enum as operations_alt_enum
from ..operations import security as operations_security
from ..operations import security as operations_security
from ..operations import managedzoneoperationslistresponse as operations_managedzoneoperationslistresponse


@dataclasses.dataclass
class DNSManagedZoneOperationsListPathParams:
    location: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    managed_zone: str = dataclasses.field(metadata={'path_param': { 'field_name': 'managedZone', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    
class DNSManagedZoneOperationsListSortByEnum(str, Enum):
    START_TIME = "START_TIME"
    ID = "ID"


@dataclasses.dataclass
class DNSManagedZoneOperationsListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    sort_by: Optional[DNSManagedZoneOperationsListSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DNSManagedZoneOperationsListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DNSManagedZoneOperationsListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DNSManagedZoneOperationsListSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DNSManagedZoneOperationsListSecurityOption4:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DNSManagedZoneOperationsListSecurity:
    option1: Optional[DNSManagedZoneOperationsListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DNSManagedZoneOperationsListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DNSManagedZoneOperationsListSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DNSManagedZoneOperationsListSecurityOption4] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class DNSManagedZoneOperationsListRequest:
    path_params: DNSManagedZoneOperationsListPathParams = dataclasses.field()
    query_params: DNSManagedZoneOperationsListQueryParams = dataclasses.field()
    security: DNSManagedZoneOperationsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DNSManagedZoneOperationsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    managed_zone_operations_list_response: Optional[shared_managedzoneoperationslistresponse.ManagedZoneOperationsListResponse] = dataclasses.field(default=None)
    
