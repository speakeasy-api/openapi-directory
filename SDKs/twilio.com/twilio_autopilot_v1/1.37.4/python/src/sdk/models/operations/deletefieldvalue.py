import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_FIELD_VALUE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class DeleteFieldValuePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFieldValueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteFieldValueRequest:
    path_params: DeleteFieldValuePathParams = dataclasses.field()
    security: DeleteFieldValueSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteFieldValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
