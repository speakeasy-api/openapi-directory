"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import importresponse as shared_importresponse
from typing import Optional


@dataclasses.dataclass
class GetLatestImportStatusSecurity:
    
    zettle_oauth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class GetLatestImportStatusRequest:
    
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GetLatestImportStatusResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    import_response: Optional[shared_importresponse.ImportResponse] = dataclasses.field(default=None)
    r"""Import status"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    