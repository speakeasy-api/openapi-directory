"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PreviewSyncServiceSyncMapSyncMapPermission:
    r"""OK"""
    
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('account_sid'), 'exclude': lambda f: f is None }})
    r"""The unique SID identifier of the Twilio Account."""  
    identity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('identity'), 'exclude': lambda f: f is None }})
    r"""Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer."""  
    manage: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('manage'), 'exclude': lambda f: f is None }})
    r"""Boolean flag specifying whether the identity can delete the Sync Map."""  
    map_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('map_sid'), 'exclude': lambda f: f is None }})
    r"""The unique SID identifier of the Sync Map to which the Permission applies."""  
    read: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('read'), 'exclude': lambda f: f is None }})
    r"""Boolean flag specifying whether the identity can read the Sync Map and its Items."""  
    service_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('service_sid'), 'exclude': lambda f: f is None }})
    r"""The unique SID identifier of the Sync Service Instance."""  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})
    r"""Contains an absolute URL for this Sync Map Permission."""  
    write: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('write'), 'exclude': lambda f: f is None }})
    r"""Boolean flag specifying whether the identity can create, update and delete Items of the Sync Map."""  
    