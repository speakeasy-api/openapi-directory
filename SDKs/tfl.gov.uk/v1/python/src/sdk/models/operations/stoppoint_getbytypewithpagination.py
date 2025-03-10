"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import tfl_api_presentation_entities_stoppoint as shared_tfl_api_presentation_entities_stoppoint
from typing import Optional


@dataclasses.dataclass
class StopPointGetByTypeWithPaginationRequest:
    
    page: int = dataclasses.field(metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})  
    types: list[str] = dataclasses.field(metadata={'path_param': { 'field_name': 'types', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class StopPointGetByTypeWithPaginationResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    tfl_api_presentation_entities_stop_points: Optional[list[shared_tfl_api_presentation_entities_stoppoint.TflAPIPresentationEntitiesStopPoint]] = dataclasses.field(default=None)
    r"""OK"""  
    