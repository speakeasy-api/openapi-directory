"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import tfl_api_presentation_entities_searchresponse as shared_tfl_api_presentation_entities_searchresponse
from typing import Optional


@dataclasses.dataclass
class SearchGetRequest:
    
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    r"""The search query"""  
    

@dataclasses.dataclass
class SearchGetResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    tfl_api_presentation_entities_search_response: Optional[shared_tfl_api_presentation_entities_searchresponse.TflAPIPresentationEntitiesSearchResponse] = dataclasses.field(default=None)
    r"""OK"""  
    