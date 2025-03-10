"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import pre_receive_environment as shared_pre_receive_environment
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody:
    
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('image_url'), 'exclude': lambda f: f is None }})
    r"""URL from which to download a tarball of this environment."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""This pre-receive environment's new name."""  
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentRequest:
    
    pre_receive_environment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the pre-receive environment."""  
    request_body: Optional[EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors:
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code'), 'exclude': lambda f: f is None }})  
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})  
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resource'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON:
    r"""Client Errors"""
    
    errors: Optional[list[EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errors'), 'exclude': lambda f: f is None }})  
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    enterprise_admin_update_pre_receive_environment_422_application_json_object: Optional[EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON] = dataclasses.field(default=None)
    r"""Client Errors"""  
    pre_receive_environment: Optional[shared_pre_receive_environment.PreReceiveEnvironment] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    