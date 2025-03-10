"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import seasonteam as shared_seasonteam
from enum import Enum
from typing import Optional

class SeasonTeamsFormatEnum(str, Enum):
    r"""Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>."""
    XML = 'xml'
    JSON = 'json'


@dataclasses.dataclass
class SeasonTeamsRequest:
    
    format: SeasonTeamsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    r"""Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>."""  
    seasonid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'seasonid', 'style': 'simple', 'explode': False }})
    r"""Unique FantasyData Season ID. SeasonIDs can be found in the Competitions and Competition Details endpoints.
    Examples: <code>100000023</code>, <code>100000024</code>, etc
    """  
    

@dataclasses.dataclass
class SeasonTeamsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    season_teams: Optional[list[shared_seasonteam.SeasonTeam]] = dataclasses.field(default=None)  
    