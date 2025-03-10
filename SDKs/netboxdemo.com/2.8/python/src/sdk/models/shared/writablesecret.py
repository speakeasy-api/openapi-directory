"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class WritableSecretInput:
    
    device: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('device') }})  
    plaintext: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('plaintext') }})  
    role: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('role') }})  
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('custom_fields'), 'exclude': lambda f: f is None }})  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})  
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tags'), 'exclude': lambda f: f is None }})  
    