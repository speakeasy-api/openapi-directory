"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import retrievewagesettingresponse as shared_retrievewagesettingresponse
from typing import Optional


@dataclasses.dataclass
class RetrieveWageSettingSecurity:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class RetrieveWageSettingRequest:
    
    team_member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_member_id', 'style': 'simple', 'explode': False }})
    r"""The ID of the team member for which to retrieve the wage setting."""  
    

@dataclasses.dataclass
class RetrieveWageSettingResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    retrieve_wage_setting_response: Optional[shared_retrievewagesettingresponse.RetrieveWageSettingResponse] = dataclasses.field(default=None)
    r"""Success"""  
    