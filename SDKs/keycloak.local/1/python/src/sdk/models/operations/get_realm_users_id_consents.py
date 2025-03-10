"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Any, Optional


@dataclasses.dataclass
class GetRealmUsersIDConsentsRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""User id"""  
    realm: str = dataclasses.field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    r"""realm name (not id!)"""  
    

@dataclasses.dataclass
class GetRealmUsersIDConsentsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_realm_users_id_consents_2_xx_application_json_objects: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    r"""success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    