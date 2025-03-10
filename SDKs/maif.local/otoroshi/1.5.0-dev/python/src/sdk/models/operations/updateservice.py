"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import service as shared_service
from typing import Optional


@dataclasses.dataclass
class UpdateServiceSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class UpdateServiceRequest:
    
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    r"""The service id"""  
    service: Optional[shared_service.Service] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class UpdateServiceResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    service: Optional[shared_service.Service] = dataclasses.field(default=None)
    r"""Successful operation"""  
    