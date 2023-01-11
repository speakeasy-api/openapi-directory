import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tracespan as shared_tracespan


@dataclass_json
@dataclasses.dataclass
class Trace:
    r"""Trace
    A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
    """
    
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    spans: Optional[list[shared_tracespan.TraceSpan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spans') }})
    trace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceId') }})
    
