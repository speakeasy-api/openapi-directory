"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import rolerepresentation as shared_rolerepresentation
from typing import Optional


@dataclasses.dataclass
class GetRealmGroupsIDRoleMappingsClientsClientAvailableRequest:
    
    client: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client', 'style': 'simple', 'explode': False }})  
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})  
    realm: str = dataclasses.field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    r"""realm name (not id!)"""  
    

@dataclasses.dataclass
class GetRealmGroupsIDRoleMappingsClientsClientAvailableResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    role_representations: Optional[list[shared_rolerepresentation.RoleRepresentation]] = dataclasses.field(default=None)
    r"""success"""  
    