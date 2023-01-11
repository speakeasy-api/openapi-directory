import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agenttask as shared_agenttask


@dataclass_json
@dataclasses.dataclass
class ReportAgentStateResponse:
    r"""ReportAgentStateResponse
    Response to ReportAgentStateRequest.
    """
    
    tasks: Optional[list[shared_agenttask.AgentTask]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    
