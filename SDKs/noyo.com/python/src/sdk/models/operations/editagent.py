import dataclasses
from typing import Optional
from ..shared import agenteditrequest as shared_agenteditrequest
from ..shared import agentresult as shared_agentresult


@dataclasses.dataclass
class EditAgentPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditAgentRequest:
    path_params: EditAgentPathParams = dataclasses.field()
    request: shared_agenteditrequest.AgentEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditAgentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_result: Optional[shared_agentresult.AgentResult] = dataclasses.field(default=None)
    
