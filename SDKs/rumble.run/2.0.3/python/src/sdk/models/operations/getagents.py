import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import agent as shared_agent


@dataclasses.dataclass
class GetAgentsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAgentsRequest:
    security: GetAgentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agents: Optional[list[shared_agent.Agent]] = dataclasses.field(default=None)
    
