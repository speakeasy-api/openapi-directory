import dataclasses
from typing import Optional
from ..shared import agentlocationresult as shared_agentlocationresult


@dataclasses.dataclass
class GetAgentLocationPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAgentLocationRequest:
    path_params: GetAgentLocationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_location_result: Optional[shared_agentlocationresult.AgentLocationResult] = dataclasses.field(default=None)
    
