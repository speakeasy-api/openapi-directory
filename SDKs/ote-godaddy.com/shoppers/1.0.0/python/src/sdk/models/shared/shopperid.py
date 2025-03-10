"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ShopperID:
    r"""Request was successful"""
    
    shopper_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shopperId') }})  
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('customerId'), 'exclude': lambda f: f is None }})
    r"""Identifier for the Customer record associated with this Shopper record. This is an alternate identifier that some systems use to identify an individual shopper record"""  
    