"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import money as shared_money
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ConvertedRegionPrice:
    r"""A converted region price."""
    
    price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('price'), 'exclude': lambda f: f is None }})
    r"""Represents an amount of money with its currency type."""  
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('regionCode'), 'exclude': lambda f: f is None }})
    r"""The region code of the region."""  
    tax_amount: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxAmount'), 'exclude': lambda f: f is None }})
    r"""Represents an amount of money with its currency type."""  
    