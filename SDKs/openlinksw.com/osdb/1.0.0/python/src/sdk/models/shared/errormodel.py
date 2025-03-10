"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ErrorModelStatusEnum(str, Enum):
    ERROR = 'error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ErrorModel:
    r"""Error response"""
    
    api: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('api'), 'exclude': lambda f: f is None }})
    r"""The path of the REST API method reporting the error"""  
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('method'), 'exclude': lambda f: f is None }})
    r"""The name of the REST API method reporting the error"""  
    response: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('response'), 'exclude': lambda f: f is None }})
    r"""A message describing the error"""  
    status: Optional[ErrorModelStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    