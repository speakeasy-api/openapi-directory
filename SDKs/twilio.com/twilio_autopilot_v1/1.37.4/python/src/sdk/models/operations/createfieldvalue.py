import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_field_type_field_value as shared_autopilot_v1_assistant_field_type_field_value


CREATE_FIELD_VALUE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class CreateFieldValuePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFieldValueCreateFieldValueRequest:
    language: str = dataclasses.field(metadata={'form': { 'field_name': 'Language' }})
    value: str = dataclasses.field(metadata={'form': { 'field_name': 'Value' }})
    synonym_of: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SynonymOf' }})
    

@dataclasses.dataclass
class CreateFieldValueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateFieldValueRequest:
    path_params: CreateFieldValuePathParams = dataclasses.field()
    security: CreateFieldValueSecurity = dataclasses.field()
    request: Optional[CreateFieldValueCreateFieldValueRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateFieldValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_field_type_field_value: Optional[shared_autopilot_v1_assistant_field_type_field_value.AutopilotV1AssistantFieldTypeFieldValue] = dataclasses.field(default=None)
    
