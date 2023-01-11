import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveAgentPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveAgentSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RemoveAgentRequest:
    path_params: RemoveAgentPathParams = dataclasses.field()
    security: RemoveAgentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveAgentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
