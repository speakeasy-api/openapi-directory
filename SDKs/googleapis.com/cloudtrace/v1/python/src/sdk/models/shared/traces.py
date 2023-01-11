import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trace as shared_trace


@dataclass_json
@dataclasses.dataclass
class Traces:
    r"""Traces
    List of new or updated traces.
    """
    
    traces: Optional[list[shared_trace.Trace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traces') }})
    
