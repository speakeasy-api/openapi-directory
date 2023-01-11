import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_query as shared_preview_understand_assistant_query


UPDATE_UNDERSTAND_QUERY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateUnderstandQueryPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUnderstandQueryUpdateUnderstandQueryRequest:
    sample_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SampleSid' }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateUnderstandQuerySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUnderstandQueryRequest:
    path_params: UpdateUnderstandQueryPathParams = dataclasses.field()
    security: UpdateUnderstandQuerySecurity = dataclasses.field()
    request: Optional[UpdateUnderstandQueryUpdateUnderstandQueryRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUnderstandQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_query: Optional[shared_preview_understand_assistant_query.PreviewUnderstandAssistantQuery] = dataclasses.field(default=None)
    
