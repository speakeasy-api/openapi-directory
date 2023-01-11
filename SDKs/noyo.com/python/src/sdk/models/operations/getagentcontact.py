import dataclasses
from typing import Optional
from ..shared import agentcontactresult as shared_agentcontactresult


@dataclasses.dataclass
class GetAgentContactPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    contact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contact_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAgentContactRequest:
    path_params: GetAgentContactPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_contact_result: Optional[shared_agentcontactresult.AgentContactResult] = dataclasses.field(default=None)
    
