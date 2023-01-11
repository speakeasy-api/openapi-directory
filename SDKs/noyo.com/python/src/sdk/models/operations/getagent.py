import dataclasses
from typing import Optional
from ..shared import agentresult as shared_agentresult


@dataclasses.dataclass
class GetAgentPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAgentRequest:
    path_params: GetAgentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_result: Optional[shared_agentresult.AgentResult] = dataclasses.field(default=None)
    
