"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats:
    
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('endTime'), 'exclude': lambda f: f is None }})
    r"""The end time of the event execution for current attempt."""  
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('startTime'), 'exclude': lambda f: f is None }})
    r"""The start time of the event execution for current attempt. This could be in the future if it's been scheduled."""  
    