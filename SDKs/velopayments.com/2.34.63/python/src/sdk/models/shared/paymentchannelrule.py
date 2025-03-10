"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PaymentChannelRule:
    r"""Rules that will get applied when creating or updating a payment channel for the given country"""
    
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('displayName') }})
    r"""User friendly name"""  
    element: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('element') }})
    r"""<p>the rule element</p>
    <p>will match a given element name for a payment channel configuration
    """  
    required: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required') }})
    r"""is this element required"""  
    validation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('validation') }})
    r"""a regex to validate the element data"""  
    display_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('displayOrder'), 'exclude': lambda f: f is None }})  
    max_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('maxLength'), 'exclude': lambda f: f is None }})
    r"""maximum length of the element data"""  
    min_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('minLength'), 'exclude': lambda f: f is None }})
    r"""mininum length of the element data"""  
    