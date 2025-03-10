"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import team_full as shared_team_full
from typing import Optional


@dataclasses.dataclass
class TeamsGetLegacyRequest:
    
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the team."""  
    

@dataclasses.dataclass
class TeamsGetLegacyResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Resource not found"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    team_full: Optional[shared_team_full.TeamFull] = dataclasses.field(default=None)
    r"""Response"""  
    