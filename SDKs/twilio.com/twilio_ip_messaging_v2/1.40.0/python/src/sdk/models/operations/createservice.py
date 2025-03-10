"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import ip_messaging_v2_service as shared_ip_messaging_v2_service
from typing import Optional

CREATE_SERVICE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class CreateServiceSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class CreateServiceCreateServiceRequest:
    
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})  
    

@dataclasses.dataclass
class CreateServiceResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    ip_messaging_v2_service: Optional[shared_ip_messaging_v2_service.IPMessagingV2Service] = dataclasses.field(default=None)
    r"""Created"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    