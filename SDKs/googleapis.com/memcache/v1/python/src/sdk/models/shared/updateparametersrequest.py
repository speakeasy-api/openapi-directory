"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import memcacheparameters as shared_memcacheparameters
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateParametersRequestInput:
    r"""Request for UpdateParameters."""
    
    parameters: Optional[shared_memcacheparameters.MemcacheParametersInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('parameters'), 'exclude': lambda f: f is None }})  
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updateMask'), 'exclude': lambda f: f is None }})
    r"""Required. Mask of fields to update."""  
    