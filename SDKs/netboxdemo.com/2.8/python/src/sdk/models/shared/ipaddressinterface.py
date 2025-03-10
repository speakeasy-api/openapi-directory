"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import nesteddevice as shared_nesteddevice
from ..shared import nestedvirtualmachine as shared_nestedvirtualmachine
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class IPAddressInterface:
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})  
    device: Optional[shared_nesteddevice.NestedDevice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('device'), 'exclude': lambda f: f is None }})  
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})  
    virtual_machine: Optional[shared_nestedvirtualmachine.NestedVirtualMachine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('virtual_machine'), 'exclude': lambda f: f is None }})  
    