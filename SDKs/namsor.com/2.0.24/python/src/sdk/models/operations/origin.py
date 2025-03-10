"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import firstlastnameoriginedout as shared_firstlastnameoriginedout
from typing import Optional


@dataclasses.dataclass
class OriginSecurity:
    
    api_key: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-API-KEY' }})  
    

@dataclasses.dataclass
class OriginRequest:
    
    first_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})  
    last_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class OriginResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    first_last_name_origined_out: Optional[shared_firstlastnameoriginedout.FirstLastNameOriginedOut] = dataclasses.field(default=None)
    r"""A origined name."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    