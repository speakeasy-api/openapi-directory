"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import rolerepresentation as shared_rolerepresentation
from typing import Optional


@dataclasses.dataclass
class DeleteRealmRolesRoleNameCompositesRequest:
    
    realm: str = dataclasses.field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    r"""realm name (not id!)"""  
    request_body: list[shared_rolerepresentation.RoleRepresentation] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    r"""roles to remove"""  
    role_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    r"""role’s name (not id!)"""  
    

@dataclasses.dataclass
class DeleteRealmRolesRoleNameCompositesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    