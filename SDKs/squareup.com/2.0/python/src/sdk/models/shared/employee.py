"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Employee:
    r"""An employee object that is used by the external API."""
    
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_at'), 'exclude': lambda f: f is None }})
    r"""A read-only timestamp in RFC 3339 format."""  
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email'), 'exclude': lambda f: f is None }})
    r"""The employee's email address"""  
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('first_name'), 'exclude': lambda f: f is None }})
    r"""The employee's first name."""  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""UUID for this object."""  
    is_owner: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_owner'), 'exclude': lambda f: f is None }})
    r"""Whether this employee is the owner of the merchant. Each merchant
    has one owner employee, and that employee has full authority over
    the account.
    """  
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('last_name'), 'exclude': lambda f: f is None }})
    r"""The employee's last name."""  
    location_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('location_ids'), 'exclude': lambda f: f is None }})
    r"""A list of location IDs where this employee has access to."""  
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('phone_number'), 'exclude': lambda f: f is None }})
    r"""The employee's phone number in E.164 format, i.e. \\"+12125554250\\" """  
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})
    r"""Specifies the status of the employees being fetched."""  
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updated_at'), 'exclude': lambda f: f is None }})
    r"""A read-only timestamp in RFC 3339 format."""  
    