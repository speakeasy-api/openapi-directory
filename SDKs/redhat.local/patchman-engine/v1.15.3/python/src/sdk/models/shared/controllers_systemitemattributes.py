"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ControllersSystemItemAttributes:
    
    created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created'), 'exclude': lambda f: f is None }})  
    culled_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('culled_timestamp'), 'exclude': lambda f: f is None }})  
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('display_name'), 'exclude': lambda f: f is None }})  
    insights_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('insights_id'), 'exclude': lambda f: f is None }})  
    last_evaluation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('last_evaluation'), 'exclude': lambda f: f is None }})  
    last_upload: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('last_upload'), 'exclude': lambda f: f is None }})  
    os_major: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('os_major'), 'exclude': lambda f: f is None }})  
    os_minor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('os_minor'), 'exclude': lambda f: f is None }})  
    os_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('os_name'), 'exclude': lambda f: f is None }})  
    other_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('other_count'), 'exclude': lambda f: f is None }})  
    packages_installed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('packages_installed'), 'exclude': lambda f: f is None }})  
    packages_updatable: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('packages_updatable'), 'exclude': lambda f: f is None }})  
    rhba_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rhba_count'), 'exclude': lambda f: f is None }})  
    rhea_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rhea_count'), 'exclude': lambda f: f is None }})  
    rhsa_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rhsa_count'), 'exclude': lambda f: f is None }})  
    rhsm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rhsm'), 'exclude': lambda f: f is None }})  
    stale: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('stale'), 'exclude': lambda f: f is None }})  
    stale_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('stale_timestamp'), 'exclude': lambda f: f is None }})  
    stale_warning_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('stale_warning_timestamp'), 'exclude': lambda f: f is None }})  
    third_party: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('third_party'), 'exclude': lambda f: f is None }})  
    