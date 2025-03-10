"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import location as shared_location
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CompanyDerivedInfo:
    r"""Derived details about the company."""
    
    headquarters_location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('headquartersLocation'), 'exclude': lambda f: f is None }})
    r"""Output only. A resource that represents a location with full geographic information."""  
    