"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TimeOfDay:
    r"""Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`."""
    
    hours: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('hours'), 'exclude': lambda f: f is None }})
    r"""Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value \\"24:00:00\\" for scenarios like business closing time."""  
    minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('minutes'), 'exclude': lambda f: f is None }})
    r"""Minutes of hour of day. Must be from 0 to 59."""  
    nanos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nanos'), 'exclude': lambda f: f is None }})
    r"""Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999."""  
    seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('seconds'), 'exclude': lambda f: f is None }})
    r"""Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds."""  
    