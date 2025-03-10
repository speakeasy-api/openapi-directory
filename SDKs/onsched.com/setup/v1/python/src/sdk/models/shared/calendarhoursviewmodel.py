"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import calendarhourviewmodel as shared_calendarhourviewmodel
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CalendarHoursViewModel:
    
    fri: Optional[shared_calendarhourviewmodel.CalendarHourViewModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fri'), 'exclude': lambda f: f is None }})  
    mon: Optional[shared_calendarhourviewmodel.CalendarHourViewModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('mon'), 'exclude': lambda f: f is None }})  
    sat: Optional[shared_calendarhourviewmodel.CalendarHourViewModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sat'), 'exclude': lambda f: f is None }})  
    sun: Optional[shared_calendarhourviewmodel.CalendarHourViewModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sun'), 'exclude': lambda f: f is None }})  
    thu: Optional[shared_calendarhourviewmodel.CalendarHourViewModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('thu'), 'exclude': lambda f: f is None }})  
    tue: Optional[shared_calendarhourviewmodel.CalendarHourViewModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tue'), 'exclude': lambda f: f is None }})  
    wed: Optional[shared_calendarhourviewmodel.CalendarHourViewModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('wed'), 'exclude': lambda f: f is None }})  
    