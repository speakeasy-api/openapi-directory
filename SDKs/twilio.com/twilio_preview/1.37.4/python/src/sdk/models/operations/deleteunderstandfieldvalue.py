import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_UNDERSTAND_FIELD_VALUE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteUnderstandFieldValuePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUnderstandFieldValueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteUnderstandFieldValueRequest:
    path_params: DeleteUnderstandFieldValuePathParams = dataclasses.field()
    security: DeleteUnderstandFieldValueSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteUnderstandFieldValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
