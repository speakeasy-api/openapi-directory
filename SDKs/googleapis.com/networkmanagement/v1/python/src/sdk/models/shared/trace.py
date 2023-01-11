import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointinfo as shared_endpointinfo
from ..shared import step as shared_step


@dataclass_json
@dataclasses.dataclass
class Trace:
    r"""Trace
    Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ```
    """
    
    endpoint_info: Optional[shared_endpointinfo.EndpointInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointInfo') }})
    steps: Optional[list[shared_step.Step]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
