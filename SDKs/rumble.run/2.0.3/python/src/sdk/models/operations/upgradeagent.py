import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class UpgradeAgentPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpgradeAgentSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpgradeAgentRequest:
    path_params: UpgradeAgentPathParams = dataclasses.field()
    security: UpgradeAgentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpgradeAgentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
