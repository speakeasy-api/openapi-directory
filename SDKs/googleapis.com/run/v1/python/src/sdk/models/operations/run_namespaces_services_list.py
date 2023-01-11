import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listservicesresponse as shared_listservicesresponse


@dataclasses.dataclass
class RunNamespacesServicesListPathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RunNamespacesServicesListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    continue_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'continue', 'style': 'form', 'explode': True }})
    field_selector: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fieldSelector', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_uninitialized: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeUninitialized', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    label_selector: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'labelSelector', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    resource_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceVersion', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    watch: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'watch', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RunNamespacesServicesListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RunNamespacesServicesListRequest:
    path_params: RunNamespacesServicesListPathParams = dataclasses.field()
    query_params: RunNamespacesServicesListQueryParams = dataclasses.field()
    security: RunNamespacesServicesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RunNamespacesServicesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_services_response: Optional[shared_listservicesresponse.ListServicesResponse] = dataclasses.field(default=None)
    
