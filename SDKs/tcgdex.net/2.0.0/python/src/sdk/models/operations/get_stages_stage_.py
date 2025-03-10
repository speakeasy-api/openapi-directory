"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import cardresume as shared_cardresume
from typing import Optional


@dataclasses.dataclass
class GetStagesStageRequest:
    
    stage: str = dataclasses.field(metadata={'path_param': { 'field_name': 'stage', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GetStagesStageResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    card_resumes: Optional[list[shared_cardresume.CardResume]] = dataclasses.field(default=None)
    r"""Get all the cards having the specified stage"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    