import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import agent as shared_agent


@dataclasses.dataclass
class GetAgentPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAgentSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAgentRequest:
    path_params: GetAgentPathParams = dataclasses.field()
    security: GetAgentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent: Optional[shared_agent.Agent] = dataclasses.field(default=None)
    
