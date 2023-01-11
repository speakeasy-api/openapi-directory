import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_query as shared_preview_understand_assistant_query


FETCH_UNDERSTAND_QUERY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchUnderstandQueryPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUnderstandQuerySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUnderstandQueryRequest:
    path_params: FetchUnderstandQueryPathParams = dataclasses.field()
    security: FetchUnderstandQuerySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUnderstandQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_query: Optional[shared_preview_understand_assistant_query.PreviewUnderstandAssistantQuery] = dataclasses.field(default=None)
    
