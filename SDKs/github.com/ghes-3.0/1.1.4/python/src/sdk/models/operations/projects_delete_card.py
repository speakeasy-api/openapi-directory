"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class ProjectsDeleteCardRequest:
    
    card_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    r"""card_id parameter"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProjectsDeleteCard403ApplicationJSON:
    r"""Forbidden"""
    
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('documentation_url'), 'exclude': lambda f: f is None }})  
    errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errors'), 'exclude': lambda f: f is None }})  
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class ProjectsDeleteCardResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Requires authentication"""  
    projects_delete_card_403_application_json_object: Optional[ProjectsDeleteCard403ApplicationJSON] = dataclasses.field(default=None)
    r"""Forbidden"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    