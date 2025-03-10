"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import playergame as shared_playergame
from enum import Enum
from typing import Optional

class PlayerGameLogsBySeasonFormatEnum(str, Enum):
    r"""Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>."""
    JSON = 'JSON'
    XML = 'XML'


@dataclasses.dataclass
class PlayerGameLogsBySeasonRequest:
    
    format: PlayerGameLogsBySeasonFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    r"""Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>."""  
    numberofgames: str = dataclasses.field(metadata={'path_param': { 'field_name': 'numberofgames', 'style': 'simple', 'explode': False }})
    r"""How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>"""  
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    r"""Unique FantasyData Player ID. Example:<code>17920</code>."""  
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    r"""Season to get games from. Example <code>2019POST</code>, <code>2020</code>"""  
    

@dataclasses.dataclass
class PlayerGameLogsBySeasonResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    player_games: Optional[list[shared_playergame.PlayerGame]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    