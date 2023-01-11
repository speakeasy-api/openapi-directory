import dataclasses
from typing import Optional
from ..shared import agentlocationcreaterequest as shared_agentlocationcreaterequest
from ..shared import agentlocationresult as shared_agentlocationresult


@dataclasses.dataclass
class CreateAgentLocationPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAgentLocationRequest:
    path_params: CreateAgentLocationPathParams = dataclasses.field()
    request: shared_agentlocationcreaterequest.AgentLocationCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAgentLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_location_result: Optional[shared_agentlocationresult.AgentLocationResult] = dataclasses.field(default=None)
    
