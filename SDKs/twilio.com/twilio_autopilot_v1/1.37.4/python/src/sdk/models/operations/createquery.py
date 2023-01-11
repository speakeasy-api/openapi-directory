import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_query as shared_autopilot_v1_assistant_query


CREATE_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class CreateQueryPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateQueryCreateQueryRequest:
    language: str = dataclasses.field(metadata={'form': { 'field_name': 'Language' }})
    query: str = dataclasses.field(metadata={'form': { 'field_name': 'Query' }})
    model_build: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ModelBuild' }})
    tasks: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Tasks' }})
    

@dataclasses.dataclass
class CreateQuerySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateQueryRequest:
    path_params: CreateQueryPathParams = dataclasses.field()
    security: CreateQuerySecurity = dataclasses.field()
    request: Optional[CreateQueryCreateQueryRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_query: Optional[shared_autopilot_v1_assistant_query.AutopilotV1AssistantQuery] = dataclasses.field(default=None)
    
