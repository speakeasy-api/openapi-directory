"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import httpstatusvo as shared_httpstatusvo
from ..shared import specpersistvo as shared_specpersistvo
from ..shared import specvo as shared_specvo
from typing import Optional


@dataclasses.dataclass
class PostSpecJSONRequest:
    
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})  
    workgroup_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})  
    spec_persist_vo: Optional[shared_specpersistvo.SpecPersistVO] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class PostSpecJSONResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    http_status_vo: Optional[shared_httpstatusvo.HTTPStatusVO] = dataclasses.field(default=None)
    r"""Invalid data"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    spec_vo: Optional[shared_specvo.SpecVO] = dataclasses.field(default=None)
    r"""Successful created"""  
    