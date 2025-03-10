"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment as shared_trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment
from typing import Optional

FETCH_CUSTOMER_PROFILE_CHANNEL_ENDPOINT_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class FetchCustomerProfileChannelEndpointAssignmentSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class FetchCustomerProfileChannelEndpointAssignmentRequest:
    
    customer_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    r"""The unique string that we created to identify the CustomerProfile resource."""  
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    r"""The unique string that we created to identify the resource."""  
    

@dataclasses.dataclass
class FetchCustomerProfileChannelEndpointAssignmentResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment: Optional[shared_trusthub_v1_customer_profile_customer_profile_channel_endpoint_assignment.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment] = dataclasses.field(default=None)
    r"""OK"""  
    