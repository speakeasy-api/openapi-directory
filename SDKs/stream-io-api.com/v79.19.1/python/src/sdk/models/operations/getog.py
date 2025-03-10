"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import apierror as shared_apierror
from typing import Any, Optional


@dataclasses.dataclass
class GetOGRequest:
    
    url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'url', 'serialization': 'json' }})  
    

@dataclasses.dataclass
class GetOGResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    r"""Bad request"""  
    get_og_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Get OG Attachment"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    