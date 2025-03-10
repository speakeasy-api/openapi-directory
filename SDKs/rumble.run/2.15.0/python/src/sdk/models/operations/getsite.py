"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import site as shared_site
from typing import Optional


@dataclasses.dataclass
class GetSiteSecurity:
    
    bearer_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class GetSiteRequest:
    
    site_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    r"""UUID or name of the site"""  
    

@dataclasses.dataclass
class GetSiteResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    site: Optional[shared_site.Site] = dataclasses.field(default=None)
    r"""site details"""  
    