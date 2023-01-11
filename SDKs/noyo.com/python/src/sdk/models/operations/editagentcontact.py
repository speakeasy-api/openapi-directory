import dataclasses
from typing import Optional
from ..shared import agentcontacteditrequest as shared_agentcontacteditrequest
from ..shared import agentcontactresult as shared_agentcontactresult


@dataclasses.dataclass
class EditAgentContactPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    contact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contact_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditAgentContactRequest:
    path_params: EditAgentContactPathParams = dataclasses.field()
    request: shared_agentcontacteditrequest.AgentContactEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditAgentContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_contact_result: Optional[shared_agentcontactresult.AgentContactResult] = dataclasses.field(default=None)
    
