"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import searchteammembersresponse as shared_searchteammembersresponse
from typing import Optional


@dataclasses.dataclass
class SearchTeamMembersSecurity:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class SearchTeamMembersResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    search_team_members_response: Optional[shared_searchteammembersresponse.SearchTeamMembersResponse] = dataclasses.field(default=None)
    r"""Success"""  
    