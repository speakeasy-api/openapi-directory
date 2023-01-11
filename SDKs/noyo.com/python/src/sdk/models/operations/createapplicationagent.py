import dataclasses
from typing import Optional
from ..shared import agentcreaterequest as shared_agentcreaterequest
from ..shared import agentresult as shared_agentresult


@dataclasses.dataclass
class CreateApplicationAgentPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateApplicationAgentRequest:
    path_params: CreateApplicationAgentPathParams = dataclasses.field()
    request: shared_agentcreaterequest.AgentCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateApplicationAgentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_result: Optional[shared_agentresult.AgentResult] = dataclasses.field(default=None)
    
