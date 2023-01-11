import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_field_type_field_value as shared_autopilot_v1_assistant_field_type_field_value


FETCH_FIELD_VALUE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class FetchFieldValuePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFieldValueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchFieldValueRequest:
    path_params: FetchFieldValuePathParams = dataclasses.field()
    security: FetchFieldValueSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchFieldValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_field_type_field_value: Optional[shared_autopilot_v1_assistant_field_type_field_value.AutopilotV1AssistantFieldTypeFieldValue] = dataclasses.field(default=None)
    
