"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import nestedinterface as shared_nestedinterface
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InterfaceConnectionConnectionStatus:
    
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('label') }})  
    value: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('value') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InterfaceConnection:
    
    interface_a: shared_nestedinterface.NestedInterface = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('interface_a') }})  
    interface_b: shared_nestedinterface.NestedInterface = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('interface_b') }})  
    connection_status: Optional[InterfaceConnectionConnectionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('connection_status'), 'exclude': lambda f: f is None }})  
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})  
    