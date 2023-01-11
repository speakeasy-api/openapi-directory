import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v2_flow_flow_revision as shared_studio_v2_flow_flow_revision


FETCH_FLOW_REVISION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchFlowRevisionPathParams:
    revision: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Revision', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFlowRevisionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchFlowRevisionRequest:
    path_params: FetchFlowRevisionPathParams = dataclasses.field()
    security: FetchFlowRevisionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchFlowRevisionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow_flow_revision: Optional[shared_studio_v2_flow_flow_revision.StudioV2FlowFlowRevision] = dataclasses.field(default=None)
    
