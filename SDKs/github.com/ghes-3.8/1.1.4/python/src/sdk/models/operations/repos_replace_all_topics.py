"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import topic as shared_topic
from ..shared import validation_error_simple as shared_validation_error_simple
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposReplaceAllTopicsRequestBody:
    
    names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('names') }})
    r"""An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters."""  
    

@dataclasses.dataclass
class ReposReplaceAllTopicsRequest:
    
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    request_body: ReposReplaceAllTopicsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class ReposReplaceAllTopicsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Resource not found"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    topic: Optional[shared_topic.Topic] = dataclasses.field(default=None)
    r"""Response"""  
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    r"""Validation failed, or the endpoint has been spammed."""  
    