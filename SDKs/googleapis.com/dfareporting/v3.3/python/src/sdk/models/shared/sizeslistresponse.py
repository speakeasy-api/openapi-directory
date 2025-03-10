"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import size as shared_size
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SizesListResponse:
    r"""Size List Response"""
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""Identifies what kind of resource this is. Value: the fixed string \\"dfareporting#sizesListResponse\\"."""  
    sizes: Optional[list[shared_size.Size]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sizes'), 'exclude': lambda f: f is None }})
    r"""Size collection."""  
    