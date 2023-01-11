import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import agentsiteid as shared_agentsiteid
from ..shared import agent as shared_agent


@dataclasses.dataclass
class UpdateAgentSitePathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAgentSiteSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateAgentSiteRequest:
    path_params: UpdateAgentSitePathParams = dataclasses.field()
    request: shared_agentsiteid.AgentSiteID = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAgentSiteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateAgentSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent: Optional[shared_agent.Agent] = dataclasses.field(default=None)
    
