import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_query as shared_preview_understand_assistant_query


CREATE_UNDERSTAND_QUERY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateUnderstandQueryPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUnderstandQueryCreateUnderstandQueryRequest:
    language: str = dataclasses.field(metadata={'form': { 'field_name': 'Language' }})
    query: str = dataclasses.field(metadata={'form': { 'field_name': 'Query' }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Field' }})
    model_build: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ModelBuild' }})
    tasks: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Tasks' }})
    

@dataclasses.dataclass
class CreateUnderstandQuerySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUnderstandQueryRequest:
    path_params: CreateUnderstandQueryPathParams = dataclasses.field()
    security: CreateUnderstandQuerySecurity = dataclasses.field()
    request: Optional[CreateUnderstandQueryCreateUnderstandQueryRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUnderstandQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_query: Optional[shared_preview_understand_assistant_query.PreviewUnderstandAssistantQuery] = dataclasses.field(default=None)
    
