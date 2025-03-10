"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import team as shared_team
from ..shared import validation_error as shared_validation_error
from typing import Optional


@dataclasses.dataclass
class TeamsListChildLegacyRequest:
    
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the team."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""The number of results per page (max 100)."""  
    

@dataclasses.dataclass
class TeamsListChildLegacyResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Forbidden"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    teams: Optional[list[shared_team.Team]] = dataclasses.field(default=None)
    r"""if child teams exist"""  
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    r"""Validation failed, or the endpoint has been spammed."""  
    