"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import breaktype as shared_breaktype
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateBreakTypeRequest:
    r"""A request to create a new `BreakType`."""
    
    break_type: shared_breaktype.BreakType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('break_type') }})
    r"""A defined break template that sets an expectation for possible `Break`
    instances on a `Shift`.
    """  
    idempotency_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('idempotency_key'), 'exclude': lambda f: f is None }})
    r"""A unique string value to ensure the idempotency of the operation."""  
    