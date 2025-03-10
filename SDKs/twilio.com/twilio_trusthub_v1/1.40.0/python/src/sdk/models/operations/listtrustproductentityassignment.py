"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import trusthub_v1_trust_product_trust_product_entity_assignment as shared_trusthub_v1_trust_product_trust_product_entity_assignment
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional

LIST_TRUST_PRODUCT_ENTITY_ASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class ListTrustProductEntityAssignmentSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class ListTrustProductEntityAssignmentRequest:
    
    trust_product_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    r"""The unique string that we created to identify the TrustProduct resource."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Page', 'style': 'form', 'explode': True }})
    r"""The page index. This value is simply for client state."""  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    r"""How many resources to return in each list page. The default is 50, and the maximum is 1000."""  
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    r"""The page token. This is provided by the API."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta:
    
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('first_page_url'), 'exclude': lambda f: f is None }})  
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('key'), 'exclude': lambda f: f is None }})  
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('next_page_url'), 'exclude': lambda f: f is None }})  
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page'), 'exclude': lambda f: f is None }})  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page_size'), 'exclude': lambda f: f is None }})  
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('previous_page_url'), 'exclude': lambda f: f is None }})  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse:
    r"""OK"""
    
    meta: Optional[ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('meta'), 'exclude': lambda f: f is None }})  
    results: Optional[list[shared_trusthub_v1_trust_product_trust_product_entity_assignment.TrusthubV1TrustProductTrustProductEntityAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('results'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class ListTrustProductEntityAssignmentResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    list_trust_product_entity_assignment_response: Optional[ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    