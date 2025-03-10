"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import framework as shared_framework
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class GetFrameworksIDRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""Object Id"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetFrameworksID404ApplicationJSON:
    r"""Not found"""
    
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail'), 'exclude': lambda f: f is None }})
    r"""Not found."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetFrameworksID401ApplicationJSON:
    r"""Access token is missing or invalid"""
    
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class GetFrameworksIDResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    framework: Optional[shared_framework.Framework] = dataclasses.field(default=None)
    r"""Framework object"""  
    get_frameworks_id_401_application_json_object: Optional[GetFrameworksID401ApplicationJSON] = dataclasses.field(default=None)
    r"""Access token is missing or invalid"""  
    get_frameworks_id_404_application_json_object: Optional[GetFrameworksID404ApplicationJSON] = dataclasses.field(default=None)
    r"""Not found"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    