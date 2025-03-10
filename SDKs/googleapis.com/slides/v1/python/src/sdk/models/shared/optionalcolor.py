"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import opaquecolor as shared_opaquecolor
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class OptionalColor:
    r"""A color that can either be fully opaque or fully transparent."""
    
    opaque_color: Optional[shared_opaquecolor.OpaqueColor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('opaqueColor'), 'exclude': lambda f: f is None }})
    r"""A themeable solid color value."""  
    