"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import tenantgroup as shared_tenantgroup
from ..shared import writabletenantgroup as shared_writabletenantgroup
from typing import Optional


@dataclasses.dataclass
class TenancyTenantGroupsUpdateRequest:
    
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""A unique integer value identifying this tenant group."""  
    writable_tenant_group_input: shared_writabletenantgroup.WritableTenantGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class TenancyTenantGroupsUpdateResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    tenant_group: Optional[shared_tenantgroup.TenantGroup] = dataclasses.field(default=None)  
    