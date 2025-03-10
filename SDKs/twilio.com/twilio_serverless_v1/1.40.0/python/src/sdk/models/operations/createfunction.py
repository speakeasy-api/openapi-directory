"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import serverless_v1_service_function as shared_serverless_v1_service_function
from typing import Optional

CREATE_FUNCTION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class CreateFunctionSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class CreateFunctionCreateFunctionRequest:
    
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    r"""A descriptive string that you create to describe the Function resource. It can be a maximum of 255 characters."""  
    

@dataclasses.dataclass
class CreateFunctionRequest:
    
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    r"""The SID of the Service to create the Function resource under."""  
    request_body: Optional[CreateFunctionCreateFunctionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})  
    

@dataclasses.dataclass
class CreateFunctionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    serverless_v1_service_function: Optional[shared_serverless_v1_service_function.ServerlessV1ServiceFunction] = dataclasses.field(default=None)
    r"""Created"""  
    