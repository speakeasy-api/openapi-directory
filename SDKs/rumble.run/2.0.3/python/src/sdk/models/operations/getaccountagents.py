import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import agent as shared_agent


@dataclasses.dataclass
class GetAccountAgentsQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountAgentsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountAgentsRequest:
    query_params: GetAccountAgentsQueryParams = dataclasses.field()
    security: GetAccountAgentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountAgentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agents: Optional[list[shared_agent.Agent]] = dataclasses.field(default=None)
    
