"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Optional

DELETE_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteCallRecordingSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class DeleteCallRecordingRequest:
    
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    r"""The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resources to delete."""  
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    r"""The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to delete."""  
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    r"""The Twilio-provided string that uniquely identifies the Recording resource to delete."""  
    

@dataclasses.dataclass
class DeleteCallRecordingResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    