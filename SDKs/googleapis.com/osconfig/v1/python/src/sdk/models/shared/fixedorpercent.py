"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class FixedOrPercent:
    r"""Message encapsulating a value that can be either absolute (\\"fixed\\") or relative (\\"percent\\") to a value."""
    
    fixed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fixed'), 'exclude': lambda f: f is None }})
    r"""Specifies a fixed value."""  
    percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('percent'), 'exclude': lambda f: f is None }})
    r"""Specifies the relative value defined as a percentage, which will be multiplied by a reference value."""  
    