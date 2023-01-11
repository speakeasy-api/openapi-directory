import dataclasses
from typing import Optional
from ..shared import agentcontactcreaterequest as shared_agentcontactcreaterequest
from ..shared import agentcontactresult as shared_agentcontactresult


@dataclasses.dataclass
class CreateAgentContactPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAgentContactRequest:
    path_params: CreateAgentContactPathParams = dataclasses.field()
    request: shared_agentcontactcreaterequest.AgentContactCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAgentContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_contact_result: Optional[shared_agentcontactresult.AgentContactResult] = dataclasses.field(default=None)
    
