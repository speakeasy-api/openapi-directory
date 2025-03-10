"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
import requests as requests_http
from ..shared import git_tag as shared_git_tag
from ..shared import validation_error as shared_validation_error
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GitCreateTagRequestBodyTagger:
    r"""An object with information about the individual creating the tag."""
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email') }})
    r"""The email of the author of the tag"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""The name of the author of the tag"""  
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`."""  
    
class GitCreateTagRequestBodyTypeEnum(str, Enum):
    r"""The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`."""
    COMMIT = 'commit'
    TREE = 'tree'
    BLOB = 'blob'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GitCreateTagRequestBody:
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message') }})
    r"""The tag message."""  
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('object') }})
    r"""The SHA of the git object this is tagging."""  
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tag') }})
    r"""The tag's name. This is typically a version (e.g., \\"v0.0.1\\")."""  
    type: GitCreateTagRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})
    r"""The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`."""  
    tagger: Optional[GitCreateTagRequestBodyTagger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tagger'), 'exclude': lambda f: f is None }})
    r"""An object with information about the individual creating the tag."""  
    

@dataclasses.dataclass
class GitCreateTagRequest:
    
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    request_body: GitCreateTagRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class GitCreateTagResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    git_tag: Optional[shared_git_tag.GitTag] = dataclasses.field(default=None)
    r"""Response"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    r"""Validation failed, or the endpoint has been spammed."""  
    