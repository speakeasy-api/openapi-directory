"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import trendingsearchesresponse as shared_trendingsearchesresponse
from typing import Optional


@dataclasses.dataclass
class GetTrendingSearchesRequest:
    
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    r"""Get API Key on listennotes.com/api"""  
    

@dataclasses.dataclass
class GetTrendingSearchesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    trending_searches_response: Optional[shared_trendingsearchesresponse.TrendingSearchesResponse] = dataclasses.field(default=None)
    r"""OK"""  
    