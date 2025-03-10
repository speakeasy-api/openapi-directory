"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import brand as shared_brand
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListBrandsResponse:
    r"""Response message for ListBrands."""
    
    brands: Optional[list[shared_brand.Brand]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('brands'), 'exclude': lambda f: f is None }})
    r"""Brands existing in the project."""  
    