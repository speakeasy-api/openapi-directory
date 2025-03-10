"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import supersim_v1_sim as shared_supersim_v1_sim
from typing import Optional

FETCH_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class FetchSimSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class FetchSimRequest:
    
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    r"""The SID of the Sim resource to fetch."""  
    

@dataclasses.dataclass
class FetchSimResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    supersim_v1_sim: Optional[shared_supersim_v1_sim.SupersimV1Sim] = dataclasses.field(default=None)
    r"""OK"""  
    