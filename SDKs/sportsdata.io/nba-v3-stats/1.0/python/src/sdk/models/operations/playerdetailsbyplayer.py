"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import player as shared_player
from enum import Enum
from typing import Optional

class PlayerDetailsByPlayerFormatEnum(str, Enum):
    r"""Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>."""
    XML = 'XML'
    JSON = 'JSON'


@dataclasses.dataclass
class PlayerDetailsByPlayerRequest:
    
    format: PlayerDetailsByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    r"""Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>."""  
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    r"""Unique FantasyData Player ID.
    Example:<code>20000571</code>.
    """  
    

@dataclasses.dataclass
class PlayerDetailsByPlayerResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    player: Optional[shared_player.Player] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    