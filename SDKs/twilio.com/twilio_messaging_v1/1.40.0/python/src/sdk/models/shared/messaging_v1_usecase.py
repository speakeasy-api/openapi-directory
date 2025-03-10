"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class MessagingV1Usecase:
    r"""OK"""
    
    usecases: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('usecases'), 'exclude': lambda f: f is None }})
    r"""Human readable use case details (usecase, description and purpose) of Messaging Service Use Cases."""  
    