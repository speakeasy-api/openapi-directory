import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agentinfo as shared_agentinfo
from ..shared import agentmetadata as shared_agentmetadata


@dataclass_json
@dataclasses.dataclass
class ReportAgentStateRequest:
    r"""ReportAgentStateRequest
    Request to report agent's state. The Request itself implies the agent is healthy.
    """
    
    agent_info: Optional[shared_agentinfo.AgentInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentInfo') }})
    metadata: Optional[shared_agentmetadata.AgentMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
