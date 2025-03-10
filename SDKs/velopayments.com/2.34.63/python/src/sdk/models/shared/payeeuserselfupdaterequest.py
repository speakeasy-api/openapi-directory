"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PayeeUserSelfUpdateRequest:
    r"""<p>All properties are optional</p>
    <p>Only provided properties will be updated</p>
    <p>Use null to null out a property that is allowed to be nullable</p>
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email'), 'exclude': lambda f: f is None }})
    r"""the email address of the user"""  
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('firstName'), 'exclude': lambda f: f is None }})  
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('lastName'), 'exclude': lambda f: f is None }})  
    primary_contact_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('primaryContactNumber'), 'exclude': lambda f: f is None }})
    r"""The main contact number for the user"""  
    secondary_contact_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('secondaryContactNumber'), 'exclude': lambda f: f is None }})
    r"""The secondary contact number for the user"""  
    sms_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('smsNumber'), 'exclude': lambda f: f is None }})
    r"""The phone number of a device that the user can receive sms messages on"""  
    