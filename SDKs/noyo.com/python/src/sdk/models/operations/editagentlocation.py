import dataclasses
from typing import Optional
from ..shared import agentlocationeditrequest as shared_agentlocationeditrequest
from ..shared import agentlocationresult as shared_agentlocationresult


@dataclasses.dataclass
class EditAgentLocationPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditAgentLocationRequest:
    path_params: EditAgentLocationPathParams = dataclasses.field()
    request: shared_agentlocationeditrequest.AgentLocationEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditAgentLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_location_result: Optional[shared_agentlocationresult.AgentLocationResult] = dataclasses.field(default=None)
    
