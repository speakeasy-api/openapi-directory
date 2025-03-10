"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import error as shared_error
from typing import Any, Optional


@dataclasses.dataclass
class PutAPIV1AnnouncementsIDReactionsNameSecurity:
    
    bearer_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class PutAPIV1AnnouncementsIDReactionsNameRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""Local ID of an announcement in the database."""  
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    r"""Unicode emoji, or shortcode of custom emoji"""  
    

@dataclasses.dataclass
class PutAPIV1AnnouncementsIDReactionsNameResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""Unprocessable Entity"""  
    put_api_v1_announcements_id_reactions_name_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    