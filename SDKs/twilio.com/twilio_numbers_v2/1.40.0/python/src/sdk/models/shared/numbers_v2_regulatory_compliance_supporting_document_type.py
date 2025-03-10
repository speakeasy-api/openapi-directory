"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NumbersV2RegulatoryComplianceSupportingDocumentType:
    r"""OK"""
    
    fields_: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fields'), 'exclude': lambda f: f is None }})
    r"""The required information for creating a Supporting Document. The required fields will change as regulatory needs change and will differ for businesses and individuals."""  
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('friendly_name'), 'exclude': lambda f: f is None }})
    r"""A human-readable description of the Supporting Document Type resource."""  
    machine_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('machine_name'), 'exclude': lambda f: f is None }})
    r"""The machine-readable description of the Supporting Document Type resource."""  
    sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sid'), 'exclude': lambda f: f is None }})
    r"""The unique string that identifies the Supporting Document Type resource."""  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})
    r"""The absolute URL of the Supporting Document Type resource."""  
    